import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { saveChildInfo } from '../utils/storage';

export default function AgeSelectionScreen({ route, navigation }) {
  const { childName } = route.params;
  const [selectedAge, setSelectedAge] = useState(null);

  const handleContinue = async () => {
    if (selectedAge) {
      await saveChildInfo(childName, selectedAge);
      navigation.navigate('Home', { childName, childAge: selectedAge });
    }
  };

  const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <LinearGradient
      colors={['#DBEAFE', '#E0E7FF', '#F3E8FF']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.header}>How old is {childName}?</Text>

          <View style={styles.ageGrid}>
            {ages.map((age) => (
              <TouchableOpacity
                key={age}
                style={[
                  styles.ageButton,
                  selectedAge === age && styles.ageButtonSelected,
                ]}
                onPress={() => setSelectedAge(age)}
              >
                <Text
                  style={[
                    styles.ageText,
                    selectedAge === age && styles.ageTextSelected,
                  ]}
                >
                  {age}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              ℹ️ We'll show sounds that are right for {childName}'s age. Every child learns at their own pace!
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.continueButton, !selectedAge && styles.continueButtonDisabled]}
            onPress={handleContinue}
            disabled={!selectedAge}
          >
            <Text style={styles.continueButtonText}>Continue →</Text>
          </TouchableOpacity>
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 32,
  },
  ageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  ageButton: {
    width: 90,
    height: 90,
    backgroundColor: '#EDE9FE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ageButtonSelected: {
    backgroundColor: '#7C3AED',
    transform: [{ scale: 1.1 }],
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ageText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7C3AED',
  },
  ageTextSelected: {
    color: 'white',
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#DBEAFE',
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    paddingVertical: 16,
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  continueButtonDisabled: {
    backgroundColor: '#D1D5DB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
