# Personal Portfolio Website

This is a personal portfolio website built using React. The website consists of a main App component, a toolbar, project cards, and various styles for different sections.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Components](#components)

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/nyere/portfolio-ts.git
    ```

2. Install dependencies:

    ```bash
    cd <repository-folder>
    npm install
    ```

3. Run the development server:

    ```bash
    npm start
    ```

4. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view website.

## Components

### App.tsx

The main component of the website. It includes the toolbar and various sections like the white, yellow, and black screens. Each screen has content that is revealed as you scroll down.

### Toolbar.tsx

A component for the toolbar at the top-right corner of the website. It allows you to navigate to different sections of the website by clicking on buttons for white, yellow, and black screens.

### ProjectCard.tsx

A component used to display project cards. Each card represents a project with a title, description, and a link to the project's GitHub repository. Project cards have a hover effect that scales and adds a shadow.
