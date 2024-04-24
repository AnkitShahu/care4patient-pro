<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package codemotel
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>

<?php the_field('head_scripts', 'options'); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'codemotel' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		 <div id="modalForm" class="hide">
        <div id="formContainer">
        <div style="display:flex; justify-content: flex-end; padding:1rem">
        <button id="closeModal">&times;</button>
        </div>
        <div class="ratio ratio-1x1"><iframe src="https://share.hsforms.com/1eZ7iEsPbQMuOc8Puqg9bIwcklg3" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="0" width="600" height="500" allowfullscreen></iframe></div>
        </div>
        </div>
		<div class="row">
			<div class="site-branding">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php echo do_shortcode('[logo]'); ?>
				</a>
			</div>

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<a class="menu-toggle" aria-controls="menu" aria-expanded="false"><?php _e( '☰', 'codemotel' ); ?></a>
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
			</nav>
            
		</div>
	</header>

	<div id="content" class="site-content row">