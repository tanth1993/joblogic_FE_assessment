import React from 'react'
import background from '../assets/_images/Asset/foreground.png'
import thumb from '../assets/_images/Thumbnail/Burgundy21.png'

export const Body = () => {
    return (
        <div className="body">
            <img className='background_img' src={background} alt="" />
            <div className="body_content">
                <div className="body_color_thumbnail">
                    <div className="body_color_thumbnail_img">
                        <img src={thumb} alt="" />
                    </div>
                    <div className="body_color_thumbnail_picker"></div>
                </div>

            </div>
        </div>
    )
}
