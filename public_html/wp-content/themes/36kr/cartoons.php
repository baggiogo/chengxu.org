<?php // Do not delete these lines
function get_cartoon()
{
    $files = array();
    $dir = dirname(dirname(dirname(__FILE__))).'/comics';
	if ($handle = opendir($dir)) {
		while (false !== ($entry = readdir($handle))) {
			if ($entry != "." && $entry != "..") {
				$files[] = $entry;
			}
		}
		closedir($handle);
	}
    $file = $files[array_rand($files,1)];
	return 'http://chengxu.org/wp-content/comics/'.$file;
}

if ('cartoons.php' == basename($_SERVER['SCRIPT_FILENAME']))
	die ('Please do not load this page directly. Thanks!');
?>
<DIV id="cartoons" style="border: 2px dashed rgba(0, 0, 0, 0.1);">
<p>轻松一刻</p>
<img class="aligncenter size-full wp-image-94" src="<?php echo get_cartoon();?>">
</DIV>
