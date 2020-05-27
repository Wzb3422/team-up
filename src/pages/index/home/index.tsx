import Taro, { useEffect } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import TitleWithBar from "../../../components/TitleWithBar";
import { AtFab } from "taro-ui";

import "./index.scss";
const Index: Taro.FC = () => {
  useEffect(() => {
    Taro.setNavigationBarTitle({ title: "首页" });
  }, []);

  return (
    <View className="home">
      <TitleWithBar>热门活动</TitleWithBar>
      <View className="activity-list">
        <View className="activity-item">
          <View className="activity-img" />
          <View className="activity-desc">
            <Text className="activity-title">活动名称</Text>
            <Text className="activity-type">活动类别：集体默哀</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
