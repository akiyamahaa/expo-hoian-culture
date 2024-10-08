import { ImageSourcePropType } from 'react-native'

export enum ECategory {
  HOTEL,
  PLACE,
  BEACH,
  CAFE,
  CRAFT,
  FOOD,
}

export interface IData {
  id: number
  image: any
  category: ECategory
  description: string
  title: string
  body: Array<{
    title: string
    image?: ImageSourcePropType
    content: string
  }>
}

export interface ITotalData {
  id: ECategory
  title: string
  image: ImageSourcePropType
  list: IData[]
}

export interface IObjectTotalData {
  [key: number]: ITotalData
}

export interface ITour {
  title: string
  description: string
  posts: IData[]
  day: number
}

export interface IObjectTour {
  [tourType: string]: ITour[]
}
