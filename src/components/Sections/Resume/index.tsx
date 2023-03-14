
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





    </Section>
  );
});

Resume.displayName = 'Setting';
export default Resume;