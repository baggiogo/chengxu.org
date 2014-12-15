<?php
include_once 'custom_field_plg.php';
//Thumbnail
if ( function_exists( 'add_theme_support' ) )
	add_theme_support( 'post-thumbnails' );
//First Post Image
function catch_that_image() {
  global $post, $posts;
  $first_img = '';
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  $first_img = $matches [1] [0];

  if(empty($first_img)){ //Defines a default image
  	$site_url = bloginfo('template_url');
    $first_img = "$site_url/images/no-thumb.jpg";
  }
  return $first_img;
}
function wp_strimwidth($str ,$start , $width ,$trimmarker ){
	$output = preg_replace('/^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){0,'.$start.'}((?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){0,'.$width.'}).*/s','\1',$str);
	return $output.$trimmarker;
}

// Custom Comment
function custom_comment($comment, $args, $depth) {
   $GLOBALS['comment'] = $comment; ?>
   <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
     <div id="comment-<?php comment_ID(); ?>">
         <div class="comment-author vcard">
				<?php echo get_avatar( $comment, $size = '28', $default = '<path_to_url>' ); ?>
                <div class="author_info">
					<?php printf(__('<cite class="fn">%s</cite>'), get_comment_author_link()) ?> <?php edit_comment_link(__('(Edit)'),'  ','') ?><br />
                    <em><?php printf(__('%1$s at %2$s'), get_comment_date('Y/m/d '),  get_comment_time(' H:i:s')) ?></em>
                </div>
                <div class="reply">
			   		<?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
              	</div>
          </div>
		  <?php if ($comment->comment_approved == '0') : ?>
             <em><?php _e('Your comment is awaiting moderation.') ?></em>
             <br />
          <?php endif; ?>

      		<?php comment_text() ?>
     </div>
<?php } ?>
<?php
$themename = "36kr";

function kr36_add_option() {

	global $themename;

	//create new top-level menu under Presentation
	add_theme_page($themename." 主题设置", "".$themename." 主题设置", 'administrator', basename(__FILE__), 'kr36_form');

	//call register settings function
	add_action( 'admin_init', 'register_mysettings' );
}

function register_mysettings() {

	//register our settings
	register_setting( '36kr-settings', 'kr36_ad_728x90');
	register_setting( '36kr-settings', 'kr36_site_analytics');
	register_setting( '36kr-settings', 'kr36_ad_468x60');
	register_setting( '36kr-settings', 'kr36_ad_sidebar');
        register_setting( '36kr-settings', 'kr36_ad_sidebar1');
	register_setting( '36kr-settings', 'kr36_ad_posttop');
	register_setting( '36kr-settings', 'kr36_ad_postbottom');
}

function kr36_form() {

	global $themename;

?>
<!-- Options Form begin -->
<div class="wrap">
	<div id="icon-options-general" class="icon32"><br/></div>
	<h2><?php echo $themename; ?>主题设置</h2>
    
	<form method="post" action="options.php">
		<?php settings_fields('36kr-settings'); ?>
		<table class="form-table">
		<tr valign="top">
            	<td><h3>基本设置</h3></td>
        	</tr>      
            <tr valign="top">
                <th scope="row"><label>统计代码<span class="description">(网站流量统计)</span></label></th>
                <td>
                    <textarea style="width:35em; height:10em;" name="kr36_site_analytics"><?php echo get_option('kr36_site_analytics'); ?></textarea>
                    <br />
                    <span class="description">添加Google Analytics或者其他服务商提供的网站流量统计代码 (显示在网站底部)</span>
                </td>
        	</tr>
       
            <tr valign="top">
            	<td><h3>广告设置</h3></td>
        	</tr>
			<tr valign="top">
                <th scope="row"><label>顶部广告<span class="description">(728x90)</span></label></th>
                <td>
                    <textarea style="width:35em; height:10em;" name="kr36_ad_728x90"><?php echo get_option('kr36_ad_728x90'); ?></textarea>
                    <br />
                    <span class="description">广告尺寸 728x90 px</span>
                </td>
        	</tr>
            <tr valign="top">
                <th scope="row"><label>侧边栏广告<span class="description">(侧边栏顶部)</span></label></th>
                <td>
                    <textarea style="width:35em; height:10em;" name="kr36_ad_sidebar"><?php echo get_option('kr36_ad_sidebar'); ?></textarea>
                    <br />
                    <span class="description">广告宽度不大于 310 px (显示在侧边栏顶部, 支持多个广告代码)</span>
                </td>
        	</tr>
                <tr valign="top">
                <th scope="row"><label>侧边栏广告<span class="description">(侧边栏中部)</span></label></th>
                <td>
                    <textarea style="width:35em; height:10em;" name="kr36_ad_sidebar1"><?php echo get_option('kr36_ad_sidebar1'); ?></textarea>
                    <br />
                    <span class="description">广告宽度不大于 310 px (显示在侧边栏顶部, 支持多个广告代码)</span>
                </td>
        	</tr>
            <tr valign="top">
                <th scope="row"><label>正文广告1<span class="description">(正文前)</span></label></th>
                <td>
                    <textarea style="width:35em; height:10em;" name="kr36_ad_posttop"><?php echo get_option('kr36_ad_posttop'); ?></textarea>
                    <br />
                    <span class="description">广告宽度不大于 600 px (显示在正文开始前, 支持多个广告代码)</span>
                </td>
        	</tr>
            <tr valign="top">
                <th scope="row"><label>正文广告2<span class="description">(正文后)</span></label></th>
                <td>
                    <textarea style="width:35em; height:10em;" name="kr36_ad_postbottom"><?php echo get_option('kr36_ad_postbottom'); ?></textarea>
                    <br />
                    <span class="description">广告宽度不大于 600 px (显示在正文结束后, 支持多个广告代码)</span>
                </td>
        	</tr>
		</table>
		<p class="submit">
		<input type="submit" name="save" id="button-primary" class="button-primary" value="<?php _e('Save Changes') ?>" />
		</p>
        
	</form>
</div>
<!-- Options Form begin -->

<?php } 
// create custom plugin settings menu
add_action('admin_menu', 'kr36_add_option');
?>