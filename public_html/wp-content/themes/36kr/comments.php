<?php // Do not delete these lines
	if ('comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');
	if (!empty($post->post_password)) { // if there's a password
		if ($_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password) {  // and it doesn't match the cookie
			?>
			<p class="nocomments">This post is password protected. Enter the password to view comments.</p>
			<?php
			return;
		}
	}

	/* This variable is for alternating comment background */
	$oddcomment = 'class="alt" ';
?>
<DIV id="comments">
        <DL class="tabs">
          <DD class="show-on-desktops"><A class="active" href="#comment-list_uyan">所有评论</A></DD>
        </DL>
    <?php if ($comments) : ?>
    <?php $comments = array_reverse($comments) ?>
        <UL class="tabs-content">
          <LI id="comment-list_krTab">
            <DIV id="comments" class="comments items">
              <H3 class="button white radius full-width left-align"><?php comments_number('赶紧抢沙发', '<SPAN>1</SPAN> 个评论', '<SPAN>%</SPAN> 个评论' );?><A href="#respond">发表评论</A></H3>
              <OL>
                  <?php wp_list_comments('callback=custom_comment');?>
              </OL>
            </DIV>
          </LI>
    <?php
		// 如果用户在后台选择要显示评论分页
		if (get_option('page_comments')) {
			// 获取评论分页的 HTML
			$comment_pages = paginate_comments_links('echo=0');
			// 如果评论分页的 HTML 不为空, 显示导航式分页
			if ($comment_pages) {
	?>
		<div class="comment_navi">
			<span class="cpt">评论分页:</span> <?php echo $comment_pages; ?>
		</div>
	<?php
			}
		}
	?>
 <?php else : // this is displayed if there are no comments so far ?>

	<?php if ('open' == $post->comment_status) : ?>
	<!-- If comments are open, but there are no comments. -->
	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->
		<div class="nocomments">评论关闭.</div>
	<?php endif; ?>
<?php endif; ?>
        </UL>
        <DIV id="respond" class="boxes">
          <FIELDSET>
            <LEGEND>
            <H3>发表评论</H3>
            </LEGEND>
            <DIV id="cancel-comment-reply"><?php cancel_comment_reply_link('取消回复') ?></DIV>
            <?php if ( get_option('comment_registration') && !$user_ID ) : ?>
<div>你必须 <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">登录后</a> 才能留言！</div>
<?php else : ?>
            <DIV class="formcontainer">
              <FORM id="commentform" class="nice" method="post" action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php">
                  <?php if ( $user_ID ) : ?>
                 <DIV class="form-section">您现在是以 <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a> 的身份登录,<a href="<?php echo wp_logout_url(get_permalink()) ?>" title="退出系统"> 点击退出系统 &raquo;</a></div>
                  <?php else : ?>
                <P id="comment-notes">带星号<SPAN class="required">*</SPAN>是必填项目。由于缓存，您的评论会稍后显示；请以个人的名义发表评论，<SPAN class="required">昵称填写产品或网站名、评论内容附加无关网址将不通过审核。</SPAN></P>
                <DIV id="form-section-author" class="form-section">
                  <DIV class="form-label">
                    <LABEL for="author">昵称<SPAN class="required">*</SPAN></LABEL>
                  </DIV>
                  <DIV class="form-input">
                    <INPUT id="author" class="nice small" tabIndex="3" name="author" maxLength="20" size="30" type="text" value="<?php echo $comment_author; ?>">
                  </DIV>
                </DIV>
                <DIV id="form-section-email" class="form-section">
                  <DIV class="form-label">
                    <LABEL for="email">Email<SPAN class="required">*</SPAN></LABEL>
                  </DIV>
                  <DIV class="form-input">
                    <INPUT id="email" class="nice" tabIndex="4" name="email" maxLength="50" size="30" type="text" value="<?php echo $comment_author_email; ?>">
                  </DIV>
                </DIV>
                <DIV id="form-section-url" class="form-section">
                  <DIV class="form-label">
                    <LABEL for="url">网站</LABEL>
                  </DIV>
                  <DIV class="form-input">
                    <INPUT id="url" class="nice" tabIndex="5" name="url" maxLength="50" size="30" type="text" value="<?php echo $comment_author_url; ?>">
                  </DIV>
                </DIV>
<?php endif; ?>
                <DIV id="form-section-comment" class="form-section">
                  <DIV class="form-label">
                    <LABEL for="comment">评论内容</LABEL>
                  </DIV>
                  <DIV class="form-textarea">
                    <TEXTAREA id="comment" tabIndex="6" cols="45" rows="8" name="comment"></TEXTAREA>
                  </DIV>
                </DIV>
               
                
                <DIV class="form-submit">
                  <INPUT class="nice medium button radius" tabIndex="7" name="submit" value="发表评论" type="submit">
                 
                </DIV>
                 <?php comment_id_fields(); ?>
                <?php do_action('comment_form', $post->ID); ?>
              </FORM>
            </DIV>
<?php endif; // if you delete this the sky will fall on your head ?>
          </FIELDSET>
        </DIV>
      </DIV>