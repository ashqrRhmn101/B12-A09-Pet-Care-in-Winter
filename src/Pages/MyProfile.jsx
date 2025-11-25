import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const MyProfile = () => {
  const { user, setUser, userPhotoURL } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

// Update Profile Name & photoUrl
    userPhotoURL({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-base-100 rounded-lg shadow-md text-center">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-4 text-[#303082]">My Profile</h2>

      <img
        src={
          user?.photoURL ||
          "https://img.icons8.com/?size=100&id=u05i13Fgasru&format=png&color=000000"
        }
        alt="User"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border"
      />

      <h3 className="text-lg font-semibold mb-1">
        Name: {user?.displayName || "Anonymous User"}
      </h3>
      <p className="text-gray-600 mb-4">
        Email: {user?.email || "No email available"}
      </p>

      <form onSubmit={handleUpdateProfile} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Your Name"
            required
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="Your Photo Url"
            required
          />

          <button type="submit" className="btn bg-[#303082] hover:bg-[#F7A703] text-white mt-4">
            Update Profile
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default MyProfile;
