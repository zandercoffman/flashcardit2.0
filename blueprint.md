## Blueprint: File Upload and Study Flow

### Current State

The application includes a file upload component (`src/components/aceternity/file-upload.tsx`) and a button to start studying that appears when files are uploaded (`src/components/pages/upload.tsx`).

### Plan

Move the JSON upload and text input functionality from `src/components/aceternity/file-upload.tsx` to `src/components/pages/upload.tsx`.


## Blueprint: Refactor Sidebar

### Current Plan

Refactor the application sidebar by moving the home and help buttons to their own components in the `/pages` directory. Update the existing sidebar component to utilize these new components.

### Steps

1.  Create a new file `src/app/pages/home-button.tsx`.
2.  Create a new file `src/app/pages/help-button.tsx`.
3.  Move the JSX for the home button from `src/components/app-sidebar.tsx` to `src/app/pages/home-button.tsx`.
4.  Move the JSX for the help button from `src/components/app-sidebar.tsx` to `src/app/pages/help-button.tsx`.
5.  In `src/components/app-sidebar.tsx`, import `HomeButton` from `src/app/pages/home-button.tsx`.
6.  In `src/components/app-sidebar.tsx`, import `HelpButton` from `src/app/pages/help-button.tsx`.
7.  Replace the original home button JSX in `src/components/app-sidebar.tsx` with `<HomeButton />`.
8.  Replace the original help button JSX in `src/components/app-sidebar.tsx` with `<HelpButton />`.
9.  Test the application to ensure the sidebar functions correctly and the home and help buttons are displayed as expected.