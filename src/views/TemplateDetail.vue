<template>
    <div class="template-container">
        <a-button @click="handleRouteGoEditor">editor router go</a-button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'template',
    methods:{
        handleRouteGoEditor(){
            this.$router.push({ name: 'editor', params: { id: 1 } });
        }
    }
});
</script>