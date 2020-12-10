import path from 'path';
import { GatsbyNode } from 'gatsby';
import {
  AllContentfulMdQuery,
  ContentfulMd,
  MarkdownRemark,
} from '../types/graphql-types';

import { formatDate } from '../src/utils/dateUtil';

export type DiaryPageContext = {
  diary: Pick<ContentfulMd, 'title' | 'createdAt'> & {
    description?:
      | {
          childMarkdownRemark?:
            | Pick<MarkdownRemark, 'rawMarkdownBody'>
            | null
            | undefined;
        }
      | null
      | undefined;
  };
};

const query = `
  {
    allContentfulMd {
      edges {
        node {
          title
          createdAt
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`;

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const result = await graphql<AllContentfulMdQuery>(query);

  if (result.errors) {
    console.log('result is error occur');
    reporter.panic(result.errors);
  }

  const diaryTemplate = path.resolve('src/templates/diary.tsx');

  result.data?.allContentfulMd.edges.map(edge => {
    createPage<DiaryPageContext>({
      path: `/diary/${formatDate(edge.node.createdAt, 'YYYYMMDD')}`,
      component: diaryTemplate,
      context: {
        diary: edge.node,
      },
    });
  });
};
