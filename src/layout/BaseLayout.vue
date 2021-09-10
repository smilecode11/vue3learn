<template>
    <div class="base-layout">
        <a-layout class="base-container">
            <layout-header></layout-header>
            <a-layout-content>
                <div class="content-container">
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <layout-footer></layout-footer>
        </a-layout>
    </div>
</template>

<script>
import LayoutHeader from './Header';
import LayoutFooter from './Footer';
export default {
    name:'layout-base-container',
    components:{
        LayoutHeader,
        LayoutFooter
    }
};
</script>

<style scoped>
.base-container{
    min-height: 100vh;
    
}

.header,.footer{
    height: 60px;
    color:#fff;
    background: #333;
}
    
.header{
    font-size: 18px;   
}

.content-container {
    background: #fff;
    padding: 24px 30px;
    min-height: calc(100vh - 120px);
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}
</style>