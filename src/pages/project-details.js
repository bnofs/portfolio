import * as React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  const { title, content, description } = data.contentfulProject;

  return (
    <Layout>
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <hr />
      <ReactMarkdown className="markdown-content">
        {content !== null && content.content}
      </ReactMarkdown>
    </Layout>
  );
}

export const ProjectNames = graphql`
  query ProjectDetails($name: String) {
    contentfulProject(title: { eq: $name }) {
      id
      title
      description
      content {
        content
      }
    }
  }
`;

export const Head = () => <title>Brendan Nofs Portfolio</title>;
