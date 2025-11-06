#!/usr/bin/env python3
"""Generate placeholder images for all 80 sounds"""

from PIL import Image, ImageDraw, ImageFont
import os

# List of all 80 sounds
sounds = [
    ('01_M_mama', 'M', 'mama'),
    ('02_B_ball', 'B', 'ball'),
    ('03_P_papa', 'P', 'papa'),
    ('04_D_dog', 'D', 'dog'),
    ('05_N_no', 'N', 'no'),
    ('06_H_hi', 'H', 'hi'),
    ('07_W_wow', 'W', 'wow'),
    ('08_T_top', 'T', 'top'),
    ('09_K_cat', 'K', 'cat'),
    ('10_G_go', 'G', 'go'),
    ('11_F_fun', 'F', 'fun'),
    ('12_BOTTLE_bottle', 'BOTTLE', 'bottle'),
    ('13_DOGGIE_doggie', 'DOGGIE', 'doggie'),
    ('14_CUP_cup', 'CUP', 'cup'),
    ('15_DOG_dog', 'DOG', 'dog'),
    ('16_CAT_cat', 'CAT', 'cat'),
    ('17_BED_bed', 'BED', 'bed'),
    ('18_MOM_mom', 'MOM', 'mom'),
    ('19_L_love', 'L', 'love'),
    ('20_S_sun', 'S', 'sun'),
    ('21_CH_chair', 'CH', 'chair'),
    ('22_SH_shoe', 'SH', 'shoe'),
    ('23_Y_yes', 'Y', 'yes'),
    ('24_KEY_key', 'KEY', 'key'),
    ('25_GO_go', 'GO', 'go'),
    ('26_CAR_car', 'CAR', 'car'),
    ('27_BALL_ball', 'BALL', 'ball'),
    ('28_ROOF_roof', 'ROOF', 'roof'),
    ('29_WAVE_wave', 'WAVE', 'wave'),
    ('30_BANG_bang', 'BANG', 'bang'),
    ('31_V_voice', 'V', 'voice'),
    ('32_Z_zoo', 'Z', 'zoo'),
    ('33_J_jump', 'J', 'jump'),
    ('34_BANANA_banana', 'BANANA', 'banana'),
    ('35_COMPUTER_computer', 'COMPUTER', 'computer'),
    ('36_TELEPHONE_telephone', 'TELEPHONE', 'telephone'),
    ('37_SPOT_spot', 'SPOT', 'spot'),
    ('38_CLAP_clap', 'CLAP', 'clap'),
    ('39_TREE_tree', 'TREE', 'tree'),
    ('40_BUS_bus', 'BUS', 'bus'),
    ('41_DRESS_dress', 'DRESS', 'dress'),
    ('42_HOUSE_house', 'HOUSE', 'house'),
    ('43_GRASS_grass', 'GRASS', 'grass'),
    ('44_R_run', 'R', 'run'),
    ('45_TH_think', 'TH', 'think'),
    ('46_TH_this', 'TH', 'this'),
    ('47_SOAP_soap', 'SOAP', 'soap'),
    ('48_FISH_fish', 'FISH', 'fish'),
    ('49_CHAIR_chair', 'CHAIR', 'chair'),
    ('50_SPOON_spoon', 'SPOON', 'spoon'),
    ('51_STAR_star', 'STAR', 'star'),
    ('52_SWIM_swim', 'SWIM', 'swim'),
    ('53_BL_blue', 'BL', 'blue'),
    ('54_BR_brown', 'BR', 'brown'),
    ('55_CL_clap', 'CL', 'clap'),
    ('56_CR_crown', 'CR', 'crown'),
    ('57_DR_drum', 'DR', 'drum'),
    ('58_FL_fly', 'FL', 'fly'),
    ('59_FR_frog', 'FR', 'frog'),
    ('60_GL_glad', 'GL', 'glad'),
    ('61_GR_green', 'GR', 'green'),
    ('62_PL_play', 'PL', 'play'),
    ('63_PR_pretty', 'PR', 'pretty'),
    ('64_SL_slip', 'SL', 'slip'),
    ('65_SM_small', 'SM', 'small'),
    ('66_SN_snow', 'SN', 'snow'),
    ('67_SP_spin', 'SP', 'spin'),
    ('68_ST_stop', 'ST', 'stop'),
    ('69_SW_swim', 'SW', 'swim'),
    ('70_TR_tree', 'TR', 'tree'),
    ('71_TW_twin', 'TW', 'twin'),
    ('72_SCR_screen', 'SCR', 'screen'),
    ('73_SPL_splash', 'SPL', 'splash'),
    ('74_SPR_spring', 'SPR', 'spring'),
    ('75_STR_street', 'STR', 'street'),
    ('76_THR_three', 'THR', 'three'),
    ('77_RABBIT_rabbit', 'RABBIT', 'rabbit'),
    ('78_LIKE_like', 'LIKE', 'like'),
    ('79_RUN_run', 'RUN', 'run'),
    ('80_LOVE_love', 'LOVE', 'love'),
]

# Create images directory if it doesn't exist
images_dir = 'assets/images'
os.makedirs(images_dir, exist_ok=True)

# Image dimensions
width, height = 1080, 1080

for filename, sound, word in sounds:
    # Create new image with gradient-like background
    img = Image.new('RGB', (width, height), color='#9333EA')
    draw = ImageDraw.Draw(img)

    # Create gradient effect
    for y in range(height):
        r = int(147 + (236 - 147) * (y / height))
        g = int(51 + (68 - 51) * (y / height))
        b = int(234 + (153 - 234) * (y / height))
        draw.rectangle([(0, y), (width, y + 1)], fill=(r, g, b))

    # Draw simple mouth shapes (circles/ellipses to represent mouth)
    # Large circle for face
    draw.ellipse([240, 200, 840, 600], fill='rgba(255, 255, 255, 50)')

    # Mouth shape (ellipse)
    draw.ellipse([390, 400, 690, 550], fill='rgba(255, 255, 255, 80)')

    # Inner mouth
    draw.ellipse([440, 450, 640, 520], fill='rgba(200, 150, 150, 100)')

    # Try to use a font, fall back to default if not available
    try:
        font_large = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 140)
        font_medium = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 70)
        font_small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 45)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw sound text
    sound_bbox = draw.textbbox((0, 0), sound, font=font_large)
    sound_width = sound_bbox[2] - sound_bbox[0]
    sound_x = (width - sound_width) // 2
    draw.text((sound_x, 680), sound, fill='white', font=font_large)

    # Draw word text
    word_bbox = draw.textbbox((0, 0), word, font=font_medium)
    word_width = word_bbox[2] - word_bbox[0]
    word_x = (width - word_width) // 2
    draw.text((word_x, 850), word, fill='rgba(255, 255, 255, 230)', font=font_medium)

    # Draw subtitle
    subtitle = "Speech Demonstration"
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=font_small)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (width - subtitle_width) // 2
    draw.text((subtitle_x, 960), subtitle, fill='rgba(255, 255, 255, 180)', font=font_small)

    # Save image
    filepath = os.path.join(images_dir, f'{filename}.png')
    img.save(filepath, 'PNG')
    print(f'Created {filename}.png')

print(f'\nSuccessfully generated {len(sounds)} placeholder images!')
print(f'Images saved to: {images_dir}')
print('\nNote: These are simple placeholders. For production, replace with actual mouth position photos.')
