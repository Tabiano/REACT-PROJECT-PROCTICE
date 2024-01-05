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
        <br />
        <h1>MISSION & VISION :</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
          doloribus unde dolor cupiditate, dolore cumque adipisci eaque officiis
          deserunt beatae veritatis incidunt ullam nulla perferendis voluptatem
          explicabo quis nisi voluptates. Voluptates aperiam dicta ratione
          dolore atque adipisci quo, quasi eveniet rem ullam, fuga provident,
          accusantium veritatis quae a quas nisi? Fuga facere ratione
          repudiandae nesciunt optio voluptate doloribus nisi eum. Nihil odit,
          sequi quibusdam qui consequuntur aut blanditiis, atque officia
          commodi, id enim natus! Eveniet delectus aspernatur nihil aperiam.
          Sequi at est repellendus deleniti ratione vitae necessitatibus
          nesciunt iste ad. Sed quasi ipsam voluptate, distinctio sint
          reprehenderit minus consequatur nesciunt maiores ut quae itaque
          sapiente blanditiis, quidem, illo dolorum natus! Eaque suscipit
          dolores a aspernatur, quidem itaque ratione eligendi delectus. Sit id
          possimus enim ab sunt vel deserunt rem, aperiam illum doloremque
          corrupti voluptatum reprehenderit commodi ipsam repudiandae iste!
          Velit reiciendis ex quaerat delectus labore cum facere dignissimos
          laborum dolores.
        </p>
        <p>If you have an issue, call 911-000-xxxx anytimes</p>
        <Link to="/pos" className="btn btn-primary">
          Click here to view products
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
