# HTML Boilerplate 
This is a boilerplate for HTML Project.

## Getting Started
Set up the project on your local with these step:

### 1. Clone the repo on your PC

```git clone https://github.com/kashanshah/html-boilderplate.git```

### 2. Install dependencies

```npm install```
or
```yarn install```

### 4. Run project by starting dev server

```npm run serve```
or
```yarn server```

### 3. Start development

```npm run start```
or
```yarn start```

> If you are running the project on Windows: make sure to set your end of file settings as follows to avoid difference in EOL:
>
> ```git config core.autocrlf false```

### 4. Create build
The build will be created in `dist` folder by running the following command:
```npm run build```
or
```yarn build```

## Build and Test
To execute the tests, run: ```npm run test```.

> Note: Currently there are no test cases added.

## Contribute
Create a new branch from `development`. Commit your code in that branch. Create a pull request from your branch to the `main`. Add relevent reviewers and publish that pull request.

### Packages
- [Gulp 4](https://gulpjs.com/)
- [Webpack 5](https://www.npmjs.com/package/webpack)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [SASS](https://github.com/sass/dart-sass)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6.2/getting-started/introduction/)

### Understand the Repo

```
.
├── README.md
├── dist
    .
    ├── assets
        ├── css
        ├── fonts
        ├── images
        ├── js
    |── index.html
    └── index.js
├── node_modules
├── src
    .
    ├── assets
    │   ├── fonts
    │   ├── images
    │   ├── js
    │   ├── styles
    ├── index.html
    └── index.js
├── .editorconfig
├── .prettierrc
├── gulpfile.mjs
├── package.json
├── package-lock.json
├── README.md
└── webpack.config.js
```

### Have questions?
If you're not sure about anything, kindly reach out anyone in the frontend development team member to help you.


# Components

## Hero Banner Component

The Hero Banner component can be customized using the following `data-` attributes:

- `data-effect`: Specifies the transition effect for the slider. Possible values include:
  - `slide`: Default sliding effect.
  - `fade`: Fade effect.
  - `cube`: Cube effect.
  - `coverflow`: Coverflow effect.
  - `flip`: Flip effect.
  - `cards`: Cards effect.
  - `creative-1` to `creative-6`: Various creative effects with different animations.

- `data-autoplay`: Enables or disables autoplay. Possible values:
  - `true`: Enables autoplay.
  - `false`: Disables autoplay.
  - `2000`: Autoplay with an intervals of 2000ms.

- `data-grab-cursor`: Enables or disables the grab cursor. Possible values:
  - `true`: Enables the grab cursor.
  - `false`: Disables the grab cursor.

- `data-loop`: Enables or disables looping of the slides. Possible values:
  - `true`: Enables looping.
  - `false`: Disables looping.

- `data-has-particles`: Specifies if the hero banner has particles. Possible values:
  - `true`: Enables particles.
  - `false`: Disables particles.

`hero-banner` has class 'has-overlay' if you want to add overlay on the image.

## Lead Content Component
The Lead Content component has following elements:
- `vertical-design-heading`: This is a vertical text that keeps on scrolling top to bottom on the right side of the container.
- `lead-section-title`: This is the title of the section.
- `lead-section-paragraph`: This is the content of the section.
Additionally, you can add call to action button as needed.

## Client Logo Component
The Client Logo component has following elements:
- `.lead-section-sub-title`: This is the title of the section.
- `.lead.mb-5`: Client Logo Paragraph - This is the content of the section.
- `client-logo-list`: This is the list of client logos.
You can also edit number of logos to display in the list by changing the `data-slides-per-view` attribute. It takes integer value for each breakpoint as follows:
- `data-gap="30"`: This is the gap between each logo.
- `data-slides-per-view"5"`: For extra extra extra large screens (1400px and above).
- `data-slides-per-view-xl="4"`: For extra large screens (between 992px and 1200px).
- `data-slides-per-view-lg="3"`: For large screens (between 768px and 992px).
- `data-slides-per-view-md="2"`: For medium screens (between 576px and 768px).
- `data-slides-per-view-sm="1"`: For small screens (576px and below).
