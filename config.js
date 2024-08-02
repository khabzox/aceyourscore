const config = {
  domainName: "",
  LemonSqueezy: {
    LEMON_SQUEEZY_SAT_ID: "",
    LEMON_SQUEEZY_TOEFL_ID: "",
    LEMON_SQUEEZY_TOEIC_ID: "",
    LEMON_SQUEEZY_IELTS_ID: "",
  },
  // aws: {
  //   // If you use AWS S3/Cloudfront, put values in here
  //   bucket: "bucket-name",
  //   bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
  //   cdn: "https://cdn-id.cloudfront.net/",
  // },
};

if (process.env.NODE_ENV !== "development") {
  config.domainName = "https://www.aceyourscore.com";
} else {
  config.domainName = "http://localhost:3000";
}

if (process.env.NODE_ENV !== "development") {
  config.LemonSqueezy = {
    LEMON_SQUEEZY_SAT_ID: "455549",
    LEMON_SQUEEZY_TOEFL_ID: "455552",
    LEMON_SQUEEZY_TOEIC_ID: "455553",
    LEMON_SQUEEZY_IELTS_ID: "455548",
  };
} else {
  config.LemonSqueezy = {
    LEMON_SQUEEZY_SAT_ID: "443229",
    LEMON_SQUEEZY_TOEFL_ID: "442338",
    LEMON_SQUEEZY_TOEIC_ID: "443228",
    LEMON_SQUEEZY_IELTS_ID: "443230",
  };
}

export default config;