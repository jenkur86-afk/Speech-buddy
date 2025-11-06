// Script to generate placeholder images for all sounds
// This creates simple placeholder images using canvas

const fs = require('fs');
const path = require('path');

const sounds = [
  '01_M_mama', '02_B_ball', '03_P_papa', '04_D_dog', '05_N_no', '06_H_hi', '07_W_wow',
  '08_T_top', '09_K_cat', '10_G_go', '11_F_fun',
  '12_BOTTLE_bottle', '13_DOGGIE_doggie',
  '14_CUP_cup', '15_DOG_dog', '16_CAT_cat', '17_BED_bed', '18_MOM_mom',
  '19_L_love', '20_S_sun', '21_CH_chair', '22_SH_shoe', '23_Y_yes',
  '24_KEY_key', '25_GO_go', '26_CAR_car',
  '27_BALL_ball', '28_ROOF_roof', '29_WAVE_wave', '30_BANG_bang',
  '31_V_voice', '32_Z_zoo', '33_J_jump',
  '34_BANANA_banana', '35_COMPUTER_computer', '36_TELEPHONE_telephone',
  '37_SPOT_spot', '38_CLAP_clap', '39_TREE_tree',
  '40_BUS_bus', '41_DRESS_dress', '42_HOUSE_house', '43_GRASS_grass',
  '44_R_run', '45_TH_think', '46_TH_this',
  '47_SOAP_soap', '48_FISH_fish', '49_CHAIR_chair',
  '50_SPOON_spoon', '51_STAR_star', '52_SWIM_swim',
  '53_BL_blue', '54_BR_brown', '55_CL_clap', '56_CR_crown', '57_DR_drum',
  '58_FL_fly', '59_FR_frog', '60_GL_glad', '61_GR_green', '62_PL_play',
  '63_PR_pretty', '64_SL_slip', '65_SM_small', '66_SN_snow', '67_SP_spin',
  '68_ST_stop', '69_SW_swim', '70_TR_tree', '71_TW_twin',
  '72_SCR_screen', '73_SPL_splash', '74_SPR_spring', '75_STR_street', '76_THR_three',
  '77_RABBIT_rabbit', '78_LIKE_like', '79_RUN_run', '80_LOVE_love'
];

const imagesDir = path.join(__dirname, 'assets', 'images');

// Create a simple SVG-based placeholder for each sound
sounds.forEach(filename => {
  const [num, sound, word] = filename.split('_');

  // Create SVG content
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#9333EA;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#grad)"/>
  <circle cx="540" cy="400" r="200" fill="rgba(255,255,255,0.3)"/>
  <circle cx="540" cy="450" r="120" fill="rgba(255,255,255,0.4)"/>
  <ellipse cx="540" cy="500" rx="80" ry="40" fill="rgba(255,255,255,0.5)"/>
  <text x="540" y="700" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle">${sound}</text>
  <text x="540" y="820" font-family="Arial, sans-serif" font-size="60" fill="rgba(255,255,255,0.9)" text-anchor="middle">${word}</text>
  <text x="540" y="920" font-family="Arial, sans-serif" font-size="40" fill="rgba(255,255,255,0.7)" text-anchor="middle">Speech Demonstration</text>
</svg>`;

  // Save SVG file (React Native can load SVGs, but we'll use PNG for compatibility)
  // For now, save as .svg extension
  const filepath = path.join(imagesDir, `${filename}.svg`);
  fs.writeFileSync(filepath, svg);
  console.log(`Created ${filename}.svg`);
});

console.log(`\nGenerated ${sounds.length} placeholder images in ${imagesDir}`);
console.log('\nNote: These are SVG placeholders. For production, replace with actual mouth position photos.');
