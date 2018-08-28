<template>
    <div class="AccountSettings">
        <el-card class="box-card">
            <div class="clearfix">
                <el-row>
                    <el-col :span="24" style="border-bottom: 1px solid #fff;padding: 25px 0;margin-bottom: 30px">
                        <span>Main</span>
                        <el-form ref="form" label-position="left" label-width="200px" style="margin-top: 20px">
                            <el-form-item label="Email Address">
                                <span>yguang@123.com</span>
                            </el-form-item>
                            <el-form-item label="Password">
                                <router-link to="/Profile/AccountSettings/ChangePassword">Change password</router-link>
                            </el-form-item>
                            <el-form-item label="Two-Factor Authentication">
                                <router-link to="/Profile/AccountSettings/Authentication">Activate</router-link>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="24" style="border-bottom: 1px solid #fff;padding-bottom: 25px;margin-bottom: 30px">
                        <span>API key</span>
                        <div class="settingbody">
                            <div>
                                <span>API key</span>
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                                <el-button type="text">Copy</el-button>
                            </div>
                            <div>
                                <span>API key</span>
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                                <el-button type="text">Copy</el-button>
                            </div>
                            <div style="text-align: center">
                                <span>QR Code</span>
                                <p><img src="../../../assets/images/1534212382.png" alt="" style="width: 20%;margin-top: 10px"></p>
                            </div>

                        </div>
                    </el-col>
                    <el-col :span="24" style="padding-bottom: 25px;margin-bottom: 30px">
                        <span>Last authorization history</span>
                        <div class="hidden-sm-and-down">
                            <el-table
                                    :data="authorization"
                                    style="width: 100%">
                                <el-table-column
                                        prop="date"
                                        label="Date"
                                        width="170">
                                </el-table-column>
                                <el-table-column
                                        prop="ip"
                                        label="IP"
                                        width="120">
                                </el-table-column>
                                <el-table-column
                                        width="120px"
                                        prop="Country"
                                        label="Country">
                                </el-table-column>
                                <el-table-column
                                        prop="Browser"
                                        label="Browser">
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="hidden-md-and-up">
                            <el-table
                                    :data="authorization"
                                    style="width: 100%">
                                <el-table-column
                                        prop="date"
                                        label="Date"
                                        width="170">
                                </el-table-column>
                                <el-table-column
                                        prop="ip"
                                        label="IP"
                                        width="120">
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-card>

    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css';
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
                    },
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