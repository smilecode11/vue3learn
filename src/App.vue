<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
  name:'app-container'
});

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
