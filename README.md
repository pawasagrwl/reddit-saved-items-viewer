# Reddit Saved Items Viewer

Reddit Saved Items Viewer is a React-based application that allows users to view, search, and categorize their saved posts and comments from Reddit. The application uses a Python script to fetch saved items from a user's Reddit account and save them into a JSON format, which then can be viewed through the React interface.

## Features

- **View Saved Posts and Comments**: Easily view all your saved Reddit posts and comments in one place.
- **Search Functionality**: Search through your saved posts and comments based on keywords.
- **Categorization and Sorting**: Organize your saved items by subreddit or other criteria, and sort them according to your preference.
- **Dark Theme Support**: A user-friendly interface that supports dark theme for comfortable viewing.

## Getting Started

### Prerequisites

Before setting up the Reddit Saved Items Viewer, ensure you have the following installed:
- Node.js (v14 or later recommended)
- Python 3 (v3.7 or later recommended)
- npm (usually comes with Node.js)

### Initial Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/reddit-saved-items-viewer.git
    cd reddit-saved-items-viewer
    ```


2. **Install Dependencies**

    In the project directory, run:
    
    ```bash
    npm install
    ```

3. **Python Script Setup**

    Running the Python script is essential for the initial data fetch. Before running the application for the first time, please refer to the [README](api/README.md) within the `api/` directory for instructions on setting up and running the Python script. Ensure you have your `.env` file configured as per the instructions.

    The Python script must be executed successfully to generate the `saved_items.json` file, which is crucial for the application to run properly.

### Running the Application

After setting up the Python script:

1. **Fetch Saved Items** (Optional)

    If you want to fetch the latest saved items from your Reddit account, run:

    ```bash
    npm run start-api
    ```

    This will prompt you whether you wish to pull new saved posts and comments.

2. **Start the React Application**
    ```
    npm start
    ```

    This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

Once the application is running, you can view your saved Reddit posts and comments. Use the search bar to filter items based on keywords, and use the categorization options to organize your view.





