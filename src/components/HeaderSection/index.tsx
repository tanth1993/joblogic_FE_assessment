import React, { useContext } from 'react'
import thumb from '../../assets/_images/Thumbnail/Burgundy21.png'
import background from '../../assets/_images/Asset/foreground.png'
import { ColorTemplate } from '../ColorTemplate'
import { HeaderColorText } from './HeaderColorText'
import { AppContext } from '../../App'
import { fillHeartIcon, heartIcon } from '../../utils'

export const Header = () => {
    const appValue = useContext(AppContext)
    const { name, featuredImage, colors, color, liked, likes } = appValue?.selectedConbination?.combination || {}

    const thumbnailUrl = require(`../../assets/_images/Thumbnail/${featuredImage?.url}`)
    const renderLikes = () => {
        return <div className="header_thumbnail_like">
            <span>{liked ? fillHeartIcon() : heartIcon()}</span>
            <span>{likes}</span>
        </div>
    }
    return (
        <div className='header' >
            <div className="background-color" style={{ backgroundColor: color?.hex }}>
                <img src={background} alt="" />
            </div>
            <div className="header_content">
                <div className="header_content_title">
                    <div className="header_breadcumb">
                        <p>Colors</p>
                        <span>{`>`}</span>
                        <p>Color Palettes</p>
                        <span>{`>`}</span>
                        <p>{name || '-'}</p>
                    </div>
                    <div className="header_title">
                        <p>{name || '-'}</p>
                        <p>Color combination</p>
                    </div>
                </div>
                <div className="header_thumbnail">
                    {renderLikes()}
                    <div className="header_color_thumbnail">
                        <div className="header_color_thumbnail_img">
                            <img src={thumbnailUrl} alt={featuredImage?.alt} />
                        </div>
                        <div className="header_color_thumbnail_picker">
                            <ColorTemplate colors={colors} />
                        </div>
                    </div>
                </div>
                <HeaderColorText />
            </div>
        </div>
    )
}
