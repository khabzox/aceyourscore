import config from "@/config";
import { getArticlesById } from "@/app/blog/articles/[id]/getArticlesById";

export async function MetadataArticles({ params }, parent) {
  const { id } = params;

  // Fetch article data
  const article = await getArticlesById(id);

  if (!article || !article.foundArticle) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for does not exist.",
      openGraph: {
        title: "Article Not Found",
        description: "The article you are looking for does not exist.",
        images: ["/logo.png"],
        url: `${config.domainName}/articles/${id}`,
      },
      twitter: {
        title: "Article Not Found",
        description: "The article you are looking for does not exist.",
        image: "/logo.png",
        card: "summary_large_image",
      },
      keywords: "article not found, AceYourScore",
    };
  }

  const articleInfo = article.foundArticle;

  // Safely handle parent metadata
  const previousImages = parent?.openGraph?.images || [];

  return {
    title: articleInfo.title || "Untitled Article",
    description: articleInfo.description || "No description available.",
    openGraph: {
      title: articleInfo.title || "Untitled Article",
      description: articleInfo.description || "No description available.",
      images: [articleInfo.postImg || "/logo.png", ...previousImages],
      url: `${config.domainName}/articles/${id}`,
    },
    twitter: {
      title: articleInfo.title || "Untitled Article",
      description: articleInfo.description || "No description available.",
      image: articleInfo.postImg || "/logo.png",
      card: "summary_large_image",
    },
    keywords: `${articleInfo.title || "Article"} ${articleInfo.description || "Article Description"}`,
  };
}

// Static metadata for other pages

export const MetadataSignIn = {
  title: "AceYourScore | Sign-In",
  description: "Access your AceYourScore account by signing in.",
  openGraph: {
    title: "AceYourScore | Sign-In",
    description: "Access your AceYourScore account by signing in.",
    images: ["/logo.png"],
    url: `${config.domainName}/sign-in`,
  },
  twitter: {
    title: "AceYourScore | Sign-In",
    description: "Access your AceYourScore account by signing in.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "sign in, AceYourScore, account access",
};

export const MetadataSignUp = {
  title: "AceYourScore | Sign-Up",
  description: "Create a new account with AceYourScore to get started.",
  openGraph: {
    title: "AceYourScore | Sign-Up",
    description: "Create a new account with AceYourScore to get started.",
    images: ["/logo.png"],
    url: `${config.domainName}/sign-up`,
  },
  twitter: {
    title: "AceYourScore | Sign-Up",
    description: "Create a new account with AceYourScore to get started.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "sign up, AceYourScore, create account",
};

export const MetadataHome = {
  title: "AceYourScore | Home",
  description: "Prepare for your exams with confidence. Discover how AceYourScore's expert teachers, tailored courses, and innovative resources can help you achieve your best scores.",
  openGraph: {
    title: "AceYourScore | Home",
    description: "Prepare for your exams with confidence. Discover how AceYourScore's expert teachers, tailored courses, and innovative resources can help you achieve your best scores.",
    images: ["/logo.png"],
    url: "https://www.aceyourscore.com/",
  },
  twitter: {
    title: "AceYourScore | Home",
    description: "Prepare for your exams with confidence. Discover how AceYourScore's expert teachers, tailored courses, and innovative resources can help you achieve your best scores.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "exam preparation, TOEFL, SAT, IELTS, TOEIC, test prep, educational resources, expert teachers, personalized coaching",
  author: "AceYourScore Team",
};

export const MetadataAboutUS = {
  title: "AceYourScore | About Us",
  description: "Learn more about AceYourScore and our mission.",
  openGraph: {
    title: "AceYourScore | About Us",
    description: "Learn more about AceYourScore and our mission.",
    images: ["/logo.png"],
    url: `${config.domainName}/about-us`,
  },
  twitter: {
    title: "AceYourScore | About Us",
    description: "Learn more about AceYourScore and our mission.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "about us, AceYourScore, mission",
};

export const MetadataContactUS = {
  title: "AceYourScore | Contact Us",
  description: "Get in touch with AceYourScore.",
  openGraph: {
    title: "AceYourScore | Contact Us",
    description: "Get in touch with AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/contact-us`,
  },
  twitter: {
    title: "AceYourScore | Contact Us",
    description: "Get in touch with AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "contact us, AceYourScore, customer service",
};

export const MetadataDashboard = {
  title: "AceYourScore | Dashboard",
  description: "Your personal AceYourScore dashboard.",
  openGraph: {
    title: "AceYourScore | Dashboard",
    description: "Your personal AceYourScore dashboard.",
    images: ["/logo.png"],
    url: `${config.domainName}/dashboard`,
  },
  twitter: {
    title: "AceYourScore | Dashboard",
    description: "Your personal AceYourScore dashboard.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "dashboard, AceYourScore, personal account",
};

export const MetadataToefl = {
  title: "AceYourScore | TOEFL",
  description: "Achieve your best TOEFL score with AceYourScore.",
  openGraph: {
    title: "AceYourScore | TOEFL",
    description: "Achieve your best TOEFL score with AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/toefl`,
  },
  twitter: {
    title: "AceYourScore | TOEFL",
    description: "Achieve your best TOEFL score with AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "TOEFL, test prep, AceYourScore",
};

export const MetadataToeic = {
  title: "AceYourScore | TOEIC",
  description: "Prepare effectively for the TOEIC exam with AceYourScore.",
  openGraph: {
    title: "AceYourScore | TOEIC",
    description: "Prepare effectively for the TOEIC exam with AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/toeic`,
  },
  twitter: {
    title: "AceYourScore | TOEIC",
    description: "Prepare effectively for the TOEIC exam with AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "TOEIC, test prep, AceYourScore",
};

export const MetadataSat = {
  title: "AceYourScore | SAT",
  description: "Boost your SAT performance with AceYourScore.",
  openGraph: {
    title: "AceYourScore | SAT",
    description: "Boost your SAT performance with AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/sat`,
  },
  twitter: {
    title: "AceYourScore | SAT",
    description: "Boost your SAT performance with AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "SAT, test prep, AceYourScore",
};

export const MetadataIelts = {
  title: "AceYourScore | IELTS",
  description: "Maximize your IELTS score with AceYourScore.",
  openGraph: {
    title: "AceYourScore | IELTS",
    description: "Maximize your IELTS score with AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/ielts`,
  },
  twitter: {
    title: "AceYourScore | IELTS",
    description: "Maximize your IELTS score with AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "IELTS, test prep, AceYourScore",
};

export const MetadataOurTeacher = {
  title: "AceYourScore | Our Teachers",
  description: "Meet the expert teachers at AceYourScore.",
  openGraph: {
    title: "AceYourScore | Our Teachers",
    description: "Meet the expert teachers at AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/our-teachers`,
  },
  twitter: {
    title: "AceYourScore | Our Teachers",
    description: "Meet the expert teachers at AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "our teachers, AceYourScore, expert educators",
};

export const MetadataLearningArabic = {
  title: "AceYourScore | Learn Arabic",
  description: "Start your Arabic learning journey with AceYourScore.",
  openGraph: {
    title: "AceYourScore | Learn Arabic",
    description: "Start your Arabic learning journey with AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/learn-arabic`,
  },
  twitter: {
    title: "AceYourScore | Learn Arabic",
    description: "Start your Arabic learning journey with AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "learn Arabic, Arabic language, AceYourScore",
};

export const MetadataTos = {
  title: "AceYourScore | Terms of Service",
  description: "Review the Terms of Service for using AceYourScore.",
  openGraph: {
    title: "AceYourScore | Terms of Service",
    description: "Review the Terms of Service for using AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/tos`,
  },
  twitter: {
    title: "AceYourScore | Terms of Service",
    description: "Review the Terms of Service for using AceYourScore.",
    image: "/logo.png",
    card: "summary_large_image",
  },
  keywords: "terms of service, AceYourScore",
};
