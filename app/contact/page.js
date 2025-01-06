import Link from "next/link"
export default function contact() {
    return (
        <>
         <section className="sm:bg-[length:800px_250px] bg-[length:500px_250px] lg:bg-[length:1250px_300px] bg-center h-64 flex items-center justify-center text-gray-500 bg-[url('https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg?t=st=1736142571~exp=1736146171~hmac=5237f052a9ccea13b4f7af9e92b3f1ff3ef91c77b80463c799f5a4efa56ef3a8&w=1380')]">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">We'd love to hear from you!</p>
    </div>
  </section>

  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-8 text-blue-100 text-center">Get in Touch</h2>
    <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="mb-4 ">
        <label for="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 required" placeholder="Your Name"/>
      </div>
      <div className="mb-4 ">
        <label for="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 required" placeholder="Your Email"/>
      </div>
      <div className="mb-4 ">
        <label for="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" rows="5" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 required" placeholder="Your Message"></textarea>
      </div>
      <div className="text-center">
        <Link href={"/"} type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Send Message</Link>
      </div>
    </form>
  </section>
        </>
    )
}