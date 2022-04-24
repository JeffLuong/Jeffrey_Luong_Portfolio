"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorkTimeframe = exports.getRoleLength = exports.Months = exports.States = void 0;
var States = {
  NY: 'New York, NY'
};
exports.States = States;
var Months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};
exports.Months = Months;

var getDateString = date => "".concat(date.toLocaleString('default', {
  month: 'short'
}), " ").concat(date.getFullYear());

var getRoleLength = (start, end) => {
  var months = 0;
  months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  if (months >= 12) {
    var yrs = Math.floor(months / 12);
    var mos = months % 12;
    return "".concat(yrs, " yrs").concat(mos > 0 ? " ".concat(mos, " mos") : '');
  }

  return months <= 1 ? '1 mos' : "".concat(months, " mos");
};

exports.getRoleLength = getRoleLength;

var getWorkTimeframe = (start, end, current) => {
  var now = getDateString(new Date(Date.now()));

  var _end = getDateString(end);

  var _start = getDateString(start);

  return "".concat(_start, " - ").concat(now === _end && current ? 'Present' : _end, " \xB7 ").concat(getRoleLength(start, end));
};

exports.getWorkTimeframe = getWorkTimeframe;