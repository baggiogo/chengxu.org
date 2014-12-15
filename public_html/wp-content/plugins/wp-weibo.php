<?php
/*
Plugin Name: WP-WeiBo
Plugin URI: http://iamduyu.cn/?p=495
Description:  让用户推荐你的博客文章到新浪微博
Version: 1.0beta
Author: 杜宇
Author URI: http://iamduyu.cn
*/

function ShareToWeiBo($post_content)
{
	if(!is_single()&&!is_page())
		return $post_content;
		
	?>
    <script>
	function SendToWeiBo(){
		(function(s,d,e,r,l,p,t,z,c){
			var f='http://v.t.sina.com.cn/share/share.php?',
				u=z||d.location,
				p=['url=',e(u),'&title=',e(d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');
			function a(){
				if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))u.href=[f,p].join('');
			};
			if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();
		})(screen,document,encodeURIComponent,'WP-WeiBo','http://iamduyu.cn/',null,null,null,null);
	}
    </script>
    <?php 
	return $post_content.'<a onclick="javascript:SendToWeiBo()" style="font-size:12px;height:15px;line-height:normal;margin-right:20px;margin-top:0;padding:10px 0 0;text-align:right;width:110px;background:transparent url(http://i2.sinaimg.cn/IT/deco/2009/0930/images/wbicon_cl_002.png) no-repeat scroll 0 0;float:right;" href="javascript:;">转发到新浪微博</a><div style="clear:both; height:0px;"></div>';

}

add_filter('the_content','ShareToWeiBo');
?>