import { Module } from "vuex";
import { GlobalDataProps } from "./index";

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copidCount: number;
  desc?: string;
  isHot?: boolean;
  isNew?: boolean;
}

export interface TemplatesProps {
  data: TemplateProps[];
}

const testData = [
  {
    id: 1,
    title: "前端架构师",
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    author: "尘心",
    copidCount: 1,
  },
  {
    id: 2,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-682056.png",
    author: "尘心2",
    title: "前端架构师2",
    copidCount: 1,
  },
  {
    id: 3,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-677311.png",
    author: "尘心3",
    title: "前端架构师3",
    copidCount: 1,
  },
  {
    id: 4,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    author: "尘心4",
    title: "前端架构师4",
    copidCount: 1,
  },
  {
    id: 5,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    author: "尘心5",
    title: "前端架构师5",
    copidCount: 20,
  },
  {
    id: 6,
    coverImg:
      "https://static.imooc-lego.com/upload-files/screenshot-889755.png",
    author: "尘心6",
    title: "前端架构师6",
    copidCount: 1,
  },
];

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id: number) => {
      console.log(getters, rootState);
      return state.data.find((t) => t.id === id);
    },
  },
};

export default templates;
