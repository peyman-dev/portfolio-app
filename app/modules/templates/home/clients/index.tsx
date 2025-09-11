import Container from '@/app/modules/common/container'
import React from 'react'
import Headline from './modules/headline'
import ClientsCompanies from './modules/clients'

const Clients = () => {
  return (
    <Container className='my-[160px] flex *:w-1/2'>
        <Headline />
        <ClientsCompanies />
    </Container>
  )
}

export default Clients