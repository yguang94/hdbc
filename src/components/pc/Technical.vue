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
                                    <h1>F.A.Q</h1>
                                </div>
                                <div class="news-short-description">
                                    <p>Find Answers to Your Technical Questions</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="news-body">
                        <el-table
                                :data="TechnicalData"
                                :show-header="false"
                                style="width: 100%">
                            <el-table-column
                                    prop="title">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    width="100">
                                <template slot-scope="scope">
                                    <el-button
                                            type="text"
                                            size="small">
                                        <router-link tag="div" to="/Technical/Technical_content">To view -></router-link>
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
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
    export default {
        components: {
            Footer
        },
        props: {},
        data() {
            return {
                TechnicalData: [
                    {
                        title: 'How to create ticket for Technical Support?',
                    },
                    {
                        title: 'Typical problems',
                    },
                    {
                        title: 'What is stocks.exchange?',
                    },
                    {
                        title: 'How to use Stocks.exchange?',
                    },
                    {
                        title: 'How do I register?',
                    },
                    {
                        title: 'How to setup and use 2FA',
                    },
                    {
                        title: 'I have lost my 2FA, what should I do?',
                    },
                    {
                        title: 'How do I deposit crypto currencies?',
                    },
                    {
                        title: 'How do I trade',
                    },
                    {
                        title: 'How do I withdraw crypto currencies or crypto-based instruments to my wallet?',
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