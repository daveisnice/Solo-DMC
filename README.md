# Solo

Solo is a minimal theme for [Ghost](https://github.com/TryGhost/Ghost) focused on showcasing the work of an individual writer or creator. This theme is not Solo, which I would recommend using, but an extremely janky off-shoot worked on by some dickhead with a film and media studies degree. I'm sorry.

**Live Demo: https://daveisnice.com**

# Instructions

1. Suffer.
2. [Download this instead](https://github.com/TryGhost/Solo/archive/main.zip)
3. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/solo.zip`, which you can then upload to your site.

```bash
pnpm zip
```

### Theme translations

Please see the @Tryghost/Themes/theme-translations/README.md for how to edit or contribute translations.

# Copyright & License

Copyright (c) 2013-2026 Ghost Foundation - Released under the [MIT license](LICENSE).
