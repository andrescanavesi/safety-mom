const moment = require('moment');

module.exports.getResponseJson = function (req) {
  // default attributes for the response response.
  const responseJson = {};
  responseJson.title = 'safety-mom.com – Blog seguridad vial en niños';
  responseJson.today = moment().format('YYYY-MM-DD');
  responseJson.isProduction = process.env.NODE_ENV === 'production' || false;
  responseJson.adsenseEnabled = process.env.ADSENSE_ENABLED === true || process.env.ADSENSE_ENABLED === 'true';
  responseJson.isHomePage = false;
  responseJson.isPostPage = false;
  responseJson.createdAt = moment().format('YYYY-MM-DD');
  responseJson.updatedAt = moment().format('YYYY-MM-DD');
  responseJson.linkToThisPage = process.env.BASE_URL || 'http://localhost:3000';
  responseJson.description = 'safety-mom.com – Blog seguridad vial en niños';
  responseJson.metaImage = process.env.DEFAULT_IMAGE_URL;
  responseJson.keywords = 'blog,seguridad,vial,niños';
  responseJson.searchText = '';
  responseJson.showRelatedPosts = true;

  const metaCache = process.env.META_CACHE || '1'; // in seconds
  responseJson.metaCache = `public, max-age=${metaCache}`;

  responseJson.isMobile = req.useragent.isMobile;
  responseJson.isDesktop = req.useragent.isDesktop;

  // structured data
  responseJson.pageType = 'Blog';
  responseJson.pageName = 'safety-mom.com';
  responseJson.pageOrganization = 'safety-mom.com';
  responseJson.pageImage = process.env.DEFAULT_IMAGE_URL;
  responseJson.pageUrl = process.env.BASE_URL;
  responseJson.pageDatePublished = '2021-05-09';
  responseJson.pageDateModified = moment().format('YYYY-MM-DD');// today
  responseJson.pageLogo = 'http://...'; // TODO
  responseJson.pageDescription = responseJson.description;

  responseJson.siteName = 'safety-mom.com';
  responseJson.author = 'Victoria Armario';
  responseJson.publisher = 'Victoria Armario';

  responseJson.currentYear = moment().format('YYYY');

  responseJson.lang = 'es';
  responseJson.locale = 'es_AR';

  responseJson.isPostPage = false;

  responseJson.isAuthenticated = req.headers.authorization && req.headers.authorization.startsWith('Basic ');

  responseJson.defaultLoadingImage = process.env.DEFAULT_LOADING_IMAGE;

  responseJson.cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;
  responseJson.cloudinaryUnsignedUploadPreset = process.env.CLOUDINARY_UNSIGNED_UPLOADS_PRESET;
  responseJson.imagesBaseUrl = process.env.IMAGES_BASE_URL;
  responseJson.favIcon = responseJson.imagesBaseUrl + process.env.FAV_ICON_URL;
  responseJson.googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

  return responseJson;
};
