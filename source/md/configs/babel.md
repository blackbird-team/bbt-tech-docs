# Конфигурационный файл .babelrc
<h2 id="front-end">Front-end</h2>

```json
{
  "presets" : ["react", ["env", {
    "targets": {
      "browser": true
    }
  }]],
  "plugins": [
    ["transform-class-properties"],
    ["babel-plugin-root-import",
      [{
        "rootPathPrefix": "~",
        "rootPathSuffix": "source/js"
      },
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "source/data"
        }]
    ]
  ]
}
```

<h2 id="back-end">Back-end</h2>

```json
{
  "presets" : [["env", {
    "targets": {
      "node": "8.5"
    }
  }]],
  "plugins": [
    ["transform-class-properties"],
    ["babel-plugin-root-import",
      [{
        "rootPathPrefix": "~",
        "rootPathSuffix": "source/js"
      },
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "source/data"
        }]
    ]
  ]
}
```

<h2 id="full-stack">Full-stack</h2>

```json
{
  "presets" : ["react", ["env", {
    "targets": {
      "browser": true,
      "node": "8.5"
    }
  }]],
  "plugins": [
    ["transform-class-properties"],
    ["babel-plugin-root-import",
      [{
        "rootPathPrefix": "~",
        "rootPathSuffix": "source/js"
      },
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "source/data"
        }]
    ]
  ]
}
```

<h2 id="standalone">Standalone</h2>

```json
{
  "presets" : ["react", ["env", {
    "targets": {
      "electron": true
    }
  }]],
  "plugins": [
    ["transform-class-properties"],
    ["babel-plugin-root-import",
      [{
        "rootPathPrefix": "~",
        "rootPathSuffix": "source/js"
      },
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "source/data"
        }]
    ]
  ]
}
```

<h2 id="service">Service</h2>

```json
{
  "presets" : [["env", {
    "targets": {
      "node": "8.5"
    }
  }]],
  "plugins": [
    ["transform-class-properties"],
    ["babel-plugin-root-import",
      [{
        "rootPathPrefix": "~",
        "rootPathSuffix": "source/js"
      },
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "source/data"
        }]
    ]
  ]
}
```

<h2 id="npm-module">NPM module</h2>

```json
{
  "presets" : [["env", {
    "targets": {
      "node": "8.5"
    }
  }]],
  "plugins": [
    ["transform-class-properties"],
    ["babel-plugin-root-import",
      [{
        "rootPathPrefix": "~",
        "rootPathSuffix": "source/js"
      },
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "source/data"
        }]
    ]
  ]
}
```