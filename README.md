# Nitrogen Search - README　ENGLISH

## Overview

Nitrogen is a simple and elegant search web application designed for mobile devices. It allows users to input search queries and view results using a clean interface. The project utilizes HTML, CSS, and JavaScript to create an intuitive user experience. The application opens search results in a new tab using Bing as the search engine but can be modified to use other engines if desired.

## Features

- **Responsive Design:** Designed to work seamlessly on mobile devices, ensuring that the search input and button are easily accessible.
- **Search Functionality:** Users can enter their desired search queries and receive results through Bing's search engine.
- **User-Friendly Interface:** Simple and straightforward user interface, making it easy for anyone to use.

## File Structure

This project consists of four main files:

1. **`index.html`** - The main HTML file containing the structure of the application.
2. **`style.css`** - The CSS file providing styles to the HTML elements for a polished look.
3. **`script.js`** - The JavaScript file that contains the functionality to handle the search input and results.
4. **`vercel.json`** - A configuration file necessary for deploying the application on Vercel.

## Getting Started

### Prerequisites

To run this project locally or deploy it to Vercel, ensure you have the following:

- A modern web browser (e.g., Chrome, Firefox).
- Internet access to view search results.
- [Node.js](https://nodejs.org/) installed if you plan to use the Vercel CLI.

### Installation Steps

1. **Clone or Download the Repository:**
   - Clone the repository or download the files into a directory on your computer.

   ```
   git clone <repository-url>
   ```

2. **Open in Your Editor:**
   - Use any code editor (e.g., VSCode, Sublime Text) to open the directory containing the files.

3. **Run Locally (Optional):**
   - You can open `index.html` directly in your web browser to test the application locally.

### Deploying on Vercel

To deploy the application on Vercel, follow these steps:

1. **Vercel CLI Installation:**
   - If you haven’t already, install the Vercel CLI:
     ```bash
     npm install -g vercel
     ```

2. **Login to Vercel:**
   - Run `vercel login` and follow the instructions to log in to your Vercel account.

3. **Deploy the Project:**
   - Navigate to the project directory in your terminal and run:
     ```bash
     vercel
     ```
   - Follow the prompts to deploy the project. Vercel will provide a URL where you can access your live application.

### Configuration File

The `vercel.json` file is used for configuring the deployment settings on Vercel. The configuration specifies how static files should be served and sets up routing for the application.

```json
{
    "version": 2,
    "builds": [
        {
            "src": "index.html",
            "use": "@vercel/static"
        },
        {
            "src": "style.css",
            "use": "@vercel/static"
        },
        {
            "src": "script.js",
            "use": "@vercel/static"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/index.html"
        }
    ]
}
```

### How to Use

1. **Open the Application:**
   - Visit the Vercel deployment URL provided after deployment.
  
2. **Search:**
   - Type your search query into the input field and click the "検索" button.
  
3. **View Results:**
   - The search results will open in a new tab using the query entered.

## Customization

Feel free to customize the application to fit your needs:

# Nitrogen Search

## 概要

Nitrogenはシンプルで直感的な検索サイトです。ユーザーはモバイルデバイスでキーボードを使って簡単に検索クエリを入力し、Bingを使って結果を表示することができます。デザインはミニマルで、使いやすさを重視しています。このREADMEでは、プロジェクトの構成、ファイルの説明、インストール手順、デプロイ方法などを詳述します。

## プロジェクトの構成

このプロジェクトは以下のファイルで構成されています：

- `index.html`: サーチボックスとボタンを含むHTMLページ。
- `style.css`: ページのスタイルを定義するCSSファイル。
- `script.js`: 検索機能を実装するJavaScriptコード。
- `vercel.json`: Vercelにデプロイするための設定ファイル。

## ファイルの説明

### `index.html`

このファイルはNitrogenのメインページを構成しています。ユーザーが検索クエリを入力するためのテキストボックスと、検索を実行するボタンがあります。基本的なHTML構造で、CSSとJavaScriptファイルをインクルードしています。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Nitrogen Search</title>
</head>
<body>
    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search..." />
        <button id="searchButton">検索</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### `style.css`

このファイルでは、全体のレイアウト、フォント、色、ボタンのホバーエフェクトなど、ページのスタイルを定義しています。ユーザーがシンプルで洗練された見た目の中で快適に検索できるようにデザインされています。

```css
body {
    ...
}
.search-container {
    ...
}
#searchInput {
    ...
}
#searchButton {
    ...
}
#searchButton:hover {
    ...
}
```

### `script.js`

このファイルは、ユーザーが検索ボタンをクリックしたときの動作を制御しています。入力された検索クエリを取得し、Bing検索の結果ページを新しいタブで表示する機能を実装しています。

```javascript
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    ...
});
```

### `vercel.json`

このファイルはVercelにデプロイするための設定を行っています。どのファイルを静的ファイルとして扱うか、どのパスを`index.html`にリダイレクトするかを定義しています。

```json
{
    ...
}
```

## インストール手順

1. リポジトリをクローンまたはダウンロードします。
2. 上記のファイルを作成し、各ファイルにコードをペーストします。
3. ローカルで開発したい場合は、任意のHTTPサーバー（例：live-serverやhttp-server）を使用して`index.html`を開きます。

## デプロイ手順

NitrogenをVercelにデプロイするには、以下の手順に従ってください。

1. [Vercelの公式サイト](https://vercel.com/)にアクセスし、アカウントを作成します。
2. Vercel CLIをインストールします。Node.jsがインストールされている場合は、以下のコマンドでインストールできます。

   ```bash
   npm install -g vercel
   ```

3. プロジェクトのディレクトリに移動し、以下のコマンドを実行します。

   ```bash
   vercel
   ```

4. 質問に答えながらデプロイを進めます。自動的にプロジェクトがVercelにデプロイされます。

5. デプロイ後、提供されたURLを通じてサイトにアクセスできるようになります。

## 使い方

1. ページにアクセスしたら、テキストボックスに検索したいキーワードを入力します。
2.「検索」ボタンをクリックすると、新しいタブが開き、そのキーワードに関連するBingの検索結果が表示されます。

## 注意事項

- モバイルデバイスに最適化されていますが、デスクトップでも利用可能です。
- CORSポリシーにより、一部の機能が制限される可能性があります。
  
## 今後の機能

- 検索履歴の管理機能
- 検索結果のフィルタリングオプション
- ダークモードの追加

## 貢献

問題の報告や新機能の提案は大歓迎です。Issuesセクションにお気軽にご連絡ください。

---

Nitrogenを楽しんでご利用ください！
- Modify the search engine by changing the URL in `script.js`.
- Adjust styles in `style.css` to create a unique look.
  
## Conclusion

Nitrogen is a straightforward and effective search application ready for mobile users. Through this README, you should have all the necessary information to set up, use, and deploy the application on Vercel successfully. If you have any questions or feedback, feel free to reach out! Happy searching!
