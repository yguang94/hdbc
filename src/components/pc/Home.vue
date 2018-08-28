<template>
    <div id="home" class="home">
        <!--<div class="header_home_background"></div>-->
        <canvas id="canvas" class="canvas hidden-sm-and-down"></canvas>
        <div class="main-greeting-wrapper">
            <el-row>
                <el-col :span="24">
                    <div class="main-greeting-wrapper_txt1"><span>Healthy Volume</span></div>
                </el-col>
                <el-col :span="24">
                    <div class="main-greeting-wrapper_txt2"><span>Real trading</span></div>
                </el-col>
            </el-row>
        </div>
        <div class="begin-traiding">
            <el-row :gutter="100">
                <el-col :span="24">
                    <h3>Easy way to begin trading</h3>
                    <span>The easiest way to start trading from registration to the beginning of trading</span>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                    <div class="begin-traiding-step-img">
                        <i class="far fa-address-card"></i>
                    </div>
                    <h5>REGISTRATION</h5>
                    <span>Enter your details on our website and begin to trade with our stock exchange</span>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                    <div class="begin-traiding-step-img">
                        <i class="far fa-envelope-open"></i>
                    </div>
                    <h5>REGISTRATION</h5>
                    <span>Enter your details on our website and begin to trade with our stock exchange</span>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                    <div class="begin-traiding-step-img">
                        <i class="far fa-chart-bar"></i>
                    </div>
                    <h5>REGISTRATION</h5>
                    <span>Enter your details on our website and begin to trade with our stock exchange</span>
                </el-col>
            </el-row>
        </div>
        <!--<div class="main-start">
          <div class="container-fluid">
            <div class="main-universal-description">
              <h3>Start trading today</h3>
              <span>Be always up to date with the latest news</span>
            </div>
            <div class="main-universal-start">
              <el-form :inline="true" class="demo-form-inline">
                <el-form-item prop="email">
                  <el-input placeholder="Enter your email"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">Start trading</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>-->
        <div class="main-news">
            <div class="container-fluid">
                <div class="main-news-wrapper">
                    <div class="main-universal-description">
                        <h3>Latest world news crypto-currency</h3>
                        <span>Be always up to date with the latest news</span>
                    </div>
                    <div class="main-universal-start">
                        <router-link tag="div" to="/News">
                            <el-button>Read more</el-button>
                        </router-link>
                    </div>
                    <div class="main-news-list">
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                <el-card class="box-card">
                                    <div class="new-wrap">
                                        <div class="new-date sprite">
                                            <i class="el-icon-date"></i>
                                            <span>07.08.18</span>
                                        </div>
                                        <div class="new-preview-desc">
                                            <h5>A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky</h5>
                                            <p>Looking to find some free bitcoin? A pair of planets on the No Man’s Sky
                                                action survival game are hiding 0.004 BTC, according to Hackernoon.
                                                Players can claim the bitcoin by finding the corresponding
                                                communications stations in the game.</p>
                                            <el-button type="text">Continue reading</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                <el-card class="box-card">
                                    <div class="new-wrap">
                                        <div class="new-date sprite">
                                            <i class="el-icon-date"></i>
                                            <span>07.08.18</span>
                                        </div>
                                        <div class="new-preview-desc">
                                            <h5>A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky</h5>
                                            <p>Looking to find some free bitcoin? A pair of planets on the No Man’s Sky
                                                action survival game are hiding 0.004 BTC, according to Hackernoon.
                                                Players can claim the bitcoin by finding the corresponding
                                                communications stations in the game.</p>
                                            <el-button type="text">Continue reading</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                <el-card class="box-card">
                                    <div class="new-wrap">
                                        <div class="new-date sprite">
                                            <i class="el-icon-date"></i>
                                            <span>07.08.18</span>
                                        </div>
                                        <div class="new-preview-desc">
                                            <h5>A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky</h5>
                                            <p>Looking to find some free bitcoin? A pair of planets on the No Man’s Sky
                                                action survival game are hiding 0.004 BTC, according to Hackernoon.
                                                Players can claim the bitcoin by finding the corresponding
                                                communications stations in the game.</p>
                                            <el-button type="text">Continue reading</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './comm/footer'
    import CanvasStar from '../../assets/js/CanvasStar'

    function init() {
        let id = 'home'
        CanvasStar.star(id, window.innerWidth, 875)
    }

    export default {
        components: {
            Footer
        },
        props: {},
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        created() {
        },
        mounted: init
    }
</script>

<style scoped>

</style>
