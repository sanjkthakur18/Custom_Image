Photo Editor Application
----------------------


A simple photo search and editor application built with React, React Router DOM, Tailwind CSS, and the Pexels API. Users can search for images, view them, and edit them using the canvas editor with basic shapes and text features. Edited images can be downloaded.
---------------------------


1. Features
-----------
User Authentication: Basic login with name and email input, saved in local storage.
Image Search: Search for images from the Pexels API.
Image Editing: Add shapes and text on the canvas and reposition them.
Download Edited Images: Save edited images as .png files.
Context API: Manage global state for search results across components.
Technologies Used
Frontend Framework: React with React Router DOM
Styling: Tailwind CSS
API: Pexels API for fetching images
Image Editing: Fabric.js for canvas manipulation


2. Usage
-----------
1. Login: Enter your name and email on the login page to access the search and editor features.
2. Search Images:
3. Use the search bar to find images on the SearchPage. Suggestions will appear based on your search query.
4. Select an image to view and edit by clicking the "Add Caption" button, which navigates to the editing canvas.
5. Edit Image:
6. In the editor, you can add text, shapes, and adjust the layers on the canvas.
7. Use the buttons (Add Text, Add Circle, Add Rectangle, Add Triangle) to add elements to the image.
8. Download your edited image using the Download button.
9. Logout:
10. Refresh the page or clear local storage to reset the login.


3. Components Overview
----------------------
1. App.jsx: Main application entry point, handles routing and context provider setup.
2. Login.jsx: Login form component where users enter their name and email to access the app.
3. SearchPage.jsx: Main page for image search functionality using Pexels API, displaying search results and suggestions.
4. SingleImage.jsx: Editor page for selected images, allowing users to add shapes, text, and download edited images.
5. PhotoContext.jsx: Context provider to handle search results and global data access.

