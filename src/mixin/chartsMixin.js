import Echarts from "echarts";
import * as util from "assets/util";

export default {
  computed: {
    // 图表DOM
    chartsWrapDom() {
      const chartDom = document.getElementById(this.thisDomId);
      return chartDom && Echarts.init(chartDom);
    },
    // 图表resize
    chartResize() {
      return util.throttle(() => this.chartsWrapDom.resize(), 400);
    }
  },
  methods: {
    // 初始化
    initChart() {
      this.chartsWrapDom.setOption(this.option);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
      window.addEventListener("resize", this.chartResize);
    })
  },
  destroyed() {
    window.removeEventListener("resize", this.chartResize);
  }
};
