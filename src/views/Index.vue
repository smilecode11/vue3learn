<template>
    <div class="index-container">
        <base-layout>
            <router-view></router-view>
        </base-layout>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import BaseLayout from "../layout/BaseLayout.vue";

export default defineComponent({
    name:'index',
    components:{
        BaseLayout
    }
});
</script>