import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About our project</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
        </div>
      </div>
      <div style={{height: '2em'}}></div>
      <p className="prose prose-sm text-gray-300 sm:prose-base text-white"><strong className="text-stone-100">Disclaimer</strong></p>
      <p className="prose prose-sm text-gray-300 sm:prose-base text-white">Due to space limitations, please view all cited papers in the report.</p>
    </Section>
  );
});

About.displayName = 'Intro';
export default About;
