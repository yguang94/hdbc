<template>
    <div class="openDrders_content">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                    <el-select placeholder="All types">
                        <el-option
                                key="1"
                                label="All types"
                                value="1">
                        </el-option>
                        <el-option
                                key="2"
                                label="Buy"
                                value="2">
                        </el-option>
                        <el-option
                                key="3"
                                label="Sell"
                                value="3">
                        </el-option>
                    </el-select>
            </div>
            <div class="text item">
                <div class="account-body">
                    <div class="inter-table">
                        <el-table
                                :data='BalanceDate'
                                style="width: 100%">
                            <el-table-column
                                    prop="Coin"
                                    label="Coin">
                            </el-table-column>
                            <el-table-column
                                    prop="Name"
                                    label="	Amount">
                            </el-table-column>
                            <el-table-column
                                    prop="Amount"
                                    label="Date">
                            </el-table-column>
                            <el-table-column
                                    prop="InOrders"
                                    label="Status">
                            </el-table-column>
                            <el-table-column
                                    prop="Deposit"
                                    label="	Actions">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="paginav">

                    </div>
                </div>
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
                BalanceDate: [
                    {
                        Coin: 'STCN',
                        Name: 'Stakecion',
                        Amount: 0,
                        InOrders: 0,
                        Deposit: 'Deposit',
                        Withdraw: 'Withdraw'
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