import Taro from "@tarojs/taro";
import { Swiper, SwiperItem, View } from "@tarojs/components";

const HomeSwiper = () => (
  <Swiper
    className="home-swiper"
    indicatorColor="#999"
    indicatorActiveColor="#333"
    circular
    indicatorDots
    autoplay
  >
    <SwiperItem>
      <View className="home-swiper-item">1</View>
    </SwiperItem>
    <SwiperItem>
      <View className="home-swiper-item">2</View>
    </SwiperItem>
    <SwiperItem>
      <View className="home-swiper-item">3</View>
    </SwiperItem>
  </Swiper>
);

export default HomeSwiper;
