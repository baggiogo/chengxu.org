<?php get_header(); ?>
<DIV id="posts" class="seven columns maincol">
<ARTICLE class="posts">
        <H2><a href="http://softuses.com/sitemap" title="网站地图">网站地图</a></H2>
        <DIV class="row">
          <h3>最新文章</h3>
        <ul>
	<?php wp_get_archives('type=postbypost'); ?> 
	</ul>
          <hr>
          <h3>页面</h3>
          <ul>			
        <?php wp_list_pages('title_li=&exclude='); ?>
        </ul>
          <hr>
          <h3>目录</h3>
        <ul>
        <?php wp_list_categories('sort_column=name&title_li=&exclude='); ?>
        </ul>
          <hr>
         <h3>日期</h3>
        <ul>
        <?php wp_get_archives('type=monthly'); ?>
        </ul>
        </DIV>
</ARTICLE>
</DIV>
<?php get_footer(); ?>