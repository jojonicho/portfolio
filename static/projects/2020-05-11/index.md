---
path: "/gatsby-1"
cover: "../2020-05-11/emilia.png"
date: "2020-05-13"
title: "The Gatsby Project Structure"
tags: ['gatsby', 'markdown', 'emotion.js']
published: true
featured: true
---

Hello, my name is Jonathan Nicholas and this will be my first post on jojonicho.wtf. In this article, I will be documenting how I made this website using Gatsby!

# Gatsby's file structure and important files
1. gatsby-node.js - here is where we query data from graphql such as this blog entry and map it into templates using the createPage API.
2. gatsby-browser.js - here is where you specify the theme of your page, usually using ThemeProvider and also initializing global css.
3. layout - here is where you define the structure of your website. If you've ever dangled with Django, then this should be familiar in many ways. You specify "blocks" such as the navbar, content, and footer and then define them all in index.js

```jsx
layout/index.jsx
export { default as NavBar } from './NavBar';
export { default as Content } from './Content';
export { default as Footer } from './Footer';
```
to be continued!