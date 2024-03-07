import Footer from '@/component/footer'
import { getProductById } from '@/component/libs'
import Navbar from '@/component/navbar'
import Image from 'next/image'


const page = async ({ params: { id } }) => {

  const product = getProductById(id);

  return (
    <>
      <Navbar />
      <section className='w-full py-56 bg-slate-800 gap-10'>
        <div className='container flex justify-between items-center gap-20'>
          <div className='w-full'>
            <Image src={product.img} width={650} height={450} className='rounded-md' />
          </div>
          <div className='w-full grid gap-6'>
            <h1 className='font-extrabold font-sans text-3xl'>{product.title}</h1>
            <p className='font-medium text-base w-9/12 text-slate-200'> {product.desk} </p>
            <div className='flex justify-start gap-12 items-center mt-4'>
              <h3 className='inline-block -mt-10 lg:-mt-4 rounded-lg border px-7 py-4 text-base font-medium transition border-primary bg-primary text-white'>Price : {product.price} </h3>
              <a href='https://instagram.com/mrdhkrnwn' target='_blank' className="inline-block -mt-10 lg:-mt-4 rounded-full border border-gray-3 px-7 py-4 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6">
                Contact Us
              </a>
            </div>
            
          </div>
        </div>
      </section>
        <section className="bg-slate-800 py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                  />
                  <SingleImage
                    href="#"
                    Alt="Brand Image"
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </>
  )
}

export default page;


const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};