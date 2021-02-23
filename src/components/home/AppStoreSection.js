import React from 'react' ;
import './AppStoreSection.css' ;

export default ({data}) => {
    console.log("Hero.render data", data)
    const {text, pinkText}=data
    return (
        <section className='app-store-section'>
            <div className='rectangle'>
                <div className='app-store-row'>
                    <div className='app-column-1'>
                        <h3>{text}
                        <b className='pink'> {pinkText}</b>
                        </h3>
                        {/* <div className='store-img-row'>
                            <div className='store-img-col'>
                                <img className='store-img' src='./images/app-store.png' alt='store-img'/>
                            </div>
                            <div className='store-img col'>
                                <img className='store-img' src='./images/google-play-store.png' alt='store-img'/>
                            </div>
                        </div> */}

                        <div className='google-store-wrap' >
                        <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
                        <img className='store-img' src='./images/google-play-store.png' alt='store-img'/>
                        </a>
                        </div>
                    </div>
                </div>
                <img className='ellipse' src='./images/elipsa.png' alt='elipsa'/>
                <img className='phone-img' src='./images/phone-mockup.png' alt='phone-img'/>
            </div>
        </section>
    )
}

// export default AppStoreSection