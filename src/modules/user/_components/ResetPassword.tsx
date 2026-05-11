const ResetPassword = () => {
  return (
    <div className="flex justify-center  ">
      <div className="px-5 py-5  w-1/2 bg-purple-100  gap-2 flex flex-col items-center mt-15 shadow-md shadow-purple-400 rounded-2xl ">
        <h1 className="text-3xl font-semibold text-neutral-700">
          Reset Password
        </h1>
        <form className="w-3/4 flex flex-col gap-2 px-2 py-4 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="newpassword" className="text-neutral-600 text-sm">
              New Password:
            </label>{" "}
            <input
              id="newpassword"
              type="password"
              placeholder="new password"
              className="input-secondary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirmpassword"
              className="text-neutral-600 text-sm"
            >
              Confirm Password:
            </label>{" "}
            <input
              id="confirmpassword"
              type="password"
              placeholder="Re-enter password"
              className="input-secondary"
            />
          </div>

          <button type="submit" className="btn-main">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
