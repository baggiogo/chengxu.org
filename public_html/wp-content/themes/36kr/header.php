<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"dir="ltr" lang="zh-CN"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" dir="ltr" lang="zh-CN"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" dir="ltr" lang="zh-CN"> <![endif]-->
<!--[if gt IE 8]><!--><HTML dir="ltr" lang="zh-CN"><!--<![endif]-->
<HEAD>
<META charset="<?php bloginfo('charset'); ?>">
<TITLE><?php if ( is_home() ) { ?><? bloginfo('name'); ?> - <?php bloginfo('description'); }
if ( is_search() ) { ?>搜索到“<?php echo $s; ?>” - <? bloginfo('name');  }
if ( is_404() ) { ?>404页面 - <? bloginfo('name');  }
if ( is_author() ) { ?>文章列表 - <? bloginfo('name'); ?><?php }
if ( is_single() ) { ?><?php wp_title(''); ?> - <? bloginfo('name'); ?><?php } 
if ( is_page() ) { ?><?php wp_title(''); ?> - <? bloginfo('name'); ?><?php } 
if ( is_category() ) { ?><?php single_cat_title(); ?> - <? bloginfo('name'); ?><?php } 
if ( is_month() ) { ?><?php the_time('F, Y'); ?> - <? bloginfo('name'); ?><?php } 
if ( is_day() ) { ?><?php the_time('F j, Y'); ?> - <? bloginfo('name'); ?><?php } ?></TITLE>
<?php 
if ( is_home()){
    echo "\n".'<meta name="keywords" content="" />';
    echo "\n".'<meat name="description" content="" />'."\n";
}
if (( is_single() || is_page() )  && ( ! is_front_page()  ) ):	// ...If this is a page or a post, grab the meta information and echo it.
    $temp_post = get_post($post->ID, ARRAY_A);
if (get_post_meta($post->ID, "meta-keywords", true)) 
		echo "\n".'<meta name="keywords" content="'. get_post_meta($post->ID, "meta-keywords", true) . '" />' . "\n";
if (get_post_meta($post->ID, "meta-description", true)) 
		echo '<meta name="description" content="'. get_post_meta($post->ID, "meta-description", true) . '" />' . "\n";
	
endif; 
?>
<META name="viewport" content="initial-scale=1.6; maximum-scale=1.0; width=device-width; ">
<META content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<LINK rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
<LINK rel="stylesheet" 
type="text/css" href="<?php bloginfo('template_directory');?>/css/jiathis_share.css">
<!--[if lt IE 9]><link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/ie.css"> <![endif]-->
<!--[if lt IE 9]><script src="<?php bloginfo('template_directory');?>/js/html5.js"></script><![endif]-->
<!--[if IE]>
<STYLE type="text/css">.timer{display:none!important}div.caption{background:transparent;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);zoom:1}</STYLE>
<![endif]-->
<STYLE type="text/css">
#featured {
	height:200px
}
</STYLE>
<STYLE type="text/css" media="screen">
#wp-admin-bar-user-info .avatar-64 {
	width:64px
}
</STYLE>
<META name="robots" content="index,follow">
<SCRIPT type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.min.js"></SCRIPT>
<script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery.lazyload.js"></script>
<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
<META name="GENERATOR" content="WordPress <?php bloginfo('version'); ?>">
<?php wp_head(); ?>
</HEAD>
<BODY>
<!--[if lt IE 7]>
<div style=' clear: both; height: 59px; padding:0 0 0 15px; position: relative;'> <a href="http://windows.microsoft.com/zh-CN/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode"><img src="http://www.36kr.com/wp-content/uploads/2011/12/warning_bar_0027_Simplified-Chinese.jpg" border="0" height="42" width="820" alt="您使用的是IE浏览器的过时版本。要获得更快更安全的浏览体验，请今天就考虑升级到最新版本。" /></a></div> 
<![endif]-->
<NAV class="show-on-phones"><A class="button black nice" href="<?php echo get_option('siteurl'); ?>/#footer">跳到分类</A></NAV>
<DIV id="krBar" class="container hide-on-phones">
  <DIV id="kb_inner" class="row">
    <DIV id="topmenu" class="eight columns">
      <UL class="nav-bar">
          <LI><A href="<?php echo get_option('siteurl'); ?>">首页</A></LI>
        <?php preg_replace('@\<li([^>]*)>\<a([^>]*)>(.*?)\<\/a>@i', '<li$1><a$2>$3</a>',wp_list_pages('title_li=&depth=1&sort_column=post_date&sort_order=DESC'));?>
      </UL>
    </DIV>
    <DIV class="four columns">
     
    </DIV>
  </DIV>
</DIV>
<!--head begin-->
<DIV id="header" class="container" role="main">
  <HEADER class="row">
    <HGROUP class="two columns">
      <H1><A href="<?php echo get_option('siteurl'); ?>" rel="home"><SPAN style="color: rgb(0, 0, 255);"><? bloginfo('name'); ?></SPAN></A></H1>
      <H5 class="subheader"><?php bloginfo('description');?></H5>
    </HGROUP>
    <DIV class="three columns fr">
      <FORM id="searchform" class="nice hide-on-phones" role="search" method="get" action="<?php echo get_option('siteurl'); ?>">
        <INPUT style="margin-top: 30px; margin-left: 40px;" 
class="small nice fr input-text oversize" name="s" type="text" placeholder="搜索" autocomplete="off" x-webkit-speech="">
      </FORM>
    </DIV>
    <DIV class="seven columns show-on-desktops fr">
      <DIV style="width: 728px; height: 91px; margin-top: 5px;">
        <DIV style="width: 728px; height: 91px;"><?php if (get_option('kr36_ad_728x90')) { ?>
                    <?php echo get_option('kr36_ad_728x90'); ?>
                <?php }?><!--728x90 adv--></DIV>
      </DIV>
    </DIV>
  </HEADER>
</DIV>
<!--main code begin-->
<DIV class="container singlerow">
<DIV class="row mg15">
<!--left menu-->
<DIV id="main_nav" class="two columns show-on-desktops">
    <DL id="MainMenu" class="nice tabs vertical">
        <dd class="home"><a class="active" href="http://chengxu.org">首页</a></dd>
        <?php //echo preg_replace("@\<\/li>@i","",preg_replace('@\<li([^>]*)>\<a([^>]*)>(.*?)\<\/a>@i', '<dd class="news"><a$2>$3</a></dd>', wp_list_categories('echo=0&orderby=id&title_li=&depth=1&hide_empty=0'))); ?>    
        <dd class="news"><a href="http://chengxu.org/category/news" title="查看 资讯 下的所有文章">资讯</a></dd>
        <dd class="news"><a href="http://chengxu.org/category/tech" title="技术宅们爱聊的事">技术宅</a></dd>
        <dd class="news"><a href="http://chengxu.org/category/bagua" title="哪里有互联网，哪里就有八卦">互联网八卦</a></dd>
    </DL>
</DIV>
<!--left menu end-->
