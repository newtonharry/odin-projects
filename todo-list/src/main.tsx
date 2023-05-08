import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Inbox from "./pages/Inbox";
import Project from "./pages/Project";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="inbox" element={<Inbox />} />
          <Route path="today" element={<Today />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="projects">
            <Route path=":projectId" element={<Project />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
