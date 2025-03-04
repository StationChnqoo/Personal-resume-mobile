## react-native@0.76.7

- 为什么不用旧版本？
- `0.72.17`的图片选择器，各种报错，`Android`构建八百遍了还是不行 ...

- 为什么不用新版本？
- `0.78.0`的`iOS`也是构建各种报错，很多代码都没合到`0.78.0`，两天前发布的，建议别动 ...

### Java

最低版本是`Java 17`，

```java
sdk use java 17.0.9-oracle
```

### npm

```sh
npm install --legacy-peer-deps
yarn
```

### 清除缓存

```sh
npx react-native clean
```

### 分页

采用`ChatGPT`的建议，避免混淆，

```java
private List<T> records; // 当前页的数据
private int currentPage; // 当前页数
private int totalPages;  // 总页数
private int totalItems;  // 总数据条数
private boolean hasNextPage; // 是否有下一页
```

### PicGo

> 将 API key 保存在安全位置，因为它只显示一次。

```sh
chv_nqs2_c99fe5b01f6ca04b4e4a9191b3f79347a89962419696e52358178098c580ef3302005f91e9eceec0428f3a956b278e10f1c391ac9f52694137d5a034694c58b6
```

### 权限

https://developer.android.com/about/versions/14/changes/partial-photo-video-access?hl=zh-cn

## 打包

### Android

```bash
ENVFILE=.env.dev ./gradlew assembleDebug --refresh-dependencies
ENVFILE=.env.alpha ./gradlew assembleRelease
ENVFILE=.env.beta ./gradlew assembleRelease
ENVFILE=.env.rc ./gradlew assembleRelease
ENVFILE=.env.stable ./gradlew assembleRelease
```

### 清除缓存

```sh
cd android && ./gradlew clean && ./gradlew --stop && rm -r ~/.gradle/caches
```

## A4

A4 纸的标准尺寸是 **210mm × 297mm（8.27 英寸 × 11.69 英寸）**，不同分辨率下的像素数如下：

### **常见分辨率下的 A4 纸像素尺寸**

| DPI（每英寸像素点）        | **像素尺寸（px）** |
| -------------------------- | ------------------ |
| **72 dpi** （屏幕显示）    | 595 × 842 px       |
| **96 dpi** （普通屏幕）    | 794 × 1123 px      |
| **150 dpi** （低质量打印） | 1240 × 1754 px     |
| **300 dpi** （高质量打印） | 2480 × 3508 px     |
| **600 dpi** （专业印刷）   | 4960 × 7016 px     |
| **1200 dpi**（超高精度）   | 9920 × 14032 px    |

### **如何选择 DPI**

- **72/96 dpi** → 适用于屏幕显示（如网页）。
- **150 dpi** → 适用于普通打印（如草稿、普通文档）。
- **300 dpi** → 适用于标准高质量打印（如海报、正式文档）。
- **600+ dpi** → 适用于专业印刷（如杂志、书籍封面）。

如果你是 **做海报、印刷品**，建议使用 **300 dpi 或更高**，避免打印模糊。
