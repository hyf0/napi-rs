/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
/** This is a const */
export const DEFAULT_COST: number
export function getWords(): Array<string>
/** Gets some numbers */
export function getNums(): Array<number>
export function sumNums(nums: Array<number>): number
export function readFileAsync(path: string): Promise<Buffer>
export function asyncMultiTwo(arg: number): Promise<number>
export function bigintAdd(a: BigInt, b: BigInt): BigInt
export function createBigInt(): BigInt
export function createBigIntI64(): BigInt
export function getCwd(callback: (arg0: string) => void): void
/** napi = { version = 2, features = ["serde-json"] } */
export function readFile(callback: (arg0: Error | undefined, arg1?: string | undefined | null) => void): void
export function eitherStringOrNumber(input: string | number): number
export function returnEither(input: number): string | number
export function either3(input: string | number | boolean): number
export interface Obj {
  v: string | number
}
export function either4(input: string | number | boolean | Obj): number
/** default enum values are continuos i32s start from 0 */
export const enum Kind {
  /** Barks */
  Dog = 0,
  /** Kills birds */
  Cat = 1,
  /** Tasty */
  Duck = 2
}
/** You could break the step and for an new continuous value. */
export const enum CustomNumEnum {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Six = 6,
  Eight = 8,
  Nine = 9,
  Ten = 10
}
export function enumToI32(e: CustomNumEnum): number
export function throwError(): void
export function createExternal(size: number): ExternalObject<number>
export function createExternalString(content: string): ExternalObject<string>
export function getExternal(external: ExternalObject<number>): number
export function mutateExternal(external: ExternalObject<number>, newVal: number): void
export function tsRename(a: { foo: number }): string[]
export function xxh64Alias(input: Buffer): BigInt
export function mapOption(val?: number | undefined | null): number | undefined | null
export function add(a: number, b: number): number
export function fibonacci(n: number): number
export function listObjKeys(obj: object): Array<string>
export function createObj(): object
export function getGlobal(): typeof global
export function getUndefined(): void
export function getNull(): JsNull
export interface AllOptionalObject {
  name?: string | undefined | null
  age?: number | undefined | null
}
export function receiveAllOptionalObject(obj?: AllOptionalObject | undefined | null): void
export const enum ALIAS {
  A = 0,
  B = 1
}
export interface AliasedStruct {
  a: ALIAS
  b: number
}
export function fnReceivedAliased(s: AliasedStruct, e: ALIAS): void
export function asyncPlus100(p: Promise<number>): Promise<number>
/** This is an interface for package.json */
export interface PackageJson {
  name: string
  /** The version of the package */
  version: string
  dependencies?: Record<string, any> | undefined | null
  devDependencies?: Record<string, any> | undefined | null
}
export function readPackageJson(): PackageJson
export function getPackageJsonName(packageJson: PackageJson): string
export function contains(source: string, target: string): boolean
export function concatStr(s: string): string
export function concatUtf16(s: string): string
export function concatLatin1(s: string): string
export function setSymbolInObj(symbol: symbol): object
export function createSymbol(): symbol
export function withoutAbortController(a: number, b: number): Promise<number>
export function withAbortController(a: number, b: number, signal: AbortSignal): Promise<number>
export function callThreadsafeFunction(callback: (...args: any[]) => any): void
export function threadsafeFunctionThrowError(cb: (...args: any[]) => any): void
export function threadsafeFunctionFatalMode(cb: (...args: any[]) => any): void
export function threadsafeFunctionFatalModeError(cb: (...args: any[]) => any): void
export function getBuffer(): Buffer
export function appendBuffer(buf: Buffer): Buffer
export function convertU32Array(input: Uint32Array): Array<number>
export function createExternalTypedArray(): Uint32Array
export function mutateTypedArray(input: Float32Array): void
/**
 * `constructor` option for `struct` requires all fields to be public,
 * otherwise tag impl fn as constructor
 * #[napi(constructor)]
 */
export class Animal {
  /** Kind of animal */
  readonly kind: Kind
  /** This is the constructor */
  constructor(kind: Kind, name: string)
  /** This is a factory method */
  static withKind(kind: Kind): Animal
  get name(): string
  set name(name: string)
  /**
   * This is a
   * multi-line comment
   * with an emoji 🚀
   */
  whoami(): string
  /** This is static... */
  static getDogKind(): Kind
}
/** Smoking test for type generation */
export class Blake2BHasher {
  static withKey(key: Blake2bKey): Blake2BHasher
}
export class Blake2BKey { }
export class Context {
  maybeNeed?: boolean | undefined | null
  constructor()
  static withData(data: string): Context
  method(): string
}
export class AnimalWithDefaultConstructor {
  name: string
  kind: number
  constructor(name: string, kind: number)
}
export class ClassWithFactory {
  name: string
  static withName(name: string): ClassWithFactory
  setName(name: string): this
}
export namespace xxh3 {
  export const ALIGNMENT: number
  export function xxh3_64(input: Buffer): BigInt
  /** xxh128 function */
  export function xxh128(input: Buffer): BigInt
  /** Xxh3 class */
  export class Xxh3 {
    constructor()
    /** update */
    update(input: Buffer): void
    digest(): BigInt
  }
}
export namespace xxh2 {
  export function xxh2Plus(a: number, b: number): number
  export function xxh3Xxh64Alias(input: Buffer): BigInt
}
