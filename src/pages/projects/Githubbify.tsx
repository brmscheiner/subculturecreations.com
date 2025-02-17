
import { useState, useRef } from 'react';
import Page from "../../components/Page";
import Card from "../../components/Card";

interface FileUploadProps {
    selectedFile: File | null
    setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}
const FileUpload = ({ selectedFile, setSelectedFile }: FileUploadProps) => {
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file: File | null) => {
    setError('');
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }
    setSelectedFile(file);
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
          Drag and drop your an image here, or{' '}
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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    return (
      <Page title="Githubbify">
        <Card>
          <h3 className="font-bold text-lg my-2">Githubbify</h3>
          <FileUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </Card>
      </Page>
    );
  }