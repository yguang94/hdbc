<template>
    <div class="ChangePassword">
        <el-card class="box-card">
            <div class="clearfix">
                <el-row>
                    <el-col :span="24">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/Profile/AccountSettings' }">Account Settings</el-breadcrumb-item>
                            <el-breadcrumb-item>Change password</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24">
                        <div class="changepasswordform">
                            <el-form ref="form">
                                <el-form-item>
                                    <span>Old Password</span>
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <span>New Password</span>
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <span>Confirm Password</span>
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary">Confirm</el-button>
                                </el-form-item>
                            </el-form>
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
                input: '123',
                authorization: [
                    {
                        date: '2018-08-20 04:33:29',
                        ip: '165.227.20.145',
                        Country: 'United States',
                        Browser: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
                    }
                ]
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