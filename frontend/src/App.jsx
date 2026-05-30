import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  const getHello = async () => {
    const res = await fetch("http://localhost:8000/hello");
    const data = await res.json();
    console.log(data)
    setMessage(data.message);
  };

  useEffect(() => {
    getHello();
  }, []);

  return (
    <div>
      <h1>Gọi Backend</h1>
      <p>{message}</p>
    </div>
  );
}
