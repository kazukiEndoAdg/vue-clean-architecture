<template>
    <div class="button-wrap">
        <button class="sample-button">Sample Button</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useAccountInfoStore } from "./presentation/accountInfo.store";
export default defineComponent({
    name: 'SampleButton',
    setup() {
        //We are defining a store because the store won't be created until use...Store() is called inside of setup():
        // const store = useAccountInfoStore();
        // store.fetch();
        
        // you can return the whole store instance to use it in the template
        // return {
        //     store,
        // }
    },
});
</script>

<style scoped>
.button-wrap {
    margin: 16px 8px;
}
.sample-button {
    height: 8vw;
    width: 12vw;
    background-color: coral;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    color: white;
    font-size: 2vw;
}
</style>