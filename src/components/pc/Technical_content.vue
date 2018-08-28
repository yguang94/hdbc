<template>
    <div class="news_content">
        <div class="header_home_background"></div>
        <div class="container-fluid">
            <div class="content-wrapper">
                <div class="news">
                    <div class="news-header">
                        <el-row>
                            <el-col :span="24">
                                <div class="news-title">
                                    <h1><router-link to="/Technical">F.A.Q</router-link></h1>
                                    >
                                    details
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="news_contenttitel">
                                    {{TechnicalData[0].title}}
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="news-body">
                        <div class="news_details">
                            <p>{{TechnicalData[0].content}}</p>
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
                        id: 1,
                        content: ' After you have attentively read our FAQ and have not found any answer to your question, you should create ticket to our Technical Support regarding your issue. \n' +
                        '   When you create the ticket, please, provide us with the information on problematic crypto currency, type of the issue - deposit, withdrawal, or trade. Please, provide us with full description of the issue including TxID, wallet address, deposit or withdrawal amount. \n' +
                        '   Tickets with no purpose will be closed without feedback. \n' +
                        '   If you are informed that your ticket has been forwarded to our devs, please, do not create any new tickets, updates or emails. Please, be patient and wait till your issue is resolved by our devs.\n' +
                        '   If your issue is resolved, please, close the ticket by yourself, it will help us to take care of the important issues, to save time and to faster communications with other Users.'
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