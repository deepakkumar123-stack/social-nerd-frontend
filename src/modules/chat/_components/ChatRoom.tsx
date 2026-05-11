import Avatar from "@mui/material/Avatar";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { MdOutlineCall } from "react-icons/md";
import { FaSmile, FaVideo } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Link, useParams } from "react-router-dom";
import { Users } from "../@mock/conversation.mock";

const ChatRoom = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<String[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const { _id = "" } = useParams();
  const user = Users.find((u) => u._id === _id);

  if (!user) return <div>User not found</div>;
  const handleEmojiSelect = (emoji: any) => {
    if (inputRef.current) {
      inputRef.current.value += emoji.native || emoji; // emoji might be an object or string
    }
  };
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current?.value.trim()) {
      console.log(inputRef.current.value, messages);
      const message = inputRef.current.value;
      setMessages((prev) => [...prev, message]);
      inputRef.current.value = "";
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      return;
    }

    const reader = new FileReader();

    setMessages((prev) => [...prev, reader.result as string]);
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/*header of chatroom*/}
      <div className=" rounded-t-3xl bg-purple-500 border-b border-purple-300 py-1.5 px-2 flex items-center justify-between shadow-sm sticky top-0 z-10">
        {/*profile picture and usename*/}
        <div className="flex items-center gap-2 text-lg text-neutral-100 font-semibold">
          <Avatar
            alt="Remy Sharp"
            src={user.profileImg}
            className="outline-1 outline-purple-400 "
          />
          <span>{user.name}</span>
        </div>
        {/*icons */}
        <div className="flex gap-6 text-neutral-100 text-xl  ">
          <Link to={"/call/vedio"}>
            <FaVideo className=" hover:text-purple-50 transition-all duration-300 ease-linear hover:scale-115 cursor-pointer" />
          </Link>
          <Link to={"/call/voice"}>
            <MdOutlineCall className=" hover:text-purple-50 transition-all duration-300 ease-linear hover:scale-115 cursor-pointer" />
          </Link>

          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>
              <PiDotsThreeOutlineVerticalLight className="hover:text-purple-50 transition-all duration-300 ease-linear hover:scale-115 cursor-pointer" />{" "}
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-30 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                <ul className="py-1 text-sm text-gray-700">
                  <li
                    className="px-4 py-1 hover:bg-purple-100 cursor-pointer flex items-center gap-1"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setMessages([]);
                    }}
                  >
                    Delete Chats
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*chat message */}
      <div className=" flex-1 overflow-y-auto px-6 py-4 space-y-3 flex flex-col scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        {messages.map((msg, idx) => {
          return (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white self-end max-w-[85%] lg:max-w-[60%] break-words px-4 py-1 rounded-2xl"
            >
              <p className="text-sm sm:text-base">{msg}</p>
              <div className="flex  justify-end  mt-1">
                <span className={`text-[.6rem] text-purple-100 `}>
                  {timeString}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/*emoji selection*/}
      {showEmojiPicker && (
        <Picker
          data={data}
          theme="light"
          onEmojiSelect={handleEmojiSelect}
          previewPosition="none"
        />
      )}
      {/*message input*/}
      <div className="bg-white border-t rounded-b-3xl border-gray-200 px-6 py-2 sticky bottom-0 z-10">
        <div onSubmit={handleSubmit} className="flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-purple-600"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaSmile size={20} />
          </button>
          <label className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-500 hover:text-purple-600">
            <FaFileImage size={20} />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </label>
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 items-center w-full"
          >
            <input
              ref={inputRef}
              className="input w-full"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className={`p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600
            transition-colors shadow-md`}
            >
              <IoMdSend size={18} />
            </button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
