/*
* @Author: yan
* @Date:   2017-10-04 10:16:31
* @Last Modified by:   yan
* @Last Modified time: 2017-10-07 17:47:30
*/
$(function(){
	$(".yuan").click(function(e){
		$(document.body).animate({scrollTop:0},1000);
		e.preventDefault();
	})
	$(".caidan").click(function(e){
		if($(this).hasClass('cli')){
			$(".navv").animate({width:0},500)
			$(this).removeClass('cli');
			return;
		}else{
			$(this).addClass('cli');
			$(".navv").animate({width:340},500);
			return;
		}
		e.preventDefault();
	})
	$(".navv>li>a").on("click",function(e){
		var $tiao=$(this);
		$(document.body).stop().animate({
				scrollTop: $($tiao.attr('href')).offset().top
			}, 1000);
		e.preventDefault();
	})
	$(".lian").on("click",function(e){
		var $tiao1=$(this);
		$(document.body).stop().animate({
			scrollTop:$($tiao1.attr("href")).offset().top
		},1000);
		e.preventDefault();
	})
	var dian=$(".dian");
	var talk=$(".show-box");
	var tnow=0;
	var tnext=0;
	var flag=true;
	var ul=$(".showw");
	var width=ul.eq(0).height();
	console.log(dian,talk.length,width)
	function tmove(){
		tnext=tnow+1;
		if(tnext>=talk.length){
			tnext=0;
		}
		talk.eq(tnext).css("top",width);
		talk.eq(tnow).animate({top:-width},1000);
		talk.eq(tnext).animate({top:0},1000,function(){
			flag=true;
		});
        dian.eq(tnow).removeClass("hot");
        dian.eq(tnext).addClass("hot");
        tnow=tnext
    }
        var t=setInterval(tmove,3000);
        ul.mouseover(function(){
        	clearInterval(t);
        })
        ul.mouseout(function(){
        	t=setInterval(tmove,3000);
        })
        for(let i=0;i<dian.length;i++){
            dian.eq(i).click(function(){
            	if(flag){
            		flag=false;
                  if(i>tnow){
               	   tnext=i;
			       talk.eq(i).css("top",width)
			       talk.eq(tnow).animate({top:-width});
			       talk.eq(i).animate({top:0},function(){
				   flag=true;
			       });
	               dian.eq(tnow).removeClass("hot");
	               dian.eq(i).addClass("hot");
	               tnow=i
                }else if(i<tnow){
                   tnext=i;
			       talk.eq(i).css("top",-width)
			       talk.eq(tnow).animate({top:width});
			       talk.eq(i).animate({top:0},function(){
				   flag=true;
			       });
	               dian.eq(tnow).removeClass("hot");
	               dian.eq(i).addClass("hot");
	               tnow=i
                }else{
                	flag=true;
                }
              }
            })
        }  
	// var imgs=$(".show-box");
	// var width=imgs.width();
	// var dian=$(".dian");
	// var box=$(".showw");
	// var now=0;
	// var next=0;
	// var flag=true;
	// function move(){
	// 	next=now+1;
	// 	if(next>=imgs.length){
	// 		next=0;
	// 	}
	// 	imgs.eq(next).css.left=width+"px";
	// 	imgs.eq(now).animate({left:-width},700)
	// 	// animate(imgs[now],{left:-width});
	// 	imgs.eq(next).animate({left:0}, 700,function(){
	// 		flag=true
	// 	})
	// 	// animate(imgs[next],{left:0},function(){
	// 	// 	flag=true;
	// 	// });
 //        dian.eq(now).removeClass("act");
 //        dian.eq(next).addClass("act");
 //        now=next
 //        }
 //        var t=setInterval(move,1000);
 //        box.mouseenter(function(){
 //        	clearInterval(t);
 //        })
 //        box.mouseout(function(){
 //        	t=setInterval(move,1000);
 //        })
 //      //   left.onclick=function(){
 //      //   	if(flag){
 //      //   		flag=false;
 //      //   		next=now-1;
	// 	    //     if(next<0){
	// 		   // next=imgs.length-1;
	// 	    // }
	// 	    // imgs[next].style.left=-width+"px"
	// 	    // animate(imgs[now],{left:width});
	// 	    // animate(imgs[next],{left:0},function(){
	// 	    // 	flag=true;
	// 	    // });
 //      //       dian[now].classList.remove("hot");
 //      //       dian[next].classList.add("hot");
 //      //       now=next
 //      //   	}
 //      //   }
 //        // right.onclick=function(){
 //        // 	if(flag){
 //        // 		flag=false;
 //        // 		move();
 //        // 	}
 //        // }
 //        for(let i=0;i<dian.length;i++){
 //            dian.eq(i).click(function(){
 //            	if(flag){
 //            		flag=false;
 //                  if(i>now){
 //               	   next=i;
	// 		       imgs.eq(i).css.left=width+"px";
	// 		       imgs.eq(now).animate({left:-width},700)
	// 		       // animate(imgs[now],{left:-width});
	// 		       imgs.eq(i).animate({left:0}, 700,function(){
	// 		       	flag=true
	// 		       });
	// 		       // animate(imgs[i],{left:0},function(){
	// 			   // flag=true;
	// 		    //    });
	// 		       dian.eq(now).removeClass("hot");
	//                // dian[now].classList.remove("hot");
	               
	//                dian.eq(i).addClass("hot");
	//                now=i
 //                }else if(i<now){
 //                   next=i;
	// 		       imgs.eq(i).css.left=-width+"px";
	// 		       imgs.eq(now).animate({left:width}, 700);
	// 		       // animate(imgs[now],{left:width});
	// 		       imgs.eq(i).animate({left:0}, 700,function(){
	// 		       	flag=true;
	// 		       })
	// 		       // animate(imgs[i],{left:0},function(){
	// 			   // flag=true;
	// 		       // });
	//                dian.eq(now).removeClass("hot");
	//                dian.eq(i).addClass("hot");
	//                now=i
 //                }else{
 //                	flag=true;
 //                }
 //              }
 //            })
 //        }  

		// var imgs=$(".show-box");
		// var width=imgs.width();
		// var dian=$(".dian");
		// var box=$(".showw");
		// var now=0;
		// var next=0;
		// var flag=true;
		// function move(){
		// flag=false;
		// next=now+1;
		// if(next>=3){
		// 	next=0;
		// }
		// console.log(imgs.length)
		// imgs.eq(next).animate({left:0},2000,function(){
		// 	flag=true;
		// }).addClass('act').end().eq(now).animate({left:width},2000).removeClass('act');
		// dian.eq(now).removeClass("hot").end().eq(next).addClass("hot");
  //       now=next
		// }
	})
