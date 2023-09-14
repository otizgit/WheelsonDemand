import React, { useEffect, useContext } from "react";
import SectionHeader from "../components/UI/SectionHeader";
import LatestBlog from "../components/UI/LatestBlog";
import { ToggleContext } from "../App";

export default function Blog() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(true);
    document.title = "WheelsonDemand - Blogs"
  }, []);
  return (
    <div>
      <SectionHeader title="BLOGS" />
      <LatestBlog displayHeader="true" />
    </div>
  );
}
