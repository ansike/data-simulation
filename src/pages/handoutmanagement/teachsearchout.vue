<template>
	<div class="handout">
		<div class="top">
      <el-button type="success">上传讲义</el-button>
    </div>
    <ul class="searchpanel">
      <li class="search_child">
        <label>讲义名称</label>
        <el-input v-model="searchcon.name" placeholder="请输入内容"></el-input>
      </li>
      <li class="search_child">
        <label>制作人</label>
        <el-input v-model="searchcon.people" placeholder="请输入内容"></el-input>
      </li>
      <li class="search_child">
        <label>讲义状态</label>
        <el-select v-model="searchcon.status" placeholder="请选择">
          <el-option
            v-for="item in searchcon.statusopt"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
      <li class="search_child">
        <label>学科</label>
        <el-select v-model="searchcon.subject" placeholder="请选择">
          <el-option
            v-for="item in searchcon.subjectopt"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
      <li class="search_child">
        <label>年级</label>
        <el-select v-model="searchcon.grade" placeholder="请选择">
          <el-option
            v-for="item in searchcon.gradeopt"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
    </ul>
    <div class="">
      
    </div>
	</div>
</template>


<script>
export default {
  data () {
    return {
      searchcon: {
        name: '',
        people: '',
        status: '',
        subject: '',
        grade: '',
        statusopt: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        subjectopt: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        gradeopt: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }]
      }
    };
  },
  components: {
  }
};
</script>

<style lang="less">

</style>
