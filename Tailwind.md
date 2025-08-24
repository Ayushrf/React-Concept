# Tailwind CSS Installation with Vite

This guide walks you through setting up **Tailwind CSS** as a plugin in a project using **Vite**, using instructions directly from the official Tailwind documentation :contentReference[oaicite:0]{index=0}.

---
## 1. Create Your Vite Project

If you don’t already have a Vite project, you can create one using the following command:

```bash
npm create vite@latest my-project
cd my-project
```
## 2. Install the npm tailwind package. 
```bash
npm install tailwindcss @tailwindcss/vite
```
## 3. Specifically in vite.config file.
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
## 4. In your CSS file (e.g., src/style.css), import Tailwind using:
```bash
@import "tailwindcss";
```
## 5. Execute the environment.
```bash
npm run dev
