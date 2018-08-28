<template>
    <div class="Authentication">
        <el-card class="box-card">
            <div class="clearfix">
                <el-row>
                    <el-col :span="24">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/Profile/AccountSettings' }">Account Settings
                            </el-breadcrumb-item>
                            <el-breadcrumb-item v-if="state == 1">Two-factor auth</el-breadcrumb-item>
                            <el-breadcrumb-item v-if="state != 1">Disable Two-factor auth</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24">
                        <div class="AuthenticationBody">
                            <div class="open" v-if="state == 1">
                                <div class="settings-description1">
                                    <span>
                                        For extra account security, you can turn on two-factor authentication (2FA).
                                    </span>
                                    <span>
                                        Stocks.Exchange uses Google Authenticator for 2FA.
                                    </span>
                                </div>
                                <el-form ref="form" :model="form">
                                    <el-form-item>
                                        <h5>1. Install Google authenticator</h5>
                                        <div>
                                            <a href="#"><i class="fab fa-apple"></i> IOS</a>
                                            <a href="#"><i class="fab fa-android"></i>Android</a>
                                        </div>
                                    </el-form-item>
                                    <el-form-item>
                                        <h5>2. Enter the code using Google Authenticator or scan the QR code</h5>
                                        <span>Enter code</span>
                                        <el-input></el-input>
                                        <span>Note: this code changes each time you enable 2FA.</span>
                                        <div class="course-down">
                                            <p>
                                                Be sure to store the 16 digit code (the one displayed in red) below the QR in safe place!
                                                There is no way to see this code here again! In case you change the device the authenticator runs at you will need it again
                                                You should write this code down and keep it in a safe place. You can also snap a picture of the qr code and print it out and keep it in a safe place. You can then enable two-factor from another device using the secret key, should you lose or damage your existing device.
                                            </p>
                                        </div>
                                        <div>
                                            <a href="#">Copy address</a>
                                            <a href="#">Print</a>
                                            <a href="#">Download</a>
                                        </div>
                                    </el-form-item>
                                    <el-form-item>
                                        <h5>3. Enter code from Google Authenticator</h5>
                                        <span>Enter code</span>
                                        <el-input></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary">Disable</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="disable" v-if="state != 1">
                                <div class="settings-description2">
                                    <span>
                                        If your want to turn off two-factor authentication (2FA), input the six-
                                        digit code provided by the Google Authenticator app bellow, then click
                                        button "Disable".
                                    </span>
                                </div>
                                <el-form ref="form">
                                    <el-form-item>
                                        <span>Enter code</span>
                                        <el-input></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary">Disable</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {
                state: 1,
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

<style scoped>

</style>