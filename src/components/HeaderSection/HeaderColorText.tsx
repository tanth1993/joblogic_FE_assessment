import React from 'react'
import { HeaderColorTextPicker } from './HeaderColorTextPicker'
import { IColorItem } from '../../interfaces'
interface IProps {
    colors?: IColorItem[]
}
export const HeaderColorText: React.FC<IProps> = (props) => {
    const { colors } = props
    return (
        <div className='color-template is-text'>
            {colors?.map(c => {
                return <HeaderColorTextPicker key={c?.hex} color={c} />
            })}
        </div>
    )
}
