import * as React from 'react';
import { graphql, HeadProps, type PageProps } from 'gatsby';
import {
  Container,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';

import PageLayout from '$components/page-layout';
import PageHero from '$components/page-hero';
import Seo from '$components/seo';
import { Separator } from '$components/separator';

import { Letter } from '../types';

interface LetterPageProps {
  letter: Letter;
}

export default function LetterPage(props: PageProps<LetterPageProps>) {
  const {
    data: {
      letter: { title, lead }
    },
    children
  } = props;

  return (
    <PageLayout>
      <PageHero title={title} lead={lead} />
      <Container
        py={{ base: '8', lg: '16' }}
        px={{ base: '4', md: '8' }}
        maxW='container.lg'
        display='flex'
        flexFlow='column'
        gap={{ base: '4', md: '8' }}
      >
        <MDXProvider
          components={{
            h1: (props) => <Heading as='h1' size='4xl' {...props} />,
            h2: (props) => <Heading as='h2' size='3xl' {...props} />,
            h3: (props) => <Heading as='h3' size='2xl' {...props} />,
            h4: (props) => <Heading as='h4' size='xl' {...props} />,
            h5: (props) => <Heading as='h5' size='lg' {...props} />,
            h6: (props) => <Heading as='h6' size='md' {...props} />,
            p: (props) => <Text {...props} />,
            ul: (props) => <UnorderedList {...props} />,
            ol: (props) => <OrderedList {...props} />,
            li: (props) => <ListItem {...props} />,
            hr: (props) => <Separator bg='base.200a' size='1' {...props} />,
            a: (props) => <Link color='primary.500' {...props} />
          }}
        >
          {children}
        </MDXProvider>
      </Container>
    </PageLayout>
  );
}

export const query = graphql`
  query ($slug: String) {
    letter(slug: { eq: $slug }) {
      title
      lead
    }
  }
`;

export const Head = (props: HeadProps<LetterPageProps>) => (
  <Seo title={props.data.letter.title} description={props.data.letter.lead} />
);
