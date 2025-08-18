import React from 'react'

function Footer() {
    return (
        <div className='bg-blue-900' max-h-75>
            <div class="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
                <div class="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div class="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="flex items-center gap-2">
                            <img src="../icon.png" alt="logo" width="50" height="50" />
                            <h2 className="text-2xl font-bold text-white">Estate</h2>
                        </div>
                        <p class="text-gray-400 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div class="w-full md:w-1/5 mb-8 md:mb-0">
                        <h3 class="text-white text-lg font-bold mb-4">Company</h3>
                        <ul class="flex flex-col gap-2 text-gray-400">
                            <a href="#home" class="hover:text-white">Home</a>
                            <a href="#about" class="hover:text-white">About Us</a>
                            <a href="#proj" class="hover:text-white">Projects</a>
                            <a href="#" class="hover:text-white">Privacy Policy</a>

                        </ul>
                    </div>
                    <div class="w-full md:w-1/3">
                        <h3 class="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
                        <p class="text-gray-400 mb-4 max-w-80">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div class="flex gap-2">
                            <input type="email" placeholder="Enter your email" class="p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto" fdprocessedid="tqr04f" />
                            <button class="py-2 px-4 rounded bg-blue-500 text-white" fdprocessedid="ujzsvj">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-700 py-4 mt-10  text-center text-gray-500">Copyright 2025 © All Right Reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer
