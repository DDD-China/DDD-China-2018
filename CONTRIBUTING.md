# DDD China Conference 2018

## Brief 

This project is main to show some important brief messages of DDD China Conference 2018. We do not choose any fashion framework like React\Angular,  to avoid project being too heavy . Instead of this, we just choose traditional way: jQuery + Html + Less. This keeps project more simplify. Besides, we choose Gulp tool to package our code, even it not stronger than webpack, but it is great enough for this project.

## Remember to submit minimal size image and pdf
Before commit img, please use https://tinypng.com/ to compress and make sure image size less than 1 MB.
Before commit pdf, please use https://smallpdf.com/compress-pdf to compress and make sure size less than 10 MB.

## How to run this project

First of all,  you should make sure you have installed all dependencies. So please run:

```shell
npm install 
```

After installing all dependencies. Please run:

```shell
npm run start
```

This command will build new version code into `build` folder with `gulp`, and it will also start `gulp` watch task

Open `index.html` file in `build` folder with your browser. Gulp with continually build new version after you changing source code. But you must refresh you browser to see your new changes, we had not config hot load for Gulp.  


## How to build 

```shell
npm run build
```

This will build source code into `build` folder, you can use this folder to release.
