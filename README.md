# iTunes Search App

This is a simple iTunes search application that allows users to search for media items on iTunes. It has both a front-end (React) and a back-end (Express) component.

## Installation and Usage

Clone the repository from GitHub:

$ git clone iTunesApp

Navigate to the project directory:

$ cd itunes-search-app

Install dependencies for both the client and server:

$ cd client
$ npm install
$ cd ../server
$ npm install
Run the application:

$ cd client
$ npm start

Open another terminal window/tab:

$ cd server
$ npm start


Access the application in your browser at: http://localhost:3000/

# Features

Search for media items on iTunes by providing a search term and media type.
View search results with relevant information about each item.
Add items to your favorites list.

# Security Measures

The application uses the Helmet middleware to enhance security by setting various HTTP headers.
API keys or sensitive data are not directly exposed in the client-side code.
The server has error handling in place for any potential issues while fetching data from the iTunes API.
The application uses Express middleware to handle CORS and prevent unauthorized cross-origin requests.

# Notes

The iTunes Search API may have rate limits. If you encounter any issues, try limiting the number of requests or use your own API key.
The application is for educational purposes and may require further improvements for production use.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.



