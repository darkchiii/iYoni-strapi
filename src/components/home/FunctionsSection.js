import React from 'react';
import './FunctionsSection.css';


export default ({ data }) => {
    const { title, function1, function2, function3, function4, function5, function6, function7, note1, note2 } = data
    return (
        <section className='functions-section'>
            <h1>{title}</h1>

            <div className='flex-wrapper-a'>
                <div className='flex-container'>
                    <div className='flex-col-container-a'>
                        <img className='fun-icon' src='./images/fun1.png' alt='1' />
                        <p className='fun-description'>{function1}</p>
                    </div>
                    <div className='flex-col-container-a'>
                        <img className='fun-icon' src='./images/fun2.png' alt='2' />
                        <p className='fun-description'>{function2}</p>
                    </div>
                    <div className='flex-col-container-a'>
                        <img className='fun-icon' src='./images/fun3.png' alt='3' />
                        <p className='fun-description'>{function3}</p>
                    </div>
                    <div className='flex-col-container-a'>
                        <img className='fun-icon' src='./images/fun4.png' alt='4' />
                        <p className='fun-description-e'>{function4}</p>
                    </div>
                </div>
            </div>

            <div className='flex-wrapper-b'>
                <div className='flex-container'>
                    <div className='flex-col-container-b'>
                        <img className='fun-icon-a' src='./images/fun5.png' alt='5' />
                        <div className="wrapper">
                            <p className='fun-description-d'>{function5}</p>
                            <p className='fun-info-a'>{note1}</p>
                        </div>
                    </div>
                    <div className='flex-col-container-b'>
                        <img className='fun-icon' src='./images/fun6.png' alt='6' />
                        <div className="wrapper-b">
                            <p className='fun-description-c'>{function6}</p>
                            <p className='fun-info-b'>{note2}</p>
                        </div>
                    </div>
                    <div className='flex-col-container-b'>
                        <img className='fun-icon' src='./images/fun7.png' alt='7' />
                        <p className='fun-description-b'>{function7}</p>
                    </div>

                </div>
            </div>


            {/* <div className='app-stores-wrapper'>
                <div className='store-row'>
                    <div className='store-column'>
                        <img className='store-img' src='./images/app-store.png' alt='apple-store'/>
                    </div>
                    <div className='store-column'>
                        <img className='store-img' src='./images/google-play-store.png' alt='google-store'/>
                    </div>
                </div>
            </div>  */}

            <div className='google-store-wrapper'>
                <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'>
                    <img className='store-img-2' src='./images/google-play-store.png' alt='google-store' />
                </a>
            </div>


        </section>
    )
}

// export default FunctionsSection