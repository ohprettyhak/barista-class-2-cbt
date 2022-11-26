const config = require('./config');

const seo = {
  titleTemplate: `%s - ${config.title}`,
  defaultTitle: config.title,
  description: config.description,
  url: config.url,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [
      {
        url: config.url + config.og_image,
      },
    ],
    type: 'website',
    locale: config.locale,
    site_name: config.title,
  },
};

export default seo;
