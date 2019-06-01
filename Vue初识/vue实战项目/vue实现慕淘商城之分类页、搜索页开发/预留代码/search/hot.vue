<template>
   <div>
    hot
  </div>
  <!-- <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="loading-container">
      <me-loading/>
    </div>
    <ul class="hot-list">
      <li></li>
    </ul>
  </div> -->
</template>

<script>
  import MeLoading from 'base/loading';
  // import {getSearchHotKeyword} from 'api/search';
  // import {searchMixin} from 'assets/js/mixins';

  export default {
    name: 'SearchHot',
    components: {
      MeLoading
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .hot {
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;

    &-title {
      height: 34px;
      line-height: 34px;
      font-size: $font-size-l;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 8px;
      background-color: #f0f2f5;
      border-radius: 4px;
      margin: 0 10px 10px 0;
      color: #686868;
    }
  }

  .loading-container {
    padding: 10px 0;
  }
</style>
