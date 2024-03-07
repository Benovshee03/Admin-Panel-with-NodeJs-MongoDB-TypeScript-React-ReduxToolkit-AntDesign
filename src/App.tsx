import React, { useEffect, useRef, useState } from "react";
// import Router from "./components/Router";
import io, { Socket } from "socket.io-client";
import AppConsts from "./library/Appconsts";
import Router from "./components/Router";

const App: React.FC = () => {
  const [categories, setCategories] = useState([] as any[]);
  const [newCategory, setNewCategory] = useState("");
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(AppConsts.remoteSocketServiceBaseUrl as string);
    socket.current.on("categoryAdded", (category) => {
      setCategories((prevCategories) => [...prevCategories, category]);
    });

    return () => {
      socket.current!.disconnect();
    };
  }, []);

  const handleAddCategory = () => {
    if (socket.current) {
      // Sunucuya yeni kategori ekleme isteği gönder
      socket.current.emit("addCategory", newCategory);
      setNewCategory("");
    }
  };
  return (
    <>
    <Router/>
    </>
    // <div>
    //   <input
    //     type="text"
    //     value={newCategory}
    //     onChange={(e) => setNewCategory(e.target.value)}
    //   />
    //   <button onClick={handleAddCategory}>Kategori Ekle</button>
    //   <ul>
    //     {categories.map((category, index) => (
    //       <li key={index}>{category}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default App;