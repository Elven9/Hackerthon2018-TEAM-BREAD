# hackerthon-project

## 剛安裝這個 Project 需要執行的步驟
```
npm install
```

### 開發過程需要用的指令
```
npm run serve
```

下完指令打開上面的所寫的網址，若沒有設定的話，直接開啟 `http://localhost:8080/`

### Webpack 裡常用設定：

1. alias:

```js
// 引入 src 時可以使用下列寫法（兩個是相等）：
import 'Component' from "@/components/Component";

// 引入 src/views:
import 'Component' from "view/Component";

// 引入 src/views/page:
import 'PageComponent' from "page/PageComponent";
```

### 開發慣例：
1. import .vue 檔時，在來源地址中不用加.vue
```js
import 'Component' from "@/components/Component";
// 不用寫： import 'Component' from "@/components/Component.vue"
```
2. api 相關 js 檔，放到 src/api 裡，並根據相關性開一個獨立的資料夾
3. 資源文件（比如說圖片，音樂等等）放到 assets 裡相對應的資料夾
4. 所有主頁面的 component 放到 src/views/page 裡
5. 所有頁面裡引入的 component ，請開一個跟 component 同名的資料夾並放入相關子元件，並把此資料夾放到 src/components 裡