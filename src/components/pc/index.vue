<template>
  <el-container>
    <el-header class="headerHeight">
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import Header from './comm/header'
  import Footer from './comm/footer'
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
