import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  CHILD_NAME: '@speech_buddy_child_name',
  CHILD_AGE: '@speech_buddy_child_age',
  STARS: '@speech_buddy_stars',
  PRACTICE_COUNT: '@speech_buddy_practice_count',
  GRADUATED_SOUNDS: '@speech_buddy_graduated_sounds',
};

export const saveChildInfo = async (name, age) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.CHILD_NAME, name);
    await AsyncStorage.setItem(STORAGE_KEYS.CHILD_AGE, age.toString());
  } catch (e) {
    console.error('Error saving child info:', e);
  }
};

export const loadChildInfo = async () => {
  try {
    const name = await AsyncStorage.getItem(STORAGE_KEYS.CHILD_NAME);
    const age = await AsyncStorage.getItem(STORAGE_KEYS.CHILD_AGE);
    return { name, age: age ? parseInt(age) : null };
  } catch (e) {
    console.error('Error loading child info:', e);
    return { name: null, age: null };
  }
};

export const saveStars = async (stars) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.STARS, stars.toString());
  } catch (e) {
    console.error('Error saving stars:', e);
  }
};

export const loadStars = async () => {
  try {
    const stars = await AsyncStorage.getItem(STORAGE_KEYS.STARS);
    return stars ? parseInt(stars) : 0;
  } catch (e) {
    console.error('Error loading stars:', e);
    return 0;
  }
};

export const savePracticeCount = async (practiceCount) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.PRACTICE_COUNT, JSON.stringify(practiceCount));
  } catch (e) {
    console.error('Error saving practice count:', e);
  }
};

export const loadPracticeCount = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.PRACTICE_COUNT);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Error loading practice count:', e);
    return {};
  }
};

export const saveGraduatedSounds = async (graduatedSounds) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.GRADUATED_SOUNDS, JSON.stringify(graduatedSounds));
  } catch (e) {
    console.error('Error saving graduated sounds:', e);
  }
};

export const loadGraduatedSounds = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.GRADUATED_SOUNDS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading graduated sounds:', e);
    return [];
  }
};
