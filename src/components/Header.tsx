import React from 'react'

export const Header = () => {
    return (
        <div className='header'>
            <div className="header_content">
                <div className="header_breadcumb">
                    <p>Colors</p>
                    <span>{`>`}</span>
                    <p>Color Palettes</p>
                    <span>{`>`}</span>
                    <p>Pastel Blonde</p>
                </div>
                <div className="header_title">
                    <p>Pastel Blonde</p>
                    <p>Color combination</p>
                </div>
            </div>
        </div>
    )
}
