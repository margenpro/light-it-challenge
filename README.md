## Patient Management App
This application serves as a management system for a Clinic's patients, to have a friendly UI that handles all its patient's data in one place.

## Project technology stack
-  React 18
-  Typescript
-  Tailwind CSS

## Run the project locally

First, install all dependencies:

```bash
npm install
# or
yarn 
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Project structure
    .
    ├── src
    │   ├── components
    │   │       │──────── atoms
    │   │       │──────── molecules
    │   │       |──────── organisms
    |   |       └── ... 
    │   ├── hooks
    │   │       │──────── usePatientData.tsx
    │   ├── icons
    │   │       │──────── icon_logo.tsx
    │   │       │──────── index.tsx
    │   │       └── ...
    │   ├── types
    │   │       │──────── patient.ts
    │   ├── utils
    │   └── ...
    │
    ├── node_modules
    ├── package.json
    ├── README.md
    └── ...

## Architecture

Above is the general structure of the Patient Management App. This application tries to follow the "Atomic Design Pattern" ([Codeburst article](https://codeburst.io/atomic-design-with-react-e7aea8152957)). The components directory will contain basic to complex components that contributes to the main_container of the Patient Management app.

Most of the UI components are pure React-TailwindCSS built, trying to avoid using third party libraries (such us Material UI, Chakra UI, Ant Design or others). By taking this approach, we ensure that all the components are fully controlled by the development team and it is easier to match any UI designs in that way.
Third party libraries been used:
- react-toastify: UI used as notification system to the user.
- react-tooltip: UI to add valuable information to the user.
- react-feather: Main component wrapped in `atoms` folder in combination with the `icons` one. This is a kind of pattern I use to follow for using the most popular icons on the market, but also been able to add our custom svg icons and still be fully customizable.
