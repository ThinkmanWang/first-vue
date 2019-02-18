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
        <br/>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <br/>

        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script type="text/javascript">

    import {EventBus} from "@/event-bus";
    // import ElementUI from 'element-ui'

    export default {
        name: "First"
        , data() {
            return {
                dialogVisible: false
            };
        }
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
            , handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
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