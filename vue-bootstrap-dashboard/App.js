; (function () {
    //组件模板中必须包含一个根元素（例如div）来包裹，否则报错
    const template = ` 
    <div>
        <!--头部导航区域-->
        <app-navbar></app-navbar>

        <!--核心区域:分左右两边-->
        <div class="container-fluid">
        <div class="row">

            <!--左边菜单栏区域-->
            <app-leaf></app-leaf>>

            <!--右边主页面区域: 分上下两个区域-->
            <app-home></app-home>
        </div>
        </div>
    </div>
     `
    //用window.来取代const，const定义的不能被外部调用
    window.App = {
        template,
        components: {
            AppNavbar,// ES6 等价于AppNavbar: AppNavbar
            AppLeaf,
            AppHome
        }

    }

})()