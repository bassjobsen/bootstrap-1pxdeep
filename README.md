# bootstrap-1pxdeep

1pxdeep integration for [Bootstrap 4](http://v4-alpha.getbootstrap.com/), based on relative color design.

Inspired and based on [1pxdeep - Flat(ish) Bootstrap 3 theme](https://rriepe.github.io/1pxdeep/) by Rex Riepe.


## Manual Setup

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)

To manually set up the tool set, first download it with Git:

```bash
git clone https://github.com/bassjobsen/bootstrap-1pxdeep
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd bootstrap-1pxdeep
npm install
bower install
```

## Customization options

1pxdeep for Bootstrap 4 is designed to be customized via Sass variables. You may customize any Bootstrap or 1pxdeep variable.

The following assumes you have setup your build tools and are building successfully.

If overriding a variable via Sass, ensure that your are `@importing` the underscored file `_core.scss` not the main file used for distributions. For more information see this [StackOverflow post](http://stackoverflow.com/a/25191403/2363935).

Here are some ways to customize:
1. (Recommended) Include the source in your application

Installing via npm (recommended) or bower, customizing 1pxdeep is a breeze.

    - Add `bootstrap-1pxdeep` as a dependency to your `package.json` or your `bower.json`
    - `npm install` OR `bower install` depending on your tool of choice
    - Add either `node_module`s or `bower_components` in the `includePaths` for your grunt-sass, gulp-sass, or equivalent configurations so you are able to import without specifying the full path of the resource.
    - In your application’s SCSS, redefine any customized variable before `@importing` bootstrap-1pxdeep. For example:

```css
$seed-color: tomato;
$wheel_pos1:120; $wheel_pos2:240; $wheel_pos3:0; // Triad

@import "bootstrap-1pxdeep/scss/core"; // make sure to use _core.scss!
```

### SASS
#### Avoid vendor prefixes

Bootstrap-1pxdeep uses Autoprefixer (included in our Gruntfile and build process) to automatically add vendor prefixes to some CSS properties at build time. Autoprefixer is also required to build Bootstrap 4.

## Example theme
Install the [1pxdeep theme for Bootstrap 4](https://github.com/bassjobsen/bootstrap-1pxdeep-theme/) with [bootstrap-cli](https://github.com/bassjobsen/bootstrap-cli/):

Install the Bootstrap CLI with this command:

```bash
npm install bootstrap-cli --global
```

Use this command to set up a 1pxdeep for Bootstrap project with the 1pxdeep template:

```bash
bootstrap new --template 1pxdeep
```

The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.
