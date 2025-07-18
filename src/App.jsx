import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Main from "./layout/Main";
import Auth from "./layout/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.layout === "main" ? (
                    <Main>
                      <route.component />
                    </Main>
                  ) : (
                    <Auth>
                      <route.component />
                    </Auth>
                  )
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
