import React from "react";
import Course from "../components/Course";
import Kurs from "../components/Kurs";
import WhoIs from "../components/WhoIs";
import Lessons from "../components/Lessons";
import Sale from "../components/Sale";
import OnlineCourse from "../components/OnlineCourse";

const Kurses = () => {
  return (
    <>
      <OnlineCourse />
      <Course />
      <Kurs />
      <WhoIs />
      <Lessons />
      <Sale />
    </>
  );
};

export default Kurses;
