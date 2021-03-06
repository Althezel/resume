import * as React from 'react';
import Heading from 'components/Heading';
import ExperienceArticle from 'components/ExperienceArticle';
import ExperienceData from 'data/experience';

const ExperiencePage = (): JSX.Element => (
    <>
        <Heading level={1} content="Experience" />
        <hr />
        <section className="experience">
            {ExperienceData.map((experience) => (
                <ExperienceArticle
                    key={`${experience.position} - ${experience.entity}`}
                    content={experience}
                />
            ))}
        </section>
    </>
);

export default ExperiencePage;
