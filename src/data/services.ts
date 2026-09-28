// Service pages. Slugs match the old WordPress URLs so links and search rankings carry over.
// Body text is the current site's copy, kept as placeholder until new copy is supplied.

export type Section = { heading?: string; paragraphs?: string[]; list?: string[] };

export type Service = {
  slug: string;
  name: string; // sidebar / menu label
  title: string; // page heading
  image: string;
  slideImage: string; // home page slider
  sections: Section[];
};

export const services: Service[] = [
  {
    slug: 'architect',
    name: 'Architect',
    title: 'Architect',
    image: '/images/architect.jpg',
    slideImage: '/images/slide-architect.jpg',
    sections: [
      {
        paragraphs: [
          'An architect will be able to take your project ideas from your imagination to the drawing board, they will be able to create a design which is tailored to you and consider all possible obstacles so that you sail through planning permission and move forward to the build stage.',
          'Their knowledge and expertise can be the making of a project after all what they design will be the place you call home so choosing the right architect is perhaps one of the most important decisions you’ll make.',
        ],
      },
      {
        heading: 'Get a Brief in Place',
        paragraphs: [
          'Before you even begin approaching architects you need to have a brief in place. You do not need to have a list of everything you want set in stone, but an idea on the following would be useful to steer your architect in the right direction:',
        ],
        list: [
          'Number of bedrooms',
          'Number of bathrooms',
          'Architectural styles you like',
          'Materials you favour',
          'Are you after an open plan arrangement?',
        ],
      },
    ],
  },
  {
    slug: 'newbuilds',
    name: 'New Builds',
    title: 'New Home Builds in Hertfordshire',
    image: '/images/stage-construction.jpg',
    slideImage: '/images/slide-new-builds.jpg',
    sections: [
      {
        paragraphs: [
          'Our experience and knowledge of designing and developing new developments for a range of clients and budgets have helped us keep up-to-date with the latest industry knowledge and provide customers with key answers and advice. We have provided our expertise in new builds since 2000.',
        ],
      },
      {
        heading: 'Our Team Can Manage Your New Build',
        paragraphs: [
          'The team at AJH are fully capable and trained to design and develop your dream property. Whether you have a design already in mind or would like to work closely with our team to design your dream property. AJH team are always happy to help with more than 20 years of experience, you can be confident that AJH are equipped to manage your new build. We even provide a free survey of your site as well as a free quote once we’ve assessed the area.',
        ],
      },
    ],
  },
  {
    slug: 'basement-specialists',
    name: 'Basement Specialists',
    title: 'Basement Specialists',
    image: '/images/basement.jpg',
    slideImage: '/images/slide-basement.jpg',
    sections: [
      {
        heading: 'Make the most of your space',
        paragraphs: [
          'As basement specialists AJH Building Contractors Ltd are able to create additional living space for almost any property from a cellar conversion, through to a new build basement we can unlock the space available to your home.',
        ],
      },
      {
        heading: 'The possibilities are endless',
        paragraphs: [
          'We construct basements for almost any property, even where conventional extension is not feasible, including listed buildings and conservation areas. We are not limited to the footprint of your home, the possibilities are endless — home cinemas, spas, gyms, pools, parking and much more.',
        ],
      },
      {
        heading: 'Valuable extra living space',
        paragraphs: [
          'Converting a disused cellar is a simple, economical way to create valuable extra living space for bedrooms, entertainment and utility rooms from an area of your home that would otherwise have been used for storage or left empty.',
        ],
      },
    ],
  },
  {
    slug: 'extensions',
    name: 'Extensions',
    title: 'Home Extensions Hertfordshire',
    image: '/images/extensions.jpg',
    slideImage: '/images/extensions.jpg',
    sections: [
      {
        paragraphs: [
          'Are you running out of space? Do you like where you live but don’t want to move? Why not improve your home with an extension. From the Design and Planning process to the final fit, AJH Building Contractors Ltd. concentrate on you (the client) throughout the whole project.',
          'House Extensions are a great way to improve your living space and to add additional value to your property. If you are looking to extend our building portfolio covers many types of house extensions including porches, single storey extensions and multi story extensions. We can also quote for garage extensions.',
          'For the rear of your property, we can build orangeries or if you are on a budget a nice conservatory. It is always best to seek planning permission before you build any type of house extension, not only can the structure be required to be removed if planning permission is not approved but it could also affect your rate of council tax. We will be happy to help you design, plan and then submit planning permission for your extension, conversion or outside building project.',
        ],
      },
      {
        heading: 'Single Storey Extensions',
        paragraphs: [
          'AJH are expert installers of single storey extensions. This type of build usually requires planning permission and are a great investment adding value to your property. Mostly brick single storey extensions can be fitted to the front, rear or side of your property. We can add additional features like skylights or a balcony. In addition we can fit a new kitchen, shower or wet room to your new extension.',
        ],
      },
      {
        heading: 'Multi Storey Extensions',
        paragraphs: [
          'Like our other types of extensions we provide we recommend getting planning permission before we start with a multi storey extension. This type of building extension requires specialist roof work and this type of home extension may also require a loft conversion. We can also merge your existing garage into your multi storey extension if required.',
        ],
      },
    ],
  },
  {
    slug: 'property-development',
    name: 'Property Development',
    title: 'Property Development',
    image: '/images/property-development.jpg',
    slideImage: '/images/property-development.jpg',
    sections: [
      {
        heading: 'Does your property have redevelopment potential?',
        paragraphs: [
          'Have you considered a joint venture with your neighbours to undertake a possible development opportunity?',
          'We can provide a confidential consultation where we will be able to help you understand your sites full potential. We can provide you with an experienced architect who will assess your development and can help you with projects in all sectors including: Industrial, Residential and Outbuildings…',
        ],
      },
    ],
  },
  {
    slug: 'garage-conversion',
    name: 'Garage Conversions',
    title: 'Garage Conversion in Hertfordshire',
    image: '/images/garage-conversions.jpg',
    slideImage: '/images/garage-conversions.jpg',
    sections: [
      {
        paragraphs: [
          'Here at AJH, we can carrying out many designs and garage conversions and turning them into beautiful spaces. Some people require more space for a growing family but are unable to afford the cost of a house move, others are looking for that one space in the house to truly call their own. Whatever you’re looking for your garage conversion can add value and that additional space you may be looking for.',
          'Our aim is to remove as much of the hassle and stress as possible from a garage conversion. We can take care of the whole process from design and build including all architectural drawings, planning permission, structural calculations and construction.',
          'That means you’re likely to make money from your garage conversion in the long run. Garage conversions in are amongst the most popular home improvements available. They are less expensive than moving to a new house entirely, but still allow you to increase your living space.',
        ],
      },
    ],
  },
  {
    slug: 'loftconversion',
    name: 'Loft Conversions',
    title: 'Loft Conversion in Hertfordshire',
    image: '/images/loft-conversions.jpg',
    slideImage: '/images/loft-conversions.jpg',
    sections: [
      {
        paragraphs: [
          'AJH can carry out many designs and build loft conversions turning them into beautiful spaces. Some people require more space for a growing family but are unable afford to move to a new house, others are looking for that one space in the house to truly call their own. Whatever you’re looking for your loft conversion we at AJH can help from design to completion.',
          'Our aim is to remove as much hassle and stress as possible from a loft conversion. We can take care of the whole process from design and build including all architectural drawings, planning permission, structural calculations and construction.',
          'That means you’re likely to make money from your loft conversion in the long run. Loft conversions are amongst the most popular home improvements available.',
        ],
      },
      {
        heading: 'Types of Loft Conversions',
        paragraphs: [
          'We understand that no two loft conversions are the same, not only because of the diverse selection of property available across the county but also because of the wonderful variety of people, tastes and of lifestyles. We work hard to tailor every loft conversion project to the needs of the client and include everything they might need.',
          'It might include the newest bathroom suites and wet rooms available, or stunning design features to maximise natural light. Juliet balconies and sky lights can help to achieve this. You might want to discuss the type of loft conversion you are looking to invest in such as a dormer loft conversion, L-shaped dormer loft conversion or a hip to gable loft conversion. We can also add staircases, built-in storage and furniture even lighting and electrics and plumbing is all part of our service.',
        ],
      },
    ],
  },
  {
    slug: 'refurbishments',
    name: 'Refurbishments',
    title: 'Refurbishments',
    image: '/images/refurbishments.jpg',
    slideImage: '/images/refurbishments.jpg',
    sections: [
      {
        heading: 'Home refurbishment in Hertfordshire by dedicated and efficient experts',
        paragraphs: [
          'Maybe it’s time to give your home a little makeover or perhaps you have set out to sell the property and you’d like to increase its value. In all cases, AJH can help you with quick and efficient refurbishment done by expeditious and precise builders.',
        ],
      },
      {
        heading: 'We can help you with both big and small home refurbishments',
        paragraphs: [
          'Even if you are on a budget, you can renovate your home one room at a time. This way the renovation cost will be broken down to different “projects” depending one what areas you want to be refurbished. And rest assured that the reliable handymen are going to follow through, no matter how long it will take.',
        ],
      },
      {
        heading: 'Let us handle your home refurbishment project.',
        paragraphs: [
          'We are specialists and will handle your renovation project are 100% insured, experienced building specialists who will deliver you marketable results in a short period of time.',
        ],
      },
      {
        heading: 'All necessary materials will be supplied',
        paragraphs: [
          'After the survey of your property, we will know exactly what kind of materials will be necessary for the improvements and repair work. Before the actual service takes place, the team will collect the materials and bring them to your home. This way you won’t have to waste your free time with shopping and transportation. The costs for said materials will be added to the final quotation for your service.',
        ],
      },
      {
        heading: 'Transparent pricing',
        paragraphs: [
          'The quote you will be offered for your house refurbishment service is final, and it will include the costs for labour and materials used. In other words, don’t expect some sort of sudden “surprise” charges or similar shenanigans. What you get with AJH is 100% honesty and high quality of workmanship.',
        ],
      },
    ],
  },
];

// Sidebar order on the old site is alphabetical.
export const sidebarServices = [...services].sort((a, b) => a.name.localeCompare(b.name));
