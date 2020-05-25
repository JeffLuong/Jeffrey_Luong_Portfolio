"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _classnames = _interopRequireDefault(require("classnames"));

var _data = require("../../data");

var styles = _interopRequireWildcard({
  "ResumeSection": "PZWlDOLaxIGYkYxGcvO5V",
  "ResumeSubHeader": "_386m3V9hACStksYIkbklTx",
  "ResumeEntry": "_3ztcjlUf9GvrMyUQ7QQbGj",
  "isFlex": "_1BIwF0pZk8CgGIn-dKVEfd",
  "ResumeEntryDetails": "_1KsbohmubcgXSZX_UZz8zC",
  "Role": "_2PwlizCydfwL8UyMURugi",
  "RoleTimeframe": "_1RXKdsu-wW2FkKhvbvC0m_",
  "RoleDescrip": "_1cZ2a33V6Jgo5JcX32jm3T",
  "ResumeSectionHeader": "_2NQoJybb5lbHvT-fekwVDp"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResumeSection = (_ref) => {
  var {
    children,
    title
  } = _ref;
  return (0, _preact.h)("section", {
    className: styles.ResumeSection
  }, (0, _preact.h)("h2", {
    className: styles.ResumeSectionHeader
  }, title), children);
};

var ResumeEntry = (_ref2) => {
  var {
    className,
    children,
    subtitle
  } = _ref2;
  return (0, _preact.h)("article", {
    className: (0, _classnames.default)(styles.ResumeEntry, className)
  }, subtitle && (0, _preact.h)("h3", {
    className: styles.ResumeSubHeader
  }, subtitle), children);
};

var ResumeMiscDetailsList = (_ref3) => {
  var {
    details
  } = _ref3;
  return details.map(grouped => (0, _preact.h)("ul", {
    className: styles.ResumeEntryDetails
  }, grouped.map(tech => (0, _preact.h)("li", null, tech))));
};

var Role = (_ref4) => {
  var {
    role,
    location,
    timeframe,
    description
  } = _ref4;
  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("li", {
    className: styles.Role
  }, role), (0, _preact.h)("li", {
    className: styles.RoleTimeframe
  }, timeframe), (0, _preact.h)("li", null, location), description && (0, _preact.h)("li", null, (0, _preact.h)("p", {
    className: styles.RoleDescrip
  }, description)));
};

var Resume = () => (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)(ResumeSection, {
  title: "Experience"
}, _data.WorkExperience.map((_ref5) => {
  var [company, roles] = _ref5;
  return (0, _preact.h)(ResumeEntry, {
    subtitle: company
  }, (0, _preact.h)("ul", {
    className: styles.ResumeEntryDetails
  }, roles.length > 1 ? (0, _preact.h)("li", null, roles.map(role => (0, _preact.h)("ul", null, (0, _preact.h)(Role, role)))) : (0, _preact.h)(Role, roles[0])));
})), (0, _preact.h)(ResumeSection, {
  title: "Education"
}, _data.Education.map((_ref6) => {
  var [institution, study] = _ref6;
  return (0, _preact.h)(ResumeEntry, {
    subtitle: institution
  }, (0, _preact.h)("ul", {
    className: styles.ResumeEntryDetails
  }, study.map((_ref7) => {
    var {
      major,
      timeframe,
      description
    } = _ref7;
    return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("li", {
      className: styles.Role
    }, major), (0, _preact.h)("li", {
      className: styles.RoleTimeframe
    }, timeframe), (0, _preact.h)("li", null, (0, _preact.h)("p", {
      className: styles.RoleDescrip
    }, description)));
  })));
})), (0, _preact.h)(ResumeSection, {
  title: "Technical"
}, (0, _preact.h)(ResumeEntry, {
  className: styles.isFlex
}, (0, _preact.h)(ResumeMiscDetailsList, {
  details: _data.Tech
}))), (0, _preact.h)(ResumeSection, {
  title: "Interests"
}, (0, _preact.h)(ResumeEntry, {
  className: styles.isFlex
}, (0, _preact.h)(ResumeMiscDetailsList, {
  details: _data.Interests
}))));

var _default = Resume;
exports.default = _default;