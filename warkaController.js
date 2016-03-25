;(function() { //<-- I was feelin' iife
  angular.module('warkaAppControllers', []) //<-- Create Module
      .controller('warkaController', warkaController) //<--instantiate warkaController

  function warkaController() { //<-- Hoisted warka Controller Callback Function
    var warkaCtrl = this
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // -=-=-=-=- Array Containing Team Image links -=-=-=-=-
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  warkaCtrl.teamArr = [
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_ARTURO_1200x295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_GIANNI_1200x295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_PRECIOUS_1200X295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_JINA_1200x292.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151201_WP_01_PARRY_1200x295_1.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_ADANE_1200x295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_KIDUS_1200x295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_SUNIL_1200x295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_LEONE_1200X295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151103_WP_01_RAFFI_1200x295.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/WW_PR_Team_151209_WP_01_NEERAJ_1200x295_7.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/NEHA_PRADHAN-11-01.jpg",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/10/andrew-ramiro-tirado-11-01.jpg",
    },
  ]

  warkaCtrl.evolutionArr = [
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/imgpsh_fullsize222.jpg",
      version: "Warka Water 5 - version 5.0",
      prototype: "Prototype: 13",
      year: "Year: 2015-2016",
      context: "Context: Test Pilot",
      location: "Location: Bomarzo - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/091_IM_ST_150803_022-copy.jpg",
      version: "Warka Water 4 - version 4.0",
      prototype: "Prototype: 12",
      year: "Year: 2015",
      context: "Context: Test Pilot",
      location: "Location: Bomarzo - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/WW_IM_PH_V3.2_150526_Dorze_Inauguration_P1015901_4032x3024_AV-2.jpg",
      version: "Warka Water 3 - version 3.2",
      prototype: "Prototype: 11",
      year: "Year: 2015",
      context: "Context: Test Pilot",
      location: "Location: Dorze - Ethiopia",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/WW_IM_PH_V1.7_150424_LaStorta_Sheeps_IMG_20150424_073912_4160x3120_AV.jpg",
      version: "Warka Water 1 - version 1.7",
      prototype: "Prototype: 10",
      year: "Year: 2015",
      context: "Context: Experimental Prototype",
      location: "Location: Bomarzo - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/PJ_PH_086_Brazil_SL_06.jpg",
      version: "Warka Water 3 - version 3.0",
      prototype: "Prototype: 9",
      year: "Year: 2014",
      context: "Context: Verada Sustentavel Exhibition",
      location: "Location: Sao Paulo - Brazil",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/WW2.0_03.jpg",
      version: "Warka Water 2 - version 2.0",
      prototype: "Prototype: 8",
      year: "Year: 2014",
      context: "Context: Workshop - Holy Spirit University",
      location: "Location: Kaslik - Lebanon",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/WW1.6_0.3.jpg",
      version: "Warka Water 1 - version 1.6",
      prototype: "Prototype: 7",
      year: "Year: 2014",
      context: "Context: Experimental Prototype",
      location: "Location: Bomarzo - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/CM_EX_PJ_056_IM_PJ_0948.jpg",
      version: "Warka Water 1 - version 1.5",
      prototype: "Prototype: 6",
      year: "Year: 2013",
      context: "Context: MAXXI Museum - Exhibition",
      location: "Location: Rome - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/073_IM_PJ_OR_Munich_IMG_8315.jpg",
      version: "Warka Water 1 - version 1.4",
      prototype: "Prototype: 5",
      year: "Year: 2013",
      context: "Context: Workshop",
      location: "Location: Munich - Germany",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/073_IM_PJ_OR_Paris_065.jpg",
      version: "Warka Water 1 - version 1.3",
      prototype: "Prototype: 4",
      year: "Year: 2013",
      context: "Context: Cite des Sciences et de L'Industrie - Exhibition",
      location: "Location: Paris - France",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/073_IM_PJ_SE_Biennale_IMG_2550.jpg",
      version: "Warka Water 1 - version 1.2",
      prototype: "Prototype: 3",
      year: "Year: 2012",
      context: "Context: 3rd Architectural Biennale - Exhibition",
      location: "Location: Venice - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/WW1.1_03.jpg",
      version: "Warka Water 1 - version 1.1",
      prototype: "Prototype: 2",
      year: "Year: 2012",
      context: "Context: Workshop - IUAV University",
      location: "Location: Venice - Italy",
    },
    {
      url: "http://www.warkawater.org/wp-content/uploads/2014/12/073_IM_PJ_OR_IMG_1959.jpg",
      version: "Warka Water 1 - version 1.0",
      prototype: "Prototype: 1",
      year: "Year: 2012",
      context: "Context: Workshop",
      location: "Location: Addis Ababa - Ethiopia",
    },

  ]

  warkaCtrl.newsArr = [
    {
      date: "18",
      monthAndYear: "MAR 2016",
      title: "AWARD | WINNER | WORLD DESIGN IMPACT PRIZE",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2016/03/warkawater_wdipwinner.jpg",
      paragraph: "We are honored to share that Warka Water​ has just been announced as the WINNER of the International Council of Societies of Industrial Design (Icsid)​ World Design Impact Prize!! \n\nOur founder Arturo Vittori​ accepted the award tonight at the WDC 2016 Design Gala in Taipei. \n\nMore information on this illustrious award and recognition can be found at http://worlddesignimpact.org/",
    },
    {
      date: "11",
      monthAndYear: "MAR 2016",
      title: "AWARD | EXHIBIT | WORLD DESIGN IMPACT",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2016/03/12800164_670396279767903_8994424633295414050_n.png",
      paragraph: "Warka Water, voted one of three finalists for the 2015-2016 World Design Impact Prize by the International Council of Societies of Industrial Design (Icsid), will be presented in front of an international design audience on March 18 in Taipei (Taiwan, Chinese Taipei) by the project’s director, Arturo Vittori. On the same day, the winner of the prize will be announced at the International Design Gala, one of the signature events of World Design Capital® Taipei 2016. \n\nIcsid awards the World Design Impact Prize biennally to an industrial design-driven project aiming to benefit society. More information about the prize may be found at www.worlddesignimpact.org",
    },
    {
      date: "22",
      monthAndYear: "FEB 2016",
      title: "LECTURE | UNIVERSIDAD DEL NORTE | BARRANQUILLA, COLOMBIA",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2016/02/12734007_663171863823678_3569293135381720057_n.png",
      paragraph: "Arturo Vittori will be giving a free and open lecture Monday, February 22nd, 11am-1pm at Universidad del Norte in Barranquilla, Colombia.",
    },
    {
      date: "17",
      monthAndYear: "FEB 2016",
      title: "LECTURE | PONTIFICIA UNIVERSIDAD JAVERIANA | BOGOTA, COLOMBIA",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2016/02/bogota-university-jpg.jpg",
      paragraph: "Arturo Vittori, Director of Warka Water, is giving a free lecture Wednesday, February 17, 3 – 5 pm, at Pontificia Universidad Javeriana’s Auditorium Marino Troncoso in Bogotá, Columbia.",
    },
    {
      date: "13",
      monthAndYear: "JAN 2016",
      title: "AWARD | FINALIST | WORLD DESIGN IMPACT",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2016/01/finalist-wdiprize.jpg",
      paragraph: "We are absolutely thrilled to share that Warka Water has been chosen as a finalist for the International Council of Societies of Industrial Design (Icsid) World Design Impact Prize! From 82 nominations this year, Warka Water is now one of the final three selections for the Prize. \n\nFor more information, click: \n\nhttp://www.icsid.org/news/year/2016_news/articles2102.htm \n\nThank you to all who helped get us to this point — your support has been invaluable to us and is deeply appreciated.",
    },
    {
      date: "10",
      monthAndYear: "JAN 2016",
      title: "EXHIBIT | I.D.E.A. | COLORADO COLLEGE, USA",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2016/01/LogoSquare-1.jpg",
      paragraph: "Warka Water will be exhibited at the Colorado College I.D.E.A. (InterDisciplinary Experimental Arts) Hydrologic exhibit, curated by Holly Parker, from January 18 – March 5, 2016. Arturo Vittori is the Featured Artist in Residence there and will be delivering the keynote address at the opening event on Thursday, January 21st, and will lead a workshop to construct a Warka Water tower with those in attendance later in the week. \n\nThe Hydrologic exhibition and events focus on artists and architects, like Vittori, who are actively changing the landscape of water availability through art and design. The projects presented, like Warka Water, combine both science and art, function and form, to find creative new approaches to water scarcity around the world.\n\nFor more information, please visit the Upcoming IDEAS site: http://sites.coloradocollege.edu/ideaspace/upcoming/",
    },
    {
      date: "12",
      monthAndYear: "DEC 2015",
      title: "CROWD FUNDING CAMPAIGN LAUNCHED!",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2015/12/IMG_20150514_104247-6.jpg",
      paragraph: "Thank you for your extraordinary support and for believing in Warka Water. We are back from our recent trip to India, where Warka Water 5.0 will be installed at a new pilot site next year. We would love to get your help to bring Warka Water to India. Please support us on our new crowdfunding campaign! \n\nhttp://bit.ly/1Oo9jQc \n\nFinally, our National Geographic “Breathrough” episode on Water Apocalypse airs on Sunday, Dec 20 at 10 am EST. We look forward to sharing the story behind our first pilot in Dorze!",
    },
    {
      date: "01",
      monthAndYear: "DEC 2015",
      title: "EXHIBITION | WARKA WATER 3.2",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2015/12/imgpsh_fullsize.jpg",
      paragraph: "Warka Water will be exhibited at the Indian Institute of Technology (IIT), Mumbai during the conference Cumulus Mumbai 2015. Project material samples, drawings, panels, videos, full scale prototype and a scale model will be displayed to illustrate the project. \n\nVenue: VMCC, Opposite IDC, IIT Bombay Date: 3 – 5: December 2015",
    },
    {
      date: "29",
      monthAndYear: "NOV 2015",
      title: "CONFERENCE | CUMULUS | BOMBAY",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2015/11/CM_NW_151129_Cumulus_Bombay.jpg",
      paragraph: "Cumulus Mumbai 2015 is a series of events revolving around sustainability and design projects that focus on water: ‘In a planet of our own: a vision of sustainability with a focus on water’. \n\nArturo Vittori, an event Keynote Speaker, will be directing a workshop titled: “Water from Air.” There will also be an exhibition about Warka Water will take place during the event where several project materials will be displayed with videos, panels, scale models and full scale prototypes. Venue: VMCC, Opposite IDC, IIT Bombay Date: 3 – 5: December 2015 Link: http://cumulusmumbai2015.org/home.html",
    },
    {
      date: "05",
      monthAndYear: "NOV 2015",
      title: "CONFERENCE | TEDX | ADDIS ABEBA",
      imgUrl: "http://www.warkawater.org/wp-content/uploads/2015/11/CM_NW_151004_TEDX_Addis_1000x563.jpg",
      paragraph: "Warka Water project will be presented at the coming TedxAddis the 21th of November. This edition conference topic is “Building Bridges – Linking Knowledge”. TED is a nonprofit organization devoted to Ideas Worth Spreading. The main theme of this coming conference is “All or Nothing”: “The world we inhabit today is one full of challenges, opportunities and contradictions where our ability to grapple with the future is grounded in our choices. And although we are beginning to realize that life isn’t a grand zero sum equation, sometimes we must polarize others and wager everything we have in order to realize our full potential.” \n\nEvent: TEDxBangalore Date: November 21th, 2015\n\nFor more information: http://www.tedxaddis.com/index.php/jstuff/2015",
    },
  ]




  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // -=-=-=-=- Arrays Containing questions and -=-=-=-=-=
  // =-=-=-=-= answers used on the FAQ page =-=-=-=-=-=-=-
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

 warkaCtrl.faqSupport = [
  {
    question: "Did You Receive Assistance From Other Organizations, Such As The University In Ethiopia?",
    answer: "We worked independently with no specific assistance from other organizations. Only some external collaboration in specific project development phases.",
  },
  {
    question: "Who Is Funding The Warka Water Project At This Point?",
    answer: "We do not have the financial support yet to help us complete the study and bring it to production. Your help and generosity will help us bring the towers to the communities in need!",
  },
  {
    question: "How Can I Get More Involved In The Warka Water Project?",
    answer: "To learn more about our project, you can visit:\
    Our official website: www.architectureandvision.com/warkawater\
    Facebook page: www.facebook.com/architectureandvision\
    Flickr: /www.flickr.com/photos/125357782@N02\
    If you would like to publish an article or a blog post on Warka Water to help us spread the word, or have any other collaboration ideas, please drop us an email at mail@architectureandvision. And lastly, help us make this Kickstarter project a success by making a donation here! We would greatly appreciate your support for Warka Water.",
  },
]
 warkaCtrl.faqAlternatives = [
  {
    question: "Are There Any Alternative Or Even Complementary (To Warka) Water-Gathering Solutions That Have Been Previously Adopted In Local Communities?",
    answer: "Historically, there are some cases of rural communities adopting similarly low-tech and passive solutions for water collection.",
  },
  {
    question: "Why Not Simply Dig More Wells?",
    answer: "There are several reasons: You do not always find water. And even if you do, sometimes it is not potable. Often, you need to drill deep in the ground, approximately 500m to find water. Bringing water to the top requires treadle pumps and electrical equipment, which are both expensive and difficult to maintain. Various international organizations have invested funds to build wells in these communities. However, maintaining them has been a challenge, as local governments cannot always keep them in function or successfully repair damages.",
  },
  {
    question: "What Is The Difference Between FogQuest Harvesters And Warka Water?",
    answer: "In addition to its water collection abilities, the Warka is designed to be used as a space for public gathering. We are focused on creating a beautiful structure that can blend into the natural and cultural environments of the rural communities, not simply putting steel masts and a net to collect water. The Warka is made up of environmentally sustainable and biodegradable materials that can be sourced locally, which can also give way to a new economy.",
  },
]
 warkaCtrl.faqEnviroment = [
  {
    question: "How Do You Identify The Right Site For The Warka Insilation?",
    answer: "Studying the local climate and gathering data is fundamental to site selection. Using the monitoring equipment ‘Warkino’, we analyze the weather conditions and assess the presence and frequency of fog, rain and dew in the area. Once the site has been identified as suitable for Warka, a test prototype of 1 sqm devices will be installed and monitored for 6 months. The site should have sufficient space available and free for the construction of the Warka.",
  },
  {
    question: "Does The Tower Require The Presence Of Low-Lying Airborne Water Droplets To Function Effectively, Or Can It Simply Draw Water From The Air When Humidity Levels Are Sufficiently High?",
    answer: "The tower can work better with the presence of the fog, but it can also function without it. The Warka tower is also designed to collect rainwater during the rainy season.",
  },
  {
    question: "Is The System Able To Capture More Than 100 Liters Of Water Per Day In Places Where There Is High Humidity In The Atmosphere Or It Rains Frequently?",
    answer: "Naturally, it would collect more water.",
  },
  {
    question: "Are There Any Inhabited Rural Areas In Ethiopia Where The Towers *Wouldn’t* Work Well?",
    answer: "Some areas may have more favorable conditions than others. However, air always contains a certain amount of water, irrespective of local ambient temperatures and humidity conditions. This makes it possible to produce water from air almost anywhere in the world. Locations with high rates of aerosol and humidity are best to install a condenser.",
  },
  {
    question: "Is The Water Harvesting System From The Atmosphere Affected By Air Pollution?",
    answer: "Warka is meant to be settled in the high plateau area where no pollution is present due to the absence of technology.",
  },
]
 warkaCtrl.faqMaintenance = [
  {
    question: "What Is The Lifecycle Of A Warka Tower? Does It Require Maintenance?",
    answer: "Warka Warka installed in Ethiopia is estimated to last from 6 to 10 years. The maintenance of the structure is very important to guaranty a long duration. It is important to check-up regularly the correct functioning and apply the maintenance needed to keep Warka operative such as replacement of filters, mesh reparation, ropes regular tightening and bamboo element substitution when damaged. After the first pilot test will be tested we will have a better understanding of its durability.",
  },
  {
    question: "How Does It Hold Up To Rain, Wind, Hail, Heat, Cold, Dust, Electrical And Storms?",
    answer: "Warka is designed to withstand different weather conditions and collect rainwater during the rainy season. In case of severe weather events such as a sand storm or electrical storm, the mesh can be flattened down. In case of a hurricane event, the tower can be lowered down to the ground by 4 people in 30 minutes and stored in a safe place.",
  },
  {
    question: "Does Anything Break?",
    answer: "All the elements, natural fibers and plastic mesh, may in part need some maintenance and replacements, such as the substitution of cracked bamboo components.",
  },
]
 warkaCtrl.faqInstallation = [

  {
    question: "How Is It Constructed?",
    answer: "Warka is designed to be easily built by local villagers. It will be distributed as a kit of elements prefabricated in a local factory. The kit will be assembled in 1 day by a team of 4 people without scaffolding and electrical tools. The final assembly takes less than an hour.",
  },
  {
    question: "How Much Space Does It Need?",
    answer: "A vacant area of approximately 100 sqm is required for the construction of one Warka. An area of about 400 sqm is required for its installation as footprint.",
  },
  {
    question: "If You Have More Than One Warka, How Far Apart Do They Have To Be?",
    answer: "They can be close to one another.",
  },
  {
    question: "How Much Expertise Does One Need To Install The Warka Tower?",
    answer: "Special skills are not required to install the Warka Tower. We will organize a training course to give the basic instructions on how to assemble and maintain the Warka and distribute manuals on ‘Construction’ and ‘Operation and Maintenance’.",
  },
  {
    question: "Can Inexperienced Visitors Interact With The Warka Tower Directly?",
    answer: "",
  },
]
 warkaCtrl.faqMaterialsAndDesign = [
  {
    question: "What Materials Do Locals Need To Make The Warka Tower Within Their Communities?",
    answer: "Warka consists of local and biodegradable materials such as bamboo, hemp and bio-plastic. Bamboo is the main material used for the frame structure. It is available locally in Ethiopia and can be found in many areas of the world.",
  },
  {
    question: "Tell Us More About The Mesh Fabric.",
    answer: "The mesh hanging inside the structure is under development at the moment. We are testing several materials with special coating that enables water collection. Atmospheric water vapor from the air condenses on the cold surface of the net, forms droplets of liquid water (dew), and falls under the influence of gravity into a container found at the bottom of the structure. The mesh technology is low-cost and relies on gravity and local weather conditions. The mesh will be custom made and produced, but the specific location for manufacturing it is to be determined.",
  },
  {
    question: "Some Sketches Show Outstretched Bamboo Extensions. What Are These Elements?",
    answer: "This is the canopy that will shade the area around WW. This will create a protected environment against the eat during the day for people from the community and later an illuminated space for the night. It is also necessary for lowering down the temperature at the WW base.",
  },
  {
    question: "Can The Warka Tower Be Made In Different Sizes, Capacities, And Styles?",
    answer: "We are developing different options to find the best design that is suitable for various environmental contexts. The look and functionality of Warka Water have evolved over numerous iterations and prototype versions.",
  },
  {
    question: "Which Softwares Did You Use To Design The Towers?",
    answer: "Since the design involves complex geometry, it had to be done using several parametric computing programs and techniques. But we always kept in mind that the construction needs to be simple and easy. Parametric Grasshopper was used for the design, the kinematics and mechanics were studied and simulated with Autodesk Inventor, and the 3D mesh with Autocad.",
  },
]
 warkaCtrl.faqFunction = [
  {
    question: "How Does The Warka Tower Collect Water?",
    answer: "WW is designed for harvesting dew and fog and also for rain collection, providing varying amounts of potable water throughout the year. Water can be taken directly and locally from the environment, without wasting energy in transport. Rainwater and fog will be captured and stored during the meteorological events. Water by condensation will occur more frequently at night when the air temperature goes below the dew point.",
  },
  {
    question: "How Much Water Does One Warka Tower Produce And How Is The Water Handled?",
    answer: "The project is still in an exploratory phase, but the aim is to collect an annual average of 50 to 100 litres of potable water a day. The harvested water can be used as drinking water and stored for other purposes like irrigation. We will introduce a water management system that teaches the principles of permaculture and appoint a water manager to administer the water distribution guidelines.",
  },
  {
    question: "Have The Water Collectors Been Tested?",
    answer: "We are experimenting with different types of materials and technologies – from polymeric meshes to natural ones – and measuring the water collection performance of the Warka.",
  },
  {
    question: "How Clean Is The Water Collected With The Warka And How Can You Avoid Contamination?",
    answer: "The water produced from rain, fog and dew most likely, if the enviroment is not polluted, will comply with WHO (World Health Organization) recommended guidelines for drinking water. Nevertheless, the probable presence of small amounts of animal and/or vegetal bacteria (e.g., from the excretions of insects drinking the dew water) may require a light antibacterial treatment like boiling or microfiltration. We are currently developing lost-cost water filtering solutions to embed in the Warka towers.",
  },
  {
    question: "When Should The Water Be Harvested Every Day?",
    answer: "The water should be harvested very early in the morning, before sunrise.",
  },
]
 warkaCtrl.faqProject = [
  {
    question: "What Is Warka Water?",
    answer: "WW is a vertical structure designed to collect / harvest potable water from the air. It offers an alternative water source to rural populations that face challenges in accessing drinkable water.",
  },
  {
    question: "What Motivated You To Come Up With The Design?",
    answer: "In 2012, we visited the small isolated villages up on high plateau in the North East region of Ethiopia, where we witnessed this dramatic reality: the lack of potable water. The villagers live in a beautiful natural environment but often without running water, electricity, a toilet or a shower. To survive here, women and children walk everyday for miles towards shallow and unprotected ponds, where the water is often contaminated with human and animal waste, parasites, and diseases. It was imperative to take action and create a solution to mitigate the water shortage issue.",
  },
  {
    question: "What Is The Meaning Of Warka?",
    answer: "The name “Warka Water” comes from the Warka Tree (Ficus Vasta), a giant wild fig tree native to Ethiopia. The tree’s fruit provides nourishment for the people and animals, and its shade is traditionally used for public gatherings and school classes. The Warka tree constitutes a very important part of the Ethiopian culture and ecosystem.",
  },
  {
    question: "Tell Us More About The Inspirations Behing The Project.",
    answer: "The project drew inspiration from various sources. From nature, we observed and studied the Namib Beetle, Spider Web, Termite Hives, Cactus Spines to learn how natural organisms collect and retain water from its surroundings. Culturally, we were inspired by the social significance of the Warka tree, Ethiopian craftsmanship and basket weaving techniques as well as the traditional Mediterranean fish traps called 'Nassi di Giunco’.",
  },
  {
    question: "What Is Needed To Have A Successful Project?",
    answer: "In order to have a successful installation, the following elements must be present:\
    – social need for water\
    – suitable meteorological conditions and topography\
    – community that will maintain and use it.",
  },
  {
    question: "How Much Does Each Tower Cost To Build?",
    answer: "Once the prototype development and testing phases are completed, we hope to manufacture the Warka on a large scale, which will bring the cost down. For Ethiopia our estimated cost per tower is about $ 1000 – significantly less than other water relief options available. The exact cost will depend on where it will be manufactured.",
  },
  {
    question: "What Does It Take To Produce The Warka Towers In Great Numbers?",
    answer: "We need to complete the development phase, test the prototypes by launching and monitoring at pilot locations, and then proceed with the large-scale production. During the pilot phase, we will survey the local surroundings to source materials and determine production sites and requirements.",
  },
  {
    question: "Is The Warka Water Project Only Focusing On Ethiopia, Or Can Other Places Or Countries Benefit From The Towers?",
    answer: "Our goal is to first pilot the towers in Ethiopia and study the possibility of installing them in other geographical contexts that present similar meteorological and topological characteristics as the pilot site.",
  },
  {
    question: "Where Are The Towers Installed Now?",
    answer: "Warka Water project is in the development phase and has not been installed in Ethiopian communities yet. Currently, prototypes are installed in Italy to run experiments and tests.",
  },
  {
    question: "What Has Been The Local Response To The Tower’s Looks And Aesthetics? Has There Been Any Resistance To Its Placement In Communities?",
    answer: "Warka has not been installed in local communities yet. Nevertheless, a part of the Warka Water concept is to develop a design that can blend into the natural surroundings and aesthetically complement the local architecture. One of our main sources of inspiration, particularly for the structure’s outer shell, was the traditional Ethiopian craftsmanship and basket-weaving techniques.",
  },
  {
    question: "How Many Warka Towers Have Been Realized To Date?",
    answer: "We have constructed 9 Warka towers so far. We are still in the prototyping phase, so we haven’t installed any permanently yet. We are working at the moment on version 3.1",
  },
  {
    question: "What Is The Difference Between Warka Water V1.0 And V2.0?",
    answer: "Warka Water version 2.0 is a 12m structure, 3m taller than the previous prototype. We implemented an improved connection system between the juncus canes, which is faster to assemble. The base is much wider, and thus more stable and allows for maintenance from the inside. There are moving roots with rotating mirrors that keep the birds away from the tower. Packaging and transportation have been optimized as well.",
  },
  {
    question: "What Is Happening Right Now At Warka Water?",
    answer: "We are developing a new prototype, Warka Water version 3.1, and looking for funding to support the completion of the project.",
  },
  {
    question: "What Is Next For Warka Water?",
    answer: "To finish developing version 3.1 and launch the first pilot in Ethiopia by the beginning of 2015.",
  },
]
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=- Show Object object that is used -=-=-=-=-=-
// =-=-=-=-= alongside the expand funciton to -=-=-=-=-=
// -=-=-=-=- make a collapsable list for the FAQ -=-=-=-
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
warkaCtrl.showObj = {
  project: {},
  function: {},
  materials: {},
  installation: {},
  maintenance: {},
  enviroment: {},
  alternatives: {},
  support: {},
}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=-=-=-=-= the expand function =-=-=-=-=-=-=-=-
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

warkaCtrl.expand = function(key, index){
  if(warkaCtrl.showObj[key][index]) {
    warkaCtrl.showObj[key][index] = false
  }
  else{warkaCtrl.showObj[key][index] = true}
  console.log(warkaCtrl.showObj);
     }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=-=-=-=-= Constructor Functions =-=-=-=-=-=-=-
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

      warkaCtrl.NewTeam = function( url ) {
        this.url = url
        warkaCtrl.teamArr.push(NewTeam)
      }

      warkaCtrl.NewEvo = function( url, version, prototype, year, context, location ) {
        this.url = url,
        this.version = version,
        this.prototype = prototype,
        this.year = year,
        this.context = context,
        this.location = location,
        warkaCtrl.evolutionArr.push( NewEvo )
      }

      warkaCtrl.newNews = function( date, monthAndYear, title, imgUrl, paragraph ) {
        this.date = date,
        this.monthAndYear = monthAndYear,
        this.title = title,
        this.imgUrl = imgUrl,
        this.paragraph = paragraph,
        warkaCtrl.newsArr.push( newNews )
      }


   } //<-- End of warkaController callback function
 }()); //<-- End of iife
