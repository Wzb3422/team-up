import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtAvatar, AtDivider } from 'taro-ui'

const ActivityCard: Taro.FC = () => {
  return (
    <View className='activity-card'>
      <View className='activity-card-top'>
        <View className='activity-card-img'></View>
        <View className='activity-card-team'>
          <AtAvatar circle size="small" image='https://jdc.jd.com/img/200'></AtAvatar>
          <AtAvatar circle size="small" image='https://jdc.jd.com/img/200'></AtAvatar>
          <AtAvatar circle size="small" image='https://jdc.jd.com/img/200'></AtAvatar>
          <AtAvatar circle size="small" image='https://jdc.jd.com/img/200'></AtAvatar>
          <AtAvatar circle size="small" image='https://jdc.jd.com/img/200'></AtAvatar>
        </View>
      </View>
      <View className='activity-card-bottom'>
        <View className='activity-card-title'>
          <Text style={{color: '#333', fontSize: '18px'}}>活动名称</Text>
          <Text style={{color: '#666', fontSize: '12px'}}>2020/2/10 - 2020/3/1</Text>
        </View>
        <View className='activity-card-status' style={{color: '#666'}}>
          活动状态：组队中
        </View>
      </View>
    </View>
  )
}

export default ActivityCard
