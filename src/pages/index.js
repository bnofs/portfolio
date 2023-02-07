import * as React from "react";
import Layout from "../components/Layout";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="banner">
        <div className="banner-box">
          <div className="size-500-bold">Hey, I'm Brendan!</div>
          <div className="size-300-regular">
            {" "}
            I design (and code) design systems. This is a showcase of some of
            the work that I've accomplished over the past couple of years as a
            UX Designer.
          </div>
        </div>
      </div>
      <div className="content-section bio">
        <h2>About Me</h2>
        <p>
          As a design system specialist, I pride myself on being able to see the
          entire picture before diving into a task. I think long-term and build
          strong foundations that are resilient to change. I have extensive
          experience with Figma and helped build out an entire design system
          from scratch, and strongly support the use of atomic design
          principles. Working with design systems has taught me to always think
          of a scalable solution, not just the quickest or easiest.{" "}
        </p>
        <p>
          I also do a bit of coding, which I studied in college and have used in
          each of my roles over the past 5 years.. but I prefer to keep that as
          my secret weapon.{" "}
        </p>
        <p>
          Outside of work, I'm a vegan endurance athlete with strong interests
          in sustainability and personal finance. My wife and I run an social
          account called{" "}
          <a href="https://www.instagram.com/oatletes/" target="_blank">
            {" "}
            The Oatletes
          </a>{" "}
          if you're interested in some good vegan eats or workout tips! Hit me
          up if you want to chat!
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Brendan Nofs Portfolio</title>;
