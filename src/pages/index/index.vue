<template>
  <div class="index">
    <div class="index-left">
    </div>
    <div class="index-right">
      <announce/>
    </div>
  </div>
</template>

<script>
import announce from './announce/announce';

export default {
  name: 'index',
  data () {
    return {
      msg: '作业帮直播课教师工作台基础框架'
    };
  },
  components: {
    announce
  }
};
</script>
<style lang="less">
  @color-body-background: #f8f8f8;
  @color-btn-bgcolor:#4cc760;
  @color-green:#34d718;
  @color-font:#373737;
  @color-7d7c83:#7d7c83;
  @color-aaa:#aaa;
  @color-23212d:#23212d;
  @color-fff:#fff;
  .index{
    width: 100vw;

    height:100vh;
    /*min-width: 960px !important;*/
    background-color: @color-body-background;
    display: flex;
    justify-content:space-between;
    .index-left{
      box-sizing: border-box;
      width: 130px;
      height: 100vh;
      padding: 20px 10px;
      box-shadow:0 0 8px 0 rgba(0,0,0,0.08);
      background-color: @color-fff;
    }
    .index-right{
      box-sizing: border-box;
      padding: 20px;
      width: calc(~"100% - 150px");
      height: 100vh;
    }
  }

</style>
