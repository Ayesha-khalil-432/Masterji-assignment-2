# MasterJi Assignment

## Description

This project is an implementation of three components based on provided Figma designs using React. The application includes a random user profile, a random jokes tweet, and a cats listing, all fetched and displayed from different APIs. The components are designed to match the Figma specifications and include features such as loading states and pagination.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install the required dependencies:**

    Ensure you have Node.js installed. Then run:

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

4. **Open the application in your browser:**

    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

The application is structured around three main routes, each corresponding to a specific component task:

1. **Random User Profile** (`/random-user`):
   - Displays a profile card of a random user fetched from the FreeAPI.
   - Includes a refresh button to fetch a new user.
   - Has a loading state to indicate when data is being fetched.
   - Location and call links open in a new tab with corresponding actions.

2. **Random Jokes Tweet** (`/random-jokes`):
   - Shows a tweet card with a random joke.
   - The tweet author details are static, while other details like timestamp, views, and date are randomly generated.
   - Includes a loading state while fetching the joke.
   - Reloading the page fetches a new joke.

3. **Cats Listing** (`/cats-listing`):
   - Displays a horizontally scrollable, paginated list of cards, each containing information about a cat.
   - Shows a loading state while data is being fetched.
   - Fetches data using pagination parameters to ensure all records in the database are listed.

### Navigation

- The base URL `/` automatically redirects to `/random-user`.
- The application includes navigation links for easy access to each route.

### Additional Features

- Clicking the branding logo navigates to [chaicode.com](https://chaicode.com).
- All components match the provided Figma designs.

## Components

- **Random User Profile**: Displays a random user's profile with dynamic data.
- **Random Jokes Tweet**: Shows a random joke in a tweet-like format.
- **Cats Listing**: Lists cats with pagination and horizontal scrolling.
- **BackgroundImage**: Sets a background image for specific sections.
- **ChaiCode**: Displays a static branding or signature element.

## API Integration

The application uses the following API endpoints from FreeAPI:

- **Random User**: `https://api.freeapi.app/api/v1/public/randomusers/user/random`
- **Random Jokes**: `https://api.freeapi.app/api/v1/public/randomjokes/joke/random`
- **Cats Listing**: `https://api.freeapi.app/api/v1/public/cats?page=1&limit=4`

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: For component-level styling.
- **Fetch API**: For making API requests.
- **React Router**: For navigation between different routes.

## Screenshots

Include screenshots of each component and how the application looks.

- **Random User Profile**: ![Random User Profile Screenshot](path/to/random-user-screenshot.png)
- **Random Jokes Tweet**: ![Random Jokes Tweet Screenshot](path/to/random-jokes-screenshot.png)
- **Cats Listing**: ![Cats Listing Screenshot](path/to/cats-listing-screenshot.png)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
