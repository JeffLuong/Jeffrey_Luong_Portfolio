import { States } from '../utils';

export const DefaultTitle = 'Jeffrey Luong';
export const DefaultDescription = 'Welcome to my portfolio website!';
export const BaseUrl = 'https://www.jeffreyluong.com';
export const SourceCodeUrl = 'https://github.com/JeffLuong/Jeffrey_Luong_Portfolio';

export const UrlMap = {
  '/': {
    title: DefaultTitle,
    name: 'Home',
    description: DefaultDescription
  },
  '/about': {
    title: `${DefaultTitle} | About`,
    name: 'About',
    description: 'A little something about me.'
  },
  '/work': {
    title: `${DefaultTitle} | Work`,
    name: 'Work',
    description: 'Check out some of my work.'
  },
  '/photography': {
    title: `${DefaultTitle} | Photography`,
    name: 'Lens',
    description: 'Check out some of my photography work.'
  }
};

export const UrlPaths = Object.keys(UrlMap);

export const hasPageTitle = url => UrlPaths.some(p => p.includes(url));

export const FeaturedWork = [
  {
    name: 'Button Website',
    img: '/static/img/work/button.png',
    description: 'The public facing website for Button. Integrated with various tools and services including <strong>Marketo</strong>, <strong>HubSpot</strong> and <strong>Contentful</strong>. <br><br> Animated SVGs using <strong>SnapSvg</strong>. Implemented code-splitting via <strong>Webpack</strong> and <strong>React-loadable</strong>.',
    tech: ['React', 'Redux', 'Node.js', 'SCSS', 'Webpack', 'Babel'],
    url: 'https://www.usebutton.com'
  }, {
    name: 'Block It',
    img: '/static/img/work/block-it.jpg',
    description: 'Simple Tetris game built using <strong>React</strong>.',
    tech: ['React', 'Typescript', 'Node.js', 'Express'],
    url: 'https://jeffreyluong-block-it.herokuapp.com/'
  }, {
    name: 'Hue Square',
    img: '/static/img/work/hue-square.jpg',
    description: 'Minimalist color mixing puzzle game. Designed game rules and mechanics. CSS3 animations along with JQuery DOM manipulation.',
    tech: ['Javascript', 'JQuery', 'Node.js', 'Express', 'HTML5/CSS3'],
    url: 'http://www.huesquare.com/'
  }, {
    name: 'Isabel Chen Fashion',
    img: '/static/img/work/isabelchen.jpg',
    description: 'Portfolio website for fashion designer Isabel QZ Chen. Worked with client on layout and interaction designs.',
    tech: ['Javascript', 'JQuery', 'Node.js', 'Express', 'HTML5/CSS3'],
    url: 'http://www.isabelqzchen.com/'
  }, {
    name: 'Weather Now',
    img: '/static/img/work/w-now.jpg',
    description: 'Animated weather conditions based on your geo-location. Utilized <strong>FreeGeoIP</strong> for IP based geo location and <strong>OpenWeather API</strong> for weather conditions based on location.',
    tech: ['Javascript', 'JQuery', 'AngularJS', 'Node.js', 'Express', 'HTML5/CSS3'],
    url: 'http://w-now.herokuapp.com/'
  }, {
    name: 'WikiArticles',
    img: '/static/img/work/wiki-articles.jpg',
    description: 'Simple wiki-style CRUD application with a minimalist design.',
    tech: ['Javascript', 'JQuery', 'Node.js', 'Express', 'MongoDB', 'HTML5/CSS3'],
    url: 'https://ga-wikiarticles.herokuapp.com/'
  }, {
    name: 'JACK.',
    img: '/static/img/work/jack.jpg',
    description: 'A Black Jack game with clean design and slick CSS animations.',
    tech: ['Javascript', 'JQuery', 'HTML5/CSS3'],
    url: 'http://jeffluong.github.io/PROJECT_01_Jack/'
  }
];

export const SocialLinks = [
  ['Github', 'https://www.github.com/JeffLuong'],
  ['Codepen', 'https://www.codepen.io/jluong/'],
  ['LinkedIn', 'https://www.linkedin.com/in/jeffreyluong'],
  ['Instagram', 'https://instagram.com/jeffluong/']
]

export const Photos = [
  ['Film', [
    '/static/img/photography/film/NYalley-thumb.jpg',
    '/static/img/photography/film/Flatiron-thumb.jpg',
    '/static/img/photography/film/Venice-thumb.jpg',
    '/static/img/photography/film/StPeter-thumb.jpg',
    '/static/img/photography/film/Bernini-thumb.jpg',
    '/static/img/photography/film/Isabel-thumb.jpg',
  ]],
  ['Digital', [
    '/static/img/photography/experimental/Jeff-thumb.jpg',
    '/static/img/photography/experimental/Doro-thumb.jpg',
    '/static/img/photography/experimental/Michael-thumb.jpg',
    '/static/img/photography/experimental/Isabel-thumb.jpg',
    '/static/img/photography/experimental/DrawingHands-thumb.jpg',
    '/static/img/photography/experimental/Ponzu-thumb.jpg',
    '/static/img/photography/experimental/Spheres-thumb.jpg',
    '/static/img/photography/experimental/VicenzaCathedral-thumb.jpg',
    '/static/img/photography/experimental/Windmills-thumb.jpg'
  ]]
];

export const WorkExperience = [
  ['GoFundMe', [
    {
      role: 'Senior Front End Engineer',
      description: 'Working on internationalization with a focus on charities in the European market.',
      location: `${States.NY} (Remote)`,
      timeframe: [new Date(2022, 3), new Date(Date.now())],
      current: true
    }
  ]],
  ['Better.com', [
    {
      role: 'Software Engineer V (Front End)',
      description: 'Worked on Purchase and Cash Offer Program flows to improve the home buying process for everyone.',
      location: States.NY,
      timeframe: [new Date(2021, 2), new Date(2022, 3)]
    },
    {
      role: 'Software Engineer IV (Front End)',
      location: States.NY,
      timeframe: [new Date(2020, 6), new Date(2021, 2)]
    }
  ]],
  ['Button', [
    {
      role: 'Front End Engineer',
      description: 'Built and maintained usebutton.com. Also worked on maintenance and upgrades on various front end web applications.',
      location: States.NY,
      timeframe: [new Date(2019, 11), new Date(2020, 5)]
    }, {
      role: 'Web Developer',
      location: States.NY,
      timeframe: [new Date(2018, 5), new Date(2019, 11)]
    }
  ]],
  ['Vestorly', [
    {
      role: 'Software Engineer',
      description: 'Used Ember.js, SASS, Handlebars and other front end frameworks to design and build components for Vestorly web apps.',
      location: States.NY,
      timeframe: [new Date(2017, 2), new Date(2018, 5)]
    }, {
      role: 'Software Engineer and Designer',
      location: States.NY,
      timeframe: [new Date(2015, 9), new Date(2017, 2)]
    }
  ]],
  ['General Assembly', [
    {
      role: 'Web Developer',
      description: 'Full stack development using HTML5, CSS, Javascript, jQuery, Node.js, MongoDB, Ruby & Rails, PostgreSQL.',
      location: States.NY,
      timeframe: [new Date(2015, 4), new Date(2015, 7)]
    }
  ]],
  ['Wid Chapman Architects', [
    {
      role: 'Associate Project Manager',
      description: 'Design development and project management for multiple hospitality, commercial and residential projects.',
      location: States.NY,
      timeframe: [new Date(2012, 3), new Date(2015, 3)]
    }
  ]]
];

export const Education = [
  ['Pratt Institute', [
    {
      major: 'Bachelor of Architecture',
      timeframe: '2006 - 2011',
      description: 'Enrolled in 5 year accredited architecture program. Participated in 2 study abroad programs in Asia and Rome, Italy.'
    }
  ]],
  ['General Assembly', [
    {
      major: 'Web Development',
      timeframe: '2015 - 2015',
      description: 'Enrolled in 12 week intensive course training on full stack web development.'
    }
  ]]
];

export const Tech = [
  ['Javascript', 'ReactJS', 'Redux', 'Next.js', 'EmberJS', 'Typescript/Flow', 'GraphQL'],
  ['CSS/SCSS/SASS', 'HTML5',' Node.js', 'Webpack', 'Babel', 'Mocha', 'Jest'],
  ['styled-components', 'Immutable.js', 'ES', 'ESlint', 'Foundation', 'Go', 'WCAG']
];

export const Interests = [
  ['Web Optimizations', 'Interaction Design', 'Responsive Design', 'Isomorphic Apps'],
  ['Web Design', 'Architecture', 'Photography', 'Minimalist Art'],
  ['Travel', 'Gaming', 'Horology', 'Web Accessibility']
];