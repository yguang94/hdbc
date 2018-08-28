<template>
    <div id="support" class="support_content">
        <div class="header_home_background"></div>
        <canvas id="canvas" class="canvas"></canvas>
        <div class="content_support">
            <el-row>
                <el-col :span="24">
                    <div class="container-fluid">
                        <el-card class="box-card">
                            <div class="TechnicalSupport">
                                <h3>Technical Support</h3>
                                <div class="sign-desc">
                                    <p>You intend to contact Technical Support</p>
                                    <p>
                                        Before opening your conversation with Support Agent, make sure the problem is
                                        not described in our
                                        <router-link to="/">FAQ</router-link>
                                        and you have not found an answer to your question. This is not a chat box, but
                                        the Technical Support only. Please, do not create new (several) conversations
                                        regarding the same issue. We strongly recommend you to provide clear information
                                        about your problem in your message to the Agent - currency, TxID, address
                                        wallet, order number, etc.
                                    </p>
                                    <img src="../../assets/images/support_mini.png"
                                         style="width: 100%;margin-top: 20px">
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="intercom-launcher" @click="alertMessage"></div>
                </el-col>
            </el-row>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="yguang"
                width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="yguang = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import CanvasStar from '../../assets/js/CanvasStar'
    function init() {
        let id = 'support'
        CanvasStar.star(id,window.innerWidth,window.innerHeight - 10)
    }

    function alertMessage() {
        this.yguang = true
    }

    export default {
        components: {},
        props: {},
        data() {
            return {
                yguang: false
            }
        },
        watch: {},
        computed: {},
        methods: {
            alertMessage
        },
        created() {
        },
        mounted: init
    }
</script>

<style scoped>

</style>