## Overview

This application is a versatile study tool that allows users to create, manage, and study flashcard sets. It offers multiple ways to create sets, including AI generation, file uploads, and manual creation. The application also includes various study modes to enhance the learning experience.

## Features & Design

### Core Features

*   **Flashcard Creation:**
    *   **AI Generation:** Users can generate flashcard sets by providing text to an AI assistant and pasting the output into the application.
    *   **File Upload:** Users can upload existing flashcard sets in JSON format.
    *   **Manual Creation:** Users can manually create flashcard sets by entering terms and definitions directly into the application.
*   **Study Modes:**
    *   **Spaced Repetition (FSRS):** The application uses the FSRS (Free Spaced Repetition Scheduler) algorithm to optimize learning and long-term memory retention.
    *   **Games:** The application includes engaging games like 'Bomba' to make learning more interactive.
    *   **Flashcards:** Users can create and review classic flashcards.
    *   **Quizzes:** Users can take quizzes to test their knowledge and track their progress.
    *   **Study Path Mode:** A personalized study plan that tracks user progress. (In Progress)
*   **User Interface:**
    *   Modern, responsive design with a clean and intuitive layout.
    *   Includes a dark mode.
    *   Features a dashboard to display user's current and premade study sets.
    *   Utilizes a variety of UI components for a rich user experience, including cards, dialogs, buttons, and more.
*   **Premade Sets:** A collection of premade flashcard sets are available for users to add to their collection.

### Design & Styling

*   **Aesthetics:** The application uses a modern design with a focus on visual balance, clean spacing, and polished styles.
*   **Color Palette:** A vibrant color palette is used to create an energetic look and feel.
*   **Typography:** Expressive typography is used to create a clear visual hierarchy.
*   **Iconography:** Icons are used to enhance understanding and navigation.
*   **Interactivity:** Interactive elements feature a "glow" effect and shadows to create a sense of depth.

## Current Task: Modernize Helper Page

### Plan

1.  Redesign the `helper.tsx` page to be more modern and user-friendly.
2.  Update the `blueprint.md` to reflect the changes.
3.  Run the linter to ensure code quality.
4.  Deploy the application.

### Steps Implemented

1.  **Redesigned `src/components/pages/helper.tsx`:** Modernized the helper page with a card-based layout, unique icons, and a clear, step-by-step instructional guide to improve user experience.
2.  **Updated `blueprint.md`:** Updated the blueprint to reflect the changes made to the `helper.tsx` page.

## Recent Changes

### Bug Fixes

*   **Initial Set Loading:** Fixed an issue where study sets were not loaded into the navigation sidebar on the initial page load. The code was modified to load sets from local storage earlier in the component lifecycle, eliminating the loading delay.
