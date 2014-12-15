<?php

//	Adds a custom section to the Post edit screen
add_action('admin_menu', 'kr36_add_custom_field_box');
function kr36_add_custom_field_box() {
	if( function_exists( 'add_meta_box' )) {

            add_meta_box( 'kr36_custom_field_seo',  '主题SEO', 'kr36_inner_custom_seo_box', 'post', 'normal', 'high' ); //add the boxes under the post
            add_meta_box( 'kr36_custom_field_seo', '主题SEO', 'kr36_inner_custom_seo_box', 'page', 'normal', 'high' ); //add the boxes under the page


	}
}

//	Prints the inner fields for the custom post/page section
function kr36_inner_custom_seo_box() {
	global $post;
	// Use nonce for verification
	echo '<input type="hidden" name="kr36_noncename_seo" id="kr36_noncename_seo" value="' . wp_create_nonce( plugin_basename(__FILE__) ) . '" />';
	// The actual fields for data entry

	echo '<table width="100%"  cellspacing="0" border="0">';
	
        echo '<tr><th  align="left" valign="top" width="20%">Meta Description<small><a href="#"><strong class="questionmark">  </strong></a></small> </th><td  > <textarea style="width:340px; height:90px; font-size:11px;" name="kr36-meta-description" id="kr36-meta-description" >' . get_post_meta($post->ID, "meta-description", TRUE)  . '</textarea><br><br></td></tr>';
        echo '<tr><th  align="left"  valign="top" style="padding-top: 6px;">Meta Keywords<small><a href="#"><strong class="questionmark">  </strong></a></small></th><td style="padding-top: 6px;"><textarea name="wpyou-meta-keywords" style="width:340px; height:90px; font-size:11px;" id="kr36-meta-keywords"  >' . get_post_meta($post->ID, "meta-keywords", TRUE) . '</textarea><br><br></td></tr>';
	
	echo '<tr><th  align="left"  valign="top" style="padding-top: 6px;">SEO Text<small><a href="#"><strong class="questionmark">  </strong></a></small></th><td style="padding-top: 6px;"><textarea name="kr36-seo-text" style="width:340px; height:90px; font-size:11px;" id="kr36-seo-text"  >' . get_post_meta($post->ID, "seo-text", TRUE) . '</textarea><br><br></td></tr>';

	echo '<tr><th  align="left"  valign="top" style="padding-top: 6px;">More Text<small><a href="#"><strong class="questionmark">  </strong></a></small></th><td style="padding-top: 6px;"><input type="text" name="kr36-more-text" style="width:340px;  font-size:11px;" id="kr36-more-text" value="' . get_post_meta($post->ID, "more-text", TRUE) . '" /><br><br></td></tr>';

echo '</table>';
	

}

//	When the post is saved, saves our custom data
add_action('save_post', 'kr36_save_postdata', 1, 2); // save the custom fields
function kr36_save_postdata($post_id, $post) {
	
	// Is the user allowed to edit the post or page?
	if ( isset($_POST['post_type']) && 'page' == $_POST['post_type'] ) {
		if ( !current_user_can( 'edit_page', $post->ID ))
		return $post->ID;
	} else {
		if ( !current_user_can( 'edit_post', $post->ID ))
		return $post->ID;
	}
	
	$mydata=array();
      
        
	// OK, we're authenticated: we need to find and save the data
	// We'll put the data into an array to make it easier to loop though and save
if ( isset($_POST['kr36_noncename_seo']) && wp_verify_nonce( $_POST['kr36_noncename_seo'], plugin_basename(__FILE__) )) {
        if(isset($_POST['kr36-meta-description']))
	{
		$mydata['meta-description'] = $_POST['kr36-meta-description'];
	}
	if(isset($_POST['kr36-meta-keywords']))
	{
		$mydata['meta-keywords'] = $_POST['kr36-meta-keywords'];
	}
	$mydata['seo-text'] = $_POST['kr36-seo-text'];
	$mydata['more-text'] = $_POST['kr36-more-text'];
}

	// Add values of $mydata as custom fields
	foreach ($mydata as $key => $value) { //Let's cycle through the $mydata array!
		if( $post->post_type == 'revision' ) return; //don't store custom data twice
		$value = implode(',', (array)$value); //if $value is an array, make it a CSV (unlikely)
		if(get_post_meta($post->ID, $key, FALSE)) { //if the custom field already has a value...
			update_post_meta($post->ID, $key, $value); //...then just update the data
		} else { //if the custom field doesn't have a value...
			add_post_meta($post->ID, $key, $value);//...then add the data
		}
		if(!$value) delete_post_meta($post->ID, $key); //and delete if blank
	}
}

?>