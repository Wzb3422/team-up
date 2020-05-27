import Taro, { Component, Config } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";
import "taro-ui/dist/style/index.scss";

class App extends Component {
  config: Config = {
    pages: ["pages/index/index", "pages/initiate/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
