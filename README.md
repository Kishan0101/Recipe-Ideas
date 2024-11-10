# Recipe Ideas 🍲

A simple and elegant web application that helps busy professionals find recipes based on the ingredients they have, their available time, or even their mood! Designed with a clean and responsive UI, Recipe Ideas makes it easy to discover new meals and explore detailed recipe instructions. Built with React and TheMealDB API for seamless data fetching.

## Features

- **Ingredient-Based Search**: Find recipes based on the ingredients you have on hand.
- **Detailed Recipe View**: Click on a recipe to see full details, including ingredients, measurements, and cooking instructions.
- **User-Friendly Interface**: A clean, responsive design optimized for both desktop and mobile use.
- **Error Handling**: Graceful handling of errors, such as network issues or empty search results.
- **Interactive Design**: Hover effects and transitions for an engaging user experience.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Styling**: CSS (with modular approach for maintainable styles)
- **API**: [TheMealDB](https://www.themealdb.com/) for fetching recipes
- **State Management**: React's built-in state management (using `useState` and `useEffect` hooks)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kishan0101/recipe-ideas.git
   cd recipe-ideas


2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. Open [https://jmmjjh.csb.app/](https://jmmjjh.csb.app/) to view it in your browser.

## Project Structure

## Usage

1. **Search for Recipes**: Type an ingredient in the search bar, and click on **Search Recipes** to find recipes containing that ingredient.
2. **View Recipe Details**: Click on any recipe card to see full details, including ingredients, instructions, and category.
3. **Navigate Back**: Use the back button to return to the search results.

## API

This application uses TheMealDB API to fetch recipe data. No API key is required.

### Endpoints Used

- **Filter by Ingredient**: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
- **Lookup by Recipe ID**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={idMeal}`

## Screenshots

### Home Page ![screenshot-jmmjjh_csb_app-2024_11_10-17_23_25](https://github.com/user-attachments/assets/09205e1b-a3f6-4640-90ad-202442896d4f)

![Home Page]

### Recipe Details![screenshot-jmmjjh_csb_app-2024_11_10-17_21_06](https://github.com/user-attachments/assets/ef77b050-a594-4db0-9f20-4919eaf1e791)

![Recipe Details]

## Contributing

Contributions are welcome! If you have suggestions or find any issues, feel free to open a pull request or an issue.

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [TheMealDB API](https://www.themealdb.com/)
- [React](https://reactjs.org/)
- Icons made by [Freepik](https://www.flaticon.com/authors/freepik)

