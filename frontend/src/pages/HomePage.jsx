import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome to the simple POS for Tabiano store small busines</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          esse consequuntur tempora nesciunt? Obcaecati magni molestiae id
          debitis natus! Et vero sunt ratione aperiam nostrum, numquam est atque
          modi delectus? Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>If you have an issue, call 911-000-xxxx anytimes</p>
        <Link to="/pos" className="btn btn-primary">
          Click here to sell products
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
