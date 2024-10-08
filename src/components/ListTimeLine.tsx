import { Text, View } from 'react-native'
import React from 'react'
import ListCard from './ListCard'
import { ITour } from '@/types/common'

type Props = {
  tourInfo: ITour[]
}

const ListTimeLine = ({ tourInfo }: Props) => {
  console.log('🚀 ~ ListTimeLine ~ tourInfo:', tourInfo)
  return (
    <View className="space-y-6">
      {tourInfo.map((tour, index) => (
        <View className="flex-row gap-2" key={`${tour.day}-${tour.title}`}>
          <View className="flex-col items-center pt-2">
            <View className="h-2.5 w-2.5 bg-primary-400 rounded-full z-10" />
            <View
              className={`w-0.5 flex-1 bg-primary-200 `}
              style={{ marginTop: index > 0 ? -60 : 0 }}
            />
          </View>
          <View className="flex-1 space-y-2">
            <View className="space-y-2">
              <Text className="font-semibold text-[20px] text-zinc-800">
                {tour.title} (Ngày {tour.day})
              </Text>
              <View className="space-y-2">
                <Text className="text-sm text-zinc-500">{tour.description}</Text>
                <View>
                  <ListCard items={tour.posts} size="small" />
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default ListTimeLine
