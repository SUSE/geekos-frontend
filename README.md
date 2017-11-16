# Vue.js frontent for geekos.suse.com, the SUSE employee browser

![geekos suse com_screen](https://user-images.githubusercontent.com/582520/32779742-2cfd47a6-c93f-11e7-937a-feef874afcba.jpg)

As part of [SUSE Hackweek](https://hackweek.suse.com/16/projects/teams-dot-suse-dot-com-onboarding-and-floor) we are working on a SUSE employee browser that should provide a single entry point to all relevant user data of your colleagues. An automatically updated team structure (like in the [SUSE Orgchart](https://w3.suse.de/%7Emreichel/SUSE_Engineering_OrgChart.pdf)), team descriptions, office locations and user-defined descriptions are planned.

Basically this is an aggregation of the data currently scattered in eguide, floor, externaltools, tel, onboarding etc.

## Install dependencies

```
sudo zypper install nodejs7
sudo npm install -g vue-cli yarn
```


## Build Setup

Install nodejs, yarn + vue dependencies systemwide:
```
> sudo zypper in nodejs6
> sudo npm i -g vue-cli yarn
```

Running the application:
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
