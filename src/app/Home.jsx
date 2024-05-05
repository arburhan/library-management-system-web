import Banner from '@/components/home/banner';
import Departments from '@/components/home/department/departments';
import OpeningHour from '@/components/home/openingHour';
import Recentbooks from '@/components/home/recentbooks/recentbooks';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Banner />
            <OpeningHour />
            <Departments />
            <Recentbooks />
        </div>
    );
};

export default Home;