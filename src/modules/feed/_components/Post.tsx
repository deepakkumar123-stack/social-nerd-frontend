// External imports
import Avatar from "@mui/material/Avatar";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import Popover from "@mui/material/Popover";
import { VscReply } from "react-icons/vsc";
import { COMMENTS } from "../@mock/comment.mock";
import { ReactionType } from "../@enum/reaction.enum";
import { motion } from "framer-motion";

const Post = () => {
  // Reactions that can be selected

  const [reaction, setReaction] = useState<string[]>([
    ReactionType.Happy,
    ReactionType.Love,
    ReactionType.Angry,
    ReactionType.Like,
    ReactionType.Sad,
  ]);
  const [reactionCount, setReactionCount] = useState(20); // Default like count
  const [comment, setComment] = useState(""); // Current input comment text
  const [comments, setComments] = useState<CommentType[]>(COMMENTS); // All comments
  const [isOpen, setIsOpen] = useState(false); // Toggle for report menu
  const [showAll, setShowAll] = useState(true); // Toggle for showing all comments
  const inputRef = useRef<HTMLInputElement>(null); // Ref to focus the comment input
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null); // Anchor for popover
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null); // Track selected emoji
  const [activeReplyIndex, setActiveReplyIndex] = useState<number | null>(null); // Toggle reply input per comment
  const [replyInput, setReplyInput] = useState("");
  const [sekleton, setSekleton] = useState(false);

  const now = new Date(); // Get current time for timestamp
  useEffect(() => {
    setInterval(() => setSekleton(true), 1000);
  }, []);

  // Add new comment to list
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newComment: CommentType = {
      _id: `comment_${Date.now()}`,
      userImg: "/profile.jpg",
      user: "you",
      createdAt: `${now.getHours()}.${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
      comment,
    };
    setComments((prev) => [newComment, ...prev]); // Add new comment to top
    setComment(""); // Clear input
  };

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ scale: 1, y: -8 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        duration: 0.5,
      }}
      className="flex justify-center py-2  items-center"
    >
      <div className="flex bg-purple-500/20 rounded-2xl h-full w-full">
        {/* Left section: post image */}
        {!sekleton && (
          <div className="flex-1 animate-pulse">
            <div className="h-125 w-full rounded-s-2xl skeleton-wave" />
          </div>
        )}
        {sekleton && (
          <div className="flex-1">
            <img
              src="https://ix-marketing.imgix.net/focalpoint.png?auto=format,compress&w=1946"
              alt="img"
              className="h-125 rounded-s-2xl object-cover w-full"
            />
          </div>
        )}

        {/* Right section: post content and interactions */}
        <div className="flex-1 w-full flex flex-col">
          {/* Post header: user avatar and username */}
          <div className="flex gap-2 justify-between items-center bg-neutral-300/32 backdrop-blur-2xl  px-2 py-1 rounded-tr-2xl w-full">
            <span className="flex gap-2 items-center text-neutral-800 font-semibold text-lg">
              {!sekleton && (
                <div className="animate-pulse">
                  <div className="h-10 w-10 rounded-full skeleton-wave" />
                </div>
              )}
              {sekleton && <Avatar alt="Remy Sharp" src="/profile.jpg" />}
              {!sekleton ? (
                <div className="animate-pulse">
                  <div className="h-6 w-35 bg-gray-700 rounded-lg skeleton-wave" />
                </div>
              ) : (
                "@elon"
              )}
            </span>

            {/* 3-dot menu for report */}
            <div className="relative">
              <button onClick={() => setIsOpen(!isOpen)}>
                <PiDotsThreeOutlineVerticalLight className="cursor-pointer" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-30 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  <ul className="py-1 text-sm text-gray-700">
                    <li
                      className="px-4 py-1 hover:bg-purple-100 cursor-pointer flex items-center gap-1"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <MdReportProblem /> Report
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Caption under post */}
          <div className="flex justify-center items-center px-2">
            {!sekleton ? (
              <div className="animate-pulse h-12 py-2 w-full">
                <div className="h-8 w-full bg-gray-700 rounded-lg py-2" />
              </div>
            ) : (
              <p className="text-center text-neutral-600 text-[1rem] py-2">
                the quality or combination of qualities that pleases the senses
                and evokes a sense of pleasure, admiration, or delight
              </p>
            )}
          </div>

          <div className="border-b-1 border-purple-50"></div>

          {/* Reaction and comment buttons */}
          <div className="flex w-full">
            {/* Reaction button with emoji popover */}
            <div className="flex-1 justify-center items-center gap-2 p-1 flex border-r-1 border-purple-50 text-neutral-700">
              <button
                className="text-2xl hover:scale-120 transition-all duration-300 ease-out"
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                {selectedReaction ? selectedReaction : <FaRegThumbsUp />}
              </button>
              {reactionCount}
              {/* Emoji selection popover */}
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => {
                  setAnchorEl(null);
                }}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <ul className="flex text-xl p-1 gap-1">
                  {reaction.map((react, index) => (
                    <li
                      key={index}
                      className="hover:scale-140 transition-all cursor-pointer duration-200 ease-out"
                      onClick={() => {
                        setSelectedReaction((prev) => {
                          const isSame = prev === react;
                          if (isSame) {
                            setReactionCount((prev) => prev - 1);
                            return null;
                          } else setReactionCount((prev) => prev + 1);
                          return react;
                        });
                        setAnchorEl(null);
                      }}
                    >
                      {react}
                    </li>
                  ))}
                </ul>
              </Popover>
            </div>

            {/* Comment icon and count */}
            <div
              className="flex-1 justify-center items-center gap-2 p-1 flex text-neutral-700"
              onClick={() => inputRef.current?.focus()}
            >
              <button className="text-2xl hover:scale-120 transition-all duration-300 ease-out">
                <FaRegComment />
              </button>
              {comments.length}
            </div>
          </div>

          <div className="border-b-1 border-purple-50"></div>

          {/* Comment display section */}
          <div className="py-1">
            <h1 className=" py-1 font-semibold flex justify-center items-center">
              comments
            </h1>
            <ul
              className={`px-2 ${
                showAll
                  ? "h-[230px] overflow-y-hidden"
                  : "h-[250px] overflow-y-auto scroll-smooth transparent-scrollbar"
              } rounded-md`}
            >
              {comments.map((c, index) => (
                <li
                  key={index}
                  className="flex gap-2 px-1 py-1 text-neutral-800"
                >
                  {!sekleton ? (
                    <div className="animate-pulse">
                      <div className="h-6 w-6 rounded-full skeleton-wave" />
                    </div>
                  ) : (
                    <span>
                      <Avatar
                        alt="User"
                        src={c.userImg}
                        sx={{ width: 24, height: 24 }}
                      />
                    </span>
                  )}

                  {!sekleton ? (
                    <div className="animate-pulse w-full">
                      <div className="h-10 w-3/4 bg-gray-700 rounded-lg skeleton-wave" />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      {/* Comment content */}
                      <div className="bg-purple-400/36 rounded-2xl px-2 py-2 text-xs max-w-[300px]">
                        <p className="text-xs font-semibold">@{c.user}</p>
                        <p className="text-xs">{c.comment}</p>
                      </div>
                      {/* Timestamp and reply */}
                      <div className="flex gap-2 px-2">
                        <span className="text-xs">{c.createdAt}</span>
                        <button
                          type="button"
                          className="flex gap-1  items-center text-xs font-semibold text-start text-neutral-800 hover:underline"
                          onClick={() => {
                            setActiveReplyIndex((prev) =>
                              prev === index ? null : index
                            );
                          }}
                        >
                          <VscReply /> Reply
                        </button>
                      </div>
                      {/* Reply input shown if active */}
                      {activeReplyIndex === index && (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}
                          className="relative flex items-center"
                        >
                          <input
                            type="text"
                            value={replyInput}
                            onChange={(e) => setReplyInput(e.target.value)}
                            placeholder="Write a reply..."
                            className="px-3 py-1 text-xs w-full rounded-2xl outline-none ring-1 ring-purple-300 focus:ring-purple-500 pr-8"
                          />
                          <button
                            type="submit"
                            className="absolute right-2 text-purple-300 hover:text-purple-500"
                          >
                            <IoSendOutline />
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Toggle comment view */}
            {comments.length > 3 && (
              <div className="px-5 font-medium text-xs">
                <button
                  type="button"
                  className="text-xs font-medium text-neutral-800 hover:underline"
                  onClick={() => setShowAll(!showAll)}
                >
                  {!showAll ? "Show less" : "Show more"}
                </button>
              </div>
            )}
          </div>

          {/* Comment input form */}
          <form
            onSubmit={handleSubmit}
            className="py-2 px-3 flex items-center gap-2 relative"
          >
            <input
              type="text"
              value={comment}
              ref={inputRef}
              placeholder="Add comment....."
              onChange={(e) => setComment(e.target.value)}
              className="px-2 pr-7 py-1 text-xs w-full rounded-2xl outline-0 ring-1 ring-purple-300 focus:ring-purple-500 hover:ring-purple-400"
            />
            <button
              type="submit"
              className="cursor-pointer absolute right-3 px-1 text-purple-300 hover:text-purple-500"
            >
              <IoSendOutline />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
