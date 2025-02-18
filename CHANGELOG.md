## 1.7.0
- New method for NodePath - `cloneNode`, `skipChildren`, `unSkipChildren`

## 1.6.2
- Updated dependencies
- Added support for ES Modules

## 1.6.1
- More bug fixes

## 1.6.0
- New methods for Scope - `generateUid`, `generateUidIdentifier`,
  `generateDeclaredUidIdentifier`
- Bug fixes related to scope

## 1.5.0
- New methods [`NodePath.getAncestry`](https://estree-toolkit.netlify.app/nodepath/#getancestry)
  and [`Scope.renameBinding`](https://estree-toolkit.netlify.app/scope/#renamebindingoldname-newname)
- New utility [`getCommonAncestor`](https://estree-toolkit.netlify.app/utilities/#getcommonancestorpaths)
- Fixed many bugs

## 1.4.0
- Updated all dependencies

## 1.3.1
- Added `ObjectExpression` and `ArrayExpression` evaluators
- Improved code

## 1.3.0
- Added support for JSX

## 1.2.7
- Fixed issue in `Scope` where parent scope were not being assigned

## 1.2.6
- Fixed infinite loop in `NodePath`

## 1.2.4
- Improved validators.
- Fixed issue with `Identifier` validator [(#1)](https://github.com/sarsamurmu/estree-toolkit/issues/1)

## 1.2.3
- Disable validation in builders temporarily

## 1.2.2
- Added node validator to all builders

## 1.2.0
- Updated to latest `@types/estree`
- Improved compatibility with latest TypeScript

## 1.1.0
- More fixes

## 1.0.9
- Fix `NodePath`'s synchronization

## 1.0.8
- Export more types

## 1.0.7
- Add `hasBinding` method to `Scope`

## 1.0.6
- Improve typings

## 1.0.5
- Fix TypeScript types

## 1.0.4
- Add support for `ExportDeclaration` alias.

## 1.0.3
- Add support for evaluating `UnaryExpression`

## 1.0.2
- Update `@types/estree` dependency

## 1.0.1
- Remove useless files
