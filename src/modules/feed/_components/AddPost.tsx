import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { IoIosClose } from "react-icons/io";
const validationSchema = Yup.object({
  caption: Yup.string()
    .required("Caption is required")
    .max(500, "Caption must be under 500 characters"),
  images: Yup.array().min(1, "At least one image is required"),
  video: Yup.mixed().notRequired(),
});

const AddPost = () => {
  const [imageList, setImageList] = useState<any[]>([]);
  const [videoFile, setVideoFile] = useState<any>(null);

  const formik = useFormik({
    initialValues: {
      caption: "",
      images: [],
      video: null,
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const formData = {
        ...values,
        images: imageList,
        video: videoFile,
      };
      console.log("Form Data:", formData);
      resetForm();
      setImageList([]);
      setVideoFile(null);
    },
  });
  const toggle = () => {
    setVideoFile("");
  };

  return (
    <div className="p-4 w-full min-h-screen flex flex-col items-center ">
      <h1 className="text-2xl font-semibold text-neutral-800">
        Share a Memory
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-3/5 flex flex-col gap-2 px-4 py-1 "
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="caption">Caption</label>{" "}
          <textarea
            id="caption"
            placeholder="What's on your mind?"
            className="input"
            {...formik.getFieldProps("caption")}
          />
          {formik.touched.caption && formik.errors.caption && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.caption}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Images</label>{" "}
          {imageList.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {imageList.map((file, idx) => (
                <div className="relative">
                  <button
                    className="absolute top-0 right-0 z-10 text-2xl text-white bg-black/50 rounded-full  hover:bg-black/70"
                    onClick={() => {
                      setImageList((prev) => prev.filter((_, i) => i !== idx));
                    }}
                  >
                    <IoIosClose />
                  </button>
                  <img
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt={`upload-${idx}`}
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          )}
          {imageList.length < 2 && (
            <label
              htmlFor="image"
              className="w-40 h-40 border border-dashed border-purple-400 rounded-lg flex items-center justify-center text-sm text-purple-600 cursor-pointer hover:bg-purple-50"
            >
              {imageList.length === 1
                ? imageList.map((file, idx) => (
                    <img
                      key={idx}
                      src={URL.createObjectURL(file)}
                      alt={`upload-${idx}`}
                      className="w-40 h-40 object-cover rounded"
                    />
                  ))
                : "Click to upload image"}
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
              formik.setFieldValue("images", files);
            }}
          />
          {formik.touched.images && formik.errors.images && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.images}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="video">Video</label>
          {videoFile && (
            <div className="relative max-w-md">
              <button
                className="absolute top-2 right-2 z-10 text-2xl text-white bg-black/50 rounded-full p-1 hover:bg-black/70"
                onClick={toggle}
              >
                <IoIosClose />
              </button>
              <video
                controls
                src={URL.createObjectURL(videoFile)}
                className="w-full  mt-2 rounded"
              />
            </div>
          )}
          {!videoFile && (
            <label
              htmlFor="video"
              className="cursor-pointer border border-dashed border-purple-400 rounded p-2 text-center text-sm text-purple-700 hover:bg-purple-50 hover:border-purple-600"
            >
              Click to upload video (MP4, WebM)
            </label>
          )}
          <input
            id="video"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setVideoFile(file);
              formik.setFieldValue("video", file);
            }}
          />
          {formik.touched.video && formik.errors.video && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.video}
            </div>
          )}
        </div>

        <button type="submit" className="btn-main">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
