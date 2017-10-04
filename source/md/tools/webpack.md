# Webpack

## Подключение

```npm
npm i -D webpack
```

```npm
npm i -D webpack-dev-server
```


## Loaders


<ul>
<li><a target="_blank" href="https://webpack.js.org/concepts/loaders/">Инструкция</a></li>
<li><a target="_blank" href="https://webpack.js.org/loaders/">Список loaders</a></li>
</ul>

### Все типы программ
```npm
npm i -D babel-loader json-loader 
```
### Содержащие GUI / пакет views
```npm
npm i -D css-loader sass-loader style-loader file-loader
```

## Плагины

<ul>
<li><a target="_blank" href="https://webpack.js.org/concepts/plugins/">Инструкция</a></li>
<li><a target="_blank" href="https://webpack.js.org/plugins/">Список плагинов</a></li>
</ul>


### Все типы программ
```npm
npm i -D babel-minify-webpack-plugin clean-webpack-plugin copy-webpack-plugin
```

### Содержащие GUI / пакет views
```npm
npm i -D extract-text-webpack-plugin
```

## Конфигурации

- [service](/configs/webpack/prod/service)
    - [lib](/configs/webpack/prod/lib)
    - [cli](/configs/webpack/prod/cli)
- [backend](/configs/webpack/prod/backend)
- [frontend](/configs/webpack/prod/frontend)
- [fullstack](/configs/webpack/prod/fullstack)
    - [standalone](/configs/webpack/prod/standalone)