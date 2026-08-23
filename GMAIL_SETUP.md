# Gmail 自動寄信設定

1. 前往 https://script.google.com/，建立「新專案」。
2. 將 `Code.gs` 的全部內容貼進編輯器並儲存。
3. 點右上角「部署」→「新增部署作業」。
4. 類型選「網頁應用程式」。
5. 「執行身分」選擇「我」；「誰可以存取」選擇「所有人」。
6. 完成 Google 授權後，複製部署產生的 `/exec` 網址。
7. 打開 `qinqin.html`，把 `PASTE_GOOGLE_APPS_SCRIPT_URL_HERE` 換成該網址。

完成後，按下「好」或送出文字時會在背景直接寄信，不會開啟 Gmail。
