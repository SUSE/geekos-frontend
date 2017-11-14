# Vue.js frontent for geekos.suse.com, the SUSE employee browser


## Install dependencies

```
sudo zypper install nodejs7
sudo npm install -g vue-cli yarn
```


## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Backend

The backend is developed at https://github.com/SUSE/HiGecko, in branch `merge_with_floor`. See the [README](https://github.com/SUSE/HiGecko/blob/merge_with_floor/README.md) for setup instructions.

Configure the backend url in `src/config.js`.
