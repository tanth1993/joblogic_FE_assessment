import './index.css'
import React from 'react'
import { TemplateList } from './TemplateList'

export const RelatedCombinationSection = () => {
    return (
        <div className="related-combination">
            <h3>Related Combinations</h3>
            <div className="related-combination_wrapper">
                <TemplateList />
            </div>

            <div className="related-combination_browse">
                <h3>Use this color palette and create beautiful designs and documents!</h3>
                <span className='button'>Browse templates</span>
            </div>
        </div>
    )
}
