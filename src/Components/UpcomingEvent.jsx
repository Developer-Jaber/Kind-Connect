import { useEffect, useState } from 'react'

const UpcomingEvent = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('https://b10a11-server-side-developer-jaber.vercel.app/upcoming-events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])
  console.log(events);
  return (
    <section className='mx-auto py-10 w-11/12'>
      <div className='my-10 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-4xl'>Upcoming Events</h1>
            <p className='py-6'>
              "Stay updated with our upcoming volunteer events. Join hands with
              us and be a part of exciting activities and initiatives aimed at
              making a difference in our community!"
            </p>
          </div>
        </div>
      </div>
      
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {events.map((event, index) => (
          <div key={index} className='bg-white shadow-md p-4 rounded-md'>
            <img className='w-full h-64' src={event.eventImage} alt='' />
            <h3 className='mb-2 font-semibold text-xl'>{event.eventTitle}</h3>
            <p className='mb-2 text-gray-600'>{event.eventDate}</p>
            <p className='mb-4'>{event.eventDescription}</p>
            <p className='font-bold'>Location: {event.eventLocation}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UpcomingEvent
