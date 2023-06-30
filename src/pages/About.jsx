import React from "react";
import Course from "../components/Course";
import Kurs from "../components/Kurs";
import WhoIs from "../components/whoIs";
import Lessons from "../components/lessons";
import Sale from "../components/Sale";
import OnlineCourse from "../components/OnlineCourse";

const About = () => {
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

export default About;
