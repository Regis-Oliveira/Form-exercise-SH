import Image from 'next/image';
import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

import familyPhoto from '../../assets/family.jpg';
import Head from 'next/head';

export default function Register() {
  return (
    <>
      <Head>
        <title>Soap Health / Form Register</title>
      </Head>
      <div className='flex justify-center items-center flex-row mx-auto 
        h-screen w-screen bg-gray-100'
      >
        <div className='border border-gray-200 rounded flex justify-center items-center flex-row'>
          <Image
            src={familyPhoto}
            alt='Random image register form'
            priority
            className='w-auto h-auto max-w-sm rounded-l'
          />
          <RegistrationForm />
        </div>
      </div>
    </>
  )
}
