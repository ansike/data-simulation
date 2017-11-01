<template>
  <div class="index-announce">
    <div class="top-wrap">
      <div @click="refresh" class="refresh"><img src="./img/refresh.png">刷新</div>
      <p class="top-title">公告及通知</p>
    </div>
    <div class="list-wrap">
      <div v-for="(item, index) in noteList" v-if="index > 2? showNote:true" class="item-wrap">
        <div class="item-title">
          {{item.title}}
          <span>{{item.date}}</span>
          <span @click="closeOrOpen(index)" class="cloze-one">{{item.showTip}}</span>
        </div>
        <p v-if="item.isShow" class="item-content">{{item.content}}</p>
      </div>
    </div>
    <p @click="showAllNote" class="cloze-all">{{allNoteTip}}</p>
  </div>
</template>

<script>
  export default {
    name: 'announce',
    
    data () {
      return {
        showNote: false,
        allNoteTip: '查看全部',
        noteList: []
      };
    },
    created: function () {
      this.refresh();
    },

    methods: {
      closeOrOpen: function (index) {
        var item = this.noteList[index];
        item.isShow = !item.isShow;
        item.showTip = (item.isShow) ? '收起' : '展开';
      },

      showAllNote: function () {
        this.showNote = !this.showNote;
        this.allNoteTip = (this.showNote) ? '收起' : '查看全部';
      },

      refresh: function () {
        // todo:请求接口list
        this.noteList = [
          {
            id: 1,
            title: '标题标题标题标题',
            date: '01-26',
            content: '内容内容内容',
            isShow: false,
            showTip: '展开'
          },
          {
            id: 2,
            title: '标题标题标题标题',
            date: '01-26',
            content: '内容内容内容',
            isShow: false,
            showTip: '展开'
          },
          {
            id: 3,
            title: '标题标题标题标题',
            date: '01-26',
            content: '内容内容内容',
            isShow: false,
            showTip: '展开'
          },
          {
            id: 4,
            title: '标题标题标题标题',
            date: '01-26',
            content: '内容内容内容',
            isShow: false,
            showTip: '展开'
          }
        ];
      }
    }
  };
</script>

<style lang="less">
  @font-12: 12px;
  @font-14: 14px;
  @font-24: 24px;
  @color-green:#34d718;
  @color-font:#373737;
  @color-light-font: #aaa;

  .index-announce {
    padding: 30px 20px 20px;
    min-width: 830px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
    color: @color-font;
    font-size: @font-12;

    .top-wrap {
      .top-title {
        margin: 0 0 20px;
        font-size: @font-24;
        line-height: @font-24;
      }
      .refresh {
        float: right;
        color: @color-green;
        font-size: @font-14;
        line-height: 100%;
        cursor: pointer;

        img {
          width: 14px;
          height: 14px;
          margin-right: 6px;
          vertical-align: top;
        }
      }
    }

    .item-wrap {
      margin-bottom: 10px;
    }

    .item-content {
      margin: 10px 0 20px;
      color: @color-light-font;
    }

    .cloze-one,
    .cloze-all {
      color: @color-green;
      cursor: pointer;
    }

    .cloze-all {
      float: right;
      margin: -24px 0 0 0;
      font-size: @font-14;
    }
  }
</style>
