
$("article h4").click(function(){

	//var clickItem=$(this).attr("class");
	//console.log(clickItem);
	$(this).next().slideToggle(300);

});

$("p.myResume").mouseenter(function(){
		
	$(this).css("font-size","140%"); 
	
	
});

$("p.myResume").mouseleave(function(){
	
	$(this).css("font-size","100%"); 
});

