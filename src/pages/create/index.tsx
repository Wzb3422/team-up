import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtTextarea, AtButton }  from 'taro-ui'

const Create: Taro.FC = () => {
  return (
    <View>
      <AtInput
        name='value'
        title='活动名称'
        type='text'
        placeholder='分享会'
        onChange={() => {}}
      />
      <AtInput
        name='value'
        title='活动名称'
        type='text'
        value=''
        onChange={() => {}}
      />
      <AtTextarea
        value={this.state.value}
        onChange={() => {}}
        maxLength={200}
        placeholder='请填写活动描述'
      />
      <AtInput
        name='value'
        title='活动制度'
        type='text'
        value='晋级制'
        onChange={() => {}}
      />
      <AtButton type='primary'>下一步</AtButton>
    </View>
  )
}

export default Create
