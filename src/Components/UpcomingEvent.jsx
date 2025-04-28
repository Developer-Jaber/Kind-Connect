import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://b10a11-server-side-developer-jaber.vercel.app/upcoming-events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <section className="mx-auto pt-16 pb-28 w-11/12 max-w-7xl">
      <div className="mb-16 text-center">
        <h1 className="font-bold text-2xl lg:text-5xl text-center">
          Upcoming Events
        </h1>
        <p className="mx-auto py-8 max-w-3xl text-lg text-center">
          "Stay updated with our upcoming volunteer events. Join hands with us and be a part of exciting activities and initiatives aimed at making a difference in our community!"
        </p>
      </div>
      
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="group bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300"
          >
            {/* Event Image with hover effect */}
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={event.eventImage || '/default-event.jpg'} 
                alt={event.eventTitle}
              />
              {/* Event date badge */}
              <div className="top-4 right-4 absolute bg-white/90 shadow-md backdrop-blur-sm px-3 py-1 rounded-lg">
                <div className="font-bold text-primary text-sm">
                  {new Date(event.eventDate).toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <div className="font-bold text-xl text-center">
                  {new Date(event.eventDate).getDate()}
                </div>
              </div>
            </div>
            
            {/* Event Content */}
            <div className="p-6">
              <h3 className="mb-3 font-bold text-gray-800 group-hover:text-primary text-2xl transition-colors">
                {event.eventTitle}
              </h3>
              
              <p className="mb-4 text-gray-600 line-clamp-2">
                {event.eventDescription}
              </p>
              
              {/* Event Metadata */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCalendarAlt className="text-primary" />
                  <span>
                    {new Date(event.eventDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-primary" />
                  <span>
                    {event.eventTime || '10:00 AM - 2:00 PM'}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{event.eventLocation}</span>
                </div>
                
                {event.participants && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="text-primary" />
                    <span>{event.participants} attending</span>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 hover:bg-accent text-white transition-colors btn btn-primary">
                  Register Now
                </button>
                <button className="border-gray-300 hover:border-primary btn-outline hover:text-primary btn">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvent;