<template>
  <el-container>
    <el-header style="height: 95px;line-height: 95px">
      <Header></Header>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import Header from './header'
    export default {
        components: {
          Header
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
