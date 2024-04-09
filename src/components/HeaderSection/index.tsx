import React from 'react'
import thumb from '../../assets/_images/Thumbnail/Burgundy21.png'
import background from '../../assets/_images/Asset/foreground.png'
import { ColorTemplate } from '../ColorTemplate'
import { HeaderColorText } from './HeaderColorText'
export const Header = () => {
    return (
        <div className='header' >
            <div className="background-color" style={{ backgroundColor: '#F7CDCC' }}>
                <img src={background} alt="" />
            </div>
            <div className="header_content">
                <div className="header_content_title">
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
                <div className="header_thumbnail">
                    <div className="header_color_thumbnail">
                        <div className="header_color_thumbnail_img">
                            <img src={thumb} alt="" />
                        </div>
                        <div className="header_color_thumbnail_picker">
                            <ColorTemplate />
                        </div>
                    </div>
                </div>
                <HeaderColorText />
            </div>
        </div>
    )
}
