import {
  // AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  // SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  // PortfolioItem,
  // SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Incomplete Text Classification',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'intro',
  Contact: 'contact',
  // Portfolio: 'models',
  Resume: 'setting',
  // Skills: 'skills',
  // Stats: 'stats',
  // Testimonials: 'findings',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Incomplete Supervision: Text Classification based on a Subset of Labels`,
  description: (
    <>
      <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Authors: Yacun Wang, Luning Yang
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/report.pdf',
      text: 'Report',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  // profileImageSrc: profilepic,
  description: `Many text classification models rely on an assumption that requires users to provide the model with a full set of class labels. This is not realistic, \
  as users may not be aware of all possible classes in advance, or may not be able to obtain an exhaustive list. Thus, we propose to work in a new setting where \
  both labeled and unlabeled articles exist, and aim to discover classes among the unlabeled articles. We explore the potential of weakly supervised ML to detect \
  class labels that humans may not recognize, thus facilitating more accurate classification. At this time, the baseline model learns well from the supervised set, \
  but label generation is less satisfactory.`,
  aboutItems: [
    {label: 'Section', text: 'B14: Weakly Supervised NLP', Icon: MapIcon},
    {label: 'Advisor', text: 'Jingbo Shang', Icon: OfficeBuildingIcon},
  ],
};


/**
 * Portfolio section
 */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage1,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const data: TimelineItem[] = [
  {
    title: 'NYT-Fine',
    content: <p>11K news article documents from New York Times, with 26 fine-grained labels indicating topics of the article.</p>,
  },
  {
    title: 'Subreddits',
    content: <p>48K social media posts from Reddit, with 20 subreddit topics served as labels.</p>,
  },
  {
    title: 'DBPedia',
    content: <p>560K Wikipedia articles, with 14 evenly-distributed classes and 50 average words per document.</p>,
  },
];

export const evaluation: TimelineItem[] = [
  {
    title: 'Binary Task',
    content: (
      <p>
        Whether the new document belongs to non-existing classes. Report precision and recall.
      </p>
    ),
  },
  {
    title: 'Existing Performance',
    content: (
      <p>
        The quality of predicting to existing labels. Report micro- and macro-F1 score
      </p>
    ),
  },
  {
    title: 'New Label Generation',
    content: (
      <p>
        The quality of predicting to existing labels. Report micro- and macro-F1 score
      </p>
    ),
  },
  {
    title: 'Full Evaluation',
    content: (
      <p>
        Using automatic mapping, report the micro-and macro- F1 scores of all the predicted labels.
      </p>
    ),
  },

];


export const models: TimelineItem[] = [
  {
    title: 'Baseline Model',
    content: <p>The baseline model is a combination of a few vanilla basic models: <br />
                (1) a supervised TF-IDF model for seed word learning; <br />
                (2) a weakly supervised Word2Vec model that takes in seed words and output document and class representations; <br />
                (3) a cosine similarity measure for confidence split; <br />
                (4) a Gaussian Mixture Model for clustering unconfident</p>,

  },
  {
    title: 'Advanced Model',
    content: <p>Pending.</p>,
  },
];

export const results: TimelineItem[] = [
  {
    title: 'Summary of Findings',
    content: <p> (1) We conclude that our supervised TF-IDF module is successful in identifying relatively representative seed words, 
    as evidenced by achieving a micro-F1 of 0.876 and a macro-F1 of 0.871 when classifying documents into existing labels. <br />
    (2) We take documents with max similarity &lt; 0.2 as unconfident and cluster them into new labels. Our result shows a precision of 0.845 
    and recall of 0.285 for this binary classification (existing v.s. new). <br /> 
    (3) The word clouds of the newly suggested labels and the original labels show a good match. 
    Thus, we validate that using Word2Vec word embedding vectors and averaging for document 
    representation is an effective approach. However, the label generated are not satisfactory.</p>,

  },
];







// /**
//  * Testimonial section
//  */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'Finding #1',
//       text: 'We conclude that our supervised TF-IDF module is successful in identifying relatively representative seed words, as evidenced by achieving a micro-F1 of 0.876 and a macro-F1 of 0.871 when classifying documents into existing labels.',
//     },
//     {
//       name: 'Finding #2',
//       text: 'We take documents with max similarity < 0.2 as unconfident and cluster them into new labels. Our result shows a precision of 0.845 and recall of 0.285 for this binary classification (existing v.s. new).',
//     },
//     {
//       name: 'Finding #3',
//       text: 'The word clouds of the newly suggested labels and the original labels show a good match. Thus, we validate that using Word2Vec word embed- ding vectors and averaging for document representation is an effective approach. However, the label generated are not satisfactory.',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
