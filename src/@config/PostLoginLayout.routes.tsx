import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Home from "../components/layout/Home";
import Post from "../modules/feed/_components/Post";
import AddPost from "../modules/feed/_components/AddPost";
import ChatRoom from "../modules/chat/_components/ChatRoom";
import Profile from "../modules/user/_components/Profile";
import EditProfile from "../modules/user/_components/EditProfile";
import ResetPassword from "../modules/user/_components/ResetPassword";
import VoiceCall from "../modules/chat/_components/VoiceCall";
import VedioCall from "../modules/chat/_components/VedioCall";

const PostLoginLayout = lazy(
  () => import("../components/layout/PostLoginLayout")
);
const SuspensedView = ({ children }: React.PropsWithChildren) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center  w-full h-lvh">
        <img src="/loading.gif" alt="loading...." width="200" height="200" />
      </div>
    }
  >
    {children}
  </Suspense>
);

const PostLoginLayoutRoutes = () => {
  return (
    <Route
      path="/"
      element={
        <SuspensedView>
          <PostLoginLayout />
        </SuspensedView>
      }
    >
      <Route element={<Home />} path="/home" />
      <Route element={<Profile />} path="/user/profile" />
      <Route element={<EditProfile />} path="/user/profile/:_id" />
      <Route element={<ResetPassword />} path="/user/reset-password" />
      <Route index element={<Post />} path="/" />
      <Route element={<AddPost />} path="/add-post" />
      <Route element={<ChatRoom />} path="/chat/:_id" />
      <Route element={<VoiceCall />} path="/call/voice" />
      <Route element={<VedioCall />} path="/call/vedio" />
    </Route>
  );
};

export default PostLoginLayoutRoutes;
