# Food Delivery Website

## Overview

This is a fully functional food delivery website built with modern web technologies. The project aims to provide a seamless experience for users to browse, order, and get food delivered to their doorstep. The frontend is built using ReactJS and Tailwind CSS, while the backend is powered by NodeJS and Express along with the Mongodb as a database.

## Features

- User authentication and authorization
- Choice from diverse food menu
- Add food items to the cart
- Checkout and place orders
- Responsive design for mobile and desktop.
- **Admin Panel**: Admins can manage the menu by adding or removing food items.

## Technologies Used

### Frontend
- **ReactJS**: A JavaScript library for building user interfaces.
- **Context API**: For state management across the application.
- **React Router DOM**: For featching content dynamically based on URL.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **FontAwesome**: For beautiful and scalable vector icons.

### Backend
- **NodeJS**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL document-based database for storing user data and orders.
- Additional packages:
  - **mongoose**: For MongoDB object modeling.
  - **jsonwebtoken**: For handling JWT tokens.
  - **bcryptjs**: For hashing passwords.
  - **dotenv**: For environment variable management.
  - **cors**: For handling Cross-Origin Resource Sharing.
  - **nodemon**: For speedy development of Node. js applications.


## Installation

To run this project locally, follow these steps:

### Prerequisites
- NodeJS (version 14 or later)
- npm or yarn
- MongoDB

### Clone the repository
```bash
git clone https://github.com/yourusername/food-delivery-website.git
cd food-delivery-website
```
### Install Frontend dependencies
```bash
cd frontend
npm install
```

### Install Backend dependencies
```bash
cd backend
npm install
```

### Create Environment Variables
Create a .env file in the backend directory and add the following environment variables:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Project
- Frontend
```bash
cd Frontend
npm start
```

- Backend
```bash
cd Backend
npm start
```

## Usage
Once the server is running, you can access the website at http://localhost:3000. Register as a new user or login with your credentials to start browsing and ordering food.

### Admin Panel
Admins can log in with their credentials to access the admin panel. The admin panel allows the management of the food menu:
- Add food items: Admins can add new food items to the menu.
- Remove food items: Admins can remove existing food items from the menu.
- Update food items: Admins can edit the existing info about food item.

## Contributing
Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions or feedback, feel free to contact me at [tellawarved@gmail.com].

Made with ❤️ by Ved Tellawar