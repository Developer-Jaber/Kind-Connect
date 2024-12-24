
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen text-white">
      <div className="flex flex-col items-center space-y-6">
        <img 
          src="https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif" 
          alt="Funny 404" 
          className="w-64 h-64"
        />
        <h1 className="font-extrabold text-6xl">404</h1>
        <p className="text-2xl">Oops! Looks like you got lost in space.</p>
        <p className="text-gray-400 text-lg">But don't worry, we're sending a rescue mission!</p>
        <Link 
          to="/" 
          className="bg-blue-500 hover:bg-blue-600 mt-4 px-4 py-2 rounded-lg text-lg text-white transition duration-300"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
