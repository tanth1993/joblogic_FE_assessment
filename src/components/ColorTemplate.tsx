import React, { useState } from 'react'
import { IColorItem } from '../interfaces'
import { checkDone } from '../utils'
interface IProps {
    colors?: IColorItem[]
}
export const ColorTemplate: React.FC<IProps> = (props) => {
    const { colors } = props
    const [copiedItem, setCopiedItem] = useState('')

    const onCopy = (hexCode: string) => {
        setCopiedItem(hexCode)
        // save on clipboard 
        navigator.clipboard.writeText(hexCode);
        alert("Copied: " + hexCode);
    }
    return (
        <div className='color-template'>
            {colors?.map(c => {
                const isCopiedItem = c?.hex === copiedItem
                return <div
                    key={c?.hex}
                    className={`color-template_item`}
                    style={{ backgroundColor: c?.hex }}
                    onClick={() => onCopy(c?.hex)}
                >
                    <span>{isCopiedItem ? checkDone() : c?.hex}</span>
                </div>
            })}
        </div>
    )
}
