import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Animated, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { ArrowLeft, Camera, Video } from 'lucide-react-native';
import { loadPracticeCount, savePracticeCount, loadStars, saveStars } from '../utils/storage';

export default function PracticeScreen({ route, navigation }) {
  const { selectedSound } = route.params;
  const [cameraActive, setCameraActive] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const celebrationScale = useRef(new Animated.Value(0)).current;

  const handleStartCamera = async () => {
    if (!permission?.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert('Camera Permission', 'Camera permission is required to use the mirror feature.');
        return;
      }
    }
    setCameraActive(true);
  };

  const handleStopCamera = () => {
    setCameraActive(false);
  };

  const handlePracticeComplete = async () => {
    // Load current practice count
    const currentCount = await loadPracticeCount();
    const newCount = { ...currentCount, [selectedSound.id]: (currentCount[selectedSound.id] || 0) + 1 };
    await savePracticeCount(newCount);

    // Add 1 star
    const currentStars = await loadStars();
    await saveStars(currentStars + 1);

    // Show celebration
    setShowCelebration(true);
    Animated.spring(celebrationScale, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      Animated.timing(celebrationScale, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setShowCelebration(false);
        navigation.goBack();
      });
    }, 3000);
  };

  const handleGoBack = () => {
    if (cameraActive) {
      setCameraActive(false);
    }
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#D1FAE5', '#DBEAFE', '#E9D5FF']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <ArrowLeft size={24} color="#1F2937" />
              <Text style={styles.backText}>Back Home</Text>
            </TouchableOpacity>
            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>{selectedSound.sound} / {selectedSound.word}</Text>
            </View>
            <View style={styles.headerRight} />
          </View>

          {/* Instructions Card */}
          <View style={styles.instructionsCard}>
            <Text style={styles.instructionsText}>📌 {selectedSound.description}</Text>
          </View>

          {/* Practice Words Card */}
          <View style={styles.practiceWordsCard}>
            <Text style={styles.practiceWordsTitle}>Practice These Words: 🎯</Text>
            <View style={styles.wordsContainer}>
              {selectedSound.practiceWords.map((word, index) => (
                <LinearGradient
                  key={index}
                  colors={
                    index === 0 ? ['#9333EA', '#EC4899'] :
                    index === 1 ? ['#3B82F6', '#06B6D4'] :
                    ['#10B981', '#22C55E']
                  }
                  style={styles.wordPill}
                >
                  <Text style={styles.wordPillText}>{word}</Text>
                </LinearGradient>
              ))}
            </View>
          </View>

          {/* Split-Screen Section */}
          <View style={styles.splitScreenContainer}>
            {/* Left Side - Demonstration Photo */}
            <View style={styles.screenHalf}>
              <View style={styles.screenCard}>
                <View style={styles.screenHeader}>
                  <Video size={20} color="#7C3AED" />
                  <Text style={styles.screenHeaderText}>👨‍🏫 Watch & Learn</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    source={selectedSound.image}
                    style={styles.demonstrationImage}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>

            {/* Right Side - Camera Mirror */}
            <View style={styles.screenHalf}>
              <View style={styles.screenCard}>
                <View style={styles.screenHeader}>
                  <Camera size={20} color="#7C3AED" />
                  <Text style={styles.screenHeaderText}>🪞 Your Turn!</Text>
                </View>
                <View style={styles.cameraContainer}>
                  {cameraActive ? (
                    <CameraView
                      style={styles.camera}
                      facing="front"
                    >
                      <View style={styles.cameraOverlay} />
                    </CameraView>
                  ) : (
                    <View style={styles.cameraPlaceholder}>
                      <Camera size={48} color="#9CA3AF" />
                      <Text style={styles.cameraPlaceholderText}>Camera not active</Text>
                    </View>
                  )}
                </View>
                <TouchableOpacity
                  style={[styles.cameraButton, cameraActive && styles.cameraButtonStop]}
                  onPress={cameraActive ? handleStopCamera : handleStartCamera}
                >
                  <Text style={styles.cameraButtonText}>
                    {cameraActive ? 'Stop Mirror' : '📷 Start Mirror'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Practice Complete Button */}
          <TouchableOpacity style={styles.completeButton} onPress={handlePracticeComplete}>
            <LinearGradient
              colors={['#FDE68A', '#F59E0B']}
              style={styles.completeButtonGradient}
            >
              <Text style={styles.completeButtonText}>🏆 I Practiced!</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      {/* Celebration Modal */}
      <Modal
        visible={showCelebration}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.celebrationCard,
              { transform: [{ scale: celebrationScale }] }
            ]}
          >
            <Text style={styles.celebrationEmoji}>🎉</Text>
            <Text style={styles.celebrationTitle}>Great Job!</Text>
            <Text style={styles.celebrationText}>You practiced {selectedSound.word}!</Text>
            <View style={styles.starBadge}>
              <Text style={styles.starBadgeText}>⭐ +1 Star!</Text>
            </View>
            <Text style={styles.celebrationSubtext}>Keep up the amazing work! 💪</Text>
          </Animated.View>
        </View>
      </Modal>
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  headerCenter: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'none',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerRight: {
    width: 80,
  },
  instructionsCard: {
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#FDE68A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  instructionsText: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '600',
  },
  practiceWordsCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  practiceWordsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  wordPill: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  wordPillText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  splitScreenContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  screenHalf: {
    width: '100%',
    minWidth: 300,
  },
  screenCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  screenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  screenHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    overflow: 'hidden',
  },
  demonstrationImage: {
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    aspectRatio: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
    transform: [{ scaleX: -1 }], // Mirror effect
  },
  cameraOverlay: {
    flex: 1,
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
  },
  cameraPlaceholderText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
  },
  cameraButton: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  cameraButtonStop: {
    backgroundColor: '#EF4444',
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeButton: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  completeButtonGradient: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  celebrationCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
    minWidth: 280,
  },
  celebrationEmoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  celebrationTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  celebrationText: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 16,
  },
  starBadge: {
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#FDE68A',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 16,
  },
  starBadgeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D97706',
  },
  celebrationSubtext: {
    fontSize: 16,
    color: '#9CA3AF',
  },
});
