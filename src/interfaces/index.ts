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
    featuredImage?: string
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

// "combination": {
//     "liked": false,
//     "id": 719,
//     "slug": "pastel-blonde",
//     "color": {
//         "slug": "rose-quartz",
//         "hex": "#F7CAC9",
//         "name": "Rose Quartz"
//     },
//     "featuredImage": {
//         "alt": "",
//         "url": "RoseQuartz.png"
//     },
//     "name": "Pastel Blonde",
//     "likes": 10953,
//     "colors": [
//         {
//             "slug": "yellow",
//             "hex": "#fff4bd",
//             "name": "Yellow"
//         },
//
//     ]
// },
// "relatedCombinations": [
//     {
//         "id": 1109,
//         "name": "Trees in Bloom",
//         "slug": "trees-in-bloom",
//         "colors": [
//             "#f9ccd3",
//             "#aa1945",
//             "#f1ced4",
//             "#391306"
//         ],
//         "likes": 5469,
//         "liked": false
//     },
//
// ]
// },