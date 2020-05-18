---
path: '/gatsby-1'
cover: '../2020-05-16/emilia.jpg'
date: '2020-05-16'
title: 'The Gatsby Project Structure. Part One: Passing and Querying Data'
tags: ['gatsby', 'markdown', 'emotion.js']
published: true
featured: true
---

Hello, welcome to my first post on jojonicho.wtf. In this article, I will be documenting how I made this website using Gatsby!

## Gatsby's folder structure

- **layout** - The structure of your website. If you've ever dangled with Django, then this should be familiar in many ways. You specify "blocks" such as the navbar, content, and footer and then define them all in index.js

```jsx
layout / index.jsx;
export { default as NavBar } from './NavBar';
export { default as Content } from './Content';
export { default as Footer } from './Footer';
```
- **components** - Necessity for any react app for reusable components.
- **posts** - Gatsby will recognize this folder and generate all it's javascript files and map it to /filename endpoint on your site. `index.js` is your homepage.
- **static** - Markdown data, etc. Generally you want to split types of data by folders as it will make your lives much easier.

## Short and Consice description of Gatsby's file structure and important files
- **gatsby-config.js** - PLUGINS! Some of the plugins I use are `gatsby-source-filesystem` which will be used when querying markdown files and make it available through graphql. `gatsby-transformer-remark` which creates the `allMarkDownRemark` node to query markdown.
- **gatsby-node.js** - Query necessary data from graphql such as this blog entry and map it into templates using the createPage API. You might've noticed the word node mentioned several times, basically it is the naming convention for graphql endpoints (graph has nodes).
- **gatsby-browser.js** - here is where you specify the theme of your page, usually using ThemeProvider and also initializing global css using your favorite css-in-js library.

## Things I learned while building this blog (so that you don't have to google it yourself)
**Creating Pages**

First of all, you need a .md file. The code snippet below will create the `path`, `title`, `tags`, and `published` node.
```md
---
path: "/jojonicho"
title: "jojonicho.wtf"
tags: ['gatsby', 'markdown', 'emotion.js', graphQL]
published: true
---
```
Try experimenting queries using the built in `Graphiql` `http://localhost:8000/___graphql`. We simply grab the path, title, and tags defined from our markdown.
```js
gatsby-node.js
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
```
After the GraphQL query, we can use `createPage` to magically create our pages! This function takes in `path`, `component` to render to, and also `context` which you can use to pass in the queried data from above.
```js
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;
        
        //create posts
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
            },
          });
        });
      })
    );
  });
};
```
**GraphQL Queries from Pages Component**

**Aliasing**

If you need multiple queries inside a components, `aliasing` is what you need. Simply name each query and a custom named node will be created.
```js
export const query = graphql`
  query {
    posts: allMarkdownRemark( ...
    projects: allMarkdownRemark( ...
`;
```

**Filtering**

Filtering comes in really handy when in this case i have two queries, `posts` and `projects`. As i stated before, `splitting your static files by type is a must` as you can filter it using the `fileAbsolutePath` param and using regex to filter the exact folder you want.
```js
export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(posts)/" }
        frontmatter: { featured: { eq: true } }
      }
    ) 
`;
```

**Passing Data to Our Component**

We can use object destructuring for the `data` node inside the parameters of our functional component.
```js
const Index = ({ data }) => {
    const posts = data.posts.edges;
    const projects = data.projects.edges;
}
```

Now you have a fully functional blog created through Markdown content and displayed by Gatsby using GraphQL!

![cool squirtle](https://images-ext-1.discordapp.net/external/VRp_nRYeDVeWrvZJK7ySxIOhK6FAtwfWKmrOFB3Fees/https/imgur.com/OM52HE1.gif)

Stay tuned for part 2 where I will be discussing about styling and theming using emotion.js!

Song recommendation of the day: Last Stardust by [Aimer](https://www.aimer-web.jp/).