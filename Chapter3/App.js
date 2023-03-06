import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/logo.png';

//  Nested header element with h1,h2,h3 using React.createElement()
const header1 = React.createElement("h1", { id: "header1" }, "Learning react ");
const header2 = React.createElement(
  "h2",
  { id: "header2" },
  "This Chapters is explain about laying the foundation"
);
const header3 = React.createElement(
  "h3",
  { id: "header3" },
  "Dive deep information about jsx"
);
const container = React.createElement("div", { id: "contianer" }, [
  header1,
  header2,
  header3,
]);

// Nested header element by using jsx like h1,h2,h3 with container
const header_element = (
  <div id="contianer" className="container_card">
    <h1>Learning react with 🙏 React</h1>
    <h2>This Chapter completely aboyt laying out foundation</h2>
    <h3>Dive Deep information about JSX</h3>
  </div>
);

//  Nested header element with h1,h2,h3 using JSX React Element and pass attributes
const header_with_attr = (
  <div id="container" className="contianer_card">
    <h1>
      Learning react with{" "}
      <a href="https://learn.namastedev.com">🙏 React Course</a>{" "}
    </h1>
    <h2 className="header2">
      <strong>Chapter:3 </strong>
      This Chapter completely aboyt laying out foundation
    </h2>
    <h3>Dive Deep information about JSX</h3>
  </div>
);

// Nested header element with h1,h2,h3 using Functional Component
const Title = () => (
  <div id="container_title" className="contianer_card">
    <h1>
      Learning react with{" "}
      <a href="https://learn.namastedev.com">🙏 React Course</a>{" "}
    </h1>
    <h2 className="header2">
      <strong>Chapter:3 </strong> This Chapter completely aboyt laying out
      foundation
    </h2>
    <h3>Dive Deep information about JSX</h3>
  </div>
);

const Header = () => (
  <div className="header_style">
    <img src={logo} alt="brand-logo" width={80} />
    <input type="text" placeholder="search" className="input_control"  />
    <i class="fas fa-user user_icon" ></i>
  </div>
);
//  Composition Component
const Nested = () => (
  <div>
    <Header />
    <Title />
    <Title ></Title>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nested />);
