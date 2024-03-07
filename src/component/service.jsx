import Image from 'next/image'
import React from 'react'
import Img1 from '../../public/assets/medal.png'
import Img2 from '../../public/assets/encrypted.png'
import Img3 from '../../public/assets/chat.png'
import Img4 from '../../public/assets/family.png'

const service = () => {

    const servicemenu = [
        {
            id: '1',
            img: Img1,
            title: 'Quality First',
            desk: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.',
        },
        {
            id: '2',
            img: Img3,
            title: 'Communication',
            desk: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.',
        },
        {
            id: '3',
            img: Img2,
            title: 'Realibility',
            desk: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.',
        },
        {
            id: '4',
            img: Img4,
            title: 'Families',
            desk: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.',
        },
    ]

    return (
        <>
            <section className='flex w-full justify-center items-center py-24 bg-dark' id='service'>
                <div className='container flex flex-col justify-center items-center max-w-full gap-16'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='font-extrabold text-3xl text-secondary'>What We Do?</h1>
                        <p className='font-medium text-center text-slate-300 text-lg w-9/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit dolorum dicta.</p>
                    </div>
                    <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {servicemenu.map((card) => {
                            return (
                                <div key={card.id} className="mb-10 py-6 flex flex-col justify-center items-center overflow-hidden rounded-lg duration-300 bg-dark-2  shadow-white shadow-card hover:bg-dark-3">
                                    <div className='bg-dark-3 p-5 rounded-full'>
                                        <Image src={card.img} alt="" width={75} height={75}/>
                                    </div>
                                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                        <h1 className="mb-4 block text-xl font-semibold text-dark dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                                            {card.title}
                                        </h1>
                                        <p className=" text-base leading-relaxed text-body-color dark:text-dark-6">
                                            {card.desk}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                                
                    </div>
                </div>
            </section>
        </>
    )
}

export default service;
