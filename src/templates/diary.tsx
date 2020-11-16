/* eslint-disable react/display-name */
import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { DiaryPageContext } from '../../gatsby-node/index';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
      <div>{diary.title}</div>
    </Layout>
  );
};

export default Diary;
