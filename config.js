const config = {
  appName: "Blog/AceYourScore",
  appDescription: "This Blog of AceYourScore",
  domainName: "blog.aceyourscore.com",
  domainNameDev: "http://localhost:3000",
  domainNameProduction: "https://aceyourscore.com",
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
};
// if (process.env.NODE_ENV === 'production') {
//   config.domainName = config.domainNameProduction;
// } else {
//   config.domainName = config.domainNameDev; // Set to development domain
// }
export default config;