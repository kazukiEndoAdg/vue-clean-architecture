<template>
    <div class="button-wrap">
        <button class="sample-button" @click="fetchAuth()">Login</button>
        <h1 v-if="basicStatusStore.statusInfo.status > 5">
            Hello
        </h1>
        <div v-if="accountInfoStore">
            {{ accountInfoStore.accountInfo.msg }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAccountInfoStore } from "../../stores/accountInfo.store";
import { useBasicStatusStore } from "../../stores/basicStatus.store";
import { useAuthStore } from "../../stores/auth.store";
export default defineComponent({
    name: 'SampleButton',
    setup() {
        //We are defining a store because the store won't be created until use...Store() is called inside of setup():
        const accountInfoStore = useAccountInfoStore();
        const authStore = useAuthStore();
        const basicStatusStore = useBasicStatusStore();

        const fetchAuth = () => {
            accountInfoStore.fetch(authStore.$state.authInfo.loginToken)
        }
        
        // you can return the whole store instance to use it in the template
        return {
            basicStatusStore,
            accountInfoStore,
            fetchAuth
        }
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