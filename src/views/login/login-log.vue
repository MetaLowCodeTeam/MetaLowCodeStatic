<template>
    <!--  -->
    <mlSingleList
        title="登录日志"
        mainEntity="TriggerLog"
        fieldsList="loginUser,ip,browserName,createdOn,logoutType,logoutTime,logout"
        :sortFields="sortFields"
        fieldName="loginUser.userName,ip,browserName"
        :tableColumn="tableColumn"
        queryUrl="/user/userLoginLog"
        @highlightClick="highlightClick"
    ></mlSingleList>
    <Detail ref="detailRefs" />
</template>
   
<script setup>
import { ref } from "vue";
import { $fromNow } from "@/utils/util";
import Detail from "@/views/customize-menu/detail.vue";
// 默认排序
let sortFields = ref([
    {
        fieldName: "createdOn",
        type: "DESC",
    },
]);
let tableColumn = ref([
    {
        prop: "loginUser",
        label: "登录用户",
        align: "center",
        formatter: (row) => {
            return row.loginUser?.name;
        },
    },
    {
        prop: "ip",
        label: "登录IP",
        align: "center",
    },
    {
        prop: "browserName",
        label: "登录浏览器",
        align: "center",
    },
    {
        prop: "createdOn",
        label: "登录时间",
        width: "150",
        align: "center",
        formatter: (row) => {
            return $fromNow(row.createdOn);
        },
    },
    {
        prop: "logoutType",
        label: "登出类型",
        align: "center",
        width:'150',
    },
    {
        prop: "logoutTime",
        label: "登出时间",
        width: "150",
        align: "center",
        formatter: (row) => {
            return $fromNow(row.logoutTime);
        },
    },
]);
// 详情组件
let detailRefs = ref("");
// 高亮字段点击
const highlightClick = (item) => {
    detailRefs.value.openDialog(item.recordId.id);
};
</script>
<style>
</style>