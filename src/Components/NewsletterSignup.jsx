import { useState } from 'react';
import { FiMail, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="relative bg-gray-50 py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="top-0 left-0 absolute bg-gradient-to-r from-blue-500 to-teal-400 w-full h-1"></div>
      <div className="top-20 -right-20 absolute bg-blue-100 opacity-20 rounded-full w-64 h-64"></div>
      <div className="bottom-20 -left-20 absolute bg-teal-100 opacity-20 rounded-full w-64 h-64"></div>
      
      <div className="relative mx-auto px-4 max-w-6xl container">
        <div className="mb-16 text-center">
          <span className="inline-block bg-blue-100 mb-4 px-3 py-1 rounded-full font-medium text-blue-600 text-lg">
            Stay Connected
          </span>
          <h2 className="font-bold text-2xl lg:text-5xl text-center">
            Never Miss a Volunteer Opportunity
          </h2>
          <p className="mx-auto py-6 max-w-3xl text-lg text-center">
            Join our community of changemakers. Get curated volunteer opportunities delivered weekly.
          </p>
        </div>

        <div className="bg-white shadow-lg mx-auto p-8 md:p-12 rounded-xl max-w-4xl">
          {isSubscribed ? (
            <div className="py-8 text-center">
              <div className="inline-flex justify-center items-center bg-green-100 mb-6 rounded-full w-16 h-16">
                <FiCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900 text-2xl">You're In!</h3>
              <p className="mx-auto mb-6 max-w-md text-gray-600">
                Thank you for subscribing. We've sent a confirmation email to your inbox.
              </p>
              <button 
                onClick={() => setIsSubscribed(false)}
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Back to form <FiArrowRight className="ml-2" />
              </button>
            </div>
          ) : (
            <div className="items-center gap-8 grid md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-bold text-gray-900 text-2xl">Why Subscribe?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="flex justify-center items-center bg-blue-100 rounded-full w-8 h-8">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Early Access</h4>
                      <p className="text-gray-600">Be the first to know about new opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="flex justify-center items-center bg-blue-100 rounded-full w-8 h-8">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Curated Matches</h4>
                      <p className="text-gray-600">Opportunities tailored to your interests</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="flex justify-center items-center bg-blue-100 rounded-full w-8 h-8">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Community Updates</h4>
                      <p className="text-gray-600">Impact stories and volunteer resources</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-700 text-sm">Email address</label>
                    <div className="relative">
                      <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                        <FiMail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block shadow-sm py-3 pr-3 pl-10 border border-gray-300 focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="mr-3 -ml-1 w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                  
                  <p className="text-gray-500 text-xs text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>

                <div className="mt-8 pt-6 border-gray-200 border-t">
                  <h4 className="mb-4 font-medium text-gray-500 text-sm text-center">OR CONNECT WITH US</h4>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 transition-colors">
                      <FaTwitter className="w-5 h-5 text-gray-700" />
                    </a>
                    <a href="#" className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 transition-colors">
                      <FaLinkedinIn className="w-5 h-5 text-gray-700" />
                    </a>
                    <a href="#" className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 transition-colors">
                      <FaInstagram className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;