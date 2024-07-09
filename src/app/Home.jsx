import Banner from '@/components/home/banner';
import Departments from '@/components/home/department/departments';
import OpeningHour from '@/components/home/openingHour';
import Recentbooks from '@/components/home/recentbooks/recentbooks';
import { NavbarComponent } from '@/components/shared/navBar';
import React from 'react';

const HomeComponent = () => {
    return (
        <section>
            {/* <NavbarComponent /> */}
            <Banner />
            <OpeningHour />
            <Departments />
            <Recentbooks />
        </section>
    );
};

export default HomeComponent;