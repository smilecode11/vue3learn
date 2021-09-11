<template>
  <div class="editor-container">
    <a-layout-sider width="300" style="background: skyblue" class="components">
      组件列表
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="preview-container">
        <p>画布区域</p>
        <div class="preview-list">
            <div class="preview-item" v-for="(component) in components" :key="component.id">{{component.props.text}}</div>
        </div>
      </a-layout-content>
    </a-layout>
    <a-layout-sider width="300" style="background: purple" class="setting">
      组件属性
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import { ComponentData } from '../store/editor'

export default defineComponent({
  name: "editor",
  setup() {
    const store = useStore<GlobalDataProps>();
    const components = computed<ComponentData[]>(() => store.state.editor.components);
    return {
      components,
    };
  },
});
</script>

<style scoped>
.editor-container {
  display: flex;
  min-height: 100vh;
}
</style>