import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoAdd } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const settings = [
  { name: "Profile", to: "/user/profile" },
  { name: "Account", to: "/" },
  { name: "Reset Password", to: "/user/reset-password" },
  { name: "Logout", to: "/" },
];
const pages = [
  { name: "Home", to: "/" },
  { name: "AddPost", to: "/add-post" },
  { name: "Post", to: "/post" },
];

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        duration: 0.5,
      }}
      className="w-full flex  justify-center "
    >
      <nav
        className={`flex justify-between gap-2 md:gap-20 bg-purple-200/50 border-1 border-purple-500  shadow-xs  rounded-full  items-center    px-1 py-1`}
      >
        {/*app logo*/}
        <div>
          <img
            src="/logo5.png"
            alt="logo"
            className="app-logo "
            onClick={() => setOpen(!open)}
            width={35}
            height={35}
          />
        </div>
        {/*add post button*/}
        {open && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              duration: 0.5,
            }}
          >
            {" "}
            <Tooltip title="share your memory">
              <Link
                to="/add-post"
                className=" p-1 ml-4 rounded-full border border-transparent text-neutral-800 hover:text-purple-600 hover:border-purple-500 hover:shadow-md hover:scale-105 transition-all duration-300 ease-out font-medium flex items-center text-xl "
              >
                {" "}
                <IoAdd />
              </Link>
            </Tooltip>
          </motion.div>
        )}
        {/*posts button*/}
        {open && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              duration: 0.5,
            }}
          >
            {" "}
            <Tooltip title="see your friends memories">
              <Link
                to="/"
                className=" p-1 ml-4 rounded-full border border-transparent text-neutral-800 hover:text-purple-600 hover:border-purple-500 hover:shadow-md hover:scale-105 transition-all duration-300 ease-out font-medium flex items-center text-xl "
              >
                {" "}
                <FaFire />
              </Link>
            </Tooltip>
          </motion.div>
        )}
        {/*menu button*/}
        {open && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              duration: 0.5,
            }}
          >
            <span
              onClick={handleOpenNavMenu}
              className="flex md:hidden justify-center items-center gap-1 text-xl font-semibold"
            >
              <IoMenu />
            </span>
          </motion.div>
        )}
        {/*menu */}
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page, idx) => (
            <MenuItem
              key={idx}
              onClick={handleCloseNavMenu}
              className="menu-slider"
            >
              <Typography sx={{ textAlign: "center", color: "inherit" }}>
                <Link to={page.to}>{page.name}</Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
        {/* <div className="flex gap-4  items-center">
          {pages.map((page, idx) => (
            <Link
              to={page.to}
              key={idx}
              className="max-md:hidden hover:underline hover:text-purple-500"
            >
              {page.name}
            </Link>
          ))}
        </div> */}
        {/*profile img*/}
        {open && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              duration: 0.5,
            }}
          >
            <Tooltip title="Show profile">
              <Avatar
                sx={{ width: 35, height: 35 }}
                onClick={handleOpenUserMenu}
                alt="Remy Sharp"
                src="/profile.jpg"
                className="hover:shadow-lg hover:scale-90 hover:shadow-purple-500 hover:outline-1 hover:outline-purple-600 transition duration-300 ease-in-out"
              />
            </Tooltip>
          </motion.div>
        )}
        {/*menu for profile*/}
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting, idx) => (
            <Link to={setting.to}>
              <MenuItem
                key={idx}
                onClick={handleCloseUserMenu}
                className="menu-slider"
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "inherit",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                  }}
                >
                  {setting.name}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </nav>
    </motion.div>
  );
};
