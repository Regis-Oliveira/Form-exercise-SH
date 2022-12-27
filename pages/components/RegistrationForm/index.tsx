import React, { useEffect } from 'react';
import Link from 'next/link';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { normalizePhoneNumber } from '../../../utils/masks';

const claimUserFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Name required' })
    .regex(/^([a-z])/i, { message: 'Only letters allowed'}),
  lastName: z.string()
    .min(3, { message: 'Last name required' })
    .regex(/^([a-z]+)/i, { message: 'Only letters allowed'}),
  phone: z.string()
    .min(15, { message: 'Phone is required' }),
    email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: 'Must be a valid email' })
})

type ClaimUserFormData = z.infer<typeof claimUserFormSchema>;

export default function RegistrationForm() {
  const { 
    handleSubmit, 
    register,
    watch,
    setValue,
    reset,
    formState: { errors, isDirty, isValid } 
  } = useForm<ClaimUserFormData>({
    resolver: zodResolver(claimUserFormSchema)
  });

  const phoneValue = watch('phone');

  async function handleSubmitUserForm(data: ClaimUserFormData) {
    console.log("formData:", data);
    reset();
  }

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue))
  }, [phoneValue, setValue]);
  
  return (
    <div className='bg-gray-100 flex justify-center items-center flex-row mx-auto 
      h-full w-auto sm:min-h-[576px]'
    >
      <form 
        onSubmit={handleSubmit(handleSubmitUserForm)}
        className="flex flex-col justify-between w-80 h-full sm:min-w-[420px] md:mx-14 mx-6"
      >
        <span className='font-sans font-bold text-2xl my-6'>
          Registration
        </span>

        <span className='uppercase text-xs font-bold font-sans text-gray-900 mb-1'>
          First Name
        </span>
        <input
          className='input-form'
          type="text" 
          placeholder='Eg. John'
          {...register('firstName')}
        />
        {errors.firstName?.message && 
          <p className='text-sm font-sans text-red-600 mt-1'>
            {errors.firstName?.message}
          </p>
        }

        <span className='uppercase text-xs font-bold font-sans text-gray-900 mt-4 mb-1'>
          Last Name
        </span>
        <input
          className='input-form'
          type="text" 
          placeholder='Eg. Doe Silver'
          {...register('lastName')}
        />
        {errors.lastName?.message && 
          <p className='text-sm font-sans text-red-600 mt-1'>
            {errors.lastName?.message}
          </p>
        }

        <span className='uppercase text-xs font-bold font-sans text-gray-900 mt-4 mb-1'>
          Phone
        </span>
        <input
          className='input-form'
          type='tel' 
          placeholder='(00) 00000-0000'
          maxLength={15}
          inputMode='numeric'
          {...register('phone')}
        />
        {errors.phone?.message && 
          <p className='text-sm font-sans text-red-600 mt-1'>
            {errors.phone?.message}
          </p>
        }

        <span className='uppercase text-xs font-bold font-sans text-gray-900 mt-4 mb-1'>
          E-mail
        </span>
        <input
          className='input-form'
          type="text" 
          placeholder='johndoe@gmail.com' 
          {...register('email')}
        />
        {errors.email?.message && 
          <p className='text-sm font-sans text-red-600 mt-1'>
            {errors.email?.message}
          </p>
        }

        <div className='flex w-full justify-between my-6'>
          <Link 
            href='/'
            className='bg-gray-300 py-2 px-5 rounded w-28 text-base font-bold text-center text-gray-700 
            border border-gray-300 active:border-gray-500 active:bg-gray-100 focus:outline-gray-300
            hover:bg-gray-400 transition-colors'  
          >
            Go back
          </Link>
        
          <button
            type='submit'
            disabled={!isDirty || !isValid}
            className='bg-gray-500 py-2 px-5 rounded w-28 text-base font-bold 
              text-center text-white hover:cursor-pointer border border-gray-200
              active:border-gray-500 active:bg-gray-100 focus:outline-gray-500
              hover:bg-gray-600 transition-colors disabled:cursor-not-allowed 
              disabled:hover:bg-gray-500 disabled:opacity-40'
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  )
}