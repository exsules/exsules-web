import Ember from 'ember';
import { urlRegex } from 'exsules/utils/url-regex';

export function parseText(params) {
  let textToParse = Ember.Handlebars.Utils.escapeExpression(params[0]);

  textToParse = textToParse.replace(urlRegex(), function(s) {
    let url,
        target,
        link = s.trim();

    if (s.trim().match(/^www\./ig)) {
      url = '//' + s.trim();
      target = "_self";
    } else if (s.trim().match(/(#[a-z\d-]+)/ig)) {
      url = '/search?q=' + encodeURIComponent(s.trim());
      target = "_self";
    } else {
      url = s.trim();
      target = "_blank";
    }

    return ' <a href="' + url + '" target="' + target + '">' + link + '</a>';
  });

  return Ember.String.htmlSafe(textToParse);

}

export default Ember.Helper.helper(parseText);
