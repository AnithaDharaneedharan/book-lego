## Pre-requisites

Run the backend node server to access the books service -  https://github.com/AnithaDharaneedharan/book-lego-service so that the books can be fetched on the front end

## Available Scripts

In the project directory after cloning, you can run :

### `npm i` to install the dependencies

### `npm run start` to start the application

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Functionalities added and improvements that can be done
The list of books are fetched from the endpoint `http://localhost:8080/books` and displayed in 6 columns on desktop and varies depending on the responsive mode. Bootstrap package has been used for styling.

Search component aids in searching for a book by either book name or author.
The search endpoint is created at the backend by passing the query param `http://localhost:8080/books?searchQuery=julia`
To prevent calling the API end point on every character change on the search bar, onKeyDown event handler is used instead of onChange. This reduces network requests and optimizes the app.
Enhancements: Debounce functionality can be added for dynamic search.

Pagination is added on the front end, though doing it at the back end is efficient for huge data.
Pagination improves response time and reduce server overhead as the huge lists are broken into smaller pages.
Enhancements: Lazy loading of images can be done or infinite scrolling can be implemented.

Enhancements: Overlay effect can be done on each book to give its details 




