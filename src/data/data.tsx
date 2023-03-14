import {
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';

// import profilepic from '../images/model-pipeline.png';
// import profilepic1 from '../images/word-cloud.png';
import {
  About,
  // About1,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
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
  Resume: 'setting',
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
  description: `Most text classification models require users to provide a full set of potential class labels, \
  and force the model to predict within the set. This creates burden for humans to be as comprehensive and accurate \
  as possible in manual labeling, which is unrealistic. We explore the Incomplete Text Classification (IC-TC) setting: \
  Models mine patterns in a small labeled set \
  which only contains existing labels, apply patterns to predict into existing labels in an unlabeled set, and \
  detect out-of-pattern clusters for potential new label discoveries.`.trim(),
  aboutItems: [
    {label: 'Section', text: 'B14: Weakly Supervised NLP', Icon: MapIcon},
    {label: 'Advisor', text: 'Jingbo Shang', Icon: OfficeBuildingIcon},
  ],
};

// export const aboutData1: About1 = {
//   profileImageSrc: profilepic,
// };

// export const aboutData2: About1 = {
//   profileImageSrc: profilepic1,
// };



/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const data: TimelineItem[] = [
  {
    title: 'DBPedia',
    content: <p> <li> 560K Wikipedia articles, 14 evenly-distributed classes, average 50 words per document. Originally all labeled. </li>
                <li> For incompleteness: remove 5 classes entirely, keep 10% of the remaining 9 classes to form the labeled set.</li>
                <li>36K labeled documents, 524K unlabeled documents with unseen labels.</li>
                <li>Seen Labels: Book, Film, Album, Plant, Animal, Village, River, Athlete, Company; Unseen Labels: Building, Transportation, Politics, Artist, School.</li>
            </p>,
  },
];

export const evaluation: TimelineItem[] = [
  {
    title: 'New Label Binary',
    content: (
      <p>
        Whether the new document belongs to unseen classes. Report precision and recall scores.
      </p>
    ),
  },
  {
    title: 'Existing Performance',
    content: (
      <p>
        The multi-class classification result of all documents with ground truth as existing labels. Report micro- and macro-F1.
      </p>
    ),
  },
  {
    title: 'New Label Quality',
    content: (
      <p>
        Manually comparing the newly generated labels with the true non-existing labels.
      </p>
    ),
  },
];


export const models: TimelineItem[] = [
  {
    title: 'Module',
    content: <p><li><strong className="text-stone-100" style={{ color: 'black' }}>Seed Words</strong>: Top 10 TF-IDF scores per existing class, de-duplicated.</li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>Class Representation</strong>: Average embedding of picked seed words. </li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>Document Representation</strong>: Average embedding of words in doc. </li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>Confidence</strong>: Cosine similarity between class, document representations. </li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>Clustering</strong>: Gaussian Mixture Model with 5 classes. </li>
              </p>

  },
];


export const models1: TimelineItem[] = [
  {
    title: 'Final Model',
    content: <p><li><strong className="text-stone-100" style={{ color: 'black' }}>Word Embeddings</strong>: Average contextualized embedding of all occurrences from pre-trained bert-base-uncased model, dimension 768.</li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>Representations</strong>: Use PCA to reduce embedding dimension to 128. </li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>New Label Generation</strong>: Use ChatGPT API -- (1) Generate topics for top 25 documents in Gaussian probability per cluster; (2) Use the topics to generate class label. </li>
              </p>

  },
];







export const results: TimelineItem[] = [
  {
    title: 'Summary of Findings',
    content: <p><li><strong className="text-stone-100" style={{ color: 'black' }}>Seed Words</strong>: By inspection, TF-IDF is capable to identify quality seed words, especially after removing all duplicate seed words appeared in more than one label. </li>
    <li><strong className="text-stone-100" style={{ color: 'black' }}>Confidence Split</strong>: By the bottom-left histogram, we consider a similarity score lower than 0.2 to be unconfident.</li>
    <li><strong className="text-stone-100" style={{ color: 'black' }}>New Label Binary</strong>: Precision 0.844, Recall 0.694.</li>
    <li> <strong className="text-stone-100" style={{ color: 'black' }}>Existing Performance</strong>: Micro-F1 0.889, Macro-F1 0.885.</li>
    <li><strong className="text-stone-100" style={{ color: 'black' }}>Clustering</strong>: By the bottom-right t-SNE low-dimensional representation, most unconfident documents have neighbor patterns to form clusters.</li>
    <li><strong className="text-stone-100" style={{ color: 'black' }}>Generated Labels</strong>: By word clouds on the left, most important words show in aligned clusters, confirming the quality of BERT 
    contextualized class/document representations; ChatGPT also produces reasonable generic labels.</li>
    </p>,

  },
];



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
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yaw006@ucsd.edu',
       href: 'mailto: yaw006@ucsd.edu',
    },

     {
      type: ContactType.Email,
      text: 'l4yang@ucsd.edu',
      href: 'mailto: l4yang@ucsd.edu',
    },
    {
      type: ContactType.Location,
      text: 'University of California San Diego, US',
      href: 'https://www.google.com/maps/d/viewer?mid=1rRQbZPK04KMnBJbyneZ35ItQWpo&hl=en&ll=32.88006040000004%2C-117.23401350000002&z=18',
    },
    {
      type: ContactType.Github,
      text: 'colts661',
      href: 'https://github.com/colts661',
    },
    {
      type: ContactType.Github,
      text: 'Luning-Yang',
      href: 'https://github.com/Luning-Yang',
    },
  ],
};
