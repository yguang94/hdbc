<template>
  <div class="footerHeight">
    <div class="footerContentHeight bodywidth pc_footer">
      <el-row :gutter="60" class="footerpadding">
        <el-col :xs="0" :sm="7" :md="7" :lg="7" :xl="7" style="border-right: 1px solid #fff;height: 80px">
          <div style="padding: 12px 15px">
            <router-link tag="div" to="/" class="footer_logo"></router-link>
          </div>
        </el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
          <ul>
            <li><el-button type="text"><router-link tag="div" to="/Contact_us">Contact us</router-link></el-button></li>
            <li><el-button type="text"><router-link tag="div" to="/Pairs_specification">Pairs specification</router-link></el-button></li>
          </ul>
        </el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4">
          <ul>
            <li><el-button type="text"><router-link tag="div" to="/Terms_of_use">Terms of use</router-link></el-button></li>
            <li><el-button type="text"><router-link tag="div" to="/Listing_form">Listing form</router-link></el-button></li>
          </ul>
        </el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="4" style="border-right: 1px solid #fff;height: 80px">
          <ul>
            <li><el-button type="text"><router-link tag="div" to="/Privacy_policy">Privacy policy</router-link></el-button></li>
          </ul>
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" :lg="5" :xl="5" class="footerFlexCenter">
          <ul class="footerIcon">
            <li><i class="fab fa-facebook-square"></i></li>
            <li><i class="fab fa-twitter-square"></i></li>
            <li><i class="fab fa-linkedin"></i></li>
          </ul>
        </el-col>
      </el-row>
    </div>
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
