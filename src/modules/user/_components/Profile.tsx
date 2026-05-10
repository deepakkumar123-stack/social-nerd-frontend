import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { RiUserFollowLine } from "react-icons/ri";
import { MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";

const avatarUrls = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&h=200&w=200",
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const tabs = ["Posts", "Friends"];

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        duration: 1,
      }}
    >
      <div>
        {/*profile header*/}
        <div className="px-6 pt-6 pb-2  flex ">
          {/*Avatar*/}
          <div className="flex gap-2">
            {/*profile picture*/}
            <Badge
              color="success"
              overlap="circular"
              variant="dot"
              sx={{ width: 80, height: 80 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar
                sx={{ width: 80, height: 80 }}
                alt="Remy Sharp"
                src="/profile.jpg"
                className=" bg-purple-100"
              />
            </Badge>
          </div>

          {/* Info + Actions */}
          <div className=" flex flex-col justify-start w-full gap-2">
            {/*info*/}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-3">
              {/*username and email*/}
              <div className="flex-col flex">
                <span className="font-semibold text-gray-800 text-2xl">
                  @elon
                  <Chip
                    variant="outlined"
                    label="public"
                    size="small"
                    color="primary"
                    icon={<MdPublic />}
                    sx={{
                      fontWeight: 300,
                      fontSize: 10,
                      borderRadius: 1,
                      padding: 1,
                    }} // Light font
                    className="ml-4"
                  />
                </span>
                <span className=" text-gray-500 px-1 text-sm ">
                  elon@123gmail.com
                </span>
              </div>
              {/*buttons of msg,setting,edit,follow*/}
              <div className="flex gap-2 mt-2 md:mt-0">
                {/*message button*/}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-800 hover:text-purple-600 hover:border-purple-500 hover:shadow-md transition-all duration-300 ease-out font-medium flex items-center gap-1">
                    <LuMessageCircleMore className="w-5 h-5 text-purple-500" />
                    <span className="text-sm tracking-wide">Message</span>
                  </button>
                </motion.div>
                {/*follow button*/}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-800 hover:text-purple-600 hover:border-purple-500 hover:shadow-md transition-all duration-300 ease-out font-medium flex items-center gap-1">
                    <RiUserFollowLine className="w-5 h-5 text-purple-500" />
                    <span className="text-sm tracking-wide">Follow</span>
                  </button>
                </motion.div>
                {/*edit button*/}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to=":_id"
                    className=" p-2 rounded-full border border-neutral-300 text-neutral-800 hover:text-purple-600 hover:border-purple-500 hover:shadow-md  transition-all duration-300 ease-out font-medium flex items-center "
                  >
                    {" "}
                    <CiEdit />
                  </Link>
                </motion.div>
                {/*setting*/}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className=" p-2 rounded-full border border-neutral-300 text-neutral-700 hover:text-purple-600 hover:border-purple-500 hover:shadow-md hover:scale-105 transition-all duration-300 ease-out font-medium flex items-center ">
                    {" "}
                    <IoSettingsOutline />
                  </button>
                </motion.div>
              </div>
            </div>
            {/*bio*/}
            <div className=" rounded-xl w-full max-w-md  px-4 ">
              <p className="text-gray-700 text-sm leading-relaxed break-words">
                #Passionate about building products that solve real problems.
                Always exploring new ideas, enjoying the process, and staying
                curious.
              </p>
            </div>

            {/*friends ,post ,mutual*/}
            <div className="flex gap-6 mt-4 px-4">
              <button
                onClick={() => setActiveTab("Posts")}
                className="flex flex-col items-center text-neutral-700 font-medium"
              >
                5<span className="text-neutral-500">Posts</span>
              </button>

              <button
                onClick={() => setActiveTab("Friends")}
                className="flex flex-col items-center text-neutral-700 font-medium"
              >
                5 <span className="text-neutral-500">Friends</span>
              </button>

              <span className="flex flex-col items-center text-neutral-700 font-medium">
                5 <span className="text-neutral-500">Mutuals</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-neutral-200 px-4">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-purple-600"
                    : "text-neutral-500 hover:text-purple-500"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-purple-600 rounded-full transition-all duration-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/*Friends list*/}
        {activeTab === "Friends" && (
          <div className="p-4">
            <motion.div
              className="border border-gray-100 rounded-2xl p-4 w-sm hover:border-purple-300  shadow-md hover:bg-purple-50 transition-all bg-white   flex justify-between  "
              whileHover={{ y: -3 }}
            >
              <div className="flex gap-2">
                <Avatar
                  alt="Remy Sharp"
                  src="/profile.jpg"
                  className=" bg-purple-100"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">@elon</span>
                  <span className="text-xs text-gray-500 ">Active</span>
                </div>{" "}
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-4 py-1.5 rounded-full border border-neutral-300 text-neutral-800 hover:text-purple-500 hover:border-purple-500 hover:shadow-md transition-all duration-300 ease-out font-medium flex items-center gap-1">
                    <RiUserFollowLine className="w-5 h-5 text-purple-500" />
                    <span className="text-sm tracking-wide">Follow</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
        {/* User Posts */}
        {activeTab === "Posts" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 py-2">
            {avatarUrls.map((img, index) => (
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,

                  damping: 64,
                  duration: 0.5,
                }}
                key={index}
                className="rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-all"
              >
                <img
                  src={img}
                  alt={`Post ${index + 1}`}
                  className="w-full aspect-square "
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;
