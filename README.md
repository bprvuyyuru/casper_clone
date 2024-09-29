# Casper Product Display Page

This project is a front-end implementation of the Casper Product Display Page. The goal is to replicate the product detail page with features like image carousels, customer reviews, FAQs, product add-ons, and a responsive layout using modern React practices, Tailwind CSS, and third-party integrations.

Here is the live demo link https://casperclone.vercel.app/

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Features](#features)
- [License](#license)

## Introduction

The **Casper Product Display Page** project showcases a responsive product detail page using React.js, Tailwind CSS for styling, and various reusable components. It integrates with external services to display dynamic data like customer reviews. The page is responsive, ensuring a seamless experience across desktop, tablet, and mobile views.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Vite**: Front-end build tool for faster development.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Swiper.js**: Touch-friendly carousel/slider library.
- **React Icons**: Library for including icons as React components.
- **Yotpo API**: For fetching customer reviews data dynamically.
- **JSON Data Files**: For managing static content like FAQs, product add-ons, and footer information.

## Setup Instructions

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/bprvuyyuru/casper_clone.git
   cd casper_clone
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open the browser and navigate to:
   ```
   http://localhost:5173/
   ```

## Project Structure

The project follows a component-based architecture, ensuring a modular and maintainable codebase.

- **public**: Contains static assets such as images and logos.
- **src/assets**: Includes various media files like logos and icons.
- **src/components**: React components for different sections of the page.
- **src/data**: JSON files that hold the data for the application (e.g., FAQs, Product Details, Add-ons).
- **src/services**: API services for fetching data (like customer reviews).
- **App.jsx**: The main entry point of the application.
- **index.js**: The root JavaScript file to render the app.

## Design Decisions

1. **Component-based Approach**:
   The project is broken into reusable React components to ensure maintainability and easy scaling. Each feature (e.g., reviews, image gallery, product description) is its own component.

2. **Tailwind CSS for Styling**:
   Tailwind CSS is used for quick and responsive styling. Its utility-first approach minimizes the need for custom CSS, allowing for faster development and easier theme adjustments.

3. **Swiper.js for Carousels**:
   Swiper.js was chosen to create responsive carousels for product images and customer reviews because of its touch-friendly behavior on mobile devices and rich feature set.

4. **API Fetching for Reviews**:
   Dynamic customer reviews are fetched from the Yotpo API. This demonstrates integration with external services and the ability to fetch and display live data.

5. **JSON-based Data Files**:
   Content such as FAQs, product add-ons, and footer information is stored in JSON files to allow for easy updates without changing the codebase. This structure also helps separate logic from data.

6. **Use of External Image Links**:
   Instead of storing images locally in the `assets` folder, the project uses image URLs from the original Casper website. This approach reduces the project's footprint and ensures that images always reflect the latest versions from the source.

## Data Management

### Data Folder

The `data` folder contains various JSON files that store the static content for the project, For example:

- **Footer**: Links, titles, and other footer-related data.
- **FAQ**: List of frequently asked questions with answers.
- **Add-ons**: List of add-on products, including names, prices, and ratings.
- **Product Details**: All product-specific data like descriptions, images, pricing, and video links.

Using JSON data for this static content provides easy-to-maintain structures that can be updated or modified without changing the core codebase.

### Use of External Image Links

Instead of storing images locally, the project pulls image URLs directly from the official Casper website. This approach ensures:

- **Real-time Image Updates**: The displayed images will reflect any updates made to the source website.
- **Reduced Project Size**: Since images are hosted externally, this reduces the overall size of the project.

### API for Customer Reviews

- **Yotpo API**: The project fetches customer reviews dynamically using the Yotpo API. This ensures the reviews displayed on the product page are up-to-date and accurately reflect customer feedback.

  - **Fetch Request**: The `fetchYotpoReviews` function is used to send an asynchronous request to the API, retrieve the data, and display the customer reviews on the page.

  - **Real-time Updates**: Whenever the page loads, the reviews are fetched in real-time, ensuring that users always see the latest reviews and ratings.

## Features

- **Responsive Product Display**: A fully responsive product detail page that adapts to various screen sizes (desktop, tablet, mobile).
- **Image Gallery**: An image carousel showcasing the product with support for videos.
- **Customer Reviews**: Dynamically fetched customer reviews from the Yotpo API.
- **Product Add-ons Section**: A list of related add-ons, shown as a carousel on mobile devices.
- **Frequently Asked Questions (FAQ)**: A collapsible FAQ section using JSON-based content.
- **Footer**: A footer with quick links, contact information, and newsletter sign-up functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
