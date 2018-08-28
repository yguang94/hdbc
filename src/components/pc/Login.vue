<template>
    <div id="Login" class="login_content">
        <div class="header_home_background"></div>
        <canvas id="canvas" class="canvas"></canvas>
        <div class="container-fluid">
            <el-row>
                <el-col :span="24">
                    <el-card class="box-card">
                        <div class="login_header">
                            <span>Sign in</span>
                        </div>
                        <div class="login_body">
                            <el-form ref="form">
                                <el-form-item>
                                    <el-input type="email" placeholder="Email Address"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input type="password" placeholder="Password"></el-input>
                                    <router-link to="/Reset">Forgot your password?</router-link>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary">Submit</el-button>
                                    <div class="login_singUp">
                                        <span>Don’t have an account?</span>
                                        <el-button type="text">
                                            <router-link to="/Register">Sign up</router-link>
                                        </el-button>
                                    </div>
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
        let id = 'Login'
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
