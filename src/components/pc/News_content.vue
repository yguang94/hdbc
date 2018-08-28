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
                                    <h1><router-link to="/News">News</router-link></h1>
                                    >
                                    details
                                </div>
                            </el-col>
                            <el-col :span="20">
                                <div class="news_contenttitel">
                                    {{newsData[0].title}}
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="news-date">
                                    {{newsData[0].date}}
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="news-body">
                        <div class="news_details">
                            <p>{{newsData[0].content}}</p>
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
                newsData: [
                    {
                        title: 'A Pro-Crypto Gamer Hid Free Bitcoin in No Man’s Sky',
                        date: '07.08.18',
                        id: 1,
                        content: 'Price Slump\n' +
                        'The price of bitcoin has been hit the most this year especially the first quarter of the year where it dropped by almost 50 percent in February falling below $7,000. Despite the price slump, manufacturers have continued to install new crypto ATMs. The report shows the accelerating pace at which ATM operators are installing the machines across the world.\n' +
                        '\n' +
                        'Earlier in May, when there were about 3,052 cryptocurrency ATMs installed and functioning globally, the installation rate was a little above 5.88 bitcoin ATMs/day, which has increased by 66% to the current 8.91 installation speed per day. For manufacturers, two companies dominate the pack: American firm Genesis Coin (33.69 percent) and Europe-based General Bytes (26.89 percent).\n' +
                        '\n' +
                        'From the new report, we can assume a few things such as an increase in demand for buying and selling cryptocurrencies through ATMs and that the business model also seem to be profitable for the manufacturers despite the slump in prices.\n' +
                        '\n' +
                        'Manufacturers are also offering increasing options for consumers through the two-way machines. Two-way ATMs allow consumers to buy and sell cryptocurrencies, while one-way machines are for buying cryptos only. The market share for two-way machines also jumped from 35.32% to 37.03%, as manufacturers invest in improved hardware to earn fees on both sides of the trade.\n' +
                        '\n' +
                        'Bitcoin is Still King\n' +
                        'The data shows bitcoin is still the dominant cryptocurrency in the world. About 99.9 percent of all the machines installed around the globe support bitcoin, while 52.7 percent support altcoins, with litecoin being the most popular.\n' +
                        '\n' +
                        'With the monthly increase in the number of bitcoin ATMs installed around the world and the pessimism towards cryptos, the future looks good for the industry. The real question is how the landscape will evolve, as ATMs provide an excellent medium that could ramp up the adoption of cryptocurrencies, though riddled with high fees. For now, the price of convenience and ease of use seems too good of a deal for consumers to turn them down — transaction fees not withstanding.'
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