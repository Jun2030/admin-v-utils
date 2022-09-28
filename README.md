# :sparkles:@2030/admin-v-utils

> 针对Vue3版,适用管理端的通用工具方法

## :fire:依赖说明

- `UtilCommon` 通用工具类
- `UtilCrypto` 加/解密工具类
- `UtilStorage` 存储工具类
- `UtilDownload` 下载工具类

## :bulb:使用说明

### 1. 安装
- `npm` 安装：
  ```bash
  > npm i @2030/admin-v-utils
  ```
- `yarn` 安装
  ```bash
  > yarn add @2030/admin-v-utils
  ```
- `pnpm` 安装
  ```bash
  > pnpm add @2030/admin-v-utils
  ```

### 2. 使用

```typeScript
// 方式一：
import { UtilCommon } from '@2030/admin-v-utils';
UtilCommon.formatTimestamp(12132433444);

// 方式二：
import { formatTimestamp } from '@2030/admin-v-utils/common';
formatTimestamp(12132433444)
```
## :notebook: 详细清单
- [x] [UtilCommon](https://github.com/Jun2030/admin-v-utils/tree/main/src/common)
- [x] [UtilStorage](https://github.com/Jun2030/admin-v-utils/tree/main/src/storage)
- [x] [UtilCrypto](https://github.com/Jun2030/admin-v-utils/tree/main/src/crypto)
- [x] [UtilDownload](https://github.com/Jun2030/admin-v-utils/tree/main/src/download)

## :key:License

[MIT](./LICENSE) License &copy; 2022 ZiJun
