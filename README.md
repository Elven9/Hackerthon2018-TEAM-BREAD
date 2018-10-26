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

### GIT 流程

#### 觀看 status
```sh
git status
```
可以觀看目前有沒有什麼已經修改的 file.
#### Commit

```sh
git add .
git commit -m "commit message."
```

#### 上傳 code 到遠端 github
```sh
git push
```

#### 把 code 下載（sync）到本機
```sh
git pull
```

#### 更換 branch
```sh
git checkout destination-branch-name
```

#### Merge 流程
**Important**: 一定要確認自己的 code 是否正確，尤其是 merge 到 master 的時候

```sh
# 現在在自己的 branch，比如說剛剛在我自己的 branch 開發完一隻新的 feature，現在想要 merge 到 master

# 先 sync 遠端的 code.
git checkout master       # 切換到 master
git pull                  # 拉回遠端的 code

# 回到自己的 branch 先更新自己的 code ，看有沒有 conflict 需要解
git checkout MB           # 切換到我自己的 branch
git merge --no-ff master  # Merge 回剛剛從遠端拉回來的 code ，更新一下

# 最後再切回去 master 去 merge
git checkout master
git merge --no-ff MB      # 把自己 branch 的新 feature 合併到 master

# 上傳回遠端
git push
```

### GIT 開發流程使用慣例
我們每個人都會有一隻自己的 branch。
在自己的 branch 開發完後，確認**毫無**bug以後，在 merge 回 master

### 開發慣例：
1. import .vue 檔時，在來源地址中不用加.vue
```js
import 'Component' from "@/components/Component";
// 不用寫： import 'Component' from "@/components/Component.vue"
```
2. api 相關 js 檔，放到 src/api 裡，並根據相關性開一個獨立的資料夾
3. 資源文件（比如說圖片、音樂、外部 css 檔等等）放到 assets 裡相對應的資料夾
4. 所有主頁面的 component 放到 src/views/page 裡
5. 所有頁面裡引入的 component ，請開一個跟 component 同名的資料夾並放入相關子元件，並把此資料夾放到 src/components 裡