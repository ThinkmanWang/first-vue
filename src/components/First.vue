<template>
    <div class="first">
        <input type="text" name="" value="" placeholder="在这里输入文字，下面会跟着变化" v-model="message">
        <!--<hr/>-->
        <p>{{ message }}</p>
        <button @click="submit()">Submit</button>

        <button v-on:click="incr">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>

        <br/>
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script type="text/javascript">

    import {EventBus} from "@/event-bus";

    export default {
        name: "First"
        , props: {
            message: {
                default: "FXXXXXK"
            }
            , counter: {
                default: 0
            }
            , show: {
                default: true
            }
        }
        , methods: {
            submit() {
                EventBus.$emit("com.thinkman.thinkutils.hello.dateChanged", {
                    data: this.message
                });
            }
            , incr() {
                this.counter = Number(this.counter) + 1;
            }
        }
        // , data: {
        //     counter: 0
        // }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>