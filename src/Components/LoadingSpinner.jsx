
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[300px]">
      <div className="relative">
        {/* Outer ring */}
        <div className="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        
        {/* Inner ring */}
        <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 transform">
          <div className="border-4 border-t-transparent border-blue-300 rounded-full w-8 h-8 animate-spin animation-delay-200"></div>
        </div>
        
        {/* Center dot */}
        <div className="top-1/2 left-1/2 absolute bg-blue-600 rounded-full w-3 h-3 -translate-x-1/2 -translate-y-1/2 transform"></div>
      </div>
      
      <p className="mt-4 font-medium text-gray-600">Loading opportunities...</p>
      
      {/* Optional progress bar for better UX */}
      <div className="bg-gray-200 mt-6 rounded-full w-48 h-2.5">
        <div className="bg-blue-600 rounded-full w-3/4 h-2.5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;