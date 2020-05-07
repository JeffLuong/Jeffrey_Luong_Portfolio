"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Head;

var _preact = require("preact");

var styles = _interopRequireWildcard({
  "cls1": "_1rorMhSkvx7hfssP_Am4Sp",
  "cls2": "_5RDeMcqaubyrijLnG149p",
  "cls3": "_3dV0mbF06VWtNp4F9OaRuU",
  "cls4": "zjl95vxM6OI28s3qOgSHn",
  "cls5": "_3L3ylgM-230IRKemoYjzGq",
  "cls6": "_12-hEI1gZx2Ro-3Q5LvYwf",
  "cls7": "OQta4skA3VzS0g_zYn9Xy",
  "cls8": "_1Ggzg4GhAfVDHaXgH3OSdN",
  "cls9": "_2eCPNrj1lJ7FaJd33bpjwG",
  "cls10": "_1wfaK5MJI_iUEnQ5VvM3cz",
  "cls11": "_28WWDC_GA6AdiKBVT9el_Q",
  "cls12": "_3e0YTGgrwR_JaP4XHnuWGF",
  "cls13": "o9lqEM0TfcluwDL3Btf5H",
  "cls14": "_3FDWPMGIt1HTnxDZANUUoQ",
  "cls15": "sNggIGnR823ZAvkUsYLdx",
  "cls16": "_15kpxiKjh8BKLzh1f5kXmY",
  "cls17": "_3hSxD-U8HIefq4PlqA6jOV",
  "cls18": "_1MIHQt-3Jc1ocwv5mG-dQh",
  "cls19": "ZHv2zSSVzwy8fFNJKhHdW",
  "cls20": "_27wfBZU5IcTnxuVYGqDRWX",
  "cls21": "vf4b1IzJb2x41wVwHqKzt",
  "cls22": "_3NnAkCF5KP-hcPo-Hnym_Z",
  "cls23": "_38ZQ9gZgDrk6eYnjf1vlLw",
  "cls24": "_2OTIoIeSXTclYKxcWHiDav",
  "cls25": "_1qGi-WOmNG9sM-kR-hnRlK",
  "cls26": "_1-WuO03GtOcRIXmyMEMxa_",
  "cls27": "_1TIwt0T00oozEJ9mFhIUec",
  "cls28": "_17-m-47_ZO08VW_Rt7CjTR",
  "cls29": "_2lNxp6pE1YCqBn7NBvt_8_",
  "cls30": "kkE0haNKQsLH5AovKiwbk",
  "cls31": "zfidoI3NjeINGV0lOdUFJ",
  "cls32": "P7wn0CF4hPYFp6tdDzkNh",
  "cls33": "_39o-A2Oscdx5YHo3ZpmFG1",
  "cls34": "jLHszkjVogVAkkJ4UsQr6",
  "cls35": "oHP86fR0cG25zcipP9t6B",
  "cls36": "_1_8m2ryHMJtvJ4dQdq-rsB",
  "cls37": "_1yiNVQDJNifoDTGQlJB7Eu",
  "cls38": "_1xjBck4O62TQ3AYwv0PfzP",
  "cls39": "_iD3L_nvDxneC-d6ZidvF",
  "cls40": "xLm4qY9WG9-xRr2zE7Nln",
  "cls41": "_1jPzQVdEoUoqegkpOvhD8B",
  "cls42": "_2xpSjZQoAgNH1qLU9QK6PR",
  "cls43": "_1g-mj6gB_DWHWLp4JhlsYW",
  "cls44": "_1CMXUZfThQKamz-t5l91Yg",
  "cls45": "_2QkCfuWsxn_zSituUYSCSU",
  "cls46": "_1KTeNQR96ifm5TqlMFf6EM",
  "cls47": "_1rosbIN47fW7Nm08TxiFZs",
  "cls48": "_24Og-6hP1yTLXGrkGfePwn",
  "cls49": "_1LnXROogHo8u5cdqOjeHv1",
  "cls50": "_1VUTeaOAkxdAR7eUH-9t2K",
  "cls51": "_3yetGOfHsT4eFYM6L3lLvw",
  "cls52": "_2ApH7Dq03WRgJNqW3OXx_t",
  "cls53": "_13Wt217K-GJIl_kf1Iwi_y",
  "cls54": "_366h2Rsums2w6Ya6qvcnak",
  "cls55": "_1OpFEEJhOLqKxBQ4-_B8_1",
  "cls56": "_32Qr-VcYpqD2gL6icppZU9",
  "cls57": "_2vnbi2un0OEitUOyJvTR6-",
  "cls58": "_1qQBJBxWO6EXuZMJSI3fr6",
  "cls59": "_1gnOqfsjlurUu3ZPIrIeMK",
  "cls60": "_2vCGJ_GtDYmTdGFUXk33eb",
  "cls61": "_1Rm_sRkuKxE-mb7_uYhwmB",
  "cls62": "_2uy9dfY7W2Qep2BFpKdbh5",
  "cls63": "P1JJyxm33fZrpOa6kFfYm",
  "cls64": "UQJlP3fgQpJzzejf6o9Pc",
  "cls65": "W4YywderWZKOfs2JxMiM_",
  "cls66": "_1jExabImVVqlWO4-c2Xk4d",
  "cls67": "_1Xmr7xnki_F4vMtnMOnT6I",
  "cls68": "_3yxV6IJ_tOhwuad2o0QM99",
  "cls69": "_2eICeNB1cN5TlhNZwj6YsH",
  "cls70": "_1RCOJjJZbi2GUrEvZXzT4C",
  "cls71": "_21CsDKPQmIJ2QkUvTGvs6V",
  "cls72": "_2Opp63Xfb6b2m1R1MSXfwW",
  "cls73": "_7ZzmG-3vvXQJEQpshZhsh",
  "cls74": "_3cGUIS5Fq8L39f-oUH1HdQ"
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Head(_ref) {
  var {
    className,
    svgRef
  } = _ref;
  return (0, _preact.h)("svg", {
    ref: svgRef,
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 438.71 472"
  }, (0, _preact.h)("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, (0, _preact.h)("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, (0, _preact.h)("path", {
    className: styles.cls1,
    d: "M352,255l17.33,5L382,296.92l-16,41.35S319.7,369,318.37,368.67s-21,9.33-21,9.33V322.67l10-25.75,40,21.08Z"
  }), (0, _preact.h)("path", {
    className: styles.cls2,
    d: "M156.42,8.67,88,12,35.54,45.33S.71,122.67,0,124s7.14,84.33,7.14,84.33L63.76,78s51.1-36.67,53-37.33S162.54,24,162.54,24Z"
  }), (0, _preact.h)("path", {
    className: styles.cls3,
    d: "M148.54,8.67l-81.83,32L23.54,100S12,171.67,11.37,177.5,4,227.34,5.37,230s13.34,24.67,13.34,24.67l126.66-185Z"
  }), (0, _preact.h)("path", {
    className: styles.cls4,
    d: "M76.87,84l-7,64,53.5-3.33s32.34-70,29.17-72-31.83-12-31.83-12Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls5,
    points: "197.37 144.67 123.37 144.67 152.54 72.67 204.04 94.67 197.37 144.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls6,
    points: "76.87 84 58.71 108.67 40.54 151.33 69.87 148 76.87 84"
  }), (0, _preact.h)("polygon", {
    className: styles.cls7,
    points: "69.87 148 76.87 175.83 117.37 172 123.37 144.67 69.87 148"
  }), (0, _preact.h)("polygon", {
    className: styles.cls8,
    points: "192.01 168 197.37 144.67 123.37 144.67 117.37 172 192.01 168"
  }), (0, _preact.h)("polygon", {
    className: styles.cls9,
    points: "69.87 148 40.54 151.33 26.04 177.5 76.87 175.83 69.87 148"
  }), (0, _preact.h)("polygon", {
    className: styles.cls10,
    points: "197.37 144.67 235.39 165.26 262.73 205.83 249.76 231 192.01 168 197.37 144.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls11,
    points: "117.37 172 76.87 175.83 80.71 213.13 101.37 213.13 117.37 172"
  }), (0, _preact.h)("polygon", {
    className: styles.cls12,
    points: "133.37 218.44 101.37 213.13 117.37 172 150.32 199.5 133.37 218.44"
  }), (0, _preact.h)("polygon", {
    className: styles.cls13,
    points: "76.87 175.83 26.04 177.5 21.37 204.88 26.04 230.5 30.04 213.13 40.54 205.83 79.33 199.75 76.87 175.83"
  }), (0, _preact.h)("polygon", {
    className: styles.cls14,
    points: "145.37 199.75 171.04 201.5 200.71 214.5 210.04 230.5 249.76 231 192.01 168 117.37 172 145.37 199.75"
  }), (0, _preact.h)("polygon", {
    className: styles.cls15,
    points: "80.71 213.13 69.87 230.5 55.37 210.75 40.54 205.83 79.33 199.75 80.71 213.13"
  }), (0, _preact.h)("polygon", {
    className: styles.cls16,
    points: "283.37 237.25 249.76 231 262.73 205.83 283.37 225.88 283.37 237.25"
  }), (0, _preact.h)("polygon", {
    className: styles.cls17,
    points: "210.04 230.5 241.54 263.71 200.04 312.33 175.37 241.33 210.04 230.5"
  }), (0, _preact.h)("polygon", {
    className: styles.cls18,
    points: "131.37 235.05 131.37 306.92 200.04 312.33 175.37 241.33 131.37 235.05"
  }), (0, _preact.h)("path", {
    className: styles.cls19,
    d: "M239.37,262.57,210,230.5l39.72.5,33.61,6.25,14,66.08V378s-100,70-100,68S200,312.33,200,312.33Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls20,
    points: "145.37 308.02 189.04 446.04 197.37 446 200.04 312.33 145.37 308.02"
  }), (0, _preact.h)("polygon", {
    className: styles.cls21,
    points: "101.37 213.13 72.71 289 131.37 306.92 133.37 218.44 101.37 213.13"
  }), (0, _preact.h)("polygon", {
    className: styles.cls22,
    points: "80.71 213.13 101.37 213.13 72.71 289 44.04 289 80.71 213.13"
  }), (0, _preact.h)("polygon", {
    className: styles.cls23,
    points: "26.04 236 36.04 237.25 69.87 230.5 33.37 296.92 11.37 289 26.04 236"
  }), (0, _preact.h)("polygon", {
    className: styles.cls24,
    points: "33.37 296.92 44.04 289 80.71 213.13 33.37 296.92"
  }), (0, _preact.h)("polygon", {
    className: styles.cls25,
    points: "72.71 289 44.04 289 44.04 300.67 64.04 312.33 76.87 300.67 72.71 289"
  }), (0, _preact.h)("polygon", {
    className: styles.cls26,
    points: "131.37 306.92 111.32 318 64.04 312.33 76.87 300.67 72.71 289 131.37 306.92"
  }), (0, _preact.h)("polygon", {
    className: styles.cls27,
    points: "44.04 289 33.37 296.92 40.62 318 51.46 322.67 64.04 312.33 44.04 300.67 44.04 289"
  }), (0, _preact.h)("polygon", {
    className: styles.cls28,
    points: "131.37 306.92 145.37 308.02 182.19 424.41 131.37 306.92"
  }), (0, _preact.h)("polygon", {
    className: styles.cls29,
    points: "111.32 318 72.71 313.37 79.33 350 117.37 365.66 123.37 377.03 84.04 389.33 96.62 408.67 90.71 446.04 182.19 424.41 131.37 306.92 111.32 318"
  }), (0, _preact.h)("polygon", {
    className: styles.cls30,
    points: "189.04 446.04 96.62 472 90.71 446.04 182.19 424.41 189.04 446.04"
  }), (0, _preact.h)("polygon", {
    className: styles.cls31,
    points: "72.71 313.37 64.04 312.33 57.04 352.67 64.87 355.33 79.33 350 72.71 313.37"
  }), (0, _preact.h)("polygon", {
    className: styles.cls32,
    points: "84.04 389.33 96.62 408.67 69.87 406 36.04 403.33 51.46 384.67 84.04 389.33"
  }), (0, _preact.h)("polygon", {
    className: styles.cls33,
    points: "36.04 442.41 60.62 440.17 90.71 446.04 96.62 408.67 36.04 403.33 36.04 442.41"
  }), (0, _preact.h)("polygon", {
    className: styles.cls34,
    points: "64.04 312.33 51.46 322.67 40.62 318 28.71 365.66 36.04 376.48 40.54 360.67 57.04 352.67 64.04 312.33"
  }), (0, _preact.h)("polygon", {
    className: styles.cls35,
    points: "51.46 384.67 36.04 376.48 28.71 365.66 40.62 318 33.37 296.92 11.37 289 21.37 412.67 36.04 442.41 36.04 403.33 51.46 384.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls36,
    points: "46.37 462.67 96.62 472 90.71 446.04 60.62 440.17 36.04 442.41 46.37 462.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls37,
    points: "21.37 204.88 26.04 236 11.37 289 22.54 240 21.37 204.88"
  }), (0, _preact.h)("polygon", {
    className: styles.cls38,
    points: "20.87 412.67 28.21 440.17 45.87 462.67 20.87 412.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls39,
    points: "57.04 352.67 64.87 355.33 79.33 350 88.04 368.67 68.19 372.67 51.46 368.67 57.04 352.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls40,
    points: "111.32 372.67 123.37 377.03 117.37 365.66 79.33 350 88.04 368.67 111.32 372.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls41,
    points: "57.04 352.67 51.46 368.67 36.04 376.48 40.54 360.67 57.04 352.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls42,
    points: "88.04 368.67 84.04 389.33 51.46 384.67 51.46 368.67 68.19 372.67 88.04 368.67"
  }), (0, _preact.h)("polygon", {
    className: styles.cls43,
    points: "123.37 377.03 111.32 372.67 88.04 368.67 84.04 389.33 123.37 377.03"
  }), (0, _preact.h)("polygon", {
    className: styles.cls44,
    points: "36.04 376.48 51.46 368.67 51.46 384.67 36.04 376.48"
  }), (0, _preact.h)("polygon", {
    className: styles.cls45,
    points: "133.37 232 133.37 232 137.29 209.75 154.04 199.75 173.54 199.75 183.93 205.59 205.77 215.88 210.71 228.3 190.18 214 182.29 208.5 162.71 204.88 145.37 214 133.37 232"
  }), (0, _preact.h)("polygon", {
    className: styles.cls46,
    points: "137.29 209.75 133.37 232 212.29 230.5 175.37 241.33 123.37 237.25 123.37 215.88 137.29 209.75"
  }), (0, _preact.h)("path", {
    className: styles.cls47,
    d: "M148.42,232.58l-15-.58s6-12,12-18,17.34-9.12,17.34-9.12l19.58,3.62,28.42,19.8-13.34-.3-4.08-7.5-15.75-10.25-17.25-2-12,6.5-4,8.5Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls47,
    points: "151.29 213.13 148.54 218.44 148.54 227 152.54 230.5 166.29 230.5 171.04 221.25 171.04 213.13 167.25 209.06 160.29 208.25 151.29 213.13"
  }), (0, _preact.h)("path", {
    className: styles.cls48,
    d: "M137.29,209.75c.75-1,15.75-12.5,15.75-12.5h20.25L187,203.5l19.75,14.94-20-12.44-13.25-6.25H154Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls49,
    points: "154.54 221.25 160.29 221.25 160.29 225.5 154.54 227 152.54 224.13 154.54 221.25"
  }), (0, _preact.h)("polygon", {
    className: styles.cls49,
    points: "160.29 211.75 160.29 214.5 162.54 211.75 160.29 211.75"
  }), (0, _preact.h)("polygon", {
    className: styles.cls50,
    points: "166.29 230.5 173.29 230.5 179.79 229 181.54 219.38 173.91 211.75 167.25 209.06 171.04 213.13 171.04 221.25 166.29 230.5"
  }), (0, _preact.h)("polygon", {
    className: styles.cls51,
    points: "197.37 228 193.29 220.5 177.54 210.25 167.25 209.06 173.91 211.75 181.54 219.38 179.79 229 197.37 228"
  }), (0, _preact.h)("polygon", {
    className: styles.cls52,
    points: "25.76 219.78 25.21 215.88 38.04 207.84 53.54 210.75 69.04 222.02 69.04 228.83 63.67 232.25 25.76 219.78"
  }), (0, _preact.h)("polygon", {
    className: styles.cls53,
    points: "151.29 213.13 148.54 218.44 148.54 227 155.72 230.6 145.94 230.91 144.29 223.25 148.29 214.75 151.29 213.13"
  }), (0, _preact.h)("path", {
    className: styles.cls54,
    d: "M159.79,161h34.5s16.33,15.5,16.42,16.25,0,11.5,0,11.5L165,174.88Z"
  }), (0, _preact.h)("path", {
    className: styles.cls55,
    d: "M126,164.75c-1,.5-8.75,4.87-8.75,4.87v8.63l4,4,41.25-5.62L133.37,163.5Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls56,
    points: "133.37 232 185.29 234 215.29 234 221.04 234 210.71 228.3 197.37 228 133.37 232"
  }), (0, _preact.h)("polygon", {
    className: styles.cls57,
    points: "43.16 214.5 36.79 219.03 35.54 228 36.79 234 39.35 237.25 49.29 235.25 53.54 228 53.54 217.25 47.54 214.5 43.16 214.5"
  }), (0, _preact.h)("path", {
    className: styles.cls58,
    d: "M137.29,178.25c-1.5,0-7-6.75-7-6.75l3.08-8,26.42-2.5L187,169.62l5,5.13Z"
  }), (0, _preact.h)("rect", {
    className: styles.cls59,
    x: "45.79",
    y: "217.25",
    width: "3.5",
    height: "2.53"
  }), (0, _preact.h)("polygon", {
    className: styles.cls59,
    points: "40.54 227 45.79 227 45.79 232 40.54 234 40.54 227"
  }), (0, _preact.h)("polygon", {
    className: styles.cls60,
    points: "33.33 234.4 35.54 222.02 36.79 219.03 43.16 214.5 47.54 214.5 53.54 217.25 66.79 225.88 57.29 217.25 42.04 211.75 35.54 210.75 26.04 218.44 28.04 237.25 39.35 237.25 45.45 236.02 33.33 234.4"
  }), (0, _preact.h)("path", {
    className: styles.cls61,
    d: "M25.21,215.88c.33,0,12.33-10,12.83-10s16.83,2,16.83,2L69,222l-15.5-11.27L38,207.84Z"
  }), (0, _preact.h)("path", {
    className: styles.cls62,
    d: "M49.29,235.25,64.87,232,69,228.83l.83,4S55.54,249,55,249.33s-22.67,2.34-22,2.34,18.41-8.84,18.41-8.84l-5.66-4.16L26,238.5l-2.5-8L26,218.44l2,18.81,16.5-1Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls63,
    points: "36.79 219.03 35.54 228 36.79 234 38.37 236 33.33 234.4 35.54 222.02 36.79 219.03"
  }), (0, _preact.h)("path", {
    className: styles.cls64,
    d: "M53.54,228l-4.25,7.25,14.38-3s.19-8.28,0-8.4l-10.13-6.6Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls65,
    points: "29.37 169.63 51.37 168 66.79 174.88 47.54 183.67 25.21 187 29.37 169.63"
  }), (0, _preact.h)("polygon", {
    className: styles.cls66,
    points: "78.37 303.17 66.71 309 99.87 309 98.24 305.96 97.54 304.67 78.37 303.17"
  }), (0, _preact.h)("polygon", {
    className: styles.cls67,
    points: "66.79 182.25 69.87 172.88 57.71 168 51.37 168 66.79 174.88 47.54 183.67 66.79 182.25"
  }), (0, _preact.h)("polygon", {
    className: styles.cls68,
    points: "46.71 303.33 42.54 301.5 41.21 305.83 45.21 312.33 55.37 308.33 46.71 303.33"
  }), (0, _preact.h)("path", {
    className: styles.cls69,
    d: "M78.37,303.17c.67,0,8.17-2.84,8.67-2.84s6.67,1.42,6.67,1.42l3.83,2.92v1.66H76.87Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls69,
    points: "46.71 303.33 55.37 308.33 48.04 307.17 46.71 303.33"
  }), (0, _preact.h)("path", {
    className: styles.cls3,
    d: "M307.37,296.92l25.34,15.41L347.37,318,352,255l17.33,5L382,296.92l-16,41.35-41.33,26.3L297.37,378l-2.66,46.69L293,456.09l16.33,9.24,29-68.66,31-12s21.34-44.79,21.34-46.4S400.71,303,402,301.5s36.67-54.56,36.67-54.56-.67-48.44,0-49.69-42-71.92-42-71.92l-14-40.52S247.37,15.33,247.37,13.33,197.37,0,197.37,0L181.54,46s52.64,119,53.85,119.26S249.76,231,249.76,231l47.61,91.67Z"
  }), (0, _preact.h)("path", {
    className: styles.cls70,
    d: "M111.21,276.92c.5.33,12.5,12.5,12.5,12.5v14.16l-2,7.5s-8.5,5.84-9.17,5.84-12.17,1-11.67,1h14.67l12-6.84,5.17-12-4.84-17.16-11.09-8.5Z"
  }), (0, _preact.h)("path", {
    className: styles.cls71,
    d: "M171,5.33c-2.33,0-24,1.34-22.5,3.34S139.92,78,139.92,78s30.54,72.67,34,73.33c2,.39,26.7,6,46.91,10.61L247.37,168,288,169.62S217.25,102.67,214,100s-6.56-80.67-6.56-80.67S198.71,0,197.37,0,171,5.33,171,5.33Z"
  }), (0, _preact.h)("path", {
    className: styles.cls72,
    d: "M326.9,308.8s2.2,9.53,0,9.2-12.53,12.33-12.53,12.33l3.34,4L335.37,327S349,329.33,350,328s9.67-18.83,9.33-21.08S349.52,289,349.52,289l-2.15,29Z"
  }), (0, _preact.h)("path", {
    className: styles.cls73,
    d: "M351.4,263.67l14.31,1.66,9.66,20L368.71,318,358,334.33s8.67-27.66,9-29S363.39,282,363.39,282l-13.14-2.75Z"
  }), (0, _preact.h)("polygon", {
    className: styles.cls74,
    points: "197.37 446 293.04 456.09 297.37 378 197.37 446"
  }))));
}