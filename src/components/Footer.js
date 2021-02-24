import React from 'react' ;
import { Link } from 'react-router-dom';
import './Footer.css' ;

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/'>Polityka prywatnosci</Link>
                        <Link to='/'>Regulamin</Link>
                        <Link to='/'>Bezpieczeństwo</Link>
                    </div>
                </div>
                 {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/'>Baza wiedzy</Link>
                        <Link to='/'>Eksperci</Link>
                    </div>
                </div> */}
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/'>Pobierz aplikację</Link>
                        <Link to='/'>iYoni pro</Link>
                    </div>
                </div> */}

            </div>
            <section className="social-media">
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                    <Link to="/" className="social-logo">
                    <img className="logo-footer" src='./images/logo-footer.png' 
                    alt='logo-footer' /> 
                    </Link>
                    </div>
                    <div className='social-icons'>
                        <Link class='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i class='fab fa-facebook'></i>
                        </Link>
                        <Link class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i class='fab fa-instagram'></i>
                        </Link>
                        <Link class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <i class='fab fa-twitter'></i>
                        </Link>
                    </div>
                </div>
            </section>
{/* 
            <div className='footer-water-sign-container'>
                <img className='footer-water-sgin-img' src='./images/footer-1.png' alt=''/>
            </div> */}
                            <img className='footer-vector' src='./images/vector-footer.png' alt=''/>

        </div>
    )
}

export default Footer
