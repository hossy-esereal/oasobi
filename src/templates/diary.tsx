/* eslint-disable react/display-name */
import * as React from 'react';

import { BaseLayout } from 'layouts/BaseLayout';
import { SEO } from 'components/Seo';
import { DiaryPageContext } from '../../gatsby-node';

type Props = {
  pageContext: DiaryPageContext;
};

const Diary: React.FC<Props> = ({ pageContext }) => {
  const diary = pageContext.diary;
  if (!diary) return null;

  return (
    <BaseLayout>
      <SEO title="Diary" />
      <div>タイトル：{diary.title}</div>
      {diary.description?.childMarkdownRemark?.rawMarkdownBody}
    </BaseLayout>
  );
};

export default Diary;
