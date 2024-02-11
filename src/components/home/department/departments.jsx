import React from 'react';
import Title from '../../shared/title';
import cseImg from '../../../../public/images/departments/cseImg.png';
import DepartmentCard from './departmentCard';
import DepartmentData from '@/data/departments.json';

const Departments = () => {
    return (
        <section>
            <Title name={"Departments"} />
            <div className="grid grid-cols-3 gap-3 md:grid md:grid-cols-4 mx-[50px] md:mx-[200px] justify-evenly items-center md:gap-y-6 my-3">
                {
                    DepartmentData.map(department => <DepartmentCard key={department._id} department={department.name} deptImage={cseImg} />)
                }
            </div>

        </section>
    );
};

export default Departments;