import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import "./App.css";
import { Fragment } from "react";

function App() {
    return (
        <Fragment>
            <Header />
            <main className="container">
                <MainComponent />
            </main>
        </Fragment>
    );
}

export default App;
