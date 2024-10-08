import { ImageBackground, ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import SlideImage from '@/components/slider'
import { images } from '@/constants'
import HeaderTool from '@/components/HeaderTool'
import { allPosts } from '@/data/data'
import { getRandomArray } from '@/utils/common'
import ListCard from '@/components/ListCard'
import TourSuggestion from '@/components/TourSuggestion'

const Home = () => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScrollView className="flex-1">
        <ScreenWrapper>
          <View className="space-y-4">
            {/* Toolbar */}
            <HeaderTool />
            {/* Trending */}
            <View>
              <View className="px-5">
                <Text className="font-semibold text-3xl text-gray-800">Xu hướng</Text>
              </View>
              <View className="">
                <SlideImage itemList={getRandomArray(allPosts, 3)} />
              </View>
            </View>
            {/* Slideshow */}
            {/* News */}
            <View className="px-5">
              {/* New Suggestion */}
              <View className="gap-4">
                <View className="flex-row justify-between items-center">
                  <Text className="font-semibold text-[20px] text-gray-800">Gợi ý cho bạn</Text>
                </View>
                <View>
                  <ListCard items={getRandomArray(allPosts, 2)} />
                </View>
              </View>
              {/* Tour Suggestion */}
              <TourSuggestion />
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </ImageBackground>
  )
}

export default Home
