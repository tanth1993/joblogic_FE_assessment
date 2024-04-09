import React from 'react'
import { IRelatedCombinationItem } from '../../interfaces'
interface IProps {
    conbination?: IRelatedCombinationItem
}
export const TemplateItem: React.FC<IProps> = (props) => {
    const { conbination } = props

    return (
        <div className="related-combination_item">
            {conbination?.colors?.map(hexCode => {
                return <div key={hexCode} className="related-combination_item_color" style={{ backgroundColor: hexCode }}></div>
            })}
        </div>
    )
}
