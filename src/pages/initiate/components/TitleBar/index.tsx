import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./index.scss";

const TitleBar = ({ children }) => {
  return (
    <View className="title-bar">
      <View className="title-bar-title">
        <Text>{children}</Text>
      </View>
      <AtIcon value="chevron-right" size="small" />
    </View>
  );
};

export default TitleBar;
