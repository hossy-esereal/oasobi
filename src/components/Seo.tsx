import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type metaType = Array<{
  property?: string;
  name?: string;
  content: string;
}>;
type Props = {
  description?: string;
  lang?: string;
  meta?: metaType;
  title: string;
};

export const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultMeta: metaType = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  const propMeta: metaType = defaultMeta.concat(meta || []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMeta.concat(propMeta)}
    />
  );
};