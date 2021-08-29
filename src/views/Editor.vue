<template>
    <div class="editor-container">
        <a-layout-sider width="300" style="background: skyblue" class="components">
            组件列表
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="preview-container">
                <p>画布区域</p>
                <div class="preview-list"> 

                </div>
            </a-layout-content>
        </a-layout>
        <a-layout-sider width="300" style="background: purple" class="setting">
            组件属性
        </a-layout-sider>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'editor',
    components:{
    }
});
</script>

<style scoped>
.editor-container{
    display: flex;
    min-height: 100vh;
}
    
</style>