# Étude Op. 10, No. 1 Waterfall
===================

# 目的 #
HTML/CSSとSassの基本

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |7.3.0    |             |
| vagrant        |1.8.7    |             |
| docker         |1.12.5   |             |
| docker-compose |1.8.0    |             |

# 構成 #

## Sassコンパイル環境の構築

### 開発環境を構築しよう
package.jsonのセットアップ
```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (vagrant)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/k2works/Etude-Op-10.git)
keywords:
author:
license: (ISC)
About to write to /vagrant/package.json:

{
  "name": "vagrant",
  "version": "1.0.0",
  "description": "===================",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/k2works/Etude-Op-10.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/k2works/Etude-Op-10/issues"
  },
  "homepage": "https://github.com/k2works/Etude-Op-10#readme"
}


Is this ok? (yes) yes
```

gulpのインストール
```
$ npm install -g gulp
```

プラグインのインストール
```
$ npm i --save-dev gulp
$ npm i --save-dev browser-sync
$ npm i --save-dev gulp-sass
$ npm i --save-dev gulp-plumber
$ npm i --save-dev gulp-autoprefixer
$ npm i --save-dev gulp-sourcemaps
```

ディレクトリのセットアップ
```
$ cd /vagrant
$ mkdir -p htdocs/common/sass
$ mkdir -p htdocs/common/css
$ mkdir -p htdocs/common/map
$ mkdir -p htdocs/common/img
$ mkdir -p htdocs/common/js
$ touch htdocs/index.html
```

gulpタスクのセットアップ
```
$ cd /vagrant
$ touch gulpfile.js
```

開発環境を実行する
```
$ gulp
```

`http://192.168.30.1:3000`に接続して動作を確認する

## HTML/CSSとSassの基本

### HTML

#### HTMLを書く際のポイント
+ HTML5を使用する
+ lang属性を設定する
```
<html lang="ja-jp">
</html>
```
+ 「IE互換モード」の設定をする
```
<meta http-equiv="X-UA-Compatible" content="IE=Ede"
```
+ 文字コードはUTF-8で設定する
```
<meta charset="UTF-8">
```

### CSS

#### CSSの書き方
+ インデントは半角スペース4個する
+ 可読性のために、開き波括弧の前に1つの半角スペースを入れる
+ 閉じ波括弧は新しい行に記述する
+ :のあとに1つの半角スペースを入れる

#### CSSを書こう
```
$ cd /vagrant
$ touch htdocs/common/css/sample.css
```

#### classに対してスタイルをつける
+ classやidとは?
  + セレクタ:pというHTML要素で、かつblueというclassが付与されているものに対して、
  + プロパティ:テキストの色を、
  + 値:青色にする

+ classとidの違い
  + class: 同じclassを複数使うことができる
  + id: 同じidはそのページの中で1度のみ使える

#### CSSをHTMLに適用するには?
+ インラインCSSは使わない

#### CSSの適用ルール（詳細度）

| セレクタ名    | セレクタ例   |　ページ内での複数指定          |  詳細度 |
|:-------------|:-------------|:-------------------------|:-------|
| 全称セレクタ   | *          |  １度（全要素に付与されるため） | 最小    |
| 要素セレクタ   | div,p      | 複数可(HTMLを書いた分だけ)    | 小      |
| classセレクタ | .text      | 複数可                      | 中      |
| idセレクタ    | #logo      | 一度のみ                     | 大      |

#### 「!important」について

#### コメント

#### まとめ
+ どのセレクタを使っているか意識する
+ 詳細度が高くなりすぎないように気をつける
+ なるべくコメントは残すようにする

### Sass

#### Sassとネスト機能について

```
$ cd /vagrant
$ touch htdocs/common/sass/sample.scss
```

#### 「&」を使って親参照する

#### 変数

#### mixin

#### コメント

#### まとめ
+ Sassのネストを利用して効率良く書く
+ ネストが深くなると詳細度が上がるので、3段階以上は深くしない
+ 共通する値は変数に入れて管理する
+ デザインの塊はmixinで規定し、@includeで使用する

## HTMLの基礎

### HTMLについて

### 各種HTMLタグの解説
+ html/head/bodyタグ

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>サンプル</title>
</head>
<body>

</body>
</html>
```

+ viewport

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

+ h1〜h6

```
<h1>見出し</h1>
```

+ header

```
<header></header>
```

+ footer

```
<footer></footer>
```

+ article

```
<article></article>
```

+ section

```
<sction></section>
```

+ nav

```
<nav></nav>
```

+ p

```
<p>テキストテキストテキスト</p>
```

+ a

```
<a href="http://リンク先URL">リンクテキスト</a>
<a href="#ID名">ページ内リンクテキスト</a>
```

+ img

```
<img src="" alt="">
```

+ ulとli
```
<ul>
  <li>リスト</li>
  <li>リスト</li>
  <li>リスト</li>    
</ul>  
```

## アプリケーションのデプロイ

### Nodeアプリケーションとして実行できるようにする
```
$ cd /vagrant
$ cd htdocs && npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (htdocs) app
version: (1.0.0)
description:
entry point: (index.js) web.js
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /vagrant/htdocs/package.json:

{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "main": "web.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes
$ npm install express morgan gzippo --save
$ touch web.js
```

`web.js`
```
var express = require('express');
var http = require('http');
var gzippo = require('gzippo');
var logger = require('morgan');
var app = express();
app.use(logger());
app.use(gzippo.staticGzip('' + __dirname));
var server = http.createServer(app);
server.listen(process.env.PORT || 3000);
```

```
$ cd /vagrant/htdocs
$ node web.js
```

`http://192.168.30.1:3000`に接続して動作を確認する

### Herokuにアプリケーションをデプロイする

#### gulp-install追加
```
$ cd /vagrant
$ npm install --save gulp-install
```

#### Procfileの追加
```
$ touch /vagrant/htdocs/Procfile
```

`Procfile`
```
web: node web.js
```

#### gulpタスクの追加

```
// Install npm module
var install = require("gulp-install");

gulp.task('install', function() {
  gulp.src(['./htdocs/package.json'])
    .pipe(gulp.dest('./dist'))
    .pipe(install());
});

gulp.task('styles', () => {
  return gulp.src('htdocs/common/css/*.css')
    .pipe(gulp.dest('dist/common/css'));
});

gulp.task('html', ['sass','styles'], () => {
  return gulp.src('htdocs/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('htdocs/common/img/**/*')
    .pipe(gulp.dest('dist/common/img'));
});

gulp.task('extras', () => {
  return gulp.src([
    'htdocs/*',
    'htdocs/*.*',
    '!htdocs/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'images','extras','install'], () => {
  return gulp.src('dist/**/*');
});
```

#### Herokuデプロイ
デプロイ用レポジトリの作成
```
$ cd /vagrant
$ gulp build
$ cd dist
$ git init
$ git add -A
$ git config --global user.email "you@example.com"
$ git config --global user.name "Your Name"
$ git commit -m 'Initial Commit'
```

Herokuアプリケーションのセットアップ
```
$ heroku create op-10
$ git push heroku master
$ heroku domains
$ heroku destroy op-10
```

### GitHub Pageにデプロイする

#### プラグインのインストール
```
$ cd /vagrant
$ npm install --save-dev gulp-gh-pages
```

#### gulpタスクの追加

```
// Deply GitHub Page
var ghPages = require('gulp-gh-pages');

gulp.task('deploy_github', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', ['build', 'deploy_github'], () => {
  return gulp.src('dist/**/*');
});
```

#### デプロイ
```
$ cd /vagrant
$ gulp deploy
```
`https://k2works.github.io/Etude-Op-10/`に接続して動作を確認する

# 参照 #
+ [takanashi66/wtm95_gulp_demo](https://github.com/takanashi66/wtm95_gulp_demo)
