
import React from 'react' ;
import './AboutSection.css' ;
// import './BioAppSection.css';
// import './BioSection' ;

export default ({data}) => {
    const {title, description}=data
    return (
        <section className='about-section'>
            <div className='about-container'>
            {/* <div className='water-marks-1'>
                        <img className='b-vector-1' src='./images/vector-b-1.png' alt='vector-b-1'/> 
                        <img className='b-vector-2' src='./images/vector-b-2.png' alt='vector-b-2'/> 
                    </div> */}
                <div className='pink-rectangle'>
                    {/* <div className='water-marks-1'> */}
                        <img className='b-vector-1' src='./images/vector-b-1.png' alt='vector-b-1'/>
                        <img className='b-vector-2' src='./images/vector-b-2.png' alt='vector-b-2'/>
                    {/* </div> */}
                    <h1>{title} </h1>
                    <h2>{description}</h2>
                </div>
            </div>
            </section>
    )
                }

// export default AboutSection ;