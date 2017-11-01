//key代表的是实际的url，前边的api已经在dev-server中进行了配置
//value代表json文件中的键，json中的值是返回给用户的数据
var data={
	"get":[
		{
			"key":"/notes1/note?adssada*&%ds=+/sada",
			"value":"notes"
		},
		{
			"key":"/notes2/note",
			"value":"sites2"
		},
		{
			"key":"/notes3/note",
			"value":"sites3"
		}
	],
	"post":[
		{
			"key":"/notes1/note",
			"value":"sites"
		},
		{
			"key":"/notes2/note",
			"value":"notes3"
		},
		{
			"key":"/test/test",
			"value":"test2?id=1"
		}
	]
}
module.exports = data;