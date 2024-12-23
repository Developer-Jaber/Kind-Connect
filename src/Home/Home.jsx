import React from 'react';
import Hero from '../Components/Hero';
import VolunteerNeedsNow from '../Components/VolunteerNeedsNow';

const Home = () => {
    return (
        <main>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <VolunteerNeedsNow></VolunteerNeedsNow>
            </section>
        </main>
    );
};

export default Home;