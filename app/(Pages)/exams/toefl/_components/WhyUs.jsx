import React from 'react';
import WhyGridCards from './why-gridCards';

const WhyUs = () => {
    return (
        <div className="my-48">
        <div className="flex flex-col">
          <div className="px-10 3xl:px-0">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold`}
            >
              Why Choose AceYourScore for TOEFL
              Preparation?
            </h1>

          </div>
          <WhyGridCards />
        </div>
      </div>
    );
}

export default WhyUs;
