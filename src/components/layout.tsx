import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import { GlobalStyle } from '../styles/globalStyle';
import { Footer } from './Footer';
import 'fontsource-castoro';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledWrapper>
        <main>{children}</main>
        <Footer />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`;
