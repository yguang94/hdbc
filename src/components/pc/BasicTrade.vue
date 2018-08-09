<template>
  <div class="bodywidth">
    <div class="basic-trade-volumes">
      <el-row :gutter="20">
        <el-col :span="4">BTC:123</el-col>
        <el-col :span="4">USDT:45654</el-col>
        <el-col :span="4">NXT:12312</el-col>
        <el-col :span="4">LTC:12312</el-col>
        <el-col :span="4">ETH:3453</el-col>
        <el-col :span="4">TUSD:3456234</el-col>
      </el-row>
    </div>
    <div class="basic-trade-top">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="basic-trade-all-pairs">
            <div class="basic-trade-all-pairs_header">
              <el-row>
                <el-col :span="8">
                  <el-button type="text" class="basic-trade-all-pairs_header_txt">PAIRS</el-button>
                </el-col>
                <el-col :span="16">
                  <el-input
                    size="medium"
                    prefix-icon="el-icon-search">
                  </el-input>
                </el-col>
              </el-row>
            </div>
            <div class="basic-trade-all-pairs_tabs">
              <el-tabs>
                <el-tab-pane>
                  <span slot="label">BTC</span>
                  <div class="tabsTable">
                    <el-table
                      :data= 'BTCData'
                      style="width: 100%">
                      <el-table-column
                        width="65"
                        label="Coin">
                        <template slot-scope="scope">
                          <el-button type="text">Coin</el-button>
                        </template>
                      </el-table-column>
                      <el-table-column
                        width="95"
                        prop="Price"
                        label="Price">
                      </el-table-column>
                      <el-table-column
                        width="75"
                        prop="Change"
                        label="Change">
                      </el-table-column>
                      <el-table-column
                        width="100"
                        prop="Volume"
                        label="Volume">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="USDT" name="second">
                  <div class="tabsTable">
                    <el-table
                      :data= 'BTCData'
                      style="width: 100%">
                      <el-table-column
                        width="65"
                        prop="Coin"
                        label="Coin">
                        <template slot-scope="scope">
                          <el-button type="text">{{scope.row.Coin}}</el-button>
                        </template>
                      </el-table-column>
                      <el-table-column
                        width="95"
                        prop="Price"
                        label="Price">
                      </el-table-column>
                      <el-table-column
                        width="75"
                        prop="Change"
                        label="Change">
                      </el-table-column>
                      <el-table-column
                        width="100"
                        prop="Volume"
                        label="Volume">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="NXT" name="third">
                  <div class="tabsTable">
                    <el-table
                      :data= 'BTCData'
                      style="width: 100%">
                      <el-table-column
                        width="65"
                        prop="Coin"
                        label="Coin">
                      </el-table-column>
                      <el-table-column
                        width="95"
                        prop="Price"
                        label="Price">
                      </el-table-column>
                      <el-table-column
                        width="75"
                        prop="Change"
                        label="Change">
                      </el-table-column>
                      <el-table-column
                        width="100"
                        prop="Volume"
                        label="Volume">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="LTC" name="fourth">
                  <div class="tabsTable">
                    <el-table
                      :data= 'BTCData'
                      style="width: 100%">
                      <el-table-column
                        width="65"
                        prop="Coin"
                        label="Coin">
                      </el-table-column>
                      <el-table-column
                        width="95"
                        prop="Price"
                        label="Price">
                      </el-table-column>
                      <el-table-column
                        width="75"
                        prop="Change"
                        label="Change">
                      </el-table-column>
                      <el-table-column
                        width="100"
                        prop="Volume"
                        label="Volume">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="ETH" name="five">
                  <div class="tabsTable">
                    <el-table
                      :data= 'BTCData'
                      style="width: 100%">
                      <el-table-column
                        width="65"
                        prop="Coin"
                        label="Coin">
                      </el-table-column>
                      <el-table-column
                        width="95"
                        prop="Price"
                        label="Price">
                      </el-table-column>
                      <el-table-column
                        width="75"
                        prop="Change"
                        label="Change">
                      </el-table-column>
                      <el-table-column
                        width="100"
                        prop="Volume"
                        label="Volume">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TUSD" name="six">
                  <div class="tabsTable">
                    <el-table
                      :data= 'BTCData'
                      style="width: 100%">
                      <el-table-column
                        width="65"
                        prop="Coin"
                        label="Coin">
                      </el-table-column>
                      <el-table-column
                        width="95"
                        prop="Price"
                        label="Price">
                      </el-table-column>
                      <el-table-column
                        width="75"
                        prop="Change"
                        label="Change">
                      </el-table-column>
                      <el-table-column
                        width="100"
                        prop="Volume"
                        label="Volume">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="basic-trade-1" style="padding-right: 5px !important;">
            <el-row>
              <el-col :span="5">
                <ul class="basic-trade-1_ul">
                  <li><span class="basic-trade-1_title">Last price</span></li>
                  <li><span class="basic-trade-1_1">0.00000004 BTC</span></li>
                  <li><span class="basic-trade-1_2">0.00027874 $</span></li>
                </ul>
              </el-col>
              <el-col :span="3">
                <ul class="basic-trade-1_ul">
                  <li><span class="basic-trade-1_title">24hr Change</span></li>
                  <li><span>33.3333 %</span></li>
                </ul>
              </el-col>
              <el-col :span="5">
                <ul class="basic-trade-1_ul">
                  <li><span class="basic-trade-1_title">24hr Max buy</span></li>
                  <li><span class="basic-trade-1_1">0.00000004 BTC</span></li>
                  <li><span class="basic-trade-1-2">0.00027874 $</span></li>
                </ul>
              </el-col>
              <el-col :span="5">
                <ul class="basic-trade-1_ul">
                  <li><span class="basic-trade-1_title">24hr Min sell</span></li>
                  <li><span class="basic-trade-1_1">0.00000004 BTC</span></li>
                  <li><span class="basic-trade-1-2">0.00027874 $</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="basic-trade-1_ul">
                  <li><span class="basic-trade-1_title">24hr Volume</span></li>
                  <li><span class="basic-trade-1_1">28669512.02196916 BSM </span></li>
                  <li><span class="basic-trade-1-2">21 orders closed</span></li>
                </ul>
              </el-col>
            </el-row>
          </div>
          <div class="basic-trade-2">     <!-- 图表 -->
            <el-row>
              <el-col :span="24">
                <ChartView></ChartView>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="basic-trade-bottom">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="basic-trade-buy">
            <el-row>
              <el-col :span="24">
                <div class="basic-trade-buy_header">
                  <span>BUY ORDERS</span>
                  <span style="float: right">TOTAL: 0.40515866 BTC</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="basic-trade-buy_table">
                  <el-table
                    :data= 'BTCData'
                    style="width: 100%">
                    <el-table-column
                      prop="Coin"
                      label="BSM Price">
                    </el-table-column>
                    <el-table-column
                      prop="Price"
                      label="BSM Amount">
                    </el-table-column>
                    <el-table-column
                      prop="Change"
                      label="BTC Amount">
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="basic-trade-sell">
            <el-row>
              <el-col :span="24">
                <div class="basic-trade-sell_header">
                  <span>BUY ORDERS</span>
                  <span style="float: right">TOTAL: 0.40515866 BTC</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="basic-trade-sell_table">
                  <el-table
                    :data= 'BTCData'
                    style="width: 100%">
                    <el-table-column
                      prop="Coin"
                      label="BSM Price">
                    </el-table-column>
                    <el-table-column
                      prop="Price"
                      label="BSM Amount">
                    </el-table-column>
                    <el-table-column
                      prop="Change"
                      label="BTC Amount">
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="basic-trade-history">
            <el-row>
              <el-col :span="24">
                <div class="basic-trade-history_header">
                  <span>All trade history</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="basic-trade-history_table">
                  <el-table
                    :data= 'BTCData'
                    style="width: 100%">
                    <el-table-column
                      prop="Coin"
                      label="BSM Price">
                    </el-table-column>
                    <el-table-column
                      prop="Price"
                      label="BSM Amount">
                    </el-table-column>
                    <el-table-column
                      prop="Change"
                      label="BTC Amount">
                    </el-table-column>
                    <el-table-column
                      prop="Volume"
                      label="Volume">
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ChartView from './ChartView'

  export default {
    components: {
      ChartView
    },
    props: {},
    data() {
      return {
        BTCData: [
          {
          Coin: 'NCP',
          Price: '0.0000003',
          Change: '-9.0909',
          Volume: '520.98114929'
          },
          {
            Coin: 'LCO',
            Price: '0.00000146',
            Change: '-5.8065',
            Volume: '\t2.8498469'
          },
          {
            Coin: 'NCP',
            Price: '0.0000003',
            Change: '-9.0909',
            Volume: '520.98114929'
          },
          {
            Coin: 'NCP',
            Price: '0.0000003',
            Change: '-9.0909',
            Volume: '520.98114929'
          },
          {
            Coin: 'NCP',
            Price: '0.0000003',
            Change: '-9.0909',
            Volume: '520.98114929'
          },
          {
            Coin: 'NCP',
            Price: '0.0000003',
            Change: '-9.0909',
            Volume: '520.98114929'
          },
          {
            Coin: 'NCP',
            Price: '0.0000003',
            Change: '-9.0909',
            Volume: '520.98114929'
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
      document.getElementsByTagName("header")[0].className+="BasicTrade_header";
    }
  }
</script>

<style scoped>

</style>
