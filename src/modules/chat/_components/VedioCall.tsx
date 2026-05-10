import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
const VedioCall = () => {
  const [mute, setMute] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl bg-neutral-800 rounded-3xl mx-auto h-[80vh] my-10 shadow-lg p-6 relative">
      <div className="mb-6 flex-1 flex items-center">
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <div className="w-20 h-30 z-50 bg-neutral-700 absolute right-5 bottom-15 "></div>

      <div className="flex items-center justify-center gap-6">
        {/* Video Call Button */}
        <button
          className="p-3 rounded-full bg-white text-purple-600 shadow-md hover:bg-purple-100 transition"
          title="Start Video"
        >
          <MdVideoCall size={28} />
        </button>

        {/* Mute Toggle */}
        <button
          className="p-3 rounded-full bg-white text-purple-600 shadow-md hover:bg-purple-100 transition"
          onClick={() => setMute(!mute)}
          title={mute ? "Unmute" : "Mute"}
        >
          {mute ? <BsFillMicFill size={24} /> : <BsFillMicMuteFill size={24} />}
        </button>

        {/* End Call Button */}
        <button
          className="p-3 rounded-full bg-red-500 text-white shadow-md hover:bg-red-600 transition"
          title="End Call"
        >
          <MdCallEnd size={28} />
        </button>
      </div>
    </div>
  );
};
export default VedioCall;
