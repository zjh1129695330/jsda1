var div1=document.getElementById('div1');
var div10=div1.getElementsByClassName('div10');
var div11=div1.getElementsByClassName('div11');
var p10=div1.getElementsByClassName('p10');
			div10[3].style.width=1000+'px';
			div11[3].style.width=1000+'px';
			div10[3].style.left=-380+'px';
for (var i=0;i<div10.length;i++){
	div10[i].index=i;
		div10[i].onmouseover=function(){
		index=this.index;
		for(var i=0;i<div10.length;i++){

			div10[i].style.width=110+'px';
			div10[index].style.height=470+'px';
			div10[index].style.width=500+'px';
			div11[i].style.width=110+'px';
			if(index!=3){
			div11[index].style.width=500+'px';
			div11[index].style.height='0';
		  }else{
		  	div11[index].style.width=600+'px';
			div11[index].style.height='0';
		  }
			
			p10[index].style.display='none';
			div11[i].style.transition='2s';
			div10[3].style.left='-30'+'px';
			div10[3].style.width=1000+'px';
			if(index!=3){
			div10[3].style.width=600+'px';
			div11[3].style.width=600+'px';
			div11[3].style.position='relative';
			div10[3].style.left='-160'+'px';
			if(div10[index].style.width!='110px'){
				div10[3].style.left='-240'+'px';
				div10[3].style.transiton='0.1s';
			}else{
				div10[3].style.left='0'+'px';
				div10[3].style.transiton='0.1s';
			}
			}
			}
			}
	div10[i].onmouseout=function(){
		index=this.index;
		for(var i=0;i<div10.length;i++){
			div10[i].style.width=207.5+'px';
			div10[i].style.height=470+'px';
			div11[i].style.width=207.5+'px';
			div11[i].style.height=470+'px';
			p10[i].style.display='block';
			div11[i].style.display=470+'px';
			div10[3].style.left=0+'px';
			div10[3].style.transiton='0.1s';
			div10[3].style.width=600+'px';
			div11[3].style.width=600+'px';
			div10[3].style.left='-190'+'px';
		}
	}

}