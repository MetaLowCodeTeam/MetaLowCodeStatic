import {ext_chart_containers as EC_CONS, ext_charts_widgets as EC_WS} from "@/views/system/dashboard-design/charts/charts-schema.js";
import SectionWidget from "@/views/system/dashboard-design/charts/section/section-widget.vue";
import SectionItem from "@/views/system/dashboard-design/charts/section/section-item.vue";
import {registerChartWidgets} from "@/views/system/dashboard-design/charts/chart-widget/index.js";
import VisualDesign from "../../../../../lib/visual-design/designer.umd";

const {addAdvancedFieldSchema, addCustomWidgetSchema, addChartContainerSchema,
	addChartSchema, addZHExtensionLang, addENExtensionLang} = VisualDesign.VFormSDK

export const loadChartsExtension = function (app) {
  EC_CONS.forEach(con => {
    addChartContainerSchema(con)
  })
  app.component(SectionWidget.name, SectionWidget)  //注册设计期的容器组件
  app.component(SectionItem.name, SectionItem)  //注册运行期的容器组件

  EC_WS.forEach(wgt => {
    addChartSchema(wgt)
  })
  registerChartWidgets(app)

}
