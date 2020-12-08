import * as React from 'react';
import { graphql } from 'gatsby';
import { AllContentfulDiaryIndexQuery } from '../../../types/graphql-types';

interface Props {
  data: AllContentfulDiaryIndexQuery;
}

const DiaryIndex: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.allContentfulDiary.nodes.map(dairy => {
        return (
          <>
            <div>{dairy.title}</div>
            <div>{dairy.createdAt}</div>
          </>
        );
      })}
    </>
  );
};

export const query = graphql`
  query AllContentfulDiaryIndex {
    allContentfulDiary {
      nodes {
        title
        createdAt
      }
    }
  }
`;

export default DiaryIndex;
