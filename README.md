Sure! Here’s a sample `README.md` file for your warehouse management application:

---

# Warehouse Management Application

## Overview

This is a Warehouse Management Application built with React and Redux. It includes features for viewing and managing warehouse details, filtering warehouses based on different criteria, and displaying images of warehouses with varying sizes based on available space.

## Features

- **Warehouse List**: Displays a list of warehouses with filtering options.
- **Warehouse Details**: Shows detailed information about a selected warehouse.
- **Image Display**: Displays warehouse images in small, medium, or large sizes based on available space.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for JavaScript applications.
- **React Router**: Declarative routing for React.js applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations in React.
- **Slick Carousel**: Carousel component for React.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/warehouse-management-app.git
cd warehouse-management-app
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Run the following command to install dependencies:

```bash
npm install
```

### 3. Add Images

Place your warehouse images in the `public/images/` directory. Ensure they are organized into `small/`, `medium/`, and `large/` folders:

- `public/images/small/warehouse1_small.jpg`
- `public/images/medium/warehouse1_medium.jpg`
- `public/images/large/warehouse1_large.jpg`

### 4. Update Warehouse Data

Ensure your `warehouses.json` file includes the `image` field with the correct image filenames:

```json
[
  {
    "id": 1,
    "name": "Warehouse 1",
    "city": "City A",
    "cluster": "Cluster X",
    "space_available": 1500,
    "is_live": true,
    "image": "warehouse1_medium.jpg",
    "customFields": ["Custom Field 1"]
  }
]
```

### 5. Start the Development Server

Run the following command to start the development server:

```bash
npm start
```

Navigate to `http://localhost:3000` in your browser to view the application.

## Usage

### Warehouse List

- **Search**: Enter the warehouse name to search.
- **Filter**: Use dropdowns to filter by city and cluster, and input the minimum space available.

### Warehouse Details

- **View Details**: Click on a warehouse name to view details.
- **Add Custom Field**: Add custom fields to the warehouse details.

## Contributing

Feel free to open issues or submit pull requests if you have any improvements or fixes.

## License

This project is licensed under the MIT License.

