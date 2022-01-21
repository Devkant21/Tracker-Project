import React, { useState} from 'react';
import { index } from './index';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


const Imageslider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

  return (
    <section className="slider">
        <FaArrowAltCircleRight className='left-arrow' />
        <FaArrowAltCircleLeft className='right-arrow' />
        {index.map((slide, index) => {
            return <img src={slide.image} alt='image' /
            >;
        })}
    </section>
    );
};

export default Imageslider;
