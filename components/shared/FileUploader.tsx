'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'

type FileUploaderProps = {
  onFieldChange: (url: string) => void    // callback to parent component
  imageUrl: string                        
  setFiles: Dispatch<SetStateAction<File[]>>   // callback to parent component
}

export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {

  // use callback to prevent infinite loop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
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
      className="flex-center bg-dark-3 flex h-52 cursor-pointer flex-col overflow-hidden rounded-xl bg-primary">
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
          <Button type="button" className="text-2xl ">
            +
          </Button>
        </div>
      )}
    </div>
  )
}
