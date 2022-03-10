import "./index.scss";
import ReactDOM from "react-dom";
import Main from "./Main";
import List from "./List";
import Header from "./Header";

const topics = [1, 2, 3, 4, 5, 6];

function Lista() {
  return (
    <div>
      <Header text="Instagram" />
      <Main text="REACT" />
      <List topics={topics} />
    </div>
  );
}

const listaReact = Lista();
const elemento = document.querySelector(".root");
ReactDOM.render(listaReact, elemento);
