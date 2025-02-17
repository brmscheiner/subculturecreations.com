
import { useEffect, useState, useRef } from 'react';
import Page from "../../components/Page";
import Card from "../../components/Card";

const readDataUrlFromFile = async (file: File) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
        console.log(0)
        resolve(reader.result as string)
    };
    reader.readAsDataURL(file);
})

const readArrayBufferFromFile = async (file: File,) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
        console.log(1)
        resolve(reader.result as ArrayBuffer)
    };
    reader.readAsArrayBuffer(file);
})

interface FileUploadProps {
    sendArrayBuffer: (b: ArrayBuffer) => void
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
}
const FileUpload = ({ sendArrayBuffer, setImageUrl }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    validateAndSetFile(file);
  };

  const validateAndSetFile = async (file: File | null) => {
    setError('');
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
    }
    if (file.type.startsWith('image/')) {
        setSelectedFile(file)
        const imageUrl = await readDataUrlFromFile(file)
        setImageUrl(imageUrl as string)
        const arrayBuffer = await readArrayBufferFromFile(file)
        sendArrayBuffer(arrayBuffer as ArrayBuffer)
    } else {
        setError(`Githubbify only supports images, uploaded file has type ${file.type}`)
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <button className="w-full max-w-md" onClick={handleButtonClick}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${error ? 'border-red-500' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        aria-label="Upload file"
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileSelect}
          aria-label="File input"
          aria-invalid={!!error}
          aria-errormessage={error ? 'error-message' : undefined}
        />
                
        <p className="text-sm text-gray-600">
          Drag and drop an image here, or{' '}
          <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
            browse
          </span>
        </p>
        
        {selectedFile && (
          <p className="mt-2 text-sm text-gray-500">
            Selected: {selectedFile.name}
          </p>
        )}
        
        {error && (
          <p
            id="error-message"
            className="mt-2 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    </button>
  );
};

export default function Githubbify() {
    const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("./jimp.worker.ts", import.meta.url), {
        type: "module",
    })
    workerRef.current = worker
    worker.addEventListener("message", (e) => {
        if (e.data.type === 'resized') setResizedImgUrl(e.data.base64);
        if (e.data.type === 'quantized') setQuantizedImgUrl(e.data.base64);
      });
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

    const [originalImgUrl, setOriginalImgUrl] = useState<string | null>(null);
    const [resizedImgUrl, setResizedImgUrl] = useState<string | null>(null);
    const [quantizedImgUrl, setQuantizedImgUrl] = useState<string | null>(null);
    const sendArrayBuffer = (buffer: ArrayBuffer) => {
        if (workerRef.current) workerRef.current.postMessage({ image: buffer })
    }
    return (
      <Page title="Githubbify">
        <Card>
          <h3 className="font-bold text-lg my-2">Githubbify</h3>
          <FileUpload sendArrayBuffer={sendArrayBuffer} setImageUrl={setOriginalImgUrl}  />
          {originalImgUrl && (
            <img className='w-full h-auto' src={originalImgUrl} alt='original uploaded image' />
          )}
          {resizedImgUrl && (
            <img style={{ imageRendering: 'pixelated' }} className='w-full h-auto' src={resizedImgUrl} alt='resized image' />
          )}
          {quantizedImgUrl && (
            <img style={{ imageRendering: 'pixelated' }} className='w-full h-auto' src={quantizedImgUrl} alt='resized image' />
          )}
        </Card>
      </Page>
    );
  }