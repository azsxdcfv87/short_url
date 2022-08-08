# 短網址產生器

將較長的網址縮減成短網址。

## 網站畫面

![shorturl](https://user-images.githubusercontent.com/103798145/171141619-5682222b-600c-4716-abf8-fea83a3a4837.jpg)

## 功能說明

- 輸入網址轉換成短網址
- 點擊 Copy 按鈕複製網址
- 在瀏覽器輸入短網址轉址到原本的網站
- 點擊標題 URL shortener 可回到首頁

## 環境建置

- Node.js 16.15.0
- Express 4.18.1
- Express-handlebars 6.0.6
- Mongoose 6.5.1
- Dotenv 16.0.1
- body-parser 1.20.0
- nodemon 2.0.19

## 安裝流程

1. 使用終端機下載專案

```
git clone https://github.com/azsxdcfv87/short_url.git
```

2. 進入專案資料夾

```
cd shortURL
```

3. 安裝套件

```
npm install
```

4. 安裝 nodemon 套件

```
npm install nodemon
```

5. 修改 .env 檔案中的 MONGODB_URI 連線 Mongodb

```
MONGODB_URI='mongodb+srv://<account>:<password>@cluster0.9lnbo.mongodb.net/<database name>?retryWrites=true&w=majority'
```

6. 啟動伺服器

```
npm run dev
```

7. 當終端機出現以下訊息，代表伺服器已成功啟動

```
Express is running on http://localhost:3000
```

8. 開啟瀏覽器輸入 http://localhost:3000
