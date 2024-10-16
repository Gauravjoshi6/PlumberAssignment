import React from 'react';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function Card(props) {
    return (
        <div className='card h-[400px] w-full sm:w-[300px] md:w-[330px] bg-white shadow-black shadow-lg flex flex-col p-6 items-center text-center'>
            <img 
                src={props.img} 
                className='h-[150px] w-[150px] border-[#2c026f] bg-white border-[5px] -mt-[80px] rounded-full'
                alt={props.name} 
            />
            <h2 className='text-2xl font-bold text-[#1d0c39] mt-5'>{props.name}</h2>
            <h4 className='text-lg text-[#8e5ae3] font-bold mt-2'>{props.detail}</h4>
            <a href='#' className='text-xl text-[#2c026f] font-bold mt-4'>{props.link}</a>
        </div>
    );
}

function Dives() {
    return (
        <div className='flex flex-wrap justify-center gap-6 mt-36'>
            <Card
                img={img1}
                name='Emergency Plumbing Services'
                detail='Our Plumber ready to go 24/7 for emergencies - including nights, weekends and holiday'
                link='EXPLORE THIS SERVICE >'
            />
            <Card
                img={img4}
                name='Plumbing and Drains'
                detail='As the largest plumbing and drain service company, we make thousands of repairs every day'
                link='EXPLORE THIS SERVICE >'
            />
            <Card
                img={img2}
                name='Water Damage'
                detail='Our teams are equipped with state-of-the-art water extraction and cleanup equipment.'
                link='EXPLORE THIS SERVICE >'
            />
            <Card
                img={img3}
                name='Water Heaters'
                detail='Trust Roto-Rooter for repair and replacement of gas, electric, and tankless water heaters.'
                link='EXPLORE THIS SERVICE >'
            />
        </div>
    );
}

export default Dives;
