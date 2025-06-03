import React from 'react';
import { FiFilter, FiX } from 'react-icons/fi';

const FilterSidebar = ({ posts, filters, onFilterChange }) => {
  // Extract unique categories and locations from posts
  const categories = [...new Set(posts.map(post => post.category))].filter(Boolean);
  const locations = [...new Set(posts.map(post => post.location))].filter(Boolean);
  
  // Date options (you might want to customize this based on your data)
  const dateOptions = [
    'Any time',
    'This week',
    'This month',
    'Next 3 months'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value === 'Any' ? '' : value
    });
  };

  const clearFilters = () => {
    onFilterChange({
      category: '',
      location: '',
      dateRange: ''
    });
  };

  return (
    <div className="top-4 sticky bg-white shadow-md p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center font-semibold text-lg">
          <FiFilter className="mr-2" />
          Filters
        </h3>
        {(filters.category || filters.location || filters.dateRange) && (
          <button 
            onClick={clearFilters}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
          >
            <FiX className="mr-1" />
            Clear all
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700 text-sm">
          Category
        </label>
        <select
          name="category"
          value={filters.category || 'Any'}
          onChange={handleChange}
          className="w-full select-bordered select"
        >
          <option value="Any">Any category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700 text-sm">
          Location
        </label>
        <select
          name="location"
          value={filters.location || 'Any'}
          onChange={handleChange}
          className="w-full select-bordered select"
        >
          <option value="Any">Any location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Date Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700 text-sm">
          When
        </label>
        <select
          name="dateRange"
          value={filters.dateRange || 'Any time'}
          onChange={handleChange}
          className="w-full select-bordered select"
        >
          {dateOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Skills Filter (example of additional filter) */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700 text-sm">
          Skills Needed
        </label>
        <div className="space-y-2">
          {['Teaching', 'Medical', 'Construction', 'IT', 'Art'].map((skill) => (
            <div key={skill} className="flex items-center">
              <input
                type="checkbox"
                id={`skill-${skill}`}
                className="checkbox checkbox-sm"
              />
              <label htmlFor={`skill-${skill}`} className="ml-2 text-sm">
                {skill}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-xs">
        {posts.length} opportunities total
      </div>
    </div>
  );
};

export default FilterSidebar;