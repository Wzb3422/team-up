import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  size?: string
  weight?: number
  height?: string
}

const TitleWithBar: Taro.FC<Props> = ({ children, size, weight = 400, height }) => {
  return (
    <View className="container" style={{ height }}>
      <Text className="text" style={{ fontWeight: weight, fontSize: size }}>
        {children}
      </Text>
    </View>
  )
}

export default TitleWithBar
