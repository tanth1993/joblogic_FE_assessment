import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { IRelatedCombinationItem } from '../../interfaces'
import { fillHeartIcon, heartIcon } from '../../utils'

interface IProps {
    conbination?: IRelatedCombinationItem
}
export const TemplateItem: React.FC<IProps> = (props) => {
    const appValue = useContext(AppContext)
    const { onChangeSelectedCombination } = appValue
    const { conbination } = props
    const { colors, name, liked, likes } = conbination || {}
    return (
        <div className="related-combination_item" onClick={() => onChangeSelectedCombination(conbination?.id)} >
            {colors?.map(hexCode => {
                return <div key={hexCode} className="related-combination_item_color" style={{ backgroundColor: hexCode }}></div>
            })}
            <div className="related-combination_item_info">
                <div className="info_name">{name}</div>
                <div className="info_like">
                    <div className="like_svg">{liked ? fillHeartIcon() : heartIcon()}</div>
                    <div className="like_number">{likes}</div>
                </div>
            </div>
        </div>
    )
}
