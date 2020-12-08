/* eslint-disable react/display-name */
import * as React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { DiaryPageContext } from '../../gatsby-node/index';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
  pageContext: DiaryPageContext;
};

const Diary: React.FC<Props> = ({ pageContext }) => {
  console.log(pageContext);
  const diary = pageContext.diary;
  if (!diary) return null;

  return (
    <Layout>
      <SEO title="Diary" />
      <div>タイトル：{diary.title}</div>
      {diary.description && documentToReactComponents(diary.description.json)}
    </Layout>
  );
};

export default Diary;
