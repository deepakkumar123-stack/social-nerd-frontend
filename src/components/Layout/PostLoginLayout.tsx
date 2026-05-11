import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Conversation from "../../modules/chat/_components/Conversation";

const PostLoginLayout = () => {
  return (
    <div className="flex flex-col  px-2 items-center w-full">
      {/* Top Banner */}
      <div className="w-[97.5%] fixed  z-1000 mx-auto mt-1  rounded-3xl flex items-center justify-center text-sm font-medium ">
        <Navbar />
      </div>

      <div className="min-h-screen w-full mb-2  mt-14  flex">
        <div className="hidden w-1/4 mx-2 md:flex flex-col gap-2">
          <Conversation />
          <Footer />
        </div>
        <div className=" bg-[#faf7ff] backdrop-blur-2xl flex-1 mx-2  rounded-3xl shadow-md">
          <Outlet /> {/* Routed page content */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PostLoginLayout;
