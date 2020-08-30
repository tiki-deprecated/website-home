Frontend
===========
A simple [Nuxt](https://nuxtjs.org) project configured for static site generation with git 
managed CMS.

## Run
``npm install``
##### Static Site
``npm run generate``
##### Optional Debugging
``npm run dev``

## CMS
See [Nuxt Content Module] (https://content.nuxtjs.org/) for 
implementation specifics. 

- 1 YAML file per configurable page
- Primarily content focused (a few UI configs)
- Disable components by setting YAML field to null

## Global Styles
Components are provided 2 global style files [theme.sass](assets/styles/theme.sass)
and [_mixins.scss](assets/styles/_mixins.scss). Mixins provide media 
queries to components. Theme specifies default colors and fonts for the
project. 
