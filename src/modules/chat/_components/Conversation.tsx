import Avatar from "@mui/material/Avatar";
import { Users } from "../@mock/conversation.mock";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Conversation = () => {
  const [selectedId, setSelectedId] = useState<String | null>(null);
  return (
    <div className="h-full p-1 rounded-3xl bg-[#faf7ff] hidden md:flex flex-col  shadow-md">
      {/* Header */}
      <div className="flex items-center gap-2 font-semibold text-lg px-5 py-4 border-b border-neutral-200 text-purple-900">
        <AiOutlineMessage className="text-xl" />
        <span>Chats</span>
      </div>

      {/* User List */}
      <div className="overflow-y-auto flex-1">
        <ul className="flex flex-col divide-y divide-purple-200">
          {Users.map((c) => (
            <Link to={`/chat/${c._id}`} key={c._id}>
              <div
                onClick={() => setSelectedId(c._id)}
                className={`flex gap-3 items-start px-4 py-3 cursor-pointer transition-all  ${
                  selectedId === c._id
                    ? "bg-purple-200"
                    : "hover:bg-purple-100/70"
                }`}
              >
                <Avatar alt={c.name} src={c.profileImg} />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-neutral-900">
                      {c.name}
                    </span>
                    <span className="text-xs text-neutral-500">{c.time}</span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-700 line-clamp-1">
                    {c.lastMessage}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Conversation;
