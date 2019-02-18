<template>
    <div class="first">
        <input type="text" name="" value="" placeholder="在这里输入文字，下面会跟着变化" v-model="message">
        <!--<hr/>-->
        <p>{{ message }}</p>
        <button @click="submit()">Submit</button>

        <button v-on:click="incr">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
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
        }
        , methods: {
            submit() {
                EventBus.$emit("dateChanged", {
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

</style>