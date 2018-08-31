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
                                    <el-input type="email" v-model="email" placeholder="Email Address"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input type="password" v-model="loginPWD" placeholder="Password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input type="password" v-model="loginPWD2" placeholder="Confirm Password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-checkbox>I am over 21 years old</el-checkbox>
                                    <el-checkbox>Subscribe to our newsletter</el-checkbox>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="register">Submit</el-button>
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
    import C from '../../service/PCCommon'
    import V from '../../service/validation.js'

    function init() {
        let id = 'Register'
        CanvasStar.star(id, window.innerWidth, window.innerHeight - 10)
    }

    function register() {
        if (!V.isEmail(this.email)) {
            this.$message({
                message: '邮箱不能为空或格式不合法',
                type: 'warning',
                center: true
            })
            return
        }
        if (this.loginPWD !== this.loginPWD2) {
            this.$message({
                message: '两次输入的密码不一致',
                type: 'warning',
                center: true
            })
            return
        }
        let data = {}
        data.email = this.email;
        data.password = this.loginPWD
        let that = this
        C.call('user/signup',data).then((d) => {
            that.$message({
                message: '注册成功',
                type: 'success',
                center: true
            })
            window.location.href = '/Login'
        },function (m) {
            that.$message({
                message: '注册失败,原因:' + m,
                type: 'warning',
                center: true
            })
        })
    }

    export default {
        components: {},
        props: {},
        data() {
            return {
                email: '',
                loginPWD: '',
                loginPWD2: ''
            }
        },
        watch: {},
        computed: {},
        methods: {
            register: register
        },
        created() {
        },
        mounted: init
    }
</script>
