<?php get_header(); ?>
<DIV id="posts" class="seven columns maincol">
    <?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
<ARTICLE class="posts">
        <H3><A href="<?php the_permalink() ?>" target="_blank"><?php the_title(); ?></A></H3>
        <DIV class="postmeta"> 发表于 <STRONG><ABBR class="timeago" title="<?php the_time('Y-m-d'); ?>"><?php the_time('Y-m-d'); ?></ABBR></STRONG> | <SPAN class="comment-count-number"><?php comments_popup_link('0 ', '1 ', '% '); ?> 条评论</SPAN></DIV>
        <DIV class="row">
          <DIV class="three columns">
            <DIV class="thumbnail hide-on-phones"> <A title="<?php the_title(); ?>" href="<?php the_permalink() ?>"><?php	if ( (function_exists('has_post_thumbnail')) && (has_post_thumbnail()) ) { ?><?php the_post_thumbnail( 'thumbnail', array('class' => 'post-thumbnail')); ?><?php } else {?><IMG src="<?php echo catch_that_image() ?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>" width="150" 
height="200"><?php } ?></A></DIV>
          </DIV>
          <DIV class="nine columns">
              <?php echo wp_strimwidth(strip_tags(apply_filters('the_content', $post->post_content)), 0, 350,"..."); ?>
          </DIV>
        </DIV>
        <DIV class="row">
          <DIV class="eight columns">

          </DIV>
         
          <DIV class="columns fr">
            <DIV class="readmore"><A class="button" href="<?php the_permalink() ?>">继续阅读</A></DIV>
          </DIV>
        </DIV>
        <HR>
</ARTICLE>
    <?php endwhile; ?>
	<?php else : ?>
    <ARTICLE class="posts">
        <h3>抱歉,没有找到合适的文章.</h3>
        <DIV class="nine columns">请您<a href="<?php echo get_settings('home'); ?>">返回首页</a>或在搜索中查找您所需的信息.带来不便,敬请谅解!</div>
    </article>
     <?php endif; ?>

  <DIV class="page_navi">
      <?php if(
                    function_exists('wp_pagenavi')) { wp_pagenavi();
            }else { ?>
        <div class="pageleft"><?php previous_post_link('<strong>上一篇: </strong> %link') ?></div>
            <div class="pageright"><?php next_post_link('<strong>下一篇: </strong> %link') ?></div>
    <?php } ?>
  </DIV>
</DIV>
<?php get_sidebar();?>
<?php get_footer(); ?>