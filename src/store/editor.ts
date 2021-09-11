import { v4 as uuidv4 } from "uuid";
import { Module } from "vuex";
import { GlobalDataProps } from "./index";

export interface ComponentData {
  // id， uuid模拟生成
  id: string;
  //    业务组件库名称 l-text， l-image 等
  name: string;
  //  当前元素的属性
  props: { [key: string]: any };
}

export interface EditorDataProps {
  components: ComponentData[];
  currentComponentId: string;
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: "l-text", props: { text: "hello" } },
  { id: uuidv4(), name: "l-text", props: { text: "hello2" } },
  { id: uuidv4(), name: "l-text", props: { text: "hello3" } },
];

const editor: Module<EditorDataProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentComponentId: "",
  },
};

export default editor;
