# Untitled Project

A React app that validates user input with a Profanity Filtering and stores valid data in Google Sheets, with success and error pages using React Router.

This project is created using **React** and **Vite**. It is built to help developers quickly create web applications that are fast, scalable, and easy to maintain.

## Features
- **React**: A library for building user interfaces.
- **React Router**: For navigating between pages.
- **Tailwind CSS**: For designing responsive and modern user interfaces.
- **ESLint and Prettier**: For keeping the code clean and organized.
- **React Hook Form**: For managing and validating forms easily.

## Tools and Libraries

### Main Libraries
- **React**: for creating components and UI.
- **React DOM**:  to render React components to the web.
- **React Hook Form**:  for handling forms efficiently.
- **React Icons**:  for adding icons to the app.
- **React Router DOM**:  for page navigation.

### Developer Tools
- **Vite**:  a tool for building and running the app quickly.
- **ESLint**:  to catch and fix coding issues.
- **Prettier**:  to format the code consistently.
- **Tailwind CSS**: for applying CSS styles easily.
- **PostCSS and Autoprefixer**: To process and optimize CSS for all browsers.
- **Prettier Plugin for Tailwind CSS**: To organize Tailwind CSS classes automatically.

## Getting Started


### Installation Steps
1. Vite insatlled:
   ```bash
   pnpm create vite@latest .
   ```

2. Install Tailwind CSS, PostCSS, and Autoprefixer:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

3. Initialize Tailwind CSS configuration:
   ```bash
   npx tailwindcss init -p
   ```
 
4. Install React Hook Form:
   ```bash
   npm install react-hook-form

   ```
5. Install React Router DOM:
   ```bash
   npm install react-router-dom
   ```
6. Install React Icons:

   ```bash
   npm install react-icons
   ```

7. Install ESLint and Prettier:
   ```bash
   npm install eslint prettier
   ```



### Running the App
- To start the development server:
  ```bash
  pnpm run dev
  ```
- To create a production build:
  ```bash
  npm run build
  ```
- To preview the production build:
  ```bash
  npm run preview
  ```


## File Structure
The project is organized as follows:
```plaintext
src/
├── assets/       # Images and other static files.
├── components/   # Reusable parts of the UI.
├── pages/        # Individual pages of the app.
├── hooks/        # Custom React hooks for shared logic.
├── styles/       # CSS and Tailwind files.
└── main.jsx      # The entry point of the app.
```

## Setting `.env` Variables in Cloudflare

To ensure your deployed project works even if the local `.env` file is missing, you can securely set environment variables in Cloudflare. Follow these steps:

### Steps to Add Variables and Secrets:
1. After deployment, go to the deployed project's **Overview** in **Workers and Pages**.
2. Navigate to **Settings** > **Variables and Secrets**.
3. Click **Add**.
4. Set the **Type** to `Secret`.
5. Enter the **Variable Name** (e.g., `API_KEY`).
6. Enter the **Value** (e.g., tokens, links, or IDs).
7. Save your changes.

By setting `.env` variables in Cloudflare, your deployed project will remain functional and secure, even if `.env` files are deleted or missing locally.


## License
This project is licensed under the **MIT License**. See the LICENSE file for details.

## Special Thanks
Special thanks to the creators of the following tools and libraries:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Extra Resources
If you are new to these tools, check out these guides:
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [ESLint Rules](https://eslint.org/docs/latest/)
- [Prettier Setup](https://prettier.io/docs/en/)

This README gives all the details needed to understand the project and start using it.
