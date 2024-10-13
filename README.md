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

## Hero Slider

Each hero slider instance is initialized with pagination, navigation, and lazy loading based on the specified attributes. Hero slider using [Swiper.js](https://swiperjs.com/) and [jQuery](https://jquery.com/), featuring autoplay, looping, lazy loading, and creative transition effects. [Particle](https://vincentgarreau.com/particles.js/) animations can also be added for enhanced visuals.

### Key Attributes

- **`data-autoplay`**: Enables autoplay. Set to `"true"` or a number (delay in milliseconds). Defaults to `"false"`.
- **`data-loop`**: Enables looping through slides. Set to `"true"` or `"false"`.
- **`data-grab-cursor`**: Enables the grab cursor when hovering over the slider. Set to `"true"` or `"false"`.
- **`data-effect`**: Defines the transition effect. Possible values include:
  - `slide`: Default effect: slides move horizontally
  - `fade`: Cross-fade effect: slides fade in and out
  - `cube`: Cube effect: slides are rotated in 3D space
  - `coverflow`: Coverflow effect: slides are scaled and rotated in 3D space
  - `flip`: Flip effect: slides are flipped like a card
  - `cards`: Cards effect: slides are animated like cards
  - `creative-1` to `creative-6`: The slider supports various transition effects defined in the `creativeEffects` array. These effects can be customized as needed. These effects are defined in the `creativeEffects` array
- **`data-has-particles`**: If `data-has-particles` is set to `"true"`, the particle animations on the slides is displayed. The function appends a particle container to each slide and loads the particle configuration from a JSON file.
- **`data-lazy`**: Enables lazy loading for images. Set to `"true"` or `"false"`.
- **`has-overlay`**: Class to show or hide the overlay on the slide. Add or remove this class as needed.


## Lead Section with Shadow Text

This component implements a visually appealing lead section designed to highlight key messages for users. It combines a vertical heading design with responsive text sizing and animations, creating an engaging experience.
To use this component, ensure you include the HTML structure on your page. Adjust the text content and button links as needed to fit your branding and messaging.

### Key Features

- **Responsive Design**: The section adapts to various screen sizes using SCSS media queries, ensuring optimal readability and aesthetics on all devices.

- **Vertical Heading**: The `.vertical-design-heading` class features a large, rotated heading that adds a dynamic visual element to the section. It utilizes CSS animations to create a marquee effect, making the heading continuously scroll vertically.

- **Shadow Effect**: The section is designed with a shadow effect achieved through a specific layout and z-index positioning, providing depth and enhancing the visual hierarchy.

- **Text Variations**: The lead section includes two text elements:
  - **Lead Section Title**: This prominent title uses the `.lead-section-title` class, styled for large font sizes and spacing adjustments based on screen size.
  - **Lead Section Paragraph**: A descriptive paragraph with the `.lead-section-paragraph` class that highlights the service or product value proposition, also responsive in size.

- **Button Element**: The section features a call-to-action button styled with the `.btn` class, encouraging user engagement with the text "Why Choose Us".



## Clients/Partners Section

The Clients/Partners Section component showcases logos of partnered clients or partners in a responsive slider format using [Swiper.js](https://swiperjs.com/), enhancing the visual appeal of your website and building credibility through displayed partnerships. This may also be used as an image carousel for other purposes. The slider is designed with a mobile-first approach, ensuring a seamless user experience across devices. To implement this component, include the HTML structure within your section, ensuring you specify the desired attributes for customization or use the default settings.

### Key Features

- **Responsive Slider**: The component utilizes Swiper.js to create a responsive slider that adjusts the number of visible slides based on the screen size, ensuring a smooth user experience across devices.

- **Mobile-First Approach**: The slider is designed with a mobile-first approach, meaning the default number of visible slides is specified for smaller screens. As the screen size increases, you can customize the number of visible slides using additional attributes for different breakpoints.

- **Customizable Views**: You can define how many slides to show at various screen widths using the following attributes:
  - `data-slides-per-view`: Sets the number of slides to display on the default size (usually mobile).
  - `data-slides-per-view-sm`: Defines the number of slides for small devices (≥576px).
  - `data-slides-per-view-md`: Defines the number of slides for medium devices (≥768px).
  - `data-slides-per-view-lg`: Defines the number of slides for large devices (≥992px).
  - `data-slides-per-view-xl`: Defines the number of slides for extra-large devices (≥1200px).
  - `data-slides-per-view-xxl`: Defines the number of slides for extra-extra-large devices (≥1400px).

- **Gap Control**: The space between slides can be easily adjusted using the `data-gap` attribute, providing flexibility in layout design.

- **Autoplay Functionality**: The slider features an autoplay function that automatically transitions between slides, enhancing user engagement without requiring interaction.

- **Lazy Loading**: The slider supports lazy loading of images to improve performance and reduce initial loading time, especially beneficial for pages with many images.

- **Pagination**: The component includes pagination controls, allowing users to navigate through the slides efficiently. Pagination dots are clickable, enhancing usability.
