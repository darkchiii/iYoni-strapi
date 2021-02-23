import React from 'react' 
import './HeroSection.css'

export default ({data}) => {
    console.log("Hero.render data", data)
    const {title, subtitle}=data
    return (
        // <p>Hero</p>
        // <div className="Hero">
        //     <div className='hero-container'
        //        style={{backgroundImage: 'url(./images/HeroSectionBanner.png)'}}
        //     >
        //         <div className='hero-row-container'>
        //             <div className='hero-row'>
        //                 <div className='hero-column-1'>
        //                 <h1 className='heroColumnHeading'>{title}</h1>
        //                 <h2 className='heroColumnSubHeading'>{subtitle}</h2>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <section className='hero-section'>
        <div className='hero-container' 
        style={{backgroundImage: 'url(./images/HeroSectionBanner.png)'}}
        > 
            <div className='hero-row-container'>
            <div className='hero-row'>
                <div className='hero-column-1'>
                    <h1 className='heroColumnHeading'>{title}</h1>
                    <h2 className='heroColumnSubHeading'>{subtitle}</h2>
                    <div className='store-logo-row'>
                        <div className='store-logo-column'>
                            <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
                            <img className='hero-store-img' src='./images/google-play-store.png' alt='img'/>
                            </a>
                        </div>
                    <div className='store-logo-column'>
                        {/* <a href='#'>
                            <img className='hero-store-img' src='./images/google-play-store.png' alt='img' />
                        </a> */}
                    </div>
                </div>
            </div>
            <div className='hero-column-2'>
                <img className='app-img' src='./images/hero-mobile-1.png' alt='banner' />
        </div>
        </div>
        </div>
        </div>
        <div className='hero-container-mobile' 
        style={{backgroundImage: 'url(./images/hero-bg-mobile.png)'}}
        > 
        <div className='hero-mobile-text-container'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
        <div className='hero-mobile-images-container'>
            <img className='img-mobile-1' src='./images/hero-mobile-1.png' alt='hero-mobile-1'/>
            {/* <img className='img-mobile-2' src='./images/hero-mobile-2.png' alt='hero-mobile-2'/> */}
            {/* </div> */}
            {/* <div className='store-logo-row-mobile'> */}
                        {/* <div className='store-logo-column-mobile'> */}
                        <div className='m-store-wrap-temp'>
                            <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
                            <img className='hero-store-img-mobile' src='./images/google-play-store.png' alt='img'/>
                            </a>
                            </div>
                        {/* </div> */}
                    {/* <div className='store-logo-column-mobile'>
                        <a href='#'>
                            <img className='hero-store-img-mobile' src='./images/google-play-store.png' alt='img' />
                        </a>
                    </div> */}
                {/* </div> */}
                </div>
        </div>
        </section>

    )
}

// export default HeroSection ;