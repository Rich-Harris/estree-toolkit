// Generated file. Do not modify by hands.
// Run "npm run generate" to re-generate this file.

import {
  Identifier,
  Literal,
  Program,
  FunctionDeclaration,
  FunctionExpression,
  ArrowFunctionExpression,
  SwitchCase,
  CatchClause,
  VariableDeclarator,
  ExpressionStatement,
  BlockStatement,
  EmptyStatement,
  DebuggerStatement,
  WithStatement,
  ReturnStatement,
  LabeledStatement,
  BreakStatement,
  ContinueStatement,
  IfStatement,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  WhileStatement,
  DoWhileStatement,
  ForStatement,
  ForInStatement,
  ForOfStatement,
  VariableDeclaration,
  ClassDeclaration,
  ThisExpression,
  ArrayExpression,
  ObjectExpression,
  YieldExpression,
  UnaryExpression,
  UpdateExpression,
  BinaryExpression,
  AssignmentExpression,
  LogicalExpression,
  MemberExpression,
  ConditionalExpression,
  CallExpression,
  NewExpression,
  SequenceExpression,
  TemplateLiteral,
  TaggedTemplateExpression,
  ClassExpression,
  MetaProperty,
  AwaitExpression,
  ImportExpression,
  ChainExpression,
  Property,
  Super,
  TemplateElement,
  SpreadElement,
  ObjectPattern,
  ArrayPattern,
  RestElement,
  AssignmentPattern,
  ClassBody,
  MethodDefinition,
  ImportDeclaration,
  ExportNamedDeclaration,
  ExportDefaultDeclaration,
  ExportAllDeclaration,
  ImportSpecifier,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ExportSpecifier
} from 'estree';

export type Builders = {
  identifier(name: Identifier['name']): Identifier;
  literal(value: Literal['value']): Literal;
  program(body: Program['body']): Program;
  functionDeclaration(id: FunctionDeclaration['id'], params: FunctionDeclaration['params'], body: FunctionDeclaration['body'], generator?: FunctionDeclaration['generator'], async?: FunctionDeclaration['async']): FunctionDeclaration;
  functionExpression(id: FunctionExpression['id'], params: FunctionExpression['params'], body: FunctionExpression['body'], generator?: FunctionExpression['generator'], async?: FunctionExpression['async']): FunctionExpression;
  arrowFunctionExpression(params: ArrowFunctionExpression['params'], body: ArrowFunctionExpression['body'], expression?: ArrowFunctionExpression['expression'], async?: ArrowFunctionExpression['async']): ArrowFunctionExpression;
  switchCase(test: SwitchCase['test'], consequent: SwitchCase['consequent']): SwitchCase;
  catchClause(param: CatchClause['param'], body: CatchClause['body']): CatchClause;
  variableDeclarator(id: VariableDeclarator['id'], init?: VariableDeclarator['init']): VariableDeclarator;
  expressionStatement(expression: ExpressionStatement['expression']): ExpressionStatement;
  blockStatement(body: BlockStatement['body']): BlockStatement;
  emptyStatement(): EmptyStatement;
  debuggerStatement(): DebuggerStatement;
  withStatement(object: WithStatement['object'], body: WithStatement['body']): WithStatement;
  returnStatement(argument?: ReturnStatement['argument']): ReturnStatement;
  labeledStatement(label: LabeledStatement['label'], body: LabeledStatement['body']): LabeledStatement;
  breakStatement(label?: BreakStatement['label']): BreakStatement;
  continueStatement(label?: ContinueStatement['label']): ContinueStatement;
  ifStatement(test: IfStatement['test'], consequent: IfStatement['consequent'], alternate?: IfStatement['alternate']): IfStatement;
  switchStatement(discriminant: SwitchStatement['discriminant'], cases: SwitchStatement['cases']): SwitchStatement;
  throwStatement(argument: ThrowStatement['argument']): ThrowStatement;
  tryStatement(block: TryStatement['block'], handler: TryStatement['handler'], finalizer?: TryStatement['finalizer']): TryStatement;
  whileStatement(test: WhileStatement['test'], body: WhileStatement['body']): WhileStatement;
  doWhileStatement(test: DoWhileStatement['test'], body: DoWhileStatement['body']): DoWhileStatement;
  forStatement(init: ForStatement['init'], test: ForStatement['test'], update: ForStatement['update'], body: ForStatement['body']): ForStatement;
  forInStatement(left: ForInStatement['left'], right: ForInStatement['right'], body: ForInStatement['body']): ForInStatement;
  forOfStatement(left: ForOfStatement['left'], right: ForOfStatement['right'], body: ForOfStatement['body']): ForOfStatement;
  variableDeclaration(kind: VariableDeclaration['kind'], declarations: VariableDeclaration['declarations']): VariableDeclaration;
  classDeclaration(id: ClassDeclaration['id'], body: ClassDeclaration['body'], superClass?: ClassDeclaration['superClass']): ClassDeclaration;
  thisExpression(): ThisExpression;
  arrayExpression(elements: ArrayExpression['elements']): ArrayExpression;
  objectExpression(properties: ObjectExpression['properties']): ObjectExpression;
  yieldExpression(argument: YieldExpression['argument'], delegate?: YieldExpression['delegate']): YieldExpression;
  unaryExpression(operator: UnaryExpression['operator'], argument: UnaryExpression['argument'], prefix?: UnaryExpression['prefix']): UnaryExpression;
  updateExpression(operator: UpdateExpression['operator'], argument: UpdateExpression['argument'], prefix: UpdateExpression['prefix']): UpdateExpression;
  binaryExpression(operator: BinaryExpression['operator'], left: BinaryExpression['left'], right: BinaryExpression['right']): BinaryExpression;
  assignmentExpression(operator: AssignmentExpression['operator'], left: AssignmentExpression['left'], right: AssignmentExpression['right']): AssignmentExpression;
  logicalExpression(operator: LogicalExpression['operator'], left: LogicalExpression['left'], right: LogicalExpression['right']): LogicalExpression;
  memberExpression(object: MemberExpression['object'], property: MemberExpression['property'], computed?: MemberExpression['computed'], optional?: MemberExpression['optional']): MemberExpression;
  conditionalExpression(test: ConditionalExpression['test'], consequent: ConditionalExpression['consequent'], alternate: ConditionalExpression['alternate']): ConditionalExpression;
  callExpression(callee: CallExpression['callee'], _arguments: CallExpression['arguments'], optional?: boolean): CallExpression;
  newExpression(callee: NewExpression['callee'], _arguments: NewExpression['arguments']): NewExpression;
  sequenceExpression(expressions: SequenceExpression['expressions']): SequenceExpression;
  templateLiteral(quasis: TemplateLiteral['quasis'], expressions: TemplateLiteral['expressions']): TemplateLiteral;
  taggedTemplateExpression(tag: TaggedTemplateExpression['tag'], quasi: TaggedTemplateExpression['quasi']): TaggedTemplateExpression;
  classExpression(id: ClassExpression['id'], body: ClassExpression['body'], superClass?: ClassExpression['superClass']): ClassExpression;
  metaProperty(meta: MetaProperty['meta'], property: MetaProperty['property']): MetaProperty;
  awaitExpression(argument: AwaitExpression['argument']): AwaitExpression;
  importExpression(source: ImportExpression['source']): ImportExpression;
  chainExpression(expression: ChainExpression['expression']): ChainExpression;
  property(kind: Property['kind'], key: Property['key'], value: Property['value'], method?: Property['method'], computed?: Property['computed'], shorthand?: Property['shorthand']): Property;
  super(): Super;
  templateElement(value: TemplateElement['value'], tail: TemplateElement['tail']): TemplateElement;
  spreadElement(argument: SpreadElement['argument']): SpreadElement;
  objectPattern(properties: ObjectPattern['properties']): ObjectPattern;
  arrayPattern(elements: ArrayPattern['elements']): ArrayPattern;
  restElement(argument: RestElement['argument']): RestElement;
  assignmentPattern(left: AssignmentPattern['left'], right: AssignmentPattern['right']): AssignmentPattern;
  classBody(body: ClassBody['body']): ClassBody;
  methodDefinition(kind: MethodDefinition['kind'], key: MethodDefinition['key'], value: MethodDefinition['value'], computed?: MethodDefinition['computed'], _static?: MethodDefinition['static']): MethodDefinition;
  importDeclaration(specifiers: ImportDeclaration['specifiers'], source: ImportDeclaration['source']): ImportDeclaration;
  exportNamedDeclaration(declaration: ExportNamedDeclaration['declaration'], specifiers?: ExportNamedDeclaration['specifiers'], source?: ExportNamedDeclaration['source']): ExportNamedDeclaration;
  exportDefaultDeclaration(declaration: ExportDefaultDeclaration['declaration']): ExportDefaultDeclaration;
  exportAllDeclaration(source: ExportAllDeclaration['source']): ExportAllDeclaration;
  importSpecifier(imported: ImportSpecifier['imported'], local?: ImportSpecifier['local']): ImportSpecifier;
  importDefaultSpecifier(local: ImportDefaultSpecifier['local']): ImportDefaultSpecifier;
  importNamespaceSpecifier(local: ImportNamespaceSpecifier['local']): ImportNamespaceSpecifier;
  exportSpecifier(local: ExportSpecifier['local'], exported?: ExportSpecifier['exported']): ExportSpecifier;
}