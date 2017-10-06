# Babel

<p><b>Используемая версия:</b> <a target="_blank" href="https://github.com/babel/babel/releases/tag/v6.26.0" />6.26.0</a></p>
<p><a target="_blank" href="https://babeljs.io/">Официальная документация</a></p>

Препроцессор для Javascript с возможностью транспиляции исходного кода.

__Препроцессор__ — это компьютерная программа, принимающая данные на входе и выдающая данные, предназначенные для входа другой программы (например, компилятора).

__Траспиляция__ - перевод исходного кода языка программирования в код другого языка программирования, либо в другую версия стандарта того же языка.

<p><a target="_blank" href="https://github.com/babel/awesome-babel">Популярные расширения</a></p>

## Ядро - Пакет babel-core

<ul>
<li><a target="_blank" href="https://babeljs.io/docs/core-packages/babel-types/">Babel-types</a>: Babel Types is a Lodash-esque utility library for AST nodes</li>
<li><a target="_blank" href="https://babeljs.io/docs/core-packages/babel-template/">Babel-template</a>: Generate an AST from a string template</li>
<li><a target="_blank" href="https://babeljs.io/docs/usage/babel-register/">Babel-register</a>: Препроцессор. Транспиляция при выполнении</li>
<li><a target="_blank" href="https://babeljs.io/docs/core-packages/babel-helpers/">Babel-helpers</a>: Collection of helper functions used by Babel transforms</li>
<li><a target="_blank" href="https://babeljs.io/docs/core-packages/babel-code-frame/">Babel-code-frame</a>: Generate errors that contain a code frame that point to source locations</li>
<li><a target="_blank" href="https://babeljs.io/docs/core-packages/babylon/">Babylon</a>: Парсер JavaScript</li>
</ul>
    
## CLI - Интерфейс командной строкиs - Пакет babel-cli

<ul>
<li><a target="_blank" href="https://babeljs.io/docs/usage/cli/">babel</a> - Вызов методов babel-core через интерфейс командной строки.</li>
<li><a target="_blank" href="https://babeljs.io/docs/usage/cli/#babel-node">babel-node</a> - Запуск node с транспиляцией на лету.</li>
</ul>

	
## Конфигурация
Настройки транспиляции указываются в файле .babelrc в корне директории проекта.

<p><a target="_blank" href="https://babeljs.io/docs/usage/babelrc/">Руководство</a></p>

## Плагины
Набор инструкций для транспиляции. Подключаются в конфигурационном файле .babelrc

## Пресеты
Наборы плагинов. Подключаются в конфигурационном файле .babelrc

## Webpack

<ul>
<li><a target="_blank" href="https://github.com/babel/babel-loader">babel-loader</a></li>
<li><a target="_blank" href="https://github.com/webpack-contrib/babel-minify-webpack-plugin/blob/master/package.json">babel-minify-webpack-plugin</a></li>
</ul>
