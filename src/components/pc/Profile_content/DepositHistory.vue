<template>
    <div class="Deposit_content">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-button type="text"><i class="fa fa-share-square"></i>Export to exсel</el-button>
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
                                    label="Amount">
                            </el-table-column>
                            <el-table-column
                                    prop="Amount"
                                    label="Fee">
                            </el-table-column>
                            <el-table-column
                                    prop="InOrders"
                                    label="Date">
                            </el-table-column>
                            <el-table-column
                                    prop="Deposit"
                                    label="Status">
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