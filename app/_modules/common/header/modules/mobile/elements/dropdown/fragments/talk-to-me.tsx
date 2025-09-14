"use client"
import { Button } from 'antd'
import { PhoneCall, Smile } from 'lucide-react'
import React from 'react'

const TalkToMe = () => {
  return (
    <Button className='w-full! bg-black! text-white! h-10! rounded-md! '>
      <PhoneCall className='size-4!'/>
      Talk to me
    </Button>
  )
}

export default TalkToMe