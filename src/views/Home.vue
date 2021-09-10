<template>
  <div class="home-container">
    <template-list :list="testData"></template-list>
  </div>
</template>

<script lang="ts">
import TemplateList from "../components/TemplateList.vue";

import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import {GlobalDataProps} from "../store/index";
export default defineComponent({
  name: "home-page",
  components: {
    TemplateList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.state.templates.data);
    return {
      testData,
    };
  },
});
</script>