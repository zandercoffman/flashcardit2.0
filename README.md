# FlashCard It 2.0 🎓

A powerful, modern flashcard study application built with Next.js, featuring multiple study modes, AI-powered content generation, and advanced spaced repetition algorithms.

![Version](https://img.shields.io/badge/version-2.3.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.4.8-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🌟 Overview

FlashCard It 2.0 is a comprehensive study tool designed to enhance learning through various interactive modes and scientifically-proven study techniques. Whether you're learning a new language, preparing for exams, or memorizing complex concepts, this application provides the tools you need to succeed.

## ✨ Key Features

### 📚 **Flashcard Creation & Management**
- **AI Generation**: Generate flashcard sets using AI by providing text content
- **File Upload**: Import existing flashcard sets in JSON format
- **Manual Creation**: Create custom flashcards with term-definition pairs
- **Pre-made Sets**: Access a library of pre-made flashcard sets on various topics
- **Set Organization**: Organize flashcards into study sets with easy navigation

### 🎮 **Study Modes**

#### 1. **Normal Study Mode** (Classic Flashcards)
Classic flashcard study experience with flip animations. Review cards at your own pace with front-to-back flipping.

#### 2. **Quiz Mode** 🎯
- Multiple-choice questions with 4 options
- **Streak Mode**: Track consecutive correct answers
- **Timer Mode**: Time-limited challenges (5 seconds per question)
- **Random Mode**: Shuffle question order
- Real-time scoring and feedback
- Visual indicators for correct/incorrect answers
- Progress tracking throughout the quiz

#### 3. **Speak It Mode** 🎤
- Voice recognition-based pronunciation practice
- Text-to-speech for hearing correct pronunciation
- Multiple voice options and language support
- Real-time feedback on pronunciation accuracy
- Perfect for language learning

#### 4. **Picture Match Mode** 🖼️
- Visual learning with image associations
- Fetches relevant images from Pexels API
- Multiple-choice image matching
- Great for visual learners

#### 5. **Bomba Game Mode** 💣
- Team-based competitive game (Team 1 vs Team 2)
- 5x5 grid with 20 words and 5 bombs
- Earn points by correctly answering
- Hit a bomb and lose all your team's points
- Perfect for classroom or group study

#### 6. **Matching Mode** 🔄
- Memory-based matching game
- Match terms with definitions
- 4x4 grid layout (8 pairs at a time)
- Automatic progression through the deck
- Visual feedback for correct/incorrect matches

#### 7. **Study Plan Mode** 📅 *(Beta)*
- Personalized study schedules
- Calendar-based planning
- Daily card allocation
- Progress tracking
- Reminder system with ICS calendar export

### 🧠 **Advanced Learning Features**

#### **FSRS Algorithm** (Free Spaced Repetition Scheduler)
- Scientific spaced repetition system
- Optimizes long-term memory retention
- Four rating levels: Again, Hard, Good, Easy
- Automatic scheduling based on performance
- Local storage for progress tracking

#### **AI Chat Assistant** 🤖
- Multiple AI models available:
  - MetaLlama 3.1 8B Instant
  - MetaLlama 3.3 70B
  - MetaLlama Guard 4 12B
  - OpenAI GPT OSS 120B
  - OpenAI GPT OSS 20B
  - MetaLlama 4 Maverick 17B 128E
  - MetaLlama 4 Scout 17B 16E
  - Moonshot AI Kimi K2 0905
  - Qwen 3-32B
- Generate flashcard sets from conversations
- Get study help and explanations
- Context-aware assistance

### 📝 **Note Taking & Documentation**

#### **Note Taker Mode**
- Integrated rich text editor (TipTap)
- Upload and view PDF documents
- Split-screen studying (notes + materials)
- Support for external links (YouTube, Google Docs)
- Markdown export functionality

### 🎨 **User Interface & Experience**

- **Modern Design**: Clean, responsive UI with smooth animations (Framer Motion)
- **Dark Mode**: Full dark mode support with next-themes
- **Sidebar Navigation**: Quick access to all sets and modes
- **Progress Tracking**: Visual progress indicators
- **Motivational Quotes**: 100+ study motivation quotes
- **Custom Badges**: Beta features clearly marked
- **Interactive Elements**: Hover effects, glow effects, and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flashcardit2.0.git
cd flashcardit2.0
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
flashcardit2.0/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Main dashboard
│   │   ├── layout.tsx         # Root layout
│   │   ├── [id]/              # Dynamic set pages
│   │   ├── api/               # API routes
│   │   │   ├── generate-flashcards/
│   │   │   ├── generate-printable/
│   │   │   ├── keys/
│   │   │   └── pexels/
│   │   ├── dashboard/         # Pre-made sets data
│   │   └── list/              # List management
│   ├── components/
│   │   ├── set/               # Flashcard study components
│   │   │   ├── MainSet.tsx
│   │   │   ├── StudyMode.tsx
│   │   │   ├── QuizMode.tsx
│   │   │   └── Flashcard.tsx
│   │   ├── modes/             # Special study modes
│   │   │   ├── SpeakIt.tsx
│   │   │   └── PictureMatch.tsx
│   │   ├── bomba/             # Bomba game mode
│   │   ├── matching/          # Matching game mode
│   │   ├── studyplan/         # Study planning features
│   │   ├── AIChat/            # AI chat assistant
│   │   ├── notetaker/         # Note taking mode
│   │   ├── pages/             # Static pages (home, create, etc.)
│   │   ├── ui/                # Reusable UI components
│   │   └── aceternity/        # Advanced UI components
│   ├── lib/
│   │   ├── AllSets.ts         # Set management
│   │   ├── AllLists.ts        # List management
│   │   ├── FSRS.ts            # Spaced repetition algorithm
│   │   ├── studyPlan.ts       # Study planning logic
│   │   └── utils.ts           # Utility functions
│   └── hooks/
│       └── use-mobile.ts      # Mobile detection hook
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🔧 Technology Stack

### Core
- **Next.js 15.4.8** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### Study Features
- **fsrs-algorithm** - Spaced repetition scheduling
- **react-day-picker** - Calendar components
- **TipTap** - Rich text editor
- **Turndown** - Markdown conversion

### AI & APIs
- **@ai-sdk/groq** - Groq AI integration
- **@ai-sdk/react** - React AI components
- **@google/generative-ai** - Google AI integration

### Speech & Media
- **Web Speech API** - Voice recognition (Speak It mode)
- **Speech Synthesis API** - Text-to-speech
- **Pexels API** - Image fetching (Picture Match mode)

### Other
- **pdf-lib** - PDF generation
- **file-saver** - File download functionality
- **react-hook-form** - Form management
- **zod** - Schema validation

## 🎯 Usage Guide

### Creating a Set

1. **AI Generation**:
   - Navigate to the Create page
   - Copy the provided AI prompt
   - Use your favorite AI assistant to generate flashcards
   - Paste the JSON output
   - Import the set

2. **File Upload**:
   - Click the upload area
   - Select JSON files in the correct format
   - Sets are automatically imported

3. **Manual Creation**:
   - Enter a title for your set
   - Add term-definition pairs
   - Create your flashcard set

### Studying with Different Modes

1. **Select a Set**: Click on any set from the sidebar
2. **Choose a Mode**: Select from the available study modes
3. **Start Studying**: Follow the mode-specific instructions
4. **Track Progress**: View your statistics and progress

### Setting Up a Study Plan

1. Open a set and select "Study Plan" mode
2. Choose your study dates on the calendar
3. Optionally set reminder times
4. Download the ICS file to add reminders to your calendar
5. Follow the daily schedule

## 🎨 Customization

### Theme
The application supports both light and dark modes. Toggle using the theme switcher in the navigation bar.

### Study Settings
Each mode offers customizable settings:
- Quiz Mode: Enable/disable streak, timer, or random modes
- Speak It: Choose different voices and languages
- Study Plan: Set daily card limits and reminder times

## 📊 Data Storage

All study data is stored locally in your browser using localStorage:
- Set progress and ratings
- FSRS scheduling data
- Study plan information
- Personal preferences

**Note**: Data is not synced across devices. Export your data to back it up.

## 🔮 Future Features

- Cloud synchronization
- Mobile app
- Collaborative study sessions
- More game modes
- Statistics dashboard
- Import from Quizlet/Anki
- Print-friendly study materials

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is available for personal and educational use.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Spaced repetition algorithm from [FSRS](https://github.com/open-spaced-repetition/fsrs.js)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Version**: 2.3.0  
**Last Updated**: February 2026

Happy Studying! 🎓✨
