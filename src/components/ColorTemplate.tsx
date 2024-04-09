import React from 'react'
interface IProps {
    colors?: any[]
}
export const ColorTemplate: React.FC<IProps> = (props) => {
    const { colors } = props
    return (
        <div className='color-template'>
            <div className="color-template_item">1</div>
            <div className="color-template_item">2</div>
            <div className="color-template_item">3</div>
            <div className="color-template_item">4</div>
        </div>
    )
}
