
# NextJS playground

Actually, it's NextJS v14 now. :-D 

- tutorial: [Next js Tutorial for Beginners | Nextjs 13 (App Router) with TypeScript - Programming with Mosh](https://www.youtube.com/watch?v=ZVnjOPwW4ZA&t=602s)

## Getting started 
```
npm i
npm run dev
```

## Ideas

- [ ] GSAP ScrollTrigger
  - https://blog.olivierlarose.com/tutorials/project-gallery-colored-card
  - https://gsap.com/resources/React/
- [ ] Control spline 3D element
- [ ] Insert threejs gtlf model
- [ ] [Add eslint prettier](https://github.com/prettier/eslint-config-prettier)
- [ ] [Connect GraphQL via apollo, fetch CraftCMS data](https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/)
  - [ ] https://www.apollographql.com/blog/community/backend/8-free-to-use-graphql-apis-for-your-projects-and-demos/
- [ ] Add VSCode autoformatting settings for prettier

## How was this created

```
npx create-next-app@latest .
# select all defaults, including new app router

# add prettier
npm install prettier prettier-plugin-tailwindcss --save-dev

# add GSAP
npm install gsap

# add apollo for GraphQL support, see:
# https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/
npm install @apollo/client@rc @apollo/experimental-nextjs-app-support

```
