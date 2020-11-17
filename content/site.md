# About this site

This (static, client-only) site is created using a stack of:

* [Gatsby](https://www.gatsbyjs.com/)
  * Uses [GraphQL](https://graphql.org/) to query for the timeline entries, and access the page content written in [Markdown](https://www.markdownguide.org/basic-syntax#overview).
* [React](https://reactjs.org/)
  * Mostly functional components with [hooks](https://reactjs.org/docs/hooks-intro.html).
* [Typescript](https://www.typescriptlang.org/) 
* [Netlify CMS](https://www.netlifycms.org/)
  * Uses the github repo as a datastore for Markdown content files, editable from within the site directly. 
* [SASS](https://sass-lang.com/)
* [Yarn 2](https://yarnpkg.com/)
  * Allows us to create a [zero-install](https://next.yarnpkg.com/features/zero-installs) repo, which can be immediately built without any setup commands after checkout.
* [FontAwesome](https://fontawesome.com/)
* [Typography.js](https://kyleamathews.github.io/typography.js/)
* [ESLint](https://eslint.org/)

And it is hosted on [Netlify](https://www.netlify.com/) with continuous deployment from the [GitHub repo](https://github.com/NicholasMTElliott/nicholasmtelliott).

Really, I wanted to experiment with static site generators (such as Gatsby) and headless CMS engines (such as Netlify CMS), and this provided a great excuse!

I didn't use any design libraries (such as material-ui or ant design) to keep the complexity low.  I did lean heavily on flex layout, with the occasional css grid.


