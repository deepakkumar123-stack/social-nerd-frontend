import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "../_validation-schema/validate-auth-schema";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from "react";

export const Login = () => {
  // Toggle to show or hide password input when the eye icon is clicked
  const [showPassword, setShowPassword] = useState(false);
  // Function to toggle the password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // // Prevent default behavior
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Initialize Formik for form handling and validation
  const initialValues = {
    email: "",
    password: "",
  };

  const loginForm = useFormik({
    initialValues,
    validationSchema: loginSchema, // Yup validation schema
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted", values);
      resetForm(); // Clear form after submission
    },
  });

  return (
    <>
      <div className="flex max-md:flex-col w-full h-lvh">
        {/*left side for form */}
        <div className="flex  flex-col items-center justify-center flex-1 m-5">
          {/*heading content*/}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" mt-5 text-center text-3xl font-bold italic tracking-tight text-gray-900">
              Login
            </h2>
            <p className="text-xs mt-2 text-gray-600 text-center">
              Log in to continue and see what your friends are sharing.
            </p>
          </div>
          {/*form */}
          <div className="w-72">
            <form
              onSubmit={loginForm.handleSubmit}
              className="flex flex-col gap-1 mt-5"
            >
              <div className="flex flex-col gap-0.5">
                <label htmlFor="email" className="input-label">
                  Email:
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  autoComplete="email"
                  className="input"
                  {...loginForm.getFieldProps("email")}
                />

                {loginForm.errors.email && loginForm.touched.email && (
                  <p className="input-error">{loginForm.errors.email}</p>
                )}
              </div>
              {/*Password Field*/}
              <div>
                <div className="flex  my-1 justify-between">
                  <label htmlFor="password" className="input-label">
                    Password:
                  </label>
                  <div className="text-xs">
                    <Link
                      to="/auth/forget-password"
                      className="font-semibold text-purple-500 hover:text-purple-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="relative flex flex-col gap-0.5">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    className="input"
                    {...loginForm.getFieldProps("password")}
                  />
                  {/*Toggle icon for password view*/}
                  <div
                    className="absolute inset-y-0 right-0 pr-3 
                    flex items-center 
                    pointer-events"
                  >
                    <i
                      className="cursor-pointer text-gray-400"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {!showPassword ? (
                        <MdOutlineVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </i>
                  </div>
                </div>
                {loginForm.errors.password && loginForm.touched.password && (
                  <p className="text-xs px-1 text-red-400">
                    {loginForm.errors.password}
                  </p>
                )}
              </div>

              <div>
                <button type="submit" className="btn-main">
                  Login
                </button>
              </div>
            </form>
            {/*Link to go login*/}
            <p className="mt-5 text-center text-sm/6 text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="font-semibold text-purple-600 hover:text-purple-500"
              >
                Register
              </Link>
            </p>
            {/* Divider between email/password login and Google login */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-purple-400"></div>
              <span className="px-4 text-purple-400 font-medium text-lg">
                or
              </span>
              <div className="flex-1 border-t border-purple-400"></div>
            </div>

            {/* Google login button */}
            <button className="btn-google">
              <FcGoogle className="text-xs" />
              Login with Google
            </button>
          </div>
        </div>

        {/*right side for image*/}
        <div className="flex flex-1 justify-center  items-center">
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=248&fit=crop&auto=format&dpr=2"
            alt="social-nerd"
            className="w-3/10 h-3/7 -rotate-4 z-1 border-2 border-purple-500 relative left-15 rounded-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=248&fit=crop&auto=format&dpr=2"
            alt="s-2"
            className="w-3/8 h-3/6 z-3  border-2 border-purple-500 -left-5 shadow-2xl shadow-purple-600 rounded-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=248&fit=crop&auto=format&dpr=2"
            alt="social-nerd"
            className="w-3/10 h-3/7 rotate-4 z-2 border-2 border-purple-500 relative right-15 rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
