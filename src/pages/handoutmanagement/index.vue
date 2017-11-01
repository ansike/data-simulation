<template>
	<div class="handout">
		<el-tabs v-model="activeName" >
		    <el-tab-pane label="教研讲义" name="first"><teachsearchout></teachsearchout></el-tab-pane>
		    <el-tab-pane label="审核讲义" name="second"><auditout></auditout></el-tab-pane>
		    <el-tab-pane label="教学讲义" name="third"><teachingout></teachingout></el-tab-pane>
		</el-tabs>
	</div>
</template>


<script>
import teachsearchout from './teachsearchout';
import teachingout from './teachingout';
import auditout from './auditout';
export default {
  name: 'handout',
  data () {
    return {
      activeName: 'first',
      msg: '作业帮直播课教师工作台基础框架'
    };
  },
  mounted(){
  	this.axios.get('/api/notes1/note').then((response) => {
	     console.log(response.data)
	   })
    this.axios.post('/api/notes1/note').then((response) => {
       console.log(response.data)
     })
  },
  methods:{
  	
  },
  components: {
    teachsearchout,
    teachingout,
    auditout
  }
};
</script>

<style lang="less">
  @import "../../style/reset";
</style>
