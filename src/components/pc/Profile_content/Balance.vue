<template>
    <div class="balance_content">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-input
                        size="medium"
                        prefix-icon="el-icon-search">
                </el-input>
                <el-checkbox> Hide zero balance</el-checkbox>
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
                                    label="Name">
                            </el-table-column>
                            <el-table-column
                                    prop="Amount"
                                    label="Amount">
                            </el-table-column>
                            <el-table-column
                                    prop="InOrders"
                                    label="In orders">
                            </el-table-column>
                            <el-table-column
                                    prop="id"
                                    label="Deposit">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="DepositOpen(scope.row.id)">Deposit</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="Withdraw"
                                    label="Withdraw">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="WithdrawOpen(scope.row.id)">Withdraw</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </el-card>

        <!--Dialiog-->
        <el-dialog
                title="Deposit"
                :visible.sync="Deposit"
                width="60%">
            <div class="Deposit_wrapper">
                <div>
                    <p>To replenish the balance on the exchange, transfer funds to the address below</p>
                    <p> Deposit Fee: 0.00700000 ETH <br> Minimum Amount: 0.01000000 SCAL </p>
                </div>
                <div class="coin-address">
                    <div class="input-wrapper">
                        <div class="label-link-wrapper">
                            <label>Your SCAL Deposit Address</label>
                        </div>
                        <el-input
                                type="textarea"
                                disabled
                                value="0x77b0601a41ca7c74dc591a039a67cf6c692413e7"
                                :rows="2">
                            0x77b0601a41ca7c74dc591a039a67cf6c692413e7
                        </el-input>
                        <div class="link-group-wrapper">
                            <el-button type="text">Copy address</el-button>
                            <el-button type="text">Show QR Code</el-button>
                        </div>
                    </div>
                    <div class="profile-balance-qr-code" style="display: none">
                        <el-button type="text">Hide QR Code</el-button>
                        <img src="../../../assets/images/1534212382.png" style="width: 300px;height: 300px" alt="">
                    </div>
                </div>
                <div>
                    <p>
                        IMPORTANT: Send only SCAL to this deposit address. Do not use this address for depositing ETH
                        <br>
                        Sending any other currency to this address may result in the loss of your deposit.
                    </p>
                    <p>
                        After making a deposit, you can track its progress on the <router-link to="/Profile/DepositHistory"> Deposit history </router-link>
                    </p>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="Deposit = false">Close</el-button>
            </span>
        </el-dialog>

        <el-dialog
                title="Withdraw"
                :visible.sync="Withdraw"
                width="60%">
            <div class="Withdraw_Wrapper">
                <div>
                    <p> You have 0 SCAL available for withdrawal. 0.00000000 SCAL is held on orders. </p>
                    <p> Minimum Amount: 0.01 SCAL </p>
                </div>
                <el-form label-position="top" label-width="120px" >
                    <el-form-item label="Address">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="Amount">
                        <el-input>
                            <template slot="append"><el-checkbox v-model="WithdrawChecked"> Withdraw all </el-checkbox></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Confirm with 2FA">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">Withdraw</el-button>
                        <div>
                            <span>Fee</span>
                            0.007
                            <span>ETH</span>
                        </div>
                    </el-form-item>
                </el-form>
                <div>
                    <p>After making a withdraw, you can track its progress on the  <router-link to="/Profile/WithdrawalHistory">Withdrawal History</router-link></p>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    function DepositOpen(id) {
        console.log('DepositOpen');
        this.Deposit = true
        console.log(id);
    }

    function WithdrawOpen(id) {
        console.log('WithdrawOpen');
        this.Withdraw = true
        console.log(id);
    }

    export default {
        components: {},
        props: {},
        data() {
            return {
                Deposit: false,
                Withdraw: false,
                WithdrawChecked:false,
                BalanceDate: [
                    {
                        Coin: 'STCN',
                        Name: 'Stakecion',
                        Amount: 0,
                        InOrders: 0,
                        Deposit: 'Deposit',
                        Withdraw: 'Withdraw',
                        id: 1
                    },
                    {
                        Coin: 'WAND',
                        Name: 'WANDX',
                        Amount: 0,
                        InOrders: 0,
                        Deposit: 'Deposit',
                        Withdraw: 'Withdraw',
                        id: 2
                    }
                ]
            }
        },
        watch: {},
        computed: {},
        methods: {
            DepositOpen: DepositOpen,
            WithdrawOpen: WithdrawOpen
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>