import { createHashRouter } from "react-router";
import CaseStudy from "./components/CaseStudy";

export const router = createHashRouter([
  {
    path: "/",
    Component: CaseStudy,
  },
]);
