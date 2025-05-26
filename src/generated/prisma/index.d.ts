
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model UserOnWorkspace
 * 
 */
export type UserOnWorkspace = $Result.DefaultSelection<Prisma.$UserOnWorkspacePayload>
/**
 * Model Invite
 * 
 */
export type Invite = $Result.DefaultSelection<Prisma.$InvitePayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model UserOnChannels
 * 
 */
export type UserOnChannels = $Result.DefaultSelection<Prisma.$UserOnChannelsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  GUEST: 'GUEST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const WorkspaceRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type WorkspaceRole = (typeof WorkspaceRole)[keyof typeof WorkspaceRole]


export const InviteStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED'
};

export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type WorkspaceRole = $Enums.WorkspaceRole

export const WorkspaceRole: typeof $Enums.WorkspaceRole

export type InviteStatus = $Enums.InviteStatus

export const InviteStatus: typeof $Enums.InviteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnWorkspace`: Exposes CRUD operations for the **UserOnWorkspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnWorkspaces
    * const userOnWorkspaces = await prisma.userOnWorkspace.findMany()
    * ```
    */
  get userOnWorkspace(): Prisma.UserOnWorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.InviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnChannels`: Exposes CRUD operations for the **UserOnChannels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnChannels
    * const userOnChannels = await prisma.userOnChannels.findMany()
    * ```
    */
  get userOnChannels(): Prisma.UserOnChannelsDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Workspace: 'Workspace',
    UserOnWorkspace: 'UserOnWorkspace',
    Invite: 'Invite',
    Channel: 'Channel',
    UserOnChannels: 'UserOnChannels'
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
      modelProps: "user" | "workspace" | "userOnWorkspace" | "invite" | "channel" | "userOnChannels"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      UserOnWorkspace: {
        payload: Prisma.$UserOnWorkspacePayload<ExtArgs>
        fields: Prisma.UserOnWorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnWorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnWorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>
          }
          findFirst: {
            args: Prisma.UserOnWorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnWorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>
          }
          findMany: {
            args: Prisma.UserOnWorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>[]
          }
          create: {
            args: Prisma.UserOnWorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>
          }
          createMany: {
            args: Prisma.UserOnWorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnWorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>[]
          }
          delete: {
            args: Prisma.UserOnWorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>
          }
          update: {
            args: Prisma.UserOnWorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>
          }
          deleteMany: {
            args: Prisma.UserOnWorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnWorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOnWorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>[]
          }
          upsert: {
            args: Prisma.UserOnWorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnWorkspacePayload>
          }
          aggregate: {
            args: Prisma.UserOnWorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnWorkspace>
          }
          groupBy: {
            args: Prisma.UserOnWorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnWorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnWorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnWorkspaceCountAggregateOutputType> | number
          }
        }
      }
      Invite: {
        payload: Prisma.$InvitePayload<ExtArgs>
        fields: Prisma.InviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findFirst: {
            args: Prisma.InviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findMany: {
            args: Prisma.InviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          create: {
            args: Prisma.InviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          createMany: {
            args: Prisma.InviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          delete: {
            args: Prisma.InviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          update: {
            args: Prisma.InviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          deleteMany: {
            args: Prisma.InviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          upsert: {
            args: Prisma.InviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.InviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      UserOnChannels: {
        payload: Prisma.$UserOnChannelsPayload<ExtArgs>
        fields: Prisma.UserOnChannelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnChannelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnChannelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>
          }
          findFirst: {
            args: Prisma.UserOnChannelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnChannelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>
          }
          findMany: {
            args: Prisma.UserOnChannelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>[]
          }
          create: {
            args: Prisma.UserOnChannelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>
          }
          createMany: {
            args: Prisma.UserOnChannelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnChannelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>[]
          }
          delete: {
            args: Prisma.UserOnChannelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>
          }
          update: {
            args: Prisma.UserOnChannelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>
          }
          deleteMany: {
            args: Prisma.UserOnChannelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnChannelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOnChannelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>[]
          }
          upsert: {
            args: Prisma.UserOnChannelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelsPayload>
          }
          aggregate: {
            args: Prisma.UserOnChannelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnChannels>
          }
          groupBy: {
            args: Prisma.UserOnChannelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnChannelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnChannelsCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnChannelsCountAggregateOutputType> | number
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
    user?: UserOmit
    workspace?: WorkspaceOmit
    userOnWorkspace?: UserOnWorkspaceOmit
    invite?: InviteOmit
    channel?: ChannelOmit
    userOnChannels?: UserOnChannelsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
    ownedWorkspaces: number
    InviteSent: number
    Channels: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
    ownedWorkspaces?: boolean | UserCountOutputTypeCountOwnedWorkspacesArgs
    InviteSent?: boolean | UserCountOutputTypeCountInviteSentArgs
    Channels?: boolean | UserCountOutputTypeCountChannelsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnWorkspaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInviteSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnChannelsWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    members: number
    Invite: number
    Channel: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | WorkspaceCountOutputTypeCountMembersArgs
    Invite?: boolean | WorkspaceCountOutputTypeCountInviteArgs
    Channel?: boolean | WorkspaceCountOutputTypeCountChannelArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnWorkspaceWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountInviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    UserOnChannels: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserOnChannels?: boolean | ChannelCountOutputTypeCountUserOnChannelsArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountUserOnChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnChannelsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    status: string | null
    lastSeen: Date | null
    isVerified: boolean | null
    refreshToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    status: string | null
    lastSeen: Date | null
    isVerified: boolean | null
    refreshToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatar: number
    status: number
    lastSeen: number
    isVerified: number
    refreshToken: number
    resetPasswordToken: number
    resetPasswordExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    status?: true
    lastSeen?: true
    isVerified?: true
    refreshToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    status?: true
    lastSeen?: true
    isVerified?: true
    refreshToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    status?: true
    lastSeen?: true
    isVerified?: true
    refreshToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    avatar: string | null
    status: string | null
    lastSeen: Date | null
    isVerified: boolean
    refreshToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    status?: boolean
    lastSeen?: boolean
    isVerified?: boolean
    refreshToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    ownedWorkspaces?: boolean | User$ownedWorkspacesArgs<ExtArgs>
    InviteSent?: boolean | User$InviteSentArgs<ExtArgs>
    Channels?: boolean | User$ChannelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    status?: boolean
    lastSeen?: boolean
    isVerified?: boolean
    refreshToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    status?: boolean
    lastSeen?: boolean
    isVerified?: boolean
    refreshToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    status?: boolean
    lastSeen?: boolean
    isVerified?: boolean
    refreshToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatar" | "status" | "lastSeen" | "isVerified" | "refreshToken" | "resetPasswordToken" | "resetPasswordExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    ownedWorkspaces?: boolean | User$ownedWorkspacesArgs<ExtArgs>
    InviteSent?: boolean | User$InviteSentArgs<ExtArgs>
    Channels?: boolean | User$ChannelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$UserOnWorkspacePayload<ExtArgs>[]
      ownedWorkspaces: Prisma.$WorkspacePayload<ExtArgs>[]
      InviteSent: Prisma.$InvitePayload<ExtArgs>[]
      Channels: Prisma.$UserOnChannelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      avatar: string | null
      status: string | null
      lastSeen: Date | null
      isVerified: boolean
      refreshToken: string | null
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedWorkspaces<T extends User$ownedWorkspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedWorkspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InviteSent<T extends User$InviteSentArgs<ExtArgs> = {}>(args?: Subset<T, User$InviteSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Channels<T extends User$ChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$ChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    where?: UserOnWorkspaceWhereInput
    orderBy?: UserOnWorkspaceOrderByWithRelationInput | UserOnWorkspaceOrderByWithRelationInput[]
    cursor?: UserOnWorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnWorkspaceScalarFieldEnum | UserOnWorkspaceScalarFieldEnum[]
  }

  /**
   * User.ownedWorkspaces
   */
  export type User$ownedWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * User.InviteSent
   */
  export type User$InviteSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * User.Channels
   */
  export type User$ChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    where?: UserOnChannelsWhereInput
    orderBy?: UserOnChannelsOrderByWithRelationInput | UserOnChannelsOrderByWithRelationInput[]
    cursor?: UserOnChannelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnChannelsScalarFieldEnum | UserOnChannelsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    slug: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    slug: string
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Workspace$membersArgs<ExtArgs>
    Invite?: boolean | Workspace$InviteArgs<ExtArgs>
    Channel?: boolean | Workspace$ChannelArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "slug" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Workspace$membersArgs<ExtArgs>
    Invite?: boolean | Workspace$InviteArgs<ExtArgs>
    Channel?: boolean | Workspace$ChannelArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserOnWorkspacePayload<ExtArgs>[]
      Invite: Prisma.$InvitePayload<ExtArgs>[]
      Channel: Prisma.$ChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      slug: string
      createdAt: Date
      updatedAt: Date
      ownerId: string
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Workspace$membersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invite<T extends Workspace$InviteArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$InviteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Channel<T extends Workspace$ChannelArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$ChannelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly description: FieldRef<"Workspace", 'String'>
    readonly slug: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
    readonly ownerId: FieldRef<"Workspace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.members
   */
  export type Workspace$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    where?: UserOnWorkspaceWhereInput
    orderBy?: UserOnWorkspaceOrderByWithRelationInput | UserOnWorkspaceOrderByWithRelationInput[]
    cursor?: UserOnWorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnWorkspaceScalarFieldEnum | UserOnWorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace.Invite
   */
  export type Workspace$InviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Workspace.Channel
   */
  export type Workspace$ChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model UserOnWorkspace
   */

  export type AggregateUserOnWorkspace = {
    _count: UserOnWorkspaceCountAggregateOutputType | null
    _min: UserOnWorkspaceMinAggregateOutputType | null
    _max: UserOnWorkspaceMaxAggregateOutputType | null
  }

  export type UserOnWorkspaceMinAggregateOutputType = {
    userId: string | null
    workspaceId: string | null
    role: $Enums.WorkspaceRole | null
    joinedAt: Date | null
  }

  export type UserOnWorkspaceMaxAggregateOutputType = {
    userId: string | null
    workspaceId: string | null
    role: $Enums.WorkspaceRole | null
    joinedAt: Date | null
  }

  export type UserOnWorkspaceCountAggregateOutputType = {
    userId: number
    workspaceId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type UserOnWorkspaceMinAggregateInputType = {
    userId?: true
    workspaceId?: true
    role?: true
    joinedAt?: true
  }

  export type UserOnWorkspaceMaxAggregateInputType = {
    userId?: true
    workspaceId?: true
    role?: true
    joinedAt?: true
  }

  export type UserOnWorkspaceCountAggregateInputType = {
    userId?: true
    workspaceId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type UserOnWorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnWorkspace to aggregate.
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnWorkspaces to fetch.
     */
    orderBy?: UserOnWorkspaceOrderByWithRelationInput | UserOnWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnWorkspaces
    **/
    _count?: true | UserOnWorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnWorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnWorkspaceMaxAggregateInputType
  }

  export type GetUserOnWorkspaceAggregateType<T extends UserOnWorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnWorkspace[P]>
      : GetScalarType<T[P], AggregateUserOnWorkspace[P]>
  }




  export type UserOnWorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnWorkspaceWhereInput
    orderBy?: UserOnWorkspaceOrderByWithAggregationInput | UserOnWorkspaceOrderByWithAggregationInput[]
    by: UserOnWorkspaceScalarFieldEnum[] | UserOnWorkspaceScalarFieldEnum
    having?: UserOnWorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnWorkspaceCountAggregateInputType | true
    _min?: UserOnWorkspaceMinAggregateInputType
    _max?: UserOnWorkspaceMaxAggregateInputType
  }

  export type UserOnWorkspaceGroupByOutputType = {
    userId: string
    workspaceId: string
    role: $Enums.WorkspaceRole
    joinedAt: Date
    _count: UserOnWorkspaceCountAggregateOutputType | null
    _min: UserOnWorkspaceMinAggregateOutputType | null
    _max: UserOnWorkspaceMaxAggregateOutputType | null
  }

  type GetUserOnWorkspaceGroupByPayload<T extends UserOnWorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnWorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnWorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnWorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnWorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type UserOnWorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnWorkspace"]>

  export type UserOnWorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnWorkspace"]>

  export type UserOnWorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnWorkspace"]>

  export type UserOnWorkspaceSelectScalar = {
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type UserOnWorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "workspaceId" | "role" | "joinedAt", ExtArgs["result"]["userOnWorkspace"]>
  export type UserOnWorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type UserOnWorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type UserOnWorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $UserOnWorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnWorkspace"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      workspaceId: string
      role: $Enums.WorkspaceRole
      joinedAt: Date
    }, ExtArgs["result"]["userOnWorkspace"]>
    composites: {}
  }

  type UserOnWorkspaceGetPayload<S extends boolean | null | undefined | UserOnWorkspaceDefaultArgs> = $Result.GetResult<Prisma.$UserOnWorkspacePayload, S>

  type UserOnWorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnWorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnWorkspaceCountAggregateInputType | true
    }

  export interface UserOnWorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnWorkspace'], meta: { name: 'UserOnWorkspace' } }
    /**
     * Find zero or one UserOnWorkspace that matches the filter.
     * @param {UserOnWorkspaceFindUniqueArgs} args - Arguments to find a UserOnWorkspace
     * @example
     * // Get one UserOnWorkspace
     * const userOnWorkspace = await prisma.userOnWorkspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnWorkspaceFindUniqueArgs>(args: SelectSubset<T, UserOnWorkspaceFindUniqueArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnWorkspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnWorkspaceFindUniqueOrThrowArgs} args - Arguments to find a UserOnWorkspace
     * @example
     * // Get one UserOnWorkspace
     * const userOnWorkspace = await prisma.userOnWorkspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnWorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnWorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnWorkspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceFindFirstArgs} args - Arguments to find a UserOnWorkspace
     * @example
     * // Get one UserOnWorkspace
     * const userOnWorkspace = await prisma.userOnWorkspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnWorkspaceFindFirstArgs>(args?: SelectSubset<T, UserOnWorkspaceFindFirstArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnWorkspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceFindFirstOrThrowArgs} args - Arguments to find a UserOnWorkspace
     * @example
     * // Get one UserOnWorkspace
     * const userOnWorkspace = await prisma.userOnWorkspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnWorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnWorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnWorkspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnWorkspaces
     * const userOnWorkspaces = await prisma.userOnWorkspace.findMany()
     * 
     * // Get first 10 UserOnWorkspaces
     * const userOnWorkspaces = await prisma.userOnWorkspace.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnWorkspaceWithUserIdOnly = await prisma.userOnWorkspace.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserOnWorkspaceFindManyArgs>(args?: SelectSubset<T, UserOnWorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnWorkspace.
     * @param {UserOnWorkspaceCreateArgs} args - Arguments to create a UserOnWorkspace.
     * @example
     * // Create one UserOnWorkspace
     * const UserOnWorkspace = await prisma.userOnWorkspace.create({
     *   data: {
     *     // ... data to create a UserOnWorkspace
     *   }
     * })
     * 
     */
    create<T extends UserOnWorkspaceCreateArgs>(args: SelectSubset<T, UserOnWorkspaceCreateArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnWorkspaces.
     * @param {UserOnWorkspaceCreateManyArgs} args - Arguments to create many UserOnWorkspaces.
     * @example
     * // Create many UserOnWorkspaces
     * const userOnWorkspace = await prisma.userOnWorkspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnWorkspaceCreateManyArgs>(args?: SelectSubset<T, UserOnWorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnWorkspaces and returns the data saved in the database.
     * @param {UserOnWorkspaceCreateManyAndReturnArgs} args - Arguments to create many UserOnWorkspaces.
     * @example
     * // Create many UserOnWorkspaces
     * const userOnWorkspace = await prisma.userOnWorkspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnWorkspaces and only return the `userId`
     * const userOnWorkspaceWithUserIdOnly = await prisma.userOnWorkspace.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOnWorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOnWorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOnWorkspace.
     * @param {UserOnWorkspaceDeleteArgs} args - Arguments to delete one UserOnWorkspace.
     * @example
     * // Delete one UserOnWorkspace
     * const UserOnWorkspace = await prisma.userOnWorkspace.delete({
     *   where: {
     *     // ... filter to delete one UserOnWorkspace
     *   }
     * })
     * 
     */
    delete<T extends UserOnWorkspaceDeleteArgs>(args: SelectSubset<T, UserOnWorkspaceDeleteArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnWorkspace.
     * @param {UserOnWorkspaceUpdateArgs} args - Arguments to update one UserOnWorkspace.
     * @example
     * // Update one UserOnWorkspace
     * const userOnWorkspace = await prisma.userOnWorkspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnWorkspaceUpdateArgs>(args: SelectSubset<T, UserOnWorkspaceUpdateArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnWorkspaces.
     * @param {UserOnWorkspaceDeleteManyArgs} args - Arguments to filter UserOnWorkspaces to delete.
     * @example
     * // Delete a few UserOnWorkspaces
     * const { count } = await prisma.userOnWorkspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnWorkspaceDeleteManyArgs>(args?: SelectSubset<T, UserOnWorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnWorkspaces
     * const userOnWorkspace = await prisma.userOnWorkspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnWorkspaceUpdateManyArgs>(args: SelectSubset<T, UserOnWorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnWorkspaces and returns the data updated in the database.
     * @param {UserOnWorkspaceUpdateManyAndReturnArgs} args - Arguments to update many UserOnWorkspaces.
     * @example
     * // Update many UserOnWorkspaces
     * const userOnWorkspace = await prisma.userOnWorkspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOnWorkspaces and only return the `userId`
     * const userOnWorkspaceWithUserIdOnly = await prisma.userOnWorkspace.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserOnWorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOnWorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOnWorkspace.
     * @param {UserOnWorkspaceUpsertArgs} args - Arguments to update or create a UserOnWorkspace.
     * @example
     * // Update or create a UserOnWorkspace
     * const userOnWorkspace = await prisma.userOnWorkspace.upsert({
     *   create: {
     *     // ... data to create a UserOnWorkspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnWorkspace we want to update
     *   }
     * })
     */
    upsert<T extends UserOnWorkspaceUpsertArgs>(args: SelectSubset<T, UserOnWorkspaceUpsertArgs<ExtArgs>>): Prisma__UserOnWorkspaceClient<$Result.GetResult<Prisma.$UserOnWorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceCountArgs} args - Arguments to filter UserOnWorkspaces to count.
     * @example
     * // Count the number of UserOnWorkspaces
     * const count = await prisma.userOnWorkspace.count({
     *   where: {
     *     // ... the filter for the UserOnWorkspaces we want to count
     *   }
     * })
    **/
    count<T extends UserOnWorkspaceCountArgs>(
      args?: Subset<T, UserOnWorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnWorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOnWorkspaceAggregateArgs>(args: Subset<T, UserOnWorkspaceAggregateArgs>): Prisma.PrismaPromise<GetUserOnWorkspaceAggregateType<T>>

    /**
     * Group by UserOnWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnWorkspaceGroupByArgs} args - Group by arguments.
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
      T extends UserOnWorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnWorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: UserOnWorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOnWorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnWorkspace model
   */
  readonly fields: UserOnWorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnWorkspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnWorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserOnWorkspace model
   */
  interface UserOnWorkspaceFieldRefs {
    readonly userId: FieldRef<"UserOnWorkspace", 'String'>
    readonly workspaceId: FieldRef<"UserOnWorkspace", 'String'>
    readonly role: FieldRef<"UserOnWorkspace", 'WorkspaceRole'>
    readonly joinedAt: FieldRef<"UserOnWorkspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOnWorkspace findUnique
   */
  export type UserOnWorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which UserOnWorkspace to fetch.
     */
    where: UserOnWorkspaceWhereUniqueInput
  }

  /**
   * UserOnWorkspace findUniqueOrThrow
   */
  export type UserOnWorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which UserOnWorkspace to fetch.
     */
    where: UserOnWorkspaceWhereUniqueInput
  }

  /**
   * UserOnWorkspace findFirst
   */
  export type UserOnWorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which UserOnWorkspace to fetch.
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnWorkspaces to fetch.
     */
    orderBy?: UserOnWorkspaceOrderByWithRelationInput | UserOnWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnWorkspaces.
     */
    cursor?: UserOnWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnWorkspaces.
     */
    distinct?: UserOnWorkspaceScalarFieldEnum | UserOnWorkspaceScalarFieldEnum[]
  }

  /**
   * UserOnWorkspace findFirstOrThrow
   */
  export type UserOnWorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which UserOnWorkspace to fetch.
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnWorkspaces to fetch.
     */
    orderBy?: UserOnWorkspaceOrderByWithRelationInput | UserOnWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnWorkspaces.
     */
    cursor?: UserOnWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnWorkspaces.
     */
    distinct?: UserOnWorkspaceScalarFieldEnum | UserOnWorkspaceScalarFieldEnum[]
  }

  /**
   * UserOnWorkspace findMany
   */
  export type UserOnWorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which UserOnWorkspaces to fetch.
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnWorkspaces to fetch.
     */
    orderBy?: UserOnWorkspaceOrderByWithRelationInput | UserOnWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnWorkspaces.
     */
    cursor?: UserOnWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnWorkspaces.
     */
    skip?: number
    distinct?: UserOnWorkspaceScalarFieldEnum | UserOnWorkspaceScalarFieldEnum[]
  }

  /**
   * UserOnWorkspace create
   */
  export type UserOnWorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnWorkspace.
     */
    data: XOR<UserOnWorkspaceCreateInput, UserOnWorkspaceUncheckedCreateInput>
  }

  /**
   * UserOnWorkspace createMany
   */
  export type UserOnWorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnWorkspaces.
     */
    data: UserOnWorkspaceCreateManyInput | UserOnWorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnWorkspace createManyAndReturn
   */
  export type UserOnWorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many UserOnWorkspaces.
     */
    data: UserOnWorkspaceCreateManyInput | UserOnWorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnWorkspace update
   */
  export type UserOnWorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnWorkspace.
     */
    data: XOR<UserOnWorkspaceUpdateInput, UserOnWorkspaceUncheckedUpdateInput>
    /**
     * Choose, which UserOnWorkspace to update.
     */
    where: UserOnWorkspaceWhereUniqueInput
  }

  /**
   * UserOnWorkspace updateMany
   */
  export type UserOnWorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnWorkspaces.
     */
    data: XOR<UserOnWorkspaceUpdateManyMutationInput, UserOnWorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which UserOnWorkspaces to update
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * Limit how many UserOnWorkspaces to update.
     */
    limit?: number
  }

  /**
   * UserOnWorkspace updateManyAndReturn
   */
  export type UserOnWorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update UserOnWorkspaces.
     */
    data: XOR<UserOnWorkspaceUpdateManyMutationInput, UserOnWorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which UserOnWorkspaces to update
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * Limit how many UserOnWorkspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnWorkspace upsert
   */
  export type UserOnWorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnWorkspace to update in case it exists.
     */
    where: UserOnWorkspaceWhereUniqueInput
    /**
     * In case the UserOnWorkspace found by the `where` argument doesn't exist, create a new UserOnWorkspace with this data.
     */
    create: XOR<UserOnWorkspaceCreateInput, UserOnWorkspaceUncheckedCreateInput>
    /**
     * In case the UserOnWorkspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnWorkspaceUpdateInput, UserOnWorkspaceUncheckedUpdateInput>
  }

  /**
   * UserOnWorkspace delete
   */
  export type UserOnWorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
    /**
     * Filter which UserOnWorkspace to delete.
     */
    where: UserOnWorkspaceWhereUniqueInput
  }

  /**
   * UserOnWorkspace deleteMany
   */
  export type UserOnWorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnWorkspaces to delete
     */
    where?: UserOnWorkspaceWhereInput
    /**
     * Limit how many UserOnWorkspaces to delete.
     */
    limit?: number
  }

  /**
   * UserOnWorkspace without action
   */
  export type UserOnWorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnWorkspace
     */
    select?: UserOnWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnWorkspace
     */
    omit?: UserOnWorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnWorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model Invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    status: $Enums.InviteStatus | null
    role: $Enums.WorkspaceRole | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
    invitedById: string | null
  }

  export type InviteMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    status: $Enums.InviteStatus | null
    role: $Enums.WorkspaceRole | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
    invitedById: string | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    status: number
    role: number
    createdAt: number
    updatedAt: number
    workspaceId: number
    invitedById: number
    _all: number
  }


  export type InviteMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    status?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    invitedById?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    status?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    invitedById?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    status?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    invitedById?: true
    _all?: true
  }

  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invite to aggregate.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type InviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithAggregationInput | InviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    status: $Enums.InviteStatus
    role: $Enums.WorkspaceRole
    createdAt: Date
    updatedAt: Date
    workspaceId: string
    invitedById: string
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type InviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    invitedById?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    invitedById?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    invitedById?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    status?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    invitedById?: boolean
  }

  export type InviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "status" | "role" | "createdAt" | "updatedAt" | "workspaceId" | "invitedById", ExtArgs["result"]["invite"]>
  export type InviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invite"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      invitedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      status: $Enums.InviteStatus
      role: $Enums.WorkspaceRole
      createdAt: Date
      updatedAt: Date
      workspaceId: string
      invitedById: string
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }

  type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = $Result.GetResult<Prisma.$InvitePayload, S>

  type InviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCountAggregateInputType | true
    }

  export interface InviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invite'], meta: { name: 'Invite' } }
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteFindUniqueArgs>(args: SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteFindFirstArgs>(args?: SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteFindManyArgs>(args?: SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
     */
    create<T extends InviteCreateArgs>(args: SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCreateManyArgs>(args?: SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {InviteCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
     */
    delete<T extends InviteDeleteArgs>(args: SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteUpdateArgs>(args: SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteDeleteManyArgs>(args?: SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteUpdateManyArgs>(args: SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {InviteUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InviteUpdateManyAndReturnArgs>(args: SelectSubset<T, InviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     */
    upsert<T extends InviteUpsertArgs>(args: SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
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
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invite model
   */
  readonly fields: InviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invite model
   */
  interface InviteFieldRefs {
    readonly id: FieldRef<"Invite", 'String'>
    readonly email: FieldRef<"Invite", 'String'>
    readonly token: FieldRef<"Invite", 'String'>
    readonly expiresAt: FieldRef<"Invite", 'DateTime'>
    readonly status: FieldRef<"Invite", 'InviteStatus'>
    readonly role: FieldRef<"Invite", 'WorkspaceRole'>
    readonly createdAt: FieldRef<"Invite", 'DateTime'>
    readonly updatedAt: FieldRef<"Invite", 'DateTime'>
    readonly workspaceId: FieldRef<"Invite", 'String'>
    readonly invitedById: FieldRef<"Invite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findUniqueOrThrow
   */
  export type InviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findFirstOrThrow
   */
  export type InviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findMany
   */
  export type InviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite create
   */
  export type InviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Invite.
     */
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }

  /**
   * Invite createMany
   */
  export type InviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invite createManyAndReturn
   */
  export type InviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invite update
   */
  export type InviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Invite.
     */
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
  }

  /**
   * Invite updateManyAndReturn
   */
  export type InviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invite upsert
   */
  export type InviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Invite to update in case it exists.
     */
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     */
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }

  /**
   * Invite delete
   */
  export type InviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter which Invite to delete.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to delete.
     */
    limit?: number
  }

  /**
   * Invite without action
   */
  export type InviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
  }


  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPublic: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isPublic: boolean
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    UserOnChannels?: boolean | Channel$UserOnChannelsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isPublic" | "workspaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    UserOnChannels?: boolean | Channel$UserOnChannelsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      UserOnChannels: Prisma.$UserOnChannelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isPublic: boolean
      workspaceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserOnChannels<T extends Channel$UserOnChannelsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$UserOnChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly description: FieldRef<"Channel", 'String'>
    readonly isPublic: FieldRef<"Channel", 'Boolean'>
    readonly workspaceId: FieldRef<"Channel", 'String'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel updateManyAndReturn
   */
  export type ChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel.UserOnChannels
   */
  export type Channel$UserOnChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    where?: UserOnChannelsWhereInput
    orderBy?: UserOnChannelsOrderByWithRelationInput | UserOnChannelsOrderByWithRelationInput[]
    cursor?: UserOnChannelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnChannelsScalarFieldEnum | UserOnChannelsScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model UserOnChannels
   */

  export type AggregateUserOnChannels = {
    _count: UserOnChannelsCountAggregateOutputType | null
    _min: UserOnChannelsMinAggregateOutputType | null
    _max: UserOnChannelsMaxAggregateOutputType | null
  }

  export type UserOnChannelsMinAggregateOutputType = {
    userId: string | null
    channelId: string | null
    joinedAt: Date | null
  }

  export type UserOnChannelsMaxAggregateOutputType = {
    userId: string | null
    channelId: string | null
    joinedAt: Date | null
  }

  export type UserOnChannelsCountAggregateOutputType = {
    userId: number
    channelId: number
    joinedAt: number
    _all: number
  }


  export type UserOnChannelsMinAggregateInputType = {
    userId?: true
    channelId?: true
    joinedAt?: true
  }

  export type UserOnChannelsMaxAggregateInputType = {
    userId?: true
    channelId?: true
    joinedAt?: true
  }

  export type UserOnChannelsCountAggregateInputType = {
    userId?: true
    channelId?: true
    joinedAt?: true
    _all?: true
  }

  export type UserOnChannelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnChannels to aggregate.
     */
    where?: UserOnChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelsOrderByWithRelationInput | UserOnChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnChannels
    **/
    _count?: true | UserOnChannelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnChannelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnChannelsMaxAggregateInputType
  }

  export type GetUserOnChannelsAggregateType<T extends UserOnChannelsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnChannels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnChannels[P]>
      : GetScalarType<T[P], AggregateUserOnChannels[P]>
  }




  export type UserOnChannelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnChannelsWhereInput
    orderBy?: UserOnChannelsOrderByWithAggregationInput | UserOnChannelsOrderByWithAggregationInput[]
    by: UserOnChannelsScalarFieldEnum[] | UserOnChannelsScalarFieldEnum
    having?: UserOnChannelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnChannelsCountAggregateInputType | true
    _min?: UserOnChannelsMinAggregateInputType
    _max?: UserOnChannelsMaxAggregateInputType
  }

  export type UserOnChannelsGroupByOutputType = {
    userId: string
    channelId: string
    joinedAt: Date
    _count: UserOnChannelsCountAggregateOutputType | null
    _min: UserOnChannelsMinAggregateOutputType | null
    _max: UserOnChannelsMaxAggregateOutputType | null
  }

  type GetUserOnChannelsGroupByPayload<T extends UserOnChannelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnChannelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnChannelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnChannelsGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnChannelsGroupByOutputType[P]>
        }
      >
    >


  export type UserOnChannelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    channelId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnChannels"]>

  export type UserOnChannelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    channelId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnChannels"]>

  export type UserOnChannelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    channelId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnChannels"]>

  export type UserOnChannelsSelectScalar = {
    userId?: boolean
    channelId?: boolean
    joinedAt?: boolean
  }

  export type UserOnChannelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "channelId" | "joinedAt", ExtArgs["result"]["userOnChannels"]>
  export type UserOnChannelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type UserOnChannelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type UserOnChannelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $UserOnChannelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnChannels"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      channelId: string
      joinedAt: Date
    }, ExtArgs["result"]["userOnChannels"]>
    composites: {}
  }

  type UserOnChannelsGetPayload<S extends boolean | null | undefined | UserOnChannelsDefaultArgs> = $Result.GetResult<Prisma.$UserOnChannelsPayload, S>

  type UserOnChannelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnChannelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnChannelsCountAggregateInputType | true
    }

  export interface UserOnChannelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnChannels'], meta: { name: 'UserOnChannels' } }
    /**
     * Find zero or one UserOnChannels that matches the filter.
     * @param {UserOnChannelsFindUniqueArgs} args - Arguments to find a UserOnChannels
     * @example
     * // Get one UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnChannelsFindUniqueArgs>(args: SelectSubset<T, UserOnChannelsFindUniqueArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnChannels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnChannelsFindUniqueOrThrowArgs} args - Arguments to find a UserOnChannels
     * @example
     * // Get one UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnChannelsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnChannelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsFindFirstArgs} args - Arguments to find a UserOnChannels
     * @example
     * // Get one UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnChannelsFindFirstArgs>(args?: SelectSubset<T, UserOnChannelsFindFirstArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnChannels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsFindFirstOrThrowArgs} args - Arguments to find a UserOnChannels
     * @example
     * // Get one UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnChannelsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnChannelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.findMany()
     * 
     * // Get first 10 UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnChannelsWithUserIdOnly = await prisma.userOnChannels.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserOnChannelsFindManyArgs>(args?: SelectSubset<T, UserOnChannelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnChannels.
     * @param {UserOnChannelsCreateArgs} args - Arguments to create a UserOnChannels.
     * @example
     * // Create one UserOnChannels
     * const UserOnChannels = await prisma.userOnChannels.create({
     *   data: {
     *     // ... data to create a UserOnChannels
     *   }
     * })
     * 
     */
    create<T extends UserOnChannelsCreateArgs>(args: SelectSubset<T, UserOnChannelsCreateArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnChannels.
     * @param {UserOnChannelsCreateManyArgs} args - Arguments to create many UserOnChannels.
     * @example
     * // Create many UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnChannelsCreateManyArgs>(args?: SelectSubset<T, UserOnChannelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnChannels and returns the data saved in the database.
     * @param {UserOnChannelsCreateManyAndReturnArgs} args - Arguments to create many UserOnChannels.
     * @example
     * // Create many UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnChannels and only return the `userId`
     * const userOnChannelsWithUserIdOnly = await prisma.userOnChannels.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOnChannelsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOnChannelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOnChannels.
     * @param {UserOnChannelsDeleteArgs} args - Arguments to delete one UserOnChannels.
     * @example
     * // Delete one UserOnChannels
     * const UserOnChannels = await prisma.userOnChannels.delete({
     *   where: {
     *     // ... filter to delete one UserOnChannels
     *   }
     * })
     * 
     */
    delete<T extends UserOnChannelsDeleteArgs>(args: SelectSubset<T, UserOnChannelsDeleteArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnChannels.
     * @param {UserOnChannelsUpdateArgs} args - Arguments to update one UserOnChannels.
     * @example
     * // Update one UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnChannelsUpdateArgs>(args: SelectSubset<T, UserOnChannelsUpdateArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnChannels.
     * @param {UserOnChannelsDeleteManyArgs} args - Arguments to filter UserOnChannels to delete.
     * @example
     * // Delete a few UserOnChannels
     * const { count } = await prisma.userOnChannels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnChannelsDeleteManyArgs>(args?: SelectSubset<T, UserOnChannelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnChannelsUpdateManyArgs>(args: SelectSubset<T, UserOnChannelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnChannels and returns the data updated in the database.
     * @param {UserOnChannelsUpdateManyAndReturnArgs} args - Arguments to update many UserOnChannels.
     * @example
     * // Update many UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOnChannels and only return the `userId`
     * const userOnChannelsWithUserIdOnly = await prisma.userOnChannels.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserOnChannelsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOnChannelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOnChannels.
     * @param {UserOnChannelsUpsertArgs} args - Arguments to update or create a UserOnChannels.
     * @example
     * // Update or create a UserOnChannels
     * const userOnChannels = await prisma.userOnChannels.upsert({
     *   create: {
     *     // ... data to create a UserOnChannels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnChannels we want to update
     *   }
     * })
     */
    upsert<T extends UserOnChannelsUpsertArgs>(args: SelectSubset<T, UserOnChannelsUpsertArgs<ExtArgs>>): Prisma__UserOnChannelsClient<$Result.GetResult<Prisma.$UserOnChannelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsCountArgs} args - Arguments to filter UserOnChannels to count.
     * @example
     * // Count the number of UserOnChannels
     * const count = await prisma.userOnChannels.count({
     *   where: {
     *     // ... the filter for the UserOnChannels we want to count
     *   }
     * })
    **/
    count<T extends UserOnChannelsCountArgs>(
      args?: Subset<T, UserOnChannelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnChannelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOnChannelsAggregateArgs>(args: Subset<T, UserOnChannelsAggregateArgs>): Prisma.PrismaPromise<GetUserOnChannelsAggregateType<T>>

    /**
     * Group by UserOnChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelsGroupByArgs} args - Group by arguments.
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
      T extends UserOnChannelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnChannelsGroupByArgs['orderBy'] }
        : { orderBy?: UserOnChannelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOnChannelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnChannelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnChannels model
   */
  readonly fields: UserOnChannelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnChannels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnChannelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserOnChannels model
   */
  interface UserOnChannelsFieldRefs {
    readonly userId: FieldRef<"UserOnChannels", 'String'>
    readonly channelId: FieldRef<"UserOnChannels", 'String'>
    readonly joinedAt: FieldRef<"UserOnChannels", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOnChannels findUnique
   */
  export type UserOnChannelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannels to fetch.
     */
    where: UserOnChannelsWhereUniqueInput
  }

  /**
   * UserOnChannels findUniqueOrThrow
   */
  export type UserOnChannelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannels to fetch.
     */
    where: UserOnChannelsWhereUniqueInput
  }

  /**
   * UserOnChannels findFirst
   */
  export type UserOnChannelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannels to fetch.
     */
    where?: UserOnChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelsOrderByWithRelationInput | UserOnChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnChannels.
     */
    cursor?: UserOnChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnChannels.
     */
    distinct?: UserOnChannelsScalarFieldEnum | UserOnChannelsScalarFieldEnum[]
  }

  /**
   * UserOnChannels findFirstOrThrow
   */
  export type UserOnChannelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannels to fetch.
     */
    where?: UserOnChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelsOrderByWithRelationInput | UserOnChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnChannels.
     */
    cursor?: UserOnChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnChannels.
     */
    distinct?: UserOnChannelsScalarFieldEnum | UserOnChannelsScalarFieldEnum[]
  }

  /**
   * UserOnChannels findMany
   */
  export type UserOnChannelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannels to fetch.
     */
    where?: UserOnChannelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelsOrderByWithRelationInput | UserOnChannelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnChannels.
     */
    cursor?: UserOnChannelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnChannels.
     */
    skip?: number
    distinct?: UserOnChannelsScalarFieldEnum | UserOnChannelsScalarFieldEnum[]
  }

  /**
   * UserOnChannels create
   */
  export type UserOnChannelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnChannels.
     */
    data: XOR<UserOnChannelsCreateInput, UserOnChannelsUncheckedCreateInput>
  }

  /**
   * UserOnChannels createMany
   */
  export type UserOnChannelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnChannels.
     */
    data: UserOnChannelsCreateManyInput | UserOnChannelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnChannels createManyAndReturn
   */
  export type UserOnChannelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * The data used to create many UserOnChannels.
     */
    data: UserOnChannelsCreateManyInput | UserOnChannelsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnChannels update
   */
  export type UserOnChannelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnChannels.
     */
    data: XOR<UserOnChannelsUpdateInput, UserOnChannelsUncheckedUpdateInput>
    /**
     * Choose, which UserOnChannels to update.
     */
    where: UserOnChannelsWhereUniqueInput
  }

  /**
   * UserOnChannels updateMany
   */
  export type UserOnChannelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnChannels.
     */
    data: XOR<UserOnChannelsUpdateManyMutationInput, UserOnChannelsUncheckedUpdateManyInput>
    /**
     * Filter which UserOnChannels to update
     */
    where?: UserOnChannelsWhereInput
    /**
     * Limit how many UserOnChannels to update.
     */
    limit?: number
  }

  /**
   * UserOnChannels updateManyAndReturn
   */
  export type UserOnChannelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * The data used to update UserOnChannels.
     */
    data: XOR<UserOnChannelsUpdateManyMutationInput, UserOnChannelsUncheckedUpdateManyInput>
    /**
     * Filter which UserOnChannels to update
     */
    where?: UserOnChannelsWhereInput
    /**
     * Limit how many UserOnChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnChannels upsert
   */
  export type UserOnChannelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnChannels to update in case it exists.
     */
    where: UserOnChannelsWhereUniqueInput
    /**
     * In case the UserOnChannels found by the `where` argument doesn't exist, create a new UserOnChannels with this data.
     */
    create: XOR<UserOnChannelsCreateInput, UserOnChannelsUncheckedCreateInput>
    /**
     * In case the UserOnChannels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnChannelsUpdateInput, UserOnChannelsUncheckedUpdateInput>
  }

  /**
   * UserOnChannels delete
   */
  export type UserOnChannelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
    /**
     * Filter which UserOnChannels to delete.
     */
    where: UserOnChannelsWhereUniqueInput
  }

  /**
   * UserOnChannels deleteMany
   */
  export type UserOnChannelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnChannels to delete
     */
    where?: UserOnChannelsWhereInput
    /**
     * Limit how many UserOnChannels to delete.
     */
    limit?: number
  }

  /**
   * UserOnChannels without action
   */
  export type UserOnChannelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannels
     */
    select?: UserOnChannelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannels
     */
    omit?: UserOnChannelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    status: 'status',
    lastSeen: 'lastSeen',
    isVerified: 'isVerified',
    refreshToken: 'refreshToken',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const UserOnWorkspaceScalarFieldEnum: {
    userId: 'userId',
    workspaceId: 'workspaceId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type UserOnWorkspaceScalarFieldEnum = (typeof UserOnWorkspaceScalarFieldEnum)[keyof typeof UserOnWorkspaceScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    status: 'status',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workspaceId: 'workspaceId',
    invitedById: 'invitedById'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPublic: 'isPublic',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const UserOnChannelsScalarFieldEnum: {
    userId: 'userId',
    channelId: 'channelId',
    joinedAt: 'joinedAt'
  };

  export type UserOnChannelsScalarFieldEnum = (typeof UserOnChannelsScalarFieldEnum)[keyof typeof UserOnChannelsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WorkspaceRole'
   */
  export type EnumWorkspaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkspaceRole'>
    


  /**
   * Reference to a field of type 'WorkspaceRole[]'
   */
  export type ListEnumWorkspaceRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkspaceRole[]'>
    


  /**
   * Reference to a field of type 'InviteStatus'
   */
  export type EnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus'>
    


  /**
   * Reference to a field of type 'InviteStatus[]'
   */
  export type ListEnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: UserOnWorkspaceListRelationFilter
    ownedWorkspaces?: WorkspaceListRelationFilter
    InviteSent?: InviteListRelationFilter
    Channels?: UserOnChannelsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaces?: UserOnWorkspaceOrderByRelationAggregateInput
    ownedWorkspaces?: WorkspaceOrderByRelationAggregateInput
    InviteSent?: InviteOrderByRelationAggregateInput
    Channels?: UserOnChannelsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: UserOnWorkspaceListRelationFilter
    ownedWorkspaces?: WorkspaceListRelationFilter
    InviteSent?: InviteListRelationFilter
    Channels?: UserOnChannelsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    slug?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    ownerId?: StringFilter<"Workspace"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserOnWorkspaceListRelationFilter
    Invite?: InviteListRelationFilter
    Channel?: ChannelListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: UserOnWorkspaceOrderByRelationAggregateInput
    Invite?: InviteOrderByRelationAggregateInput
    Channel?: ChannelOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    ownerId?: StringFilter<"Workspace"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserOnWorkspaceListRelationFilter
    Invite?: InviteListRelationFilter
    Channel?: ChannelListRelationFilter
  }, "id" | "slug">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    description?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    slug?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Workspace"> | string
  }

  export type UserOnWorkspaceWhereInput = {
    AND?: UserOnWorkspaceWhereInput | UserOnWorkspaceWhereInput[]
    OR?: UserOnWorkspaceWhereInput[]
    NOT?: UserOnWorkspaceWhereInput | UserOnWorkspaceWhereInput[]
    userId?: StringFilter<"UserOnWorkspace"> | string
    workspaceId?: StringFilter<"UserOnWorkspace"> | string
    role?: EnumWorkspaceRoleFilter<"UserOnWorkspace"> | $Enums.WorkspaceRole
    joinedAt?: DateTimeFilter<"UserOnWorkspace"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type UserOnWorkspaceOrderByWithRelationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type UserOnWorkspaceWhereUniqueInput = Prisma.AtLeast<{
    userId_workspaceId?: UserOnWorkspaceUserIdWorkspaceIdCompoundUniqueInput
    AND?: UserOnWorkspaceWhereInput | UserOnWorkspaceWhereInput[]
    OR?: UserOnWorkspaceWhereInput[]
    NOT?: UserOnWorkspaceWhereInput | UserOnWorkspaceWhereInput[]
    userId?: StringFilter<"UserOnWorkspace"> | string
    workspaceId?: StringFilter<"UserOnWorkspace"> | string
    role?: EnumWorkspaceRoleFilter<"UserOnWorkspace"> | $Enums.WorkspaceRole
    joinedAt?: DateTimeFilter<"UserOnWorkspace"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "userId_workspaceId">

  export type UserOnWorkspaceOrderByWithAggregationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: UserOnWorkspaceCountOrderByAggregateInput
    _max?: UserOnWorkspaceMaxOrderByAggregateInput
    _min?: UserOnWorkspaceMinOrderByAggregateInput
  }

  export type UserOnWorkspaceScalarWhereWithAggregatesInput = {
    AND?: UserOnWorkspaceScalarWhereWithAggregatesInput | UserOnWorkspaceScalarWhereWithAggregatesInput[]
    OR?: UserOnWorkspaceScalarWhereWithAggregatesInput[]
    NOT?: UserOnWorkspaceScalarWhereWithAggregatesInput | UserOnWorkspaceScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserOnWorkspace"> | string
    workspaceId?: StringWithAggregatesFilter<"UserOnWorkspace"> | string
    role?: EnumWorkspaceRoleWithAggregatesFilter<"UserOnWorkspace"> | $Enums.WorkspaceRole
    joinedAt?: DateTimeWithAggregatesFilter<"UserOnWorkspace"> | Date | string
  }

  export type InviteWhereInput = {
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    id?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    token?: StringFilter<"Invite"> | string
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    status?: EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFilter<"Invite"> | $Enums.WorkspaceRole
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    workspaceId?: StringFilter<"Invite"> | string
    invitedById?: StringFilter<"Invite"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    invitedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InviteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    invitedById?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    invitedBy?: UserOrderByWithRelationInput
  }

  export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    email?: StringFilter<"Invite"> | string
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    status?: EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFilter<"Invite"> | $Enums.WorkspaceRole
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    workspaceId?: StringFilter<"Invite"> | string
    invitedById?: StringFilter<"Invite"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    invitedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type InviteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    invitedById?: SortOrder
    _count?: InviteCountOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    OR?: InviteScalarWhereWithAggregatesInput[]
    NOT?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invite"> | string
    email?: StringWithAggregatesFilter<"Invite"> | string
    token?: StringWithAggregatesFilter<"Invite"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    status?: EnumInviteStatusWithAggregatesFilter<"Invite"> | $Enums.InviteStatus
    role?: EnumWorkspaceRoleWithAggregatesFilter<"Invite"> | $Enums.WorkspaceRole
    createdAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    workspaceId?: StringWithAggregatesFilter<"Invite"> | string
    invitedById?: StringWithAggregatesFilter<"Invite"> | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    description?: StringNullableFilter<"Channel"> | string | null
    isPublic?: BoolFilter<"Channel"> | boolean
    workspaceId?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    UserOnChannels?: UserOnChannelsListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    UserOnChannels?: UserOnChannelsOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    name?: StringFilter<"Channel"> | string
    description?: StringNullableFilter<"Channel"> | string | null
    isPublic?: BoolFilter<"Channel"> | boolean
    workspaceId?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    UserOnChannels?: UserOnChannelsListRelationFilter
  }, "id">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    name?: StringWithAggregatesFilter<"Channel"> | string
    description?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Channel"> | boolean
    workspaceId?: StringWithAggregatesFilter<"Channel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type UserOnChannelsWhereInput = {
    AND?: UserOnChannelsWhereInput | UserOnChannelsWhereInput[]
    OR?: UserOnChannelsWhereInput[]
    NOT?: UserOnChannelsWhereInput | UserOnChannelsWhereInput[]
    userId?: StringFilter<"UserOnChannels"> | string
    channelId?: StringFilter<"UserOnChannels"> | string
    joinedAt?: DateTimeFilter<"UserOnChannels"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type UserOnChannelsOrderByWithRelationInput = {
    userId?: SortOrder
    channelId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type UserOnChannelsWhereUniqueInput = Prisma.AtLeast<{
    userId_channelId?: UserOnChannelsUserIdChannelIdCompoundUniqueInput
    AND?: UserOnChannelsWhereInput | UserOnChannelsWhereInput[]
    OR?: UserOnChannelsWhereInput[]
    NOT?: UserOnChannelsWhereInput | UserOnChannelsWhereInput[]
    userId?: StringFilter<"UserOnChannels"> | string
    channelId?: StringFilter<"UserOnChannels"> | string
    joinedAt?: DateTimeFilter<"UserOnChannels"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "userId_channelId">

  export type UserOnChannelsOrderByWithAggregationInput = {
    userId?: SortOrder
    channelId?: SortOrder
    joinedAt?: SortOrder
    _count?: UserOnChannelsCountOrderByAggregateInput
    _max?: UserOnChannelsMaxOrderByAggregateInput
    _min?: UserOnChannelsMinOrderByAggregateInput
  }

  export type UserOnChannelsScalarWhereWithAggregatesInput = {
    AND?: UserOnChannelsScalarWhereWithAggregatesInput | UserOnChannelsScalarWhereWithAggregatesInput[]
    OR?: UserOnChannelsScalarWhereWithAggregatesInput[]
    NOT?: UserOnChannelsScalarWhereWithAggregatesInput | UserOnChannelsScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserOnChannels"> | string
    channelId?: StringWithAggregatesFilter<"UserOnChannels"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"UserOnChannels"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnWorkspaceCreateInput = {
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
  }

  export type UserOnWorkspaceUncheckedCreateInput = {
    userId: string
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
  }

  export type UserOnWorkspaceUpdateInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserOnWorkspaceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceCreateManyInput = {
    userId: string
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
  }

  export type UserOnWorkspaceUpdateManyMutationInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutInviteInput
    invitedBy: UserCreateNestedOneWithoutInviteSentInput
  }

  export type InviteUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    invitedById: string
  }

  export type InviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutInviteNestedInput
    invitedBy?: UserUpdateOneRequiredWithoutInviteSentNestedInput
  }

  export type InviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
  }

  export type InviteCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    invitedById: string
  }

  export type InviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
    UserOnChannels?: UserOnChannelsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserOnChannels?: UserOnChannelsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
    UserOnChannels?: UserOnChannelsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserOnChannels?: UserOnChannelsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelsCreateInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChannelsInput
    channel: ChannelCreateNestedOneWithoutUserOnChannelsInput
  }

  export type UserOnChannelsUncheckedCreateInput = {
    userId: string
    channelId: string
    joinedAt?: Date | string
  }

  export type UserOnChannelsUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutUserOnChannelsNestedInput
  }

  export type UserOnChannelsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelsCreateManyInput = {
    userId: string
    channelId: string
    joinedAt?: Date | string
  }

  export type UserOnChannelsUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserOnWorkspaceListRelationFilter = {
    every?: UserOnWorkspaceWhereInput
    some?: UserOnWorkspaceWhereInput
    none?: UserOnWorkspaceWhereInput
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type UserOnChannelsListRelationFilter = {
    every?: UserOnChannelsWhereInput
    some?: UserOnChannelsWhereInput
    none?: UserOnChannelsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOnWorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnChannelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    lastSeen?: SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumWorkspaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceRole | EnumWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceRoleFilter<$PrismaModel> | $Enums.WorkspaceRole
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type UserOnWorkspaceUserIdWorkspaceIdCompoundUniqueInput = {
    userId: string
    workspaceId: string
  }

  export type UserOnWorkspaceCountOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserOnWorkspaceMaxOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserOnWorkspaceMinOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumWorkspaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceRole | EnumWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.WorkspaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkspaceRoleFilter<$PrismaModel>
    _max?: NestedEnumWorkspaceRoleFilter<$PrismaModel>
  }

  export type EnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type InviteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    invitedById?: SortOrder
  }

  export type InviteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    invitedById?: SortOrder
  }

  export type InviteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    invitedById?: SortOrder
  }

  export type EnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type UserOnChannelsUserIdChannelIdCompoundUniqueInput = {
    userId: string
    channelId: string
  }

  export type UserOnChannelsCountOrderByAggregateInput = {
    userId?: SortOrder
    channelId?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserOnChannelsMaxOrderByAggregateInput = {
    userId?: SortOrder
    channelId?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserOnChannelsMinOrderByAggregateInput = {
    userId?: SortOrder
    channelId?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserOnWorkspaceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutUserInput, UserOnWorkspaceUncheckedCreateWithoutUserInput> | UserOnWorkspaceCreateWithoutUserInput[] | UserOnWorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutUserInput | UserOnWorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: UserOnWorkspaceCreateManyUserInputEnvelope
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
  }

  export type WorkspaceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput> | InviteCreateWithoutInvitedByInput[] | InviteUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInvitedByInput | InviteCreateOrConnectWithoutInvitedByInput[]
    createMany?: InviteCreateManyInvitedByInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserOnChannelsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnChannelsCreateWithoutUserInput, UserOnChannelsUncheckedCreateWithoutUserInput> | UserOnChannelsCreateWithoutUserInput[] | UserOnChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutUserInput | UserOnChannelsCreateOrConnectWithoutUserInput[]
    createMany?: UserOnChannelsCreateManyUserInputEnvelope
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
  }

  export type UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutUserInput, UserOnWorkspaceUncheckedCreateWithoutUserInput> | UserOnWorkspaceCreateWithoutUserInput[] | UserOnWorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutUserInput | UserOnWorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: UserOnWorkspaceCreateManyUserInputEnvelope
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput> | InviteCreateWithoutInvitedByInput[] | InviteUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInvitedByInput | InviteCreateOrConnectWithoutInvitedByInput[]
    createMany?: InviteCreateManyInvitedByInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserOnChannelsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnChannelsCreateWithoutUserInput, UserOnChannelsUncheckedCreateWithoutUserInput> | UserOnChannelsCreateWithoutUserInput[] | UserOnChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutUserInput | UserOnChannelsCreateOrConnectWithoutUserInput[]
    createMany?: UserOnChannelsCreateManyUserInputEnvelope
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserOnWorkspaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutUserInput, UserOnWorkspaceUncheckedCreateWithoutUserInput> | UserOnWorkspaceCreateWithoutUserInput[] | UserOnWorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutUserInput | UserOnWorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: UserOnWorkspaceUpsertWithWhereUniqueWithoutUserInput | UserOnWorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnWorkspaceCreateManyUserInputEnvelope
    set?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    disconnect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    delete?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    update?: UserOnWorkspaceUpdateWithWhereUniqueWithoutUserInput | UserOnWorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnWorkspaceUpdateManyWithWhereWithoutUserInput | UserOnWorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnWorkspaceScalarWhereInput | UserOnWorkspaceScalarWhereInput[]
  }

  export type WorkspaceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput> | InviteCreateWithoutInvitedByInput[] | InviteUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInvitedByInput | InviteCreateOrConnectWithoutInvitedByInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInvitedByInput | InviteUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InviteCreateManyInvitedByInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInvitedByInput | InviteUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInvitedByInput | InviteUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserOnChannelsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnChannelsCreateWithoutUserInput, UserOnChannelsUncheckedCreateWithoutUserInput> | UserOnChannelsCreateWithoutUserInput[] | UserOnChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutUserInput | UserOnChannelsCreateOrConnectWithoutUserInput[]
    upsert?: UserOnChannelsUpsertWithWhereUniqueWithoutUserInput | UserOnChannelsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnChannelsCreateManyUserInputEnvelope
    set?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    disconnect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    delete?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    update?: UserOnChannelsUpdateWithWhereUniqueWithoutUserInput | UserOnChannelsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnChannelsUpdateManyWithWhereWithoutUserInput | UserOnChannelsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnChannelsScalarWhereInput | UserOnChannelsScalarWhereInput[]
  }

  export type UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutUserInput, UserOnWorkspaceUncheckedCreateWithoutUserInput> | UserOnWorkspaceCreateWithoutUserInput[] | UserOnWorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutUserInput | UserOnWorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: UserOnWorkspaceUpsertWithWhereUniqueWithoutUserInput | UserOnWorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnWorkspaceCreateManyUserInputEnvelope
    set?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    disconnect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    delete?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    update?: UserOnWorkspaceUpdateWithWhereUniqueWithoutUserInput | UserOnWorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnWorkspaceUpdateManyWithWhereWithoutUserInput | UserOnWorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnWorkspaceScalarWhereInput | UserOnWorkspaceScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput> | InviteCreateWithoutInvitedByInput[] | InviteUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInvitedByInput | InviteCreateOrConnectWithoutInvitedByInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInvitedByInput | InviteUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InviteCreateManyInvitedByInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInvitedByInput | InviteUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInvitedByInput | InviteUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserOnChannelsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnChannelsCreateWithoutUserInput, UserOnChannelsUncheckedCreateWithoutUserInput> | UserOnChannelsCreateWithoutUserInput[] | UserOnChannelsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutUserInput | UserOnChannelsCreateOrConnectWithoutUserInput[]
    upsert?: UserOnChannelsUpsertWithWhereUniqueWithoutUserInput | UserOnChannelsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnChannelsCreateManyUserInputEnvelope
    set?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    disconnect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    delete?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    update?: UserOnChannelsUpdateWithWhereUniqueWithoutUserInput | UserOnChannelsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnChannelsUpdateManyWithWhereWithoutUserInput | UserOnChannelsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnChannelsScalarWhereInput | UserOnChannelsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedWorkspacesInput = {
    create?: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutWorkspaceInput, UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput> | UserOnWorkspaceCreateWithoutWorkspaceInput[] | UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput | UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserOnWorkspaceCreateManyWorkspaceInputEnvelope
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<InviteCreateWithoutWorkspaceInput, InviteUncheckedCreateWithoutWorkspaceInput> | InviteCreateWithoutWorkspaceInput[] | InviteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutWorkspaceInput | InviteCreateOrConnectWithoutWorkspaceInput[]
    createMany?: InviteCreateManyWorkspaceInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type ChannelCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput> | ChannelCreateWithoutWorkspaceInput[] | ChannelUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutWorkspaceInput | ChannelCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutWorkspaceInput, UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput> | UserOnWorkspaceCreateWithoutWorkspaceInput[] | UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput | UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserOnWorkspaceCreateManyWorkspaceInputEnvelope
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<InviteCreateWithoutWorkspaceInput, InviteUncheckedCreateWithoutWorkspaceInput> | InviteCreateWithoutWorkspaceInput[] | InviteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutWorkspaceInput | InviteCreateOrConnectWithoutWorkspaceInput[]
    createMany?: InviteCreateManyWorkspaceInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput> | ChannelCreateWithoutWorkspaceInput[] | ChannelUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutWorkspaceInput | ChannelCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedWorkspacesInput
    upsert?: UserUpsertWithoutOwnedWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedWorkspacesInput, UserUpdateWithoutOwnedWorkspacesInput>, UserUncheckedUpdateWithoutOwnedWorkspacesInput>
  }

  export type UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutWorkspaceInput, UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput> | UserOnWorkspaceCreateWithoutWorkspaceInput[] | UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput | UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserOnWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput | UserOnWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserOnWorkspaceCreateManyWorkspaceInputEnvelope
    set?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    disconnect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    delete?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    update?: UserOnWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput | UserOnWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserOnWorkspaceUpdateManyWithWhereWithoutWorkspaceInput | UserOnWorkspaceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserOnWorkspaceScalarWhereInput | UserOnWorkspaceScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<InviteCreateWithoutWorkspaceInput, InviteUncheckedCreateWithoutWorkspaceInput> | InviteCreateWithoutWorkspaceInput[] | InviteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutWorkspaceInput | InviteCreateOrConnectWithoutWorkspaceInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput | InviteUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: InviteCreateManyWorkspaceInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput | InviteUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutWorkspaceInput | InviteUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type ChannelUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput> | ChannelCreateWithoutWorkspaceInput[] | ChannelUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutWorkspaceInput | ChannelCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutWorkspaceInput | ChannelUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutWorkspaceInput | ChannelUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutWorkspaceInput | ChannelUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserOnWorkspaceCreateWithoutWorkspaceInput, UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput> | UserOnWorkspaceCreateWithoutWorkspaceInput[] | UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput | UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserOnWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput | UserOnWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserOnWorkspaceCreateManyWorkspaceInputEnvelope
    set?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    disconnect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    delete?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    connect?: UserOnWorkspaceWhereUniqueInput | UserOnWorkspaceWhereUniqueInput[]
    update?: UserOnWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput | UserOnWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserOnWorkspaceUpdateManyWithWhereWithoutWorkspaceInput | UserOnWorkspaceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserOnWorkspaceScalarWhereInput | UserOnWorkspaceScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<InviteCreateWithoutWorkspaceInput, InviteUncheckedCreateWithoutWorkspaceInput> | InviteCreateWithoutWorkspaceInput[] | InviteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutWorkspaceInput | InviteCreateOrConnectWithoutWorkspaceInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutWorkspaceInput | InviteUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: InviteCreateManyWorkspaceInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutWorkspaceInput | InviteUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutWorkspaceInput | InviteUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput> | ChannelCreateWithoutWorkspaceInput[] | ChannelUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutWorkspaceInput | ChannelCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutWorkspaceInput | ChannelUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutWorkspaceInput | ChannelUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutWorkspaceInput | ChannelUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutMembersInput = {
    create?: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMembersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type EnumWorkspaceRoleFieldUpdateOperationsInput = {
    set?: $Enums.WorkspaceRole
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMembersInput
    upsert?: WorkspaceUpsertWithoutMembersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutMembersInput, WorkspaceUpdateWithoutMembersInput>, WorkspaceUncheckedUpdateWithoutMembersInput>
  }

  export type WorkspaceCreateNestedOneWithoutInviteInput = {
    create?: XOR<WorkspaceCreateWithoutInviteInput, WorkspaceUncheckedCreateWithoutInviteInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutInviteInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInviteSentInput = {
    create?: XOR<UserCreateWithoutInviteSentInput, UserUncheckedCreateWithoutInviteSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteSentInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus
  }

  export type WorkspaceUpdateOneRequiredWithoutInviteNestedInput = {
    create?: XOR<WorkspaceCreateWithoutInviteInput, WorkspaceUncheckedCreateWithoutInviteInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutInviteInput
    upsert?: WorkspaceUpsertWithoutInviteInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutInviteInput, WorkspaceUpdateWithoutInviteInput>, WorkspaceUncheckedUpdateWithoutInviteInput>
  }

  export type UserUpdateOneRequiredWithoutInviteSentNestedInput = {
    create?: XOR<UserCreateWithoutInviteSentInput, UserUncheckedCreateWithoutInviteSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteSentInput
    upsert?: UserUpsertWithoutInviteSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInviteSentInput, UserUpdateWithoutInviteSentInput>, UserUncheckedUpdateWithoutInviteSentInput>
  }

  export type WorkspaceCreateNestedOneWithoutChannelInput = {
    create?: XOR<WorkspaceCreateWithoutChannelInput, WorkspaceUncheckedCreateWithoutChannelInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutChannelInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserOnChannelsCreateNestedManyWithoutChannelInput = {
    create?: XOR<UserOnChannelsCreateWithoutChannelInput, UserOnChannelsUncheckedCreateWithoutChannelInput> | UserOnChannelsCreateWithoutChannelInput[] | UserOnChannelsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutChannelInput | UserOnChannelsCreateOrConnectWithoutChannelInput[]
    createMany?: UserOnChannelsCreateManyChannelInputEnvelope
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
  }

  export type UserOnChannelsUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<UserOnChannelsCreateWithoutChannelInput, UserOnChannelsUncheckedCreateWithoutChannelInput> | UserOnChannelsCreateWithoutChannelInput[] | UserOnChannelsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutChannelInput | UserOnChannelsCreateOrConnectWithoutChannelInput[]
    createMany?: UserOnChannelsCreateManyChannelInputEnvelope
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutChannelNestedInput = {
    create?: XOR<WorkspaceCreateWithoutChannelInput, WorkspaceUncheckedCreateWithoutChannelInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutChannelInput
    upsert?: WorkspaceUpsertWithoutChannelInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutChannelInput, WorkspaceUpdateWithoutChannelInput>, WorkspaceUncheckedUpdateWithoutChannelInput>
  }

  export type UserOnChannelsUpdateManyWithoutChannelNestedInput = {
    create?: XOR<UserOnChannelsCreateWithoutChannelInput, UserOnChannelsUncheckedCreateWithoutChannelInput> | UserOnChannelsCreateWithoutChannelInput[] | UserOnChannelsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutChannelInput | UserOnChannelsCreateOrConnectWithoutChannelInput[]
    upsert?: UserOnChannelsUpsertWithWhereUniqueWithoutChannelInput | UserOnChannelsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: UserOnChannelsCreateManyChannelInputEnvelope
    set?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    disconnect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    delete?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    update?: UserOnChannelsUpdateWithWhereUniqueWithoutChannelInput | UserOnChannelsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: UserOnChannelsUpdateManyWithWhereWithoutChannelInput | UserOnChannelsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: UserOnChannelsScalarWhereInput | UserOnChannelsScalarWhereInput[]
  }

  export type UserOnChannelsUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<UserOnChannelsCreateWithoutChannelInput, UserOnChannelsUncheckedCreateWithoutChannelInput> | UserOnChannelsCreateWithoutChannelInput[] | UserOnChannelsUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelsCreateOrConnectWithoutChannelInput | UserOnChannelsCreateOrConnectWithoutChannelInput[]
    upsert?: UserOnChannelsUpsertWithWhereUniqueWithoutChannelInput | UserOnChannelsUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: UserOnChannelsCreateManyChannelInputEnvelope
    set?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    disconnect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    delete?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    connect?: UserOnChannelsWhereUniqueInput | UserOnChannelsWhereUniqueInput[]
    update?: UserOnChannelsUpdateWithWhereUniqueWithoutChannelInput | UserOnChannelsUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: UserOnChannelsUpdateManyWithWhereWithoutChannelInput | UserOnChannelsUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: UserOnChannelsScalarWhereInput | UserOnChannelsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChannelsInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutUserOnChannelsInput = {
    create?: XOR<ChannelCreateWithoutUserOnChannelsInput, ChannelUncheckedCreateWithoutUserOnChannelsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutUserOnChannelsInput
    connect?: ChannelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    upsert?: UserUpsertWithoutChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelsInput, UserUpdateWithoutChannelsInput>, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type ChannelUpdateOneRequiredWithoutUserOnChannelsNestedInput = {
    create?: XOR<ChannelCreateWithoutUserOnChannelsInput, ChannelUncheckedCreateWithoutUserOnChannelsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutUserOnChannelsInput
    upsert?: ChannelUpsertWithoutUserOnChannelsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutUserOnChannelsInput, ChannelUpdateWithoutUserOnChannelsInput>, ChannelUncheckedUpdateWithoutUserOnChannelsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumWorkspaceRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceRole | EnumWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceRoleFilter<$PrismaModel> | $Enums.WorkspaceRole
  }

  export type NestedEnumWorkspaceRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkspaceRole | EnumWorkspaceRoleFieldRefInput<$PrismaModel>
    in?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkspaceRole[] | ListEnumWorkspaceRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkspaceRoleWithAggregatesFilter<$PrismaModel> | $Enums.WorkspaceRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkspaceRoleFilter<$PrismaModel>
    _max?: NestedEnumWorkspaceRoleFilter<$PrismaModel>
  }

  export type NestedEnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }

  export type NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStatus[] | ListEnumInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }

  export type UserOnWorkspaceCreateWithoutUserInput = {
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
  }

  export type UserOnWorkspaceUncheckedCreateWithoutUserInput = {
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
  }

  export type UserOnWorkspaceCreateOrConnectWithoutUserInput = {
    where: UserOnWorkspaceWhereUniqueInput
    create: XOR<UserOnWorkspaceCreateWithoutUserInput, UserOnWorkspaceUncheckedCreateWithoutUserInput>
  }

  export type UserOnWorkspaceCreateManyUserInputEnvelope = {
    data: UserOnWorkspaceCreateManyUserInput | UserOnWorkspaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceCreateManyOwnerInputEnvelope = {
    data: WorkspaceCreateManyOwnerInput | WorkspaceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInvitedByInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutInviteInput
  }

  export type InviteUncheckedCreateWithoutInvitedByInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
  }

  export type InviteCreateOrConnectWithoutInvitedByInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput>
  }

  export type InviteCreateManyInvitedByInputEnvelope = {
    data: InviteCreateManyInvitedByInput | InviteCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type UserOnChannelsCreateWithoutUserInput = {
    joinedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutUserOnChannelsInput
  }

  export type UserOnChannelsUncheckedCreateWithoutUserInput = {
    channelId: string
    joinedAt?: Date | string
  }

  export type UserOnChannelsCreateOrConnectWithoutUserInput = {
    where: UserOnChannelsWhereUniqueInput
    create: XOR<UserOnChannelsCreateWithoutUserInput, UserOnChannelsUncheckedCreateWithoutUserInput>
  }

  export type UserOnChannelsCreateManyUserInputEnvelope = {
    data: UserOnChannelsCreateManyUserInput | UserOnChannelsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnWorkspaceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnWorkspaceWhereUniqueInput
    update: XOR<UserOnWorkspaceUpdateWithoutUserInput, UserOnWorkspaceUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnWorkspaceCreateWithoutUserInput, UserOnWorkspaceUncheckedCreateWithoutUserInput>
  }

  export type UserOnWorkspaceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnWorkspaceWhereUniqueInput
    data: XOR<UserOnWorkspaceUpdateWithoutUserInput, UserOnWorkspaceUncheckedUpdateWithoutUserInput>
  }

  export type UserOnWorkspaceUpdateManyWithWhereWithoutUserInput = {
    where: UserOnWorkspaceScalarWhereInput
    data: XOR<UserOnWorkspaceUpdateManyMutationInput, UserOnWorkspaceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnWorkspaceScalarWhereInput = {
    AND?: UserOnWorkspaceScalarWhereInput | UserOnWorkspaceScalarWhereInput[]
    OR?: UserOnWorkspaceScalarWhereInput[]
    NOT?: UserOnWorkspaceScalarWhereInput | UserOnWorkspaceScalarWhereInput[]
    userId?: StringFilter<"UserOnWorkspace"> | string
    workspaceId?: StringFilter<"UserOnWorkspace"> | string
    role?: EnumWorkspaceRoleFilter<"UserOnWorkspace"> | $Enums.WorkspaceRole
    joinedAt?: DateTimeFilter<"UserOnWorkspace"> | Date | string
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    slug?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    ownerId?: StringFilter<"Workspace"> | string
  }

  export type InviteUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutInvitedByInput, InviteUncheckedUpdateWithoutInvitedByInput>
    create: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutInvitedByInput, InviteUncheckedUpdateWithoutInvitedByInput>
  }

  export type InviteUpdateManyWithWhereWithoutInvitedByInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type InviteScalarWhereInput = {
    AND?: InviteScalarWhereInput | InviteScalarWhereInput[]
    OR?: InviteScalarWhereInput[]
    NOT?: InviteScalarWhereInput | InviteScalarWhereInput[]
    id?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    token?: StringFilter<"Invite"> | string
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    status?: EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFilter<"Invite"> | $Enums.WorkspaceRole
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    workspaceId?: StringFilter<"Invite"> | string
    invitedById?: StringFilter<"Invite"> | string
  }

  export type UserOnChannelsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnChannelsWhereUniqueInput
    update: XOR<UserOnChannelsUpdateWithoutUserInput, UserOnChannelsUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnChannelsCreateWithoutUserInput, UserOnChannelsUncheckedCreateWithoutUserInput>
  }

  export type UserOnChannelsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnChannelsWhereUniqueInput
    data: XOR<UserOnChannelsUpdateWithoutUserInput, UserOnChannelsUncheckedUpdateWithoutUserInput>
  }

  export type UserOnChannelsUpdateManyWithWhereWithoutUserInput = {
    where: UserOnChannelsScalarWhereInput
    data: XOR<UserOnChannelsUpdateManyMutationInput, UserOnChannelsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnChannelsScalarWhereInput = {
    AND?: UserOnChannelsScalarWhereInput | UserOnChannelsScalarWhereInput[]
    OR?: UserOnChannelsScalarWhereInput[]
    NOT?: UserOnChannelsScalarWhereInput | UserOnChannelsScalarWhereInput[]
    userId?: StringFilter<"UserOnChannels"> | string
    channelId?: StringFilter<"UserOnChannels"> | string
    joinedAt?: DateTimeFilter<"UserOnChannels"> | Date | string
  }

  export type UserCreateWithoutOwnedWorkspacesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedWorkspacesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
  }

  export type UserOnWorkspaceCreateWithoutWorkspaceInput = {
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput = {
    userId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
  }

  export type UserOnWorkspaceCreateOrConnectWithoutWorkspaceInput = {
    where: UserOnWorkspaceWhereUniqueInput
    create: XOR<UserOnWorkspaceCreateWithoutWorkspaceInput, UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserOnWorkspaceCreateManyWorkspaceInputEnvelope = {
    data: UserOnWorkspaceCreateManyWorkspaceInput | UserOnWorkspaceCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutWorkspaceInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedBy: UserCreateNestedOneWithoutInviteSentInput
  }

  export type InviteUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedById: string
  }

  export type InviteCreateOrConnectWithoutWorkspaceInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutWorkspaceInput, InviteUncheckedCreateWithoutWorkspaceInput>
  }

  export type InviteCreateManyWorkspaceInputEnvelope = {
    data: InviteCreateManyWorkspaceInput | InviteCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserOnChannels?: UserOnChannelsCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserOnChannels?: UserOnChannelsUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput>
  }

  export type ChannelCreateManyWorkspaceInputEnvelope = {
    data: ChannelCreateManyWorkspaceInput | ChannelCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedWorkspacesInput = {
    update: XOR<UserUpdateWithoutOwnedWorkspacesInput, UserUncheckedUpdateWithoutOwnedWorkspacesInput>
    create: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedWorkspacesInput, UserUncheckedUpdateWithoutOwnedWorkspacesInput>
  }

  export type UserUpdateWithoutOwnedWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserOnWorkspaceUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: UserOnWorkspaceWhereUniqueInput
    update: XOR<UserOnWorkspaceUpdateWithoutWorkspaceInput, UserOnWorkspaceUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<UserOnWorkspaceCreateWithoutWorkspaceInput, UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserOnWorkspaceUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: UserOnWorkspaceWhereUniqueInput
    data: XOR<UserOnWorkspaceUpdateWithoutWorkspaceInput, UserOnWorkspaceUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserOnWorkspaceUpdateManyWithWhereWithoutWorkspaceInput = {
    where: UserOnWorkspaceScalarWhereInput
    data: XOR<UserOnWorkspaceUpdateManyMutationInput, UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type InviteUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutWorkspaceInput, InviteUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<InviteCreateWithoutWorkspaceInput, InviteUncheckedCreateWithoutWorkspaceInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutWorkspaceInput, InviteUncheckedUpdateWithoutWorkspaceInput>
  }

  export type InviteUpdateManyWithWhereWithoutWorkspaceInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ChannelUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutWorkspaceInput, ChannelUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutWorkspaceInput, ChannelUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ChannelUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    description?: StringNullableFilter<"Channel"> | string | null
    isPublic?: BoolFilter<"Channel"> | boolean
    workspaceId?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type WorkspaceCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutMembersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceUpsertWithoutMembersInput = {
    update: XOR<WorkspaceUpdateWithoutMembersInput, WorkspaceUncheckedUpdateWithoutMembersInput>
    create: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutMembersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutMembersInput, WorkspaceUncheckedUpdateWithoutMembersInput>
  }

  export type WorkspaceUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutInviteInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutInviteInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutInviteInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutInviteInput, WorkspaceUncheckedCreateWithoutInviteInput>
  }

  export type UserCreateWithoutInviteSentInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    Channels?: UserOnChannelsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInviteSentInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    Channels?: UserOnChannelsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInviteSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviteSentInput, UserUncheckedCreateWithoutInviteSentInput>
  }

  export type WorkspaceUpsertWithoutInviteInput = {
    update: XOR<WorkspaceUpdateWithoutInviteInput, WorkspaceUncheckedUpdateWithoutInviteInput>
    create: XOR<WorkspaceCreateWithoutInviteInput, WorkspaceUncheckedCreateWithoutInviteInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutInviteInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutInviteInput, WorkspaceUncheckedUpdateWithoutInviteInput>
  }

  export type WorkspaceUpdateWithoutInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutInviteSentInput = {
    update: XOR<UserUpdateWithoutInviteSentInput, UserUncheckedUpdateWithoutInviteSentInput>
    create: XOR<UserCreateWithoutInviteSentInput, UserUncheckedCreateWithoutInviteSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInviteSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInviteSentInput, UserUncheckedUpdateWithoutInviteSentInput>
  }

  export type UserUpdateWithoutInviteSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    Channels?: UserOnChannelsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInviteSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    Channels?: UserOnChannelsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceCreateWithoutChannelInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutChannelInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutChannelInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutChannelInput, WorkspaceUncheckedCreateWithoutChannelInput>
  }

  export type UserOnChannelsCreateWithoutChannelInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChannelsInput
  }

  export type UserOnChannelsUncheckedCreateWithoutChannelInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type UserOnChannelsCreateOrConnectWithoutChannelInput = {
    where: UserOnChannelsWhereUniqueInput
    create: XOR<UserOnChannelsCreateWithoutChannelInput, UserOnChannelsUncheckedCreateWithoutChannelInput>
  }

  export type UserOnChannelsCreateManyChannelInputEnvelope = {
    data: UserOnChannelsCreateManyChannelInput | UserOnChannelsCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutChannelInput = {
    update: XOR<WorkspaceUpdateWithoutChannelInput, WorkspaceUncheckedUpdateWithoutChannelInput>
    create: XOR<WorkspaceCreateWithoutChannelInput, WorkspaceUncheckedCreateWithoutChannelInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutChannelInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutChannelInput, WorkspaceUncheckedUpdateWithoutChannelInput>
  }

  export type WorkspaceUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserOnChannelsUpsertWithWhereUniqueWithoutChannelInput = {
    where: UserOnChannelsWhereUniqueInput
    update: XOR<UserOnChannelsUpdateWithoutChannelInput, UserOnChannelsUncheckedUpdateWithoutChannelInput>
    create: XOR<UserOnChannelsCreateWithoutChannelInput, UserOnChannelsUncheckedCreateWithoutChannelInput>
  }

  export type UserOnChannelsUpdateWithWhereUniqueWithoutChannelInput = {
    where: UserOnChannelsWhereUniqueInput
    data: XOR<UserOnChannelsUpdateWithoutChannelInput, UserOnChannelsUncheckedUpdateWithoutChannelInput>
  }

  export type UserOnChannelsUpdateManyWithWhereWithoutChannelInput = {
    where: UserOnChannelsScalarWhereInput
    data: XOR<UserOnChannelsUpdateManyMutationInput, UserOnChannelsUncheckedUpdateManyWithoutChannelInput>
  }

  export type UserCreateWithoutChannelsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutChannelsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
  }

  export type ChannelCreateWithoutUserOnChannelsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutUserOnChannelsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateOrConnectWithoutUserOnChannelsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutUserOnChannelsInput, ChannelUncheckedCreateWithoutUserOnChannelsInput>
  }

  export type UserUpsertWithoutChannelsInput = {
    update: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type UserUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type ChannelUpsertWithoutUserOnChannelsInput = {
    update: XOR<ChannelUpdateWithoutUserOnChannelsInput, ChannelUncheckedUpdateWithoutUserOnChannelsInput>
    create: XOR<ChannelCreateWithoutUserOnChannelsInput, ChannelUncheckedCreateWithoutUserOnChannelsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutUserOnChannelsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutUserOnChannelsInput, ChannelUncheckedUpdateWithoutUserOnChannelsInput>
  }

  export type ChannelUpdateWithoutUserOnChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutUserOnChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceCreateManyUserInput = {
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
  }

  export type WorkspaceCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InviteCreateManyInvitedByInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
  }

  export type UserOnChannelsCreateManyUserInput = {
    channelId: string
    joinedAt?: Date | string
  }

  export type UserOnWorkspaceUpdateWithoutUserInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserOnWorkspaceUncheckedUpdateWithoutUserInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceUncheckedUpdateManyWithoutUserInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutInviteNestedInput
  }

  export type InviteUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type InviteUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnChannelsUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutUserOnChannelsNestedInput
  }

  export type UserOnChannelsUncheckedUpdateWithoutUserInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelsUncheckedUpdateManyWithoutUserInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceCreateManyWorkspaceInput = {
    userId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
  }

  export type InviteCreateManyWorkspaceInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedById: string
  }

  export type ChannelCreateManyWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnWorkspaceUpdateWithoutWorkspaceInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type UserOnWorkspaceUncheckedUpdateWithoutWorkspaceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: UserUpdateOneRequiredWithoutInviteSentNestedInput
  }

  export type InviteUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: StringFieldUpdateOperationsInput | string
  }

  export type InviteUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserOnChannels?: UserOnChannelsUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserOnChannels?: UserOnChannelsUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelsCreateManyChannelInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type UserOnChannelsUpdateWithoutChannelInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type UserOnChannelsUncheckedUpdateWithoutChannelInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelsUncheckedUpdateManyWithoutChannelInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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