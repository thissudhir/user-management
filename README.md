# User Management Application

This project is a React Vite application designed to add, edit, display, and search users. It includes form validation, duplicate email prevention feature. The application is built without a backend database, and it leverages **React.js** and **MUI** for the UI.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Requirements](#requirements)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Design](#technical-design)
- [File Structure](#file-structure)

## Objective

The purpose of this application is to provide a simple user management system where user can:

- Add new users.
- Edit existing users.
- Search users by email, role, department, name etc.

## Features

- **Landing page**: Contains the list of existing users.
- **Add/Edit User Form**:
  - Validates required fields.
  - Ensures a valid email format.
  - Ensures the phone number is valid (10 digits).
  - Prevents adding users with duplicate email IDs.
- **Display Users**: The list of users is displayed on the same page with the option to edit them.

## Requirements

- A web landing page for user management.
- Add user and Edit user forms.
- Form validation (email format, phone number validation, and mandatory fields).
- Duplicate email ID validation.
- Display the list of users with an option to search by email ID, department, name etc.

## Tech Stack

- **React.js** (mandatory)
- **MUI** (Material-UI for styling and layout)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thissudhir/user-management.git
   cd user-management-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Usage

- **Add User**: Fill out the user form and click "Add User". The user will be added to the list, unless a duplicate email is found.
- **Edit User**: Click the "Edit" button next to a user in the list, and the form will populate with their details. After editing, submit the form to update the user.
- **Search User**: Use the search bar to find a user by email, department, name etc. The user's full details will appear in the search results.

## Technical Design

- The **Add User** and **Edit User** functionalities are combined into a single reusable component (`UserForm.jsx`).
- Form validation includes:

  - Full name is required.
  - Email format must be valid.
  - Phone number must be 10 digits.
  - No duplicate emails are allowed.

- All forms and UI components are styled using **MUI**.

## File Structure

```
src/
  ├── components/
  │     ├── UserForm.jsx
  │     ├── UserList.jsx
  ├── App.jsx
  └── main.jsx
```
