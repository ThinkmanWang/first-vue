<template>
    <div>
        <input ref="et_username" type="text" placeholder="手机号"/>  <br/>
        <input ref="et_password" type="password" placeholder="密码"/> <br />
        <button type="button" v-on:click="onSubmit()">登录</button> <br />
        <p>{{ loginResult }}</p>
    </div>
</template>

<script>
    import {EventBus} from "@/event-bus";
    import Vue from 'vue';
    import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
    import 'wc-messagebox/style.css'

    Vue.use(Alert);
    Vue.use(Confirm);
    Vue.use(Toast, 3);
    Vue.use(Loading);

    export default {
        name: "login"
        , data() {
            return {
                loginResult: ""
            };
        }
        , methods: {
            // updateText(szText) {
            //     this.loginResult = szText;
            // }
            // ,
            getUsername() {
                return this.$refs.et_username.value;
            }
            , getPassword() {
                return this.$refs.et_password.value;
            }
            , onSubmit() {
                this.$dlg.alert('Do you really want to leave?', {
                    messageType: 'confirm',
                    callback: data=>{
                        this.loginResult = this.$refs.et_username.value + " " + this.$refs.et_password.value
                    },
                    cancelCallback: data=>{
                        //do something when you click cancel button

                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>