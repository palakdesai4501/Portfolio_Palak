import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/16/solid'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'></h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need. {" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>

        <div>
          <PhoneIcon />
        </div>
      </div>
    </div>
  )
}

export default ContactMe