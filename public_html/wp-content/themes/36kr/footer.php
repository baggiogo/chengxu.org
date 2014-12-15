</div></div>
<script type="text/javascript">
    $(document).ready(function()
    {if(1025>jQuery(window).width())
{$('#main_nav').hide();
    $('.maincol').css({"padding":"10px"});
    $('.maincol').removeClass('seven');
    $('.maincol').addClass('eight');
    $('.sidebarcol').removeClass('three');
    $('.sidebarcol').addClass('four');
}
$('#buttonForModal').click(function(){
    $('#myModal').reveal();});});
</script>
<div class="container" id="footer">
  <footer class="row">
    <section class="three columns show-on-desktops">
      <h5><strong>联系我们</strong></h5>
      <p></p>
    </section>
    <section class="five columns">
      <h5><strong>关于<? bloginfo('name'); ?> / <a href="关于本站">关于本站</a></strong></h5>
      <p></p>
    </section>
    <section style="color:gray" class="four columns show-on-desktops">
      <h6><strong></strong></h6>
      <p>本站由 <a href="http://www.wordpress.org/" target="_blank">WordPress</a> 驱动 ,主题由<a href="http://softuses.com"  target="_blank">SoftUses</a> 提供技术支持<br/>
      沪ICP备11048881号-1
      </p>
      <p style="text-align: right;float:right">  </p>
      <p class="">&copy;<?php echo date("Y"); ?> <? bloginfo('name'); ?>
      <?php if (get_option('kr36_site_analytics')) { ?>
		 | <?php echo get_option('kr36_site_analytics'); ?>
	<?php } ?>
      </p>
    </section>
  </footer>
</div>
<script src="<?php bloginfo('template_directory');?>/js/app-js-combind.js"></script>
<?php wp_footer(); ?>
<script type="text/javascript">

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-726972-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

</script>

<script src="http://s24.cnzz.com/stat.php?id=4272377&web_id=4272377&show=pic1" language="JavaScript"></script>
</body>
</html>