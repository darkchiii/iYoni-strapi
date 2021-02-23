import React from 'react' ;
import './MomSection.css' ;
import ReactMarkdown from 'react-markdown' ;

export default({data}) => {
    console.log("Hero.render data", data)
    const {quote, signature, button, title, subtitle, button2}=data
    return (
        <section className='mom-section-container'>
            <div className='happy-mom-container'>
                <div className='happy-mom-row'>
                    <div className='mom-column1'>
                    <img className='happy-mom-pic' src='./images/happy-mom.png' alt='happy-mom'/>
                    </div>
                    <div className='mom-column2-rectangle'>
                    {/* <div className='quote-icon'>
                        <i className="fas fa-quote-left"/>
                    </div> */}
                        <div className='text-wrapper'>
                        <div className='quote-icon'>
                        <i className="fas fa-quote-left"/>
                        </div>
                        <div className='p2'>{quote}</div>
                        <div className='p3'>{signature}</div>
                        <div className='base-button-wrapper'> 
                        <button className='base-button'>{button}</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='vector-mom' src='./images/vector-mom.png' alt='vector-mom'/>
            <div className='text-wrapper2'>
                <div className='mom-title'>
                    <ReactMarkdown className="line-break">
                    {title}
                    </ReactMarkdown>
        
                    </div> 
                <div className='mom-subtitle'> 
                <ReactMarkdown className="line-break">{subtitle}</ReactMarkdown>
                </div>
                <p className='p-rec'>
                        {button2}
                    </p>
                <div className='mom-rectangle'>
                </div>
            </div>
        </section>
    )
}
