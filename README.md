# Solo

Solo is a minimal theme for [Ghost](https://github.com/TryGhost/Ghost) focused on showcasing the work of an individual writer or creator. This theme is not Solo, which I would reccomend using, but an extremely janky off-shoot worked on by some dickhead with a film and media studies degree. I'm sorry.

**Demo: https://daveisnice.com**

# Instructions

1. Suffer.
2. [Download this instead](https://github.com/TryGhost/Solo/archive/main.zip)
3. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/solo.zip`, which you can then upload to your site.

```bash
yarn zip
```

# Contribution

This repo is synced automatically with [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

## Copyright & License

Copyright (c) 2013-2025 Ghost Foundation - Released under the [MIT license](LICENSE).
