import React from "react";
import { graphql } from "gatsby";

import { Box } from "../../../../components/index";
import Layout from "../Layout";
import Content from "./Content";

export interface TemplateProps {
    data: {
        site: {};
        doc: {
            frontmatter: {
                components: string;
                title: string;
                type: string;
            };
            rawMarkdownBody: string;
            htmlAst: {
                children: {
                    tagName: string;
                    type: string;
                    properties: object;
                    children: {
                        type: string;
                        value: string;
                    }[];
                }[];
                data: {};
                type: string;
            };
        };
        api: {};
        docs: {};
    };
}

const Template: React.FC<TemplateProps> = ({ data }) => {
    return (
        <Layout>
            <Box
                as="main"
                background="url(/wall.jpg) 50% center / cover no-repeat fixed"
                padding={{ xs: "0", sm: "3.6rem 3rem" }}
                width="100vw"
                height="100vh"
                display="flex"
                justifyContent="space-between"
                overflow="hidden"
            >
                {console.log(data)}
                <Content data={data} />
            </Box>
        </Layout>
    );
};

export default Template;

export const query = graphql`
  query($title: String!) {
    site{
          siteMetadata {
            title
          }
        }
    doc: markdownRemark(frontmatter: { title: { eq: $title }, api: { nin: true } }) {
      frontmatter {
        components
        title
        type
      }
      rawMarkdownBody
      htmlAst
    }
    api: markdownRemark(frontmatter: { title: { eq: $title }, api: { eq: true } }) {
      frontmatter {
        components
        title
      }
      rawMarkdownBody
    }
    docs: allMarkdownRemark(filter: { frontmatter: { api: { nin: true } } }) {
      edges {
        node {
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`;
