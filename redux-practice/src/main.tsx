import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PersistProvider from "./store/providers/PersistProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistProvider>
    <App />
  </PersistProvider>
);
