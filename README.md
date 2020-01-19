# vue-boostrap-dashboard
bootstrap官方实例，学习vue的组件化使用
---
## vue组件化开发
组件（component） 是 Vue.js 最强大的功能之一。  
Vue 中的组件化开发就是把网页的重复代码抽取出来 ，封装成一个个可复用的视图组件，然后将这些视图组件拼接
到一块就构成了一个完整的系统。这种方式非常灵活，可以极大的提高我们开发和维护的效率。  
通常一套系统会以一棵嵌套的组件树的形式来组织：  
> 例如：项目可能会有头部、底部、页侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类
的组件。  
![QQ图片20200118213001.png](https://i.loli.net/2020/01/18/dpXyeV5cTNmhxRD.png)
+ 组件就是对局部视图的封装，每个组件包含了：
    + HTML 结构
    + CSS 样式
    + JavaScript 行为
        + data 数据
        + methods 行为
+ 提高开发效率，增强可维护性，更好的去解决软件上的高耦合、低内聚、无重用的3大代码问题
+ Vue 中的组件思想借鉴于 React
+ 目前主流的前端框架：Angular、React 、Vue 都是组件化开发思想

## 组件化基本开发步骤
+ 定义组件
~~~js
// 定义局部组件对象
var ComponentB = {
    template: '<div> 这是：{{ name }}</div>',
    data: function () {
    return {
        name: '局部组件'
        }
    }
}
~~~
> 说明：
> + 组件名：
>   + 可使用驼峰(camelCase)或者横线分隔(kebab-case)命名方式
>   + 但 DOM 中只能使用横线分隔方式进行引用组件
>   + 官方强烈推荐组件名字母全小写且必须包含一个连字符 如 component-a
> + template：定义组件的视图模板
> + data ：在组件中必须是一个函数
+ 注册组件
~~~js
new Vue({
    el: '#app',
    components: { // 局部组件
         'component-b': ComponentB
    }
})

~~~
+ 使用组件
~~~js
    <!-- 通过组件名直接使用, 不能使用驼峰形式 -->
    <component-b ></component-b>
~~~
----
## dashboard项目大致思路
+ 创建vue实例（放进main.js中，index引入即可）
~~~js
<!-- 创建vue实例 -->
new Vue({
      el: '#app',
      components: {
         //注册模板
        AppNavbar   // ES6 等价于AppNavbar: AppNavbar
      }
    })
~~~
+ 定义模板(抽取到components文件夹中，index引入即可)
    + 以头部组件AppNavbar.js为例 
~~~js
// AppNavbar.js

; (function () {
    //用window.来取代const，const定义的不能被外部调用
    window.AppNavbar = {
        template: ` <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
          aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">{{projectName}}</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <input type="text" class="form-control" placeholder="Search..." @blur="search">
        </form>
      </div>
    </div>
  </nav>`,
        data: function () {
            return {
                projectName: 'bootstrap+vue'
            }
        },
        methods: {
            search() {
                alert('失去焦点')//搜索框失去焦点
            }
        }
    }

})()
~~~
+ index引入相关模板  
+  相应位置添加模板
![QQ图片20200118210744.png](https://i.loli.net/2020/01/18/YGldchTVJMnZoax.png)

### 项目结构极简化

+  index留一个组件的出口，此处要被子组件替换 
~~~html
<div id="app">
</div>
~~~
+ 其余部分全部组件化，由script标签引入
~~~html
<!-- 注意：Dashboard.js 和 HomeList.js 要在 Home.js 前面引入 -->
<script src="components/Home/Dashboard.js"></script>
<script src="components/Home/HomeList.js"></script>
<script src="components/Home/Home.js"></script>
<script src="App.js"></script>
<script src="main.js"></script>
~~~
+ 注意事项
>   + 组件可以理解为特殊的 Vue 实例，不需要手动实例化，管理自己的 template 模板
>   + 组件的 template 必须有且只有一个根节点
>   + 组件的 data 选项必须是函数，且函数体返回一个对象
>   + 组件与组件之间是相互独立的，可以配置自己的一些选项资源 data、methods、computed 等等
>   + 思想：组件自己管理自己，不影响别人

+ 结构图
![bootstrap-vue组件化结构.png](https://i.loli.net/2020/01/18/O9G45WqrBNAMKhF.png)
效果图
![QQ图片20200118214216.png](https://i.loli.net/2020/01/18/xITjbgJci6aQnhK.png)
