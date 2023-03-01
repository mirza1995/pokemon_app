# Pokemon application in React, Typescript using Vite
Dummy application I made to practice Typescript and Tailwind. The application uses Pokemon API for data and is fully responsive on all devices. I also wrote a couple of unit, integration and snapshot tests using Jest. 

Currently, user APIs are not working since I used backend server in order to enable user creation and login. All the logic around that should be easy to fix by just passing correct API url and if necessary, change response handling a bit based on output from server.

## Technology Stack
- React
- Typescript
- React redux
- Tailwind
- Vite
- Jest

## Getting Started

### Required versions

##### npm version: 8+
##### node.js version: 14.18+

### Install

Install dependencies.

```bash
npm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Typecheck

```bash
npm run typecheck
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```


## Things to implement:
1. Search on front page.
2. Pagination on front page.
3. Clickable pokemon card.
4. Pokemons page.
5. Sightings page.
6. Favorites page.
7. Create Layouts for better consistency in styles through pages.