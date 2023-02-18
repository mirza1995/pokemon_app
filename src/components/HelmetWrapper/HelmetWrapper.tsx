import { Helmet } from 'react-helmet-async';

type HelmetWrapperProps = {
  title: string;
  content: string;
  canonicalLink: string;
};

export const HelmetWrapper = ({
  title,
  content,
  canonicalLink
}: HelmetWrapperProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel='canonical' href={canonicalLink} />
    </Helmet>
  );
};
