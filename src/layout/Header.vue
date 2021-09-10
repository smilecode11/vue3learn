<template>
    <a-layout-header class="header">
        <div class="page-title">慕课乐高</div>
        <user-profile :user="user"></user-profile>
    </a-layout-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store/index';
import UserProfile from '../components/UserProfile.vue';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: 'layout-header',
    setup() {
        const store = useStore<GlobalDataProps>();
        const user = computed(() => store.state.user);
        return {
            user
        };
    },
    components: {
        UserProfile
    }
});
</script>

<style scoped>
.header {
    font-size: 18px;
    height: 60px;
    color: #fff;
    background: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>