import ContainerWithParent from '@/app/_modules/common/container/container-with-parent'
import Clients from '@/app/_modules/templates/about-me/clients'
import HeroSection from '@/app/_modules/templates/about-me/hero-section'
import MyExperiences from '@/app/_modules/templates/about-me/my-experiences'
import MyValues from '@/app/_modules/templates/about-me/my-values'
import CTASection from '@/app/_modules/templates/home/cta-section'
import HaveAProject from '@/app/_modules/templates/home/have-a-project'
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