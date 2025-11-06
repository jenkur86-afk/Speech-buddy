import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Lock, Trophy, Users } from 'lucide-react-native';
import { getAvailableSounds } from '../data/soundLibrary';
import { loadStars, saveStars, loadPracticeCount, loadGraduatedSounds, saveGraduatedSounds } from '../utils/storage';

export default function HomeScreen({ route, navigation }) {
  const { childName, childAge } = route.params;
  const [stars, setStars] = useState(0);
  const [practiceCount, setPracticeCount] = useState({});
  const [graduatedSounds, setGraduatedSounds] = useState([]);
  const [showParentMode, setShowParentMode] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const loadedStars = await loadStars();
    const loadedPracticeCount = await loadPracticeCount();
    const loadedGraduatedSounds = await loadGraduatedSounds();
    setStars(loadedStars);
    setPracticeCount(loadedPracticeCount);
    setGraduatedSounds(loadedGraduatedSounds);
  };

  const allSounds = getAvailableSounds(childAge);
  const availableSounds = allSounds.filter(s => s.status === 'available' && !graduatedSounds.includes(s.id));
  const lockedSounds = allSounds.filter(s => s.status === 'locked');
  const masteredSounds = allSounds.filter(s => graduatedSounds.includes(s.id));

  const handleGraduateSound = async (sound) => {
    const newGraduatedSounds = [...graduatedSounds, sound.id];
    setGraduatedSounds(newGraduatedSounds);
    await saveGraduatedSounds(newGraduatedSounds);

    const newStars = stars + 10;
    setStars(newStars);
    await saveStars(newStars);

    Alert.alert(
      '🏆 Congratulations!',
      `${childName} has mastered the ${sound.sound} sound! +10 stars!`,
      [{ text: 'Awesome!', style: 'default' }]
    );
  };

  const handleUngraduateSound = async (sound) => {
    const newGraduatedSounds = graduatedSounds.filter(id => id !== sound.id);
    setGraduatedSounds(newGraduatedSounds);
    await saveGraduatedSounds(newGraduatedSounds);
  };

  const getCategoryColor = (sound) => {
    if (sound.processType === 'Fronting') return { start: '#EC4899', end: '#F43F5E' };
    if (sound.processType === 'Stopping') return { start: '#EF4444', end: '#F97316' };
    if (sound.processType === 'Gliding') return { start: '#6366F1', end: '#9333EA' };
    if (sound.processType === 'Weak Syllable') return { start: '#14B8A6', end: '#06B6D4' };
    if (sound.processType === 'Cluster Reduction') return { start: '#8B5CF6', end: '#D946EF' };
    if (sound.processType === 'Reduplication') return { start: '#EAB308', end: '#F97316' };
    if (sound.processType === 'Assimilation') return { start: '#84CC16', end: '#22C55E' };
    if (sound.category === 'Final Consonants with S') return { start: '#F97316', end: '#F59E0B' };
    if (sound.category === 'Final Consonants') return { start: '#3B82F6', end: '#06B6D4' };
    return { start: '#9333EA', end: '#EC4899' };
  };

  const getBannerColor = (processType) => {
    if (processType === 'Fronting') return '#FCE7F3';
    if (processType === 'Stopping') return '#FEE2E2';
    if (processType === 'Gliding') return '#E0E7FF';
    if (processType === 'Weak Syllable') return '#CCFBF1';
    if (processType === 'Cluster Reduction') return '#EDE9FE';
    if (processType === 'Reduplication') return '#FEF3C7';
    if (processType === 'Assimilation') return '#ECFCCB';
    return null;
  };

  const groupSoundsByCategory = (sounds) => {
    const groups = {};
    sounds.forEach(sound => {
      const key = sound.processType || sound.category || 'regular';
      if (!groups[key]) groups[key] = [];
      groups[key].push(sound);
    });
    return groups;
  };

  const renderSoundCard = (sound, isMastered = false) => {
    const colors = getCategoryColor(sound);
    const practiced = practiceCount[sound.id] > 0;

    return (
      <TouchableOpacity
        key={sound.id}
        style={styles.soundCard}
        onPress={() => navigation.navigate('Practice', { selectedSound: sound })}
      >
        <LinearGradient
          colors={isMastered ? ['#10B981', '#22C55E'] : [colors.start, colors.end]}
          style={styles.soundCardGradient}
        >
          {practiced && !isMastered && (
            <View style={styles.practicedBadge}>
              <Check size={16} color="white" />
            </View>
          )}
          {isMastered && (
            <View style={styles.masteredBadge}>
              <Text style={styles.masteredText}>✓</Text>
            </View>
          )}
          <Text style={styles.soundText}>{sound.sound}</Text>
          <Text style={styles.wordText}>{sound.word}</Text>
          {practiced && (
            <Text style={styles.practiceCountText}>✓ Practiced {practiceCount[sound.id]}x</Text>
          )}
          {isMastered && (
            <Text style={styles.masteredLabel}>Mastered!</Text>
          )}
        </LinearGradient>
        {showParentMode && !isMastered && (
          <TouchableOpacity
            style={[styles.graduateButton, !practiced && styles.graduateButtonLight]}
            onPress={() => handleGraduateSound(sound)}
          >
            <Text style={styles.graduateButtonText}>
              {practiced ? '🏆 Graduate Sound' : '🏆 Mark as Mastered'}
            </Text>
          </TouchableOpacity>
        )}
        {showParentMode && isMastered && (
          <TouchableOpacity
            style={styles.ungraduateButton}
            onPress={() => handleUngraduateSound(sound)}
          >
            <Text style={styles.ungraduateButtonText}>Move back to practice</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderCategoryBanner = (category, milestone) => {
    const bgColor = getBannerColor(category);
    if (!bgColor) return null;

    return (
      <View style={[styles.categoryBanner, { backgroundColor: bgColor }]}>
        <Text style={styles.categoryBannerText}>🎯 {milestone}</Text>
      </View>
    );
  };

  const groupedSounds = groupSoundsByCategory(availableSounds);

  return (
    <LinearGradient
      colors={['#FEF3C7', '#FBCFE8', '#E9D5FF']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Hi {childName}! 👋</Text>
              <Text style={styles.headerSubtitle}>Age {childAge} • Ready to practice?</Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.starCount}>⭐ {stars}</Text>
              <TouchableOpacity
                style={[styles.parentModeButton, showParentMode && styles.parentModeButtonActive]}
                onPress={() => setShowParentMode(!showParentMode)}
              >
                <Users size={20} color={showParentMode ? 'white' : '#6B7280'} />
                <Text style={[styles.parentModeText, showParentMode && styles.parentModeTextActive]}>
                  Parent
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Milestone Info Card */}
          <LinearGradient
            colors={['#7C3AED', '#3B82F6']}
            style={styles.milestoneCard}
          >
            <Text style={styles.milestoneTitle}>Your Sounds 🎯</Text>
            <Text style={styles.milestoneText}>
              At age {childAge}, most children can say {availableSounds.length + masteredSounds.length} sounds. You're doing great!
            </Text>
            {masteredSounds.length > 0 && (
              <Text style={styles.graduatedCountText}>
                🎓 Mastered {masteredSounds.length} sounds!
              </Text>
            )}
          </LinearGradient>

          {/* Mastered Sounds Section */}
          {masteredSounds.length > 0 && (
            <View style={styles.section}>
              <View style={styles.masteredHeader}>
                <Text style={styles.sectionTitle}>🏆 Mastered Sounds! 🎓</Text>
              </View>
              <View style={styles.soundGrid}>
                {masteredSounds.map(sound => renderSoundCard(sound, true))}
              </View>
            </View>
          )}

          {/* Practice Sounds Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Practice These Sounds</Text>

            {/* Regular sounds */}
            {groupedSounds.regular && (
              <View style={styles.soundGrid}>
                {groupedSounds.regular.map(sound => renderSoundCard(sound))}
              </View>
            )}

            {/* Final Consonants (Age 3) */}
            {groupedSounds['Final Consonants'] && (
              <>
                {renderCategoryBanner('Final Consonants', 'Final Consonants (Age 3 Milestone)')}
                <View style={styles.soundGrid}>
                  {groupedSounds['Final Consonants'].map(sound => renderSoundCard(sound))}
                </View>
              </>
            )}

            {/* Final Consonants with S (Age 5) */}
            {groupedSounds['Final Consonants with S'] && (
              <>
                {renderCategoryBanner('Final Consonants with S', 'Final Consonants with S (Age 5 Milestone)')}
                <View style={styles.soundGrid}>
                  {groupedSounds['Final Consonants with S'].map(sound => renderSoundCard(sound))}
                </View>
              </>
            )}

            {/* Phonological Processes */}
            {['Fronting', 'Stopping', 'Gliding', 'Weak Syllable', 'Cluster Reduction', 'Reduplication', 'Assimilation'].map(processType => {
              if (groupedSounds[processType]) {
                const milestone = groupedSounds[processType][0]?.milestone || processType;
                return (
                  <View key={processType}>
                    {renderCategoryBanner(processType, milestone)}
                    <View style={styles.soundGrid}>
                      {groupedSounds[processType].map(sound => renderSoundCard(sound))}
                    </View>
                  </View>
                );
              }
              return null;
            })}
          </View>

          {/* Coming Soon Section */}
          {lockedSounds.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Coming Soon 🔒</Text>
              <View style={styles.soundGrid}>
                {lockedSounds.slice(0, 6).map(sound => (
                  <View key={sound.id} style={styles.soundCard}>
                    <View style={styles.lockedCard}>
                      <Lock size={32} color="#9CA3AF" />
                      <Text style={styles.lockedSoundText}>{sound.sound}</Text>
                      <Text style={styles.lockedWordText}>{sound.word}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  starCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  parentModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  parentModeButtonActive: {
    backgroundColor: '#3B82F6',
  },
  parentModeText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  parentModeTextActive: {
    color: 'white',
  },
  milestoneCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  milestoneTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  milestoneText: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  graduatedCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FDE68A',
    marginTop: 12,
  },
  section: {
    marginBottom: 24,
  },
  masteredHeader: {
    backgroundColor: '#D1FAE5',
    borderWidth: 2,
    borderColor: '#10B981',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  categoryBanner: {
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    marginTop: 8,
  },
  categoryBannerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  soundGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  soundCard: {
    width: '48%',
    marginBottom: 8,
  },
  soundCardGradient: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  practicedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  masteredBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  masteredText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  soundText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  wordText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  practiceCountText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 8,
  },
  masteredLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  graduateButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  graduateButtonLight: {
    backgroundColor: '#86EFAC',
  },
  graduateButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  ungraduateButton: {
    backgroundColor: '#9CA3AF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  ungraduateButtonText: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
  },
  lockedCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
    opacity: 0.6,
  },
  lockedSoundText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9CA3AF',
    marginTop: 8,
  },
  lockedWordText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});
