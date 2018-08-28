<template>
    <el-row class="bodywidth pc_header">
        <el-col :span="5" class="hidden-sm-and-down">
            <router-link tag="div" to="/" class="header_logo">
                <img src="../../../assets/images/logo.png" style="width: 200px" alt="">
            </router-link>
        </el-col>
        <el-col :span="11" class="header_menu hidden-sm-and-down">
            <el-menu class="el-menu-demo" mode="horizontal" background-color="transparent">
                <el-menu-item index="1">
                    <router-link tag="div" to="/BasicTrade">Basic trade</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link tag="div" to="/Support">Support</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link tag="div" to="/News">News</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link tag="div" to="/Technical">F.A.Q</router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="8" class="header_user hidden-sm-and-down">
            <el-menu class="el-menu-demo" mode="horizontal" background-color="transparent">
                <el-menu-item index="5" v-if="state == 0"><router-link tag="div" to="/Login">Sign in</router-link></el-menu-item>
                <el-menu-item index="6" v-if="state == 0"><router-link tag="div" to="/Register">Sign up</router-link></el-menu-item>
                <el-submenu index="8" v-if="state == 1">
                    <template slot="title">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <span>yguang</span>
                    </template>
                    <el-menu-item index="8-1">
                        <router-link tag="div" to="/Profile/Balance">Profile</router-link>
                    </el-menu-item>
                    <el-menu-item index="8-2">
                        <span>Log Out</span>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <div class="language_img_en"></div>
                        <span>EN</span>
                    </template>
                    <el-menu-item index="7-1">
                        <div class="language_img_cn"></div>
                        <span>CN</span>
                    </el-menu-item>
                    <el-menu-item index="7-2">
                        <div class="language_img_ko"></div>
                        <span>KO</span>
                    </el-menu-item>
                    <el-menu-item index="7-3">
                        <div class="language_img_ja"></div>
                        <span>JA</span>
                    </el-menu-item>
                    <el-menu-item index="7-4">
                        <div class="language_img_en"></div>
                        <span>EN</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
        <el-col :span="12" class="hidden-md-and-up">
            <router-link tag="a" to="/" class="header_logo">
                <img src="../../../assets/images/logo.png" alt="">
            </router-link>
        </el-col>
        <el-col :span="12" class="header_menu_phone hidden-md-and-up">
            <div class="header_menu_phone_wapper">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="el-icon-menu"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-if="state ==0 ">Sign in</el-dropdown-item>
                        <el-dropdown-item v-if="state ==0 ">Sign up</el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 ">yguang94@126.com</el-dropdown-item>
                        <el-dropdown-item divided disabled>
                            <div class="language_img_en"></div>
                            <span>EN</span>
                        </el-dropdown-item>
                        <el-dropdown-item divided><router-link tag="div" to="/BasicTrade">Basic trade</router-link></el-dropdown-item>
                        <el-dropdown-item> <router-link tag="div" to="/Support">Support</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link tag="div" to="/News">News</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link tag="div" to="/Technical">F.A.Q</router-link></el-dropdown-item>

                        <el-dropdown-item v-if="state ==1 " divided><router-link tag="div" to="/Profile/Balance">Balance</router-link></el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 "><router-link tag="div" to="/Profile/DepositHistory">Deposit history</router-link></el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 "><router-link tag="div" to="/Profile/WithdrawalHistory">Withdrawal History</router-link></el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 "><router-link tag="div" to="/Profile/OpenOrders">Open Orders</router-link></el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 "><router-link tag="div" to="/Profile/OrderHistory">Order History</router-link></el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 "><router-link tag="div" to="/Profile/AccountSettings">Account Settings</router-link></el-dropdown-item>
                        <el-dropdown-item v-if="state ==1 "><router-link tag="div" to="/Profile/Report">Report</router-link></el-dropdown-item>
                    </el-dropdown-menu>

                </el-dropdown>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css';

    export default {
        components: {},
        props: {},
        data() {
            return {
                state: 1
            }
        },
        watch: {},
        computed: {},
        methods: {},
        created() {
        }
    }
</script>

<style scoped>

</style>