import { useState } from "react";

function Cart() {
  const [items, setItems] = useState([{ id: 1, name: "Shirt", qty: 1 }]);
  
  const handleIncrement = (id) => {
    const item = items.find((item) => item.id === id);
    item.qty++; // Direct mutation!
    setItems(items); // Won't trigger re-render
  };
}


// import useState from react library 