import React, { useContext, useState } from 'react'
import { TemplateItem } from './TemplateItem'
import { AppContext } from '../../App'
interface IProps {

}
export const TemplateList: React.FC<IProps> = (props) => {
    const appValue = useContext(AppContext)
    const { relatedCombinations } = appValue?.selectedConbination || {}
    const [isSeeMore, setIsSeeMore] = useState(false)
    const isMoreThanFive = relatedCombinations?.length > 5
    const isShowAll = isSeeMore || !isMoreThanFive
    return (
        <div className="related-combination_list">
            {relatedCombinations?.slice(0, !isShowAll ? 5 : undefined)?.map(conbination => {
                return <TemplateItem key={conbination?.id} conbination={conbination} />
            })}
            {(!isShowAll) && <div className="related-combination_item see-more" onClick={() => setIsSeeMore(true)}>
                <p>See more combinations</p>
            </div>}
        </div>
    )
}
