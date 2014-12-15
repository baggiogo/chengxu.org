<a class="hide-on-desktops" id="skipcontent"></a>
<aside class="hide-on-phones sidebarcol  three columns">
    <?php if (get_option('kr36_ad_sidebar')) { ?>
    <div class="featuredbox show-on-desktops"><?php echo get_option('kr36_ad_sidebar'); ?><!--adv--></div>
    <?php }?>
<?php
function filter_where30($where = '') {
    //posts in the last 30 days
    $where .= " AND post_date > '" . date('Y-m-d', strtotime('-30 days')) . "'";
    return $where;
}
//add_filter('posts_where', 'filter_where30');
query_posts("category_name=news&showposts=20&v_sortby=views&caller_get_posts=1&orderby=date&order=desc");
$tabs = array();
$i = 0;
while (have_posts()) { 
    the_post();
    $tabs[floor($i / 5)] .= '<li><a target="_blank" ref="nofollow" href="'.get_permalink().'" title="'.the_title('','',false).'"><span class="wpp-post-title">'.the_title('','',false).'</span></a></li>';
    $i++;
}
wp_reset_query(); 
?>
    <div class="boxs hide-on-phones" style="margin-top:30px;">
        <dl class="tabs">
            <dd><a href="#top_daily" style="color: #2A85E8;" class="active">热门资讯</a></dd> 
            <dd><a href="#top_weekly" >本周</a></dd> 
            <dd><a href="#top_month" >本月</a></dd> 
            <dd><a href="#top_overall" >昨日</a></dd> 
        </dl>
        <ul class="tabs-content roman-num">
            <li class="active items" id="top_dailyTab">
            <ul>   
                <?php echo $tabs[0];?>
            </ul>
            </li>
            <li class="items" id="top_weeklyTab" style="display:none;">
            <ul>   
                <?php echo $tabs[1];?>
            </ul>
            </li>
            <li class="items" id="top_monthTab" style="display:none;">
            <ul>
                <?php echo $tabs[2];?>
            </ul>
            </li>
            <li class="items" id="top_overallTab" style="display:none;">
            <ul>
                <?php echo $tabs[3];?>
            </ul>
            </li>
        </ul>
    </div>
    <?php if (get_option('kr36_ad_sidebar1')) { ?>
    <div class="krads show-on-desktops"><?php echo get_option('kr36_ad_sidebar1'); ?><!--adv--></div>
    <?php }?>
<?php
query_posts("category_name=tech&showposts=20&orderby=ID&order=desc");
$tabs = array();
$i = 0;
while (have_posts()) { 
    the_post();
    $tabs[floor($i / 5)] .= '<li><a target="_blank" ref="nofollow" href="'.get_permalink().'" title="'.the_title('','',false).'"><span class="wpp-post-title">'.the_title('','',false).'</span></a></li>';
    $i++;
}
?> 
    <div class="boxs hide-on-phones">
        <dl class="tabs">
            <dd><a class="active" href="#top_tech" style="color: #2A85E8;">技术宅的思考</a></dd>     
            <dd><a href="#top_tech_weekly" >本周</a></dd> 
        </dl>
        <ul class="tabs-content roman-num">
            <li class="active items" id="top_techTab">          
            <ul>   
                <?php echo $tabs[0];?>
            </ul>
            </li>
            <li class="items" id="top_tech_weeklyTab" style="display:none;">
            <ul>   
                <?php echo $tabs[1];?>
            </ul>
            </li>
        </ul>
    </div>
<?php
query_posts("category_name=bagua&showposts=20&v_sortby=views&caller_get_posts=1&orderby=ID&order=desc");
$tabs = array();
$i = 0;
while (have_posts()) { 
    the_post();
    $tabs[floor($i / 5)] .= '<li><a target="_blank" ref="nofollow" href="'.get_permalink().'" title="'.the_title('','',false).'"><span class="wpp-post-title">'.the_title('','',false).'</span></a></li>';
    $i++;
}
?>
    <div class="boxs hide-on-phones">
        <dl class="tabs">
            <dd><a class="active" href="#top_bagua" style="color: #2A85E8;">花边八卦</a></dd>     
            <dd><a href="#top_bagua_weekly">本周</a></dd>     
        </dl>
        <ul class="tabs-content roman-num">
            <li class="active items" id="top_baguaTab">          
            <ul>   
                <?php echo $tabs[0];?>
            </ul>
            </li>
            <li class="items" id="top_bagua_weeklyTab" style="display:none;">
            <ul>   
                <?php echo $tabs[1];?>
            </ul>
            </li>
        </ul>
    </div>

<iframe width="100%" height="100" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=100&fansRow=2&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=1937655203&verifier=dc742f79&dpc=1"></iframe>
</aside>