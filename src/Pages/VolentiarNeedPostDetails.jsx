import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VolentiarNeedPostDetails = () => {
    const post = useLoaderData();
    
    return (
      <div className="mx-auto p-4 w-8/12 container">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h1 className="mb-6 font-bold text-3xl text-center">{post.title}</h1>
          <img src={post.thumbnail} alt={post.title} className="shadow-lg mb-6 rounded-lg w-full" />
          <div className="mb-6">
            <p className="mb-4 text-gray-700">{post.description}</p>
            <p className="mb-2"><strong className="text-gray-800">Category:</strong> {post.category}</p>
            <p className="mb-2"><strong className="text-gray-800">Location:</strong> {post.location}</p>
            <p className="mb-2"><strong className="text-gray-800">Volunteers Needed:</strong> {post.volunteersNeeded}</p>
            <p className="mb-2"><strong className="text-gray-800">Deadline:</strong> {new Date(post.deadline).toLocaleDateString()}</p>
            <p className="mb-2"><strong className="text-gray-800">Organizer Name:</strong> {post.organizerName}</p>
            <p className="mb-6"><strong className="text-gray-800">Organizer Email:</strong> {post.organizerEmail}</p>
            <button
            //   onClick={handleVolunteer}
              className="bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-2 rounded font-semibold text-white transition duration-300"
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    );
};

export default VolentiarNeedPostDetails;