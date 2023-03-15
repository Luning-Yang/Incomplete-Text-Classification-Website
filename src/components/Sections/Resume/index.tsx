
// import classNames from 'classnames';
import Image from 'next/image';
// import {aboutData1, aboutData2} from '../../../data/data';
import profilepic from '../../../images/model-pipeline.png';
import profilepic1 from '../../../images/word-cloud.png';



import {FC, memo} from 'react';

import {data, evaluation, models, SectionId, results, models1} from '../../../data/data';
import Section from '../../Layout/Section';
// import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>

        <div className="relative h-max" style={{textAlign: 'left'}}>
        <div style={{display: 'inline-block'}}>
        <h2 className="text-3xl font-bold text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{"Introduction"}</h2>
        <div style={{backgroundColor: 'orange', height: '2px', width: '100%'}}></div>
         <div style={{height: '2em'}}></div>
        </div>
        </div>
        <p>
        In recent years, with the growing complexity and
        scale of neural network models, they also require
        more high-quality human-annotated training data
        to achieve satisfactory performances. These actions usually require extensive domain expertise
        and are extremely time-consuming. Researchers
        have strived to develop models in the weak supervision 
        setting that aim to gradually alleviate
        the human burden in creating such annotations for
        the documents. In particular, researchers have approached 
        the problem of text classification by developing models that only require the class labels and
        a little extra information for each class label such
        as (1) a few representative words (i.e. seed words);
        (2) authors, publication date, etc. (i.e. metadata).
        Researchers have shown that models are capable
        of obtaining reliable results without full human
        annotation. <br/> <br/>

        However, the problem setting for these models
        all depend on one key assumption: users need to provide the model with a full set of desired class
          labels for the model to consider. This is less realistic as users might not know all possible classes in
          advance; users are also unable to obtain an exhaustive list of class names without carefully reading
          and analyzing the documents. If some documents
          happen to fall outside of the given list, the models will be forced to predict to one of the existing
          classes based on normalized probability (e.g. the
          last softmax layer for a neural network). <br/> <br/>
          For example, an online article database might
          contain thousands of user-uploaded articles labeled
          with their domains: news, sports, computer science,
          etc., and the labels are only limited to existing articles. When trying to classify new documents, there
          might be some classes existing in our documents
          whose labels are not provided by our database. For
          instance, we may have a group of articles in the
          domain of chemistry, while we don’t have the exact
          label “chemistry” in the database yet. <br/> <br/>
          In this paper, we explore the <strong className="text-stone-100" style={{ color: 'black' }}>I</strong>n<strong className="text-stone-100" style={{ color: 'black' }}>c</strong>omplete <strong className="text-stone-100" style={{ color: 'black' }}>T</strong>ext
          <strong className="text-stone-100" style={{ color: 'black' }}>C</strong>lassification (IC-TC) setting: Models mine patterns in a small labeled set which only contains
          existing labels, apply patterns to predict into existing labels in an unlabeled set, 
          and detect out-of-pattern clusters for potential new label discoveries. 
          We try to explore the possibility of utilizing
          the power of machines to detect class labels that
          humans fail to recognize and classify documents
          to more reasonable labels. In particular, we 
          proposed a baseline model and an advanced model
          that both leverage semi-supervised and unsupervised
           learning methods to extract information from
          the labeled part of the dataset, learn patterns from
          the unlabeled part, and generate new labels based
          on documents that have lower similarity between
          their representation and existing class labels. From
          the experiments on a well-balanced dataset, both
          models are performing relatively well in learning
          high-quality seed words, word embeddings, class
          and document embeddings, and detecting unseen
          clusters of classes. With the help of modern large
          language model ChatGPT, the models are also 
          capable of finding generic labels for the new classes.


        </p>     

        <div style={{height: '2em'}}></div>
        
        <div className="relative h-max" style={{textAlign: 'left'}}>
        <div style={{display: 'inline-block'}}>
        <h2 className="text-3xl font-bold text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{"Data"}</h2>
        <div style={{backgroundColor: 'orange', height: '2px', width: '100%'}}></div>
         <div style={{height: '2em'}}></div>
        </div>
        </div>

          {data.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        


        
        <div className="relative h-max" style={{textAlign: 'left'}}>
        <div style={{display: 'inline-block'}}>
        <h2 className="text-3xl font-bold text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{"Evaluation"}</h2>
        <div style={{backgroundColor: 'orange', height: '2px', width: '100%'}}></div>
         <div style={{height: '2em'}}></div>
        </div>
        </div>
          {evaluation.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        
          <div className="relative h-max" style={{textAlign: 'left'}}>
        <div style={{display: 'inline-block'}}>
        <h2 className="text-3xl font-bold text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{"Method Overview"}</h2>
        <div style={{backgroundColor: 'orange', height: '2px', width: '100%'}}></div>
         <div style={{height: '2em'}}></div>
        </div>
        </div>

          {models.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}

          
                <div className="relative h-600 w-650 overflow-hidden rounded-xl md:h-62 md:w-120">
                  <Image alt="about-me-image" layout="responsive" src={profilepic} />
                </div>

          <h1 className="text-1xl text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1: Model Pipeline Illustration </h1>
          <div style={{height: '0.75em'}}></div>
          <p> Figure 1 illustrates the model pipeline for both of
              the baseline and the final models. The models for
              the incomplete setting start from a set of labeled
              documents and another set of unlabeled documents,
              and mainly contain 4 modules: (1) learning word
              embeddings from the documents; (2) using word
              embeddings to find document and class representations;
               (3) confidence split based on document-class
              similarity; (4) clustering unconfident documents
              and generate new labels.</p>

          <div style={{height: '2em'}}></div>
          {models1.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}


        

        <div className="relative h-max" style={{textAlign: 'left'}}>
        <div style={{display: 'inline-block'}}>
        <h2 className="text-3xl font-bold text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{"Result"}</h2>
        <div style={{backgroundColor: 'orange', height: '2px', width: '100%'}}></div>
         <div style={{height: '2em'}}></div>
        </div>
        </div>



          {results.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
          
          <div className="relative h-70 w-90  overflow-hidden rounded-xl md:h-70 md:w-120">
            <Image alt="about-me-image1" layout="responsive" src={profilepic1} />
          </div>

    <h2 className="text-1xl justify-left">  Figure 2: Maximum Similarity Distribution for Unlabeled Documents &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Figure 3: t-SNE Dimensionality Reduction for Unlabeled Documents</h2>

    

    <div style={{height: '2em'}}></div>
    <div className="relative h-max" style={{textAlign: 'left'}}>
    <div style={{display: 'inline-block'}}>
    <h2 className="text-3xl font-bold text-neutral-800" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{"Future Work"}</h2>
    <div style={{backgroundColor: 'orange', height: '2px', width: '100%'}}></div>
    <div style={{height: '2em'}}></div>
    </div>
    </div>

    <p> From the discussions above, although the current
        final model is capable of finding quality representations, perform reasonable similarity-based 
        confidence splits, and generate labels based on clusters,
        there are plenty of drawbacks that this model failed
        to address: <br/>


        <li> <strong className="text-stone-100" style={{ color: 'black' }}>Confidence Split</strong>: In some literature (Shu
              et al., 2017), the split threshold is automatically learned from each existing class, which
              requires less manual instructions and could
              lead to potential better splits targeted at individual classes;</li>

        <li> <strong className="text-stone-100" style={{ color: 'black' }}>Clustering</strong>: In the current model, we have
            to specify the number of clusters beforehand,
            which requires prior assumptions. We can
            replace Gaussian Mixture with density-based
            clustering or LDA to automatically detect the
            potential number of new classes. Hierarchical
            clustering can also be applied so that examples
            of multiple centers can be included as well.
        </li>

        <li>
        <strong className="text-stone-100" style={{ color: 'black' }}>Data</strong>: The DBPedia dataset is well-balanced,
        which is less realistic for unseen classes. In
        the example of the online database, classes
        failed to be provided beforehand are more
        likely to be unpopular classes. We need to
        improve method heuristics to work for unbalanced and fine-label datasets.
        </li>

        <li>
        <strong className="text-stone-100" style={{ color: 'black' }}>Extension</strong>: Since the model has the ability to
        detect new labels based on out-of-distribution
        documents, we can naturally extend the model
        to detect potential mislabels. For example,
        we can utilize confidence score to identify
        and relabel poor human annotations and allow
        multi-labels.
        </li>

        <li>
        <strong className="text-stone-100" style={{ color: 'black' }}>Extension</strong>: As discussed in the Method section, we choose simple similarity-based techniques to have the opportunity to further decrease human effort, which is both error-prone
        and time-consuming. We can fully utilize extremely weak supervision techniques to only use class names as supervision and learn 
        class-oriented document representations using attention (Wang et al., 2021).
        </li>

        </p>



    </Section>
  );
});

Resume.displayName = 'Setting';
export default Resume;