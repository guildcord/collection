# Guildcord Collection
[![License](https://img.shields.io/github/license/guildcord/collection)](https://github.com/guildcord/collection/LICENSE.md)
[![NPM](https://img.shields.io/npm/v/@guildcord/collection?color=blue&logo=npm)](https://www.npmjs.com/package/@guildcord/collection)

A package with extended JavaScript Map as utility.

## Installation
```
# NPM
npm install @guildcord/collection

# Yarn 
yarn install @guildcord/collection
```

## Import

### JavaScript
```js
const { Collection } = require("@guildcord/collection");

const map = new Collection();

map.set("foo", 1);
map.get("foo");
```
<br>

### TypeScript/EsModule
```js
import { Collection } = from "@guildcord/collection";

const map = new Collection();

map.set("foo", 1);
map.get("foo");
```

## Usage

```js
// import { Collection } = from "@guildcord/collection"; Typescript/EsModule
const { Collection } = require("@guildcord/collection");

const map = new Collection();

map.set("foo", 1);
map.get("foo");
```

## License
Licensed under [MIT](LICENSE)
