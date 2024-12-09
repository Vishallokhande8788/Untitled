import React from "react";
import { createRoot } from "react-dom/client";
import {IconBrandGithub,IconBrandLinkedin} from '@tabler/icons-react';
import "./index.css";


const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <Home/> 
    <Duster/>
  </React.StrictMode>,
);

function Duster() {
  return (
    <h1 className="cursor-pointer text-2xl font-bold text-zinc-900 hover:text-red-800 md:text-4xl">
      Hello World <IconBrandGithub /><IconBrandLinkedin />
    </h1>
  );
}
