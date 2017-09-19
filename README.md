# eslint-config-stolksdorf

Eslint config for my projects

### use

- `npm install --save-dev eslint eslint-config-stolksdorf`
- For react projects: `npm install --save-dev eslint eslint-plugin-react eslint-config-stolksdorf`

### `package.json`
```
"scripts" : {
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


#### `.eslintrc.js`
```js
module.exports = {
  root: true,
  extends: 'stolksdorf',
  rules: {
    //put project overrides here
  }
};
```
- Put the  `.eslintrc.js` file at the root of your project.
- Put any project specific overrides into this file.


### react
If you have a react project:

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: 'stolksdorf/react',
  rules: {
    //put project overrides here
  }
};
```
