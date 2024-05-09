import {
  Authenticated,
  GitHubBanner,
  Refine,
  WelcomePage,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider, liveProvider } from "./providers";

import { App as AntdApp } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import routerProvider, { CatchAllNavigate } from "@refinedev/react-router-v6";
import { ForgotPassword, Home, Login, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerProvider}
                authProvider={authProvider}
                // resources={[
                //   {
                //     name: "blog_posts",
                //     list: "/blog-posts",
                //     create: "/blog-posts/create",
                //     edit: "/blog-posts/edit/:id",
                //     show: "/blog-posts/show/:id",
                //     meta: {
                //       canDelete: true,
                //     },
                //   },
                //   {
                //     name: "categories",
                //     list: "/categories",
                //     create: "/categories/create",
                //     edit: "/categories/edit/:id",
                //     show: "/categories/show/:id",
                //     meta: {
                //       canDelete: true,
                //     },
                //   },
                // ]}
                // options={{
                //   syncWithLocation: true,
                //   warnWhenUnsavedChanges: true,
                //   useNewQueryKeys: true,
                //   projectId: "ViEt42-zzEY9e-jaZBo4",
                //   liveMode: "auto",
                // }}
              >
                <Routes>
                  <Route index element={<WelcomePage />} />
                  <Route index element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />

                  <Route
                    element={
                      <Authenticated
                        key="authenticated-layout"
                        fallback={
                          <CatchAllNavigate to="/login"></CatchAllNavigate>
                        }
                      ></Authenticated>
                    }
                  ></Route>
                </Routes>

                <RefineKbar />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
