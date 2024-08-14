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
};

export const MetadataHome = {
  title: "AceYourScore | Home",
  description: "Learn more about AceYourScore and our mission.",
  openGraph: {
    title: "AceYourScore | Home",
    description: "Learn more about AceYourScore and our mission.",
    images: ["/logo.png"],
    url: `${config.domainName}/`,
  },
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
};

export const MetadataTos = {
  title: "AceYourScore | Tearm of Conditions",
  description: "Review the Tearm of Conditions for using AceYourScore.",
  openGraph: {
    title: "AceYourScore | Tearm of Conditions",
    description: "Review the Tearm of Conditions for using AceYourScore.",
    images: ["/logo.png"],
    url: `${config.domainName}/tos`,
  },
};

