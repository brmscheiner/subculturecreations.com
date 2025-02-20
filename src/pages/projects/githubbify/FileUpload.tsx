import { useRef, useState } from 'react'
import { clickableText } from '../../../constants/compositeStyles'

const readDataUrlFromFile = async (file: File) =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(file)
  })

const readArrayBufferFromFile = async (file: File) =>
  new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsArrayBuffer(file)
  })

interface FileUploadProps {
  onDataUrl: (dataUrl: string) => void
  onArrayBuffer: (arrayBuffer: ArrayBuffer) => void
}
export const FileUpload = ({ onDataUrl, onArrayBuffer }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    validateAndSetFile(file)
  }

  const validateAndSetFile = async (file: File | null) => {
    setError('')
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB')
    }
    if (file.type === 'image/webp') {
      setError(`At this time .webp images are not supported, sorry!`)
    } else if (file.type.startsWith('image/')) {
      setSelectedFile(file)
      const imageUrl = await readDataUrlFromFile(file)
      onDataUrl(imageUrl as string)
      const arrayBuffer = await readArrayBufferFromFile(file)
      onArrayBuffer(arrayBuffer as ArrayBuffer)
    } else {
      setError(
        `Githubbify only supports images, uploaded file has type "${file.type}"`
      )
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    const file = event.dataTransfer.files[0]
    validateAndSetFile(file)
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleButtonClick()
    }
  }

  const onTryAnother = () => {
    setSelectedFile(null)
  }

  if (selectedFile)
    return (
      <div className='align-center flex w-full flex-wrap justify-between'>
        <p className='break-all'>{selectedFile.name}</p>
        <button className={clickableText} onClick={onTryAnother}>
          Try another image
        </button>
      </div>
    )

  return (
    <button
      className={`h-64 w-full rounded-lg border-2 border-dashed ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${error ? 'border-red-500' : ''}`}
      onClick={handleButtonClick}
    >
      <div
        className='relative flex h-full flex-col items-center justify-center p-8'
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        aria-label='Upload file'
      >
        <input
          ref={fileInputRef}
          type='file'
          className='hidden'
          onChange={handleFileSelect}
          aria-label='File input'
          aria-invalid={!!error}
          aria-errormessage={error ? 'error-message' : undefined}
        />

        <p className='text-sm text-gray-600'>
          Drag and drop an image here, or{' '}
          <span className={clickableText} role='button'>
            browse
          </span>
        </p>

        {error && (
          <p
            id='error-message'
            className='mt-2 max-w-md text-sm text-red-500'
            role='alert'
          >
            {error}
          </p>
        )}
      </div>
    </button>
  )
}
