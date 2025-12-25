import { NavLink } from "react-router-dom";
import bg from "../assets/bg.jpg"
import CategoryCard from "../components/CategoryCard"
import Heading from "../components/Heading"
import ServiceCard from "../components/ServiceCard";
import products from "../data/products"
import services from "../data/services"
import NavButton from "../components/NavButton";

export default function Home() {
  return (
    <div className='space-y-15 md:space-y-24'>
      <section className="hero-section h-full relative" >
        <div className="image h-96 md:h-screen ">
          <img className="w-full h-full object-cover " src={bg} alt="consulting image " />
        </div>
        <div className="text absolute top-0 left-0 bg-black/50 h-full w-full flex justify-center items-center">
          <div className="w-64 md:w-108 text-primary font-semibold text-4xl md:text-6xl">
            <span className="text-xl md:text-3xl text-white">We Are  A ______________ </span>
            Step to Success
          </div>
        </div>
      </section>

      <section className="product container mx-auto">
        <Heading subhead={"PRODUCT RANGE"} head={"OFFERING"} />
        <div className="categories py-7 flex flex-wrap justify-center gap-3">
          {products.map((product, index) => {
            return <CategoryCard key={index} {...product} />
          })}
        </div>
        <div className="button flex justify-center ">
          <NavButton link={'/products'} text={"Explore Products"} />
        </div>
      </section>

      <section className="services container mx-auto">
        <Heading subhead={"BRIGHT CITRINE GLOBAL"} head={"SERVICES"} />
        <div className="categories py-7 flex flex-wrap justify-center gap-3">
          {services.map((service, index) => {
            return <ServiceCard key={index} {...service} />
          })}
        </div>
        <div className="button flex justify-center">
          <NavButton link={'/services'} text={"Explore Service"} />
        </div>
      </section>

      <section className="contact py-10 md:py-20 space-y-3 bg-orange-100">
        <div className="text text-3xl text-center ">Come & Talk To Us</div>
        <div className="button flex justify-center">
          <NavButton link={'/contact'} text={"Contact Us"} />
        </div>
      </section>
    </div>
  )
}
