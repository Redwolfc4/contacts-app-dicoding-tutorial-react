import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import "./css/style.css";

// const element = <h1>Hello, World!</h1>;

const root = createRoot(document.getElementById("root"));
console.log(import.meta.env.MODE); // harus keluar "development"
root.render(<ContactApp />);
