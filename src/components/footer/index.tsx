/**
 * React, Gatsby, Jest, TypeScript, Apollo - Starter
 * https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
 * Copyright (c) 2020 Eduard Kirilov | MIT License
 */
import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Logo } from 'components/logo';
import { LinkAnyClearStyles } from 'components/link';

import { Wrapper, Text, Box } from './styled';

export const FooterMemo: React.FC = () => (
  <Wrapper>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box justifyContent="flex-start">
            <Logo />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box justifyContent="center">
            <Text weight="medium">
              Released under the MIT License. Copyright © 2020 Kirilov Eduard.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box justifyContent="flex-end">
            <LinkAnyClearStyles href="mailto:ph0en1x.free@ya.ru">
              <Text weight="medium">ph0en1x.free@ya.ru</Text>
            </LinkAnyClearStyles>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Wrapper>
);

export const Footer = React.memo(FooterMemo);
