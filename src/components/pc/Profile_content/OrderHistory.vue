<template>
    <div class="OrdersHistory_content">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item>
                        <el-select placeholder="All types">
                            <el-option label="All types" value="1"></el-option>
                            <el-option label="Buy" value="2"></el-option>
                            <el-option label="Sell" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select placeholder="All pairs">
                            <el-option label="All types" value="1"></el-option>
                            <el-option label="Buy" value="2"></el-option>
                            <el-option label="Sell" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-col :span="11">
                            <el-date-picker type="date" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2"></el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-form>
            </div>
            <div class="text item">
                <div class="account-body">
                    <div class="inter-table">
                        <el-table
                                :data='BalanceDate'
                                style="width: 100%">
                            <el-table-column
                                    width="80"
                                    prop="Coin"
                                    label="Order Id	">
                            </el-table-column>
                            <el-table-column
                                    width="115"
                                    prop="Name"
                                    label="Currency pair">
                            </el-table-column>
                            <el-table-column
                                    width="70"
                                    prop="Amount"
                                    label="Type">
                            </el-table-column>
                            <el-table-column
                                    width="115"
                                    prop="InOrders"
                                    label="Order Amount">
                            </el-table-column>
                            <el-table-column
                                    width="250"
                                    prop="Deposit"
                                    label="Processed Amount">
                            </el-table-column>
                            <el-table-column
                                    prop="Deposit"
                                    label="Status">
                            </el-table-column>
                            <el-table-column
                                    prop="Deposit"
                                    label="Date">
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