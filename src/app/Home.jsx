import Banner from '@/components/home/banner';
import Departments from '@/components/home/department/departments';
import OpeningHour from '@/components/home/openingHour';
import Recentbooks from '@/components/home/recentbooks/recentbooks';

import React from 'react';

const HomeComponent = () => {
    return (
        <section>

            <Banner />
            <OpeningHour />
            <Departments />
            <Recentbooks />
        </section>
    );
};

export default HomeComponent;