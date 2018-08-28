<template>
    <div id="Register" class="register_content">
        <div class="header_home_background"></div>
        <canvas id="canvas" class="canvas"></canvas>
        <div class="container-fluid">
            <el-row>
                <el-col :span="24">
                    <el-card class="box-card">
                        <div class="login_header">
                            <span>Sign up</span>
                        </div>
                        <div class="register_body">
                            <el-form ref="form">
                                <el-form-item>
                                    <el-input type="email" placeholder="Email Address"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input type="password" placeholder="Password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input type="password" placeholder="Confirm Password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-checkbox>I am over 21 years old</el-checkbox>
                                    <el-checkbox>Subscribe to our newsletter</el-checkbox>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary">Submit</el-button>
                                    <div class="login_singUp">
                                        <span>Have an account?</span>
                                        <el-button type="text">
                                            <router-link to="/Login">Sign in</router-link>
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
        let id = 'Register'
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
