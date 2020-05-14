export const DefaultTitle = 'Jeffrey Luong';

export const BaseUrl = 'https://www.jeffreyluong.com';
export const SourceCodeUrl = 'https://github.com/JeffLuong/Jeffrey_Luong_Portfolio';

export const UrlMap = {
  '/': {
    title: DefaultTitle,
    name: 'Home',
    description: 'Welcome to my portfolio website!'
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

const NY = 'New York, NY';

export const WorkExperience = [
  ['Button', [
    {
      role: 'Front End Engineer',
      description: 'Built and maintained usebutton.com. Also worked on maintenance and upgrades on various front end web applications.',
      location: NY,
      timeframe: 'Jan 2020 – Apr 2020'
    }, {
      role: 'Web Developer',
      location: NY,
      timeframe: 'Jun 2018 – Feb 2020'
    }
  ]],
  ['Vestorly', [
    {
      role: 'Software Engineer and Designer',
      description: 'Used Ember.js, SASS, Handlebars and other front end frameworks to design and build components for Vestorly web apps.',
      location: NY,
      timeframe: 'Oct 2015 - Jun 2018'
    }
  ]],
  ['General Assembly', [
    {
      role: 'Web Developer',
      description: 'Full stack development using HTML5, CSS, Javascript, jQuery, Node.js, MongoDB, Ruby & Rails, PostgreSQL.',
      location: NY,
      timeframe: 'May 2015 - Aug 2015'
    }
  ]],
  ['Wid Chapman Architects', [
    {
      role: 'Associate Project Manager',
      description: 'Design development and project management for multiple hospitality, commercial and residential projects.',
      location: NY,
      timeframe: 'Apr 2012 - Apr 2015'
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
  ['Javascript', 'ReactJS', 'Redux', 'Next.js', 'EmberJS', 'Typescript/Flow'],
  ['CSS/SCSS/SASS', 'HTML5',' Node.js', 'Webpack', 'Babel', 'Mocha'],
  ['styled-components', 'Immutable.js', 'ES', 'Foundation', 'Go', 'WCAG']
];

export const Interests = [
  ['Web Optimizations', 'Interaction Design', 'Responsive Design', 'Isomorphic Apps'],
  ['Web Design', 'Architecture', 'Photography', 'Minimalist Art'],
  ['Travel', 'Gaming', 'Horology', 'Web Accessibility']
];