<?php get_header(); ?>
<ARTICLE id="post" class="artview seven columns maincol">
    <?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
      <DIV class="row">
        <DIV style="margin-top: 10px;" class="columns hide-on-phones">  发表于 <STRONG><ABBR class="timeago" title="<?php the_time('Y-m-d h:s:m'); ?>"><?php the_time('Y-m-d'); ?></ABBR></STRONG></DIV>
       
        <DIV class="columns comment_btn show-on-desktops fr"> <A class="button" title="<?php the_title(); ?>" 
href="#comments"><?php comments_number('0','1','%'); ?> 条评论</A></DIV>
      </DIV>
      <H2><?php the_title(); ?></H2>
      <DIV class="tagitems"> <?php the_category('  ');the_tags('','  ')  ?></DIV>
      <HR>
      <?php if (get_option('wpyou_ad_posttop')) { ?>
	<?php echo get_option('kr36_ad_posttop'); ?>
       <?php } ?>
   <?php the_content(); ?>
      <?php if (get_option('wpyou_ad_postbottom')) { ?>
	<?php echo get_option('wpyou_ad_postbottom'); ?>
      <?php } ?>
     
      <?php endwhile; ?>
      <?php else : ?>
        <h2>抱歉,没有找到合适的文章.</h2>
        <p>请您<a href="<?php echo get_settings('home'); ?>">返回首页</a>或在搜索中查找您所需的信息.带来不便,敬请谅解!</p>

      <?php endif; ?>
      <DIV class="show-on-desktops">除非注明，本站文章均为原创或编译，转载请注明： 文章来自<A title="<?php the_title(); ?>" href="<?php the_permalink() ?>" rel="bookmark"><?php bloginfo('name'); ?></A></DIV>
      <div class="alert-box" style="height: 30px; margin-top: 10px;">
          <div class="fl" style="padding-top: 7px;">分享给朋友：</div>
          <!-- JiaThis Button BEGIN -->
<div class="show-on-desktops columns" id="jiathis_style_32x32">
	<a class="jiathis_button_qzone"></a>
	<a class="jiathis_button_tsina"></a>
	<a class="jiathis_button_tqq"></a>
	<a class="jiathis_button_renren"></a>
	<a class="jiathis_button_kaixin001"></a>
	<a href="http://www.jiathis.com/share/" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
	<a class="jiathis_counter_style"></a>
</div>
<script type="text/javascript" src="http://v2.jiathis.com/code/jia.js" charset="utf-8"></script>
<!-- JiaThis Button END -->
      </div>
      <!--cartoons-->
      <?php require_once('cartoons.php'); ?>
      <!--adv-->
      <DIV style="border: 2px dashed rgba(0, 0, 0, 0.1);" class="postmeta show-on-desktops well">
        <DIV class="row">
          <DIV class="ten columns">
            <DL class="tabs contained">
              <DD><A class="active" href="#author_meta_wumii">相关文章</A></DD>
              <DD><A  href="#author_meta_posts">随机文章</A></DD>
            </DL>
            <UL class="tabs-content li-num contained white">
              <LI id="author_meta_wumiiTab" class="active">              
                   <?php if( function_exists('wp_related_posts')) { wp_related_posts(); } ?>
              </LI>
              <LI id="author_meta_postsTab" style="display:none;">
                  <?php wp_reset_query(); ?>
                   <?php query_posts("showposts=10&caller_get_posts=1&order=DESC&orderby=rand"); ?>
                   <ul>
                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <li><a href="<?php the_permalink() ?>" title="<?php the_title() ?>"><?php the_title() ?></a></li>
                    <?php endwhile ?>
                    <?php endif ?>
                </ul>
                <?php wp_reset_query(); ?>          
                </LI>
            </UL>
          </DIV>
        </DIV>
      </DIV>
      <?php comments_template(); ?>
      <DIV class="p_navi alert-box">
        <P style="margin:0;" class="prev_p"> <?php previous_post_link('<strong>上一篇: </strong> %link') ?></P>
        <P style="margin:0;" ><?php next_post_link('<strong>下一篇: </strong> %link') ?></P>
    </DIV>
    <A class="button fr" href="<?php echo get_option('siteurl'); ?>">← 返回首页</A>
    </ARTICLE>
<?php get_sidebar();?>
<?php get_footer(); ?>
