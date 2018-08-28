<template>
    <div class="Pairs_specification_content">
        <div class="header_home_background"></div>
        <div class="container-fluid">
            <div class="content-wrapper">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <h1>Pairs specification</h1>
                        <el-input style="float: right; padding: 3px 0; width: 160px;padding: 0" suffix-icon="el-icon-search"></el-input>
                    </div>
                    <div class="text item">
                        <div class="pairs-specification-body">
                            <el-table
                                    :data="specificationData"
                                    style="width: 100%">
                                <el-table-column
                                        prop="Pair"
                                        label="Pair">
                                </el-table-column>
                                <el-table-column
                                        prop="Min_buy_price"
                                        label="Min buy price">
                                </el-table-column>
                                <el-table-column
                                        prop="Min_sell_price"
                                        label="Min sell price">
                                </el-table-column>
                                <el-table-column
                                        prop="Min_amount"
                                        label="Min amount">
                                </el-table-column>
                                <el-table-column
                                        prop="Maker_fees"
                                        label="Maker fees">
                                </el-table-column>
                                <el-table-column
                                        prop="Taker_fees"
                                        label="Taker fees">
                                </el-table-column>
                            </el-table>
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
                specificationData: [
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'ARDR/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'PRG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'BTC/USDT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/NXT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'EAG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'ARDR/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'PRG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'BTC/USDT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/NXT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'EAG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'ARDR/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'PRG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'BTC/USDT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/NXT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'EAG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'ARDR/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'PRG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'BTC/USDT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/NXT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'EAG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'ARDR/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'PRG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'BTC/USDT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/NXT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'EAG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'ARDR/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'PRG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'BTC/USDT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/NXT',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'EAG/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
                    },
                    {
                        Pair: 'STEX/BTC',
                        Min_buy_price:'0.00000001',
                        Min_sell_price:'0.00000001',
                        Min_amount:'0.00000100',
                        Maker_fees:'0.2%',
                        Taker_fees:'0.2%'
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

