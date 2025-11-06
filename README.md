# Speech Buddy 🗣️

A speech therapy app for children ages 1-10 to practice speech sounds with visual demonstrations and real-time camera feedback.

## Features

- **80+ Speech Sounds**: Comprehensive library organized by age and difficulty
- **Visual Demonstrations**: Each sound has a demonstration image showing proper mouth position
- **Live Camera Mirror**: Front-facing camera with mirror effect for self-practice
- **Age-Appropriate Content**: Sounds filtered by child's age with developmental milestones
- **Progress Tracking**: Star rewards system and practice counters
- **Parent Mode**: Graduate sounds as children master them
- **Phonological Process Support**: Includes sounds for common speech patterns (fronting, stopping, gliding, etc.)

## Technology Stack

- **Framework**: Expo SDK 51+
- **Platform**: React Native (iOS & Android)
- **Navigation**: @react-navigation/native with native-stack
- **Camera**: expo-camera with mirroring support
- **Storage**: @react-native-async-storage/async-storage
- **Icons**: lucide-react-native

## Project Structure

```
speech-buddy/
├── App.js                      # Main app with navigation setup
├── app.json                    # Expo configuration
├── components/
│   ├── WelcomeScreen.js       # Name entry screen
│   ├── AgeSelectionScreen.js  # Age selection (1-10)
│   ├── HomeScreen.js          # Main screen with all sounds
│   └── PracticeScreen.js      # Practice with camera and demo
├── data/
│   └── soundLibrary.js        # All 80 sounds organized by age
├── utils/
│   └── storage.js             # AsyncStorage helpers
└── assets/
    └── images/                # 80 demonstration images
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd speech-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device or simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on physical device

## Usage

1. **Welcome Screen**: Enter the child's name
2. **Age Selection**: Select age (1-10 years)
3. **Home Screen**: Browse available sounds organized by:
   - Regular sounds
   - Final consonants (age 3 & 5 milestones)
   - Phonological processes (fronting, stopping, gliding, etc.)
4. **Practice Screen**:
   - View demonstration photo
   - Activate camera mirror
   - See practice words
   - Mark as practiced to earn stars
5. **Parent Mode**: Toggle to graduate mastered sounds

## Sound Categories

- **Ages 1-2**: M, B, P, D, N, H, W (7 sounds)
- **Ages 2-3**: T, K, G, F + processes & final consonants (16 sounds)
- **Ages 3-4**: L, S, CH, SH, Y + processes & finals (12 sounds)
- **Ages 4-5**: V, Z, J + weak syllables, clusters, finals (13 sounds)
- **Ages 5-6**: R, TH + stopping, cluster reduction (9 sounds)
- **Ages 6-8**: Advanced blends (BL, BR, CL, etc.) + gliding (23 sounds)

## Camera Permissions

The app requires camera permissions to provide live mirror feedback. Permissions are requested when:
- User taps "Start Mirror" button in Practice Screen
- Graceful fallback if permission denied

## Data Persistence

All progress is saved locally using AsyncStorage:
- Child's name and age
- Total stars earned
- Practice count for each sound
- Graduated (mastered) sounds

## Customization

### Adding New Sounds

Edit `data/soundLibrary.js`:
```javascript
{
  id: 'unique-id',
  sound: 'DISPLAY_TEXT',
  word: 'example',
  difficulty: 'easy|medium|hard|advanced',
  description: 'How to make this sound',
  practiceWords: ['word1', 'word2', 'word3'],
  category: 'optional category',
  processType: 'optional process type',
  milestone: 'optional milestone text',
  image: require('../assets/images/filename.png')
}
```

### Replacing Placeholder Images

1. Create 1080x1080 PNG images showing mouth positions
2. Name them according to the pattern: `XX_SOUND_word.png`
3. Replace files in `assets/images/`

## Development Notes

- **Image Generation**: Run `python3 generate-images.py` to regenerate placeholder images
- **Type Checking**: The project uses JavaScript (not TypeScript)
- **Camera Mirror**: Applied via `transform: [{ scaleX: -1 }]` in styles
- **Gradient Backgrounds**: Uses expo-linear-gradient for all screens

## Platform-Specific Notes

### iOS
- Requires camera permission description in app.json
- Works on iOS 13+
- Supports iPad in tablet mode

### Android
- Requires CAMERA permission in app.json
- Minimum SDK version handled by Expo

## Troubleshooting

**Camera not working**:
- Check permissions in device settings
- Ensure expo-camera plugin is configured in app.json

**Images not loading**:
- Verify all 80 PNG files exist in assets/images/
- Check file naming matches soundLibrary.js

**Navigation issues**:
- Clear Metro bundler cache: `npx expo start -c`

## Future Enhancements

- Video demonstrations instead of static images
- Recording capability to compare child's pronunciation
- Multi-child profiles
- Achievement badges and rewards
- Export progress reports for therapists
- Offline mode with pre-downloaded content

## License

Copyright © 2025 Speech Buddy App

## Credits

Built with ❤️ for children learning to speak clearly.

---

**Note**: The current images are placeholders. For production use, replace with professional photographs or illustrations of actual mouth positions from a licensed speech therapist.
