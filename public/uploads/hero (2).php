<?php

$heroToggle = get_field('hero_toggle');

// Background
$heroBkgdType = get_field('hero_background_type');
$heroBkgdColor = get_field('hero_background_color');
$heroBkgdImage = get_field('hero_background_image');
$heroBkgdOverlay = get_field('hero_background_overlay');

switch ($heroBkgdType) {
  case 'bkgd-image' :
    $heroBkgdClass = $heroBkgdType . ' ' . $heroBkgdOverlay;
    $heroBkgdString = 'style="background: url(' . $heroBkgdImage . ');"';
  break;

  case 'bkgd-color' :
    $heroBkgdClass = $heroBkgdType . ' ' . $heroBkgdColor;
    $heroBkgdString = '';
  break;
}

// Content
$heroHeadline = get_field('hero_headline');
$heroSubheadline = get_field('hero_subheadline');
$heroBlurb = get_field('hero_blurb');

if( have_rows('hero_logos') ):
  $heroBkgdClass .= ' has-logos';
endif;

?>

<?php if($heroToggle != 'no') : ?>
  <div class="hero <?php echo $heroBkgdClass; ?>" <?php echo $heroBkgdString; ?>>

    <!-- Hero Row -->
    <div class="row">

      <!-- Headline -->
      <?php if(!empty($heroHeadline)) : ?>
        <h1><?php echo $heroHeadline; ?></h1>
      <?php endif; ?>

      <!-- Subheadline -->
      <?php if(!empty($heroSubheadline)) : ?>
        <h3><?php echo $heroSubheadline; ?></h3>
      <?php endif; ?>

      <!-- Blurb -->
      <?php if(!empty($heroBlurb)) : ?>
        <p><?php echo $heroBlurb; ?></p>
      <?php endif; ?>

      <!-- Buttons -->
      <?php
      if( have_rows('hero_buttons') ):
          echo '<div class="button-wrap">';

            // Repeat for each button
            while ( have_rows('hero_buttons') ) : the_row();
              $buttonLabel = get_sub_field('hero_button_label');
              $buttonLink = get_sub_field('hero_button_link');

              echo '<button class="button" id="modalTrigger">' . $buttonLabel . '</button><span class="button" id="button-call"><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:855-239-5322" style="
    color: #fff; text-decoration: none;">855-239-5322</a></span>';
            endwhile;
            // End repeat
		
          echo '</div>';
      endif;
      ?>
      <!-- End Buttons -->

    </div>
    <!-- End Hero Row -->


    <!-- Logos -->
    <?php
    if( have_rows('hero_logos') ):
        echo '<div class="hero-logos">';

          // Repeat for each logo
          while ( have_rows('hero_logos') ) : the_row();
            $logoImage = get_sub_field('hero_logo');

            echo '<img src="' . $logoImage . '">';
          endwhile;
          // End repeat

        echo '</div>';
    endif;
    ?>
    <!-- End Logos -->

  </div>
   <script>
        document.getElementById('modalTrigger').addEventListener('click',()=>{
             document.getElementById('modalForm').classList.remove('hide')
        document.getElementById('modalForm').classList.add('show')
        })
        
        document.getElementById('closeModal').addEventListener('click',()=>{
             document.getElementById('modalForm').classList.remove('show')
        document.getElementById('modalForm').classList.add('hide')
        })
    </script>
<?php endif; ?>