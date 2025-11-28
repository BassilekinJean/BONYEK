import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
    const siteTitle = 'BONYEK';
    const defaultDescription = "Découvrez BONYEK, votre bureau d'Etudes techniques et d'ingénierie.";
    const defaultImage = '/og-image.png'; 
    const siteUrl = 'https://bonyek.vercel.app/'; 

    const fullTitle = `${title} | ${siteTitle}`;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <link rel="canonical" href={metaUrl} />
            
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Bonyek" />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />
        </Helmet>
    );
}
