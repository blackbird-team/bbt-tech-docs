# ESLint

## Подключение

```npm
npm i -D eslint 
```

## Правила
### Все типы программ

<ul>
<li><a target="_blank" href="https://github.com/blackbird-team/eslint-config-bbt/blob/master/README.md">Инструкция</a></li>
<li><a href="/configs/eslint/backend">Пример конфигурации(backend)</a></li>
</ul>


```npm
npm i -D eslint-config-bbt
```

### Содержащие GUI / пакет views

<ul>
<li><a target="_blank" href="https://github.com/blackbird-team/eslint-config-bbt-react/blob/master/README.md">Инструкция</a></li>
<li><a href="/configs/eslint/frontend">Пример конфигурации(frontend)</a></li>
</ul>


```npm
npm i -D eslint-config-bbt-react
```

## Конфигурации

- [service](/configs/eslint/service)
    - [lib](/configs/eslint/lib)
    - [cli](/configs/eslint/cli)
- [backend](/configs/eslint/backend)
- [frontend](/configs/eslint/frontend)
- [fullstack](/configs/eslint/fullstack)
    - [standalone](/configs/eslint/standalone)
    
## Вспомогательные модули

<ul>
<li><a target="_blank" href="https://www.npmjs.com/package/prettier">prettier</a> - Форматирует код по заданому стилю.</li>
<li><a target="_blank" href="https://www.npmjs.com/package/lint-staged">lint-staged</a> - Задает сценарии проверки линтинга файлов готовых к коммиту.</li>
<li><a target="_blank" href="https://www.npmjs.com/package/pre-commit">pre-commit</a> - Автоматически запускает команды проверки при попытке создания коммита.</li>
</ul>