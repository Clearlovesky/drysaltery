
// 页面传值
function subStr(url) {
    var obj = {};
    var str = url.split('?')[1];

    //console.log(str);
    var str2 = str.split('&');
    console.log(str2);
    for (var k in str2) {
        var str3 = str2[k].split('=');
        obj[str3[0]] = str3[1];
    }
    return obj;
}
var href = subStr(window.location.href);
// console.log(decodeURI(href.content));
console.log(href);

$.ajax({
    type:"post",
    url:"http://www.mffive.com:8080/drysaltery/getAppList",
    success:function(data){
         // console.log(data);   
        var tplStr1 = template("tplProducts",data);
        // console.log(tplStr1);
        $(".products").html(tplStr1);  
        console.log(data);
        $(".middle").text(decodeURI(href.title));          
    },
    error:function(){
        console.log("请求失败!");
    }
})
 

//// ''''''
$(function(){
    var navList =$(".nav .navWrap ul li");
    var shops = $(".nav .shop");
    var choice ;
    var categoryID;
    //获取店铺数据并渲染数据   不限类型
    var shoping = $(".nav .shoping ul");
    $.ajax({
        type:"post",
        url:"http://www.mffive.com:8080/drysaltery/loadCategory",
        data:{
                choice:1                          
            },
        success:function(data){
            console.log(data);
            var tplStr = template("tplShoping",data);
            console.log(tplStr);
            shoping.html(tplStr);
            //点击店铺名称,获取对应数据
            var shopingList = $(".shoping li");
            shopingList.each(function(i,v,q,w){
                $(v).on("click",function(){
                    categoryID = $(this).attr("shopId");
                    render();
                     // console.log(render(shopid,areaid,qixieid,nanduid));
                    //更新菜单中名字
                    navList.eq(0).children("a").text($(this).children("a").text().slice(0,3));
                    //排他
                    shopingList.children("a").children("span").addClass("hide");
                    //添加选中标志
                    $(this).children("a").children("span").removeClass("hide");
                   //隐藏菜单
                    $(this).parent("ul").parent(".shop").addClass("hide");
                })
                
            })
        },
        error:function(){
            console.log("请求失败!");
        }
    })

    //获取区域数据并渲染数据 //不限部位
    var area = $(".nav .area ul");
    $.ajax({
        type:"post",
        url:"http://www.mffive.com:8080/drysaltery/loadCategory",
        data:{
                choice:2                            
            },
        success:function(data){
            console.log(data);
            var tplStr = template("tplArea",data);
            console.log(tplStr);
            area.html(tplStr);
            //点击区域名称,获取对应数据
            var areaList = $(".area li");
            areaList.each(function(i,v,q,w){
                $(v).on("click",function(){
                    categoryID = $(this).attr("areaId");
                    render();
                    // console.log( render(shopid,areaid,qixieid,nanduid));
                    //更新区域名称
                    navList.eq(1).children("a").text($(this).children("a").text().slice(0,3));                    
                    //排他
                    areaList.children("a").children("span").addClass("hide");
                    //添加选中标志
                    $(this).children("a").children("span").removeClass("hide");
                   //隐藏菜单
                    $(this).parent("ul").parent(".shop").addClass("hide");
                })
            })
        },
        error:function(){
            console.log("请求失败!");
        }
    })

//获取区域数据并渲染数据 //不限器械
    var qixie = $(".nav .qixie ul");
    $.ajax({
        type:"post",
        url:"http://www.mffive.com:8080/drysaltery/loadCategory",
        data:{
                choice:3                           
            },
        success:function(data){
            console.log(data);
            var tplStr = template("qixie",data);
            // console.log(tplStr);
            qixie.html(tplStr);
            //点击区域名称,获取对应数据
            var qixieList = $(".qixie li");
            qixieList.each(function(i,v,q,w){
                $(v).on("click",function(){
                    categoryID = $(this).attr("qixieId");
                    render();
                    // console.log( render(shopid,areaid));
                    //更新区域名称
                    navList.eq(2).children("a").text($(this).children("a").text().slice(0,4));                    
                    //排他
                    qixieList.children("a").children("span").addClass("hide");
                    //添加选中标志
                    $(this).children("a").children("span").removeClass("hide");
                   //隐藏菜单
                    $(this).parent("ul").parent(".shop").addClass("hide");
                })
            })
        },
        error:function(){
            console.log("请求失败!");
        }
    })

//获取区域数据并渲染数据 //不限难度
    var nandu = $(".nav .nandu ul");
    $.ajax({
        type:"post",
        url:"http://www.mffive.com:8080/drysaltery/loadCategory",
        data:{
                choice:4                            
            },
        success:function(data){
            console.log(data);
            var tplStr = template("nandu",data);
            // console.log(tplStr);
            nandu.html(tplStr);
            //点击区域名称,获取对应数据
            var nanduList = $(".nandu li");
            nanduList.each(function(i,v,q,w){
                $(v).on("click",function(){
                    categoryID = $(this).attr("nanduId");
                    render();
                    // console.log( render(shopid,areaid));
                    //更新区域名称
                    navList.eq(3).children("a").text($(this).children("a").text().slice(0,3));                    
                    //排他
                    nanduList.children("a").children("span").addClass("hide");
                    //添加选中标志
                    $(this).children("a").children("span").removeClass("hide");
                   //隐藏菜单
                    $(this).parent("ul").parent(".shop").addClass("hide");
                })
            })
        },
        error:function(){
            console.log("请求失败!");
        }
    })



    //获取商品数据并渲染数据
    var products = $(".products");
    // render();
    //导航点击展示和隐藏功能
    navList.each(function(i,v,q,w){
        $(v).on("click",function(){
            var index = $(v).index();
            shops.each(function(i,v,q,w){
                //当前显示,其他隐藏
                if(i === index){
                    $(v).toggleClass("hide");
                }else{
                    $(v).addClass("hide");
                }
            })
        })
    })

     // 商品信息数据渲染功能
    function render(){
        $.ajax({
            type:"post",
            url:"http://www.mffive.com:8080/drysaltery/getAppList",
            data:{
               categoryID:categoryID                            
            },
            success:function(data){
                //console.log(data);
                var tplStr = template("tplProducts",data);
                console.log(tplStr);
                products.html(tplStr);            
            },
            error:function(){
                console.log("请求失败!");
            }
        })
    }

})