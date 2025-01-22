"use client"
import { motion } from "framer-motion"
export default function about() {
  return (
    <div className="  md:mx-[100px] xl:mx-[150px] bg-stone-300">

      <section className="bg-cover bg-center h-auto flex items-center mx-[50px] sm:py-10 sm:mx-[50px] md:mx-[100px] xl:mr-[400px] justify-center text-white bg-stone-300">
        <div className="text-center text-gray-800">
          <h1 className="text-5xl font-bold  text-left mb-4">About Us</h1>
        <div className="text-lg text-justify ">
        <motion.div
              // animate={{ x: 0, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 500, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                width: "auto",
                height: "auto",
                backgroundColor: "auto",
              }}
            >Welcome to Artic Fox Consulting, your trusted partner in business architecture design and transformation. At Artic Fox, we specialize in helping businesses navigate the complexities of today&apos;s dynamic business environment through strategic architecture solutions.</motion.div>
            <br />
            <br />
           <i> Our Approach:</i>
            <br />
            <br />
            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 500, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                width: "auto",
                height: "auto",
                backgroundColor: "auto",
              }}
            > At Artic Fox Consulting, we understand that every business is unique, with its own set of challenges, opportunities, and goals. That&apos;s why we take a tailored approach to each client engagement, working closely with you to understand your specific needs and objectives.</motion.div>
            <br />
            <br />
           <i> Our Services:</i>
            <br />
            <br />
            </div>
            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 500, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                width: "auto",
                height: "auto",
                backgroundColor: "auto",
              }}
            >
            <ul className=" list-disc text-lg text-justify md:mx-10">
              <li><b>Business Architecture Design:</b> We specialize in designing robust and scalable business architectures that align with your strategic goals and drive organizational performance. From defining business capabilities to mapping out processes and systems, we help you build a solid foundation for growth and innovation.</li>
              <li><b> Operating Model Design: </b>Our team of experts will work with you to design an operating model that optimizes your business processes, resources, and capabilities to deliver value to your customers and stakeholders.</li>
              <li><b>Business Process Architecture: </b>We&apos;ll help you streamline your business processes, identify areas for improvement, and implement best practices to enhance efficiency, productivity, and agility across your organization.</li>
              <li> <b>Capability Assessments: </b>Our comprehensive capability assessments provide valuable insights into your organization&apos;s strengths, weaknesses, and opportunities for improvement. We&apos;ll help you identify areas where you can enhance your capabilities to achieve your strategic objectives.</li>
            </ul>
           </motion.div>
            
          
            <div className="text-lg text-justify">
            
            <br/>
            <i>Our Commitment:</i>
            <br />
            <br/>
            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 500, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                width: "auto",
                height: "auto",
                backgroundColor: "auto",
              }}
            > At Delta Dynamics Consulting, we are committed to delivering exceptional results and driving positive change for our clients. With our expertise, experience, and collaborative approach, we&apos;ll help you transform your business architecture and unlock new opportunities for growth and success.</motion.div>
          </div>
         
        </div>
      </section>

      <section className="p-8 text-center bg-gray-500">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">We are a dedicated team passionate about providing quality products and exceptional service to our customers.</p>
        <p className="text-lg">Our mission is to innovate and deliver solutions that enhance everyday life.</p>
      </section>

      <section className="p-8 bg-gray-500" >
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
             
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{ x: 0 , opacity:1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 5 }}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "auto",
                  }}
                >
          <div className="border rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-900">We prioritize quality in every product we create.</p>
          </div>
          </motion.div>
          <motion.div
                  // animate={{ x: 0, opacity: 1 }}
                  initial={{ y: -300, opacity: 0 }}
                  whileInView={{ y: 0 , opacity:1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 5 }}
                  whileHover={{ scale: 1.1 }}

                  style={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "auto",
                  }}
                >
          <div className="border rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-900">Constantly innovating to meet customer needs.</p>
          </div>
          </motion.div>
          <motion.div
                  // animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{ x: 0 , opacity:1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 5 }}
                  whileHover={{ scale: 1.1 }}
                                                            
                  style={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "auto",
                  }}
                >
          <div className="border rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
            <p className="text-gray-900">Putting our customers at the center of everything we do.</p>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}