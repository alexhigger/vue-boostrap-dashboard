new Vue({
    //Vue实例中的template选项中引用了组件后，会将这个组件的渲染结果替换掉#app 标签的元素
    template:'<app/>', //template:'<app></app>',
    el: '#app',
    components: {//注册组件
      App
    }
  })