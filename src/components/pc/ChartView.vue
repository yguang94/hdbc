<template>
    <div>
      <!-- TradingView Widget BEGIN -->
      <div class="tradingview-widget-container">
        <div id="technical-analysis"></div>
        <div class="tradingview-widget-copyright"><a href="https://cn.tradingview.com/symbols/COINBASE-BTCUSD/" rel="noopener" target="_blank"><span class="blue-text">BTCUSD图表</span></a>由TradingView提供</div>
      </div>
      <!-- TradingView Widget END -->
    </div>
</template>

<script>

    function loadTradingView() {
      new TradingView.widget(
        {
          "width": 776,
          "height": 465,
          "symbol": "COINBASE:BTCUSD",
          "interval": "5",
          "timezone": "Etc/UTC",
          "theme": "Dark",
          "style": "1",
          "locale": "zh_CN",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "container_id": "technical-analysis"
        }
      );

    }
    export default {
        components: {},
        props: {},
        data() {
            return {

            }
        },
        watch: {},
        computed: {},
        methods: {},
        mounted:loadTradingView
    }
</script>

<style scoped>

</style>
