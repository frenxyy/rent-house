import Footer from '@/component/footer'
import Hero from '@/component/hero'
import Navbar from '@/component/navbar'
import Pertanyaan from '@/component/pertanyaan'
import Product from '@/component/product'
import Service from '@/component/service'
import React from 'react'

const page = () => {
  return (
    <>
      <section>
        <Navbar />
          <Hero />
          <Service />
          <Product />
          <Pertanyaan />
        <Footer />
      </section>
    </>
  )
}

export default page