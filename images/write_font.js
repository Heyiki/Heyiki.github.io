"use strict";function ajax(o,t,n){return new Promise(function(n,t){$.ajax({url:o,dataType:"JSON",success:function(t){n(t)},error:function(t){alert(t.m)}})})}(void 0).ajax("https://v1.hitokoto.cn/").then(function(t){var n,o=t.hitokoto+"【"+t.from+"】",r=0,e=setInterval(function(){n=o.substr(r,1),r++,$("#subtitle_text").html(o.substring(0,r)),""==n&&clearInterval(e)},100)});