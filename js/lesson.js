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
// var keyword =decodeURI(href.keyword);

console.log(href);//title: "%E6%B5%8B%E8%AF%951", drysalteryID: "1"
// console.log(href.drysalteryID)
// number用来判断是否是通过搜索页面进入,number==1就不是
if(href.number==1){
    $.ajax({
        type:"post",
        url:"http://www.mffive.com:8080/drysaltery/getGroup",
        data:{
            drysalteryID:href.drysalteryID   
        },
        success:function(data){
             console.log(data);   
            var tplStr1 = template("tplProducts",data);
            // console.log(tplStr1);
            $(".products").html(tplStr1);          
        },
        error:function(){
            console.log("请求失败!");
        }
    })
}else{
    $.ajax({
        type:"post",
        url:"http://www.mffive.com:8080/drysaltery/getAppList",
        data:{
            keyword:href.keyword 
        },
        success:function(data){
             console.log(data);   
            var tplStr1 = template("tplProducts",data);
            // console.log(tplStr1);
            $(".products").html(tplStr1);  
            // console.log(data);
            // $(".middle").text(decodeURI(href.keyword));          
        },
        error:function(){
            console.log("请求失败!");
        }
    })
}

 


