## 项目名称
* VueProject项目（一直娱WebApp）

## 项目描述
*一直娱 以 “明星IP”逐渐成长为泛娱乐产业中连接和聚合粉丝情感的核心，承载电商/明星经济/演出活动，将所有“明星”产物转变为商品，完成一款满足粉丝群体各种需求，有无限可能的明星类泛娱乐APP

### 上线公网IP地址
    * 39.96.59.27:1811

###  数据库内置登录账户密码，也可以通过注册登录
    *账户：admin
    *密码：123456

## 人员结构
* 组长：谢建满
* 组员：谢雁浩，陈裕

### 技术栈
* Vue - Vue-cli - webpack- NodeJs(Koa) - Vue-Router - Vuex - Mongodb - element-ui 

### 项目分工
* 谢建满（组长）
    *NodeJs后端路由接口的搭建,
    *前端所有路由的整体搭建，页面划分，两层嵌套路由实现WebApp整体结构
    *注册页面的实现:接口实现对用户名的检查，注册后存入数据库
    *登录页面的:接口对账户密码的查询，验证通过才可通过
    *详情页面的实现:通过列表传过来的id 去查询对应的数据渲染出来，立即下单，加      入购物车把购物车需要的数据传过去，比如：商品id，数量，商品名称等等
    *购物车页面的实现:我这里采用的技术是vuex，从vuex的仓库取数据，这里没有存进    数据库，所以刷新页面购物车的数据会不见，实现全选，删除，数量加减等功能
        
    
* 谢雁浩
    *Star页面的实现：利用element-ui实现轮播图，tab标签的切换等功能，进行对数据      的遍历，渲染
    *一直娱页面的实现：利用element-ui实现轮播图，进行对数据的遍历，渲染，页面      跳转传个id
    *资讯详情页实现：拿到传过来的id进行数据渲染

* 陈裕
     *首页的实现：利用mint-ui实现轮播图，数据的的请求渲染，路由页面的跳转传参
     *videoplay页面的实现：拿到传过来的id进行数据渲染，tab标签的切换




```
|-- undefined
    |-- .gitignore
    |-- favicon.ico
    |-- index.html
    |-- mddir.js
    |-- package-lock.json
    |-- package.json 
    |-- server.js
    |-- css
    |   |-- app.05c4b553.css
    |   |-- chunk-vendors.b5748e8a.css
    |-- db
    |   |-- index.js
    |   |-- test.js
    |-- express-cli
    |-- fonts
    |   |-- element-icons.2fad952a.woff
    |   |-- element-icons.6f0a7632.ttf
    |-- img
    |   |-- cart01.28fe96af.png
    |   |-- detail01.180390ad.png
    |   |-- detail02.dd594c02.png
    |   |-- home03.28fe96af.png
    |   |-- iconfont.5cfad8ca.svg
    |   |-- Mine01.df6eeaae.png
    |   |-- reg01.28fe96af.png
    |   |-- reg03.a74ed861.png
    |   |-- wushuju.235710ab.png
    |-- js
    |   |-- app.1b367add.js     
    |   |-- app.1b367add.js.map
    |   |-- chunk-vendors.dc10b9cb.js
    |   |-- chunk-vendors.dc10b9cb.js.map
    |-- routers   
    |   |-- index.js
    |   |-- login.js
    |   |-- registry.js
    |   |-- tokenverify.js
    |-- stylesheets
    |   |-- style.css
    |-- utils
        |-- token.js
