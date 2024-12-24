

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen text-white">
      <div className="flex justify-center items-center space-x-2 mb-4">
        <div className="inline-block border-4 spinner-border border-t-transparent rounded-full w-12 h-12 text-blue-500 animate-spin"></div>
        <div className="inline-block border-4 spinner-border border-t-transparent rounded-full w-8 h-8 text-red-500 animate-spin"></div>
        <div className="inline-block border-4 spinner-border border-t-transparent rounded-full w-6 h-6 text-yellow-500 animate-spin"></div>
        <div className="inline-block border-4 spinner-border border-t-transparent rounded-full w-4 h-4 text-green-500 animate-spin"></div>
      </div>
      <h1 className="mb-2 font-bold text-3xl">Loading...</h1>
      <p className="text-lg">Just a moment! We're making things awesome for you.</p>
      <p className="mt-2 text-gray-400 text-sm">Grab a coffee or do a quick stretch!</p>
    </div>
  );
};

export default LoadingPage;
