<!--
 * @Descripttion: 自定义实体列表组件示例。
 * @version: 1.0
 * @Api：https://www.yuque.com/xieqi-nzpdn/as7g0w/khgyptll0tom0iog
 * @Author: 邪七
 * @Date: 2024年05月28日11:30:56
 * @LastEditors: 邪七
 * @LastEditTime: 2024年05月28日11:30:56
-->
<template>
	<EntityList
		ref="EntityListRefs"
		:listConf="listParamConf"
		:paginationConf="paginationConf"
	>
		<!-- 更多插槽看 第4行 API -->
		<template #afterMoreBtn>
			<el-button @click="test()">测试</el-button>
		</template>
	</EntityList>
	<ml-dialog
		title="被引用弹框"
		width="700"
		draggable
		appendToBody
		v-model="showReferenceDialogFlag"
        bodyNoPadding
	>
		<ReferenceSearchTable
			ref="ReferenceSearchTableRefs"
			entity="Beiyinyongshiti"
			refField="beiyinyongbanji"
            showCheckBox
		/>
	</ml-dialog>
</template>

<script setup>
/**
 * 组件
 */
import EntityList from "@/views/customize-menu/list.vue";
import { ref, reactive, shallowRef } from "vue";
import ReferenceSearchTable from "@/components/mlReferenceSearch/reference-search-table.vue";
let EntityListRefs = shallowRef();

let listParamConf = ref({
	// 是否显示头部
	showHeader: true,
	// 是否显示高级查询
	showAdvancedQuery: false,
	// 是否显示快速查询
	showQuickQuery: false,
	// 是否显示打开按钮
	showOpenBtn: false,
	// 是否显示编辑按钮
	showEditBtn: false,
	// 是否显示新建按钮
	showAddBtn: true,
	// 是否显示更多按钮
	showMoreBtn: true,
    // 新增记录表单id
    recordNewFormId: "0000008-1756b2d621694763a8d3dbe9e838af0c",
    // 编辑记录表单id
    recordEditFormId: "0000008-a35747166bfa40cab8e740004f6aa47c",
    // 详情查看表单id
    recordDetailFormId: "0000008-f78185de1db64acdbb61e2c50cce3e09",
});

let paginationConf = ref({});

let showReferenceDialogFlag = ref(false);

const test = () => {
	// showReferenceDialogFlag.value = true;
	EntityListRefs.value?.toAdd(null, "0000008-254dca5a57f34a1b8b5c01c47804a6cf");
};

let ReferenceSearchTableRefs = ref();

const setReferRecord = (v, row) => {
	console.log(v, "v");
	console.log(row, "row");
};

const confirm = (v,row) => {
    console.log(v, "v");
	console.log(row, "row");
    // console.log(ReferenceSearchTableRefs.value.getIdNameField(), "getIdNameField");
    // console.log(ReferenceSearchTableRefs.value.getMultipleSelection(), "getMultipleSelection");
}

</script>
<style lang="scss" scoped></style>
