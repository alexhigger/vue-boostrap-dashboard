; (function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

    <!--右边上半区域-->
    <h1 class="page-header">Dashboard</h1>
    <dashboard></dashboard>
    <!--右边下半区域-->
    <h2 class="sub-header">Section title</h2>
    <home-list></home-list>
     `
    //用window.来取代const，const定义的不能被外部调用
    window.AppHome = {
        template,
        components:{
            Dashboard, //Dashboard作为AppHome的子组件
            HomeList//同上
        }
       
    }

})()