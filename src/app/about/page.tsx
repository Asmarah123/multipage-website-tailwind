import React from 'react'

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{backgroundImage: "url('/about.jpg')"}}>
      <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About</h2>
        <p>Welcome to Beauty World, your ultimate destination for all things beauty! We are passionate about helping you look and feel your best by providing expert tips, the latest trends, and high-quality products tailored to your unique style. From skincare and makeup to haircare and wellness, Beauty World is here to inspire confidence and celebrate your natural beauty. Let us be your guide on this journey to self-care and self-expression!</p>

      </div>
    </section>
  )
}

export default About
