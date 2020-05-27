import Taro, { useState } from "@tarojs/taro";
import { AtTabBar, AtFab } from "taro-ui";
import { View, Text } from "@tarojs/components";
import Mine from "./mine";
import Home from "./home";
import "./index.scss";

const Index: Taro.FC = () => {
  const toCreate = () => {
    Taro.navigateTo({
      url: "/pages/initiate/index",
    });
  };

  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <View>
      {currentIdx === 1 ? <Mine /> : <Home />}
      <AtTabBar
        tabList={[
          { title: "活动", iconType: "lightning-bolt" },
          { title: "我的", iconType: "user" },
        ]}
        onClick={(index) => setCurrentIdx(index)}
        current={currentIdx}
        fixed
      />
      <AtFab className="fab" onClick={toCreate}>
        <Text className="at-fab__icon at-icon at-icon-add"></Text>
      </AtFab>
    </View>
  );
};

export default Index;
