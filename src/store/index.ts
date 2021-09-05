import { createStore } from "vuex";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copidCount: number;
}

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps[];
}

//#region 测试template数据
const testData: TemplateProps[] = [
  {
    id: 1,
    title: "前端架构师",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889775.png",
    author: "尘心",
    copidCount: 1,
  },{
    id: 2,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-682056.png",
    author: "尘心2",
    title: "前端架构师2",
    copidCount: 1,
  },{
    id: 3,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
    author: "尘心3",
    title: "前端架构师3",
    copidCount: 1,
  },{
    id: 4,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889775.png",
    author: "尘心4",
    title: "前端架构师4",
    copidCount: 1,
  },{
    id: 5,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889775.png",
    author: "尘心5",
    title: "前端架构师5",
    copidCount: 20,
  },{
    id: 6,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889775.png",
    author: "尘心6",
    title: "前端架构师6",
    copidCount: 1,
  },
];
//#endregion

const store = createStore<GlobalDataProps>({
  state: {
    templates: testData,
    user: {
      isLogin: false,
    },
  },
});

export default store;
