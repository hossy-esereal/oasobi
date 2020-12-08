import * as React from 'react';
import { graphql, Link } from 'gatsby';

import { BaseLayout } from '../layout/BaseLayout';
import { SEO } from '../components/Seo';

const IndexPage: React.FC = () => (
  <BaseLayout>
    <SEO title="Home" />
    <h1>Hi おね</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
      }}
    ></div>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/diary/">Go to blog posts (Source: Contentful)</Link>
      </li>
    </ul>
  </BaseLayout>
);

export const query = graphql`
  query AllContentfulDiary {
    allContentfulDiary {
      nodes {
        title
        createdAt
        description {
          json
        }
      }
    }
  }
`;

export default IndexPage;
