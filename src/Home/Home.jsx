import React from 'react';
import Hero from '../Components/Hero';
import VolunteerNeedsNow from '../Components/VolunteerNeedsNow';
import UpcomingEvent from '../Components/UpcomingEvent';
import SuccessStory from '../Components/SuccessStory';
import BackToTopButton from '../Components/BackToTopButton ';
import ImpactDashboard from '../Components/ImpactDashboard';
import NewsletterSignup from '../Components/NewsletterSignup';

const Home = () => {
    return (
        <main>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <VolunteerNeedsNow></VolunteerNeedsNow>
            </section>
            <section>
                <UpcomingEvent></UpcomingEvent>
            </section>
            <section>
                <ImpactDashboard></ImpactDashboard>
            </section>
            <section>
                <SuccessStory></SuccessStory>
            </section>
            <section>
                <NewsletterSignup></NewsletterSignup>
            </section>
            <BackToTopButton></BackToTopButton>
        </main>
    );
};

export default Home;