import Footer from '@/component/footer'
import Navbar from '@/component/navbar'
import React from 'react'
import {dataProduct} from '@/component/libs'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <Navbar />
        <section className='flex w-full justify-center items-center py-24 pt-48 bg-dark'>
                <div className='container flex flex-col justify-center items-center max-w-full gap-10'>
                    <div className='flex flex-col justify-center items-center gap-2 mb-6'>
                        <h1 className='font-extrabold text-3xl text-secondary'>What We Do?</h1>
                        <p className='font-medium text-center text-slate-300 text-lg w-9/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit dolorum dicta.</p>
                    </div>
                    <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {dataProduct.map((card) => {
                            return (
                            <div key={card.id} className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                                <div className='p-2 w-full h-fit'>
                                    <Image src={card.img} alt="" width={500} height={350} className='h-64'/>
                                </div>
                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <a href='/#' className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                            {card.title}
                                        </a>
                                    </h3>
                                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        {card.desksingkat}
                                    </p>
                                    <div className='flex justify-around items-center'>
                                        <h1 className='font-bold text-2xl'>{card.price}</h1>
                                        <Link href={`/product/${card.id}`} className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6">
                                            Lihat Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
      <Footer />
    </>
  )
}

export default page