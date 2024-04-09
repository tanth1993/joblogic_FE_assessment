import React from 'react'
import { IColorItem } from '../../interfaces'
interface IProps {
    color: IColorItem
}
export const HeaderColorTextPicker: React.FC<IProps> = (props) => {
    const { color } = props
    return (
        <div className="color-template_item">
            <p>{color?.name}</p>
            <p>{color?.hex}</p>
        </div>
    )
}
