const moment = require('moment');

/**
 * JND stands for javaniceday
 */
module.exports.getResponseJson = function (req) {
  // default attributes for the response response.
  const responseJson = {};
  responseJson.title = 'safety-mom.com – Blog sobre....'; // TODO
  responseJson.today = moment().format('YYYY-MM-DD');
  responseJson.isProduction = process.env.NODE_ENV === 'production' || false;
  responseJson.adsenseEnabled = process.env.ADSENSE_ENABLED === true || process.env.ADSENSE_ENABLED === 'true';
  responseJson.isHomePage = false;
  responseJson.isPostPage = false;
  responseJson.createdAt = moment().format('YYYY-MM-DD');
  responseJson.updatedAt = moment().format('YYYY-MM-DD');
  responseJson.linkToThisPage = process.env.BASE_URL || 'http://localhost:3000';
  responseJson.description = 'safety-mom.com – Blog sobre.....'; // TODO
  responseJson.metaImage = process.env.DEFAULT_IMAGE_URL;
  responseJson.keywords = 'software, development';
  responseJson.searchText = '';
  responseJson.showRelatedPosts = true;

  const metaCache = process.env.META_CACHE || '1'; // in seconds
  responseJson.metaCache = `public, max-age=${metaCache}`;

  responseJson.isMobile = req.useragent.isMobile;
  responseJson.isDesktop = req.useragent.isDesktop;

  // structured data
  responseJson.pageType = 'Blog';
  responseJson.pageName = 'javaniceday.com';
  responseJson.pageOrganization = 'javaniceday.com';
  responseJson.pageImage = process.env.DEFAULT_IMAGE_URL;
  responseJson.pageUrl = process.env.BASE_URL;
  responseJson.pageDatePublished = '2020-06-02';
  responseJson.pageDateModified = moment().format('YYYY-MM-DD');// today
  responseJson.pageLogo = 'http://...'; // TODO
  responseJson.pageDescription = responseJson.description;

  responseJson.siteName = 'javaniceday.com';
  responseJson.author = 'Andres Canavesi';
  responseJson.publisher = 'Andres Canavesi';

  responseJson.currentYear = moment().format('YYYY');

  responseJson.lang = 'es';
  responseJson.locale = 'es_ES';

  responseJson.isPostPage = false;

  responseJson.isAuthenticated = req.headers.authorization && req.headers.authorization.startsWith('Basic ');

  responseJson.defaultLoadingImage = process.env.DEFAULT_LOADING_IMAGE;

  return responseJson;
};
