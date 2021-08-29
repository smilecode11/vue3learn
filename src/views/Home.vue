<template>
    <div class="home-container">
        <template-list :list="testData"></template-list>
    </div>
</template>

<script>
import TemplateList from '../components/TemplateList.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name:'home-page',
    data(){
        return {
            testData:[{},{},{},{},{},{}]
        };
    },
    components:{
        TemplateList
    }
});
</script>