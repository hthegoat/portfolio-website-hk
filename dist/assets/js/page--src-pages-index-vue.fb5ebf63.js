(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"35uc":function(t,e,s){"use strict";var a=s("yrif");s.n(a).a},"5NMK":function(t,e,s){},"9BE4":function(t,e){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:l,children:i=[]}=e,{class:n,staticClass:r,style:o,staticStyle:c,attrs:m={},...u}=l;return s("svg",{class:[n,r],style:[o,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 524"},m),...u},i.concat([s("title",[a("mu")]),s("path",{attrs:{d:"M86.26 189.887V138.1c-15.582 15.035-23.93 21.717-45.634 38.98C23.374 155.92 16.14 148.123 0 134.759c52.313-37.866 82.922-69.05 103.513-107.473C108.522 17.819 112.973 8.353 115.2 0l64.557 12.25c-4.453 6.683-4.453 6.683-11.687 20.048-5.566 9.466-10.018 16.705-17.81 28.4h269.914c33.948 0 52.87-1.115 70.122-3.342v61.254c-18.366-1.67-26.157-2.227-54.54-2.784v74.061h21.705c26.156 0 38.4-.557 54.539-3.34v62.367c-16.14-2.784-28.94-3.341-54.54-3.341h-21.703v74.618h11.13c26.156 0 38.4-.557 52.87-2.784v61.254c-14.47-2.784-27.827-3.341-51.757-3.341H68.452c-21.704 0-33.948.557-49.53 3.341v-61.254c15.026 2.227 29.495 2.784 54.539 2.784h12.8v-74.618H62.33c-25.044 0-37.844.557-54.54 3.34v-62.367c16.14 2.784 28.383 3.341 54.54 3.341h23.93zm55.097-74.061v74.061h45.078v-74.061h-45.078zm0 129.747v74.618h45.078v-74.618h-45.078zm95.721 74.618h46.192v-74.618h-46.192v74.618zm0-130.304h46.192v-74.061h-46.192v74.061zm96.279 130.304h47.304v-74.618h-47.304v74.618zm0-130.304h47.304v-74.061h-47.304v74.061zm175.304 297.36l-53.426 33.412c-20.035-46.219-33.948-69.607-66.783-116.383l47.861-23.944c32.278 39.536 48.974 64.595 72.348 106.916zm-151.374 19.49l-60.66 13.365c-8.349-54.015-11.688-69.607-26.157-116.94l53.982-12.25c15.583 43.991 22.818 68.493 32.835 115.826zm-129.113 9.467l-60.661 5.569v-22.831c0-21.16-4.452-71.278-8.348-98.564l53.983-6.125c9.46 50.674 12.8 75.175 15.026 121.951zM55.652 524L7.235 485.577c33.948-33.411 50.087-57.356 69.008-104.132l51.2 25.616C104.626 461.075 90.157 483.906 55.653 524z"}})]))}}},QQEI:function(t,e,s){"use strict";s("qePV");var a={name:"PostCard",components:{AppImage:s("aHhq").a},computed:{isLarge:function(){return this.index%3==0},postUrl:function(){return"/blog/".concat(this.post.slug.current)}},props:{post:Object,index:Number}},l=(s("RAtC"),s("KHd+")),i={name:"PostList",components:{PostCard:Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aka-post-card bg-card relative flex flex-col h-full",class:{"is-large":t.isLarge}},[s("div",{staticClass:"relative flex flex-auto w-full"},[s("g-link",{staticClass:"block w-full",attrs:{to:t.postUrl}},[s("AppImage",{staticClass:"aka-card-image relative flex flex-auto w-full",attrs:{"image-classes":"block w-full h-full object-cover absolute","main-image":t.post.mainImage,placeholder:""}})],1)],1),s("div",{staticClass:"post-card-content relative flex flex-col p-6 h-full w-full"},[s("div",{staticClass:"post-card-meta font-semibold text-xs leading-tight mb-4"},[t.post.author?s("span",[t._v(" By: "+t._s(t.post.author.name)+" /")]):t._e(),t._v("\n      Posted on: "+t._s(t.post.publishedAt)+"\n    ")]),s("g-link",{staticClass:"post-card-link inline-flex font-medium text-base px-4 -ml-4",attrs:{to:t.postUrl}},[s("h2",{staticClass:"post-card-heading font-bold text-lg leading-tight mb-auto"},[t._v("\n        "+t._s(t.post.title)+"\n      ")])])],1)])}),[],!1,null,"8d1e5392",null).exports},props:{posts:Array}},n=(s("35uc"),Object(l.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"aka-blog-posts grid gap-8 items-stretch"},this._l(this.posts,(function(t,s){return e("li",{key:t.node.id},[e("PostCard",{attrs:{index:s,post:t.node}})],1)})),0)}),[],!1,null,"eb385190",null));e.a=n.exports},RAtC:function(t,e,s){"use strict";var a=s("5NMK");s.n(a).a},"Ue3/":function(t,e,s){},"XS6+":function(t,e,s){},"Z7+i":function(t,e){t.exports={functional:!0,render(t,e){const{_c:s,_v:a,data:l,children:i=[]}=e,{class:n,staticClass:r,style:o,staticStyle:c,attrs:m={},...u}=l;return s("svg",{class:[n,r],style:[o,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",viewBox:"0 0 128 128"},m),...u},i.concat([s("title",[a("Akaraui Logo")]),s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("circle",{attrs:{cx:"62.5",cy:"62.5",r:"62.5",fill:"#FFF0AE"}}),s("circle",{attrs:{cx:"62.5",cy:"66",r:"60",fill:"#FFF",stroke:"#3D3D3D","stroke-width":"2"}}),s("circle",{attrs:{cx:"67",cy:"67",r:"61",fill:"#FF7171"}}),s("path",{attrs:{fill:"#3D3D3D","fill-rule":"nonzero",d:"M85.158 73.35H67.521c-.911 11.074-6.266 18.821-16.064 23.242a101.342 101.342 0 00-4.102-4.99c6.79-2.553 11.075-6.29 12.852-11.211 1.686-4.831 2.53-13.535 2.53-26.114L62.6 40.811c0-1.459-.023-3.396-.069-5.811H90.97v54.55c0 2.598-.82 4.285-2.461 5.06-2.097 1.093-5.947 1.663-11.553 1.708-.684-2.734-1.299-4.876-1.846-6.425 2.325.09 4.307.136 5.948.136 2.734 0 4.101-.957 4.101-2.87v-13.81zm0-5.4V56.532H68.342l-.137 5.742-.273 5.47v.204h17.226zm0-16.817V40.537h-16.68c0 1.55-.022 5.081-.068 10.596h16.748zm-46.62 29.736v7.315H33V36.709h22.49v44.16H38.537zM49.884 75.4V60.635H38.537V75.4h11.348zm0-20.166V42.178H38.537v13.056h11.348z"}}),s("path",{attrs:{fill:"#FFF0AE","fill-rule":"nonzero",d:"M87.158 71.35H69.521c-.911 11.074-6.266 18.821-16.064 23.242a101.342 101.342 0 00-4.102-4.99c6.79-2.553 11.075-6.29 12.852-11.211 1.686-4.831 2.53-13.535 2.53-26.114L64.6 38.811c0-1.459-.023-3.396-.069-5.811H92.97v54.55c0 2.598-.82 4.285-2.461 5.06-2.097 1.093-5.947 1.663-11.553 1.708-.684-2.734-1.299-4.876-1.846-6.425 2.325.09 4.307.136 5.948.136 2.734 0 4.101-.957 4.101-2.87v-13.81zm0-5.4V54.532H70.342l-.137 5.742-.273 5.47v.204h17.226zm0-16.817V38.537h-16.68c0 1.55-.022 5.081-.068 10.596h16.748zm-46.62 29.736v7.315H35V34.709h22.49v44.16H40.537zM51.884 73.4V58.635H40.537V73.4h11.348zm0-20.166V40.178H40.537v13.056h11.348z"}})])]))}}},aHhq:function(t,e,s){"use strict";var a=s("9BE4"),l={name:"AppImagePlaceholder",components:{ImagePlaceholder:s.n(a).a}},i=s("KHd+"),n={components:{AppImagePlaceholder:Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-primary flex flex-col items-center justify-center"},[e("ImagePlaceholder",{staticClass:"w-20 lg:w-40 fill-current"})],1)}),[],!1,null,null,null).exports},computed:{remoteSanityImage:function(){return this.mainImage&&this.mainImage.asset.url?this.$urlForImage(this.mainImage.asset.url,this.$static.metadata.sanityOptions).width(this.width).auto("format").quality(this.quality).url():null},hasLocalImage:function(){return this.useLocalImage&&this.mainImage&&this.mainImage.asset.localFile}},props:{mainImage:Object,imageClasses:String,useLocalImage:{type:Boolean,default:!0},placeholder:{type:Boolean,default:!1}}},r=s("Kw5r"),o=r.a.config.optionMergeStrategies.computed,c={metadata:{sanityOptions:{projectId:"0bst43w8",dataset:"production"}}},m=function(t){var e=t.options;e.__staticData?e.__staticData.data=c:(e.__staticData=r.a.observable({data:c}),e.computed=o({$static:function(){return e.__staticData.data}},e.computed))},u=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.hasLocalImage?s("g-image",{class:t.imageClasses,attrs:{src:t.mainImage.asset.localFile}}):t.remoteSanityImage?s("img",{class:t.imageClasses,attrs:{src:t.remoteSanityImage}}):t.placeholder?s("AppImagePlaceholder",{staticClass:"w-full h-full absolute"}):t._e()],1)}),[],!1,null,null,null);"function"==typeof m&&m(u);e.a=u.exports},gMLW:function(t,e,s){"use strict";s("qePV");var a={name:"ProjectCard",components:{AppImage:s("aHhq").a},computed:{projectUrl:function(){return"/projects/".concat(this.project.slug.current)}},props:{project:Object,index:Number}},l=s("KHd+"),i={name:"ProjectList",components:{ProjectCard:Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"relative flex flex-auto w-full"},[e("g-link",{staticClass:"block w-full",attrs:{to:this.projectUrl}},[e("AppImage",{staticClass:"aka-card-image relative flex flex-auto w-full",attrs:{"image-classes":"block w-full h-full object-cover absolute","main-image":this.project.mainImage,placeholder:""}}),e("h2",{staticClass:"font-bold text-xl text-center leading-loose mt-6 mb-4 lg:mt-10 lg:mb-8"},[this._v("\n      "+this._s(this.project.title)+"\n    ")])],1)],1)}),[],!1,null,null,null).exports},props:{projects:Array}},n=(s("jNta"),Object(l.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"aka-projects grid gap-8 items-stretch"},this._l(this.projects,(function(t){return e("ProjectCard",{key:t.node.id,attrs:{project:t.node}})})),1)}),[],!1,null,"a215f3cc",null));e.a=n.exports},iyQ6:function(t,e,s){"use strict";s.r(e);var a=s("Z7+i"),l={components:{AppLogo:s.n(a).a},props:{heading:String,subheading:String}},i=(s("xUcS"),s("KHd+")),n=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"text-gray-700 body-font"},[s("div",{staticClass:"container flex flex-col items-center px-5 py-16 sm:pt-0 mx-auto md:flex-row"},[s("div",{staticClass:"flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow sm:items-start md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center"},[s("h1",{staticClass:"mb-8 text-2xl font-bold tracking-tighter text-center text-gray-700 lg:text-left lg:text-5xl sm:text-3xl title-font"},[t._v("\n                    Entrepreneur & Performance Marketer\n                 ")]),s("p",{staticClass:"mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl"},[t._v("\n                     I am a freelance marketing professional with experience in multiple industries. I work with clients to develop actionable marketing campaigns that convert and drive sales.\n                 ")]),s("p",{staticClass:"flex items-left mb-2 text-gray-600"},[s("span",{staticClass:"inline-flex items-left flex-shrink-0 w-6 h-6 mr-2 rounded-full"},[s("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[s("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),s("path",{attrs:{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"}})])]),t._v("$1.6 million in revenue generated")]),s("p",{staticClass:"flex items-left mb-2 text-gray-600"},[s("span",{staticClass:"inline-flex items-left flex-shrink-0 w-6 h-6 mr-2 rounded-full"},[s("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[s("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),s("path",{attrs:{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"}})])]),t._v("10 million impressions")]),s("p",{staticClass:"flex items-left mb-6 text-gray-600"},[s("span",{staticClass:"inline-flex items-left flex-shrink-0 w-6 h-6 mr-2 rounded-full"},[s("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[s("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),s("path",{attrs:{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"}})])]),t._v("Average of 4x ROAS")]),s("div",{staticClass:"flex justify-center"},[t._m(0),s("p",{staticClass:"mt-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:mx-4 sm:text-left"},[t._v("\n                         Take A Look At Some Of My Work\n                         "),s("br",{staticClass:"hidden lg:block"}),s("a",{staticClass:"inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ",attrs:{href:"/temp/"}},[t._v("\n                             My Work\n                             "),s("svg",{staticClass:"w-4 h-4 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor"}},[s("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),s("path",{attrs:{d:"M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"}})])])])])]),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/contact/"}},[e("button",{staticClass:"flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"},[this._v("\n                         Contact Me\n                     ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-5/6 lg:max-w-xl lg:w-full md:w-1/2 sm:w-max"},[e("img",{staticClass:"object-cover object-center rounded-lg ",attrs:{alt:"hero",src:"https://i.ibb.co/5Kkxjnx/DSC0764-4.jpg"}})])}],!1,null,"0dd2ea10",null).exports,r=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mx-auto"},[e("div",{staticClass:"container px-5 mx-auto lg:px-24 lg:py-20"},[e("div",{staticClass:"flex flex-col w-full mb-12 text-left lg:text-center"},[e("h1",{staticClass:"mb-6 text-2xl font-semibold text-blue-800 title-font"},[this._v("\n                   Companies I've \n                   "),e("br",{staticClass:"md:hidden"}),this._v("\n                   worked with:\n               ")])]),e("div",{staticClass:"grid grid-cols-3 gap-16 my-16 text-center lg:grid-cols-6 sm:grid-cols-1 sm:mb-1"},[e("div",{staticClass:"flex items-center justify-center "},[e("img",{staticClass:"block object-contain h-16",attrs:{src:"https://ecosystemsnj.com/wp-content/uploads/2019/12/Group-19462.png",alt:"Todoist Logo"}})]),e("div",{staticClass:"flex items-center justify-center "},[e("img",{staticClass:"block object-contain h-16",attrs:{src:"https://burythehatchet.com/wp-content/uploads/2017/05/bth-logo-final.png",alt:"logo"}})]),e("div",{staticClass:"flex items-center justify-center "},[e("img",{staticClass:"block object-contain h-16",attrs:{src:"https://route9community.com/wp-content/uploads/2015/10/AMAZING-ESCAPE-ROOM.png",alt:"logo"}})]),e("div",{staticClass:"flex items-center justify-center "},[e("img",{staticClass:"block object-contain h-16",attrs:{src:"https://s3.amazonaws.com/seat-engine-files-production/styles/logos/310/original/sf-logo-on-transparent-2018-web-size-large.png?1524357330",alt:"logo"}})]),e("div",{staticClass:"flex items-center justify-center "},[e("img",{staticClass:"block object-contain h-16",attrs:{src:"http://ustoritseneca.com/assets/images/g24.png",alt:"logo"}})]),e("div",{staticClass:"flex items-center justify-center "},[e("img",{staticClass:"block object-contain h-16",attrs:{src:"https://bubbletruck.com/wp-content/uploads/2020/07/BubbleTrucktr-CMYK-Transparent-1.png",alt:"logo"}})])])])])}],!1,null,null,null).exports,o=s("QQEI"),c=s("gMLW"),m=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"text-gray-700 body-font"},[this._m(0),this._m(1),e("p",{staticClass:"w-full mt-12 mb-8 text-sm text-center text-gray-500"},[this._v("More About Me "),e("a",{staticClass:"inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ",attrs:{href:"/about/"}},[this._v("\n                       Go\n                        "),e("svg",{staticClass:"w-4 h-4 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor"}},[e("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),e("path",{attrs:{d:"M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"}})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container px-8 mx-auto pt-12 lg:px-4"},[e("div",{staticClass:"flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center"},[e("h1",{staticClass:"mb-6 font-semibold tracking-tighter text-blue-700 sm:text-4xl title-font"},[this._v('\n                       "In a data-driven world, marketing campaigns should be tailored to specific audiences with real data in mind."\n                    ')]),e("p",{staticClass:"mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3"},[this._v("\n                    In the past three years, I have managed $375k in ad spend for clients, generating $1.5 million total in new revenue. Freelance work has allowed me to learn multiple industries which allows me to tailor my approach to your business.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"flex flex-col w-full px-0 mx-auto lg:w-1/3 lg:items-center sm:flex-auto md:px-8",attrs:{action:"https://getform.io/f/2a956545-1194-4d2c-bfdd-72b9b157032e",method:"POST"}},[e("input",{staticClass:"flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-lGray focus:outline-none focus:border-purple-500 sm:mb-2 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2",attrs:{placeholder:"Your Name",type:"text",name:"name"}}),e("input",{staticClass:"flex-grow w-full px-4 py-2 mb-4 mr-4 text-base text-black transition duration-1000 ease-in-out transform rounded-lg bg-lGray focus:outline-none focus:border-purple-500 sm:mb-2 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2",attrs:{placeholder:"Your Email",type:"email",name:"email"}}),e("button",{staticClass:"w-1/2 px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"},[this._v("Send It")])])}],!1,null,null,null).exports,u=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"text-gray-700 body-font"},[s("div",{staticClass:"container px-8 pt-24 pb-24 mx-auto lg:px-4 sm:mb-0 sm:px-2"},[s("div",{staticClass:"flex flex-wrap -m-4"},[s("div",{staticClass:"p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0"},[s("div",{staticClass:"h-full text-left"},[s("a",{staticClass:"inline-flex items-center mt-6"},[s("img",{staticClass:"inline-block object-cover object-center w-16 h-16 mb-8 bg-gray-100 rounded-full",attrs:{alt:"testimonial",src:"data:image/jpeg;base64,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"}}),s("span",{staticClass:"flex flex-col flex-grow pl-4"},[s("span",{staticClass:"font-medium text-gray-900 title-font"},[t._v("Howard Klotzkin")]),s("span",{staticClass:"text-sm text-gray-500 uppercase"},[t._v("Founder/CEO")])])]),s("p",{staticClass:"text-base font-medium leading-relaxed text-gray-700"},[t._v('“Before Harrison we were boosting posts like most of our competitors. When he came on, his first directive was to install and setup attribtution to track the success of the campaigns. At first I did not know if this would make a difference, within a few months I was completely on board and understood the competitive advantage we immediately had."')])])]),s("div",{staticClass:"p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0"},[s("div",{staticClass:"h-full text-left"},[s("a",{staticClass:"inline-flex items-center mt-6"},[s("img",{staticClass:"inline-block object-cover object-center w-16 h-16 mb-8 bg-gray-100 rounded-full",attrs:{alt:"testimonial",src:"https://i.ibb.co/6nmmSCZ/1516543644255-1.jpg"}}),s("span",{staticClass:"flex flex-col flex-grow pl-4"},[s("span",{staticClass:"font-medium text-gray-900 title-font"},[t._v("Marty Parker")]),s("span",{staticClass:"text-sm text-gray-500 uppercase"},[t._v("Owner/Founder")])])]),s("p",{staticClass:"text-base font-medium leading-relaxed text-gray-700"},[t._v('"Harrison was a resource to our marketing team while working for me on a few projects. His attention and data driven approach is unique, which gave us a tremendous advantage over the competition. I would recommend him highly to any team looking to improve there marketing performance!".')])])]),s("div",{staticClass:"p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0"},[s("div",{staticClass:"h-full text-left"},[s("a",{staticClass:"inline-flex items-center mt-6"},[s("img",{staticClass:"inline-block object-cover object-center w-16 h-16 mb-8 bg-gray-100 rounded-full",attrs:{alt:"testimonial",src:"https://i.ibb.co/KLwnc7Z/1609986702702.jpg"}}),s("span",{staticClass:"font-medium text-gray-900 title-font"},[t._v("Jenna S")])]),s("p",{staticClass:"text-base font-medium leading-relaxed text-gray-700"},[t._v('"Dedicated is the phrase that comes to mind when I think about Harrison. I’ve had the pleasure of working with Harrison over the past few months to rebuild a brand post Covid-19 shutdown. Above all, I was impressed with Harrison’s ability to turn limited resources into effective and engaging social media marketing content that heavily impacted metrics. Harrison would be a true asset for any position requiring expert social media marketing skills and efficient communication and I highly recommend him!".')])])])])])])}],!1,null,null,null).exports,h={components:{AppBanner:n,PostList:o.a,ProjectList:c.a,ClientList:r,AppBody1:m,Testis:u},metaInfo:{title:"Home"}},d=null,f=Object(i.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("AppBanner",{staticClass:"pb-1",attrs:{heading:"Harrison",subheading:"start using:"}}),e("ClientList"),e("AppBody1"),e("Testis"),e("section",{staticClass:"mx-auto pt-10"},[e("a",{attrs:{href:"/project2/"}},[e("h2",{staticClass:"font-bold mb-4 text-3xl text-center"},[this._v("Case Study #01")]),e("img",{staticClass:"w-full justify-items-center",attrs:{src:"https://i.ibb.co/jr6p0HJ/DSC02089.jpg"}})])])],1)}),[],!1,null,null,null);"function"==typeof d&&d(f);e.default=f.exports},jNta:function(t,e,s){"use strict";var a=s("XS6+");s.n(a).a},xUcS:function(t,e,s){"use strict";var a=s("Ue3/");s.n(a).a},yrif:function(t,e,s){}}]);