# NItrogenUnblocker

![NItrogenUnblocker](https://th.bing.com/th/id/OIG1.wAUOmqH6o8qwts8hzszJ?w=1024&h=1024&rs=1&pid=ImgDetMain)

## 概要

NItrogenUnblockerは、さまざまなストリーミングサービスのコンテンツにアクセスできるようにするためのウェブアプリケーションです。このアプリケーションは、主に日本国内での制限やブロックを回避するために設計されています。ユーザーは、Tiktok、Niconico、YouTubeなどの動画コンテンツを直接埋め込むことができ、さらにメモやテトリスのようなインタラクティブなゲームを楽しむことができます。

## 特徴

- **動画埋め込み**: ユーザーは、複数の動画プラットフォームからコンテンツを埋め込むオプションを提供しています。
- **ゲーム機能**: テトリスをプレイすることができるゲームモジュールを統合。
- **メモ機能**: 備忘録として使えるメモ機能を搭載。
- **履歴管理**: 過去の埋め込みデータを追跡できる履歴機能。

## 技術的な詳細

NItrogenUnblockerは、HTML5、CSS3、JavaScriptを基盤にして構築されています。ユーザーインターフェースは完全にレスポンシブデザインであり、さまざまなデバイスでの利用を考慮しています。以下に各技術の詳細な説明を示します。

### HTML5

HTML5はこのアプリケーションの基本的な骨格を形成しています。主に、コンテンツの配置を管理し、アプリケーションがどのように構成されるかの概要を提供します。以下の主な要素があります。

- **Canvas**: 時計を描画するための`<canvas>`要素が使用されています。これにより、JavaScriptを使って動的に時計を描画し、時間をリアルタイムで表示することができます。
- **Input & Button Elements**: ユーザーがURLを入力したり、アクションをトリガーするためのボタンを提供します。

### CSS3

CSS3はアプリケーションのスタイリングに使用されており、視覚的な体験を向上させる多くのスタイルプロパティが組み込まれています。

- **背景画像**: ウェブページ全体の背景として使用されます。
- **レスポンシブデザイン**: メディアクエリを利用して画面サイズに応じてフォントサイズなどを調整します。

### JavaScript

JavaScriptはアプリケーションの主なロジックを制御し、ユーザーとのインタラクションを処理します。以下はその主な機能です。

- **動画埋め込みロジック**: ユーザーが入力したURLを基に、埋め込むためのIFRAMEを動的に生成します。
- **ゲームロジック**: テトリスの基本的なゲームプレイがJavaScriptで実装されており、ユーザーの操作に基づいてブロックを移動・回転することができます。
- **メモ機能**: ユーザーが入力したメモを保存・表示するためのロジックが組み込まれており、簡単にアクセスできます。

## 使用方法

1. **埋め込み動画の追加**: 提供されたテキストボックスに動画のURLを入力し、「埋め込む」ボタンをクリックします。
2. **ゲームプレイ**: テトリスタブに移動し、「ゲームスタート」ボタンを押してゲームを開始します。
3. **メモの作成**: メモタブに切り替え、テキストエリアにメモを入力し、「保存」ボタンをクリックしてメモを保存します。

## インストールと展開

アプリケーションをローカル環境で実行するには、次の手順を行います。

1. リポジトリをクローンします。
   ```
   git clone https://github.com/your-repository/NItrogenUnblocker.git
   ```
2. 開発環境をセットアップします。
3. index.htmlファイルをウェブブラウザで開きます。

## インターフェース

アプリケーションには、使いやすいインターフェースが組み込まれており、以下の要素があります。

- **タブナビゲーション**: 各機能への簡単なアクセスを提供します。
- **モーダルウィンドウ**: 操作のヒントや警告メッセージを表示します。

## ライセンス

NItrogenUnblockerはMITライセンスの元で配布されています。ライセンスについての詳細はLICENSEファイルをご確認ください。

## まとめ

NItrogenUnblockerは、日本国内のコンテンツ制限を克服するための効果的なツールです。動画の埋め込みからインタラクティブなゲームまで、幅広い機能を提供しています。シンプルなインターフェースと強力な機能により、ユーザーは快適な体験を得ることができます。あなたもぜひ、このアプリケーションを使って新しいエンターテイメントを体験してみてください。

---

# NItrogenUnblocker

NItrogenUnblocker is a web application designed to provide access to various streaming services' content. This application is primarily aimed at bypassing restrictions and blocks commonly encountered in Japan. Users can embed content from platforms such as TikTok, Niconico, and YouTube directly, and enjoy interactive games like Tetris along with memo functionalities.

## Features

- **Video Embedding**: Users can embed content from multiple video platforms easily.
- **Gaming Functionality**: An integrated gaming module allowing users to play Tetris.
- **Memo Functionality**: A memo feature that serves as a record-keeping tool.
- **History Management**: A history feature to track previously embedded data.

## Technical Details

NItrogenUnblocker is built on the foundation of HTML5, CSS3, and JavaScript. The user interface is fully responsive, ensuring usability across various devices. Below are detailed descriptions of the technologies utilized.

### HTML5

HTML5 forms the backbone of this application, providing the structural framework for its functionalities and layout. Key elements include:

- **Canvas**: The `<canvas>` element is utilized for rendering a clock. This allows for real-time drawing using JavaScript, ensuring the time displays dynamically.
- **Input & Button Elements**: These elements facilitate user interactions for URL inputs and action triggers.

### CSS3

CSS3 is employed to style the application, enhancing the visual experience with numerous style properties.

- **Background Image**: Used as the overarching background for the web page.
- **Responsive Design**: Media queries adjust font sizes and other styles based on screen dimensions.

### JavaScript

JavaScript controls the main logic of the application, handling user interactions. Key functionalities include:

- **Video Embedding Logic**: Dynamically generates IFAMES based on user-submitted URLs.
- **Game Logic**: Implements the fundamental gameplay of Tetris in JavaScript, allowing users to move and rotate blocks based on their input.
- **Memo Functionality**: Logic for saving and displaying user-entered memos is incorporated, allowing easy access.

## Usage

1. **Adding Embedded Videos**: Input the video URL in the provided text box and click the “Embed” button.
2. **Gameplay**: Navigate to the Tetris tab and press the “Start Game” button to initiate the game.
3. **Creating Memos**: Switch to the memo tab, enter text in the text area, and click the “Save” button to store the memo.

## Installation and Deployment

To run the application in a local environment, follow these steps:

1. Clone the repository.
   ```
   git clone https://github.com/your-repository/NItrogenUnblocker.git
   ```
2. Set up your development environment.
3. Open the index.html file in your web browser.

## Interface

The application comes with a user-friendly interface, incorporating the following elements:

- **Tab Navigation**: Provides easy access to each functionality.
- **Modal Windows**: Displays operational hints and warning messages.

## License

NItrogenUnblocker is distributed under the MIT License. For further details, please refer to the LICENSE file.

## Conclusion

NItrogenUnblocker is an effective tool for overcoming content restrictions in Japan. With functionalities ranging from video embedding to interactive gaming, it offers a comprehensive experience. Its simple interface and powerful capabilities ensure users enjoy a seamless experience. Dive in and enhance your entertainment experiences with this application.
