import { useEffect, useRef, useState } from 'react';

const ImpactDashboard = () => {
  const [counters, setCounters] = useState({
    volunteers: 0,
    hours: 0,
    organizations: 0,
    lives: 0
  });

  const dashboardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => {
      if (dashboardRef.current) {
        observer.unobserve(dashboardRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();
    const targetValues = {
      volunteers: 12500,
      hours: 84500,
      organizations: 320,
      lives: 250000
    };

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounters({
        volunteers: Math.floor(progress * targetValues.volunteers),
        hours: Math.floor(progress * targetValues.hours),
        organizations: Math.floor(progress * targetValues.organizations),
        lives: Math.floor(progress * targetValues.lives)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure we end on exact values
        setCounters(targetValues);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section 
      ref={dashboardRef}
      className="bg-gray-50 py-16"
      id="impact-dashboard"
    >
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-bold text-3xl text-center">
          Our Community Impact
        </h2>
        
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Volunteers Connected */}
          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow hover:-translate-y-1 duration-300">
            <div className="mb-2 font-bold text-blue-600 text-5xl">
              {counters.volunteers.toLocaleString()}
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Volunteers Connected
            </div>
            <div className="mt-2">
              <PeopleIcon />
            </div>
          </div>
          
          {/* Hours Donated */}
          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow hover:-translate-y-1 duration-300">
            <div className="mb-2 font-bold text-green-600 text-5xl">
              {counters.hours.toLocaleString()}
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Hours Donated
            </div>
            <div className="mt-2">
              <ClockIcon />
            </div>
          </div>
          
          {/* Organizations Supported */}
          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow hover:-translate-y-1 duration-300">
            <div className="mb-2 font-bold text-purple-600 text-5xl">
              {counters.organizations.toLocaleString()}
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Organizations Supported
            </div>
            <div className="mt-2">
              <BuildingIcon />
            </div>
          </div>
          
          {/* Lives Impacted */}
          <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow hover:-translate-y-1 duration-300">
            <div className="mb-2 font-bold text-orange-600 text-5xl">
              {counters.lives.toLocaleString()}
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Lives Impacted
            </div>
            <div className="mt-2">
              <HeartIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Icon Components
const PeopleIcon = () => (
  <svg className="mx-auto w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg className="mx-auto w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const BuildingIcon = () => (
  <svg className="mx-auto w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
  </svg>
);

const HeartIcon = () => (
  <svg className="mx-auto w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
  </svg>
);

export default ImpactDashboard;