import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import DatePicker from 'react-datepicker'

const UpdateVolunteerNeedPosts = () => {
  const { user } = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const [deadline, setDeadline] = React.useState(new Date())

  const post = useLoaderData()


  // submit updated data
  const onSubmit = data => {
    const id = post._id;
   fetch(`https://b10a11-server-side-developer-jaber.vercel.app/all-posts/${id}`,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
   })

    console.log(data);
  }
  return (
    <div className='mx-auto p-4 w-7/12 container'>
      <h2 className='mb-4 font-bold text-2xl'>Volunteer Request Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block font-medium text-sm'>Thumbnail</label>
          <input
            type='url'
            {...register('thumbnail')}
            className='border-gray-300 p-2 border rounded w-full'
            defaultValue={post.thumbnail}
            required
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>Post Title</label>
          <input
            type='text'
            {...register('postTitle')}
            className='border-gray-300 p-2 border rounded w-full'
            defaultValue={post.postTitle}
            required
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>Description</label>
          <textarea
            {...register('description')}
            className='border-gray-300 p-2 border rounded w-full'
            defaultValue={post.description}
            rows='4'
            required
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>Category</label>
          <select
            {...register('category')}
            className='border-gray-300 p-2 border rounded w-full'
            defaultValue={post.category}
            required
          >
            <option value='healthcare'>Healthcare</option>
            <option value='education'>Education</option>
            <option value='social-service'>Social Service</option>
            <option value='animal-welfare'>Animal Welfare</option>
          </select>
        </div>
        <div>
          <label className='block font-medium text-sm'>Location</label>
          <input
            type='text'
            {...register('location')}
            className='border-gray-300 p-2 border rounded w-full'
            defaultValue={post.location}
            required
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>
            No. of Volunteers Needed
          </label>
          <input
            type='number'
            {...register('volunteersNeeded')}
            className='border-gray-300 p-2 border rounded w-full'
            defaultValue={post.volunteersNeeded}
            required
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>Deadline</label>
          <DatePicker
            selected={post.deadline}
            onChange={date => setDeadline(date)}
            className='border-gray-300 p-2 border rounded w-full'
            required
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>Organizer Name</label>
          <input
            type='text'
            value={user?.displayName}
            {...register('displayName')}
            readOnly
            className='border-gray-300 p-2 border rounded w-full'
          />
        </div>
        <div>
          <label className='block font-medium text-sm'>Organizer Email</label>
          <input
            type='email'
            value={user?.email}
            {...register('organizerEmail')}
            readOnly
            className='border-gray-300 p-2 border rounded w-full'
          />
        </div>
        <button type='submit' className='bg-blue-500 p-2 rounded text-white'>
          Update Post
        </button>
      </form>
    </div>
  )
}

export default UpdateVolunteerNeedPosts
