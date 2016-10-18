/**
 * Created by marszed on 16/10/18.
 */
var avalon = require('avalon2')
require('./mmRouter/mmRouter')


var vm = avalon.define({//初始化一个视图数据模型
    $id: 'demo',
    currPath: '',
    html: 'loading...'
})

avalon.ready(function(){
    avalon.router.add("/a", function (a) {//匹配到/a路由加载对应的组件a
        avalon.log('当前路由为:'+this.path)
        vm.currPath = this.path
        var str = '<xmp ms-widget="{is:"ms-a",$id:"ms-a"}"></xmp>';//加载组件的dom容器
        avalon.component('ms-a', {//初始化定义一个组件
            template: require('../_views/components/a.html'),//组件的模板内容
            defaults: {
                $id  : 'ms-a',
                /**
                 * 是否开启低版本兼容模式
                 * 开启，将无法开启浏览器回退功能
                 * */
                is_ie      : false,
                /**
                 * 配置复杂型单页
                 * 默认为false
                 * 如#/page=2
                 * hash配置子页，后面还需配置分页信息时启用
                 * 如#/game?page=2
                 * 表示单页应用进入子页面game页,当前页为2
                 * */
                is_more    : true,
                hash       : '',
                defaultValue : 'a组件'

            }
        });
        vm.html = str;
    });

    avalon.router.add("/b", function (a) {//匹配到/a路由加载对应的组件a
        avalon.log('当前路由为:'+this.path)
        vm.currPath = this.path
        var str = require('../_views/components/main-b.html');//直接加载组件
        avalon.component('ms-b', {//初始化定义一个组件
            template: require('../_views/components/b.html'),//组件的模板内容
            defaults: {
                $id  : 'ms-a',
                /**
                 * 是否开启低版本兼容模式
                 * 开启，将无法开启浏览器回退功能
                 * */
                is_ie      : false,
                /**
                 * 配置复杂型单页
                 * 默认为false
                 * 如#/page=2
                 * hash配置子页，后面还需配置分页信息时启用
                 * 如#/game?page=2
                 * 表示单页应用进入子页面game页,当前页为2
                 * */
                is_more    : true,
                hash       : '',
                defaultValue : 'b组件'

            }
        });
        vm.html = str;
    })

    avalon.history.start({//起始路由
        root: "/"
    })

    avalon.scan(document.body);
});

