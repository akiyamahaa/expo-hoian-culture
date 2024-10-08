import { View } from 'react-native'
import React from 'react'
import { IData } from '@/data/data'
import Card from './Card'

type Props = {
  items: IData[]
  size?: 'small' | 'normal'
}

const ListCard = ({ items, size = 'normal' }: Props) => {
  return (
    <View className="space-y-4">
      {items.map((data) => (
        <View className="my-1" key={data.id}>
          <Card item={data} size={size} />
        </View>
      ))}
    </View>
  )
}

export default ListCard
