import Taro, { useState } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { View } from '@tarojs/components'
import Mine from './mine'
import Home from './home'

const Index: Taro.FC = () => {

  const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <View>
      {currentIdx === 1 ? <Mine /> : <Home />}
      <AtTabBar
        tabList={[
          { title: '活动', iconType: 'lightning-bolt' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={index => setCurrentIdx(index)}
        current={currentIdx}
        fixed
      />
    </View>
  )
}

export default Index
