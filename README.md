# Frontend Environment

### Editor and plugins
- [Visual Studio Code](https://code.visualstudio.com/)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): Dùng để tự động format code. Thống nhất coding style
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Dùng để tự động format code. Thống nhất coding style
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur): Syntax highlight cho Vue

### Install
```
git clone https://gitlab.com/aqua-pharm/ManagementSystem.git <root>
cd <roo>/frontend
yarn install
yarn run start
```

### Folder organization
```
<root>
|___build									// webpack and build config
|___config								// environment variable
|___internals								// internals tools and utilities
|___src
|   |___components						// Vue components
|   |    |___index.ts					// List all components
|   |___router							// Vue routers
|   |___store								// Vuex data management
|   |    |___modules						// Vuex modules entities
|   |___main.ts							// Bootstrap file
|___.editorconfig							// config file for editor
|___.gitignores
|___tsconfig.json							// config file for typescript
|___.postcssrc.js							// config file for postcss
|___index.html
```

- `src/components`: mỗi component nên dc chia vào 1 folder với tên folder là tên của component
	- Mỗi folder component **phải có** 1 file `index.vue` làm bootstrap file
	- Tên component theo format ProperCase
	- Có 2 dạng component:
		- Single file component: chỉ gồm 1 file .vue duy nhất [Ref](https://vuejs.org/v2/guide/single-file-components.html). Dùng cho những component đơn giản và ngắn gọn
		- Multiple file component: gồm 4 file (.vue .html .ts .css). Phân chia chức năng của component thành từng file tương ứng. Dành cho những component lớn, phức tạp, phải quản lý data.
	- `src/components/index.ts`: File chính để list ra toàn bộ những Vue component. Nếu register component bằng Vue.component thì có thể dùng global dc [Global Register](https://vuejs.org/v2/guide/components.html#Registration) [Local Register](https://vuejs.org/v2/guide/components.html#Local-Registration)
- `src/store`: Vuex module, có thể ứng với các Entites.
	- Thường 1 module gồm 5 file (index state getters mutations actions) [State · Vuex](https://vuex.vuejs.org/en/state.html)
	- `src/store/index.ts` và `src/store/state.ts`: typescript class để gộp tất cả các modules lại thành 1 store duy nhất

### Lib và annotation
- Để tiện việc viết Component, tui có sử dụng 1 số annotation của Vue
	- [Vue Property Decorator](https://github.com/kaorun343/vue-property-decorator): Dùng để đánh dấu Vue component, input props, injection…
	- [Vuex class](https://github.com/ktsn/vuex-class/): Dùng để connect với Vuex data store

### Internal tool
Để tiện làm việc và tránh sai sót, tui tự viết 2 cái tool generate code cho:
- Component:
	- Command: `yarn run generate` hoặc `npm run generate` => chọn option component
	- Sẽ sinh ra init code cho component và dc đặt trong `src/components`
	- Tự động register global component trong `src/componets/index.ts`
- Module:
 	- Command: `yarn run generate` hoặc `npm run generate` => chọn option module
 	- Sẽ sinh ra init code cho Vuex module và dc đặt trong `src/store/modules`
 	- Tự động sinh ra 1 số class tương ứng cho modules đó
 	- **Note:** phải register module bằng tay bằng cách edit file `src/store/index.ts` và `src/store/state.ts`
**Note:** Nếu không có gì đặc biệt thì nên dùng tool generate để code thống nhất
