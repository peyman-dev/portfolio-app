import { Button } from '@radix-ui/themes'
import React from 'react'

const Actions = () => {
  return (
    <div className='flex items-center gap-5 mt-12'>
      <Button className='bg-black! hover:bg-zinc-800! h-12! px-3!'>
        Talk to me
      </Button>
      
    </div>
  )
}

export default Actions