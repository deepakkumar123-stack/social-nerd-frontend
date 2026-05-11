import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router-dom";
import { Login } from "../modules/auth/_components/Login";
import { Register } from "../modules/auth/_components/Register";
import { ForgetPassword } from "../modules/auth/_components/ForgetPassword";

const PreLoginLayout = lazy(
  () => import("../components/layout/PreLoginLayout")
);

const SuspensedView = ({ children }: React.PropsWithChildren) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-lvh">
        <img src="/loading.gif" alt="loading...." width="200" height="200" />
      </div>
    }
  >
    {children}
  </Suspense>
);

const PreLoginLayoutRoute = () => {
  return (
    <Route
      path="/auth"
      element={
        <SuspensedView>
          <PreLoginLayout />
        </SuspensedView>
      }
    >
      <Route index element={<Navigate to="login" />} />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<ForgetPassword />} path="forget-password" />
    </Route>
  );
};

export default PreLoginLayoutRoute;
