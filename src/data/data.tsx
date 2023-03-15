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
  ContactSection1,
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
  About: 'abstract',
  Contact: 'contact',
  Resume: 'Setting, Model, Analysis',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Text Classification based on a Subset of Labels`,
  description: (
    <>
      <p className="mt-2 text-3xl italic tracking-tight text-white sm:text-3xl">
      Yacun Wang, Luning Yang
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
      href: `https://github.com/colts661/Incomplete-Text-Classification.git`,
      text: 'Github Repo',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Many text classification models rely on the
assumption that requires users to provide the
model with a full set of class labels. This is
not realistic, as users may not be aware of all
possible classes in advance, or may not be able
to obtain an exhaustive list. These models also
forced to predict any new document to one of
the existing classes, where none of the existing labels is a good fit. Thus, we explore the
Incomplete Text Classification (IC-TC) setting:
Models mine patterns in a small labeled set
which only contains existing labels, apply patterns to predict into existing labels in an unlabeled set, and detect out-of-pattern clusters
for potential new label discoveries. We experiment with the potential of weakly supervised
ML to detect class labels that humans may not
recognize, thus facilitating more accurate classification. From the document and class embeddings and unconfident documents generated,
we found that both the baseline and the final
model had some capability of detecting unseen
classes, and label generation techniques help
produce reasonable new class labels.`.trim(),
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
        The model decides on whether to generate new labels for a document based on the confidence of
        weak supervised document-class representations.
        The sub-task of predicting whether a document
        falls outside of existing classes is a binary classification prediction. We evaluate this sub-task using 
        binary precision and recall, with <strong className="text-stone-100" style={{ color: 'black' }}> 
        new labels necessary</strong> as the positive class.
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
        After new labels are generated, we inspect the quality of new labels using either manual inspection,
        and plot word clouds comparing the significant
        words appeared in the original removed classes and
        the new clustered classes with generated labels.
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
    content: <p>
    The final model fills in the remaining slots of the model pipeline by using:


    <li><strong className="text-stone-100" style={{ color: 'black' }}>Word Embeddings</strong>: We obtain the contextualized static representations of each word 
                                                                                                            using pre-trained BERT (Kenton and Toutanova, 2019) embeddings and averaging the representations of all occurrences of the word (Wang et al., 2021). 
                                                                                                            We used the pre-trained bert-base-uncased model with its default vector dimension 768.</li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>Representations</strong>: Since cosine similarity will perform poorly on a high-dimensional vector, 
                                                                                                            we use PCA to reduce all class and document embeddings. </li>
                <li><strong className="text-stone-100" style={{ color: 'black' }}>New Label Generation</strong>: Instead of directly using
                                                                                                                  statistical methods, we use ChatGPT API – a
                                                                                                                  chatbot fine-tuned using reinforcement learning on OpenAI’s state-of-the-art language model GPT-3 (Brown et al., 2020) that has
                                                                                                                  showed ability for text generation and summarization. We prompt ChatGPT to: (1) 
                                                                                                                  Generate topics for top 25 documents in Gaussian probability per cluster; 
                                                                                                                  (2) Use the summarized topics to generate a generic class label. </li>
              </p>

  },
];







export const results: TimelineItem[] = [
  {
    title: 'Summary of Findings',
    content: <p>
    We report the results of the final model, by the same order as the pipeline shows:

    <li><strong className="text-stone-100" style={{ color: 'black' }}>Seed Words</strong>: We present a few example seed
                                                                                            words generated from the first supervised TF-IDF
                                                                                            module below. The basic TF-IDF scores are able
                                                                                            to identify relatively representative seed words. </li>

    <li><strong className="text-stone-100" style={{ color: 'black' }}>Similarity Distribution</strong>: Figure 2 shows the distribution of the maximum cosine similarity found
                                                                                                        for all unlabeled documents, and thus provides
                                                                                                        us with the criteria to get unconfident documents.
                                                                                                        From the figure, the distribution is roughly normal
                                                                                                        with a slight right skew, and the value ranges from
                                                                                                        -0.2 to almost 1.0. This is the ideal distribution,
                                                                                                        since by the definition of cosine similarity, there
                                                                                                        will be similarities at 0, indicating the representa-
                                                                                                        tions are not related; there will also be negative
                                                                                                        similarities, indicating the representations mean
                                                                                                        something opposite.</li>



    <li><strong className="text-stone-100" style={{ color: 'black' }}>Unconfident Documents</strong>: Figure 3 shows the
                                                                                                      2D unconfident document representations after applying the t-SNE (van der Maaten and Hinton,
                                                                                                      2008) dimensionality reduction technique to visualize the high-dimensional data, color coded by
                                                                                                      their original label, with "Other" indicating any existing labels. To generate the 2D representation,
                                                                                                      we followed the suggestions on sklearn t-SNE
                                                                                                      to first use Principle Component Analysis (PCA) to reduce to 50 dimensions, and apply t-SNE with
                                                                                                      perplexity 30. From the figure, the unconfident
                                                                                                      documents follow pretty closely with the original
                                                                                                      removed labels, and 4 new class distributions are
                                                                                                      distinctive to be clustered: Transportation, Politics,
                                                                                                      School, Building. From this distribution, we could
                                                                                                      expect the Gaussian Mixture method to detect most
                                                                                                      of the new classes relatively well, with the exception that the "Transportation" class (in orange) has
                                                                                                      two clear centers, which might not be well detected
                                                                                                      by the model. There will also be a few noisy documents lying around (0, 0) in t-SNE that confuses
                                                                                                      clustering and label generation.</li>
    



    </p>,

  },
];



/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Contact',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yaw006@ucsd.edu',
       href: 'mailto: yaw006@ucsd.edu',
    },
    {
      type: ContactType.Github,
      text: 'colts661',
      href: 'https://github.com/colts661',
    },

  ],
};


export const contact1: ContactSection1 = {
  headerText1: 'Contacts',
  description1: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items1: [
    {
      type: ContactType.Email,
      text: 'l4yang@ucsd.edu',
      href: 'mailto: l4yang@ucsd.edu',
    },
    {
      type: ContactType.Github,
      text: 'Luning-Yang',
      href: 'https://github.com/Luning-Yang',
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
