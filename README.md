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

### Sass

## HTMLの基礎

### HTMLについて

### 各種HTMLタグの解説

# 参照 #
+ [takanashi66/wtm95_gulp_demo](https://github.com/takanashi66/wtm95_gulp_demo)
