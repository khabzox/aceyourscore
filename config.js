const config = {
  appName: "Blog/AceYourScore",
  appDescription: "This Blog of AceYourScore",
  domainName: "blog.aceyourscore.com",
  domainNameProduction: "",
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
};

if (process.env.NODE_ENV !== "development") {
  config.domainNameProduction = "https://www.aceyourscore.com";
} else {
  config.domainNameProduction = "http://localhost:3000";
}

export default config;
