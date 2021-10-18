// Import stylesheets
import './style.css';
let url_1 = 'https://www.youtube.com/';
let url_2 = 'https://stackblitz.com/';
let url_3 = 'https://stackoverflow.com/';

function UrlExists(url, cb) {
  jQuery.ajax({
    url: url,
    dataType: 'text',
    type: 'GET',
    complete: function (xhr) {
      //console.log(xhr);
      //console.log(typeof cb);
      if (typeof cb === 'function') cb.apply(this, [xhr.status]);
    },
  });
}
function test(xhr) {
  console.log(xhr);
  //alert(xhr);
}

// function validateURL(textval) {
//   var urlregex =
//     /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
//   return urlregex.test(textval);
// }
//console.log(validateURL(url_3));

// UrlExists(url_2, function (status) {
//   if (status === 200) {
//     console.log('200 =>' + status);
//     // Execute code if successful
//   } else if (status === 404) {
//     console.log('404 =>' + status);
//     // Execute code if not successful
//   } else {
//     console.log('else =>' + status);
//     // Execute code if status doesn't match above
//   }
// });

//UrlExists(url_3, test);

// function isValidURL(url) {
//   try {
//     new URI(url);
//     return true;
//   } catch (e) {
//     // Malformed URI
//     return false;
//   }
// }
// console.log('isValidURL==> ' + isValidURL(url_2));

// Base urls
let m = 'https://dev005454eloper.mozill545.0la.org';
let a = new URL('/', m); // => 'https://developer.mozilla.org/'
let b = new URL(m);
//console.log([a, b]);

//console.log(new URL(m));

function getStatus(url) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      request.status; //this contains the status code
    }
  };
  request.open('GET', url, true);
  request.send(null);
}

//getStatus(url_2);
function validateURL(url) {
  const Mail_ID_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const URL_REGEX =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

  let IsURL = url.indexOf('@') == -1;
  console.log(IsURL ? "I's web page link" : "It's eMail Id");
  return (IsURL ? URL_REGEX : Mail_ID_REGEX).test(
    IsURL ? url : String(url).toLowerCase()
  );
}
let url_4 = 'yasar.mohideem@newgen.co';
console.log(validateURL(url_3));

console.log(validateURL(url_4));

const Is_Mail_fn = function (t) {
  return t != null && t.indexOf('@') != -1;
};
console.log(Is_Mail_fn(url_4));
console.log(Is_Mail_fn(null));
