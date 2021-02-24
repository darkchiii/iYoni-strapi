import React from 'react' ;
import './Button.css' ;

const STYLES=['btn--primary'] ;
const SIZES= ['btn--medium', 'btn--large'] ;

export const Button = ({children, type, onClick, buttonSize}) =>
{
    const checkButtonSize = STYLES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0] ;

    return (
    <a href='https://play.google.com/store/apps/details?id=pl.lifebite.iyoni'> 
                 {/* <Link to='/pobierz-aplikacje' className='btn-mobile'> */}
        <button className={`btn--primary ${checkButtonSize} `}
        onClick={onClick}
        type={type}
        > 
            {children}
        </button>
</a>
    )
};
