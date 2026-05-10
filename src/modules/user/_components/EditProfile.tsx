import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),

  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be under 50 characters")
    .required("Name is required"),

  bio: Yup.string().max(160, "Bio must be under 160 characters").notRequired(),
});

const EditProfile = () => {
  const [imageList, setImageList] = useState<any[]>([]);

  const formik = useFormik({
    initialValues: {
      username: "@elon",
      name: "elon",
      bio: "#Passionate about building products that solve real problems. Always exploring new ideas, enjoying the process, and staying curious.",
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        images: imageList || "/profile.jpg",
      };
      console.log("Form Data:", formData);
    },
  });

  return (
    <div className="flex flex-col items-center  h-full">
      <form
        onSubmit={formik.handleSubmit}
        className="w-3/5 rounded-2xl bg-purple-300/9  px-4 py-6 space-y-4 mt-10  max-w-xl mx-auto shadow-md shadow-purple-400 "
      >
        {/*profile image*/}
        <div className="flex flex-col items-center  gap-1 ">
          {imageList.length < 2 && (
            <label
              htmlFor="image"
              className="w-20 h-20 rounded-full border  border-purple-400  flex items-center justify-center  cursor-pointer"
            >
              {imageList.length === 1 ? (
                imageList.map((file, idx) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt={`upload-${idx}`}
                    className="w-20 h-20 rounded-full object-cover "
                  />
                ))
              ) : (
                <img
                  src="/profile.jpg"
                  alt="upload"
                  className="w-20 h-20 rounded-full object-cover "
                />
              )}
            </label>
          )}
          <input
            id="image"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setImageList(files);
            }}
          />
          <label
            htmlFor="image"
            className="text-sm font-semibold text-purple-700 hover:text-purple-800"
          >
            Change profile picture
          </label>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:</label>{" "}
          <input
            id="name"
            placeholder="What's on your mind?"
            className="input"
            {...formik.getFieldProps("name")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>{" "}
          <input
            id="username"
            placeholder="What's on your mind?"
            className="input"
            {...formik.getFieldProps("username")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="bio">Bio:</label>{" "}
          <textarea
            id="bio"
            rows={4}
            placeholder="What's on your mind?"
            className="input"
            {...formik.getFieldProps("bio")}
          />
        </div>
        <button type="submit" className="btn-main">
          Add Change
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

{
  /*import React from 'react';
import classNames from 'classnames';

type BadgeVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger' 
  | 'warning' 
  | 'info' 
  | 'light' 
  | 'dark';

type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  className,
}) => {
  const badgeClasses = classNames(
    'badge',
    {
      // Variant classes
      [`bg-${variant}-full`]: true,
      
      // Size variations
      'text-xs py-0.5 px-1': size === 'sm',
      'text-sm py-1 px-2': size === 'md',
      'text-base py-1.5 px-3': size === 'lg',

      // Rounded class
      'rounded-full': rounded,
    },
    className
  );

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
*/
}
