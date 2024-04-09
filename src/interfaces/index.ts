export interface IColorItem {
    slug?: string
    hex?: string
    name?: string
}
export interface IFeaturedImage {
    alt?: string
    url?: string
}

export interface ICombinationItem {
    liked?: boolean
    id?: number
    slug?: string
    color?: IColorItem
    featuredImage?: IFeaturedImage
    name?: string
    likes?: number
    colors?: IColorItem[]
}
export interface IRelatedCombinationItem {
    id?: number
    liked?: boolean
    slug?: string
    name?: string
    likes?: number
    colors?: IColorItem[]
}


export interface ICombination {
    combination?: ICombinationItem
    relatedCombinations?: IRelatedCombinationItem[]
}