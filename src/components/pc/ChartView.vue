<template>
    <div>
      <!-- TradingView Widget BEGIN -->
      <div class="tradingview-widget-container">
        <div id="tradingview_93af6"></div>
        <div class="tradingview-widget-copyright"><a href="https://cn.tradingview.com/symbols/COINBASE-BTCUSD/" rel="noopener" target="_blank"><span class="blue-text">BTCUSD图表</span></a>由TradingView提供</div>
      </div>
      <!-- TradingView Widget END -->
    </div>
</template>

<script>
    function init() {
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://s3.tradingview.com/tv.js'
      document.head.appendChild(script)
      loadTradingView()
    }
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
          "container_id": "tradingview_93af6"
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
        created() {
        },
        mounted:init
    }
</script>

<style scoped>

</style>
