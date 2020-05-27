import Taro, { useEffect } from "@tarojs/taro";
import { View, Button, OpenData } from "@tarojs/components";
import { AtButton, AtAvatar } from "taro-ui";
import TitleWithBar from "../../../components/TitleWithBar";
import ActivityCard from "./components/ActivityCard";
import "./index.scss";

const toViewAll = () => {};

const Mine: Taro.FC = () => {
  useEffect(() => {
    Taro.setNavigationBarTitle({ title: "我的" });
  }, []);

  const login = () => {
    let token = "";
    Taro.login({
      success: function (res) {
        if (res.code) {
          Taro.request({
            url: "https://teamup.guoxy.top/api/v1/user/login",
            method: "POST",
            data: {
              code: res.code,
            },
            success(res) {
              token = res.data.token;
              Taro.setStorageSync("token", token);
              Taro.request({
                url: "https://teamup.guoxy.top/api/v1/user/info",
                header: {
                  Authorization: `Bearer ${token}`,
                },
                success(res) {
                  console.log(res.data);
                },
              });
            },
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      },
    });
  };

  return (
    <View className="mine">
      <View className="user">
        <View className="user-content">
          <AtAvatar
            circle
            image="https://jdc.jd.com/img/200"
            openData={{ type: "userAvatarUrl" }}
          ></AtAvatar>
          <View className="user-desc">
            <View className="user-name">
              <OpenData type="userNickName" />
            </View>
          </View>
        </View>
      </View>

      <View className="list-head">
        <TitleWithBar>我参与的</TitleWithBar>
        <View style={{ color: "#666", fontSize: "14px" }}>查看全部 ></View>
      </View>
      <ActivityCard />
      <View className="list-head">
        <TitleWithBar>我发起的</TitleWithBar>
        <View style={{ color: "#666", fontSize: "14px" }}>查看全部 ></View>
      </View>
      <ActivityCard />
      <View style={{ height: "600px" }}></View>
    </View>
  );
};

export default Mine;
