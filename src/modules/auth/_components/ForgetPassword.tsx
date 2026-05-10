import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";

export const ForgetPassword = () => {
  return (
    <>
      <div className="flex justify-center items-center h-lvh w-lvw bg-purple-100 ">
        <div className=" flex flex-col w-1/3 p-4 justify-center items-center gap-2 shadow-xl shadow-neutral-100 rounded-lg bg-white ">
          <span className="text-4xl p-2 rounded-full border border-purple-500 text-purple-500">
            <CiLock />
          </span>
          <h1 className="text-xl font-semibold">Trouble Logging In?</h1>
          <p className="text-xs text-center">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>

          <div className="w-full flex flex-col gap-4">
            {/*Form for send link to email*/}
            <form>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="username or email"
                  autoComplete="email"
                  className="input-secondary"
                />
              </div>

              <button type="submit" className="btn-main">
                Send Link
              </button>
            </form>
            {/* Divider between email/password login and Google login */}
            <div className="flex items-center my-1">
              <div className="flex-1 border-t border-purple-400"></div>
              <span className="px-4 text-purple-400 font-medium text-xs">
                OR
              </span>
              <div className="flex-1 border-t border-purple-400"></div>
            </div>
          </div>
          {/*link to back login*/}
          <Link
            to="/auth/login"
            className="text-xs text-purple-500 hover:text-purple-600"
          >
            Back to login
          </Link>
        </div>
      </div>
    </>
  );
};
