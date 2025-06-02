
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MsUser
 * 
 */
export type MsUser = $Result.DefaultSelection<Prisma.$MsUserPayload>
/**
 * Model MsVehicle
 * 
 */
export type MsVehicle = $Result.DefaultSelection<Prisma.$MsVehiclePayload>
/**
 * Model TripTransaction
 * 
 */
export type TripTransaction = $Result.DefaultSelection<Prisma.$TripTransactionPayload>
/**
 * Model MsDestination
 * 
 */
export type MsDestination = $Result.DefaultSelection<Prisma.$MsDestinationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MsUsers
 * const msUsers = await prisma.msUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MsUsers
   * const msUsers = await prisma.msUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.msUser`: Exposes CRUD operations for the **MsUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MsUsers
    * const msUsers = await prisma.msUser.findMany()
    * ```
    */
  get msUser(): Prisma.MsUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.msVehicle`: Exposes CRUD operations for the **MsVehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MsVehicles
    * const msVehicles = await prisma.msVehicle.findMany()
    * ```
    */
  get msVehicle(): Prisma.MsVehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripTransaction`: Exposes CRUD operations for the **TripTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripTransactions
    * const tripTransactions = await prisma.tripTransaction.findMany()
    * ```
    */
  get tripTransaction(): Prisma.TripTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.msDestination`: Exposes CRUD operations for the **MsDestination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MsDestinations
    * const msDestinations = await prisma.msDestination.findMany()
    * ```
    */
  get msDestination(): Prisma.MsDestinationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MsUser: 'MsUser',
    MsVehicle: 'MsVehicle',
    TripTransaction: 'TripTransaction',
    MsDestination: 'MsDestination'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "msUser" | "msVehicle" | "tripTransaction" | "msDestination"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MsUser: {
        payload: Prisma.$MsUserPayload<ExtArgs>
        fields: Prisma.MsUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>
          }
          findFirst: {
            args: Prisma.MsUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>
          }
          findMany: {
            args: Prisma.MsUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>[]
          }
          create: {
            args: Prisma.MsUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>
          }
          createMany: {
            args: Prisma.MsUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MsUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>[]
          }
          delete: {
            args: Prisma.MsUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>
          }
          update: {
            args: Prisma.MsUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>
          }
          deleteMany: {
            args: Prisma.MsUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MsUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MsUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>[]
          }
          upsert: {
            args: Prisma.MsUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsUserPayload>
          }
          aggregate: {
            args: Prisma.MsUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMsUser>
          }
          groupBy: {
            args: Prisma.MsUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MsUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MsUserCountArgs<ExtArgs>
            result: $Utils.Optional<MsUserCountAggregateOutputType> | number
          }
        }
      }
      MsVehicle: {
        payload: Prisma.$MsVehiclePayload<ExtArgs>
        fields: Prisma.MsVehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsVehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsVehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>
          }
          findFirst: {
            args: Prisma.MsVehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsVehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>
          }
          findMany: {
            args: Prisma.MsVehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>[]
          }
          create: {
            args: Prisma.MsVehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>
          }
          createMany: {
            args: Prisma.MsVehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MsVehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>[]
          }
          delete: {
            args: Prisma.MsVehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>
          }
          update: {
            args: Prisma.MsVehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>
          }
          deleteMany: {
            args: Prisma.MsVehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MsVehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MsVehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>[]
          }
          upsert: {
            args: Prisma.MsVehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsVehiclePayload>
          }
          aggregate: {
            args: Prisma.MsVehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMsVehicle>
          }
          groupBy: {
            args: Prisma.MsVehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MsVehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MsVehicleCountArgs<ExtArgs>
            result: $Utils.Optional<MsVehicleCountAggregateOutputType> | number
          }
        }
      }
      TripTransaction: {
        payload: Prisma.$TripTransactionPayload<ExtArgs>
        fields: Prisma.TripTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>
          }
          findFirst: {
            args: Prisma.TripTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>
          }
          findMany: {
            args: Prisma.TripTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>[]
          }
          create: {
            args: Prisma.TripTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>
          }
          createMany: {
            args: Prisma.TripTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>[]
          }
          delete: {
            args: Prisma.TripTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>
          }
          update: {
            args: Prisma.TripTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>
          }
          deleteMany: {
            args: Prisma.TripTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>[]
          }
          upsert: {
            args: Prisma.TripTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripTransactionPayload>
          }
          aggregate: {
            args: Prisma.TripTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripTransaction>
          }
          groupBy: {
            args: Prisma.TripTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TripTransactionCountAggregateOutputType> | number
          }
        }
      }
      MsDestination: {
        payload: Prisma.$MsDestinationPayload<ExtArgs>
        fields: Prisma.MsDestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsDestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsDestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>
          }
          findFirst: {
            args: Prisma.MsDestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsDestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>
          }
          findMany: {
            args: Prisma.MsDestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>[]
          }
          create: {
            args: Prisma.MsDestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>
          }
          createMany: {
            args: Prisma.MsDestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MsDestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>[]
          }
          delete: {
            args: Prisma.MsDestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>
          }
          update: {
            args: Prisma.MsDestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>
          }
          deleteMany: {
            args: Prisma.MsDestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MsDestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MsDestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>[]
          }
          upsert: {
            args: Prisma.MsDestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsDestinationPayload>
          }
          aggregate: {
            args: Prisma.MsDestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMsDestination>
          }
          groupBy: {
            args: Prisma.MsDestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MsDestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MsDestinationCountArgs<ExtArgs>
            result: $Utils.Optional<MsDestinationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    msUser?: MsUserOmit
    msVehicle?: MsVehicleOmit
    tripTransaction?: TripTransactionOmit
    msDestination?: MsDestinationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MsUserCountOutputType
   */

  export type MsUserCountOutputType = {
    vehicles: number
    trips_as_customer: number
    trips_as_driver: number
  }

  export type MsUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | MsUserCountOutputTypeCountVehiclesArgs
    trips_as_customer?: boolean | MsUserCountOutputTypeCountTrips_as_customerArgs
    trips_as_driver?: boolean | MsUserCountOutputTypeCountTrips_as_driverArgs
  }

  // Custom InputTypes
  /**
   * MsUserCountOutputType without action
   */
  export type MsUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUserCountOutputType
     */
    select?: MsUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MsUserCountOutputType without action
   */
  export type MsUserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsVehicleWhereInput
  }

  /**
   * MsUserCountOutputType without action
   */
  export type MsUserCountOutputTypeCountTrips_as_customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripTransactionWhereInput
  }

  /**
   * MsUserCountOutputType without action
   */
  export type MsUserCountOutputTypeCountTrips_as_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripTransactionWhereInput
  }


  /**
   * Count Type MsDestinationCountOutputType
   */

  export type MsDestinationCountOutputType = {
    trips: number
  }

  export type MsDestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | MsDestinationCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * MsDestinationCountOutputType without action
   */
  export type MsDestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestinationCountOutputType
     */
    select?: MsDestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MsDestinationCountOutputType without action
   */
  export type MsDestinationCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MsUser
   */

  export type AggregateMsUser = {
    _count: MsUserCountAggregateOutputType | null
    _min: MsUserMinAggregateOutputType | null
    _max: MsUserMaxAggregateOutputType | null
  }

  export type MsUserMinAggregateOutputType = {
    user_id: string | null
    user_email: string | null
    user_password: string | null
    user_name: string | null
    user_phone: string | null
    user_profile_picture: string | null
  }

  export type MsUserMaxAggregateOutputType = {
    user_id: string | null
    user_email: string | null
    user_password: string | null
    user_name: string | null
    user_phone: string | null
    user_profile_picture: string | null
  }

  export type MsUserCountAggregateOutputType = {
    user_id: number
    user_email: number
    user_password: number
    user_name: number
    user_phone: number
    user_profile_picture: number
    _all: number
  }


  export type MsUserMinAggregateInputType = {
    user_id?: true
    user_email?: true
    user_password?: true
    user_name?: true
    user_phone?: true
    user_profile_picture?: true
  }

  export type MsUserMaxAggregateInputType = {
    user_id?: true
    user_email?: true
    user_password?: true
    user_name?: true
    user_phone?: true
    user_profile_picture?: true
  }

  export type MsUserCountAggregateInputType = {
    user_id?: true
    user_email?: true
    user_password?: true
    user_name?: true
    user_phone?: true
    user_profile_picture?: true
    _all?: true
  }

  export type MsUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsUser to aggregate.
     */
    where?: MsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsers to fetch.
     */
    orderBy?: MsUserOrderByWithRelationInput | MsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MsUsers
    **/
    _count?: true | MsUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsUserMaxAggregateInputType
  }

  export type GetMsUserAggregateType<T extends MsUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMsUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsUser[P]>
      : GetScalarType<T[P], AggregateMsUser[P]>
  }




  export type MsUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsUserWhereInput
    orderBy?: MsUserOrderByWithAggregationInput | MsUserOrderByWithAggregationInput[]
    by: MsUserScalarFieldEnum[] | MsUserScalarFieldEnum
    having?: MsUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsUserCountAggregateInputType | true
    _min?: MsUserMinAggregateInputType
    _max?: MsUserMaxAggregateInputType
  }

  export type MsUserGroupByOutputType = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    _count: MsUserCountAggregateOutputType | null
    _min: MsUserMinAggregateOutputType | null
    _max: MsUserMaxAggregateOutputType | null
  }

  type GetMsUserGroupByPayload<T extends MsUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsUserGroupByOutputType[P]>
            : GetScalarType<T[P], MsUserGroupByOutputType[P]>
        }
      >
    >


  export type MsUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_profile_picture?: boolean
    vehicles?: boolean | MsUser$vehiclesArgs<ExtArgs>
    trips_as_customer?: boolean | MsUser$trips_as_customerArgs<ExtArgs>
    trips_as_driver?: boolean | MsUser$trips_as_driverArgs<ExtArgs>
    _count?: boolean | MsUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msUser"]>

  export type MsUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_profile_picture?: boolean
  }, ExtArgs["result"]["msUser"]>

  export type MsUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_profile_picture?: boolean
  }, ExtArgs["result"]["msUser"]>

  export type MsUserSelectScalar = {
    user_id?: boolean
    user_email?: boolean
    user_password?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_profile_picture?: boolean
  }

  export type MsUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_email" | "user_password" | "user_name" | "user_phone" | "user_profile_picture", ExtArgs["result"]["msUser"]>
  export type MsUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | MsUser$vehiclesArgs<ExtArgs>
    trips_as_customer?: boolean | MsUser$trips_as_customerArgs<ExtArgs>
    trips_as_driver?: boolean | MsUser$trips_as_driverArgs<ExtArgs>
    _count?: boolean | MsUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MsUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MsUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MsUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MsUser"
    objects: {
      vehicles: Prisma.$MsVehiclePayload<ExtArgs>[]
      trips_as_customer: Prisma.$TripTransactionPayload<ExtArgs>[]
      trips_as_driver: Prisma.$TripTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      user_email: string
      user_password: string
      user_name: string
      user_phone: string
      user_profile_picture: string
    }, ExtArgs["result"]["msUser"]>
    composites: {}
  }

  type MsUserGetPayload<S extends boolean | null | undefined | MsUserDefaultArgs> = $Result.GetResult<Prisma.$MsUserPayload, S>

  type MsUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MsUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MsUserCountAggregateInputType | true
    }

  export interface MsUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MsUser'], meta: { name: 'MsUser' } }
    /**
     * Find zero or one MsUser that matches the filter.
     * @param {MsUserFindUniqueArgs} args - Arguments to find a MsUser
     * @example
     * // Get one MsUser
     * const msUser = await prisma.msUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MsUserFindUniqueArgs>(args: SelectSubset<T, MsUserFindUniqueArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MsUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MsUserFindUniqueOrThrowArgs} args - Arguments to find a MsUser
     * @example
     * // Get one MsUser
     * const msUser = await prisma.msUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MsUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MsUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserFindFirstArgs} args - Arguments to find a MsUser
     * @example
     * // Get one MsUser
     * const msUser = await prisma.msUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MsUserFindFirstArgs>(args?: SelectSubset<T, MsUserFindFirstArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserFindFirstOrThrowArgs} args - Arguments to find a MsUser
     * @example
     * // Get one MsUser
     * const msUser = await prisma.msUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MsUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MsUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MsUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MsUsers
     * const msUsers = await prisma.msUser.findMany()
     * 
     * // Get first 10 MsUsers
     * const msUsers = await prisma.msUser.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const msUserWithUser_idOnly = await prisma.msUser.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends MsUserFindManyArgs>(args?: SelectSubset<T, MsUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MsUser.
     * @param {MsUserCreateArgs} args - Arguments to create a MsUser.
     * @example
     * // Create one MsUser
     * const MsUser = await prisma.msUser.create({
     *   data: {
     *     // ... data to create a MsUser
     *   }
     * })
     * 
     */
    create<T extends MsUserCreateArgs>(args: SelectSubset<T, MsUserCreateArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MsUsers.
     * @param {MsUserCreateManyArgs} args - Arguments to create many MsUsers.
     * @example
     * // Create many MsUsers
     * const msUser = await prisma.msUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MsUserCreateManyArgs>(args?: SelectSubset<T, MsUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MsUsers and returns the data saved in the database.
     * @param {MsUserCreateManyAndReturnArgs} args - Arguments to create many MsUsers.
     * @example
     * // Create many MsUsers
     * const msUser = await prisma.msUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MsUsers and only return the `user_id`
     * const msUserWithUser_idOnly = await prisma.msUser.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MsUserCreateManyAndReturnArgs>(args?: SelectSubset<T, MsUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MsUser.
     * @param {MsUserDeleteArgs} args - Arguments to delete one MsUser.
     * @example
     * // Delete one MsUser
     * const MsUser = await prisma.msUser.delete({
     *   where: {
     *     // ... filter to delete one MsUser
     *   }
     * })
     * 
     */
    delete<T extends MsUserDeleteArgs>(args: SelectSubset<T, MsUserDeleteArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MsUser.
     * @param {MsUserUpdateArgs} args - Arguments to update one MsUser.
     * @example
     * // Update one MsUser
     * const msUser = await prisma.msUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MsUserUpdateArgs>(args: SelectSubset<T, MsUserUpdateArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MsUsers.
     * @param {MsUserDeleteManyArgs} args - Arguments to filter MsUsers to delete.
     * @example
     * // Delete a few MsUsers
     * const { count } = await prisma.msUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MsUserDeleteManyArgs>(args?: SelectSubset<T, MsUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MsUsers
     * const msUser = await prisma.msUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MsUserUpdateManyArgs>(args: SelectSubset<T, MsUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsUsers and returns the data updated in the database.
     * @param {MsUserUpdateManyAndReturnArgs} args - Arguments to update many MsUsers.
     * @example
     * // Update many MsUsers
     * const msUser = await prisma.msUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MsUsers and only return the `user_id`
     * const msUserWithUser_idOnly = await prisma.msUser.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MsUserUpdateManyAndReturnArgs>(args: SelectSubset<T, MsUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MsUser.
     * @param {MsUserUpsertArgs} args - Arguments to update or create a MsUser.
     * @example
     * // Update or create a MsUser
     * const msUser = await prisma.msUser.upsert({
     *   create: {
     *     // ... data to create a MsUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MsUser we want to update
     *   }
     * })
     */
    upsert<T extends MsUserUpsertArgs>(args: SelectSubset<T, MsUserUpsertArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MsUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserCountArgs} args - Arguments to filter MsUsers to count.
     * @example
     * // Count the number of MsUsers
     * const count = await prisma.msUser.count({
     *   where: {
     *     // ... the filter for the MsUsers we want to count
     *   }
     * })
    **/
    count<T extends MsUserCountArgs>(
      args?: Subset<T, MsUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MsUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MsUserAggregateArgs>(args: Subset<T, MsUserAggregateArgs>): Prisma.PrismaPromise<GetMsUserAggregateType<T>>

    /**
     * Group by MsUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MsUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsUserGroupByArgs['orderBy'] }
        : { orderBy?: MsUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MsUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MsUser model
   */
  readonly fields: MsUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MsUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends MsUser$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, MsUser$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trips_as_customer<T extends MsUser$trips_as_customerArgs<ExtArgs> = {}>(args?: Subset<T, MsUser$trips_as_customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trips_as_driver<T extends MsUser$trips_as_driverArgs<ExtArgs> = {}>(args?: Subset<T, MsUser$trips_as_driverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MsUser model
   */
  interface MsUserFieldRefs {
    readonly user_id: FieldRef<"MsUser", 'String'>
    readonly user_email: FieldRef<"MsUser", 'String'>
    readonly user_password: FieldRef<"MsUser", 'String'>
    readonly user_name: FieldRef<"MsUser", 'String'>
    readonly user_phone: FieldRef<"MsUser", 'String'>
    readonly user_profile_picture: FieldRef<"MsUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MsUser findUnique
   */
  export type MsUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * Filter, which MsUser to fetch.
     */
    where: MsUserWhereUniqueInput
  }

  /**
   * MsUser findUniqueOrThrow
   */
  export type MsUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * Filter, which MsUser to fetch.
     */
    where: MsUserWhereUniqueInput
  }

  /**
   * MsUser findFirst
   */
  export type MsUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * Filter, which MsUser to fetch.
     */
    where?: MsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsers to fetch.
     */
    orderBy?: MsUserOrderByWithRelationInput | MsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsUsers.
     */
    cursor?: MsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsUsers.
     */
    distinct?: MsUserScalarFieldEnum | MsUserScalarFieldEnum[]
  }

  /**
   * MsUser findFirstOrThrow
   */
  export type MsUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * Filter, which MsUser to fetch.
     */
    where?: MsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsers to fetch.
     */
    orderBy?: MsUserOrderByWithRelationInput | MsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsUsers.
     */
    cursor?: MsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsUsers.
     */
    distinct?: MsUserScalarFieldEnum | MsUserScalarFieldEnum[]
  }

  /**
   * MsUser findMany
   */
  export type MsUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * Filter, which MsUsers to fetch.
     */
    where?: MsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsers to fetch.
     */
    orderBy?: MsUserOrderByWithRelationInput | MsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MsUsers.
     */
    cursor?: MsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsers.
     */
    skip?: number
    distinct?: MsUserScalarFieldEnum | MsUserScalarFieldEnum[]
  }

  /**
   * MsUser create
   */
  export type MsUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * The data needed to create a MsUser.
     */
    data: XOR<MsUserCreateInput, MsUserUncheckedCreateInput>
  }

  /**
   * MsUser createMany
   */
  export type MsUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MsUsers.
     */
    data: MsUserCreateManyInput | MsUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsUser createManyAndReturn
   */
  export type MsUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * The data used to create many MsUsers.
     */
    data: MsUserCreateManyInput | MsUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsUser update
   */
  export type MsUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * The data needed to update a MsUser.
     */
    data: XOR<MsUserUpdateInput, MsUserUncheckedUpdateInput>
    /**
     * Choose, which MsUser to update.
     */
    where: MsUserWhereUniqueInput
  }

  /**
   * MsUser updateMany
   */
  export type MsUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MsUsers.
     */
    data: XOR<MsUserUpdateManyMutationInput, MsUserUncheckedUpdateManyInput>
    /**
     * Filter which MsUsers to update
     */
    where?: MsUserWhereInput
    /**
     * Limit how many MsUsers to update.
     */
    limit?: number
  }

  /**
   * MsUser updateManyAndReturn
   */
  export type MsUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * The data used to update MsUsers.
     */
    data: XOR<MsUserUpdateManyMutationInput, MsUserUncheckedUpdateManyInput>
    /**
     * Filter which MsUsers to update
     */
    where?: MsUserWhereInput
    /**
     * Limit how many MsUsers to update.
     */
    limit?: number
  }

  /**
   * MsUser upsert
   */
  export type MsUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * The filter to search for the MsUser to update in case it exists.
     */
    where: MsUserWhereUniqueInput
    /**
     * In case the MsUser found by the `where` argument doesn't exist, create a new MsUser with this data.
     */
    create: XOR<MsUserCreateInput, MsUserUncheckedCreateInput>
    /**
     * In case the MsUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsUserUpdateInput, MsUserUncheckedUpdateInput>
  }

  /**
   * MsUser delete
   */
  export type MsUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
    /**
     * Filter which MsUser to delete.
     */
    where: MsUserWhereUniqueInput
  }

  /**
   * MsUser deleteMany
   */
  export type MsUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsUsers to delete
     */
    where?: MsUserWhereInput
    /**
     * Limit how many MsUsers to delete.
     */
    limit?: number
  }

  /**
   * MsUser.vehicles
   */
  export type MsUser$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    where?: MsVehicleWhereInput
    orderBy?: MsVehicleOrderByWithRelationInput | MsVehicleOrderByWithRelationInput[]
    cursor?: MsVehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MsVehicleScalarFieldEnum | MsVehicleScalarFieldEnum[]
  }

  /**
   * MsUser.trips_as_customer
   */
  export type MsUser$trips_as_customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    where?: TripTransactionWhereInput
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    cursor?: TripTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripTransactionScalarFieldEnum | TripTransactionScalarFieldEnum[]
  }

  /**
   * MsUser.trips_as_driver
   */
  export type MsUser$trips_as_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    where?: TripTransactionWhereInput
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    cursor?: TripTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripTransactionScalarFieldEnum | TripTransactionScalarFieldEnum[]
  }

  /**
   * MsUser without action
   */
  export type MsUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUser
     */
    select?: MsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsUser
     */
    omit?: MsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsUserInclude<ExtArgs> | null
  }


  /**
   * Model MsVehicle
   */

  export type AggregateMsVehicle = {
    _count: MsVehicleCountAggregateOutputType | null
    _min: MsVehicleMinAggregateOutputType | null
    _max: MsVehicleMaxAggregateOutputType | null
  }

  export type MsVehicleMinAggregateOutputType = {
    vehicle_id: string | null
    user_id: string | null
    vehicle_name: string | null
    vehicle_number: string | null
  }

  export type MsVehicleMaxAggregateOutputType = {
    vehicle_id: string | null
    user_id: string | null
    vehicle_name: string | null
    vehicle_number: string | null
  }

  export type MsVehicleCountAggregateOutputType = {
    vehicle_id: number
    user_id: number
    vehicle_name: number
    vehicle_number: number
    _all: number
  }


  export type MsVehicleMinAggregateInputType = {
    vehicle_id?: true
    user_id?: true
    vehicle_name?: true
    vehicle_number?: true
  }

  export type MsVehicleMaxAggregateInputType = {
    vehicle_id?: true
    user_id?: true
    vehicle_name?: true
    vehicle_number?: true
  }

  export type MsVehicleCountAggregateInputType = {
    vehicle_id?: true
    user_id?: true
    vehicle_name?: true
    vehicle_number?: true
    _all?: true
  }

  export type MsVehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsVehicle to aggregate.
     */
    where?: MsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsVehicles to fetch.
     */
    orderBy?: MsVehicleOrderByWithRelationInput | MsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MsVehicles
    **/
    _count?: true | MsVehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsVehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsVehicleMaxAggregateInputType
  }

  export type GetMsVehicleAggregateType<T extends MsVehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateMsVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsVehicle[P]>
      : GetScalarType<T[P], AggregateMsVehicle[P]>
  }




  export type MsVehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsVehicleWhereInput
    orderBy?: MsVehicleOrderByWithAggregationInput | MsVehicleOrderByWithAggregationInput[]
    by: MsVehicleScalarFieldEnum[] | MsVehicleScalarFieldEnum
    having?: MsVehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsVehicleCountAggregateInputType | true
    _min?: MsVehicleMinAggregateInputType
    _max?: MsVehicleMaxAggregateInputType
  }

  export type MsVehicleGroupByOutputType = {
    vehicle_id: string
    user_id: string
    vehicle_name: string
    vehicle_number: string
    _count: MsVehicleCountAggregateOutputType | null
    _min: MsVehicleMinAggregateOutputType | null
    _max: MsVehicleMaxAggregateOutputType | null
  }

  type GetMsVehicleGroupByPayload<T extends MsVehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsVehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsVehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsVehicleGroupByOutputType[P]>
            : GetScalarType<T[P], MsVehicleGroupByOutputType[P]>
        }
      >
    >


  export type MsVehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_name?: boolean
    vehicle_number?: boolean
    user?: boolean | MsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msVehicle"]>

  export type MsVehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_name?: boolean
    vehicle_number?: boolean
    user?: boolean | MsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msVehicle"]>

  export type MsVehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_name?: boolean
    vehicle_number?: boolean
    user?: boolean | MsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msVehicle"]>

  export type MsVehicleSelectScalar = {
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_name?: boolean
    vehicle_number?: boolean
  }

  export type MsVehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicle_id" | "user_id" | "vehicle_name" | "vehicle_number", ExtArgs["result"]["msVehicle"]>
  export type MsVehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MsUserDefaultArgs<ExtArgs>
  }
  export type MsVehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MsUserDefaultArgs<ExtArgs>
  }
  export type MsVehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MsUserDefaultArgs<ExtArgs>
  }

  export type $MsVehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MsVehicle"
    objects: {
      user: Prisma.$MsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicle_id: string
      user_id: string
      vehicle_name: string
      vehicle_number: string
    }, ExtArgs["result"]["msVehicle"]>
    composites: {}
  }

  type MsVehicleGetPayload<S extends boolean | null | undefined | MsVehicleDefaultArgs> = $Result.GetResult<Prisma.$MsVehiclePayload, S>

  type MsVehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MsVehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MsVehicleCountAggregateInputType | true
    }

  export interface MsVehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MsVehicle'], meta: { name: 'MsVehicle' } }
    /**
     * Find zero or one MsVehicle that matches the filter.
     * @param {MsVehicleFindUniqueArgs} args - Arguments to find a MsVehicle
     * @example
     * // Get one MsVehicle
     * const msVehicle = await prisma.msVehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MsVehicleFindUniqueArgs>(args: SelectSubset<T, MsVehicleFindUniqueArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MsVehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MsVehicleFindUniqueOrThrowArgs} args - Arguments to find a MsVehicle
     * @example
     * // Get one MsVehicle
     * const msVehicle = await prisma.msVehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MsVehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, MsVehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsVehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleFindFirstArgs} args - Arguments to find a MsVehicle
     * @example
     * // Get one MsVehicle
     * const msVehicle = await prisma.msVehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MsVehicleFindFirstArgs>(args?: SelectSubset<T, MsVehicleFindFirstArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsVehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleFindFirstOrThrowArgs} args - Arguments to find a MsVehicle
     * @example
     * // Get one MsVehicle
     * const msVehicle = await prisma.msVehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MsVehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, MsVehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MsVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MsVehicles
     * const msVehicles = await prisma.msVehicle.findMany()
     * 
     * // Get first 10 MsVehicles
     * const msVehicles = await prisma.msVehicle.findMany({ take: 10 })
     * 
     * // Only select the `vehicle_id`
     * const msVehicleWithVehicle_idOnly = await prisma.msVehicle.findMany({ select: { vehicle_id: true } })
     * 
     */
    findMany<T extends MsVehicleFindManyArgs>(args?: SelectSubset<T, MsVehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MsVehicle.
     * @param {MsVehicleCreateArgs} args - Arguments to create a MsVehicle.
     * @example
     * // Create one MsVehicle
     * const MsVehicle = await prisma.msVehicle.create({
     *   data: {
     *     // ... data to create a MsVehicle
     *   }
     * })
     * 
     */
    create<T extends MsVehicleCreateArgs>(args: SelectSubset<T, MsVehicleCreateArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MsVehicles.
     * @param {MsVehicleCreateManyArgs} args - Arguments to create many MsVehicles.
     * @example
     * // Create many MsVehicles
     * const msVehicle = await prisma.msVehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MsVehicleCreateManyArgs>(args?: SelectSubset<T, MsVehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MsVehicles and returns the data saved in the database.
     * @param {MsVehicleCreateManyAndReturnArgs} args - Arguments to create many MsVehicles.
     * @example
     * // Create many MsVehicles
     * const msVehicle = await prisma.msVehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MsVehicles and only return the `vehicle_id`
     * const msVehicleWithVehicle_idOnly = await prisma.msVehicle.createManyAndReturn({
     *   select: { vehicle_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MsVehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, MsVehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MsVehicle.
     * @param {MsVehicleDeleteArgs} args - Arguments to delete one MsVehicle.
     * @example
     * // Delete one MsVehicle
     * const MsVehicle = await prisma.msVehicle.delete({
     *   where: {
     *     // ... filter to delete one MsVehicle
     *   }
     * })
     * 
     */
    delete<T extends MsVehicleDeleteArgs>(args: SelectSubset<T, MsVehicleDeleteArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MsVehicle.
     * @param {MsVehicleUpdateArgs} args - Arguments to update one MsVehicle.
     * @example
     * // Update one MsVehicle
     * const msVehicle = await prisma.msVehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MsVehicleUpdateArgs>(args: SelectSubset<T, MsVehicleUpdateArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MsVehicles.
     * @param {MsVehicleDeleteManyArgs} args - Arguments to filter MsVehicles to delete.
     * @example
     * // Delete a few MsVehicles
     * const { count } = await prisma.msVehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MsVehicleDeleteManyArgs>(args?: SelectSubset<T, MsVehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MsVehicles
     * const msVehicle = await prisma.msVehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MsVehicleUpdateManyArgs>(args: SelectSubset<T, MsVehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsVehicles and returns the data updated in the database.
     * @param {MsVehicleUpdateManyAndReturnArgs} args - Arguments to update many MsVehicles.
     * @example
     * // Update many MsVehicles
     * const msVehicle = await prisma.msVehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MsVehicles and only return the `vehicle_id`
     * const msVehicleWithVehicle_idOnly = await prisma.msVehicle.updateManyAndReturn({
     *   select: { vehicle_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MsVehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, MsVehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MsVehicle.
     * @param {MsVehicleUpsertArgs} args - Arguments to update or create a MsVehicle.
     * @example
     * // Update or create a MsVehicle
     * const msVehicle = await prisma.msVehicle.upsert({
     *   create: {
     *     // ... data to create a MsVehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MsVehicle we want to update
     *   }
     * })
     */
    upsert<T extends MsVehicleUpsertArgs>(args: SelectSubset<T, MsVehicleUpsertArgs<ExtArgs>>): Prisma__MsVehicleClient<$Result.GetResult<Prisma.$MsVehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MsVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleCountArgs} args - Arguments to filter MsVehicles to count.
     * @example
     * // Count the number of MsVehicles
     * const count = await prisma.msVehicle.count({
     *   where: {
     *     // ... the filter for the MsVehicles we want to count
     *   }
     * })
    **/
    count<T extends MsVehicleCountArgs>(
      args?: Subset<T, MsVehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsVehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MsVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MsVehicleAggregateArgs>(args: Subset<T, MsVehicleAggregateArgs>): Prisma.PrismaPromise<GetMsVehicleAggregateType<T>>

    /**
     * Group by MsVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsVehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MsVehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsVehicleGroupByArgs['orderBy'] }
        : { orderBy?: MsVehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MsVehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MsVehicle model
   */
  readonly fields: MsVehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MsVehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsVehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MsUserDefaultArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MsVehicle model
   */
  interface MsVehicleFieldRefs {
    readonly vehicle_id: FieldRef<"MsVehicle", 'String'>
    readonly user_id: FieldRef<"MsVehicle", 'String'>
    readonly vehicle_name: FieldRef<"MsVehicle", 'String'>
    readonly vehicle_number: FieldRef<"MsVehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MsVehicle findUnique
   */
  export type MsVehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which MsVehicle to fetch.
     */
    where: MsVehicleWhereUniqueInput
  }

  /**
   * MsVehicle findUniqueOrThrow
   */
  export type MsVehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which MsVehicle to fetch.
     */
    where: MsVehicleWhereUniqueInput
  }

  /**
   * MsVehicle findFirst
   */
  export type MsVehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which MsVehicle to fetch.
     */
    where?: MsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsVehicles to fetch.
     */
    orderBy?: MsVehicleOrderByWithRelationInput | MsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsVehicles.
     */
    cursor?: MsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsVehicles.
     */
    distinct?: MsVehicleScalarFieldEnum | MsVehicleScalarFieldEnum[]
  }

  /**
   * MsVehicle findFirstOrThrow
   */
  export type MsVehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which MsVehicle to fetch.
     */
    where?: MsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsVehicles to fetch.
     */
    orderBy?: MsVehicleOrderByWithRelationInput | MsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsVehicles.
     */
    cursor?: MsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsVehicles.
     */
    distinct?: MsVehicleScalarFieldEnum | MsVehicleScalarFieldEnum[]
  }

  /**
   * MsVehicle findMany
   */
  export type MsVehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which MsVehicles to fetch.
     */
    where?: MsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsVehicles to fetch.
     */
    orderBy?: MsVehicleOrderByWithRelationInput | MsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MsVehicles.
     */
    cursor?: MsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsVehicles.
     */
    skip?: number
    distinct?: MsVehicleScalarFieldEnum | MsVehicleScalarFieldEnum[]
  }

  /**
   * MsVehicle create
   */
  export type MsVehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a MsVehicle.
     */
    data: XOR<MsVehicleCreateInput, MsVehicleUncheckedCreateInput>
  }

  /**
   * MsVehicle createMany
   */
  export type MsVehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MsVehicles.
     */
    data: MsVehicleCreateManyInput | MsVehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsVehicle createManyAndReturn
   */
  export type MsVehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * The data used to create many MsVehicles.
     */
    data: MsVehicleCreateManyInput | MsVehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MsVehicle update
   */
  export type MsVehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a MsVehicle.
     */
    data: XOR<MsVehicleUpdateInput, MsVehicleUncheckedUpdateInput>
    /**
     * Choose, which MsVehicle to update.
     */
    where: MsVehicleWhereUniqueInput
  }

  /**
   * MsVehicle updateMany
   */
  export type MsVehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MsVehicles.
     */
    data: XOR<MsVehicleUpdateManyMutationInput, MsVehicleUncheckedUpdateManyInput>
    /**
     * Filter which MsVehicles to update
     */
    where?: MsVehicleWhereInput
    /**
     * Limit how many MsVehicles to update.
     */
    limit?: number
  }

  /**
   * MsVehicle updateManyAndReturn
   */
  export type MsVehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * The data used to update MsVehicles.
     */
    data: XOR<MsVehicleUpdateManyMutationInput, MsVehicleUncheckedUpdateManyInput>
    /**
     * Filter which MsVehicles to update
     */
    where?: MsVehicleWhereInput
    /**
     * Limit how many MsVehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MsVehicle upsert
   */
  export type MsVehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the MsVehicle to update in case it exists.
     */
    where: MsVehicleWhereUniqueInput
    /**
     * In case the MsVehicle found by the `where` argument doesn't exist, create a new MsVehicle with this data.
     */
    create: XOR<MsVehicleCreateInput, MsVehicleUncheckedCreateInput>
    /**
     * In case the MsVehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsVehicleUpdateInput, MsVehicleUncheckedUpdateInput>
  }

  /**
   * MsVehicle delete
   */
  export type MsVehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
    /**
     * Filter which MsVehicle to delete.
     */
    where: MsVehicleWhereUniqueInput
  }

  /**
   * MsVehicle deleteMany
   */
  export type MsVehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsVehicles to delete
     */
    where?: MsVehicleWhereInput
    /**
     * Limit how many MsVehicles to delete.
     */
    limit?: number
  }

  /**
   * MsVehicle without action
   */
  export type MsVehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsVehicle
     */
    select?: MsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsVehicle
     */
    omit?: MsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsVehicleInclude<ExtArgs> | null
  }


  /**
   * Model TripTransaction
   */

  export type AggregateTripTransaction = {
    _count: TripTransactionCountAggregateOutputType | null
    _avg: TripTransactionAvgAggregateOutputType | null
    _sum: TripTransactionSumAggregateOutputType | null
    _min: TripTransactionMinAggregateOutputType | null
    _max: TripTransactionMaxAggregateOutputType | null
  }

  export type TripTransactionAvgAggregateOutputType = {
    trip_point: number | null
  }

  export type TripTransactionSumAggregateOutputType = {
    trip_point: number | null
  }

  export type TripTransactionMinAggregateOutputType = {
    trip_id: string | null
    customer_id: string | null
    driver_id: string | null
    destination_id: string | null
    trip_date: Date | null
    trip_point: number | null
  }

  export type TripTransactionMaxAggregateOutputType = {
    trip_id: string | null
    customer_id: string | null
    driver_id: string | null
    destination_id: string | null
    trip_date: Date | null
    trip_point: number | null
  }

  export type TripTransactionCountAggregateOutputType = {
    trip_id: number
    customer_id: number
    driver_id: number
    destination_id: number
    trip_date: number
    trip_point: number
    _all: number
  }


  export type TripTransactionAvgAggregateInputType = {
    trip_point?: true
  }

  export type TripTransactionSumAggregateInputType = {
    trip_point?: true
  }

  export type TripTransactionMinAggregateInputType = {
    trip_id?: true
    customer_id?: true
    driver_id?: true
    destination_id?: true
    trip_date?: true
    trip_point?: true
  }

  export type TripTransactionMaxAggregateInputType = {
    trip_id?: true
    customer_id?: true
    driver_id?: true
    destination_id?: true
    trip_date?: true
    trip_point?: true
  }

  export type TripTransactionCountAggregateInputType = {
    trip_id?: true
    customer_id?: true
    driver_id?: true
    destination_id?: true
    trip_date?: true
    trip_point?: true
    _all?: true
  }

  export type TripTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripTransaction to aggregate.
     */
    where?: TripTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripTransactions to fetch.
     */
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripTransactions
    **/
    _count?: true | TripTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripTransactionMaxAggregateInputType
  }

  export type GetTripTransactionAggregateType<T extends TripTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTripTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripTransaction[P]>
      : GetScalarType<T[P], AggregateTripTransaction[P]>
  }




  export type TripTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripTransactionWhereInput
    orderBy?: TripTransactionOrderByWithAggregationInput | TripTransactionOrderByWithAggregationInput[]
    by: TripTransactionScalarFieldEnum[] | TripTransactionScalarFieldEnum
    having?: TripTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripTransactionCountAggregateInputType | true
    _avg?: TripTransactionAvgAggregateInputType
    _sum?: TripTransactionSumAggregateInputType
    _min?: TripTransactionMinAggregateInputType
    _max?: TripTransactionMaxAggregateInputType
  }

  export type TripTransactionGroupByOutputType = {
    trip_id: string
    customer_id: string
    driver_id: string
    destination_id: string
    trip_date: Date
    trip_point: number
    _count: TripTransactionCountAggregateOutputType | null
    _avg: TripTransactionAvgAggregateOutputType | null
    _sum: TripTransactionSumAggregateOutputType | null
    _min: TripTransactionMinAggregateOutputType | null
    _max: TripTransactionMaxAggregateOutputType | null
  }

  type GetTripTransactionGroupByPayload<T extends TripTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TripTransactionGroupByOutputType[P]>
        }
      >
    >


  export type TripTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trip_id?: boolean
    customer_id?: boolean
    driver_id?: boolean
    destination_id?: boolean
    trip_date?: boolean
    trip_point?: boolean
    customer?: boolean | MsUserDefaultArgs<ExtArgs>
    driver?: boolean | MsUserDefaultArgs<ExtArgs>
    destination?: boolean | MsDestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripTransaction"]>

  export type TripTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trip_id?: boolean
    customer_id?: boolean
    driver_id?: boolean
    destination_id?: boolean
    trip_date?: boolean
    trip_point?: boolean
    customer?: boolean | MsUserDefaultArgs<ExtArgs>
    driver?: boolean | MsUserDefaultArgs<ExtArgs>
    destination?: boolean | MsDestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripTransaction"]>

  export type TripTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trip_id?: boolean
    customer_id?: boolean
    driver_id?: boolean
    destination_id?: boolean
    trip_date?: boolean
    trip_point?: boolean
    customer?: boolean | MsUserDefaultArgs<ExtArgs>
    driver?: boolean | MsUserDefaultArgs<ExtArgs>
    destination?: boolean | MsDestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripTransaction"]>

  export type TripTransactionSelectScalar = {
    trip_id?: boolean
    customer_id?: boolean
    driver_id?: boolean
    destination_id?: boolean
    trip_date?: boolean
    trip_point?: boolean
  }

  export type TripTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"trip_id" | "customer_id" | "driver_id" | "destination_id" | "trip_date" | "trip_point", ExtArgs["result"]["tripTransaction"]>
  export type TripTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | MsUserDefaultArgs<ExtArgs>
    driver?: boolean | MsUserDefaultArgs<ExtArgs>
    destination?: boolean | MsDestinationDefaultArgs<ExtArgs>
  }
  export type TripTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | MsUserDefaultArgs<ExtArgs>
    driver?: boolean | MsUserDefaultArgs<ExtArgs>
    destination?: boolean | MsDestinationDefaultArgs<ExtArgs>
  }
  export type TripTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | MsUserDefaultArgs<ExtArgs>
    driver?: boolean | MsUserDefaultArgs<ExtArgs>
    destination?: boolean | MsDestinationDefaultArgs<ExtArgs>
  }

  export type $TripTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripTransaction"
    objects: {
      customer: Prisma.$MsUserPayload<ExtArgs>
      driver: Prisma.$MsUserPayload<ExtArgs>
      destination: Prisma.$MsDestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      trip_id: string
      customer_id: string
      driver_id: string
      destination_id: string
      trip_date: Date
      trip_point: number
    }, ExtArgs["result"]["tripTransaction"]>
    composites: {}
  }

  type TripTransactionGetPayload<S extends boolean | null | undefined | TripTransactionDefaultArgs> = $Result.GetResult<Prisma.$TripTransactionPayload, S>

  type TripTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripTransactionCountAggregateInputType | true
    }

  export interface TripTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripTransaction'], meta: { name: 'TripTransaction' } }
    /**
     * Find zero or one TripTransaction that matches the filter.
     * @param {TripTransactionFindUniqueArgs} args - Arguments to find a TripTransaction
     * @example
     * // Get one TripTransaction
     * const tripTransaction = await prisma.tripTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripTransactionFindUniqueArgs>(args: SelectSubset<T, TripTransactionFindUniqueArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripTransactionFindUniqueOrThrowArgs} args - Arguments to find a TripTransaction
     * @example
     * // Get one TripTransaction
     * const tripTransaction = await prisma.tripTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TripTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionFindFirstArgs} args - Arguments to find a TripTransaction
     * @example
     * // Get one TripTransaction
     * const tripTransaction = await prisma.tripTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripTransactionFindFirstArgs>(args?: SelectSubset<T, TripTransactionFindFirstArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionFindFirstOrThrowArgs} args - Arguments to find a TripTransaction
     * @example
     * // Get one TripTransaction
     * const tripTransaction = await prisma.tripTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TripTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripTransactions
     * const tripTransactions = await prisma.tripTransaction.findMany()
     * 
     * // Get first 10 TripTransactions
     * const tripTransactions = await prisma.tripTransaction.findMany({ take: 10 })
     * 
     * // Only select the `trip_id`
     * const tripTransactionWithTrip_idOnly = await prisma.tripTransaction.findMany({ select: { trip_id: true } })
     * 
     */
    findMany<T extends TripTransactionFindManyArgs>(args?: SelectSubset<T, TripTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripTransaction.
     * @param {TripTransactionCreateArgs} args - Arguments to create a TripTransaction.
     * @example
     * // Create one TripTransaction
     * const TripTransaction = await prisma.tripTransaction.create({
     *   data: {
     *     // ... data to create a TripTransaction
     *   }
     * })
     * 
     */
    create<T extends TripTransactionCreateArgs>(args: SelectSubset<T, TripTransactionCreateArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripTransactions.
     * @param {TripTransactionCreateManyArgs} args - Arguments to create many TripTransactions.
     * @example
     * // Create many TripTransactions
     * const tripTransaction = await prisma.tripTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripTransactionCreateManyArgs>(args?: SelectSubset<T, TripTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripTransactions and returns the data saved in the database.
     * @param {TripTransactionCreateManyAndReturnArgs} args - Arguments to create many TripTransactions.
     * @example
     * // Create many TripTransactions
     * const tripTransaction = await prisma.tripTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripTransactions and only return the `trip_id`
     * const tripTransactionWithTrip_idOnly = await prisma.tripTransaction.createManyAndReturn({
     *   select: { trip_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TripTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripTransaction.
     * @param {TripTransactionDeleteArgs} args - Arguments to delete one TripTransaction.
     * @example
     * // Delete one TripTransaction
     * const TripTransaction = await prisma.tripTransaction.delete({
     *   where: {
     *     // ... filter to delete one TripTransaction
     *   }
     * })
     * 
     */
    delete<T extends TripTransactionDeleteArgs>(args: SelectSubset<T, TripTransactionDeleteArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripTransaction.
     * @param {TripTransactionUpdateArgs} args - Arguments to update one TripTransaction.
     * @example
     * // Update one TripTransaction
     * const tripTransaction = await prisma.tripTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripTransactionUpdateArgs>(args: SelectSubset<T, TripTransactionUpdateArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripTransactions.
     * @param {TripTransactionDeleteManyArgs} args - Arguments to filter TripTransactions to delete.
     * @example
     * // Delete a few TripTransactions
     * const { count } = await prisma.tripTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripTransactionDeleteManyArgs>(args?: SelectSubset<T, TripTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripTransactions
     * const tripTransaction = await prisma.tripTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripTransactionUpdateManyArgs>(args: SelectSubset<T, TripTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripTransactions and returns the data updated in the database.
     * @param {TripTransactionUpdateManyAndReturnArgs} args - Arguments to update many TripTransactions.
     * @example
     * // Update many TripTransactions
     * const tripTransaction = await prisma.tripTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripTransactions and only return the `trip_id`
     * const tripTransactionWithTrip_idOnly = await prisma.tripTransaction.updateManyAndReturn({
     *   select: { trip_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TripTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripTransaction.
     * @param {TripTransactionUpsertArgs} args - Arguments to update or create a TripTransaction.
     * @example
     * // Update or create a TripTransaction
     * const tripTransaction = await prisma.tripTransaction.upsert({
     *   create: {
     *     // ... data to create a TripTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripTransaction we want to update
     *   }
     * })
     */
    upsert<T extends TripTransactionUpsertArgs>(args: SelectSubset<T, TripTransactionUpsertArgs<ExtArgs>>): Prisma__TripTransactionClient<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionCountArgs} args - Arguments to filter TripTransactions to count.
     * @example
     * // Count the number of TripTransactions
     * const count = await prisma.tripTransaction.count({
     *   where: {
     *     // ... the filter for the TripTransactions we want to count
     *   }
     * })
    **/
    count<T extends TripTransactionCountArgs>(
      args?: Subset<T, TripTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripTransactionAggregateArgs>(args: Subset<T, TripTransactionAggregateArgs>): Prisma.PrismaPromise<GetTripTransactionAggregateType<T>>

    /**
     * Group by TripTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripTransactionGroupByArgs['orderBy'] }
        : { orderBy?: TripTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripTransaction model
   */
  readonly fields: TripTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends MsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MsUserDefaultArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends MsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MsUserDefaultArgs<ExtArgs>>): Prisma__MsUserClient<$Result.GetResult<Prisma.$MsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends MsDestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MsDestinationDefaultArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripTransaction model
   */
  interface TripTransactionFieldRefs {
    readonly trip_id: FieldRef<"TripTransaction", 'String'>
    readonly customer_id: FieldRef<"TripTransaction", 'String'>
    readonly driver_id: FieldRef<"TripTransaction", 'String'>
    readonly destination_id: FieldRef<"TripTransaction", 'String'>
    readonly trip_date: FieldRef<"TripTransaction", 'DateTime'>
    readonly trip_point: FieldRef<"TripTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TripTransaction findUnique
   */
  export type TripTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TripTransaction to fetch.
     */
    where: TripTransactionWhereUniqueInput
  }

  /**
   * TripTransaction findUniqueOrThrow
   */
  export type TripTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TripTransaction to fetch.
     */
    where: TripTransactionWhereUniqueInput
  }

  /**
   * TripTransaction findFirst
   */
  export type TripTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TripTransaction to fetch.
     */
    where?: TripTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripTransactions to fetch.
     */
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripTransactions.
     */
    cursor?: TripTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripTransactions.
     */
    distinct?: TripTransactionScalarFieldEnum | TripTransactionScalarFieldEnum[]
  }

  /**
   * TripTransaction findFirstOrThrow
   */
  export type TripTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TripTransaction to fetch.
     */
    where?: TripTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripTransactions to fetch.
     */
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripTransactions.
     */
    cursor?: TripTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripTransactions.
     */
    distinct?: TripTransactionScalarFieldEnum | TripTransactionScalarFieldEnum[]
  }

  /**
   * TripTransaction findMany
   */
  export type TripTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TripTransactions to fetch.
     */
    where?: TripTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripTransactions to fetch.
     */
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripTransactions.
     */
    cursor?: TripTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripTransactions.
     */
    skip?: number
    distinct?: TripTransactionScalarFieldEnum | TripTransactionScalarFieldEnum[]
  }

  /**
   * TripTransaction create
   */
  export type TripTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a TripTransaction.
     */
    data: XOR<TripTransactionCreateInput, TripTransactionUncheckedCreateInput>
  }

  /**
   * TripTransaction createMany
   */
  export type TripTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripTransactions.
     */
    data: TripTransactionCreateManyInput | TripTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripTransaction createManyAndReturn
   */
  export type TripTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many TripTransactions.
     */
    data: TripTransactionCreateManyInput | TripTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripTransaction update
   */
  export type TripTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a TripTransaction.
     */
    data: XOR<TripTransactionUpdateInput, TripTransactionUncheckedUpdateInput>
    /**
     * Choose, which TripTransaction to update.
     */
    where: TripTransactionWhereUniqueInput
  }

  /**
   * TripTransaction updateMany
   */
  export type TripTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripTransactions.
     */
    data: XOR<TripTransactionUpdateManyMutationInput, TripTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TripTransactions to update
     */
    where?: TripTransactionWhereInput
    /**
     * Limit how many TripTransactions to update.
     */
    limit?: number
  }

  /**
   * TripTransaction updateManyAndReturn
   */
  export type TripTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * The data used to update TripTransactions.
     */
    data: XOR<TripTransactionUpdateManyMutationInput, TripTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TripTransactions to update
     */
    where?: TripTransactionWhereInput
    /**
     * Limit how many TripTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripTransaction upsert
   */
  export type TripTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the TripTransaction to update in case it exists.
     */
    where: TripTransactionWhereUniqueInput
    /**
     * In case the TripTransaction found by the `where` argument doesn't exist, create a new TripTransaction with this data.
     */
    create: XOR<TripTransactionCreateInput, TripTransactionUncheckedCreateInput>
    /**
     * In case the TripTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripTransactionUpdateInput, TripTransactionUncheckedUpdateInput>
  }

  /**
   * TripTransaction delete
   */
  export type TripTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    /**
     * Filter which TripTransaction to delete.
     */
    where: TripTransactionWhereUniqueInput
  }

  /**
   * TripTransaction deleteMany
   */
  export type TripTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripTransactions to delete
     */
    where?: TripTransactionWhereInput
    /**
     * Limit how many TripTransactions to delete.
     */
    limit?: number
  }

  /**
   * TripTransaction without action
   */
  export type TripTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
  }


  /**
   * Model MsDestination
   */

  export type AggregateMsDestination = {
    _count: MsDestinationCountAggregateOutputType | null
    _avg: MsDestinationAvgAggregateOutputType | null
    _sum: MsDestinationSumAggregateOutputType | null
    _min: MsDestinationMinAggregateOutputType | null
    _max: MsDestinationMaxAggregateOutputType | null
  }

  export type MsDestinationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MsDestinationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MsDestinationMinAggregateOutputType = {
    destination_id: string | null
    destination_name: string | null
    latitude: number | null
    longitude: number | null
  }

  export type MsDestinationMaxAggregateOutputType = {
    destination_id: string | null
    destination_name: string | null
    latitude: number | null
    longitude: number | null
  }

  export type MsDestinationCountAggregateOutputType = {
    destination_id: number
    destination_name: number
    latitude: number
    longitude: number
    _all: number
  }


  export type MsDestinationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MsDestinationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MsDestinationMinAggregateInputType = {
    destination_id?: true
    destination_name?: true
    latitude?: true
    longitude?: true
  }

  export type MsDestinationMaxAggregateInputType = {
    destination_id?: true
    destination_name?: true
    latitude?: true
    longitude?: true
  }

  export type MsDestinationCountAggregateInputType = {
    destination_id?: true
    destination_name?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type MsDestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsDestination to aggregate.
     */
    where?: MsDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsDestinations to fetch.
     */
    orderBy?: MsDestinationOrderByWithRelationInput | MsDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsDestinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MsDestinations
    **/
    _count?: true | MsDestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MsDestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MsDestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsDestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsDestinationMaxAggregateInputType
  }

  export type GetMsDestinationAggregateType<T extends MsDestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateMsDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsDestination[P]>
      : GetScalarType<T[P], AggregateMsDestination[P]>
  }




  export type MsDestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsDestinationWhereInput
    orderBy?: MsDestinationOrderByWithAggregationInput | MsDestinationOrderByWithAggregationInput[]
    by: MsDestinationScalarFieldEnum[] | MsDestinationScalarFieldEnum
    having?: MsDestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsDestinationCountAggregateInputType | true
    _avg?: MsDestinationAvgAggregateInputType
    _sum?: MsDestinationSumAggregateInputType
    _min?: MsDestinationMinAggregateInputType
    _max?: MsDestinationMaxAggregateInputType
  }

  export type MsDestinationGroupByOutputType = {
    destination_id: string
    destination_name: string
    latitude: number
    longitude: number
    _count: MsDestinationCountAggregateOutputType | null
    _avg: MsDestinationAvgAggregateOutputType | null
    _sum: MsDestinationSumAggregateOutputType | null
    _min: MsDestinationMinAggregateOutputType | null
    _max: MsDestinationMaxAggregateOutputType | null
  }

  type GetMsDestinationGroupByPayload<T extends MsDestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsDestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsDestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsDestinationGroupByOutputType[P]>
            : GetScalarType<T[P], MsDestinationGroupByOutputType[P]>
        }
      >
    >


  export type MsDestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destination_id?: boolean
    destination_name?: boolean
    latitude?: boolean
    longitude?: boolean
    trips?: boolean | MsDestination$tripsArgs<ExtArgs>
    _count?: boolean | MsDestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["msDestination"]>

  export type MsDestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destination_id?: boolean
    destination_name?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["msDestination"]>

  export type MsDestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destination_id?: boolean
    destination_name?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["msDestination"]>

  export type MsDestinationSelectScalar = {
    destination_id?: boolean
    destination_name?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type MsDestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"destination_id" | "destination_name" | "latitude" | "longitude", ExtArgs["result"]["msDestination"]>
  export type MsDestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | MsDestination$tripsArgs<ExtArgs>
    _count?: boolean | MsDestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MsDestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MsDestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MsDestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MsDestination"
    objects: {
      trips: Prisma.$TripTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      destination_id: string
      destination_name: string
      latitude: number
      longitude: number
    }, ExtArgs["result"]["msDestination"]>
    composites: {}
  }

  type MsDestinationGetPayload<S extends boolean | null | undefined | MsDestinationDefaultArgs> = $Result.GetResult<Prisma.$MsDestinationPayload, S>

  type MsDestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MsDestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MsDestinationCountAggregateInputType | true
    }

  export interface MsDestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MsDestination'], meta: { name: 'MsDestination' } }
    /**
     * Find zero or one MsDestination that matches the filter.
     * @param {MsDestinationFindUniqueArgs} args - Arguments to find a MsDestination
     * @example
     * // Get one MsDestination
     * const msDestination = await prisma.msDestination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MsDestinationFindUniqueArgs>(args: SelectSubset<T, MsDestinationFindUniqueArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MsDestination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MsDestinationFindUniqueOrThrowArgs} args - Arguments to find a MsDestination
     * @example
     * // Get one MsDestination
     * const msDestination = await prisma.msDestination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MsDestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, MsDestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsDestination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationFindFirstArgs} args - Arguments to find a MsDestination
     * @example
     * // Get one MsDestination
     * const msDestination = await prisma.msDestination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MsDestinationFindFirstArgs>(args?: SelectSubset<T, MsDestinationFindFirstArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsDestination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationFindFirstOrThrowArgs} args - Arguments to find a MsDestination
     * @example
     * // Get one MsDestination
     * const msDestination = await prisma.msDestination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MsDestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, MsDestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MsDestinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MsDestinations
     * const msDestinations = await prisma.msDestination.findMany()
     * 
     * // Get first 10 MsDestinations
     * const msDestinations = await prisma.msDestination.findMany({ take: 10 })
     * 
     * // Only select the `destination_id`
     * const msDestinationWithDestination_idOnly = await prisma.msDestination.findMany({ select: { destination_id: true } })
     * 
     */
    findMany<T extends MsDestinationFindManyArgs>(args?: SelectSubset<T, MsDestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MsDestination.
     * @param {MsDestinationCreateArgs} args - Arguments to create a MsDestination.
     * @example
     * // Create one MsDestination
     * const MsDestination = await prisma.msDestination.create({
     *   data: {
     *     // ... data to create a MsDestination
     *   }
     * })
     * 
     */
    create<T extends MsDestinationCreateArgs>(args: SelectSubset<T, MsDestinationCreateArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MsDestinations.
     * @param {MsDestinationCreateManyArgs} args - Arguments to create many MsDestinations.
     * @example
     * // Create many MsDestinations
     * const msDestination = await prisma.msDestination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MsDestinationCreateManyArgs>(args?: SelectSubset<T, MsDestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MsDestinations and returns the data saved in the database.
     * @param {MsDestinationCreateManyAndReturnArgs} args - Arguments to create many MsDestinations.
     * @example
     * // Create many MsDestinations
     * const msDestination = await prisma.msDestination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MsDestinations and only return the `destination_id`
     * const msDestinationWithDestination_idOnly = await prisma.msDestination.createManyAndReturn({
     *   select: { destination_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MsDestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, MsDestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MsDestination.
     * @param {MsDestinationDeleteArgs} args - Arguments to delete one MsDestination.
     * @example
     * // Delete one MsDestination
     * const MsDestination = await prisma.msDestination.delete({
     *   where: {
     *     // ... filter to delete one MsDestination
     *   }
     * })
     * 
     */
    delete<T extends MsDestinationDeleteArgs>(args: SelectSubset<T, MsDestinationDeleteArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MsDestination.
     * @param {MsDestinationUpdateArgs} args - Arguments to update one MsDestination.
     * @example
     * // Update one MsDestination
     * const msDestination = await prisma.msDestination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MsDestinationUpdateArgs>(args: SelectSubset<T, MsDestinationUpdateArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MsDestinations.
     * @param {MsDestinationDeleteManyArgs} args - Arguments to filter MsDestinations to delete.
     * @example
     * // Delete a few MsDestinations
     * const { count } = await prisma.msDestination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MsDestinationDeleteManyArgs>(args?: SelectSubset<T, MsDestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsDestinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MsDestinations
     * const msDestination = await prisma.msDestination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MsDestinationUpdateManyArgs>(args: SelectSubset<T, MsDestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsDestinations and returns the data updated in the database.
     * @param {MsDestinationUpdateManyAndReturnArgs} args - Arguments to update many MsDestinations.
     * @example
     * // Update many MsDestinations
     * const msDestination = await prisma.msDestination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MsDestinations and only return the `destination_id`
     * const msDestinationWithDestination_idOnly = await prisma.msDestination.updateManyAndReturn({
     *   select: { destination_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MsDestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, MsDestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MsDestination.
     * @param {MsDestinationUpsertArgs} args - Arguments to update or create a MsDestination.
     * @example
     * // Update or create a MsDestination
     * const msDestination = await prisma.msDestination.upsert({
     *   create: {
     *     // ... data to create a MsDestination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MsDestination we want to update
     *   }
     * })
     */
    upsert<T extends MsDestinationUpsertArgs>(args: SelectSubset<T, MsDestinationUpsertArgs<ExtArgs>>): Prisma__MsDestinationClient<$Result.GetResult<Prisma.$MsDestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MsDestinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationCountArgs} args - Arguments to filter MsDestinations to count.
     * @example
     * // Count the number of MsDestinations
     * const count = await prisma.msDestination.count({
     *   where: {
     *     // ... the filter for the MsDestinations we want to count
     *   }
     * })
    **/
    count<T extends MsDestinationCountArgs>(
      args?: Subset<T, MsDestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsDestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MsDestination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MsDestinationAggregateArgs>(args: Subset<T, MsDestinationAggregateArgs>): Prisma.PrismaPromise<GetMsDestinationAggregateType<T>>

    /**
     * Group by MsDestination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsDestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MsDestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsDestinationGroupByArgs['orderBy'] }
        : { orderBy?: MsDestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MsDestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MsDestination model
   */
  readonly fields: MsDestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MsDestination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsDestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends MsDestination$tripsArgs<ExtArgs> = {}>(args?: Subset<T, MsDestination$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MsDestination model
   */
  interface MsDestinationFieldRefs {
    readonly destination_id: FieldRef<"MsDestination", 'String'>
    readonly destination_name: FieldRef<"MsDestination", 'String'>
    readonly latitude: FieldRef<"MsDestination", 'Float'>
    readonly longitude: FieldRef<"MsDestination", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MsDestination findUnique
   */
  export type MsDestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * Filter, which MsDestination to fetch.
     */
    where: MsDestinationWhereUniqueInput
  }

  /**
   * MsDestination findUniqueOrThrow
   */
  export type MsDestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * Filter, which MsDestination to fetch.
     */
    where: MsDestinationWhereUniqueInput
  }

  /**
   * MsDestination findFirst
   */
  export type MsDestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * Filter, which MsDestination to fetch.
     */
    where?: MsDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsDestinations to fetch.
     */
    orderBy?: MsDestinationOrderByWithRelationInput | MsDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsDestinations.
     */
    cursor?: MsDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsDestinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsDestinations.
     */
    distinct?: MsDestinationScalarFieldEnum | MsDestinationScalarFieldEnum[]
  }

  /**
   * MsDestination findFirstOrThrow
   */
  export type MsDestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * Filter, which MsDestination to fetch.
     */
    where?: MsDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsDestinations to fetch.
     */
    orderBy?: MsDestinationOrderByWithRelationInput | MsDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsDestinations.
     */
    cursor?: MsDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsDestinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsDestinations.
     */
    distinct?: MsDestinationScalarFieldEnum | MsDestinationScalarFieldEnum[]
  }

  /**
   * MsDestination findMany
   */
  export type MsDestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * Filter, which MsDestinations to fetch.
     */
    where?: MsDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsDestinations to fetch.
     */
    orderBy?: MsDestinationOrderByWithRelationInput | MsDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MsDestinations.
     */
    cursor?: MsDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsDestinations.
     */
    skip?: number
    distinct?: MsDestinationScalarFieldEnum | MsDestinationScalarFieldEnum[]
  }

  /**
   * MsDestination create
   */
  export type MsDestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a MsDestination.
     */
    data: XOR<MsDestinationCreateInput, MsDestinationUncheckedCreateInput>
  }

  /**
   * MsDestination createMany
   */
  export type MsDestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MsDestinations.
     */
    data: MsDestinationCreateManyInput | MsDestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsDestination createManyAndReturn
   */
  export type MsDestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * The data used to create many MsDestinations.
     */
    data: MsDestinationCreateManyInput | MsDestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsDestination update
   */
  export type MsDestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a MsDestination.
     */
    data: XOR<MsDestinationUpdateInput, MsDestinationUncheckedUpdateInput>
    /**
     * Choose, which MsDestination to update.
     */
    where: MsDestinationWhereUniqueInput
  }

  /**
   * MsDestination updateMany
   */
  export type MsDestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MsDestinations.
     */
    data: XOR<MsDestinationUpdateManyMutationInput, MsDestinationUncheckedUpdateManyInput>
    /**
     * Filter which MsDestinations to update
     */
    where?: MsDestinationWhereInput
    /**
     * Limit how many MsDestinations to update.
     */
    limit?: number
  }

  /**
   * MsDestination updateManyAndReturn
   */
  export type MsDestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * The data used to update MsDestinations.
     */
    data: XOR<MsDestinationUpdateManyMutationInput, MsDestinationUncheckedUpdateManyInput>
    /**
     * Filter which MsDestinations to update
     */
    where?: MsDestinationWhereInput
    /**
     * Limit how many MsDestinations to update.
     */
    limit?: number
  }

  /**
   * MsDestination upsert
   */
  export type MsDestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the MsDestination to update in case it exists.
     */
    where: MsDestinationWhereUniqueInput
    /**
     * In case the MsDestination found by the `where` argument doesn't exist, create a new MsDestination with this data.
     */
    create: XOR<MsDestinationCreateInput, MsDestinationUncheckedCreateInput>
    /**
     * In case the MsDestination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsDestinationUpdateInput, MsDestinationUncheckedUpdateInput>
  }

  /**
   * MsDestination delete
   */
  export type MsDestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
    /**
     * Filter which MsDestination to delete.
     */
    where: MsDestinationWhereUniqueInput
  }

  /**
   * MsDestination deleteMany
   */
  export type MsDestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsDestinations to delete
     */
    where?: MsDestinationWhereInput
    /**
     * Limit how many MsDestinations to delete.
     */
    limit?: number
  }

  /**
   * MsDestination.trips
   */
  export type MsDestination$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripTransaction
     */
    select?: TripTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripTransaction
     */
    omit?: TripTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripTransactionInclude<ExtArgs> | null
    where?: TripTransactionWhereInput
    orderBy?: TripTransactionOrderByWithRelationInput | TripTransactionOrderByWithRelationInput[]
    cursor?: TripTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripTransactionScalarFieldEnum | TripTransactionScalarFieldEnum[]
  }

  /**
   * MsDestination without action
   */
  export type MsDestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsDestination
     */
    select?: MsDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsDestination
     */
    omit?: MsDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MsDestinationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MsUserScalarFieldEnum: {
    user_id: 'user_id',
    user_email: 'user_email',
    user_password: 'user_password',
    user_name: 'user_name',
    user_phone: 'user_phone',
    user_profile_picture: 'user_profile_picture'
  };

  export type MsUserScalarFieldEnum = (typeof MsUserScalarFieldEnum)[keyof typeof MsUserScalarFieldEnum]


  export const MsVehicleScalarFieldEnum: {
    vehicle_id: 'vehicle_id',
    user_id: 'user_id',
    vehicle_name: 'vehicle_name',
    vehicle_number: 'vehicle_number'
  };

  export type MsVehicleScalarFieldEnum = (typeof MsVehicleScalarFieldEnum)[keyof typeof MsVehicleScalarFieldEnum]


  export const TripTransactionScalarFieldEnum: {
    trip_id: 'trip_id',
    customer_id: 'customer_id',
    driver_id: 'driver_id',
    destination_id: 'destination_id',
    trip_date: 'trip_date',
    trip_point: 'trip_point'
  };

  export type TripTransactionScalarFieldEnum = (typeof TripTransactionScalarFieldEnum)[keyof typeof TripTransactionScalarFieldEnum]


  export const MsDestinationScalarFieldEnum: {
    destination_id: 'destination_id',
    destination_name: 'destination_name',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type MsDestinationScalarFieldEnum = (typeof MsDestinationScalarFieldEnum)[keyof typeof MsDestinationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MsUserWhereInput = {
    AND?: MsUserWhereInput | MsUserWhereInput[]
    OR?: MsUserWhereInput[]
    NOT?: MsUserWhereInput | MsUserWhereInput[]
    user_id?: StringFilter<"MsUser"> | string
    user_email?: StringFilter<"MsUser"> | string
    user_password?: StringFilter<"MsUser"> | string
    user_name?: StringFilter<"MsUser"> | string
    user_phone?: StringFilter<"MsUser"> | string
    user_profile_picture?: StringFilter<"MsUser"> | string
    vehicles?: MsVehicleListRelationFilter
    trips_as_customer?: TripTransactionListRelationFilter
    trips_as_driver?: TripTransactionListRelationFilter
  }

  export type MsUserOrderByWithRelationInput = {
    user_id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_profile_picture?: SortOrder
    vehicles?: MsVehicleOrderByRelationAggregateInput
    trips_as_customer?: TripTransactionOrderByRelationAggregateInput
    trips_as_driver?: TripTransactionOrderByRelationAggregateInput
  }

  export type MsUserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    user_email?: string
    AND?: MsUserWhereInput | MsUserWhereInput[]
    OR?: MsUserWhereInput[]
    NOT?: MsUserWhereInput | MsUserWhereInput[]
    user_password?: StringFilter<"MsUser"> | string
    user_name?: StringFilter<"MsUser"> | string
    user_phone?: StringFilter<"MsUser"> | string
    user_profile_picture?: StringFilter<"MsUser"> | string
    vehicles?: MsVehicleListRelationFilter
    trips_as_customer?: TripTransactionListRelationFilter
    trips_as_driver?: TripTransactionListRelationFilter
  }, "user_id" | "user_email">

  export type MsUserOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_profile_picture?: SortOrder
    _count?: MsUserCountOrderByAggregateInput
    _max?: MsUserMaxOrderByAggregateInput
    _min?: MsUserMinOrderByAggregateInput
  }

  export type MsUserScalarWhereWithAggregatesInput = {
    AND?: MsUserScalarWhereWithAggregatesInput | MsUserScalarWhereWithAggregatesInput[]
    OR?: MsUserScalarWhereWithAggregatesInput[]
    NOT?: MsUserScalarWhereWithAggregatesInput | MsUserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"MsUser"> | string
    user_email?: StringWithAggregatesFilter<"MsUser"> | string
    user_password?: StringWithAggregatesFilter<"MsUser"> | string
    user_name?: StringWithAggregatesFilter<"MsUser"> | string
    user_phone?: StringWithAggregatesFilter<"MsUser"> | string
    user_profile_picture?: StringWithAggregatesFilter<"MsUser"> | string
  }

  export type MsVehicleWhereInput = {
    AND?: MsVehicleWhereInput | MsVehicleWhereInput[]
    OR?: MsVehicleWhereInput[]
    NOT?: MsVehicleWhereInput | MsVehicleWhereInput[]
    vehicle_id?: StringFilter<"MsVehicle"> | string
    user_id?: StringFilter<"MsVehicle"> | string
    vehicle_name?: StringFilter<"MsVehicle"> | string
    vehicle_number?: StringFilter<"MsVehicle"> | string
    user?: XOR<MsUserScalarRelationFilter, MsUserWhereInput>
  }

  export type MsVehicleOrderByWithRelationInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_name?: SortOrder
    vehicle_number?: SortOrder
    user?: MsUserOrderByWithRelationInput
  }

  export type MsVehicleWhereUniqueInput = Prisma.AtLeast<{
    vehicle_id?: string
    AND?: MsVehicleWhereInput | MsVehicleWhereInput[]
    OR?: MsVehicleWhereInput[]
    NOT?: MsVehicleWhereInput | MsVehicleWhereInput[]
    user_id?: StringFilter<"MsVehicle"> | string
    vehicle_name?: StringFilter<"MsVehicle"> | string
    vehicle_number?: StringFilter<"MsVehicle"> | string
    user?: XOR<MsUserScalarRelationFilter, MsUserWhereInput>
  }, "vehicle_id">

  export type MsVehicleOrderByWithAggregationInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_name?: SortOrder
    vehicle_number?: SortOrder
    _count?: MsVehicleCountOrderByAggregateInput
    _max?: MsVehicleMaxOrderByAggregateInput
    _min?: MsVehicleMinOrderByAggregateInput
  }

  export type MsVehicleScalarWhereWithAggregatesInput = {
    AND?: MsVehicleScalarWhereWithAggregatesInput | MsVehicleScalarWhereWithAggregatesInput[]
    OR?: MsVehicleScalarWhereWithAggregatesInput[]
    NOT?: MsVehicleScalarWhereWithAggregatesInput | MsVehicleScalarWhereWithAggregatesInput[]
    vehicle_id?: StringWithAggregatesFilter<"MsVehicle"> | string
    user_id?: StringWithAggregatesFilter<"MsVehicle"> | string
    vehicle_name?: StringWithAggregatesFilter<"MsVehicle"> | string
    vehicle_number?: StringWithAggregatesFilter<"MsVehicle"> | string
  }

  export type TripTransactionWhereInput = {
    AND?: TripTransactionWhereInput | TripTransactionWhereInput[]
    OR?: TripTransactionWhereInput[]
    NOT?: TripTransactionWhereInput | TripTransactionWhereInput[]
    trip_id?: StringFilter<"TripTransaction"> | string
    customer_id?: StringFilter<"TripTransaction"> | string
    driver_id?: StringFilter<"TripTransaction"> | string
    destination_id?: StringFilter<"TripTransaction"> | string
    trip_date?: DateTimeFilter<"TripTransaction"> | Date | string
    trip_point?: IntFilter<"TripTransaction"> | number
    customer?: XOR<MsUserScalarRelationFilter, MsUserWhereInput>
    driver?: XOR<MsUserScalarRelationFilter, MsUserWhereInput>
    destination?: XOR<MsDestinationScalarRelationFilter, MsDestinationWhereInput>
  }

  export type TripTransactionOrderByWithRelationInput = {
    trip_id?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    destination_id?: SortOrder
    trip_date?: SortOrder
    trip_point?: SortOrder
    customer?: MsUserOrderByWithRelationInput
    driver?: MsUserOrderByWithRelationInput
    destination?: MsDestinationOrderByWithRelationInput
  }

  export type TripTransactionWhereUniqueInput = Prisma.AtLeast<{
    trip_id?: string
    AND?: TripTransactionWhereInput | TripTransactionWhereInput[]
    OR?: TripTransactionWhereInput[]
    NOT?: TripTransactionWhereInput | TripTransactionWhereInput[]
    customer_id?: StringFilter<"TripTransaction"> | string
    driver_id?: StringFilter<"TripTransaction"> | string
    destination_id?: StringFilter<"TripTransaction"> | string
    trip_date?: DateTimeFilter<"TripTransaction"> | Date | string
    trip_point?: IntFilter<"TripTransaction"> | number
    customer?: XOR<MsUserScalarRelationFilter, MsUserWhereInput>
    driver?: XOR<MsUserScalarRelationFilter, MsUserWhereInput>
    destination?: XOR<MsDestinationScalarRelationFilter, MsDestinationWhereInput>
  }, "trip_id">

  export type TripTransactionOrderByWithAggregationInput = {
    trip_id?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    destination_id?: SortOrder
    trip_date?: SortOrder
    trip_point?: SortOrder
    _count?: TripTransactionCountOrderByAggregateInput
    _avg?: TripTransactionAvgOrderByAggregateInput
    _max?: TripTransactionMaxOrderByAggregateInput
    _min?: TripTransactionMinOrderByAggregateInput
    _sum?: TripTransactionSumOrderByAggregateInput
  }

  export type TripTransactionScalarWhereWithAggregatesInput = {
    AND?: TripTransactionScalarWhereWithAggregatesInput | TripTransactionScalarWhereWithAggregatesInput[]
    OR?: TripTransactionScalarWhereWithAggregatesInput[]
    NOT?: TripTransactionScalarWhereWithAggregatesInput | TripTransactionScalarWhereWithAggregatesInput[]
    trip_id?: StringWithAggregatesFilter<"TripTransaction"> | string
    customer_id?: StringWithAggregatesFilter<"TripTransaction"> | string
    driver_id?: StringWithAggregatesFilter<"TripTransaction"> | string
    destination_id?: StringWithAggregatesFilter<"TripTransaction"> | string
    trip_date?: DateTimeWithAggregatesFilter<"TripTransaction"> | Date | string
    trip_point?: IntWithAggregatesFilter<"TripTransaction"> | number
  }

  export type MsDestinationWhereInput = {
    AND?: MsDestinationWhereInput | MsDestinationWhereInput[]
    OR?: MsDestinationWhereInput[]
    NOT?: MsDestinationWhereInput | MsDestinationWhereInput[]
    destination_id?: StringFilter<"MsDestination"> | string
    destination_name?: StringFilter<"MsDestination"> | string
    latitude?: FloatFilter<"MsDestination"> | number
    longitude?: FloatFilter<"MsDestination"> | number
    trips?: TripTransactionListRelationFilter
  }

  export type MsDestinationOrderByWithRelationInput = {
    destination_id?: SortOrder
    destination_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    trips?: TripTransactionOrderByRelationAggregateInput
  }

  export type MsDestinationWhereUniqueInput = Prisma.AtLeast<{
    destination_id?: string
    AND?: MsDestinationWhereInput | MsDestinationWhereInput[]
    OR?: MsDestinationWhereInput[]
    NOT?: MsDestinationWhereInput | MsDestinationWhereInput[]
    destination_name?: StringFilter<"MsDestination"> | string
    latitude?: FloatFilter<"MsDestination"> | number
    longitude?: FloatFilter<"MsDestination"> | number
    trips?: TripTransactionListRelationFilter
  }, "destination_id">

  export type MsDestinationOrderByWithAggregationInput = {
    destination_id?: SortOrder
    destination_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: MsDestinationCountOrderByAggregateInput
    _avg?: MsDestinationAvgOrderByAggregateInput
    _max?: MsDestinationMaxOrderByAggregateInput
    _min?: MsDestinationMinOrderByAggregateInput
    _sum?: MsDestinationSumOrderByAggregateInput
  }

  export type MsDestinationScalarWhereWithAggregatesInput = {
    AND?: MsDestinationScalarWhereWithAggregatesInput | MsDestinationScalarWhereWithAggregatesInput[]
    OR?: MsDestinationScalarWhereWithAggregatesInput[]
    NOT?: MsDestinationScalarWhereWithAggregatesInput | MsDestinationScalarWhereWithAggregatesInput[]
    destination_id?: StringWithAggregatesFilter<"MsDestination"> | string
    destination_name?: StringWithAggregatesFilter<"MsDestination"> | string
    latitude?: FloatWithAggregatesFilter<"MsDestination"> | number
    longitude?: FloatWithAggregatesFilter<"MsDestination"> | number
  }

  export type MsUserCreateInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    vehicles?: MsVehicleCreateNestedManyWithoutUserInput
    trips_as_customer?: TripTransactionCreateNestedManyWithoutCustomerInput
    trips_as_driver?: TripTransactionCreateNestedManyWithoutDriverInput
  }

  export type MsUserUncheckedCreateInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    vehicles?: MsVehicleUncheckedCreateNestedManyWithoutUserInput
    trips_as_customer?: TripTransactionUncheckedCreateNestedManyWithoutCustomerInput
    trips_as_driver?: TripTransactionUncheckedCreateNestedManyWithoutDriverInput
  }

  export type MsUserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    vehicles?: MsVehicleUpdateManyWithoutUserNestedInput
    trips_as_customer?: TripTransactionUpdateManyWithoutCustomerNestedInput
    trips_as_driver?: TripTransactionUpdateManyWithoutDriverNestedInput
  }

  export type MsUserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    vehicles?: MsVehicleUncheckedUpdateManyWithoutUserNestedInput
    trips_as_customer?: TripTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    trips_as_driver?: TripTransactionUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type MsUserCreateManyInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
  }

  export type MsUserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
  }

  export type MsUserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
  }

  export type MsVehicleCreateInput = {
    vehicle_id: string
    vehicle_name: string
    vehicle_number: string
    user: MsUserCreateNestedOneWithoutVehiclesInput
  }

  export type MsVehicleUncheckedCreateInput = {
    vehicle_id: string
    user_id: string
    vehicle_name: string
    vehicle_number: string
  }

  export type MsVehicleUpdateInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
    user?: MsUserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type MsVehicleUncheckedUpdateInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
  }

  export type MsVehicleCreateManyInput = {
    vehicle_id: string
    user_id: string
    vehicle_name: string
    vehicle_number: string
  }

  export type MsVehicleUpdateManyMutationInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
  }

  export type MsVehicleUncheckedUpdateManyInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
  }

  export type TripTransactionCreateInput = {
    trip_id: string
    trip_date: Date | string
    trip_point: number
    customer: MsUserCreateNestedOneWithoutTrips_as_customerInput
    driver: MsUserCreateNestedOneWithoutTrips_as_driverInput
    destination: MsDestinationCreateNestedOneWithoutTripsInput
  }

  export type TripTransactionUncheckedCreateInput = {
    trip_id: string
    customer_id: string
    driver_id: string
    destination_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionUpdateInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
    customer?: MsUserUpdateOneRequiredWithoutTrips_as_customerNestedInput
    driver?: MsUserUpdateOneRequiredWithoutTrips_as_driverNestedInput
    destination?: MsDestinationUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripTransactionUncheckedUpdateInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionCreateManyInput = {
    trip_id: string
    customer_id: string
    driver_id: string
    destination_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionUpdateManyMutationInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionUncheckedUpdateManyInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type MsDestinationCreateInput = {
    destination_id: string
    destination_name: string
    latitude: number
    longitude: number
    trips?: TripTransactionCreateNestedManyWithoutDestinationInput
  }

  export type MsDestinationUncheckedCreateInput = {
    destination_id: string
    destination_name: string
    latitude: number
    longitude: number
    trips?: TripTransactionUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type MsDestinationUpdateInput = {
    destination_id?: StringFieldUpdateOperationsInput | string
    destination_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    trips?: TripTransactionUpdateManyWithoutDestinationNestedInput
  }

  export type MsDestinationUncheckedUpdateInput = {
    destination_id?: StringFieldUpdateOperationsInput | string
    destination_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    trips?: TripTransactionUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type MsDestinationCreateManyInput = {
    destination_id: string
    destination_name: string
    latitude: number
    longitude: number
  }

  export type MsDestinationUpdateManyMutationInput = {
    destination_id?: StringFieldUpdateOperationsInput | string
    destination_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type MsDestinationUncheckedUpdateManyInput = {
    destination_id?: StringFieldUpdateOperationsInput | string
    destination_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MsVehicleListRelationFilter = {
    every?: MsVehicleWhereInput
    some?: MsVehicleWhereInput
    none?: MsVehicleWhereInput
  }

  export type TripTransactionListRelationFilter = {
    every?: TripTransactionWhereInput
    some?: TripTransactionWhereInput
    none?: TripTransactionWhereInput
  }

  export type MsVehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MsUserCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_profile_picture?: SortOrder
  }

  export type MsUserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_profile_picture?: SortOrder
  }

  export type MsUserMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_profile_picture?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MsUserScalarRelationFilter = {
    is?: MsUserWhereInput
    isNot?: MsUserWhereInput
  }

  export type MsVehicleCountOrderByAggregateInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_name?: SortOrder
    vehicle_number?: SortOrder
  }

  export type MsVehicleMaxOrderByAggregateInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_name?: SortOrder
    vehicle_number?: SortOrder
  }

  export type MsVehicleMinOrderByAggregateInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_name?: SortOrder
    vehicle_number?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MsDestinationScalarRelationFilter = {
    is?: MsDestinationWhereInput
    isNot?: MsDestinationWhereInput
  }

  export type TripTransactionCountOrderByAggregateInput = {
    trip_id?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    destination_id?: SortOrder
    trip_date?: SortOrder
    trip_point?: SortOrder
  }

  export type TripTransactionAvgOrderByAggregateInput = {
    trip_point?: SortOrder
  }

  export type TripTransactionMaxOrderByAggregateInput = {
    trip_id?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    destination_id?: SortOrder
    trip_date?: SortOrder
    trip_point?: SortOrder
  }

  export type TripTransactionMinOrderByAggregateInput = {
    trip_id?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    destination_id?: SortOrder
    trip_date?: SortOrder
    trip_point?: SortOrder
  }

  export type TripTransactionSumOrderByAggregateInput = {
    trip_point?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MsDestinationCountOrderByAggregateInput = {
    destination_id?: SortOrder
    destination_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MsDestinationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MsDestinationMaxOrderByAggregateInput = {
    destination_id?: SortOrder
    destination_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MsDestinationMinOrderByAggregateInput = {
    destination_id?: SortOrder
    destination_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MsDestinationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MsVehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<MsVehicleCreateWithoutUserInput, MsVehicleUncheckedCreateWithoutUserInput> | MsVehicleCreateWithoutUserInput[] | MsVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MsVehicleCreateOrConnectWithoutUserInput | MsVehicleCreateOrConnectWithoutUserInput[]
    createMany?: MsVehicleCreateManyUserInputEnvelope
    connect?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
  }

  export type TripTransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TripTransactionCreateWithoutCustomerInput, TripTransactionUncheckedCreateWithoutCustomerInput> | TripTransactionCreateWithoutCustomerInput[] | TripTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutCustomerInput | TripTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: TripTransactionCreateManyCustomerInputEnvelope
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
  }

  export type TripTransactionCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripTransactionCreateWithoutDriverInput, TripTransactionUncheckedCreateWithoutDriverInput> | TripTransactionCreateWithoutDriverInput[] | TripTransactionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDriverInput | TripTransactionCreateOrConnectWithoutDriverInput[]
    createMany?: TripTransactionCreateManyDriverInputEnvelope
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
  }

  export type MsVehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MsVehicleCreateWithoutUserInput, MsVehicleUncheckedCreateWithoutUserInput> | MsVehicleCreateWithoutUserInput[] | MsVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MsVehicleCreateOrConnectWithoutUserInput | MsVehicleCreateOrConnectWithoutUserInput[]
    createMany?: MsVehicleCreateManyUserInputEnvelope
    connect?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
  }

  export type TripTransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TripTransactionCreateWithoutCustomerInput, TripTransactionUncheckedCreateWithoutCustomerInput> | TripTransactionCreateWithoutCustomerInput[] | TripTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutCustomerInput | TripTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: TripTransactionCreateManyCustomerInputEnvelope
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
  }

  export type TripTransactionUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripTransactionCreateWithoutDriverInput, TripTransactionUncheckedCreateWithoutDriverInput> | TripTransactionCreateWithoutDriverInput[] | TripTransactionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDriverInput | TripTransactionCreateOrConnectWithoutDriverInput[]
    createMany?: TripTransactionCreateManyDriverInputEnvelope
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MsVehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<MsVehicleCreateWithoutUserInput, MsVehicleUncheckedCreateWithoutUserInput> | MsVehicleCreateWithoutUserInput[] | MsVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MsVehicleCreateOrConnectWithoutUserInput | MsVehicleCreateOrConnectWithoutUserInput[]
    upsert?: MsVehicleUpsertWithWhereUniqueWithoutUserInput | MsVehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MsVehicleCreateManyUserInputEnvelope
    set?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    disconnect?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    delete?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    connect?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    update?: MsVehicleUpdateWithWhereUniqueWithoutUserInput | MsVehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MsVehicleUpdateManyWithWhereWithoutUserInput | MsVehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MsVehicleScalarWhereInput | MsVehicleScalarWhereInput[]
  }

  export type TripTransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TripTransactionCreateWithoutCustomerInput, TripTransactionUncheckedCreateWithoutCustomerInput> | TripTransactionCreateWithoutCustomerInput[] | TripTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutCustomerInput | TripTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: TripTransactionUpsertWithWhereUniqueWithoutCustomerInput | TripTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TripTransactionCreateManyCustomerInputEnvelope
    set?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    disconnect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    delete?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    update?: TripTransactionUpdateWithWhereUniqueWithoutCustomerInput | TripTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TripTransactionUpdateManyWithWhereWithoutCustomerInput | TripTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
  }

  export type TripTransactionUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripTransactionCreateWithoutDriverInput, TripTransactionUncheckedCreateWithoutDriverInput> | TripTransactionCreateWithoutDriverInput[] | TripTransactionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDriverInput | TripTransactionCreateOrConnectWithoutDriverInput[]
    upsert?: TripTransactionUpsertWithWhereUniqueWithoutDriverInput | TripTransactionUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripTransactionCreateManyDriverInputEnvelope
    set?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    disconnect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    delete?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    update?: TripTransactionUpdateWithWhereUniqueWithoutDriverInput | TripTransactionUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripTransactionUpdateManyWithWhereWithoutDriverInput | TripTransactionUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
  }

  export type MsVehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MsVehicleCreateWithoutUserInput, MsVehicleUncheckedCreateWithoutUserInput> | MsVehicleCreateWithoutUserInput[] | MsVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MsVehicleCreateOrConnectWithoutUserInput | MsVehicleCreateOrConnectWithoutUserInput[]
    upsert?: MsVehicleUpsertWithWhereUniqueWithoutUserInput | MsVehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MsVehicleCreateManyUserInputEnvelope
    set?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    disconnect?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    delete?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    connect?: MsVehicleWhereUniqueInput | MsVehicleWhereUniqueInput[]
    update?: MsVehicleUpdateWithWhereUniqueWithoutUserInput | MsVehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MsVehicleUpdateManyWithWhereWithoutUserInput | MsVehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MsVehicleScalarWhereInput | MsVehicleScalarWhereInput[]
  }

  export type TripTransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TripTransactionCreateWithoutCustomerInput, TripTransactionUncheckedCreateWithoutCustomerInput> | TripTransactionCreateWithoutCustomerInput[] | TripTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutCustomerInput | TripTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: TripTransactionUpsertWithWhereUniqueWithoutCustomerInput | TripTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TripTransactionCreateManyCustomerInputEnvelope
    set?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    disconnect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    delete?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    update?: TripTransactionUpdateWithWhereUniqueWithoutCustomerInput | TripTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TripTransactionUpdateManyWithWhereWithoutCustomerInput | TripTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
  }

  export type TripTransactionUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripTransactionCreateWithoutDriverInput, TripTransactionUncheckedCreateWithoutDriverInput> | TripTransactionCreateWithoutDriverInput[] | TripTransactionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDriverInput | TripTransactionCreateOrConnectWithoutDriverInput[]
    upsert?: TripTransactionUpsertWithWhereUniqueWithoutDriverInput | TripTransactionUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripTransactionCreateManyDriverInputEnvelope
    set?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    disconnect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    delete?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    update?: TripTransactionUpdateWithWhereUniqueWithoutDriverInput | TripTransactionUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripTransactionUpdateManyWithWhereWithoutDriverInput | TripTransactionUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
  }

  export type MsUserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<MsUserCreateWithoutVehiclesInput, MsUserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: MsUserCreateOrConnectWithoutVehiclesInput
    connect?: MsUserWhereUniqueInput
  }

  export type MsUserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<MsUserCreateWithoutVehiclesInput, MsUserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: MsUserCreateOrConnectWithoutVehiclesInput
    upsert?: MsUserUpsertWithoutVehiclesInput
    connect?: MsUserWhereUniqueInput
    update?: XOR<XOR<MsUserUpdateToOneWithWhereWithoutVehiclesInput, MsUserUpdateWithoutVehiclesInput>, MsUserUncheckedUpdateWithoutVehiclesInput>
  }

  export type MsUserCreateNestedOneWithoutTrips_as_customerInput = {
    create?: XOR<MsUserCreateWithoutTrips_as_customerInput, MsUserUncheckedCreateWithoutTrips_as_customerInput>
    connectOrCreate?: MsUserCreateOrConnectWithoutTrips_as_customerInput
    connect?: MsUserWhereUniqueInput
  }

  export type MsUserCreateNestedOneWithoutTrips_as_driverInput = {
    create?: XOR<MsUserCreateWithoutTrips_as_driverInput, MsUserUncheckedCreateWithoutTrips_as_driverInput>
    connectOrCreate?: MsUserCreateOrConnectWithoutTrips_as_driverInput
    connect?: MsUserWhereUniqueInput
  }

  export type MsDestinationCreateNestedOneWithoutTripsInput = {
    create?: XOR<MsDestinationCreateWithoutTripsInput, MsDestinationUncheckedCreateWithoutTripsInput>
    connectOrCreate?: MsDestinationCreateOrConnectWithoutTripsInput
    connect?: MsDestinationWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MsUserUpdateOneRequiredWithoutTrips_as_customerNestedInput = {
    create?: XOR<MsUserCreateWithoutTrips_as_customerInput, MsUserUncheckedCreateWithoutTrips_as_customerInput>
    connectOrCreate?: MsUserCreateOrConnectWithoutTrips_as_customerInput
    upsert?: MsUserUpsertWithoutTrips_as_customerInput
    connect?: MsUserWhereUniqueInput
    update?: XOR<XOR<MsUserUpdateToOneWithWhereWithoutTrips_as_customerInput, MsUserUpdateWithoutTrips_as_customerInput>, MsUserUncheckedUpdateWithoutTrips_as_customerInput>
  }

  export type MsUserUpdateOneRequiredWithoutTrips_as_driverNestedInput = {
    create?: XOR<MsUserCreateWithoutTrips_as_driverInput, MsUserUncheckedCreateWithoutTrips_as_driverInput>
    connectOrCreate?: MsUserCreateOrConnectWithoutTrips_as_driverInput
    upsert?: MsUserUpsertWithoutTrips_as_driverInput
    connect?: MsUserWhereUniqueInput
    update?: XOR<XOR<MsUserUpdateToOneWithWhereWithoutTrips_as_driverInput, MsUserUpdateWithoutTrips_as_driverInput>, MsUserUncheckedUpdateWithoutTrips_as_driverInput>
  }

  export type MsDestinationUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<MsDestinationCreateWithoutTripsInput, MsDestinationUncheckedCreateWithoutTripsInput>
    connectOrCreate?: MsDestinationCreateOrConnectWithoutTripsInput
    upsert?: MsDestinationUpsertWithoutTripsInput
    connect?: MsDestinationWhereUniqueInput
    update?: XOR<XOR<MsDestinationUpdateToOneWithWhereWithoutTripsInput, MsDestinationUpdateWithoutTripsInput>, MsDestinationUncheckedUpdateWithoutTripsInput>
  }

  export type TripTransactionCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TripTransactionCreateWithoutDestinationInput, TripTransactionUncheckedCreateWithoutDestinationInput> | TripTransactionCreateWithoutDestinationInput[] | TripTransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDestinationInput | TripTransactionCreateOrConnectWithoutDestinationInput[]
    createMany?: TripTransactionCreateManyDestinationInputEnvelope
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
  }

  export type TripTransactionUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TripTransactionCreateWithoutDestinationInput, TripTransactionUncheckedCreateWithoutDestinationInput> | TripTransactionCreateWithoutDestinationInput[] | TripTransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDestinationInput | TripTransactionCreateOrConnectWithoutDestinationInput[]
    createMany?: TripTransactionCreateManyDestinationInputEnvelope
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripTransactionUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TripTransactionCreateWithoutDestinationInput, TripTransactionUncheckedCreateWithoutDestinationInput> | TripTransactionCreateWithoutDestinationInput[] | TripTransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDestinationInput | TripTransactionCreateOrConnectWithoutDestinationInput[]
    upsert?: TripTransactionUpsertWithWhereUniqueWithoutDestinationInput | TripTransactionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: TripTransactionCreateManyDestinationInputEnvelope
    set?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    disconnect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    delete?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    update?: TripTransactionUpdateWithWhereUniqueWithoutDestinationInput | TripTransactionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TripTransactionUpdateManyWithWhereWithoutDestinationInput | TripTransactionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
  }

  export type TripTransactionUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TripTransactionCreateWithoutDestinationInput, TripTransactionUncheckedCreateWithoutDestinationInput> | TripTransactionCreateWithoutDestinationInput[] | TripTransactionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TripTransactionCreateOrConnectWithoutDestinationInput | TripTransactionCreateOrConnectWithoutDestinationInput[]
    upsert?: TripTransactionUpsertWithWhereUniqueWithoutDestinationInput | TripTransactionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: TripTransactionCreateManyDestinationInputEnvelope
    set?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    disconnect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    delete?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    connect?: TripTransactionWhereUniqueInput | TripTransactionWhereUniqueInput[]
    update?: TripTransactionUpdateWithWhereUniqueWithoutDestinationInput | TripTransactionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TripTransactionUpdateManyWithWhereWithoutDestinationInput | TripTransactionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MsVehicleCreateWithoutUserInput = {
    vehicle_id: string
    vehicle_name: string
    vehicle_number: string
  }

  export type MsVehicleUncheckedCreateWithoutUserInput = {
    vehicle_id: string
    vehicle_name: string
    vehicle_number: string
  }

  export type MsVehicleCreateOrConnectWithoutUserInput = {
    where: MsVehicleWhereUniqueInput
    create: XOR<MsVehicleCreateWithoutUserInput, MsVehicleUncheckedCreateWithoutUserInput>
  }

  export type MsVehicleCreateManyUserInputEnvelope = {
    data: MsVehicleCreateManyUserInput | MsVehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripTransactionCreateWithoutCustomerInput = {
    trip_id: string
    trip_date: Date | string
    trip_point: number
    driver: MsUserCreateNestedOneWithoutTrips_as_driverInput
    destination: MsDestinationCreateNestedOneWithoutTripsInput
  }

  export type TripTransactionUncheckedCreateWithoutCustomerInput = {
    trip_id: string
    driver_id: string
    destination_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionCreateOrConnectWithoutCustomerInput = {
    where: TripTransactionWhereUniqueInput
    create: XOR<TripTransactionCreateWithoutCustomerInput, TripTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type TripTransactionCreateManyCustomerInputEnvelope = {
    data: TripTransactionCreateManyCustomerInput | TripTransactionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TripTransactionCreateWithoutDriverInput = {
    trip_id: string
    trip_date: Date | string
    trip_point: number
    customer: MsUserCreateNestedOneWithoutTrips_as_customerInput
    destination: MsDestinationCreateNestedOneWithoutTripsInput
  }

  export type TripTransactionUncheckedCreateWithoutDriverInput = {
    trip_id: string
    customer_id: string
    destination_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionCreateOrConnectWithoutDriverInput = {
    where: TripTransactionWhereUniqueInput
    create: XOR<TripTransactionCreateWithoutDriverInput, TripTransactionUncheckedCreateWithoutDriverInput>
  }

  export type TripTransactionCreateManyDriverInputEnvelope = {
    data: TripTransactionCreateManyDriverInput | TripTransactionCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type MsVehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: MsVehicleWhereUniqueInput
    update: XOR<MsVehicleUpdateWithoutUserInput, MsVehicleUncheckedUpdateWithoutUserInput>
    create: XOR<MsVehicleCreateWithoutUserInput, MsVehicleUncheckedCreateWithoutUserInput>
  }

  export type MsVehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: MsVehicleWhereUniqueInput
    data: XOR<MsVehicleUpdateWithoutUserInput, MsVehicleUncheckedUpdateWithoutUserInput>
  }

  export type MsVehicleUpdateManyWithWhereWithoutUserInput = {
    where: MsVehicleScalarWhereInput
    data: XOR<MsVehicleUpdateManyMutationInput, MsVehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type MsVehicleScalarWhereInput = {
    AND?: MsVehicleScalarWhereInput | MsVehicleScalarWhereInput[]
    OR?: MsVehicleScalarWhereInput[]
    NOT?: MsVehicleScalarWhereInput | MsVehicleScalarWhereInput[]
    vehicle_id?: StringFilter<"MsVehicle"> | string
    user_id?: StringFilter<"MsVehicle"> | string
    vehicle_name?: StringFilter<"MsVehicle"> | string
    vehicle_number?: StringFilter<"MsVehicle"> | string
  }

  export type TripTransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TripTransactionWhereUniqueInput
    update: XOR<TripTransactionUpdateWithoutCustomerInput, TripTransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<TripTransactionCreateWithoutCustomerInput, TripTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type TripTransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TripTransactionWhereUniqueInput
    data: XOR<TripTransactionUpdateWithoutCustomerInput, TripTransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type TripTransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: TripTransactionScalarWhereInput
    data: XOR<TripTransactionUpdateManyMutationInput, TripTransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TripTransactionScalarWhereInput = {
    AND?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
    OR?: TripTransactionScalarWhereInput[]
    NOT?: TripTransactionScalarWhereInput | TripTransactionScalarWhereInput[]
    trip_id?: StringFilter<"TripTransaction"> | string
    customer_id?: StringFilter<"TripTransaction"> | string
    driver_id?: StringFilter<"TripTransaction"> | string
    destination_id?: StringFilter<"TripTransaction"> | string
    trip_date?: DateTimeFilter<"TripTransaction"> | Date | string
    trip_point?: IntFilter<"TripTransaction"> | number
  }

  export type TripTransactionUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripTransactionWhereUniqueInput
    update: XOR<TripTransactionUpdateWithoutDriverInput, TripTransactionUncheckedUpdateWithoutDriverInput>
    create: XOR<TripTransactionCreateWithoutDriverInput, TripTransactionUncheckedCreateWithoutDriverInput>
  }

  export type TripTransactionUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripTransactionWhereUniqueInput
    data: XOR<TripTransactionUpdateWithoutDriverInput, TripTransactionUncheckedUpdateWithoutDriverInput>
  }

  export type TripTransactionUpdateManyWithWhereWithoutDriverInput = {
    where: TripTransactionScalarWhereInput
    data: XOR<TripTransactionUpdateManyMutationInput, TripTransactionUncheckedUpdateManyWithoutDriverInput>
  }

  export type MsUserCreateWithoutVehiclesInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    trips_as_customer?: TripTransactionCreateNestedManyWithoutCustomerInput
    trips_as_driver?: TripTransactionCreateNestedManyWithoutDriverInput
  }

  export type MsUserUncheckedCreateWithoutVehiclesInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    trips_as_customer?: TripTransactionUncheckedCreateNestedManyWithoutCustomerInput
    trips_as_driver?: TripTransactionUncheckedCreateNestedManyWithoutDriverInput
  }

  export type MsUserCreateOrConnectWithoutVehiclesInput = {
    where: MsUserWhereUniqueInput
    create: XOR<MsUserCreateWithoutVehiclesInput, MsUserUncheckedCreateWithoutVehiclesInput>
  }

  export type MsUserUpsertWithoutVehiclesInput = {
    update: XOR<MsUserUpdateWithoutVehiclesInput, MsUserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<MsUserCreateWithoutVehiclesInput, MsUserUncheckedCreateWithoutVehiclesInput>
    where?: MsUserWhereInput
  }

  export type MsUserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: MsUserWhereInput
    data: XOR<MsUserUpdateWithoutVehiclesInput, MsUserUncheckedUpdateWithoutVehiclesInput>
  }

  export type MsUserUpdateWithoutVehiclesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    trips_as_customer?: TripTransactionUpdateManyWithoutCustomerNestedInput
    trips_as_driver?: TripTransactionUpdateManyWithoutDriverNestedInput
  }

  export type MsUserUncheckedUpdateWithoutVehiclesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    trips_as_customer?: TripTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    trips_as_driver?: TripTransactionUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type MsUserCreateWithoutTrips_as_customerInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    vehicles?: MsVehicleCreateNestedManyWithoutUserInput
    trips_as_driver?: TripTransactionCreateNestedManyWithoutDriverInput
  }

  export type MsUserUncheckedCreateWithoutTrips_as_customerInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    vehicles?: MsVehicleUncheckedCreateNestedManyWithoutUserInput
    trips_as_driver?: TripTransactionUncheckedCreateNestedManyWithoutDriverInput
  }

  export type MsUserCreateOrConnectWithoutTrips_as_customerInput = {
    where: MsUserWhereUniqueInput
    create: XOR<MsUserCreateWithoutTrips_as_customerInput, MsUserUncheckedCreateWithoutTrips_as_customerInput>
  }

  export type MsUserCreateWithoutTrips_as_driverInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    vehicles?: MsVehicleCreateNestedManyWithoutUserInput
    trips_as_customer?: TripTransactionCreateNestedManyWithoutCustomerInput
  }

  export type MsUserUncheckedCreateWithoutTrips_as_driverInput = {
    user_id: string
    user_email: string
    user_password: string
    user_name: string
    user_phone: string
    user_profile_picture: string
    vehicles?: MsVehicleUncheckedCreateNestedManyWithoutUserInput
    trips_as_customer?: TripTransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type MsUserCreateOrConnectWithoutTrips_as_driverInput = {
    where: MsUserWhereUniqueInput
    create: XOR<MsUserCreateWithoutTrips_as_driverInput, MsUserUncheckedCreateWithoutTrips_as_driverInput>
  }

  export type MsDestinationCreateWithoutTripsInput = {
    destination_id: string
    destination_name: string
    latitude: number
    longitude: number
  }

  export type MsDestinationUncheckedCreateWithoutTripsInput = {
    destination_id: string
    destination_name: string
    latitude: number
    longitude: number
  }

  export type MsDestinationCreateOrConnectWithoutTripsInput = {
    where: MsDestinationWhereUniqueInput
    create: XOR<MsDestinationCreateWithoutTripsInput, MsDestinationUncheckedCreateWithoutTripsInput>
  }

  export type MsUserUpsertWithoutTrips_as_customerInput = {
    update: XOR<MsUserUpdateWithoutTrips_as_customerInput, MsUserUncheckedUpdateWithoutTrips_as_customerInput>
    create: XOR<MsUserCreateWithoutTrips_as_customerInput, MsUserUncheckedCreateWithoutTrips_as_customerInput>
    where?: MsUserWhereInput
  }

  export type MsUserUpdateToOneWithWhereWithoutTrips_as_customerInput = {
    where?: MsUserWhereInput
    data: XOR<MsUserUpdateWithoutTrips_as_customerInput, MsUserUncheckedUpdateWithoutTrips_as_customerInput>
  }

  export type MsUserUpdateWithoutTrips_as_customerInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    vehicles?: MsVehicleUpdateManyWithoutUserNestedInput
    trips_as_driver?: TripTransactionUpdateManyWithoutDriverNestedInput
  }

  export type MsUserUncheckedUpdateWithoutTrips_as_customerInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    vehicles?: MsVehicleUncheckedUpdateManyWithoutUserNestedInput
    trips_as_driver?: TripTransactionUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type MsUserUpsertWithoutTrips_as_driverInput = {
    update: XOR<MsUserUpdateWithoutTrips_as_driverInput, MsUserUncheckedUpdateWithoutTrips_as_driverInput>
    create: XOR<MsUserCreateWithoutTrips_as_driverInput, MsUserUncheckedCreateWithoutTrips_as_driverInput>
    where?: MsUserWhereInput
  }

  export type MsUserUpdateToOneWithWhereWithoutTrips_as_driverInput = {
    where?: MsUserWhereInput
    data: XOR<MsUserUpdateWithoutTrips_as_driverInput, MsUserUncheckedUpdateWithoutTrips_as_driverInput>
  }

  export type MsUserUpdateWithoutTrips_as_driverInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    vehicles?: MsVehicleUpdateManyWithoutUserNestedInput
    trips_as_customer?: TripTransactionUpdateManyWithoutCustomerNestedInput
  }

  export type MsUserUncheckedUpdateWithoutTrips_as_driverInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_phone?: StringFieldUpdateOperationsInput | string
    user_profile_picture?: StringFieldUpdateOperationsInput | string
    vehicles?: MsVehicleUncheckedUpdateManyWithoutUserNestedInput
    trips_as_customer?: TripTransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MsDestinationUpsertWithoutTripsInput = {
    update: XOR<MsDestinationUpdateWithoutTripsInput, MsDestinationUncheckedUpdateWithoutTripsInput>
    create: XOR<MsDestinationCreateWithoutTripsInput, MsDestinationUncheckedCreateWithoutTripsInput>
    where?: MsDestinationWhereInput
  }

  export type MsDestinationUpdateToOneWithWhereWithoutTripsInput = {
    where?: MsDestinationWhereInput
    data: XOR<MsDestinationUpdateWithoutTripsInput, MsDestinationUncheckedUpdateWithoutTripsInput>
  }

  export type MsDestinationUpdateWithoutTripsInput = {
    destination_id?: StringFieldUpdateOperationsInput | string
    destination_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type MsDestinationUncheckedUpdateWithoutTripsInput = {
    destination_id?: StringFieldUpdateOperationsInput | string
    destination_name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type TripTransactionCreateWithoutDestinationInput = {
    trip_id: string
    trip_date: Date | string
    trip_point: number
    customer: MsUserCreateNestedOneWithoutTrips_as_customerInput
    driver: MsUserCreateNestedOneWithoutTrips_as_driverInput
  }

  export type TripTransactionUncheckedCreateWithoutDestinationInput = {
    trip_id: string
    customer_id: string
    driver_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionCreateOrConnectWithoutDestinationInput = {
    where: TripTransactionWhereUniqueInput
    create: XOR<TripTransactionCreateWithoutDestinationInput, TripTransactionUncheckedCreateWithoutDestinationInput>
  }

  export type TripTransactionCreateManyDestinationInputEnvelope = {
    data: TripTransactionCreateManyDestinationInput | TripTransactionCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type TripTransactionUpsertWithWhereUniqueWithoutDestinationInput = {
    where: TripTransactionWhereUniqueInput
    update: XOR<TripTransactionUpdateWithoutDestinationInput, TripTransactionUncheckedUpdateWithoutDestinationInput>
    create: XOR<TripTransactionCreateWithoutDestinationInput, TripTransactionUncheckedCreateWithoutDestinationInput>
  }

  export type TripTransactionUpdateWithWhereUniqueWithoutDestinationInput = {
    where: TripTransactionWhereUniqueInput
    data: XOR<TripTransactionUpdateWithoutDestinationInput, TripTransactionUncheckedUpdateWithoutDestinationInput>
  }

  export type TripTransactionUpdateManyWithWhereWithoutDestinationInput = {
    where: TripTransactionScalarWhereInput
    data: XOR<TripTransactionUpdateManyMutationInput, TripTransactionUncheckedUpdateManyWithoutDestinationInput>
  }

  export type MsVehicleCreateManyUserInput = {
    vehicle_id: string
    vehicle_name: string
    vehicle_number: string
  }

  export type TripTransactionCreateManyCustomerInput = {
    trip_id: string
    driver_id: string
    destination_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionCreateManyDriverInput = {
    trip_id: string
    customer_id: string
    destination_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type MsVehicleUpdateWithoutUserInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
  }

  export type MsVehicleUncheckedUpdateWithoutUserInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
  }

  export type MsVehicleUncheckedUpdateManyWithoutUserInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_name?: StringFieldUpdateOperationsInput | string
    vehicle_number?: StringFieldUpdateOperationsInput | string
  }

  export type TripTransactionUpdateWithoutCustomerInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
    driver?: MsUserUpdateOneRequiredWithoutTrips_as_driverNestedInput
    destination?: MsDestinationUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripTransactionUncheckedUpdateWithoutCustomerInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionUncheckedUpdateManyWithoutCustomerInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionUpdateWithoutDriverInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
    customer?: MsUserUpdateOneRequiredWithoutTrips_as_customerNestedInput
    destination?: MsDestinationUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripTransactionUncheckedUpdateWithoutDriverInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionUncheckedUpdateManyWithoutDriverInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionCreateManyDestinationInput = {
    trip_id: string
    customer_id: string
    driver_id: string
    trip_date: Date | string
    trip_point: number
  }

  export type TripTransactionUpdateWithoutDestinationInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
    customer?: MsUserUpdateOneRequiredWithoutTrips_as_customerNestedInput
    driver?: MsUserUpdateOneRequiredWithoutTrips_as_driverNestedInput
  }

  export type TripTransactionUncheckedUpdateWithoutDestinationInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }

  export type TripTransactionUncheckedUpdateManyWithoutDestinationInput = {
    trip_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    trip_date?: DateTimeFieldUpdateOperationsInput | Date | string
    trip_point?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}