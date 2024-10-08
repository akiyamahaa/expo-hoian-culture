import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { tourList, tourSuggest } from '@/data/data'
import ListTimeLine from './ListTimeLine'
import { ITour } from '@/types/common'

const { width } = Dimensions.get('screen')

const TourSuggestion = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [selectedTour, setSelectedTour] = useState('1')
  const [tourData, setTourData] = useState<ITour[]>([])
  const handleSuggest = () => {
    setTourData(tourSuggest[selectedTour])
  }
  return (
    <View className="mt-8 space-y-4">
      <Text className="font-semibold text-[20px] text-gray-800">Lộ trình tham quan</Text>
      <View className="mb-10 flex-row items-center justify-between">
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={tourList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Thể loại' : '...'}
          searchPlaceholder="Search..."
          value={selectedTour}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSelectedTour(item.value)
            setIsFocus(false)
          }}
        />
        <TouchableOpacity onPress={handleSuggest}>
          <View className="bg-primary-400 px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold text-md">Gợi ý</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ListTimeLine tourInfo={tourData} />
    </View>
  )
}

export default TourSuggestion

const styles = StyleSheet.create({
  dropdown: {
    width: width - 160,
    height: 36,
    backgroundColor: 'white',
    borderColor: '#D1D5DB',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
