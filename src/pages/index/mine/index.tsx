import Taro, { useEffect } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtButton, AtAvatar } from 'taro-ui'
import TitleWithBar from '../../../components/TitleWithBar'
import ActivityCard from './components/ActivityCard'
import './index.scss'

const toViewAll = () => {
  
}

const Mine: Taro.FC = () => {

  useEffect(() => {
    Taro.setNavigationBarTitle({title: '我的'})
  }, [])

  return (
    <View className='mine'>
      <View className='user'>
        <View className ='user-content'>
          <AtAvatar circle image='https://jdc.jd.com/img/200' openData={{type: 'userAvatarUrl'}}></AtAvatar>
          <View className='user-desc'>
            <Button openType="getUserInfo" className='auth-btn' hover-class='none'>点击登录</Button>
          </View>
        </View>
      </View>

      <View className='list-head'>
        <TitleWithBar>我参与的</TitleWithBar>
        <View style={{color: "#666", fontSize: '14px'}}>查看全部 ></View>
      </View>
      <ActivityCard />
      <View className='list-head'>
        <TitleWithBar>我发起的</TitleWithBar>
        <View style={{color: "#666", fontSize: '14px'}}>查看全部 ></View>
      </View>
      <ActivityCard />
      <View style={{height: '600px'}}></View>
    </View>
  )
}

export default Mine
