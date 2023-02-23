import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const notify = () => toast.error('พอแล้วจ้า!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const countDown = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      notify()
    }
  }
  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount(initialCount)}>Reset</button>
      <button className="btn" onClick={() => countDown()}>-</button>
      <button className="btn" onClick={() => setCount(count + 1)}>+</button>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
