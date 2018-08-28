<template>
    <div id="Contact_us" class="Contact_us_content">
        <div class="header_home_background"></div>
        <canvas id="canvas" class="canvas"></canvas>
        <div class="container-fluid">
            <el-row>
                <el-col :span="24">
                    <div class="contacts-header">
                        <div class="contacts-title"><h1>Contact us</h1></div>
                        <div class="contacts-short-description"><span>Get in touch and we will help you to understand your question</span ></div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="contacts-body">
                        <el-row :gutter="30">
                            <el-col :span="8">
                                <div class="contact-option-wrapper">
                                    <div class="contact-option-info">
                                        <div class="contact-option-img"><img src="../../assets/images/contactus_traidingsupport.png" alt=""></div>
                                        <h5>Traiding support</h5>
                                        <span>Our operator will answer any question you ask</span>
                                    </div>
                                    <div class="contact-option-link">
                                        <el-button type="text">Join our support →</el-button>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="contact-option-wrapper">
                                    <div class="contact-option-info">
                                        <div class="contact-option-img"><img src="../../assets/images/contactus_listingrequestform.png" alt=""></div>
                                        <h5>LISTING REQUEST FORM</h5>
                                        <span>If you have an idea we will help you to realize it</span>
                                    </div>
                                    <div class="contact-option-link">
                                        <el-button type="text">Fill the form →</el-button>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="contact-option-wrapper">
                                    <div class="contact-option-info">
                                        <div class="contact-option-img"><img src="../../assets/images/contactus_businesssupport.png" alt=""></div>
                                        <h5>BUSINESS SUPPORT</h5>
                                        <span>If you want to work together let us know</span>
                                    </div>
                                    <div class="contact-option-link">
                                        <el-button type="text">business@stocks.exchange →</el-button>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import CanvasStar from '../../assets/js/CanvasStar'
    function init() {
        let id = 'Contact_us'
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
