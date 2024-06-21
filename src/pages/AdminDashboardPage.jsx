import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Content from "../components/Content";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full max-w-[70%] mx-auto p-2">
        <Navbar />
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Content />
        </DndProvider>
      </div>
    </>
  );
};

export default AdminDashboardPage;
