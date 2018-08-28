<template>
    <div class="profile_inxdex">
        <div class="header_home_background"></div>
        <div class="container-fluid">
            <div class="account">
                <el-row :gutter="15">
                    <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
                        <div class="account-menu">
                            <div class="account-menu-title">
                                <span>MENU</span>
                            </div>
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo"
                                    background-color="#1C1C1C"
                                    text-color="#fff"
                                    active-text-color="#909399">
                                <el-menu-item index="1">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/Balance">Balance</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="2">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/DepositHistory">Deposit history</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="3">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/WithdrawalHistory">Withdrawal History</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="4">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/OpenOrders">Open Orders</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="5">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/OrderHistory">Order History</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="6">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/AccountSettings">Account Settings</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="7">
                                <span slot="title">
                                    <router-link tag="div" to="/">Verification</router-link>
                                </span>
                                </el-menu-item>
                                <el-menu-item index="8">
                                <span slot="title">
                                    <router-link tag="div" to="/Profile/Report">Report</router-link>
                                </span>
                                </el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
                        <div class="account-content">
                            <router-view></router-view>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="profile_footer"><Footer></Footer></div>
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
            return {}
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