# qb-userscripts
Userscripts for qutebrowser

* __username-hider__: Replace all instances of the logged in reddit username with the text "\~anonymous\~"

# Installation

* Download required userscript(s), and `package.json` to `~/.local/share/qutebrowser/userscripts`.

* Install dependencies.

  ```
  cd ~/.local/share/qutebrowser/userscripts
  npm i
  ```
  
* Optionally, bind the userscript(s) to a key(through the browser UI or `config.py`). Example:

```
config.bind('<Ctrl-0>', 'spawn --userscript username-hider.js')
```
