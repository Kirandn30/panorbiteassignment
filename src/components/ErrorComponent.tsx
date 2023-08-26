import React from 'react'
import { Button } from './Button'

export const ErrorComponent = () => {
  return (
      <div className='flex justify-center items-center h-screen'>
          <div className='space-y-5 text-center'>
              <h1 className='text-3xl text-gray-400 font-bold'>Somthing went wrong try again</h1>
              <Button
                  text='Refresh'
                  onClick={() => location.reload()}
              />
          </div>
      </div>
  )
}
