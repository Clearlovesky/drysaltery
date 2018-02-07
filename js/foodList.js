$.ajax({
    type:"post",
    url:"http://www.mffive.com:8080/drysaltery/getFoodList",
    success:function(data){
        var tplStr1 = template("tplProducts",data);
        console.log(data);
        $(".products").html(tplStr1);   
    },
    error:function(){
        console.log("请求失败!");
    }
})

// footer点击变色
	var aArr =$(".footer>a");
	var imgArr=$(".footer").find("img");
	aArr[0].onclick=function(){
	    imgArr[0].src="images/干货切图/ico_shangcheng@2x.png";
	    imgArr[1].src="images/干货切图/ico_ganhuohui@2x.png";
	    imgArr[2].src="images/干货切图/ico_wodehui@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#9B9B9B");
	}
	aArr[1].onclick=function(){
	    imgArr[0].src="images/干货切图/ico_shangchenghui@2x.png";
	    imgArr[1].src="images/干货切图/ico_ganhuo@2x.png";
	    imgArr[2].src="images/干货切图/ico_wodehui@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#9B9B9B");
	}
	aArr[2].onclick=function(){
	    imgArr[0].src="images/干货切图/ico_shangchenghui@2x.png";
	    imgArr[1].src="images/干货切图/ico_ganhuohui@2x.png";
	    imgArr[2].src="images/干货切图/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#9B9B9B");
	}
