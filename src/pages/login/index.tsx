import Taro, { useState } from '@tarojs/taro';
import { View, Text, OpenData } from '@tarojs/components';
import { AtAvatar, AtButton } from 'taro-ui';
import './index.scss';

const Login = () => {
  return (
    <View className='login'>
      <AtAvatar
        circle
        image='https://jdc.jd.com/img/200'
        openData={{ type: 'userAvatarUrl' }}
      />
      <View>
        <OpenData type='userNickName' />
        <Text>，你好</Text>
      </View>
      <AtButton customStyle={{ padding: '0 40' }} type='primary'>
        登录
      </AtButton>
    </View>
  );
};

export default Login;
