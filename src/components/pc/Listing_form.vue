<template>
    <div class="listing_content">
        <div class="header_home_background"></div>
        <div class="container-fluid">
            <div class="content-wrapper">
                <el-card class="box-card">
                    <div class="text item">
                        <div class="content-header">
                            <h1>Stocks.Exchange listing</h1>
                        </div>
                       <div class="listing-body">
                            <div class="listing-description">
                                <p>Please, fill out our listing form and we will reply you soon.</p>
                                <p class="course-up">Note! You have to make at least 1000$ trade volume per day.</p>
                            </div>
                            <div class="listingFrom">
                                <el-row :gutter="50">
                                    <el-col :span="8">
                                        <el-form ref="form">
                                            <el-form-item>
                                                <span>E-mail*</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>What is the ticker of the coin?*</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>Provide your website*</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>Provide block explorer*</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>Provide Twitter/Telegram</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary">Send</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form ref="form">
                                            <el-form-item>
                                                <span>What is the name of the coin?*</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>What type of coin it is?</span>
                                                <el-select>
                                                    <el-option label="Coin/Coin Token"></el-option>
                                                    <el-option label="Cryptonote/Simple"></el-option>
                                                    <el-option label="NXT/NXT Asset"></el-option>
                                                    <el-option label="ETH/ETH Token"></el-option>
                                                    <el-option label="Waves/Waves Asset"></el-option>
                                                    <el-option label="ARDOR Asset"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>Provide github / Smart contract address*</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>Provide bitcointalk (if you got it)</span>
                                                <el-input></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <span>What pairs you wish?</span>
                                                <div class="listing_check">
                                                    <el-checkbox >USDT</el-checkbox>
                                                    <el-checkbox >BTC</el-checkbox>
                                                    <el-checkbox >ETH</el-checkbox>
                                                </div>
                                                <div class="listing_check">
                                                    <el-checkbox >LTC&nbsp;&nbsp;</el-checkbox>
                                                    <el-checkbox >NXT</el-checkbox>
                                                    <el-checkbox >TUSDT</el-checkbox>
                                                </div>
                                            </el-form-item>
                                        </el-form>
                                    </el-col>
                                </el-row>

                            </div>
                       </div>
                    </div>
                </el-card>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import Footer from './comm/footer'

    export default {
        components: {
            Footer
        },
        props: {},
        data() {
            return {
            }
        },
        watch: {},
        computed: {},
        methods: {},
        created() {
        },
        mounted() {
        }
    }
</script>

