import path from 'path';
import { GatsbyNode } from 'gatsby';
import {
  AllContentfulDiaryQuery,
  ContentfulDiary,
  ContentfulDiaryDescriptionRichTextNode,
} from '../types/graphql-types';

import { formatDate } from '../src/util/dateUtil';

export type DiaryPageContext = {
  diary: Pick<ContentfulDiary, 'title' | 'createdAt'> & {
    description?:
      | Pick<ContentfulDiaryDescriptionRichTextNode, 'json'>
      | null
      | undefined;
  };
};

const query = `
  {
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

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const result = await graphql<AllContentfulDiaryQuery>(query);

  if (result.errors) {
    console.log('result is error occur');
    reporter.panic(result.errors);
  }

  const diaryTemplate = path.resolve('src/templates/diary.tsx');

  result.data?.allContentfulDiary.nodes?.map(diary => {
    createPage<DiaryPageContext>({
      path: `/diary/${formatDate(diary.createdAt, 'YYYY-MM-DD')}`,
      component: diaryTemplate,
      context: {
        diary,
      },
    });
  });
};
