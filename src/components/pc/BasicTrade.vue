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
              <el-row>
                <el-col :span="24">
                  1231231
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="basic-trade-1">
              <el-row>
                <el-col :span="5">
                  <ul class="basic-trade-1_ul">
                    <li><span class="basic-trade-1_title">Last price</span></li>
                    <li><span class="basic-trade-1_1">0.00000004 BTC</span></li>
                    <li><span class="basic-trade-1_2">0.00027874 $</span></li>
                  </ul>
                </el-col>
                <el-col :span="4">
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
                <el-col :span="5">
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
