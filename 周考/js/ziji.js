$(function(){
	var json={};
	$.ajax({
		url:'http://shiliucaijing.baike.com/api/v1/articles/index/refresh',
		success:function(data){
			$(data.result).each(function(i,item){
			$(item.data).each(function(i,itm){

				var str=`<div class="xdiv"><span class="shijian">${itm.source_time}</span><h4>${itm.title}</h4><span class="content">${itm.summary}</span></div>`
				$(str).appendTo($('#div'))



			})
			})
		}

	})
})