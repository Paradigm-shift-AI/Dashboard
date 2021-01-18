import React from "react";

const CourseContext = React.createContext("Hello");

export const CourseProvider = CourseContext.Provider;

export default CourseContext;