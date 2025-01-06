import Link from "next/link";

export default function Footer() {
    return (
        <>
         <footer className="bg-blue-950 text-white py-8">
                    <div className="container mx-auto px-4">

                        <div className="flex flex-wrap justify-between items-center">
                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <img className="h-28 w-28" src='https://static.vecteezy.com/system/resources/thumbnails/048/847/425/small/collection-of-simple-colorful-dove-logo-designs-isolated-png.png'/>
                                <p className="text-gray-400">Delivering quality and excellence since 2024.</p>
                            </div>

                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                                <ul className="text-gray-400">
                                    <li className="mb-2 hover:text-white"><Link href="/">Home</Link></li>
                                    <li className="mb-2 hover:text-white"><Link href="/about">About Us</Link></li>
                                    <li className="hover:text-white"><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="w-full md:w-1/3">
                                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                                <p className="text-gray-400">123 Business St, City, Country</p>
                                <p className="text-gray-400">Email: info@yourwebsite.com</p>
                                <p className="text-gray-400">Phone: +123 456 7890</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 my-6"></div>

                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">&copy; 2024 YourWebsite. All rights reserved.</p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}