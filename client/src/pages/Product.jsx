import Heading from '../components/Heading'
import IntroSection from '../components/IntroSection'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import { fadeUP, stagger } from "../utils/motions"
import { motion } from "motion/react"
import { useState } from 'react'
import Form from '../components/Form'

export default function Product() {
  const [showForm, setShowForm] = useState(false)

  const handleToogleForm = () => {
    setShowForm(prev => {
      (prev)
        ? document.body.classList.remove("stop-scroll")
        : document.body.classList.add("stop-scroll");

      return !prev
    })
  }

  const handleOnSubmit = (data) => {
    console.log(data)
    handleToogleForm()
  }

  return (
    <div className='relative'>
      <section className="hero-section" >
        <IntroSection text={"What We Sell"} />
      </section >

      <motion.section className="products container mx-auto pt-10"
        variants={fadeUP}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1 }}
      >
        <Heading subhead={"BRIGHT CITRINE GLOBAL"} head={"PRODUCTS"} type={"OUR"} />
        <motion.div variants={stagger} className="cards space-y-4 mt-10">
          {products.map((product, index) => {
            return <motion.div key={index}
              variants={fadeUP}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
            >
              <ProductCard {...product} handleToogleForm={handleToogleForm} />
            </motion.div>
          })}
        </motion.div>
      </motion.section >

      {showForm && <section className="form fixed top-0 left-0  right-0  w-full min-h-screen bg-white pt-10 md:pt-25 overflow-scroll">
        <Form text={"Request a quote"} handleOnSubmit={handleOnSubmit} handleToogleForm={handleToogleForm} />
      </section>}

    </div>


  )
}
