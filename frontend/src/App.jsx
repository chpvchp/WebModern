import { useEffect, useState } from "react";

export default function App() {
  const [profile, setProfile] = useState(null)

  const getProfile = async () => {
    const res = await fetch("http://localhost:8000/profile");
    const data = await res.json();
    setProfile(data);
  };

  useEffect(() => {
    getProfile();
  }, [])

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-100 m-0 p-0 flex justify-center items-center">
        <div className="p-4 bg-white rounded-xl shadow-lg w-80">
          <div className="p-2 flex justify-center items-center border border-gray-400 rounded-xl">
            <h2 className="p-2 font-sans font-bold">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 m-0 p-0 flex justify-center items-center">
      <div className="p-4 bg-white rounded-xl shadow-lg w-80">
        <div className="p-2 flex justify-center items-center border border-gray-400 rounded-xl">
          <h2 className="p-2 font-sans font-bold">{profile.name}</h2>
        </div>

        <div className="mt-2 space-y-2 text-gray-800">
          <div className="flex justify-between">
            <span className="font-medium">Age:</span>
            <span>{profile.age}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Job:</span>
            <span>{profile.job}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Skills:</span>
            <span>{profile.skills}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
