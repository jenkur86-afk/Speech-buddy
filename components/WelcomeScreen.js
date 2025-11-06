import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen({ navigation }) {
  const [childName, setChildName] = useState('');

  const handleContinue = () => {
    if (childName.trim()) {
      navigation.navigate('AgeSelection', { childName: childName.trim() });
    }
  };

  return (
    <LinearGradient
      colors={['#E9D5FF', '#FBCFE8', '#FDE68A']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >
          <View style={styles.centerContent}>
            <Text style={styles.emoji}>🗣️</Text>
            <Text style={styles.title}>Speech Buddy</Text>
            <Text style={styles.subtitle}>Learn to speak with fun!</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>What's your child's name?</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter name here"
                placeholderTextColor="#9CA3AF"
                value={childName}
                onChangeText={setChildName}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>

            <TouchableOpacity
              style={[styles.button, !childName.trim() && styles.buttonDisabled]}
              onPress={handleContinue}
              disabled={!childName.trim()}
            >
              <Text style={styles.buttonText}>Let's Start! →</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  centerContent: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#7C3AED',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#6B7280',
    marginBottom: 48,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    paddingHorizontal: 48,
    paddingVertical: 16,
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonDisabled: {
    backgroundColor: '#D1D5DB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
