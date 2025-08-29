import React from "react";

const NewsletterSignup = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">LogiTrack AI</h2>

        {/* Subtitle */}
        <p className="text-gray- text-lg mb-8 max-w-2xl mx-auto">
          Stay updated with the latest logistics insights
        </p>

        {/* Email Subscription Form */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 max-w-md mx-auto">
          <div className="flex-1 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-0"
            />
          </div>
          <button className="px-6 py-3 bg-purple-800 hover:bg-purple-900 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap">
            Subscribe
          </button>
        </div>

        {/* Bottom Section */}
        <div className=" pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          {/* Left Side - Language Selector */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>English</span>
          </div>

          {/* Center - Copyright */}
          <div className="mb-4 md:mb-0">
            <p>© 2023 LogiTrack AI.</p>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-4">
            {/* Twitter Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Made with Tally Badge */}
      </div>
    </footer>
  );
};

export default NewsletterSignup;
