import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import IconButton from '@/components/IconButton'
import { ArrowLeft } from 'iconsax-react-native'
import { router } from 'expo-router'
import MenuCard from '@/components/MenuCard'
import { listMenu } from '@/data/data'

const Menu = () => {
  const backPress = () => {
    router.back()
  }
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <View className="px-5 space-y-4">
          <IconButton IconName={ArrowLeft} onPress={backPress} />
          <View>
            <Text className="font-semibold text-3xl text-gray-800">Chuyên mục</Text>
            <View className="flex-row flex-wrap">
              {listMenu.map((menu, index) => (
                <TouchableOpacity
                  className="w-1/2 p-2"
                  key={`${menu.category}-${index}`}
                  onPress={() => {
                    router.push({
                      pathname: '/view-more',
                      params: {
                        menuId: menu.category,
                      },
                    })
                  }}
                >
                  <MenuCard imageSource={menu.image} title={menu.title} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Menu
