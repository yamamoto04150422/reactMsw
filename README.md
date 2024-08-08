## msw

npm install msw --save-dev

npx msw init public/ --save

## eslint

npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-next --save-dev


@typescript-eslint/parser: TypeScriptコードをESLintが理解できるようにするためのパーサー。
@typescript-eslint/eslint-plugin: TypeScript専用のルールを提供。
eslint-plugin-react: React用のルールセット。
eslint-plugin-react-hooks: React Hooks用のルールセット。
eslint-plugin-jsx-a11y: アクセシビリティ（a11y）に関連するルールセット。
eslint-plugin-import: インポート/エクスポートの整理と検証のためのプラグイン。
eslint-config-next: Next.jsに特化したESLint設定。


方法1: --legacy-peer-depsフラグを使用する
このフラグを使用してインストールを強制し、依存関係の解決をスキップします。

npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-next --save-dev --legacy-peer-deps


## prettier

npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

方法1: --legacy-peer-depsフラグを使用
このフラグを使って、依存関係のチェックを無視してインストールを進めます。
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev --legacy-peer-deps

## settings.json
<code>
{
  "editor.formatOnSave": true, // 保存時に自動でフォーマット
  "editor.defaultFormatter": "esbenp.prettier-vscode", // Prettierをデフォルトのフォーマッタに設定
  "eslint.validate": ["javascript", "typescript", "typescriptreact", "javascriptreact"], // ESLintの適用対象
  "eslint.autoFixOnSave": true // 保存時にESLintで自動修正
}
</code>

ESLintはコード品質を向上させ、プロジェクト全体での一貫性を確保します。
Prettierはコードフォーマットを一貫して適用します。
TypeScriptとNext.jsに特化した設定により、開発効率とコード品質を両立させます。

C:\Users\ユーザ名\.vscode\extensionsPlainCopy

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
