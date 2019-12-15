var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentWidth=590;
var titleWidth=60;
for (var i=0;i<title.length;i++){
	 title[i].index=i;   //1.填写代码处
	title[i].onclick=function(){
		//2.填写代码处
		for(var i=0;i<ctbox.length;i++){
			index=this.index;
			if(i<=index){
			ctbox[i].style.left=i*titleWidth+'px';
			}else{
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
		//2.填写代码结尾
	}
}
 // 点击的序号记为n
 // 则ctbox序号小于等于n的时候，
 // ctbox的left值计算公式为句号*titleWidth
 // ctbox的序号大于n的时候
 // ctbox的left值计算公式为序号*titleWidth+contentWidth
// 点击0号标题 0*titleWidth=0
// 0|650px 710px 770px

// 点击1号标题 0*titleWidth=60
// 0|60px 710px 770px

// 点击2号标题 0*titleWidth=120
// 0|60px 120px 770px

// 点击3号标题 0*titleWidth=180
// 0|60px 120px 180px