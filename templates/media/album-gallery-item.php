<?php
/** That's all, stop editing from here * */
global $rtmedia_backbone;

$rtmedia_backbone = array(
	'backbone'        => false,
	'is_album'        => false,
	'is_edit_allowed' => false,
);

//todo: nonce verification
$rtmedia_backbone['backbone'] = filter_input( INPUT_POST, 'backbone', FILTER_VALIDATE_BOOLEAN );

$is_album = filter_input( INPUT_POST, 'is_album', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
if ( isset( $is_album[0] ) ) {
	$rtmedia_backbone['is_album'] = $is_album[0];
}

$is_edit_allowed = filter_input( INPUT_POST, 'is_edit_allowed', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
if ( isset( $is_edit_allowed[0] ) ) {
	$rtmedia_backbone['is_edit_allowed'] = $is_edit_allowed[0];
}
?>
<li class="rtmedia-list-item">
	<a href="<?php rtmedia_permalink(); ?>" title="<?php echo esc_attr( rtmedia_title() ); ?>">
		<div class="rtmedia-item-thumbnail">
			<img src="<?php rtmedia_image( 'rt_media_thumbnail' ); ?>" alt="<?php echo esc_attr( rtmedia_title() ); ?>">
		</div>

		<?php
		if ( apply_filters( 'rtmedia_media_gallery_show_media_title', true ) ) {

			/**
			 * Add Album Count On Album Thumbnail
			 * By: Yahil
			 */
			if ( bp_is_group() ) {
				$context = 'group';
			} else {
				$context = 'profile';
			}
			?>
			<div class="rtmedia-item-title">
			  <h4><?php echo esc_html( rtmedia_title() ); ?><span>(<?php echo esc_html( rtmedia_album_count( rtmedia_id(), $context  ,bp_displayed_user_id() ) ); ?></span>)</h4>
			</div>
			<?php
		}
	 	?>

	</a>
	<?php do_action( 'rtmedia_after_album_gallery_item' ) ?>
</li> <!-- End of .rtmedia-list-item -->
