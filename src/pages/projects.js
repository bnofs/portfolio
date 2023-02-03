import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Link } from "@reach/router";

export default function ProjectPage({ data }) {
  const projects = data.allContentfulProject.nodes;

  return (
    <Layout>
      <h1>Projects</h1>
      <div className="project-card-list">
        {projects.map((project) => (
          <Link
            to={
              "/projects/" +
              project.title.toLowerCase().replace(/\s/g, "-") +
              "/"
            }
          >
            <div className="project-card">
              <img src={project.thumbnail.file.url} />
              <div className="title"> {project.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const ProjectNames = graphql`
  query ProjectsList {
    allContentfulProject(sort: { order: ASC }) {
      nodes {
        title
        thumbnail {
          file {
            url
          }
        }
        content {
          content
        }
      }
    }
  }
`;

export const Head = () => <title>Brendan Nofs Portfolio</title>;
