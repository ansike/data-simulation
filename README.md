# data-simulation
### 前端实现接口数据模拟(该项目基于vue-cli)
#### get/post

# vue-cli创建好项目之后，全新的哦。有两处的改动：根目录新增一个data文件夹，修改build中的dev-server.js

![image](https://github.com/ansike/data-simulation/blob/master/src/assets/1.png)

1. data文件夹中config.js是必须的，里面定义了所有的接口以及接口对应的数据（其实是数据的键，真实的数据在data下所有的json文件中，json文件就按照那种格式写就好，只要在data文件夹下）

![image](https://github.com/ansike/data-simulation/blob/master/src/assets/3.png)
------
>`key`：后端的接口
>`value`：接口对应数据的键（具体的值在json文件中，通过键可以找到）

2. 修改build中的dev-server.js
![image](https://github.com/ansike/data-simulation/blob/master/src/assets/4.png)
------
不懂得话直接复制使用就好（主要处理键值对应问题，和创建一堆的get和post处理方法）


## FQA  1.config.js中的value和json中的键一一对应，中间不能有重复，否则会冲突，
##      2.依赖装不上，自己有脑子，npm和cnpm换着使。
##      3.完全不需要dowm我的所有代码，直接下载对应文件替换/新增自己vue项目就好
