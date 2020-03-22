# Screenshot comparator

## How to use

### 1. In config/browser.js we can set headless: false. That will be run browser in view mode
### 2. In config/resolutions.js array of resolutions and name(name will be used in naming screenshot)
### 3. In config/pages.js you can set url(prop url) of site(necessary set https:// or http://) and array pages

## After configuration run first time with expect state(this is write clean screenshots) and after compare with dirty state

To start it:
```shell script
npm run test
``` 
or
```shell script
jest
```
