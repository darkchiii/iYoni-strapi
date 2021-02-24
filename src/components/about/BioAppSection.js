import React from 'react';
import './BioAppSection.css';
import ReactMarkdown from 'react-markdown';

export default ({ data }) => {
    const { text } = data
    return (
        <section className='bio-store-section'>
            <div className='bio-app-rectangle'>
                <div className='bio-app-container'>
                    <img className='bio-app-logo' src='./images/logo-footer.png' alt='logo' />
                    <h3> <ReactMarkdown className="line-break">
                        {text}
                    </ReactMarkdown>
                    </h3>

                    {/* <div className='google-store-wrap' >
                        <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
                            <img className='store-img' src='./images/google-play-store.png' alt='store-img' />
                        </a>
                    </div> */}
                                         <img className='bio-store-img' src='./images/google-play-store.png' alt='store-img'/>
                        
                        {/* <img className='rec-img' src='./images/bio-rec.png' alt='bio-img'/>
                   <img className='rec-img-mobile' src='./images/bio-rec-mobile.png' alt='bio-img-mobile'/> */}
                           </div>
                

                <img className='rec-img' src='./images/bio-rec.png' alt='bio-img' />
                <img className='rec-img-mobile' src='./images/bio-rec-mobile.png' alt='bio-img-mobile' />
                {/* </div> */}
                </div>

            {/* </div> */}
        </section>
    )
}
