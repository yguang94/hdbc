<template>
  <el-row class="bodywidth pc_header">
    <el-col :span="4">
      <router-link tag="a" to="/">
        <img src="../../assets/images/logo.svg" alt="">
      </router-link>
    </el-col>
    <el-col :span="13" class="header_menu">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="transparent">
        <el-menu-item index="1"><router-link tag="div" to="/BasicTrade">Basic trade</router-link></el-menu-item>
        <el-menu-item index="2">Support</el-menu-item>
        <el-menu-item index="3">News</el-menu-item>
        <el-menu-item index="4">F.A.Q</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="7" class="header_user">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="transparent">
        <el-menu-item index="5">Sign in</el-menu-item>
        <el-menu-item index="6">Sign up</el-menu-item>
        <el-submenu index="7">
          <template slot="title"><div class="language_img_en"></div><span>EN</span></template>
          <el-menu-item index="7-1"><div class="language_img_cn"></div><span>CN</span></el-menu-item>
          <el-menu-item index="7-2"><div class="language_img_ko"></div><span>KO</span></el-menu-item>
          <el-menu-item index="7-3"><div class="language_img_ja"></div><span>JA</span></el-menu-item>
          <el-menu-item index="7-4"><div class="language_img_en"></div><span>EN</span></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
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
    }
  }
</script>

