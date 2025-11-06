export const soundLibrary = {
  '1-2': [
    { id: 'm', sound: 'M', word: 'mama', difficulty: 'easy', description: 'Press both lips together firmly', practiceWords: ['mama', 'more', 'moon'], image: require('../assets/images/01_M_mama.png') },
    { id: 'b', sound: 'B', word: 'ball', difficulty: 'easy', description: 'Press lips together, then pop', practiceWords: ['ball', 'baby', 'bear'], image: require('../assets/images/02_B_ball.png') },
    { id: 'p', sound: 'P', word: 'papa', difficulty: 'easy', description: 'Like B but softer', practiceWords: ['papa', 'pen', 'play'], image: require('../assets/images/03_P_papa.png') },
    { id: 'd', sound: 'D', word: 'dog', difficulty: 'easy', description: 'Tongue touches roof of mouth', practiceWords: ['dog', 'duck', 'dance'], image: require('../assets/images/04_D_dog.png') },
    { id: 'n', sound: 'N', word: 'no', difficulty: 'easy', description: 'Tongue up, hum through nose', practiceWords: ['no', 'nice', 'nose'], image: require('../assets/images/05_N_no.png') },
    { id: 'h', sound: 'H', word: 'hi', difficulty: 'easy', description: 'Breathe out gently', practiceWords: ['hi', 'happy', 'hat'], image: require('../assets/images/06_H_hi.png') },
    { id: 'w', sound: 'W', word: 'wow', difficulty: 'easy', description: 'Round lips like a kiss', practiceWords: ['wow', 'water', 'window'], image: require('../assets/images/07_W_wow.png') },
  ],
  '2-3': [
    { id: 't', sound: 'T', word: 'top', difficulty: 'medium', description: 'Tongue tap behind teeth', practiceWords: ['top', 'toe', 'talk'], image: require('../assets/images/08_T_top.png') },
    { id: 'k', sound: 'K', word: 'cat', difficulty: 'medium', description: 'Back of tongue up', practiceWords: ['cat', 'cow', 'cake'], image: require('../assets/images/09_K_cat.png') },
    { id: 'g', sound: 'G', word: 'go', difficulty: 'medium', description: 'Like K with voice', practiceWords: ['go', 'good', 'game'], image: require('../assets/images/10_G_go.png') },
    { id: 'f', sound: 'F', word: 'fun', difficulty: 'medium', description: 'Teeth on lower lip', practiceWords: ['fun', 'fish', 'fire'], image: require('../assets/images/11_F_fun.png') },
  ],
  '2-3-processes': [
    { id: 'reduplication', sound: 'BOTTLE', word: 'bottle', difficulty: 'medium', description: 'Say the whole word: bot-tle', practiceWords: ['bottle', 'water', 'little'], category: 'Phonological Process', milestone: 'Reduplication (stops by age 3)', processType: 'Reduplication', image: require('../assets/images/12_BOTTLE_bottle.png') },
    { id: 'doggie-assim', sound: 'DOGGIE', word: 'doggie', difficulty: 'medium', description: 'Say D-O-G not G-O-G', practiceWords: ['doggie', 'kitty', 'bunny'], category: 'Phonological Process', milestone: 'Assimilation (stops by age 3)', processType: 'Assimilation', image: require('../assets/images/13_DOGGIE_doggie.png') },
  ],
  '2-3-final': [
    { id: 'cup', sound: 'CUP', word: 'cup', difficulty: 'medium', description: 'Say the P sound at the end', practiceWords: ['cup', 'up', 'jump'], category: 'Final Consonants', milestone: 'Final consonants (by age 3)', image: require('../assets/images/14_CUP_cup.png') },
    { id: 'dog-final', sound: 'DOG', word: 'dog', difficulty: 'medium', description: 'Say the G sound at the end', practiceWords: ['dog', 'big', 'hug'], category: 'Final Consonants', milestone: 'Final consonants (by age 3)', image: require('../assets/images/15_DOG_dog.png') },
    { id: 'cat-final', sound: 'CAT', word: 'cat', difficulty: 'medium', description: 'Say the T sound at the end', practiceWords: ['cat', 'hat', 'sit'], category: 'Final Consonants', milestone: 'Final consonants (by age 3)', image: require('../assets/images/16_CAT_cat.png') },
    { id: 'bed', sound: 'BED', word: 'bed', difficulty: 'medium', description: 'Say the D sound at the end', practiceWords: ['bed', 'red', 'head'], category: 'Final Consonants', milestone: 'Final consonants (by age 3)', image: require('../assets/images/17_BED_bed.png') },
    { id: 'mom', sound: 'MOM', word: 'mom', difficulty: 'medium', description: 'Say the M sound at the end', practiceWords: ['mom', 'home', 'gum'], category: 'Final Consonants', milestone: 'Final consonants (by age 3)', image: require('../assets/images/18_MOM_mom.png') },
  ],
  '3-4': [
    { id: 'l', sound: 'L', word: 'love', difficulty: 'medium', description: 'Tongue touches top', practiceWords: ['love', 'lion', 'lamp'], image: require('../assets/images/19_L_love.png') },
    { id: 's', sound: 'S', word: 'sun', difficulty: 'medium', description: 'Teeth close, air through', practiceWords: ['sun', 'sock', 'sing'], image: require('../assets/images/20_S_sun.png') },
    { id: 'ch', sound: 'CH', word: 'chair', difficulty: 'hard', description: 'Lips round forward', practiceWords: ['chair', 'cheese', 'church'], image: require('../assets/images/21_CH_chair.png') },
    { id: 'sh', sound: 'SH', word: 'shoe', difficulty: 'hard', description: 'Lips pucker, gentle air', practiceWords: ['shoe', 'ship', 'shell'], image: require('../assets/images/22_SH_shoe.png') },
    { id: 'y', sound: 'Y', word: 'yes', difficulty: 'medium', description: 'Tongue near roof of mouth', practiceWords: ['yes', 'yellow', 'yell'], image: require('../assets/images/23_Y_yes.png') },
  ],
  '3-4-processes': [
    { id: 'fronting-key', sound: 'KEY', word: 'key', difficulty: 'hard', description: 'Say K not T (back of tongue)', practiceWords: ['key', 'car', 'king'], category: 'Phonological Process', milestone: 'Fronting (stops by age 3.5)', processType: 'Fronting', image: require('../assets/images/24_KEY_key.png') },
    { id: 'fronting-go', sound: 'GO', word: 'go', difficulty: 'hard', description: 'Say G not D (back of tongue)', practiceWords: ['go', 'get', 'give'], category: 'Phonological Process', milestone: 'Fronting (stops by age 3.5)', processType: 'Fronting', image: require('../assets/images/25_GO_go.png') },
    { id: 'fronting-car', sound: 'CAR', word: 'car', difficulty: 'hard', description: 'Say K-AR not T-AR', practiceWords: ['car', 'come', 'call'], category: 'Phonological Process', milestone: 'Fronting (stops by age 3.5)', processType: 'Fronting', image: require('../assets/images/26_CAR_car.png') },
  ],
  '3-4-final': [
    { id: 'ball-final', sound: 'BALL', word: 'ball', difficulty: 'medium', description: 'Say the L sound at the end', practiceWords: ['ball', 'doll', 'wall'], category: 'Final Consonants', milestone: 'Final consonants without S (by age 4)', image: require('../assets/images/27_BALL_ball.png') },
    { id: 'roof', sound: 'ROOF', word: 'roof', difficulty: 'medium', description: 'Say the F sound at the end', practiceWords: ['roof', 'leaf', 'off'], category: 'Final Consonants', milestone: 'Final consonants without S (by age 4)', image: require('../assets/images/28_ROOF_roof.png') },
    { id: 'wave', sound: 'WAVE', word: 'wave', difficulty: 'medium', description: 'Say the V sound at the end', practiceWords: ['wave', 'five', 'love'], category: 'Final Consonants', milestone: 'Final consonants without S (by age 4)', image: require('../assets/images/29_WAVE_wave.png') },
    { id: 'bang', sound: 'BANG', word: 'bang', difficulty: 'medium', description: 'Say the NG sound at the end', practiceWords: ['bang', 'sing', 'ring'], category: 'Final Consonants', milestone: 'Final consonants without S (by age 4)', image: require('../assets/images/30_BANG_bang.png') },
  ],
  '4-5': [
    { id: 'v', sound: 'V', word: 'voice', difficulty: 'hard', description: 'Like F with buzzing', practiceWords: ['voice', 'vine', 'van'], image: require('../assets/images/31_V_voice.png') },
    { id: 'z', sound: 'Z', word: 'zoo', difficulty: 'hard', description: 'Like S with buzzing', practiceWords: ['zoo', 'zip', 'zebra'], image: require('../assets/images/32_Z_zoo.png') },
    { id: 'j', sound: 'J', word: 'jump', difficulty: 'hard', description: 'Like CH with voice', practiceWords: ['jump', 'juice', 'jeans'], image: require('../assets/images/33_J_jump.png') },
  ],
  '4-5-processes': [
    { id: 'weak-banana', sound: 'BANANA', word: 'banana', difficulty: 'medium', description: 'Say all 3 parts: ba-na-na', practiceWords: ['banana', 'tomato', 'animal'], category: 'Phonological Process', milestone: 'Weak Syllable Deletion (stops by age 4)', processType: 'Weak Syllable', image: require('../assets/images/34_BANANA_banana.png') },
    { id: 'weak-computer', sound: 'COMPUTER', word: 'computer', difficulty: 'medium', description: 'Say com-pu-ter, not "puter"', practiceWords: ['computer', 'elephant', 'remember'], category: 'Phonological Process', milestone: 'Weak Syllable Deletion (stops by age 4)', processType: 'Weak Syllable', image: require('../assets/images/35_COMPUTER_computer.png') },
    { id: 'weak-telephone', sound: 'TELEPHONE', word: 'telephone', difficulty: 'medium', description: 'Say te-le-phone, all 3 parts', practiceWords: ['telephone', 'together', 'yesterday'], category: 'Phonological Process', milestone: 'Weak Syllable Deletion (stops by age 4)', processType: 'Weak Syllable', image: require('../assets/images/36_TELEPHONE_telephone.png') },
    { id: 'cluster-spot', sound: 'SPOT', word: 'spot', difficulty: 'hard', description: 'Say S-P-OT not "pot"', practiceWords: ['spot', 'stop', 'spin'], category: 'Phonological Process', milestone: 'Cluster Reduction without S (by age 4)', processType: 'Cluster Reduction', image: require('../assets/images/37_SPOT_spot.png') },
    { id: 'cluster-clap', sound: 'CLAP', word: 'clap', difficulty: 'hard', description: 'Say C-L-AP not "cap"', practiceWords: ['clap', 'class', 'clean'], category: 'Phonological Process', milestone: 'Cluster Reduction without S (by age 4)', processType: 'Cluster Reduction', image: require('../assets/images/38_CLAP_clap.png') },
    { id: 'cluster-tree', sound: 'TREE', word: 'tree', difficulty: 'hard', description: 'Say T-R-EE not "tee"', practiceWords: ['tree', 'train', 'truck'], category: 'Phonological Process', milestone: 'Cluster Reduction without S (by age 4)', processType: 'Cluster Reduction', image: require('../assets/images/39_TREE_tree.png') },
  ],
  '4-5-final': [
    { id: 'bus', sound: 'BUS', word: 'bus', difficulty: 'hard', description: 'Say the S sound at the end', practiceWords: ['bus', 'yes', 'pass'], category: 'Final Consonants with S', milestone: 'Final consonants with S (by age 5)', image: require('../assets/images/40_BUS_bus.png') },
    { id: 'dress', sound: 'DRESS', word: 'dress', difficulty: 'hard', description: 'Say the S sound at the end', practiceWords: ['dress', 'cross', 'grass'], category: 'Final Consonants with S', milestone: 'Final consonants with S (by age 5)', image: require('../assets/images/41_DRESS_dress.png') },
    { id: 'house', sound: 'HOUSE', word: 'house', difficulty: 'hard', description: 'Say the S sound at the end', practiceWords: ['house', 'mouse', 'juice'], category: 'Final Consonants with S', milestone: 'Final consonants with S (by age 5)', image: require('../assets/images/42_HOUSE_house.png') },
    { id: 'grass', sound: 'GRASS', word: 'grass', difficulty: 'hard', description: 'Say both S sounds at the end', practiceWords: ['grass', 'glass', 'class'], category: 'Final Consonants with S', milestone: 'Final consonants with S (by age 5)', image: require('../assets/images/43_GRASS_grass.png') },
  ],
  '5-6': [
    { id: 'r', sound: 'R', word: 'run', difficulty: 'hard', description: 'Tongue curls back', practiceWords: ['run', 'red', 'rope'], image: require('../assets/images/44_R_run.png') },
    { id: 'th', sound: 'TH', word: 'think', difficulty: 'hard', description: 'Tongue between teeth', practiceWords: ['think', 'three', 'thumb'], image: require('../assets/images/45_TH_think.png') },
    { id: 'thv', sound: 'TH', word: 'this', difficulty: 'hard', description: 'Voiced TH sound', practiceWords: ['this', 'that', 'them'], image: require('../assets/images/46_TH_this.png') },
  ],
  '5-6-processes': [
    { id: 'stopping-soap', sound: 'SOAP', word: 'soap', difficulty: 'hard', description: 'Say S-OAP not "toap"', practiceWords: ['soap', 'sun', 'seat'], category: 'Phonological Process', milestone: 'Stopping (stops by age 5)', processType: 'Stopping', image: require('../assets/images/47_SOAP_soap.png') },
    { id: 'stopping-fish', sound: 'FISH', word: 'fish', difficulty: 'hard', description: 'Say F-ISH not "pish"', practiceWords: ['fish', 'fall', 'foot'], category: 'Phonological Process', milestone: 'Stopping (stops by age 5)', processType: 'Stopping', image: require('../assets/images/48_FISH_fish.png') },
    { id: 'stopping-chair', sound: 'CHAIR', word: 'chair', difficulty: 'hard', description: 'Say CH-AIR not "tair"', practiceWords: ['chair', 'chin', 'chop'], category: 'Phonological Process', milestone: 'Stopping (stops by age 5)', processType: 'Stopping', image: require('../assets/images/49_CHAIR_chair.png') },
    { id: 'cluster-s-spoon', sound: 'SPOON', word: 'spoon', difficulty: 'hard', description: 'Say S-P-OON not "poon"', practiceWords: ['spoon', 'spell', 'space'], category: 'Phonological Process', milestone: 'Cluster Reduction with S (by age 5)', processType: 'Cluster Reduction', image: require('../assets/images/50_SPOON_spoon.png') },
    { id: 'cluster-s-star', sound: 'STAR', word: 'star', difficulty: 'hard', description: 'Say S-T-AR not "tar"', practiceWords: ['star', 'stand', 'stick'], category: 'Phonological Process', milestone: 'Cluster Reduction with S (by age 5)', processType: 'Cluster Reduction', image: require('../assets/images/51_STAR_star.png') },
    { id: 'cluster-s-swim', sound: 'SWIM', word: 'swim', difficulty: 'hard', description: 'Say S-W-IM not "wim"', practiceWords: ['swim', 'sweet', 'swing'], category: 'Phonological Process', milestone: 'Cluster Reduction with S (by age 5)', processType: 'Cluster Reduction', image: require('../assets/images/52_SWIM_swim.png') },
  ],
  '6-8': [
    { id: 'bl', sound: 'BL', word: 'blue', difficulty: 'advanced', description: 'B then L quickly', practiceWords: ['blue', 'black', 'block'], image: require('../assets/images/53_BL_blue.png') },
    { id: 'br', sound: 'BR', word: 'brown', difficulty: 'advanced', description: 'B then R quickly', practiceWords: ['brown', 'bread', 'bring'], image: require('../assets/images/54_BR_brown.png') },
    { id: 'cl', sound: 'CL', word: 'clap', difficulty: 'advanced', description: 'K then L quickly', practiceWords: ['clap', 'cloud', 'climb'], image: require('../assets/images/55_CL_clap.png') },
    { id: 'cr', sound: 'CR', word: 'crown', difficulty: 'advanced', description: 'K then R quickly', practiceWords: ['crown', 'crab', 'cream'], image: require('../assets/images/56_CR_crown.png') },
    { id: 'dr', sound: 'DR', word: 'drum', difficulty: 'advanced', description: 'D then R quickly', practiceWords: ['drum', 'drop', 'draw'], image: require('../assets/images/57_DR_drum.png') },
    { id: 'fl', sound: 'FL', word: 'fly', difficulty: 'advanced', description: 'F then L quickly', practiceWords: ['fly', 'flag', 'flower'], image: require('../assets/images/58_FL_fly.png') },
    { id: 'fr', sound: 'FR', word: 'frog', difficulty: 'advanced', description: 'F then R quickly', practiceWords: ['frog', 'fresh', 'fruit'], image: require('../assets/images/59_FR_frog.png') },
    { id: 'gl', sound: 'GL', word: 'glad', difficulty: 'advanced', description: 'G then L quickly', practiceWords: ['glad', 'glass', 'glue'], image: require('../assets/images/60_GL_glad.png') },
    { id: 'gr', sound: 'GR', word: 'green', difficulty: 'advanced', description: 'G then R quickly', practiceWords: ['green', 'grow', 'grab'], image: require('../assets/images/61_GR_green.png') },
    { id: 'pl', sound: 'PL', word: 'play', difficulty: 'advanced', description: 'P then L quickly', practiceWords: ['play', 'plant', 'please'], image: require('../assets/images/62_PL_play.png') },
    { id: 'pr', sound: 'PR', word: 'pretty', difficulty: 'advanced', description: 'P then R quickly', practiceWords: ['pretty', 'print', 'prize'], image: require('../assets/images/63_PR_pretty.png') },
    { id: 'sl', sound: 'SL', word: 'slip', difficulty: 'advanced', description: 'S then L quickly', practiceWords: ['slip', 'slow', 'sleep'], image: require('../assets/images/64_SL_slip.png') },
    { id: 'sm', sound: 'SM', word: 'small', difficulty: 'advanced', description: 'S then M quickly', practiceWords: ['small', 'smile', 'smell'], image: require('../assets/images/65_SM_small.png') },
    { id: 'sn', sound: 'SN', word: 'snow', difficulty: 'advanced', description: 'S then N quickly', practiceWords: ['snow', 'snap', 'snack'], image: require('../assets/images/66_SN_snow.png') },
    { id: 'sp', sound: 'SP', word: 'spin', difficulty: 'advanced', description: 'S then P quickly', practiceWords: ['spin', 'spill', 'spell'], image: require('../assets/images/67_SP_spin.png') },
    { id: 'st', sound: 'ST', word: 'stop', difficulty: 'advanced', description: 'S then T quickly', practiceWords: ['stop', 'stay', 'step'], image: require('../assets/images/68_ST_stop.png') },
    { id: 'sw', sound: 'SW', word: 'swim', difficulty: 'advanced', description: 'S then W quickly', practiceWords: ['swim', 'swing', 'switch'], image: require('../assets/images/69_SW_swim.png') },
    { id: 'tr', sound: 'TR', word: 'tree', difficulty: 'advanced', description: 'T then R quickly', practiceWords: ['tree', 'trip', 'trust'], image: require('../assets/images/70_TR_tree.png') },
    { id: 'tw', sound: 'TW', word: 'twin', difficulty: 'advanced', description: 'T then W quickly', practiceWords: ['twin', 'twist', 'twelve'], image: require('../assets/images/71_TW_twin.png') },
    { id: 'scr', sound: 'SCR', word: 'screen', difficulty: 'advanced', description: 'S-K-R blend', practiceWords: ['screen', 'scream', 'scratch'], image: require('../assets/images/72_SCR_screen.png') },
    { id: 'spl', sound: 'SPL', word: 'splash', difficulty: 'advanced', description: 'S-P-L blend', practiceWords: ['splash', 'split', 'splat'], image: require('../assets/images/73_SPL_splash.png') },
    { id: 'spr', sound: 'SPR', word: 'spring', difficulty: 'advanced', description: 'S-P-R blend', practiceWords: ['spring', 'spread', 'sprint'], image: require('../assets/images/74_SPR_spring.png') },
    { id: 'str', sound: 'STR', word: 'street', difficulty: 'advanced', description: 'S-T-R blend', practiceWords: ['street', 'strong', 'string'], image: require('../assets/images/75_STR_street.png') },
    { id: 'thr', sound: 'THR', word: 'three', difficulty: 'advanced', description: 'TH then R quickly', practiceWords: ['three', 'throw', 'through'], image: require('../assets/images/76_THR_three.png') },
  ],
  '6-8-processes': [
    { id: 'gliding-rabbit', sound: 'RABBIT', word: 'rabbit', difficulty: 'hard', description: 'Say R-abbit not "wabbit"', practiceWords: ['rabbit', 'run', 'rope'], category: 'Phonological Process', milestone: 'Gliding (stops by age 6)', processType: 'Gliding', image: require('../assets/images/77_RABBIT_rabbit.png') },
    { id: 'gliding-like', sound: 'LIKE', word: 'like', difficulty: 'hard', description: 'Say L-ike not "yike"', practiceWords: ['like', 'lake', 'light'], category: 'Phonological Process', milestone: 'Gliding (stops by age 6)', processType: 'Gliding', image: require('../assets/images/78_LIKE_like.png') },
    { id: 'gliding-run', sound: 'RUN', word: 'run', difficulty: 'hard', description: 'Say R-un not "wun"', practiceWords: ['run', 'rain', 'road'], category: 'Phonological Process', milestone: 'Gliding (stops by age 6)', processType: 'Gliding', image: require('../assets/images/79_RUN_run.png') },
    { id: 'gliding-love', sound: 'LOVE', word: 'love', difficulty: 'hard', description: 'Say L-ove not "wove"', practiceWords: ['love', 'laugh', 'leaf'], category: 'Phonological Process', milestone: 'Gliding (stops by age 6)', processType: 'Gliding', image: require('../assets/images/80_LOVE_love.png') },
  ],
};

export const getAgeGroup = (age) => {
  if (age <= 2) return '1-2';
  if (age === 3) return '2-3';
  if (age === 4) return '3-4';
  if (age === 5) return '4-5';
  if (age === 6 || age === 7) return '5-6';
  return '6-8';
};

export const getAvailableSounds = (age) => {
  const ageGroup = getAgeGroup(age);
  const ageGroups = ['1-2', '2-3', '2-3-processes', '2-3-final', '3-4', '3-4-processes', '3-4-final', '4-5', '4-5-processes', '4-5-final', '5-6', '5-6-processes', '6-8', '6-8-processes'];
  const currentIndex = ageGroups.indexOf(ageGroup);

  let sounds = [];

  // Add all sounds up to current age group
  for (let i = 0; i <= currentIndex; i++) {
    if (soundLibrary[ageGroups[i]]) {
      sounds = [...sounds, ...soundLibrary[ageGroups[i]].map(s => ({ ...s, status: 'available' }))];
    }
  }

  // Add age-specific process sounds
  if (age >= 3 && !ageGroups.slice(0, currentIndex + 1).includes('2-3-final')) {
    if (soundLibrary['2-3-final']) sounds = [...sounds, ...soundLibrary['2-3-final'].map(s => ({ ...s, status: 'available' }))];
    if (soundLibrary['2-3-processes']) sounds = [...sounds, ...soundLibrary['2-3-processes'].map(s => ({ ...s, status: 'available' }))];
  }
  if (age >= 4 && !ageGroups.slice(0, currentIndex + 1).includes('3-4-final')) {
    if (soundLibrary['3-4-final']) sounds = [...sounds, ...soundLibrary['3-4-final'].map(s => ({ ...s, status: 'available' }))];
    if (soundLibrary['3-4-processes']) sounds = [...sounds, ...soundLibrary['3-4-processes'].map(s => ({ ...s, status: 'available' }))];
  }
  if (age >= 5 && !ageGroups.slice(0, currentIndex + 1).includes('4-5-final')) {
    if (soundLibrary['4-5-final']) sounds = [...sounds, ...soundLibrary['4-5-final'].map(s => ({ ...s, status: 'available' }))];
    if (soundLibrary['4-5-processes']) sounds = [...sounds, ...soundLibrary['4-5-processes'].map(s => ({ ...s, status: 'available' }))];
  }
  if (age >= 6 && !ageGroups.slice(0, currentIndex + 1).includes('5-6-processes')) {
    if (soundLibrary['5-6-processes']) sounds = [...sounds, ...soundLibrary['5-6-processes'].map(s => ({ ...s, status: 'available' }))];
  }
  if (age >= 8 && !ageGroups.slice(0, currentIndex + 1).includes('6-8-processes')) {
    if (soundLibrary['6-8-processes']) sounds = [...sounds, ...soundLibrary['6-8-processes'].map(s => ({ ...s, status: 'available' }))];
  }

  // Add next age group as locked
  if (currentIndex < ageGroups.length - 1) {
    const nextGroup = ageGroups[currentIndex + 1];
    if (soundLibrary[nextGroup]) {
      const lockedSounds = soundLibrary[nextGroup].slice(0, 6).map(s => ({ ...s, status: 'locked' }));
      sounds = [...sounds, ...lockedSounds];
    }
  }

  return sounds;
};
