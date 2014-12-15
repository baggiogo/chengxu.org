<?php get_header(); ?>
<ARTICLE id="post" class="artview seven columns maincol">
    <?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>      
      <H2><?php the_title(); ?></H2>
      <HR>     
   <?php the_content(); ?>
      <DIV class="wumii-hook">
        <INPUT name="wurl" value="<?php the_permalink() ?>" type="hidden">
        <INPUT name="wtitle" value="<?php the_title(); ?>" type="hidden">
        <INPUT name="wpic" type="hidden">
      </DIV>
      <?php endwhile; ?>
      <?php endif; ?>     
      <DIV class="p_navi alert-box">       
        <A class="button fr" href="<?php echo get_option('siteurl'); ?>">← 返回首页</A></DIV>
    </ARTICLE>
<?php get_sidebar();?>
<?php get_footer(); ?>