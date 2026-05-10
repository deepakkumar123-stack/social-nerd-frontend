import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../_validation-schema/validate-auth-schema";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from "react";

export const Register = () => {
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
  const registerForm = useFormik({
    initialValues: {
      email: "",
      username: "",
      fullname: "",
      password: "",
    },
    validationSchema: registerSchema, // Yup validation schema
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted", values);
      resetForm(); // Clear form after submission
    },
  });

  return (
    <>
      <div className="flex max-md:flex-col w-full h-lvh ">
        {/*left side for form */}

        <div className="flex  flex-col items-center justify-center flex-1 m-5">
          {/*heading content*/}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-3xl font-bold italic tracking-tight text-gray-900">
              Register
            </h2>
            <p className="text-xs mt-2 text-gray-600 text-center">
              Sign up to see photos and videos from your friends.
            </p>
          </div>
          {/*form content */}
          <div className="w-72">
            <form
              onSubmit={registerForm.handleSubmit}
              className="flex flex-col gap-1 mt-5"
            >
              <div className="flex flex-col gap-0.5">
                <label htmlFor="email" className="input-label">
                  Full Name:
                </label>

                <input
                  type="text"
                  placeholder="Eg. John Doe"
                  className="input"
                  {...registerForm.getFieldProps("fullname")}
                />

                {registerForm.errors.fullname &&
                  registerForm.touched.fullname && (
                    <p className="input-error">
                      {registerForm.errors.fullname}
                    </p>
                  )}
              </div>

              <div className="flex flex-col gap-0.5">
                <label htmlFor="email" className="input-label">
                  Username:
                </label>

                <input
                  type="text"
                  placeholder="Eg. jaggery.john"
                  className="input"
                  {...registerForm.getFieldProps("username")}
                />

                {registerForm.errors.username &&
                  registerForm.touched.username && (
                    <p className="input-error">
                      {registerForm.errors.username}
                    </p>
                  )}
              </div>
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
                  {...registerForm.getFieldProps("email")}
                />

                {registerForm.errors.email && registerForm.touched.email && (
                  <p className="input-error">{registerForm.errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-0.5">
                <label htmlFor="email" className="input-label">
                  Password:
                </label>
                <div className="relative flex flex-col gap-0.5">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    className="input"
                    {...registerForm.getFieldProps("password")}
                  />
                  {/*Toggle icon to show password*/}
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events">
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
                {registerForm.errors.password &&
                  registerForm.touched.password && (
                    <p className="input-error">
                      {registerForm.errors.password}
                    </p>
                  )}
              </div>

              <button type="submit" className="btn-main">
                Register
              </button>
            </form>
            {/*Link to go login*/}
            <p className="mt-4 text-center text-sm/6 text-gray-500">
              Have an account?{" "}
              <Link
                to="/auth/login"
                className="font-semibold text-purple-600 hover:text-purple-500"
              >
                Login
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
