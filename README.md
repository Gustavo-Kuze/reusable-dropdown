# Reusable React Dropdown Test

A simple reusable React JS dropdown written with TypeScript.

____

**NOTE**: This component has been developed for a coding challenge and is not production ready. 

Feel free to clone and modify this repository but keep in mind this **is not production ready code**.

____


## Getting started

1. Install the project dependencies

```
npm i
```

2. Start the project

```
npm start
```

## Inspecting the code

- The `Dropdown` component is located inside the components directory

```
src\components\Dropdown\index.tsx
```

- The styling is being managed by the `styled-components` lib and you can find it in a file called `styledComponents.tsx` on each component folder

- Eslint and Prettier are configured in this project to ensure code quality
- The `Dropdown` component is being instantiated at the `App` component as well as the loaded property values

## Some final thoughts

It would be much better to upload the `Dropdown` component as a npm module so It's easier to implement it in other React projects. But since this is a time limited coding challenge I decided to leave it inside the project structure.

I actually have a React component library which I uploaded to NPM 3 years ago:

[react-floating-action-button](https://www.npmjs.com/package/react-floating-action-button)

And also I made a [full video](https://www.youtube.com/watch?v=TwLwSg_uMAY&ab_channel=Kuze) (in Portuguese) explaining how I did it 😉

