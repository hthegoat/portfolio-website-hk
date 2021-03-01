
<template>
  <section class="text-gray-700 body-font">
            <div class="container px-8 pt-24 pb-24 mx-auto lg:px-4">
                <div class="flex flex-wrap -m-4">
                    <div class="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
                        <div class="h-full text-left">
                            <a class="inline-flex items-center mt-6">
                                <img alt="testimonial"
                                    class="inline-block object-cover object-center w-16 h-16 mb-8 bg-gray-100 rounded-full"
                                    src="data:image/jpeg;base64,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"> <span
                                    class="flex flex-col flex-grow pl-4">
                                    <span class="font-medium text-gray-900 title-font">Howard Klotzkin</span>
                                    <span class="text-sm text-gray-500 uppercase">Founder/CEO</span>
                                </span>
                            </a>
                             <p class="text-base font-medium leading-relaxed text-gray-700">“Before Harrison we were boosting posts like most of our competitors. When he came on, his first directive was to install and setup attribtution to track the success of the campaigns. At first I did not know if this would make a difference, within a few months I was completely on board and understood the competitive advantage we immediately had."</p>
                        </div>
                    </div>
                    <div class="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
                        <div class="h-full text-left">
                            <a class="inline-flex items-center mt-6">
                                <img alt="testimonial"
                                    class="inline-block object-cover object-center w-16 h-16 mb-8 bg-gray-100 rounded-full"
                                    src="https://i.ibb.co/6nmmSCZ/1516543644255-1.jpg"> <span
                                    class="flex flex-col flex-grow pl-4">
                                    <span class="font-medium text-gray-900 title-font">Marty Parker</span>
                                    <span class="text-sm text-gray-500 uppercase">Owner/Founder</span>
                                </span>
                            </a>
                             <p class="text-base font-medium leading-relaxed text-gray-700">"Harrison was a resource to our marketing team while working for me on a few projects. His attention and data driven approach is unique, which gave us a tremendous advantage over the competition. I would recommend him highly to any team looking to improve there marketing performance!".</p>
                        </div>
                    </div>
                    <div class="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
                        <div class="h-full text-left">
                            <a class="inline-flex items-center mt-6">
                                <img alt="testimonial"
                                    class="inline-block object-cover object-center w-16 h-16 mb-8 bg-gray-100 rounded-full"
                                    src="https://i.ibb.co/KLwnc7Z/1609986702702.jpg">
                                    <span class="font-medium text-gray-900 title-font">Jenna S</span>
                                   
                                </span>
                            </a>
                             <p class="text-base font-medium leading-relaxed text-gray-700">"Dedicated is the phrase that comes to mind when I think about Harrison. I’ve had the pleasure of working with Harrison over the past few months to rebuild a brand post Covid-19 shutdown. Above all, I was impressed with Harrison’s ability to turn limited resources into effective and engaging social media marketing content that heavily impacted metrics. Harrison would be a true asset for any position requiring expert social media marketing skills and efficient communication and I highly recommend him!".</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>