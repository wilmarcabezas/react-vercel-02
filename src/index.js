import ReactDOM from "react-dom/client";
import { Data } from "./components/Data";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        Hola Despliegue en la Nube (ahora estoy en Railway):
        <hr/>
        <Data/>
    </>
)