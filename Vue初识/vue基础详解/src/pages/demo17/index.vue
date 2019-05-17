<template>
  <div>
    <div>移动组件库Mint UI</div>
    <div>-------------------------------------</div>

    <mt-tabbar>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../../assets/100x100.png"> 外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../../assets/100x100.png"> 订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../../assets/100x100.png"> 发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/100x100.png"> 我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'mint-ui';

import { MessageBox } from 'mint-ui';

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {

    }
  },
  mounted() {
    //Toast('提示信息');

    //MessageBox('提示', '操作成功');
  }
}

</script>
