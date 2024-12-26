import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddVolunteerNeedPost = () => {
  const {user} = useContext(AuthContext)
  const { register, handleSubmit, setValue, reset } = useForm();
  const [deadline, setDeadline] = React.useState(new Date());

  const onSubmit = data => {
    data.deadline = deadline;
    // sending data to the server
    axios.post('http://localhost:5000/all-posts',data)
    .then(()=>{
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully submitted the post!",
          showConfirmButton: false,
          timer: 1500
        });
    })
    .catch((err)=>{
        console.log(err);
    })

    // Reset the form fields after successful submission
    reset();
    setDeadline(new Date()); // Reset the date picker to the current date
  };

  

  return (
    <div className="mx-auto p-4 w-7/12 container">
      <h1 className="mb-4 font-bold text-2xl">Add Volunteer Need Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium text-sm">Thumbnail</label>
          <input
            type="url"
            {...register('thumbnail')}
            className="border-gray-300 p-2 border rounded w-full"
            placeholder="Thumbnail URL"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Post Title</label>
          <input
            type="text"
            {...register('postTitle')}
            className="border-gray-300 p-2 border rounded w-full"
            placeholder="Post Title"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Description</label>
          <textarea
            {...register('description')}
            className="border-gray-300 p-2 border rounded w-full"
            placeholder="Description"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Category</label>
          <select
            {...register('category')}
            className="border-gray-300 p-2 border rounded w-full"
            required
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-sm">Location</label>
          <input
            type="text"
            {...register('location')}
            className="border-gray-300 p-2 border rounded w-full"
            placeholder="Location"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm">No. of Volunteers Needed</label>
          <input
            type="number"
            {...register('volunteersNeeded')}
            className="border-gray-300 p-2 border rounded w-full"
            placeholder="Number of Volunteers Needed"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={date => setDeadline(date)}
            className="border-gray-300 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Organizer Name</label>
          <input
            type="text"
            value={user?.displayName}
            {...register('organizerName')}
            readOnly
            className="border-gray-300 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Organizer Email</label>
          <input
            type="email"
            value={user?.email}
            {...register('organizerEmail')}
            readOnly
            className="border-gray-300 p-2 border rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 p-2 rounded text-white">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPost;
