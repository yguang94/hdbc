<template>
    <div id="Reset" class="reset_content">
        <div class="header_home_background"></div>
        <canvas id="canvas" class="canvas"></canvas>
        <div class="container-fluid">
            <el-row>
                <el-col :span="24">
                    <el-card class="box-card">
                        <div class="login_header">
                            <span>Reset Password</span>
                        </div>
                        <div class="reset_body">
                            <el-form ref="form">
                                <el-form-item>
                                    <el-input type="email" placeholder="Email Address"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary">Send Password Reset Link</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import CanvasStar from '../../assets/js/CanvasStar'
    function init() {
        let id = 'Reset'
        CanvasStar.star(id,window.innerWidth,window.innerHeight - 10)
    }

    export default {
        components: {},
        props: {},
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
        },
        created() {
        },
        mounted: init
    }
</script>
