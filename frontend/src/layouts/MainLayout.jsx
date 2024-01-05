import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout({ children }) {
  return (
    <div>
      <header className="sticky-top">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              KopikoNi<span>Tabs</span>
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-3">{children}</div>
        <ToastContainer
          position="top-right"
          autoClose={400}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    </div>
  );
}

export default MainLayout;
