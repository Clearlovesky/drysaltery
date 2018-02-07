window.onload=function(){
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

   
    // 头部导航
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // spaceBetween: 50
    });
    // 训练 第一屏 头部轮播
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        slidesPerView: 1,//屏幕显示小div的个数
        paginationClickable: true,
        spaceBetween: 0, //间隙
        autoplayDisableOnInteraction : false,//操作后,又恢复轮播
        autoplay: 3000, //轮播时间
        freeMode: false //自动贴合
    });
    // 饮食 第二屏 头部轮播
    var swiperJ = new Swiper('.swiper-container-j', {
        pagination: '.swiper-pagination-j', //轮播导航小点点
        slidesPerView: 1,//屏幕显示小div的个数
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        spaceBetween: 0,
        autoplay: 3000, //轮播时间
        freeMode: false
    });

    // 干货 训练头部轮播
    $.ajax({
        url:"http://www.mffive.com:8080/drysaltery/getRecommendList",
        type: "post",
        success:function(data){
            var tplStr = template('tpl0',data);
            $('.train').html(tplStr);
        },
        error:function(){
            console.log("请求失败了");
        }
    })
    // 干货 训练列表
    $.ajax({
        url:"http://www.mffive.com:8080/drysaltery/getChoiceList",
        type: "post",
        success:function(res){
            // alert(111,res)
            // console.log(res)
            if(res.code===0){
                // alert(222,res)
                // alert(3333,res.obj[0].categoryID)
                // console.log(res.obj[0].categoryID)
            }else{
                console.log(222,res)
            }
            var tplStr = template('tpl1',res);
            $('.showplay-3').html(tplStr);
            // console.log(res)
        },
        error:function(err){
            console.log(err);
        }
    })

    // 干货 美食头部轮播
    $.ajax({
        url:"http://www.mffive.com:8080/drysaltery/getFoodRecommendList",
        type: "post",
        success:function(data){
            var tplStr = template('tpl2',data);
            $('.train-1').html(tplStr);
            console.log(data)
        },
        error:function(){
            console.log("请求失败了");
        }
    })


    // 干货 美食列表
    $.ajax({
        url:"http://www.mffive.com:8080/drysaltery/getFoodChoiceList",
        type: "post",
        success:function(res){
            // alert(111,res)
            // console.log(res)
            if(res.code===0){
                // alert(222,res)
                // alert(3333,res.obj[0].categoryID)
                // console.log(res.obj[0].categoryID)
            }else{
                console.log(222,res)
            }
            var tplStr = template('tpl3',res);
            $('.showplay1-4').html(tplStr);
        },
        error:function(err){
            console.log(err);
        }
    })
}
