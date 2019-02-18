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
            , updateText() {
                this.loginResult = "FXXK"
            }
            , onSubmit() {
                this.$dlg.alert("FXXK", {
                    // width: 350,
                    // height: 450,
                    //send params to inner component
                    callback: data=>{
                        //alert selected result
                        this.loginResult = this.$refs.et_username.value + " " + this.$refs.et_password.value
                    }
                    
                });
            }
        }
    }
</script>

<style scoped>

</style>