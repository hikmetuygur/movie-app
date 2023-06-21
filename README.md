# Movie App

The Movie App is a simple web application that allows users to search for movies and view their details, including title, rating, and overview. It utilizes the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

![Movie App Demo](/assets/movie-app.gif)
&nbsp;
![Movie App Img](/assets/movie-app.gif)

## Features

- Search for movies by entering keywords
- Display movie posters, titles, ratings, and overviews
- Dynamically style movie rating based on average vote
- Click on a movie to expand and view the full overview

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/hikmetuygur/movie-app.git
   ```

2. Open the index.html file in your web browser.

3. Enter a movie title in the search bar and press Enter or click the search button.

4. The search results will be displayed with movie posters, titles, ratings, and overviews.

5. Click on a movie to expand and view the full overview.

## API Key

To run the Movie App locally, you will need an API key from The Movie Database (TMDb). Follow these steps to obtain an API key:

1. Create an account on TMDb.

2. Log in to your account and navigate to the API section.

3. Click on the "Create" button and fill in the required details.

4. Once your application is approved, you will receive an API key.

5. Replace the API_KEY variable in the script.js file with your API key:

   ```javascript
   const API_KEY = 'YOUR_API_KEY';
   ```

6. Save the changes and run the Movie App.

## Credits

- Movie data is fetched from The Movie Database (TMDb).
- Movie posters and images are provided by TMDb.

## License

This project is licensed under the MIT License.

Made from <a href="https://twitter.com/iamleviyn">Leviyn</a> with :heart:
