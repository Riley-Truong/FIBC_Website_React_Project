import { Helmet } from 'react-helmet-async';

function SEO({
    title,
    description,
    canonical,
    image,
    type = 'website',
}) {
    const fullTitle = title ? `${title} | Faith Independent Baptist Church` : 'Faith Independent Baptist Church | McDonough, GA';

    return(
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {canonical && <link rel="canonical" href={canonical}/>}

            <meta property='og:title' content={fullTitle} />
            {description && <meta property='og:description' content={description} />}
            <meta property='og:type' content={type} />
            {image && <meta property='og:image' content={image} />}
        </Helmet>
    );
}

export default SEO;