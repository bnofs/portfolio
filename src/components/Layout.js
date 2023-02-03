import React from "react";
import "../styles/index.scss";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query Projects {
      allContentfulProject(sort: { order: ASC }) {
        nodes {
          title
          content {
            content
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProject.nodes;
  console.log(projects);

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="size-400-bold">Brendan Nofs</div>
        <div className="size-200-regular">UX Designer</div>
        <div className="sidebar-items">
          <Link to="/" className="sidebar-item" activeClassName="active">
            Home
          </Link>
          <Link to="/skills" className="sidebar-item" activeClassName="active">
            Skills & Experience
          </Link>
          <Link
            to="/projects"
            className="sidebar-item"
            activeClassName="active"
          >
            Projects
          </Link>
          {projects.map((project) => (
            <Link
              to={
                "/projects/" +
                project.title.toLowerCase().replace(/\s/g, "-") +
                "/"
              }
              className="sidebar-item-child"
              activeClassName="active"
            >
              {project.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="main-content-wrapper">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
