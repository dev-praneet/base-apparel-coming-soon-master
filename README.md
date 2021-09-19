# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [To know further](#to-know-further)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot_desktop.png)



### Links

- [Solution URL](https://github.com/geeky-amat/base-apparel-coming-soon-master)
- [Live Site URL](https://geeky-amat.github.io/base-apparel-coming-soon-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

- Got a lot more comfortable working with .svg files by importing them directly as react components. Understood the difference between viewPort and viewBox and used this concept to appropriately resize the .svg logo without clipping any part of it.
- Learnt to use the useEffect hook but used it for a simple case. Got a better idea of the reason for using useEffect hook rather than useState hook in case I want to log something after a state change.
- Got some idea of difference between 'mount', 'render', 're-render' and 'DOM update'.
- Learnt a lot more about working of css grid.

### To know further

- After importing .svg file as a React component, how am I able to pass attributes which is possible in a React element? Probably the answer could be that the attributes are passed as props itself but .svg is imported in such a way that the props are used to define the corresponding attributes with the provided value under the hood.

- Similar as above is the case with 'Input' component in the Form.js file. How am I simply able to pass the onClick handler while rendering the component and it is able to interpret it as a click event rather than a prop? There is certainly something about the react components that I don't understand cleary.

- This probably has something to do with the components created using 'styled-components' because both the cases discussed above are created using 'styled-components', the .svg one implicitly and the Input component explicitly. I remember passing className as attribute in a react component which was not created using 'styled-documents' and it was being passed as prop rather than as the attribute 'className'.

### Useful resources

- [What are SVG viewport and viewBox?](https://www.youtube.com/watch?v=TBYJ2V1jAlA) - This helped me understand the difference between viewPort and viewBox.
- [Difference between DOM update and re-render](https://stackoverflow.com/questions/67947808/difference-between-dom-update-and-re-render)
- [React: "mount" vs "render"?](https://reacttraining.com/blog/mount-vs-render/)


## Author

- Frontend Mentor - [@geeky-amat](https://www.frontendmentor.io/profile/geeky-amat)
- Twitter - [@GeekyAmat](https://www.twitter.com/GeekyAmat)