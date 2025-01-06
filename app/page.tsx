import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="font-sans">
        <section className=" bg-center h-[500px] flex items-center justify-center text-white bg-[url('https://media4.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif?cid=6c09b952anqle7e646322vy3tf7092d9prq1wcb8zr2qa5y9&ep=v1_gifs_search&rid=giphy.gif&ct=g')]">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-4">Welcome to Artic Fox consultant</h1>
            <p className="text-lg mb-4">Empowering organizations to thrive through tailored business architecture excellence</p>
            <Link href={"/contact"} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5  py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get in touch
              </span>
            </Link>
          </div>
        </section>
        <div className=" md:mx-[100px] xl:mx-[150px] bg-current">
          <section className="bg-blue-950 p-8 text-center ">
            <h2 className="text-5xl font-semibold text-white mb-4">Why Choose <br />Artic Fox Consulting?</h2>
            <p className="text-2xl text-gray-400 xl:px-[250px] text-center">At Artic Fox Consulting, we are committed to delivering exceptional results and driving positive change for our clients. With our expertise, experience, and collaborative approach, we’ll help you transform your business architecture and unlock new opportunities for growth and success.</p>
          </section>
          <section className="p-8 mb-10 bg-stone-300">
            <h2 className="text-3xl font-semibold mb-8 text-center"></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg shadow-lg p-4">
                <img src="https://s2.wp.com/wp-content/themes/premium/startace/assets/images/icon_styles.png" alt="Product 1" className="h-24 w-24 rounded mb-4 mx-auto" />
                <h3 className="text-xl text-gray-700 text-center font-bold mb-2">Results-Driven</h3>
                <p className="text-gray-700 text-center">Our goal is to deliver measurable results that drive business success and long-term value for our clients.</p>
              </div>
              <div className="border rounded-lg shadow-lg p-4">
                <img src="https://s2.wp.com/wp-content/themes/premium/startace/assets/images/icon_templates.png" alt="Product 2" className="rounded mb-4 h-24 mx-auto w-24" />
                <h3 className="text-xl text-gray-700 text-center font-bold mb-2">Collaborative Approach</h3>
                <p className="text-gray-700 text-center">We believe in working closely with our clients as partners, leveraging their expertise and insights to drive meaningful change.</p>
              </div>
              <div className="border rounded-lg shadow-lg p-4">
                <img src="https://s2.wp.com/wp-content/themes/premium/startace/assets/images/icon_patterns.png" alt="Product 3" className="rounded mb-4 h-24 mx-auto w-24" />
                <h3 className="text-xl text-gray-700 font-bold text-center mb-2">Tailored Solutions</h3>
                <p className="text-gray-700 text-center">We take a customized approach to each client engagement, ensuring that our solutions align with your unique needs and objectives.</p>
              </div>
            </div>
          </section>
          <div className="bg-cover bg-center md:h-96 md:flex justify-between text-black">
            <section  >
              <div className="md:ml-10 md:mt-10 sm:ml-5 sm:mt-5">
                <h3 className="text-xl text-sky-400 font-semibold mb-2">OUR SERVICES</h3>
                <h1 className="sm:text-2xl xl:text-4xl font-bold mb-4">Business Architecture Design</h1>
                <p className="xl:text-xl sm:text-sm">Our business architecture design services are tailored to help you build a solid foundation for growth and innovation. From defining your business capabilities to mapping out your processes and systems, well work closely with you to design a robust and scalable architecture that aligns with your strategic goals.</p>
              </div>
            </section>
            <section className="md:p-8 md:my-5 my-2 text-center">
              <img className="md:h-[300px] md:mx-auto md:w-[2500px] sm:h-[200px] sm:mx-auto sm:w-[1250px]" src='https://deltadynamicsconsulting.com/wp-content/uploads/2024/05/delta3.jpg?w=1024&h=683' />
            </section>
          </div>
          <div className="bg-cover bg-center md:h-96 md:flex justify-between text-black">
            <section className="md:p-8 md:my-5 my-2 text-center">
              <img className="md:h-[300px] md:mx-auto md:w-[2500px] sm:h-[200px] sm:mx-auto sm:w-[1250px]" src='https://deltadynamicsconsulting.com/wp-content/uploads/2024/05/delta1.jpg?w=1024&h=768' />
            </section>
            <section  >
              <div className="md:mr-10 md:mt-10 sm:ml-5 sm:mt-5">
                <h1 className="sm:text-2xl xl:text-4xl font-bold mb-4">Operating Model Design</h1>
                <p className="xl:text-xl sm:text-sm">Our operating model design services are focused on optimizing your business processes, resources, and capabilities to deliver maximum value to your customers and stakeholders. We’ll help you design an operating model that supports your strategic objectives and drives operational excellence across your organization.</p>
              </div>
            </section>
          </div>
          <div className="bg-cover bg-center md:h-96 md:flex justify-between text-black">
            <section  >
              <div className="md:ml-10 md:mt-10 sm:ml-5 sm:mt-5">
                <h1 className="sm:text-2xl xl:text-4xl font-bold mb-4">Business Process Architecture</h1>
                <p className="xl:text-xl sm:text-sm">Our business process architecture services are designed to streamline your business processes, identify areas for improvement, and implement best practices to enhance efficiency and productivity. Whether youre looking to optimize existing processes or redesign them from the ground up, well help you achieve your goals and drive sustainable results.</p>
              </div>
            </section>
            <section className="md:p-8 md:my-5 my-2 text-center">
              <img className="md:h-[300px] md:mx-auto md:w-[2500px] sm:h-[200px] sm:mx-auto sm:w-[1250px]" src='https://deltadynamicsconsulting.com/wp-content/uploads/2024/05/delta4.jpg?w=1024&h=683' />
            </section>
          </div>
          <div className="bg-cover bg-center md:h-96 md:flex justify-between text-black">
            <section className="md:p-8 md:my-5 my-2 text-center">
              <img className="md:h-[300px] md:mx-auto md:w-[2500px] sm:h-[200px] sm:mx-auto sm:w-[1250px]" src='https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg' />
            </section>
            <section  >
              <div className="md:mr-10 md:mt-10 sm:ml-5 sm:mt-5">
                <h1 className="sm:text-2xl xl:text-4xl font-bold mb-4">Capability Assessments</h1>
                <p className="xl:text-xl sm:text-sm">Our capability assessments provide valuable insights into your organizations strengths, weaknesses, and opportunities for improvement. Well work with you to assess your capabilities across key areas and develop actionable recommendations to help you achieve your strategic objectives.</p>
              </div>
            </section>
          </div>
          <section className="bg-cover bg-center bg-stone-300 my-5 py-5 xl:h-96 my-8  text-black" >
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Client Success Stories</h1>
              <p className="text-lg">Discover How Artic Fox Consulting Delivered Results for Our Valued Clients</p>
            </div>
            <section className="p-8 mb-10 bg-stone-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                <div className="border rounded-lg shadow-lg p-4">
                  <h3 className="text-xl text-gray-700 text-center font-bold mb-2">Highly recommended!</h3>
                  <p className="text-gray-700 text-center">Working with Artic Fox Consulting was a game-changer for our company, providing invaluable insights and actionable recommendations.</p>
                  <h3 className="text-xl text-gray-700  font-bold mb-2">CDE</h3>
                </div>
                <div className="border rounded-lg shadow-lg p-4">
                  <h3 className="text-xl text-gray-700 text-center font-bold mb-2">Strategic Partner</h3>
                  <p className="text-gray-700 text-center">Their strategic guidance helped us align our organizations capabilities with our long-term objectives.</p>
                  <br />
                  <h3 className="text-xl text-gray-700 font-bold mb-2">CDE</h3>
                </div>
                <div className="border rounded-lg shadow-lg p-4">
                  <h3 className="text-xl text-gray-700 font-bold text-center mb-2">Process Improvements</h3>
                  <p className="text-gray-700 text-center">Artic Fox Consulting transformed our business processes, leading to increased efficiency and profitability.</p>
                  <br />
                  <h3 className="text-xl text-gray-700  font-bold mb-2">CDE</h3>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}


