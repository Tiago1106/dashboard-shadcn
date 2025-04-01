# Dashboard

This is a dashboard project using Next.js, React, and TailwindCSS. The goal is to provide a simple and interactive interface for data visualization and content management. The project utilizes several libraries to make development more efficient and flexible.

## Technologies Used

- **Next.js** - React framework for server-side rendering and static page generation.
- **React** - JavaScript library for building user interfaces.
- **TailwindCSS** - CSS framework for quick and responsive styling.
- **Radix UI** - Accessible and customizable UI components.
- **Ky** - HTTP request library.
- **Zod** - Data validation.
- **Next Themes** - Support for light and dark themes.
- **Sonner** - Interactive notifications.
- **Recharts** - Interactive charts for data visualization.
- **Class Variance Authority** and **clsx** - Tools for conditional class manipulation.
- **Next-Auth** (to be implemented) - Authentication with Next.js.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dashboard
   ```

2. Install the dependencies:
   ```bash
   yarn install
  ```

3. Run the development server:
   ```bash
   yarn dev
  ```

4. Access the project in the browser:
   ```bash
   http://localhost:3000
   ```

## TODO

- [ ] **Authentication with Next-Auth**: Add configuration and integration with Next-Auth for user authentication.
  - [x] Create login and registration pages..
  - [ ] Create registration pages..
  - [ ] Configure authentication providers (Google, GitHub, etc).
  - [x] Add protection to routes that require authentication.