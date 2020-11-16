import path from 'path';
import { GatsbyNode } from 'gatsby';
import {
  AllContentfulDiaryQuery,
  ContentfulDiary,
  ContentfulDiaryDescriptionRichTextNode,
} from '../types/graphql-types';

export type DiaryPageContext = {
  diary: Pick<ContentfulDiary, 'id' | 'title'> & {
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
        id
        title
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

  const diaryTemplate = path.resolve('../hossy-blog/src/templates/diary.tsx');

  result.data?.allContentfulDiary.nodes?.map(diary => {
    // console.log(diary.description?.json.content[0].content[0].value);
    createPage<DiaryPageContext>({
      path: `/diary/${diary.id}`,
      component: diaryTemplate,
      context: {
        diary,
      },
    });
  });
};
