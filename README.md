# Maria Christina Castillejo – Portfolio (React + Vite)

## Run it on your computer
1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:

```
npm install
npm run dev
```

3. Open the address it shows (usually http://localhost:5173).

## Edit your details
Open `src/data.js`. Change your name, email, skills, experience, and projects there.
The page updates automatically while `npm run dev` is running.

## Project structure
```
index.html
package.json
vite.config.js
src/
  main.jsx            starts React
  App.jsx             the page sections
  data.js             YOUR details (edit this)
  styles.css          colors, sidebar, layout, light/dark mode
  components/
    Sidebar.jsx       left sidebar + active link
    Diagnostic.jsx    "How I troubleshoot" panel
    Project.jsx       one project card
```

## Put it online (free)
Run `npm run build`. This creates a `dist` folder.
Upload `dist` to Netlify Drop, or connect this project to Vercel or GitHub Pages.

## Troubleshooting (Windows)
Error: "An Application Control policy has blocked this file" (rollup .node file)
Windows is blocking a native file. This project already uses the WebAssembly version of
rollup (see "overrides" in package.json) to avoid it. If you installed before this fix:
1. Delete the `node_modules` folder and `package-lock.json`.
2. Run `npm install` again, then `npm run dev`.
If another file (like esbuild.exe) is blocked, use the no-install version of the portfolio
(the index.html + app.js folder), or ask your IT admin to allow it.
