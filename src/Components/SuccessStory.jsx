import { useEffect, useState } from 'react'

const SuccessStory = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    fetch('https://b10a11-server-side-developer-jaber.vercel.app/succes-stories')
      .then(res => res.json())
      .then(data => setStories(data))
  }, [])

  return (
    <section>
      <div className='hero'>
        <div className='text-center hero-content'>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-4xl'>Success Stories</h1>
            <p className='py-6'>
              " Hear from our volunteers and organizations about the incredible impact they have made. Discover inspiring stories of how volunteering has transformed lives and communities. Your contribution can create a lasting change too.!"
            </p>
          </div>
        </div>
      </div>

      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto w-10/12'>
        {stories.map((story, index) => (
          <div key={index} className='bg-white shadow-md p-4 rounded-md'>
            <img
              src={story.thumbnail}
              alt={story.title}
              className='mb-4 rounded-md w-full h-48 object-cover'
            />
            <h3 className='mb-2 font-semibold text-xl'>{story.title}</h3>
            <p className='mb-4'>{story.description}</p>
            <p className='font-bold'>- {story.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SuccessStory
