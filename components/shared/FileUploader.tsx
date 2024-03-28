'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'
import { Add } from '@/public/assets/icons/Add'

type FileUploaderProps = {
  onFieldChange: (url: string) => void    // callback to parent component
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>   // callback to parent component
}

export function FileUploader({ imageUrl, onFieldChange, setFiles }: 
  FileUploaderProps) {
  
  // callback to set the file url
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0])) // create an URL
  }, [])

  // useDropzone hook for file upload
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  })

  // return the file uploader component
  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-[300px] md:h-[500px] cursor-pointer flex-col overflow-hidden rounded-xl bg-primary">
      
      {/* image input */}
      <input {...getInputProps()} className="cursor-pointer" />

      {/* display the image if it exists */}
      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        // display the file uploader if no image exists
        <div className="flex-center flex-col py-5bg-primary text-grey-500">
          <Add className='text-[40px]' />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button 
            variant="secondary"
            type="button" 
            className="rounded-full"
          >
            Select an image
          </Button>
        </div>
      )}
    </div>
  )
}
