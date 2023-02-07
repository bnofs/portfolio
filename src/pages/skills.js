import { Link } from "@reach/router";
import * as React from "react";
import Layout from "../components/Layout";

const SkillsPage = () => {
  return (
    <Layout>
      <div className="page-header">
        <h1>Skills & Experience</h1>
        <p>
          At 25 years old, I have about five years of experience working on
          enterprise UI's. I started off my career more technical as a front-end
          developer before quickly transitioning into design, before even more
          recently specializing in design systems.
        </p>
      </div>
      <hr />

      <div>
        <h2>Current</h2>
        <div className="experience-card">
          <div className="nielsen-logo" />
          <h3>Product Designer, Design Systems</h3>
          <p>
            In this role, I have become a <b>design system specialist</b>. I
            consider myself an expert in <b>Figma</b>, building a library of
            over 40 reusable components for our team of designers to increase
            their efficiency.{" "}
            <Link to="/projects/advanced-component-building/">
              View Project
            </Link>
          </p>
          <p>
            A system built on <b>atomic design</b> as well as having firm
            guidance on meeting with <b>accessibility</b> guidelines (WCAG 2.2
            AA), we first started with extremely thought out foundations before
            even getting into components.{" "}
            <Link to="/projects/design-system-foundations/">View Project</Link>
          </p>
          <p>
            I also constructed an entire documentation website for the design
            system, built with <b>Gatsby</b> & <b>Contentful</b>, to house all
            of the information for our system.{" "}
            <Link to="/projects/nielsen-design-system-website/">
              View Project
            </Link>
          </p>
        </div>
        <h2>Previous</h2>
        <div className="experience-card">
          <div className="nielsen-logo" />

          <h3>UX Designer</h3>
          <p>
            In this role, I worked in several different teams as a designer for
            individual products. I sharpened my skills as a visual designer and
            was able to get a lot of practice makin <b>wireframes</b>,{" "}
            <b>user flows</b>, and <b>prototyping</b> in Figma.
            <Link to="/projects/nielsen-media-portal/">View Project</Link>
          </p>
        </div>
        <div className="experience-card">
          <div className="imgur-logo"></div>
          <h3>Product/Engineering Intern</h3>
          <p>
            The first part of my role involved front-end development, creating a
            number of features for the web platform Imgur.
            <Link to="/projects/meh-vote-development/">View Project</Link>
          </p>
          <p>
            I also served in a product role, where developed my skills for
            higher-level thinking, and used my technical knowledge to help solve
            problems.
            <Link to="/projects/imgur-subscription-model/">View Project</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;

export const Head = () => <title>Brendan Nofs Portfolio</title>;
