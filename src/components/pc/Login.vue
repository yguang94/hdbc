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
                                    <el-input type="email" v-model="user.email" placeholder="Email Address"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input type="password" v-model="user.password" placeholder="Password"></el-input>
                                    <router-link to="/Reset">Forgot your password?</router-link>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="login">Submit</el-button>
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
    import C from '../../service/PCCommon'

    function init() {
        let id = 'Login'
        CanvasStar.star(id,window.innerWidth,window.innerHeight - 10)
    }
    function login() {
        let p ={};
        p.email = this.user.email;
        p.password = this.user.password
        let that = this
        C.call('user/signin',p).then((d) => {
            that.$message({
                message: '登录成功 ',
                type: 'success',
                center: true
            })
            console.log(d);
            // window.location.href = '/BasicTrade'
        },function () {
            that.$message({
                showClose: true,
                message: '抱歉!登录失败!请确认登录名或密码是否正确!',
                type: 'error',
                center: true
            })
        })
    }

    export default {
        components: {},
        props: {},
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        watch: {},
        computed: {},
        methods: {
            login:login
        },
        created() {
        },
        mounted: init
    }
</script>
