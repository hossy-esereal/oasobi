import * as React from 'react';
import { graphql } from 'gatsby';
import { BaseLayout } from 'layouts/BaseLayout';
import { AllContentfulMdIndexQuery } from '../../../types/graphql-types';

interface Props {
  data: AllContentfulMdIndexQuery;
}

const DiaryIndex: React.FC<Props> = ({ data }) => {
  return (
    <BaseLayout>
      {data.allContentfulMd.edges.map(edge => {
        return (
          <>
            <div>{edge.node.title}</div>
            <div>{edge.node.createdAt}</div>
          </>
        );
      })}
    </BaseLayout>
  );
};

export const query = graphql`
  query AllContentfulMdIndex {
    allContentfulMd {
      edges {
        node {
          title
          createdAt
        }
      }
    }
  }
`;

export default DiaryIndex;
