# eslint-config-stolksdorf

Eslint config for my projects

### use

- `npm install --save-dev eslint eslint-config-stolksdorf && touch .eslintrc.js`
- For react projects: `npm install --save-dev eslint eslint-plugin-react eslint-config-stolksdorf && .eslintrc.js`

### `package.json`
```
scripts : {
  //...
  "lint": "eslint --fix *.js **/*.{js,jsx}",
  "lint:dry": "eslint *.js **/*.{js,jsx}"
},
"eslintIgnore": [
  "build",
  "*.built.js"
],
```
- The additional `*.js` is needed to match `.js` files on the root of the project on macOS.
- `lint:dry` allows you to review what eslint will modify before it does.
- Modify `eslintIgnore` in your package to ignore any built or un-lintable files.


```js
// .eslintrc.js
module.exports = {
  'root': true,
  'extends': 'stolkdorf',
  'rules': {
    //put project overrides here
  }
};
```
- Put the  `.eslintrc.js` file at the root of your project.
- Put any project specific overrides into this file.


### react
If you have a react project:

- `npm install --save-dev eslint-plugin-react`

```js
// .eslintrc.js
module.exports = {
  'root': true,
  'extends': 'stolkdorf/react',
  'rules': {
    //put project overrides here
  }
};
```