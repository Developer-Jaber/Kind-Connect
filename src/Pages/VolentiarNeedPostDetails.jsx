import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const VolunteerNeedPostDetails = () => {
  const {user} = useContext(AuthContext);
  const post = useLoaderData();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleVolunteer = () => {
    setModalIsOpen(true);
  };

  const onSubmit = data => {
    axios.post('http://localhost:5000/volenteers-request', { ...data, status: 'requested' })
    .then(() => {
      if(post.volunteersNeeded > 0){
      return axios.patch(`http://localhost:5000/all-posts/${post._id}`, { $inc: { volunteersNeeded: -1 } });
      }
    })
    .then(() => {
      setModalIsOpen(false);
      if(post.volunteersNeeded <= 0){
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Thanks for choseeing us,No need to more.",
          showConfirmButton: false,
          timer: 2000
        });
      }
      navigate('/')
    })
    .catch(error => {
      console.error('Error submitting volunteer request:', error);
    });
    
  };

  return (
    <div className="mx-auto p-4 w-8/12 container">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h1 className="mb-6 font-bold text-3xl text-center">{post.postTitle}</h1>
        <img src={post.thumbnail} alt={post.postTitle} className="shadow-lg mb-6 rounded-lg w-full" />
        <div className="mb-6">
          <p className="mb-4 text-gray-700">{post.description}</p>
          <p className="mb-2"><strong className="text-gray-800">Category:</strong> {post.category}</p>
          <p className="mb-2"><strong className="text-gray-800">Location:</strong> {post.location}</p>
          <p className="mb-2"><strong className="text-gray-800">Volunteers Needed:</strong> {post.volunteersNeeded}</p>
          <p className="mb-2"><strong className="text-gray-800">Deadline:</strong> {new Date(post.deadline).toLocaleDateString()}</p>
          <p className="mb-2"><strong className="text-gray-800">Organizer Name:</strong> {post.organizerName}</p>
          <p className="mb-6"><strong className="text-gray-800">Organizer Email:</strong> {post.organizerEmail}</p>
          <button
            onClick={handleVolunteer}
            className="bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-2 rounded font-semibold text-white transition duration-300"
          >
            Be a Volunteer
          </button>
        </div>
      </div>

      {modalIsOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="mb-4 font-bold text-2xl">Volunteer Request Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium text-sm">Thumbnail</label>
                <input
                  type="url"
                  {...register('thumbnail')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.thumbnail}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Post Title</label>
                <input
                  type="text"
                  {...register('postTitle')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.postTitle}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Description</label>
                <textarea
                  {...register('description')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.description}
                  readOnly
                  rows="4"
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Category</label>
                <input
                  type="text"
                  {...register('category')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.category}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Location</label>
                <input
                  type="text"
                  {...register('location')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.location}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">No. of Volunteers Needed</label>
                <input
                  type="number"
                  {...register('volunteersNeeded')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.volunteersNeeded}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Deadline</label>
                <input
                  type="text"
                  {...register('deadline')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={new Date(post.deadline).toLocaleDateString()}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Organizer Name</label>
                <input
                  type="text"
                  {...register('organizerName')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.organizerName}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Organizer Email</label>
                <input
                  type="email"
                  {...register('organizerEmail')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={post.organizerEmail}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Volunteer Name</label>
                <input
                  type="text"
                  {...register('volunteerName')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={user.displayName}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Volunteer Email</label>
                <input
                  type="email"
                  {...register('volunteerEmail')}
                  className="border-gray-300 p-2 border rounded w-full"
                  defaultValue={user.email}
                  readOnly
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Suggestion</label>
                <textarea
                  {...register('suggestion')}
                  className="border-gray-300 p-2 border rounded w-full"
                  placeholder="Your suggestion"
                  rows="4"
                />
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 shadow-lg px-4 py-2 rounded font-semibold text-white transition duration-300">
                Request
              </button>
            </form>
            <div className="modal-action">
              <button onClick={() => setModalIsOpen(false)} className="btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedPostDetails;
