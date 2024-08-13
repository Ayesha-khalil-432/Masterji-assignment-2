# MasterJi Assignment

This repository contains the implementation of the MasterJi assignment, which involves developing three components using React and integrating with FreeAPI.app. The components are based on provided Figma designs and include:

1. Random User Profile
2. Random Jokes Tweet
3. Cats Listing

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The MasterJi assignment is a React-based project that demonstrates the implementation of three tasks with API integration using FreeAPI.app. The tasks include displaying a random user profile, a random jokes tweet, and a cats listing, all styled according to Figma designs.

## Features

- **Random User Profile**: 
  - Match component styling as per Figma.
  - Refresh button to fetch new random user data.
  - Loading state for the card.
  - Hyperlink for location and call actions.
  - API: [Random User API](https://api.freeapi.app/api/v1/public/randomusers/user/random).

- **Random Jokes Tweet**: 
  - Static tweet author details.
  - Randomly generated timestamp, views, date, and other analytics.
  - Loading state for the card.
  - Refreshes with new joke data on page reload.
  - API: [Random Jokes API](https://api.freeapi.app/api/v1/public/randomjokes/joke/random).

- **Cats Listing**: 
  - Paginated horizontal scrolling cards.
  - Loading state for the cards.
  - API: [Cats Listing API](https://api.freeapi.app/api/v1/public/cats?page=1&limit=4).

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ayesha-khalil-432/Masterji-assignment-2.git
   cd masterji-assignment

   ```

   **Install the required dependencies:**

   ```bash
   npm install

   ```

   **Start the development server:**

   ```bash
   npm start

   ```
