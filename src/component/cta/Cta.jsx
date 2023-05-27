import React from 'react';
import CV from '../cta/Dawayne-CV.pdf';

const  Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >Download CV</a>
     


    </div>
  )
}

export default Cta;