# Introduction of React empowered by VITE.
- Using the vite instead of the create react app is kind of fast loading app of react 
- For it we use the following command :-
    * npm create vite@latest
    * cd (fileName)
    * npm i
    * npm run dev


# Rules in The React.
- We should always close the element in a react app no matter it is self closing or closing tags.
    * < img type="text"/>
    * < p>lorem< /p>
- Always add the wrapper in a return statement of the react app.
-  index.css
<Purpose: Global styles>

- Use it for:

- Reset styles (e.g., * { margin: 0; padding: 0; })

- Base typography (e.g., body font, line height)

- Root layout styles (body, html, etc.)

- Global variables (if using CSS variables)

- Scrollbar, selection, and anchor tag styling

- Loaded in: Usually imported in index.js or main.jsx.

# Components
- ALways create the custom files in a components Folder which also make it a cleaner code.

- Use className instead of the class in jsx to apply css in it you can do so....

# Concept of the props.
- we can add the props which we can directly access it using react jsx. eg. in a Main we will do this < Main title="eg10"/ >
Bsically we are prodiving data from one place to another.


![alt text](image-2.png)

![alt text](image-1.png)


# Using the width height and inline css in react elements.

- using the mostly every attribute are same written as the in normal css eg. width="255" height="150" or width={333} height={150}
- But in case of the inline css we have to use {} this instead of using "" as a string. eg style={{overflow:"hidden",border: "2px solid red"}}; < ul style={{border: "2px solid green",color: "gray"}} > we say we are using style in jsx inside of which we create a js object  
