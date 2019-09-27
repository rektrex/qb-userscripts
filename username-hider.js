#!/usr/bin/env node

const qutejs = require('qutejs');

qutejs.jseval([], () => {
  const user = document.getElementById('email-collection-tooltip-id').children[1].children[0];
  const username = user.innerHTML;

  user.innerHTML = "~anonymous~";

  let user_links = document.getElementsByTagName('a');

  for (let link of user_links) {
    if (link.getAttribute('href') === `/user/${username}/`) {
      link.innerHTML = "~anonymous~";
    }
  }
});
