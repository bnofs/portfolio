import React from "react";
import "../styles/index.scss";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

  function toggleMenu() {
    console.log("CLICKED");
    let menu = document.getElementById("mobile-nav");
    menu.classList.toggle("d-none");
  }

  return (
    <div className="app-container">
      <div className="sidebar d-none d-lg-flex">
        <div className="bio-pic"></div>
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
      <div className="hamburger-menu d-lg-none" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
      </div>
      <div id="mobile-nav" className="d-none">
        <div className="sidebar d-flex">
          <div className="bio-pic"></div>
          <div className="size-400-bold">Brendan Nofs</div>
          <div className="size-200-regular">UX Designer</div>
          <div className="sidebar-items">
            <Link to="/" className="sidebar-item" activeClassName="active">
              Home
            </Link>
            <Link
              to="/skills"
              className="sidebar-item"
              activeClassName="active"
            >
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
      </div>
      <div className="main-content-wrapper">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
