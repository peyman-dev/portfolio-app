import Container from '@/app/_modules/common/container'
import React from 'react'
import Headline from './modules/headline'
import ClientsCompanies from './modules/clients'

const Clients = () => {
  return (
    <Container className='my-[160px] flex lg:flex-row flex-col gap-y-20 lg:*:w-1/2'>
        <Headline />
        <ClientsCompanies />
    </Container>
  )
}

export default Clients