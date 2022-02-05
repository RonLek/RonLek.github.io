<h1 align="center">
  Rohan Lekhwani
</h1>

## Note

__If you're not interesting in i18n, use [StaticQueryVersion](https://github.com/thundermiracle/gatsby-startbootstrap-agency/tree/StaticQueryVersion) instead. StaticQueryVersion gets better performance and better code structure.__

## How to use

This project is using `yarn` as the package manager. You have to set yarn as Gatsby-cli's package manager first.

[https://www.gatsbyjs.com/docs/glossary/yarn/#using-yarn-as-your-gatsby-package-manager](https://www.gatsbyjs.com/docs/glossary/yarn/#using-yarn-as-your-gatsby-package-manager)

```sh
npm install -g gatsby-cli

gatsby new my-blog-folder https://github.com/thundermiracle/gatsby-startbootstrap-agency
```

## Basic Configuration

- `iconName` in Services.md MUST be defined in `'config/CustomIcons.jsx'`.

- `imageFileName` in markdown MUST be added in `'content/assets'`.

- all configurable contents are saved in markdown files in `'content'` folder.

- change `file name's number` in `'content/sections'` folder to change the sort order.

- nullable items (if defined):
  
  - `anchor` in section markdown: display in menu if defined in sections' markdown
  - items in `social`: `twitter, facebook, linkedin, github, medium`
  - `jumpToAnchor, jumpToAnchorText` in Top.md: add button in Top section

## i18n Configuration

- set defaultLang in `'config/site.js'`

- add langTextMap to `'config/site.js'` (LanguageSelector won't display if langTextMap is not defined. Consider using [StaticQueryVersion](#note) if i18n is not necessary)

- copy markdown files in `'content'` folder, rename it to `xxxx.[langKey].md` and translate the contents

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
