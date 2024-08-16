import React from 'react'
import { MetadataOurTeacher } from '@/libs/metadata';
import NavBar from '@/components/LandingPage/NavBar';
import FooterPage from '@/components/LandingPage/Footer';

export const metadata = MetadataOurTeacher;

export default function OurTeachers({children}) {
  return (
    <>
      <NavBar />
      {children}
      <FooterPage />
    </>
  )
}
