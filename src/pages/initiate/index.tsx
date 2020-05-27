import Taro, { useState } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtInput, AtTextarea, AtButton, AtIcon, AtCheckbox } from "taro-ui";
import TitleBar from "./components/TitleBar";
import "./index.scss";

const Create = () => {
  const [alwaysEmpty, setAlwaysEmpty] = useState("");
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const checkboxOption = [
    {
      value: "internal",
      label: "受邀参与",
      desc: "活动仅限受邀请用户参与（包括小程序、活动小程序码分享）",
    },
    {
      value: "public",
      label: "开放参与",
      desc: "活动将出现在小程序内的活动广场，向所有用户开放",
    },
  ];

  const checkOne = (value: string[]) => {
    const arr = value.filter((item) => checkedList.indexOf(item));
    console.log(arr);
    setCheckedList(arr);
  };

  return (
    <View>
      <AtInput
        name="value"
        title="活动名称"
        type="text"
        placeholder="分享会"
        onChange={() => {}}
      />
      <AtInput
        name="value"
        title="活动描述"
        type="text"
        value={alwaysEmpty}
        onChange={() => {
          setAlwaysEmpty("");
        }}
      />
      <AtTextarea
        customStyle={{ border: "none", paddingLeft: "18px" }}
        value={""}
        onChange={() => {}}
        maxLength={200}
        placeholder="请填写活动描述"
      />
      <AtInput
        name="value"
        title="活动制度"
        value="晋级制"
        onChange={() => {}}
      />
      <AtInput
        name="value"
        title="队伍组成"
        customStyle={{ color: "#000" }}
        disabled
        value={alwaysEmpty}
        onChange={() => {}}
      >
        <AtIcon value="chevron-right" size="small" />
      </AtInput>
      <TitleBar>流程</TitleBar>
      <TitleBar>活动权限</TitleBar>
      <AtCheckbox
        options={checkboxOption}
        selectedList={checkedList}
        onChange={checkOne}
      />
      <AtButton type="primary">提交</AtButton>
    </View>
  );
};

export default Create;
