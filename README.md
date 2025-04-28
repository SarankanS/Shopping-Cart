# Shopping Cart React App

## Project Description

This is a simple shopping cart application built using **React**. It includes two pages:

1. **Home Page** - The homepage displays general content and serves as the entry point to the app.
2. **Shop Page** - The shop page displays products fetched from a fake store API, with functionality for adding items to a cart. The cart dynamically adjusts the number of items based on user input.

The application uses a **navigation bar** that is present on both pages, which includes the current number of items in the shopping cart and a button to go to the checkout page (which is not implemented in this version).

### Features

- A **navigation bar** with the number of items in the cart.
- Two pages: Home and Shop.
- **Product cards** displaying the product name, quantity input, increment/decrement buttons, and an "Add to Cart" button.
- **Cart functionality** that updates the quantity of items and adjusts the cart dynamically.
- Integration with the **FakeStore API** to fetch products.
- **React Testing Library** for testing components.
- Styling for a basic, user-friendly interface.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed. If you don’t have them, you can download and install them from the official site:

- [Node.js](https://nodejs.org/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate to the project folder**:

   ```bash
   cd Shopping-Cart
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   This will run the app on [http://localhost:3000](http://localhost:3000).

### Folder Structure

```
/Shopping-Cart
  /public
    index.html               # Root HTML file
  /src
    /components
      Header.js               # Navigation bar component
      ProductCard.js          # Product card component
      Cart.js                 # Cart component
    /pages
      HomePage.js             # Home page component
      ShopPage.js             # Shop page component
    App.js                    # Main app component with routing
    index.js                  # Entry point for the React app
  package.json                # Project metadata and dependencies
  package-lock.json           # Lock file for consistent dependency versions
```

### Components

- **HomePage**: Displays general content and a welcome message.
- **ShopPage**: Displays the products fetched from the API, with "Add to Cart" functionality.
- **ProductCard**: Individual cards representing each product with input fields for quantity and buttons for adding/removing items.
- **Cart**: Displays items added to the cart and their quantities.
- **Header**: Contains the navigation bar with the cart item count.

### Dependencies

- `react-router-dom`: For navigation between pages.
- `axios`: To fetch data from the FakeStore API.
- `react-testing-library`: For unit and integration tests.

## Usage

- **Home Page**: Shows a welcome message. You can customize this with additional content or images.
- **Shop Page**: Displays products fetched from the API. Users can input the number of items they want to buy, adjust quantities, and add them to the cart.
- **Cart**: Displays the total number of items added to the cart. You can navigate between the pages using the navigation bar.

### Test the App

1. To run tests, use the following command:

   ```bash
   npm test
   ```

   This will run the tests and display the results in the console.

### To Do

- Implement the checkout logic (not covered in this project).
- Style the app further to enhance the user interface.

### Future Improvements

- Integrate with a real payment system for the checkout process.
- Add the ability to remove items from the cart.
- Implement a search or filter functionality for products.

## Contributing

Feel free to fork the project and make improvements! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

---

This `README.md` should give users and developers enough context to get started with your project and understand its structure and features. Let me know if you need any adjustments!