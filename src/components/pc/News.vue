<template>
    <div class="news_list">
        <div class="header_home_background"></div>
        <div class="container-fluid">
            <div class="content-wrapper">
                <div class="news">
                    <div class="news-header">
                        <el-row>
                            <el-col :span="24">
                                <div class="news-title">
                                    <h1>News</h1>
                                </div>
                                <div class="news-short-description">
                                    <p>Be always up to date with the latest news</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="news-body hidden-sm-and-down">
                        <el-table
                                :data="newsData"
                                :show-header="false"
                                style="width: 100%">
                            <el-table-column
                                    prop="title">
                            </el-table-column>
                            <el-table-column
                                    prop="date"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    width="180">
                                <template slot-scope="scope">
                                    <el-button
                                            type="text"
                                            size="small">
                                        <router-link tag="div" to="/News/News_content">Continue reading -></router-link>
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>


                    </div>
                    <!--移动端新闻列表-->
                    <div class="phonenewlist hidden-md-and-up">
                        <el-card class="box-card" v-for="o in newsData" :key = o.id>
                            <div class="clearfix">
                                <h3>{{o.title}}</h3>
                                <span style="float: left ; padding: 3px 0">{{o.date}}</span>
                                <el-button style="float: right; padding: 3px 0" type="text"><router-link tag="div" to="/News/News_content">Continue reading -></router-link></el-button>
                            </div>
                        </el-card>
                    </div>
                    <div class="paginav">
                        <div class="paginav-wrapper">
                            <el-pagination
                                    small
                                    layout="prev, pager, next"
                                    :total="1000">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import Footer from './comm/footer'
    import 'element-ui/lib/theme-chalk/display.css';

    export default {
        components: {
            Footer
        },
        props: {},
        data() {
            return {
                newsData: [
                    {
                        title: 'A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky',
                        date: '07.08.18',
                        id: 1
                    },
                    {
                        title: 'There Are Now More Than 3,500 Bitcoin ATMs Worldwide\n',
                        date: '07.08.18',
                        id: 2
                    },
                    {
                        title: 'US: Chair of House Judiciary Committee Discloses Ownership of Cryptocurrency',
                        date: '07.08.18',
                        id: 3
                    },
                    {
                        title: 'Madonna Partners With Ripple to Help Malawi’s HIV/AIDS Orphans',
                        date: '07.08.18'
                    },
                    {
                        title: 'Interview: Wall Street Vet Warns of ICE Bringing Bad Banking Practices to Crypto',
                        date: '07.08.18'
                    },
                    {
                        title: 'No Coffee for Bitcoin,’ Starbucks Clarifies as Media Misrepresent Its New Crypto Venture',
                        date: '07.08.18'
                    },
                    {
                        title: 'Madonna Partners With Ripple to Help Malawi’s HIV/AIDS Orphans in No Man’s Sky',
                        date: '07.08.18'
                    },
                    {
                        title: 'Vet Warns of ICE Bringing Bad Banking PracticesGamer Hid  Media Misrepresent Its',
                        date: '07.08.18'
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