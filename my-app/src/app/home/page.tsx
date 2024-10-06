import React from "react";
import Header from "../_components/header";
import ProjectList from "../_components/list";
import ProjectCreate from "../_components/table";

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <ProjectList />
        <ProjectCreate />
      </main>
    </div>
  );
};

export default Home;
