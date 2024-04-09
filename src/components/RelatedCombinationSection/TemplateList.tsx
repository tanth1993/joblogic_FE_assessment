import React from 'react'
import { TemplateItem } from './TemplateItem'

export const TemplateList = () => {
    return (
        <div className="related-combination_list">
            <TemplateItem />
            <TemplateItem />
            <TemplateItem />
            <TemplateItem />
            <TemplateItem />
            <div className="related-combination_item see-more">
                <p>See more combinations</p>
            </div>
        </div>
    )
}
