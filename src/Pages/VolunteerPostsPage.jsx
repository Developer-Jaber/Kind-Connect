import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import BackToTopButton from '../Components/BackToTopButton';
import { FiSearch, FiClock, FiMapPin, FiUsers, FiCalendar } from 'react-icons/fi';
// import FilterSidebar from '../Components/FilterSidebar';
// import LoadingSpinner from '../Components/LoadingSpinner';

const VolunteerPostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    dateRange: ''
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://b10a11-server-side-developer-jaber.vercel.app/all-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.postTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = (
      (!filters.category || post.category === filters.category) &&
      (!filters.location || post.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.dateRange || post.date === filters.dateRange)
    );

    return matchesSearch && matchesFilters;
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // if (loading) return <LoadingSpinner />;
  if (error) return <div className="mt-8 alert alert-error">Error: {error}</div>;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className='my-20'>
        <div className="mx-auto px-4 text-center container">
          <h1 className="mb-4 font-bold text-4xl">Find Your Perfect Volunteer Opportunity</h1>
          <p className="mb-8 text-xl">Join thousands of volunteers making a difference in their communities</p>
          
          {/* Enhanced Search Bar */}
          <div className="relative mx-auto max-w-2xl">
            <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <FiSearch className="text-gray-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search opportunities by title or description..."
              className="py-3 pr-4 pl-10 input-bordered rounded-full w-full text-gray-800 input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-8 container">
        {/* Filter Sidebar */}
        {/* <div className="mb-8 md:mb-0 pr-0 md:pr-6 md:w-1/4">
          <FilterSidebar 
            posts={posts}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div> */}

        {/* Posts List */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-2xl">
              {filteredPosts.length} Opportunities Available
              {filters.category && ` in ${filters.category}`}
            </h2>
            <div className="text-sm">
              Sort by: 
              <select className="ml-2 select-bordered select-sm select">
                <option>Most Recent</option>
                <option>Closest Location</option>
                <option>Soonest Date</option>
              </select>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white shadow p-8 rounded-lg text-center">
              <h3 className="mb-2 font-medium text-xl">No opportunities found</h3>
              <p className="mb-4 text-gray-600">Try adjusting your search or filters</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    category: '',
                    location: '',
                    dateRange: ''
                  });
                }}
                className="btn btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {filteredPosts.map((post) => (
                <div key={post._id} className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.thumbnail || '/default-volunteer.jpg'} 
                      alt={post.postTitle} 
                      className="w-full h-full object-cover"
                    />
                    <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="badge badge-primary">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-bold text-xl line-clamp-2">{post.postTitle}</h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">{post.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <FiMapPin className="mr-2 text-gray-500" />
                        <span>{post.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FiCalendar className="mr-2 text-gray-500" />
                        <span>{post.date || 'Flexible dates'}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FiClock className="mr-2 text-gray-500" />
                        <span>{post.duration || 'Flexible hours'}</span>
                      </div>
                      {post.volunteersNeeded && (
                        <div className="flex items-center text-sm">
                          <FiUsers className="mr-2 text-gray-500" />
                          <span>{post.volunteersNeeded} volunteers needed</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        to={`/all-volentiar-need-Post/details/${post._id}`} 
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                      <span className="text-gray-500 text-sm">
                        Posted {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="btn-group">
                <button className="btn">«</button>
                <button className="btn btn-active">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">»</button>
              </div>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default VolunteerPostsPage;