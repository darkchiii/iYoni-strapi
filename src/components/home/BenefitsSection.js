import React from 'react' ;
import './BenefitsSection.css' ;

export default ({data}) => {
  const {benefitTitle1, benefitDescription1, benefitTitle2, benefitDescription2, benefitTitle3, benefitDescription3, benefitTitle4, benefitDescription4, benefitTitle5, benefitDescription5}=data
    return (
        <section className='benefits-section' >
            <img className='vector-benefits' src='./images/vector-b-3.png' alt='vector-b-3'
               />
        <div className='list'>
            <div className='iphone-mockup-box'> 
            <img className='iphone-mockup' src='./images/iphone-mockup.png' alt='ip-mockup'/>
            </div>
    <ul className='bList'> 
    <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src='./images/list-vector.png' alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>{benefitTitle1}</div>
              <div className='bDescription'>
                {benefitDescription1}
              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src='./images/list-vector.png' alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              {benefitTitle2}             </div>
              <div className='bDescription'>
             {benefitDescription2}
              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src='./images/list-vector.png' alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              {benefitTitle3}           </div>
              <div className='bDescription'>
              {benefitDescription3}
              </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src='./images/list-vector.png' alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              {benefitTitle4}             </div>
              <div className='bDescription'>
              {benefitDescription4}            </div>
            </div>
          </li>
          <li className='bListItem'>
            <div className='bIcon'>
              <img className='benefits-vector-style' src='./images/list-vector.png' alt='vector' />
            </div>
            <div className='bContainer'>
              <div className='bHeading'>
              {benefitTitle5}               </div>
              <div className='bDescription'>
              {benefitDescription5}             </div>
            </div>
          </li>
 
        </ul>
     </div> 
        </section>
    )
}

