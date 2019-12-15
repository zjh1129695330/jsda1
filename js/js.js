        var box=document.getElementById('tabs1');
        var ul=box.getElementsByClassName('tabs')[0];
        var lis=ul.getElementsByTagName('li');
        var div=box.getElementsByClassName('contents')[0];
        var bs=div.getElementsByTagName('b');
        for (var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onmouseover=function(){
                for(var i=0;i<lis.length;i++){
                    lis[i].removeAttribute('class');//去掉class属性
                }
                this.className='cur';
            for(var i=0;i<bs.length;i++){
                bs[i].removeAttribute('class');
            }
            this.className='cur';
            bs[this.index].className='show';
            }
        }

