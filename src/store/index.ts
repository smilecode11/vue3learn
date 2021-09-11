import { createStore } from "vuex";
import user, { UserProps } from "./user";
import templates, { TemplatesProps } from "./templates";
import editor, { EditorDataProps } from "./editor";

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: EditorDataProps;
}

const store = createStore<GlobalDataProps>({
  modules: {
    user,
    templates,
    editor,
  },
});

export default store;
