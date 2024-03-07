import Link from 'next/link'
import React from 'react'

const hero = () => {
  return (
    <>
        <section className='hero py-80 md:py-96 flex w-full items-center bg-center sm:bg-center bg-cover' style={{backgroundImage: 'url("../assets/header-1.jpg")'}} id='hero'>
            <div className='container flex flex-col justify-center items-center max-w-full text-center gap-2'>
                    <h4 className='font-sans text-base md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur.</h4>
                    <h1 className='font-sans text-4xl md:text-5xl lg:text-6xl font-bold w-10/12 md:w-9/12 lg:w-1/2 mb-6 text-secondary'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <Link href='' className="text-white text-base bg-info-500 hover:bg-info-700 focus:outline-none focus:ring-4 focus:ring-info-700 font-medium rounded-2xl px-8 py-3 text-center me-2 mb-2">
                        Contact Us
                    </Link>
            </div>
        </section>
    </>
  )
}

export default hero;