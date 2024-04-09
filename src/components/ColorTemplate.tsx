import React from 'react'
import { IColorItem } from '../interfaces'
interface IProps {
    colors?: IColorItem[]
}
export const ColorTemplate: React.FC<IProps> = (props) => {
    const { colors } = props
    return (
        <div className='color-template'>
            {colors?.map(c => {
                return <div className="color-template_item" style={{ backgroundColor: c?.hex }} key={c?.hex}>
                    <span>{c?.hex}</span>
                </div>
            })}
        </div>
    )
}
