<template>
  <div class="footerContentHeight bodywidth pc_footer">
    <el-row :gutter="10" class="footerpadding">
      <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
        <div style="text-align: center;padding: 12px 0">logo</div>
      </el-col>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <ul>
          <li><el-button type="text">Contact us</el-button></li>
          <li><el-button type="text">Pairs specification</el-button></li>
        </ul>
      </el-col>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <ul>
          <li><el-button type="text">Terms of use</el-button></li>
          <li><el-button type="text">Listing form</el-button></li>
        </ul>
      </el-col>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
        <ul>
          <li><el-button type="text">Privacy policy</el-button></li>
        </ul>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" class="footerFlexCenter">
        <ul class="footerIcon">
          <li><i class="fa fa-twitter-square fa-2x"></i></li>
          <li><i class="fa fa-linkedin-square fa-2x"></i></li>
          <li><i class="fa fa-tumblr-square fa-2x"></i></li>
          <li><i class="fa fa-facebook-square fa-2x"></i></li>
        </ul>
      </el-col>
    </el-row>
  </div>


</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {}
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
  @media screen and (max-width: 767px) {
    .footerIcon{
      margin: 4% auto;
      font-size: 4vh;
    }
  }
</style>
