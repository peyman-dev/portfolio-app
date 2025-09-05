import { Button } from '@radix-ui/themes'
import React from 'react'

const ContactMeButton = () => {
  return (
    <div>
        <Button  variant='solid' radius='large'  className='cursor-pointer! bg-black! hover:bg-zinc-900!'>
            Contact me
        </Button>
    </div>
  )
}

export default ContactMeButton