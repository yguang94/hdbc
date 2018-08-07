<template>
  <el-container>
    <el-header class="headerHeight">
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer class="footerHeight">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
  import Header from './header'
  import Footer from './footer'
    export default {
        components: {
          Header,
          Footer
        },
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

</style>
