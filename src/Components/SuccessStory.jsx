import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const SuccessStory = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://b10a11-server-side-developer-jaber.vercel.app/succes-stories')
      .then(res => res.json())
      .then(data => setStories(data));
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto px-4 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h1 className="font-bold text-2xl lg:text-5xl text-center">
            Success Stories
          </h1>
          <p className="mx-auto py-8 max-w-3xl text-lg text-center">
            "Hear from our volunteers and organizations about the incredible impact they have made. 
            Discover inspiring stories of how volunteering has transformed lives and communities. 
            Your contribution can create a lasting change too!"
          </p>
        </div>

        {/* Stories Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="group bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Story Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={story.thumbnail || '/default-success-story.jpg'}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="bottom-4 left-4 absolute">
                  <span className="inline-block bg-primary px-3 py-1 rounded-full font-semibold text-white text-sm">
                    Volunteer Story
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <FaQuoteLeft className="mt-1 mr-3 text-gray-300 text-2xl" />
                  <h3 className="font-bold text-gray-800 group-hover:text-primary text-xl transition-colors">
                    {story.title}
                  </h3>
                </div>
                
                <p className="mb-6 text-gray-600 line-clamp-3">
                  {story.description}
                </p>
                
                {/* Author and Actions */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <p className="font-bold text-gray-800">{story.name}</p>
                    {story.role && (
                      <p className="text-gray-500 text-sm">{story.role}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <FaRegHeart className="text-xl" />
                    </button>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                      <FaShareAlt className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 font-bold text-2xl">Have a success story to share?</h2>
          <button className="hover:bg-accent shadow-md hover:shadow-lg px-8 py-3 rounded-full font-semibold text-lg transition-colors btn btn-primary">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;