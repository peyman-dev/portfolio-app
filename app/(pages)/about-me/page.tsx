import ContainerWithParent from '@/app/modules/common/container/container-with-parent'
import Clients from '@/app/modules/templates/about-me/clients'
import HeroSection from '@/app/modules/templates/about-me/hero-section'
import MyExperiences from '@/app/modules/templates/about-me/my-experiences'
import MyValues from '@/app/modules/templates/about-me/my-values'
import CTASection from '@/app/modules/templates/home/cta-section'
import HaveAProject from '@/app/modules/templates/home/have-a-project'
import React from 'react'

const AboutMePage = () => {
  return (
    <>
      <HeroSection />
      <ContainerWithParent>
        <MyValues />
      </ContainerWithParent>
      <Clients />
      <MyExperiences />
      <CTASection />
      <HaveAProject />
    </>
  )
}

export default AboutMePage