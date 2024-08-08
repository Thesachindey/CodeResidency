## SETTING UP TAILWIND CSS 
## 1. To setup "PostCSS" with "vite". run this commands
```
1. npm init -y 
// This initializes the directory as a NodeJs project
```

```
2. npm install -D tailwindcss postcss autoprefixer vite 
// installs required packages tailwindcss
```
```
3.npx tailwindcss init -p
```

```
4. Create a css file "input.css", add it to your html and edit it with this content:

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
5. In your tailwind.config.js file replace content: [], with content: ["*"],
```

```
6. Add "start": vite" to your scripts in package.json
```

```
7. Run [npm run start] command to start a dev server
```

## 2. Deploying a Tailwindcss Website with VITE
## Write this commands in a package.json

## NOTE : this is most compact and easy way
```
"scripts": {

    "start": "vite",

    "build":"vite build"

  },

  now run this command : npm run build
```

## 1. YouTube tailwind playlist - codeWithHarry
## 2. - Procoder BD