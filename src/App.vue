<template>
  <div class="bodybackground">
    <component v-bind:is="currentView"></component>
  </div>
</template>

<script>
  import Index from './components/pc/index'
  import MobIndex from './components/mob/mob_index'

  function _isMobile() {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }

  export default {
    data: function() {
      return {
        // currentView: ""
        currentView: "Index"
      };
    },
    components: {
      Index,
      MobIndex
    },
    methods: {
      _isMobile
    },
    mounted() {
      // let that = this
      // if (that._isMobile()) {
      //   alert("手机端");
      //   that.currentView = "MobIndex";
      // } else {
      //   alert("pc端");
      //   that.currentView = "Index";
      // }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
