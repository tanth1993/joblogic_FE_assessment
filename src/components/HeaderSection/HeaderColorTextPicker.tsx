import React, { useContext, useRef } from 'react'
import { AppContext } from '../../App'
import { IColorItem } from '../../interfaces'
interface IProps {
    color: IColorItem
    index?: string
}
export const HeaderColorTextPicker: React.FC<IProps> = (props) => {
    const appValue = useContext(AppContext)
    const { onChangeColorItem } = appValue
    const { color, index } = props
    const input_color_value = useRef<string>(color?.hex)

    return (
        <div className="color-template_item">
            <p>{color?.name}</p>
            <label className='hex-string' htmlFor={index}>{color?.hex}</label>
            <input
                type="color"
                id={index}
                name={index}
                value={input_color_value.current}
                onChange={e => input_color_value.current = e.target.value}
                onBlur={(e) => {
                    onChangeColorItem && onChangeColorItem(input_color_value.current, +index)
                }}
            />
        </div>
    )
}
