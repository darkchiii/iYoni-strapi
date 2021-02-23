import React from 'react' ;
import './ValuesSection.css' ;
import ReactMarkdown from 'react-markdown' ;

export default ({data}) => {
    console.log("Hero.render data", data)
    const {title, val1, valDescription1, val2, valDescription2, val3, valDescription3}=data
    return (
        <section className='values-section-container'>
            <div className='values-rectangle'>
                <h1><ReactMarkdown className="line-break">{title}</ReactMarkdown></h1>
                <div className='values-row'>
                    <div className='values-col-1'>
                        <img className='values-icon' src='./images/values1.png' alt='val1'/>
                    </div>
                    <div className='values-col-2'>
                        <h3><ReactMarkdown className="line-break">{val1}</ReactMarkdown></h3>
                    </div>
                    <div className='values-col-3'>
                    <ReactMarkdown>{valDescription2}</ReactMarkdown>
                    </div>
                </div>

<hr className='values-hr'/>

                <div className='values-row'>
                    <div className='values-col-1'>
                    <img className='values-icon' src='./images/values2.png' alt='val2'/>
                    </div>
                    <div className='values-col-2'>
                        <h3><ReactMarkdown className="line-break">{val2}</ReactMarkdown></h3>
                    </div>
                    <div className='values-col-3'>
                        {/* <p>{valDescription2}</p> */}
                        <ReactMarkdown>{valDescription2}</ReactMarkdown>
                    </div>
                </div>

<hr className='values-hr'/>

                <div className='values-row'>
                    <div className='values-col-1'>
                    <img className='values-icon' src='./images/values3.png' alt='val3'/>
                    </div>
                    <div className='values-col-2'>
                        <h3><ReactMarkdown className="line-break">{val3}</ReactMarkdown></h3>
                    </div>
                    <div className='values-col-3'>
                    <ReactMarkdown>{valDescription3}</ReactMarkdown>
                    </div>
                </div>

            </div>
        </section>
    )
}

// export default ValuesSection