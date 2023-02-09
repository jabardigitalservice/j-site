# J-Site
This is the main codebase for J-Site

&nbsp;
## Docs

- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder Structure](#folder-structure)
- [First time setup](#first-time-setup)
- [Running locally](#running-locally)
- [Code style guide](#code-style-guide)

&nbsp;
## Codebase
### Technologies
Here is a list of all the core technologies this project use:

- [npm](https://www.npmjs.com/): Package manager
- [Tailwind CSS](https://tailwindcss.com/): CSS framework for styling
- [Jabar Design System](https://www.npmjs.com/package/@jabardigitalservice/jds-design-system): UI components
- [Vue.js](https://vuejs.org/): JavaScript framework for building user interfaces
- [NuxtJS](https://nuxtjs.org/): Vue.js framework for server-side rendering

&nbsp;
### Folder Structure
```bash
j-site/
├── assets        # Uncompiled assets such as Stylus or Sass files, images, or fonts
├── components    # Vue.js components
├── layouts       # Custom layout accessible with the layout property in the page component
├── pages         # Application views and routes
├── plugins       # Add Vue plugins and inject functions or constants
├── static        # Static files
└── utils         # Reusable utility codes or functions
```

&nbsp;
## First time setup
The first step to running J-Site locally is downloading the code by cloning the repository:

```bash
git clone https://github.com/jabardigitalservice/j-site.git

#or using SSH
git clone git@github.com:jabardigitalservice/j-site.git
```

open `j-site` directory

```bash
cd j-site
```

create env file

```bash
cp .env.example .env
```

install the dependencies

```bash
npm install
```

&nbsp;
## Running locally

Compiles and hot-reloads for development

```bash
npm run dev
```

&nbsp;
### Code Style Guide
- **Javascript Style Guide by Airbnb** (https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)
