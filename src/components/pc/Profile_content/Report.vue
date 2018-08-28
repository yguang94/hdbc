<template>
    <div class="Report">
        <el-card class="box-card">
            <el-tabs>
                <el-tab-pane label="User Trade History">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="Currency">
                            <el-select placeholder="ALL" size="mini">
                                <el-option label="ALL"></el-option>
                                <el-option label="MGC"></el-option>
                                <el-option label="EGX"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Date">
                            <el-date-picker type="date" placeholder="选择日期" style="width:150px;"></el-date-picker>
                            -
                            <el-date-picker type="date" placeholder="选择日期" style="width: 150px;"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success">Search</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="User Analysis">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="Currency">
                            <el-select placeholder="ALL" size="mini">
                                <el-option label="ALL"></el-option>
                                <el-option label="MGC"></el-option>
                                <el-option label="EGX"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Date">
                            <el-date-picker type="date" placeholder="选择日期" style="width:150px;"></el-date-picker>
                            -
                            <el-date-picker type="date" placeholder="选择日期" style="width: 150px;"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success">Search</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="User History">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item label="Date">
                            <el-date-picker type="date" placeholder="选择日期" style="width:150px;"></el-date-picker>
                            -
                            <el-date-picker type="date" placeholder="选择日期" style="width: 150px;"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success">Search</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="text"><i class="fa fa-share-square"></i>Export to exсel</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
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

</style>