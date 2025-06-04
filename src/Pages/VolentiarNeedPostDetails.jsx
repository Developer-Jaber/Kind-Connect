import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { ImSpinner8 } from 'react-icons/im';

const VolunteerNeedPostDetails = () => {
  const { user } = useContext(AuthContext);
  const post = useLoaderData();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleVolunteer = () => {
    if (!user) {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to login to volunteer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
      return;
    }
    setModalIsOpen(true);
  };

  const onSubmit = async (data) => {
    if (post.volunteersNeeded <= 0) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "No more volunteers needed for this post",
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post('https://b10a11-server-side-developer-jaber.vercel.app/volenteers-request', { 
        ...data, 
        status: 'requested',
        postId: post._id,
        volunteerId: user.uid
      });

      await axios.patch(`https://b10a11-server-side-developer-jaber.vercel.app/all-posts/${post._id}`, { 
        $inc: { volunteersNeeded: -1 } 
      });

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Volunteer request submitted successfully!",
        showConfirmButton: false,
        timer: 2000
      });

      setModalIsOpen(false);
      navigate('/my-volunteer-request-posts');
    } catch (error) {
      console.error('Error submitting volunteer request:', error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Failed to submit request",
        text: error.response?.data?.message || 'Please try again later',
        showConfirmButton: false,
        timer: 2000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto p-4 md:p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img 
          src={post.thumbnail} 
          alt={post.postTitle} 
          className="w-full h-64 md:h-80 object-cover"
          loading="lazy"
        />
        
        <div className="p-6 md:p-8">
          <h1 className="mb-4 font-bold text-gray-800 text-2xl md:text-3xl">{post.postTitle}</h1>
          
          <div className="mb-6">
            <h2 className="mb-2 font-semibold text-gray-700 text-lg">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">{post.description}</p>
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="mb-2 font-medium text-gray-700">Details</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-500">📍</span>
                  <span>{post.location}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-500">📅</span>
                  <span>{new Date(post.deadline).toLocaleDateString()}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-500">👥</span>
                  <span>{post.volunteersNeeded} volunteer(s) needed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-500">🏷️</span>
                  <span>{post.category}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="mb-2 font-medium text-gray-700">Organizer</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-gray-500">👤</span>
                  <span>{post.organizerName}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-500">✉️</span>
                  <a href={`mailto:${post.organizerEmail}`} className="text-blue-600 hover:underline">
                    {post.organizerEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleVolunteer}
            disabled={post.volunteersNeeded <= 0}
            className={`w-full md:w-auto px-6 py-3 rounded-lg font-medium text-white transition-all ${
              post.volunteersNeeded <= 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 shadow-md'
            }`}
          >
            {post.volunteersNeeded <= 0 ? 'No Volunteers Needed' : 'Be a Volunteer'}
          </button>
        </div>
      </div>

      {/* Volunteer Request Modal */}
      {modalIsOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-gray-800 text-xl">Volunteer Request</h2>
                <button 
                  onClick={() => setModalIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Post Information (readonly) */}
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700 text-sm">Post Title</label>
                    <input
                      {...register('postTitle')}
                      defaultValue={post.postTitle}
                      readOnly
                      className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-gray-700 text-sm">Category</label>
                    <input
                      {...register('category')}
                      defaultValue={post.category}
                      readOnly
                      className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700 text-sm">Description</label>
                  <textarea
                    {...register('description')}
                    defaultValue={post.description}
                    readOnly
                    rows="3"
                    className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md w-full"
                  />
                </div>

                {/* Volunteer Information */}
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700 text-sm">Your Name</label>
                    <input
                      {...register('volunteerName')}
                      defaultValue={user.displayName}
                      readOnly
                      className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-gray-700 text-sm">Your Email</label>
                    <input
                      {...register('volunteerEmail')}
                      defaultValue={user.email}
                      readOnly
                      className="bg-gray-50 px-3 py-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                </div>

                {/* Suggestion */}
                <div>
                  <label className="block mb-1 font-medium text-gray-700 text-sm">
                    Your Suggestion (Optional)
                  </label>
                  <textarea
                    {...register('suggestion')}
                    placeholder="Any suggestions or additional information you'd like to share..."
                    rows="3"
                    className="px-3 py-2 border border-gray-300 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setModalIsOpen(false)}
                    className="hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-4 py-2 rounded-md min-w-24 text-white"
                  >
                    {isSubmitting ? (
                      <ImSpinner8 className="mr-2 animate-spin" />
                    ) : null}
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedPostDetails;