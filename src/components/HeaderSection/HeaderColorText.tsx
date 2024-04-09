import React from 'react'
import { HeaderColorTextPicker } from './HeaderColorTextPicker'
interface IProps {
}
export const HeaderColorText: React.FC<IProps> = (props) => {
    return (
        <div className='color-template is-text'>
            <HeaderColorTextPicker color={{ hex: '#FFF4BD', name: 'yellow' }} />
            <HeaderColorTextPicker color={{ hex: '#F4B9B8', name: 'yellow2' }} />
            <HeaderColorTextPicker color={{ hex: '#85D2D0', name: 'yellow3' }} />
            <HeaderColorTextPicker color={{ hex: '#887BB0', name: 'yellow4' }} />
        </div>
    )
}
