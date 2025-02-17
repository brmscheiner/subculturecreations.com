import { useState, useRef } from 'react';
import { clickableText } from '../../../constants/compositeStyles';

const readDataUrlFromFile = async (file: File) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
        resolve(reader.result as string)
    };
    reader.readAsDataURL(file);
})

const readArrayBufferFromFile = async (file: File,) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
        resolve(reader.result as ArrayBuffer)
    };
    reader.readAsArrayBuffer(file);
})

interface FileUploadProps {
    sendArrayBuffer: (b: ArrayBuffer) => void
    setImageUrl: React.Dispatch<React.SetStateAction<string | null>>
}
export const FileUpload = ({ sendArrayBuffer, setImageUrl }: FileUploadProps) => {
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
        setError(`Githubbify only supports images, uploaded file has type "${file.type}"`)
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

  const onReset = () => setSelectedFile(null)

  if (selectedFile) return (
    <div className='w-full flex justify-between align-center'>
        <p>
            {selectedFile.name}
    </p>
    <button className={clickableText} onClick={onReset}>
        Try another image
    </button>
    </div>
  )

  return (
    <button className={`w-full border-2 border-dashed rounded-lg h-64 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${error ? 'border-red-500' : ''}`} onClick={handleButtonClick}>
      <div
        className="relative p-8 h-full flex flex-col items-center justify-center"
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
          <span className={clickableText} role='button'>
            browse
          </span>
        </p>
        
        {error && (
          <p
            id="error-message"
            className="mt-2 text-sm text-red-500 max-w-md"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    </button>
  );
};
