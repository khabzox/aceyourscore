import React from 'react';
import WhyGridCards from './why-gridCards';

const WhyUs = ({examName}) => {
    return (
        <div className="my-48">
        <div className="flex flex-col space-y-9">
          <div className="px-10 3xl:px-0">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold`}
            >
              Why Choose AceYourScore for {examName} Preparation?
            </h1>

          </div>
          <WhyGridCards examName={examName} />
        </div>
      </div>
    );
}

export default WhyUs;
