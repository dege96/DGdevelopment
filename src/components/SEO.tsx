import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string;
}

export const SEO = ({
  title = 'DG Development - Konsultation inom teknisk projektledning, design och tillverkning',
  description = 'DG Development erbjuder tjänster inom teknisk projektledning, design, formgivning, och specialtillverkning. Vi hjälper dig från idé till färdig produkt.',
  image = '/logo.png',
  article = false,
  keywords = 'prototyper, design, formgivning, tekniska lösningar, tillverkningsmetoder, konsultation, produktdesign',
}: SEOProps) => {
  const { pathname } = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://dgdevelopment.se';
  
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="DG Development" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
}; 