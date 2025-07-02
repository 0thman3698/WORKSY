
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
 * Model UserOnChannel
 * 
 */
export type UserOnChannel = $Result.DefaultSelection<Prisma.$UserOnChannelPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model DirectMessageConversation
 * 
 */
export type DirectMessageConversation = $Result.DefaultSelection<Prisma.$DirectMessageConversationPayload>
/**
 * Model UserOnDM
 * 
 */
export type UserOnDM = $Result.DefaultSelection<Prisma.$UserOnDMPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  APP_OWNER: 'APP_OWNER',
  APP_ADMIN: 'APP_ADMIN',
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


export const ChannelRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type ChannelRole = (typeof ChannelRole)[keyof typeof ChannelRole]


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

export type ChannelRole = $Enums.ChannelRole

export const ChannelRole: typeof $Enums.ChannelRole

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
   * `prisma.userOnChannel`: Exposes CRUD operations for the **UserOnChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnChannels
    * const userOnChannels = await prisma.userOnChannel.findMany()
    * ```
    */
  get userOnChannel(): Prisma.UserOnChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directMessageConversation`: Exposes CRUD operations for the **DirectMessageConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectMessageConversations
    * const directMessageConversations = await prisma.directMessageConversation.findMany()
    * ```
    */
  get directMessageConversation(): Prisma.DirectMessageConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnDM`: Exposes CRUD operations for the **UserOnDM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnDMS
    * const userOnDMS = await prisma.userOnDM.findMany()
    * ```
    */
  get userOnDM(): Prisma.UserOnDMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;
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
    UserOnChannel: 'UserOnChannel',
    Message: 'Message',
    DirectMessageConversation: 'DirectMessageConversation',
    UserOnDM: 'UserOnDM',
    Meeting: 'Meeting'
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
      modelProps: "user" | "workspace" | "userOnWorkspace" | "invite" | "channel" | "userOnChannel" | "message" | "directMessageConversation" | "userOnDM" | "meeting"
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
      UserOnChannel: {
        payload: Prisma.$UserOnChannelPayload<ExtArgs>
        fields: Prisma.UserOnChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>
          }
          findFirst: {
            args: Prisma.UserOnChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>
          }
          findMany: {
            args: Prisma.UserOnChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>[]
          }
          create: {
            args: Prisma.UserOnChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>
          }
          createMany: {
            args: Prisma.UserOnChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>[]
          }
          delete: {
            args: Prisma.UserOnChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>
          }
          update: {
            args: Prisma.UserOnChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>
          }
          deleteMany: {
            args: Prisma.UserOnChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOnChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>[]
          }
          upsert: {
            args: Prisma.UserOnChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnChannelPayload>
          }
          aggregate: {
            args: Prisma.UserOnChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnChannel>
          }
          groupBy: {
            args: Prisma.UserOnChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnChannelCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnChannelCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      DirectMessageConversation: {
        payload: Prisma.$DirectMessageConversationPayload<ExtArgs>
        fields: Prisma.DirectMessageConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectMessageConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectMessageConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>
          }
          findFirst: {
            args: Prisma.DirectMessageConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectMessageConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>
          }
          findMany: {
            args: Prisma.DirectMessageConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>[]
          }
          create: {
            args: Prisma.DirectMessageConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>
          }
          createMany: {
            args: Prisma.DirectMessageConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectMessageConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>[]
          }
          delete: {
            args: Prisma.DirectMessageConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>
          }
          update: {
            args: Prisma.DirectMessageConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>
          }
          deleteMany: {
            args: Prisma.DirectMessageConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectMessageConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectMessageConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>[]
          }
          upsert: {
            args: Prisma.DirectMessageConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessageConversationPayload>
          }
          aggregate: {
            args: Prisma.DirectMessageConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectMessageConversation>
          }
          groupBy: {
            args: Prisma.DirectMessageConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectMessageConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectMessageConversationCountArgs<ExtArgs>
            result: $Utils.Optional<DirectMessageConversationCountAggregateOutputType> | number
          }
        }
      }
      UserOnDM: {
        payload: Prisma.$UserOnDMPayload<ExtArgs>
        fields: Prisma.UserOnDMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnDMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnDMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>
          }
          findFirst: {
            args: Prisma.UserOnDMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnDMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>
          }
          findMany: {
            args: Prisma.UserOnDMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>[]
          }
          create: {
            args: Prisma.UserOnDMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>
          }
          createMany: {
            args: Prisma.UserOnDMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnDMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>[]
          }
          delete: {
            args: Prisma.UserOnDMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>
          }
          update: {
            args: Prisma.UserOnDMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>
          }
          deleteMany: {
            args: Prisma.UserOnDMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnDMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOnDMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>[]
          }
          upsert: {
            args: Prisma.UserOnDMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnDMPayload>
          }
          aggregate: {
            args: Prisma.UserOnDMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnDM>
          }
          groupBy: {
            args: Prisma.UserOnDMGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnDMGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnDMCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnDMCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
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
    userOnChannel?: UserOnChannelOmit
    message?: MessageOmit
    directMessageConversation?: DirectMessageConversationOmit
    userOnDM?: UserOnDMOmit
    meeting?: MeetingOmit
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
    ownedChannels: number
    InviteSent: number
    Channels: number
    Message: number
    UserOnDM: number
    Meeting: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
    ownedWorkspaces?: boolean | UserCountOutputTypeCountOwnedWorkspacesArgs
    ownedChannels?: boolean | UserCountOutputTypeCountOwnedChannelsArgs
    InviteSent?: boolean | UserCountOutputTypeCountInviteSentArgs
    Channels?: boolean | UserCountOutputTypeCountChannelsArgs
    Message?: boolean | UserCountOutputTypeCountMessageArgs
    UserOnDM?: boolean | UserCountOutputTypeCountUserOnDMArgs
    Meeting?: boolean | UserCountOutputTypeCountMeetingArgs
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
  export type UserCountOutputTypeCountOwnedChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
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
    where?: UserOnChannelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserOnDMArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnDMWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    members: number
    Invite: number
    Channel: number
    DirectMessageConversation: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | WorkspaceCountOutputTypeCountMembersArgs
    Invite?: boolean | WorkspaceCountOutputTypeCountInviteArgs
    Channel?: boolean | WorkspaceCountOutputTypeCountChannelArgs
    DirectMessageConversation?: boolean | WorkspaceCountOutputTypeCountDirectMessageConversationArgs
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
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountDirectMessageConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageConversationWhereInput
  }


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    UserOnChannels: number
    Message: number
    Meeting: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserOnChannels?: boolean | ChannelCountOutputTypeCountUserOnChannelsArgs
    Message?: boolean | ChannelCountOutputTypeCountMessageArgs
    Meeting?: boolean | ChannelCountOutputTypeCountMeetingArgs
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
    where?: UserOnChannelWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountMeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type DirectMessageConversationCountOutputType
   */

  export type DirectMessageConversationCountOutputType = {
    participants: number
    messages: number
  }

  export type DirectMessageConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | DirectMessageConversationCountOutputTypeCountParticipantsArgs
    messages?: boolean | DirectMessageConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * DirectMessageConversationCountOutputType without action
   */
  export type DirectMessageConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversationCountOutputType
     */
    select?: DirectMessageConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectMessageConversationCountOutputType without action
   */
  export type DirectMessageConversationCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnDMWhereInput
  }

  /**
   * DirectMessageConversationCountOutputType without action
   */
  export type DirectMessageConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    failedPinAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    failedPinAttempts: number | null
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
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    emailVerificationTokenSentAt: Date | null
    resetPasswordPin: string | null
    resetPasswordPinExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordPinSentAt: Date | null
    failedPinAttempts: number | null
    loginOtp: string | null
    loginOtpExpires: Date | null
    loginSessionToken: string | null
    loginOtpSentAt: Date | null
    oauthProvider: string | null
    oauthId: string | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleCalendarId: string | null
    deletedAt: Date | null
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
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    emailVerificationTokenSentAt: Date | null
    resetPasswordPin: string | null
    resetPasswordPinExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordPinSentAt: Date | null
    failedPinAttempts: number | null
    loginOtp: string | null
    loginOtpExpires: Date | null
    loginSessionToken: string | null
    loginOtpSentAt: Date | null
    oauthProvider: string | null
    oauthId: string | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleCalendarId: string | null
    deletedAt: Date | null
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
    emailVerificationToken: number
    emailVerificationTokenExpires: number
    emailVerificationTokenSentAt: number
    resetPasswordPin: number
    resetPasswordPinExpires: number
    resetPasswordToken: number
    resetPasswordPinSentAt: number
    failedPinAttempts: number
    loginOtp: number
    loginOtpExpires: number
    loginSessionToken: number
    loginOtpSentAt: number
    oauthProvider: number
    oauthId: number
    emailVerified: number
    lastLoginAt: number
    googleAccessToken: number
    googleRefreshToken: number
    googleCalendarId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    failedPinAttempts?: true
  }

  export type UserSumAggregateInputType = {
    failedPinAttempts?: true
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
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    emailVerificationTokenSentAt?: true
    resetPasswordPin?: true
    resetPasswordPinExpires?: true
    resetPasswordToken?: true
    resetPasswordPinSentAt?: true
    failedPinAttempts?: true
    loginOtp?: true
    loginOtpExpires?: true
    loginSessionToken?: true
    loginOtpSentAt?: true
    oauthProvider?: true
    oauthId?: true
    emailVerified?: true
    lastLoginAt?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleCalendarId?: true
    deletedAt?: true
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
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    emailVerificationTokenSentAt?: true
    resetPasswordPin?: true
    resetPasswordPinExpires?: true
    resetPasswordToken?: true
    resetPasswordPinSentAt?: true
    failedPinAttempts?: true
    loginOtp?: true
    loginOtpExpires?: true
    loginSessionToken?: true
    loginOtpSentAt?: true
    oauthProvider?: true
    oauthId?: true
    emailVerified?: true
    lastLoginAt?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleCalendarId?: true
    deletedAt?: true
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
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    emailVerificationTokenSentAt?: true
    resetPasswordPin?: true
    resetPasswordPinExpires?: true
    resetPasswordToken?: true
    resetPasswordPinSentAt?: true
    failedPinAttempts?: true
    loginOtp?: true
    loginOtpExpires?: true
    loginSessionToken?: true
    loginOtpSentAt?: true
    oauthProvider?: true
    oauthId?: true
    emailVerified?: true
    lastLoginAt?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleCalendarId?: true
    deletedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: $Enums.Role
    avatar: string | null
    status: string | null
    lastSeen: Date | null
    isVerified: boolean
    refreshToken: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    emailVerificationTokenSentAt: Date | null
    resetPasswordPin: string | null
    resetPasswordPinExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordPinSentAt: Date | null
    failedPinAttempts: number | null
    loginOtp: string | null
    loginOtpExpires: Date | null
    loginSessionToken: string | null
    loginOtpSentAt: Date | null
    oauthProvider: string | null
    oauthId: string | null
    emailVerified: boolean
    lastLoginAt: Date | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleCalendarId: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    emailVerificationTokenSentAt?: boolean
    resetPasswordPin?: boolean
    resetPasswordPinExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordPinSentAt?: boolean
    failedPinAttempts?: boolean
    loginOtp?: boolean
    loginOtpExpires?: boolean
    loginSessionToken?: boolean
    loginOtpSentAt?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleCalendarId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    ownedWorkspaces?: boolean | User$ownedWorkspacesArgs<ExtArgs>
    ownedChannels?: boolean | User$ownedChannelsArgs<ExtArgs>
    InviteSent?: boolean | User$InviteSentArgs<ExtArgs>
    Channels?: boolean | User$ChannelsArgs<ExtArgs>
    Message?: boolean | User$MessageArgs<ExtArgs>
    UserOnDM?: boolean | User$UserOnDMArgs<ExtArgs>
    Meeting?: boolean | User$MeetingArgs<ExtArgs>
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
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    emailVerificationTokenSentAt?: boolean
    resetPasswordPin?: boolean
    resetPasswordPinExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordPinSentAt?: boolean
    failedPinAttempts?: boolean
    loginOtp?: boolean
    loginOtpExpires?: boolean
    loginSessionToken?: boolean
    loginOtpSentAt?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleCalendarId?: boolean
    deletedAt?: boolean
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
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    emailVerificationTokenSentAt?: boolean
    resetPasswordPin?: boolean
    resetPasswordPinExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordPinSentAt?: boolean
    failedPinAttempts?: boolean
    loginOtp?: boolean
    loginOtpExpires?: boolean
    loginSessionToken?: boolean
    loginOtpSentAt?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleCalendarId?: boolean
    deletedAt?: boolean
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
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    emailVerificationTokenSentAt?: boolean
    resetPasswordPin?: boolean
    resetPasswordPinExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordPinSentAt?: boolean
    failedPinAttempts?: boolean
    loginOtp?: boolean
    loginOtpExpires?: boolean
    loginSessionToken?: boolean
    loginOtpSentAt?: boolean
    oauthProvider?: boolean
    oauthId?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleCalendarId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatar" | "status" | "lastSeen" | "isVerified" | "refreshToken" | "emailVerificationToken" | "emailVerificationTokenExpires" | "emailVerificationTokenSentAt" | "resetPasswordPin" | "resetPasswordPinExpires" | "resetPasswordToken" | "resetPasswordPinSentAt" | "failedPinAttempts" | "loginOtp" | "loginOtpExpires" | "loginSessionToken" | "loginOtpSentAt" | "oauthProvider" | "oauthId" | "emailVerified" | "lastLoginAt" | "googleAccessToken" | "googleRefreshToken" | "googleCalendarId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    ownedWorkspaces?: boolean | User$ownedWorkspacesArgs<ExtArgs>
    ownedChannels?: boolean | User$ownedChannelsArgs<ExtArgs>
    InviteSent?: boolean | User$InviteSentArgs<ExtArgs>
    Channels?: boolean | User$ChannelsArgs<ExtArgs>
    Message?: boolean | User$MessageArgs<ExtArgs>
    UserOnDM?: boolean | User$UserOnDMArgs<ExtArgs>
    Meeting?: boolean | User$MeetingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$UserOnWorkspacePayload<ExtArgs>[]
      ownedWorkspaces: Prisma.$WorkspacePayload<ExtArgs>[]
      ownedChannels: Prisma.$ChannelPayload<ExtArgs>[]
      InviteSent: Prisma.$InvitePayload<ExtArgs>[]
      Channels: Prisma.$UserOnChannelPayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
      UserOnDM: Prisma.$UserOnDMPayload<ExtArgs>[]
      Meeting: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: $Enums.Role
      avatar: string | null
      status: string | null
      lastSeen: Date | null
      isVerified: boolean
      refreshToken: string | null
      emailVerificationToken: string | null
      emailVerificationTokenExpires: Date | null
      emailVerificationTokenSentAt: Date | null
      resetPasswordPin: string | null
      resetPasswordPinExpires: Date | null
      resetPasswordToken: string | null
      resetPasswordPinSentAt: Date | null
      failedPinAttempts: number | null
      loginOtp: string | null
      loginOtpExpires: Date | null
      loginSessionToken: string | null
      loginOtpSentAt: Date | null
      oauthProvider: string | null
      oauthId: string | null
      emailVerified: boolean
      lastLoginAt: Date | null
      googleAccessToken: string | null
      googleRefreshToken: string | null
      googleCalendarId: string | null
      deletedAt: Date | null
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
    ownedChannels<T extends User$ownedChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InviteSent<T extends User$InviteSentArgs<ExtArgs> = {}>(args?: Subset<T, User$InviteSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Channels<T extends User$ChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$ChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Message<T extends User$MessageArgs<ExtArgs> = {}>(args?: Subset<T, User$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserOnDM<T extends User$UserOnDMArgs<ExtArgs> = {}>(args?: Subset<T, User$UserOnDMArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Meeting<T extends User$MeetingArgs<ExtArgs> = {}>(args?: Subset<T, User$MeetingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly emailVerificationTokenSentAt: FieldRef<"User", 'DateTime'>
    readonly resetPasswordPin: FieldRef<"User", 'String'>
    readonly resetPasswordPinExpires: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordPinSentAt: FieldRef<"User", 'DateTime'>
    readonly failedPinAttempts: FieldRef<"User", 'Int'>
    readonly loginOtp: FieldRef<"User", 'String'>
    readonly loginOtpExpires: FieldRef<"User", 'DateTime'>
    readonly loginSessionToken: FieldRef<"User", 'String'>
    readonly loginOtpSentAt: FieldRef<"User", 'DateTime'>
    readonly oauthProvider: FieldRef<"User", 'String'>
    readonly oauthId: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly googleAccessToken: FieldRef<"User", 'String'>
    readonly googleRefreshToken: FieldRef<"User", 'String'>
    readonly googleCalendarId: FieldRef<"User", 'String'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
   * User.ownedChannels
   */
  export type User$ownedChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    where?: UserOnChannelWhereInput
    orderBy?: UserOnChannelOrderByWithRelationInput | UserOnChannelOrderByWithRelationInput[]
    cursor?: UserOnChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnChannelScalarFieldEnum | UserOnChannelScalarFieldEnum[]
  }

  /**
   * User.Message
   */
  export type User$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.UserOnDM
   */
  export type User$UserOnDMArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    where?: UserOnDMWhereInput
    orderBy?: UserOnDMOrderByWithRelationInput | UserOnDMOrderByWithRelationInput[]
    cursor?: UserOnDMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnDMScalarFieldEnum | UserOnDMScalarFieldEnum[]
  }

  /**
   * User.Meeting
   */
  export type User$MeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
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
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    slug: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    slug: number
    deletedAt: number
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
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slug?: true
    deletedAt?: true
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
    deletedAt: Date | null
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
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Workspace$membersArgs<ExtArgs>
    Invite?: boolean | Workspace$InviteArgs<ExtArgs>
    Channel?: boolean | Workspace$ChannelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Workspace$DirectMessageConversationArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    deletedAt?: boolean
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
    deletedAt?: boolean
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
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "slug" | "deletedAt" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Workspace$membersArgs<ExtArgs>
    Invite?: boolean | Workspace$InviteArgs<ExtArgs>
    Channel?: boolean | Workspace$ChannelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Workspace$DirectMessageConversationArgs<ExtArgs>
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
      DirectMessageConversation: Prisma.$DirectMessageConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      slug: string
      deletedAt: Date | null
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
    DirectMessageConversation<T extends Workspace$DirectMessageConversationArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$DirectMessageConversationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly deletedAt: FieldRef<"Workspace", 'DateTime'>
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
   * Workspace.DirectMessageConversation
   */
  export type Workspace$DirectMessageConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    where?: DirectMessageConversationWhereInput
    orderBy?: DirectMessageConversationOrderByWithRelationInput | DirectMessageConversationOrderByWithRelationInput[]
    cursor?: DirectMessageConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectMessageConversationScalarFieldEnum | DirectMessageConversationScalarFieldEnum[]
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
    deletedAt: Date | null
  }

  export type UserOnWorkspaceMaxAggregateOutputType = {
    userId: string | null
    workspaceId: string | null
    role: $Enums.WorkspaceRole | null
    joinedAt: Date | null
    deletedAt: Date | null
  }

  export type UserOnWorkspaceCountAggregateOutputType = {
    userId: number
    workspaceId: number
    role: number
    joinedAt: number
    deletedAt: number
    _all: number
  }


  export type UserOnWorkspaceMinAggregateInputType = {
    userId?: true
    workspaceId?: true
    role?: true
    joinedAt?: true
    deletedAt?: true
  }

  export type UserOnWorkspaceMaxAggregateInputType = {
    userId?: true
    workspaceId?: true
    role?: true
    joinedAt?: true
    deletedAt?: true
  }

  export type UserOnWorkspaceCountAggregateInputType = {
    userId?: true
    workspaceId?: true
    role?: true
    joinedAt?: true
    deletedAt?: true
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
    deletedAt: Date | null
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
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnWorkspace"]>

  export type UserOnWorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnWorkspace"]>

  export type UserOnWorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnWorkspace"]>

  export type UserOnWorkspaceSelectScalar = {
    userId?: boolean
    workspaceId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOnWorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "workspaceId" | "role" | "joinedAt" | "deletedAt", ExtArgs["result"]["userOnWorkspace"]>
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
      deletedAt: Date | null
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
    readonly deletedAt: FieldRef<"UserOnWorkspace", 'DateTime'>
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
    deletedAt: Date | null
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
    deletedAt: Date | null
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
    deletedAt: number
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
    deletedAt?: true
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
    deletedAt?: true
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
    deletedAt?: true
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
    deletedAt: Date | null
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
    deletedAt?: boolean
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
    deletedAt?: boolean
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
    deletedAt?: boolean
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
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    invitedById?: boolean
  }

  export type InviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "status" | "role" | "deletedAt" | "createdAt" | "updatedAt" | "workspaceId" | "invitedById", ExtArgs["result"]["invite"]>
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
      deletedAt: Date | null
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
    readonly deletedAt: FieldRef<"Invite", 'DateTime'>
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
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    workspaceId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPublic: number
    workspaceId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    workspaceId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    workspaceId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    workspaceId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
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
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    ownerId: string
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
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    UserOnChannels?: boolean | Channel$UserOnChannelsArgs<ExtArgs>
    Message?: boolean | Channel$MessageArgs<ExtArgs>
    Meeting?: boolean | Channel$MeetingArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isPublic" | "workspaceId" | "deletedAt" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    UserOnChannels?: boolean | Channel$UserOnChannelsArgs<ExtArgs>
    Message?: boolean | Channel$MessageArgs<ExtArgs>
    Meeting?: boolean | Channel$MeetingArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      UserOnChannels: Prisma.$UserOnChannelPayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
      Meeting: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isPublic: boolean
      workspaceId: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      ownerId: string
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
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserOnChannels<T extends Channel$UserOnChannelsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$UserOnChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Message<T extends Channel$MessageArgs<ExtArgs> = {}>(args?: Subset<T, Channel$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Meeting<T extends Channel$MeetingArgs<ExtArgs> = {}>(args?: Subset<T, Channel$MeetingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly deletedAt: FieldRef<"Channel", 'DateTime'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
    readonly ownerId: FieldRef<"Channel", 'String'>
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
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    where?: UserOnChannelWhereInput
    orderBy?: UserOnChannelOrderByWithRelationInput | UserOnChannelOrderByWithRelationInput[]
    cursor?: UserOnChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnChannelScalarFieldEnum | UserOnChannelScalarFieldEnum[]
  }

  /**
   * Channel.Message
   */
  export type Channel$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Channel.Meeting
   */
  export type Channel$MeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
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
   * Model UserOnChannel
   */

  export type AggregateUserOnChannel = {
    _count: UserOnChannelCountAggregateOutputType | null
    _min: UserOnChannelMinAggregateOutputType | null
    _max: UserOnChannelMaxAggregateOutputType | null
  }

  export type UserOnChannelMinAggregateOutputType = {
    userId: string | null
    channelId: string | null
    role: $Enums.ChannelRole | null
    joinedAt: Date | null
    deletedAt: Date | null
  }

  export type UserOnChannelMaxAggregateOutputType = {
    userId: string | null
    channelId: string | null
    role: $Enums.ChannelRole | null
    joinedAt: Date | null
    deletedAt: Date | null
  }

  export type UserOnChannelCountAggregateOutputType = {
    userId: number
    channelId: number
    role: number
    joinedAt: number
    deletedAt: number
    _all: number
  }


  export type UserOnChannelMinAggregateInputType = {
    userId?: true
    channelId?: true
    role?: true
    joinedAt?: true
    deletedAt?: true
  }

  export type UserOnChannelMaxAggregateInputType = {
    userId?: true
    channelId?: true
    role?: true
    joinedAt?: true
    deletedAt?: true
  }

  export type UserOnChannelCountAggregateInputType = {
    userId?: true
    channelId?: true
    role?: true
    joinedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserOnChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnChannel to aggregate.
     */
    where?: UserOnChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelOrderByWithRelationInput | UserOnChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnChannelWhereUniqueInput
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
    _count?: true | UserOnChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnChannelMaxAggregateInputType
  }

  export type GetUserOnChannelAggregateType<T extends UserOnChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnChannel[P]>
      : GetScalarType<T[P], AggregateUserOnChannel[P]>
  }




  export type UserOnChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnChannelWhereInput
    orderBy?: UserOnChannelOrderByWithAggregationInput | UserOnChannelOrderByWithAggregationInput[]
    by: UserOnChannelScalarFieldEnum[] | UserOnChannelScalarFieldEnum
    having?: UserOnChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnChannelCountAggregateInputType | true
    _min?: UserOnChannelMinAggregateInputType
    _max?: UserOnChannelMaxAggregateInputType
  }

  export type UserOnChannelGroupByOutputType = {
    userId: string
    channelId: string
    role: $Enums.ChannelRole
    joinedAt: Date
    deletedAt: Date | null
    _count: UserOnChannelCountAggregateOutputType | null
    _min: UserOnChannelMinAggregateOutputType | null
    _max: UserOnChannelMaxAggregateOutputType | null
  }

  type GetUserOnChannelGroupByPayload<T extends UserOnChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnChannelGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnChannelGroupByOutputType[P]>
        }
      >
    >


  export type UserOnChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    channelId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnChannel"]>

  export type UserOnChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    channelId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnChannel"]>

  export type UserOnChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    channelId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnChannel"]>

  export type UserOnChannelSelectScalar = {
    userId?: boolean
    channelId?: boolean
    role?: boolean
    joinedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOnChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "channelId" | "role" | "joinedAt" | "deletedAt", ExtArgs["result"]["userOnChannel"]>
  export type UserOnChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type UserOnChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type UserOnChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $UserOnChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnChannel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      channelId: string
      role: $Enums.ChannelRole
      joinedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["userOnChannel"]>
    composites: {}
  }

  type UserOnChannelGetPayload<S extends boolean | null | undefined | UserOnChannelDefaultArgs> = $Result.GetResult<Prisma.$UserOnChannelPayload, S>

  type UserOnChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnChannelCountAggregateInputType | true
    }

  export interface UserOnChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnChannel'], meta: { name: 'UserOnChannel' } }
    /**
     * Find zero or one UserOnChannel that matches the filter.
     * @param {UserOnChannelFindUniqueArgs} args - Arguments to find a UserOnChannel
     * @example
     * // Get one UserOnChannel
     * const userOnChannel = await prisma.userOnChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnChannelFindUniqueArgs>(args: SelectSubset<T, UserOnChannelFindUniqueArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnChannelFindUniqueOrThrowArgs} args - Arguments to find a UserOnChannel
     * @example
     * // Get one UserOnChannel
     * const userOnChannel = await prisma.userOnChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelFindFirstArgs} args - Arguments to find a UserOnChannel
     * @example
     * // Get one UserOnChannel
     * const userOnChannel = await prisma.userOnChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnChannelFindFirstArgs>(args?: SelectSubset<T, UserOnChannelFindFirstArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelFindFirstOrThrowArgs} args - Arguments to find a UserOnChannel
     * @example
     * // Get one UserOnChannel
     * const userOnChannel = await prisma.userOnChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnChannels
     * const userOnChannels = await prisma.userOnChannel.findMany()
     * 
     * // Get first 10 UserOnChannels
     * const userOnChannels = await prisma.userOnChannel.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnChannelWithUserIdOnly = await prisma.userOnChannel.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserOnChannelFindManyArgs>(args?: SelectSubset<T, UserOnChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnChannel.
     * @param {UserOnChannelCreateArgs} args - Arguments to create a UserOnChannel.
     * @example
     * // Create one UserOnChannel
     * const UserOnChannel = await prisma.userOnChannel.create({
     *   data: {
     *     // ... data to create a UserOnChannel
     *   }
     * })
     * 
     */
    create<T extends UserOnChannelCreateArgs>(args: SelectSubset<T, UserOnChannelCreateArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnChannels.
     * @param {UserOnChannelCreateManyArgs} args - Arguments to create many UserOnChannels.
     * @example
     * // Create many UserOnChannels
     * const userOnChannel = await prisma.userOnChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnChannelCreateManyArgs>(args?: SelectSubset<T, UserOnChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnChannels and returns the data saved in the database.
     * @param {UserOnChannelCreateManyAndReturnArgs} args - Arguments to create many UserOnChannels.
     * @example
     * // Create many UserOnChannels
     * const userOnChannel = await prisma.userOnChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnChannels and only return the `userId`
     * const userOnChannelWithUserIdOnly = await prisma.userOnChannel.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOnChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOnChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOnChannel.
     * @param {UserOnChannelDeleteArgs} args - Arguments to delete one UserOnChannel.
     * @example
     * // Delete one UserOnChannel
     * const UserOnChannel = await prisma.userOnChannel.delete({
     *   where: {
     *     // ... filter to delete one UserOnChannel
     *   }
     * })
     * 
     */
    delete<T extends UserOnChannelDeleteArgs>(args: SelectSubset<T, UserOnChannelDeleteArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnChannel.
     * @param {UserOnChannelUpdateArgs} args - Arguments to update one UserOnChannel.
     * @example
     * // Update one UserOnChannel
     * const userOnChannel = await prisma.userOnChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnChannelUpdateArgs>(args: SelectSubset<T, UserOnChannelUpdateArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnChannels.
     * @param {UserOnChannelDeleteManyArgs} args - Arguments to filter UserOnChannels to delete.
     * @example
     * // Delete a few UserOnChannels
     * const { count } = await prisma.userOnChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnChannelDeleteManyArgs>(args?: SelectSubset<T, UserOnChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnChannels
     * const userOnChannel = await prisma.userOnChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnChannelUpdateManyArgs>(args: SelectSubset<T, UserOnChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnChannels and returns the data updated in the database.
     * @param {UserOnChannelUpdateManyAndReturnArgs} args - Arguments to update many UserOnChannels.
     * @example
     * // Update many UserOnChannels
     * const userOnChannel = await prisma.userOnChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOnChannels and only return the `userId`
     * const userOnChannelWithUserIdOnly = await prisma.userOnChannel.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserOnChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOnChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOnChannel.
     * @param {UserOnChannelUpsertArgs} args - Arguments to update or create a UserOnChannel.
     * @example
     * // Update or create a UserOnChannel
     * const userOnChannel = await prisma.userOnChannel.upsert({
     *   create: {
     *     // ... data to create a UserOnChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnChannel we want to update
     *   }
     * })
     */
    upsert<T extends UserOnChannelUpsertArgs>(args: SelectSubset<T, UserOnChannelUpsertArgs<ExtArgs>>): Prisma__UserOnChannelClient<$Result.GetResult<Prisma.$UserOnChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelCountArgs} args - Arguments to filter UserOnChannels to count.
     * @example
     * // Count the number of UserOnChannels
     * const count = await prisma.userOnChannel.count({
     *   where: {
     *     // ... the filter for the UserOnChannels we want to count
     *   }
     * })
    **/
    count<T extends UserOnChannelCountArgs>(
      args?: Subset<T, UserOnChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOnChannelAggregateArgs>(args: Subset<T, UserOnChannelAggregateArgs>): Prisma.PrismaPromise<GetUserOnChannelAggregateType<T>>

    /**
     * Group by UserOnChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnChannelGroupByArgs} args - Group by arguments.
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
      T extends UserOnChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnChannelGroupByArgs['orderBy'] }
        : { orderBy?: UserOnChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOnChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnChannel model
   */
  readonly fields: UserOnChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserOnChannel model
   */
  interface UserOnChannelFieldRefs {
    readonly userId: FieldRef<"UserOnChannel", 'String'>
    readonly channelId: FieldRef<"UserOnChannel", 'String'>
    readonly role: FieldRef<"UserOnChannel", 'ChannelRole'>
    readonly joinedAt: FieldRef<"UserOnChannel", 'DateTime'>
    readonly deletedAt: FieldRef<"UserOnChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOnChannel findUnique
   */
  export type UserOnChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannel to fetch.
     */
    where: UserOnChannelWhereUniqueInput
  }

  /**
   * UserOnChannel findUniqueOrThrow
   */
  export type UserOnChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannel to fetch.
     */
    where: UserOnChannelWhereUniqueInput
  }

  /**
   * UserOnChannel findFirst
   */
  export type UserOnChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannel to fetch.
     */
    where?: UserOnChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelOrderByWithRelationInput | UserOnChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnChannels.
     */
    cursor?: UserOnChannelWhereUniqueInput
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
    distinct?: UserOnChannelScalarFieldEnum | UserOnChannelScalarFieldEnum[]
  }

  /**
   * UserOnChannel findFirstOrThrow
   */
  export type UserOnChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannel to fetch.
     */
    where?: UserOnChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelOrderByWithRelationInput | UserOnChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnChannels.
     */
    cursor?: UserOnChannelWhereUniqueInput
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
    distinct?: UserOnChannelScalarFieldEnum | UserOnChannelScalarFieldEnum[]
  }

  /**
   * UserOnChannel findMany
   */
  export type UserOnChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * Filter, which UserOnChannels to fetch.
     */
    where?: UserOnChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnChannels to fetch.
     */
    orderBy?: UserOnChannelOrderByWithRelationInput | UserOnChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnChannels.
     */
    cursor?: UserOnChannelWhereUniqueInput
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
    distinct?: UserOnChannelScalarFieldEnum | UserOnChannelScalarFieldEnum[]
  }

  /**
   * UserOnChannel create
   */
  export type UserOnChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnChannel.
     */
    data: XOR<UserOnChannelCreateInput, UserOnChannelUncheckedCreateInput>
  }

  /**
   * UserOnChannel createMany
   */
  export type UserOnChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnChannels.
     */
    data: UserOnChannelCreateManyInput | UserOnChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnChannel createManyAndReturn
   */
  export type UserOnChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * The data used to create many UserOnChannels.
     */
    data: UserOnChannelCreateManyInput | UserOnChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnChannel update
   */
  export type UserOnChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnChannel.
     */
    data: XOR<UserOnChannelUpdateInput, UserOnChannelUncheckedUpdateInput>
    /**
     * Choose, which UserOnChannel to update.
     */
    where: UserOnChannelWhereUniqueInput
  }

  /**
   * UserOnChannel updateMany
   */
  export type UserOnChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnChannels.
     */
    data: XOR<UserOnChannelUpdateManyMutationInput, UserOnChannelUncheckedUpdateManyInput>
    /**
     * Filter which UserOnChannels to update
     */
    where?: UserOnChannelWhereInput
    /**
     * Limit how many UserOnChannels to update.
     */
    limit?: number
  }

  /**
   * UserOnChannel updateManyAndReturn
   */
  export type UserOnChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * The data used to update UserOnChannels.
     */
    data: XOR<UserOnChannelUpdateManyMutationInput, UserOnChannelUncheckedUpdateManyInput>
    /**
     * Filter which UserOnChannels to update
     */
    where?: UserOnChannelWhereInput
    /**
     * Limit how many UserOnChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnChannel upsert
   */
  export type UserOnChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnChannel to update in case it exists.
     */
    where: UserOnChannelWhereUniqueInput
    /**
     * In case the UserOnChannel found by the `where` argument doesn't exist, create a new UserOnChannel with this data.
     */
    create: XOR<UserOnChannelCreateInput, UserOnChannelUncheckedCreateInput>
    /**
     * In case the UserOnChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnChannelUpdateInput, UserOnChannelUncheckedUpdateInput>
  }

  /**
   * UserOnChannel delete
   */
  export type UserOnChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
    /**
     * Filter which UserOnChannel to delete.
     */
    where: UserOnChannelWhereUniqueInput
  }

  /**
   * UserOnChannel deleteMany
   */
  export type UserOnChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnChannels to delete
     */
    where?: UserOnChannelWhereInput
    /**
     * Limit how many UserOnChannels to delete.
     */
    limit?: number
  }

  /**
   * UserOnChannel without action
   */
  export type UserOnChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnChannel
     */
    select?: UserOnChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnChannel
     */
    omit?: UserOnChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnChannelInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    isEdited: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    channelId: string | null
    conversationId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    isEdited: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    channelId: string | null
    conversationId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    isEdited: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    userId: number
    channelId: number
    conversationId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    isEdited?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    conversationId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    isEdited?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    conversationId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    isEdited?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    channelId?: true
    conversationId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    isEdited: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    channelId: string | null
    conversationId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isEdited?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Message$channelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Message$DirectMessageConversationArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isEdited?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Message$channelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Message$DirectMessageConversationArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isEdited?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    conversationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Message$channelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Message$DirectMessageConversationArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    isEdited?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    channelId?: boolean
    conversationId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isEdited" | "deletedAt" | "createdAt" | "updatedAt" | "userId" | "channelId" | "conversationId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Message$channelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Message$DirectMessageConversationArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Message$channelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Message$DirectMessageConversationArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | Message$channelArgs<ExtArgs>
    DirectMessageConversation?: boolean | Message$DirectMessageConversationArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs> | null
      DirectMessageConversation: Prisma.$DirectMessageConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      isEdited: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
      channelId: string | null
      conversationId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends Message$channelArgs<ExtArgs> = {}>(args?: Subset<T, Message$channelArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DirectMessageConversation<T extends Message$DirectMessageConversationArgs<ExtArgs> = {}>(args?: Subset<T, Message$DirectMessageConversationArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly isEdited: FieldRef<"Message", 'Boolean'>
    readonly deletedAt: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly channelId: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.channel
   */
  export type Message$channelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Message.DirectMessageConversation
   */
  export type Message$DirectMessageConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    where?: DirectMessageConversationWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model DirectMessageConversation
   */

  export type AggregateDirectMessageConversation = {
    _count: DirectMessageConversationCountAggregateOutputType | null
    _min: DirectMessageConversationMinAggregateOutputType | null
    _max: DirectMessageConversationMaxAggregateOutputType | null
  }

  export type DirectMessageConversationMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageConversationMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageConversationCountAggregateOutputType = {
    id: number
    workspaceId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectMessageConversationMinAggregateInputType = {
    id?: true
    workspaceId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageConversationMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageConversationCountAggregateInputType = {
    id?: true
    workspaceId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectMessageConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessageConversation to aggregate.
     */
    where?: DirectMessageConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageConversations to fetch.
     */
    orderBy?: DirectMessageConversationOrderByWithRelationInput | DirectMessageConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectMessageConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectMessageConversations
    **/
    _count?: true | DirectMessageConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectMessageConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectMessageConversationMaxAggregateInputType
  }

  export type GetDirectMessageConversationAggregateType<T extends DirectMessageConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectMessageConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectMessageConversation[P]>
      : GetScalarType<T[P], AggregateDirectMessageConversation[P]>
  }




  export type DirectMessageConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageConversationWhereInput
    orderBy?: DirectMessageConversationOrderByWithAggregationInput | DirectMessageConversationOrderByWithAggregationInput[]
    by: DirectMessageConversationScalarFieldEnum[] | DirectMessageConversationScalarFieldEnum
    having?: DirectMessageConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectMessageConversationCountAggregateInputType | true
    _min?: DirectMessageConversationMinAggregateInputType
    _max?: DirectMessageConversationMaxAggregateInputType
  }

  export type DirectMessageConversationGroupByOutputType = {
    id: string
    workspaceId: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DirectMessageConversationCountAggregateOutputType | null
    _min: DirectMessageConversationMinAggregateOutputType | null
    _max: DirectMessageConversationMaxAggregateOutputType | null
  }

  type GetDirectMessageConversationGroupByPayload<T extends DirectMessageConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectMessageConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectMessageConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectMessageConversationGroupByOutputType[P]>
            : GetScalarType<T[P], DirectMessageConversationGroupByOutputType[P]>
        }
      >
    >


  export type DirectMessageConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participants?: boolean | DirectMessageConversation$participantsArgs<ExtArgs>
    messages?: boolean | DirectMessageConversation$messagesArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    _count?: boolean | DirectMessageConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directMessageConversation"]>

  export type DirectMessageConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directMessageConversation"]>

  export type DirectMessageConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directMessageConversation"]>

  export type DirectMessageConversationSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DirectMessageConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["directMessageConversation"]>
  export type DirectMessageConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | DirectMessageConversation$participantsArgs<ExtArgs>
    messages?: boolean | DirectMessageConversation$messagesArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    _count?: boolean | DirectMessageConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectMessageConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type DirectMessageConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $DirectMessageConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectMessageConversation"
    objects: {
      participants: Prisma.$UserOnDMPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["directMessageConversation"]>
    composites: {}
  }

  type DirectMessageConversationGetPayload<S extends boolean | null | undefined | DirectMessageConversationDefaultArgs> = $Result.GetResult<Prisma.$DirectMessageConversationPayload, S>

  type DirectMessageConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectMessageConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectMessageConversationCountAggregateInputType | true
    }

  export interface DirectMessageConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectMessageConversation'], meta: { name: 'DirectMessageConversation' } }
    /**
     * Find zero or one DirectMessageConversation that matches the filter.
     * @param {DirectMessageConversationFindUniqueArgs} args - Arguments to find a DirectMessageConversation
     * @example
     * // Get one DirectMessageConversation
     * const directMessageConversation = await prisma.directMessageConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectMessageConversationFindUniqueArgs>(args: SelectSubset<T, DirectMessageConversationFindUniqueArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectMessageConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectMessageConversationFindUniqueOrThrowArgs} args - Arguments to find a DirectMessageConversation
     * @example
     * // Get one DirectMessageConversation
     * const directMessageConversation = await prisma.directMessageConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectMessageConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectMessageConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectMessageConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationFindFirstArgs} args - Arguments to find a DirectMessageConversation
     * @example
     * // Get one DirectMessageConversation
     * const directMessageConversation = await prisma.directMessageConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectMessageConversationFindFirstArgs>(args?: SelectSubset<T, DirectMessageConversationFindFirstArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectMessageConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationFindFirstOrThrowArgs} args - Arguments to find a DirectMessageConversation
     * @example
     * // Get one DirectMessageConversation
     * const directMessageConversation = await prisma.directMessageConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectMessageConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectMessageConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectMessageConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectMessageConversations
     * const directMessageConversations = await prisma.directMessageConversation.findMany()
     * 
     * // Get first 10 DirectMessageConversations
     * const directMessageConversations = await prisma.directMessageConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directMessageConversationWithIdOnly = await prisma.directMessageConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectMessageConversationFindManyArgs>(args?: SelectSubset<T, DirectMessageConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectMessageConversation.
     * @param {DirectMessageConversationCreateArgs} args - Arguments to create a DirectMessageConversation.
     * @example
     * // Create one DirectMessageConversation
     * const DirectMessageConversation = await prisma.directMessageConversation.create({
     *   data: {
     *     // ... data to create a DirectMessageConversation
     *   }
     * })
     * 
     */
    create<T extends DirectMessageConversationCreateArgs>(args: SelectSubset<T, DirectMessageConversationCreateArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectMessageConversations.
     * @param {DirectMessageConversationCreateManyArgs} args - Arguments to create many DirectMessageConversations.
     * @example
     * // Create many DirectMessageConversations
     * const directMessageConversation = await prisma.directMessageConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectMessageConversationCreateManyArgs>(args?: SelectSubset<T, DirectMessageConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectMessageConversations and returns the data saved in the database.
     * @param {DirectMessageConversationCreateManyAndReturnArgs} args - Arguments to create many DirectMessageConversations.
     * @example
     * // Create many DirectMessageConversations
     * const directMessageConversation = await prisma.directMessageConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectMessageConversations and only return the `id`
     * const directMessageConversationWithIdOnly = await prisma.directMessageConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectMessageConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectMessageConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DirectMessageConversation.
     * @param {DirectMessageConversationDeleteArgs} args - Arguments to delete one DirectMessageConversation.
     * @example
     * // Delete one DirectMessageConversation
     * const DirectMessageConversation = await prisma.directMessageConversation.delete({
     *   where: {
     *     // ... filter to delete one DirectMessageConversation
     *   }
     * })
     * 
     */
    delete<T extends DirectMessageConversationDeleteArgs>(args: SelectSubset<T, DirectMessageConversationDeleteArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectMessageConversation.
     * @param {DirectMessageConversationUpdateArgs} args - Arguments to update one DirectMessageConversation.
     * @example
     * // Update one DirectMessageConversation
     * const directMessageConversation = await prisma.directMessageConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectMessageConversationUpdateArgs>(args: SelectSubset<T, DirectMessageConversationUpdateArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectMessageConversations.
     * @param {DirectMessageConversationDeleteManyArgs} args - Arguments to filter DirectMessageConversations to delete.
     * @example
     * // Delete a few DirectMessageConversations
     * const { count } = await prisma.directMessageConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectMessageConversationDeleteManyArgs>(args?: SelectSubset<T, DirectMessageConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMessageConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectMessageConversations
     * const directMessageConversation = await prisma.directMessageConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectMessageConversationUpdateManyArgs>(args: SelectSubset<T, DirectMessageConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMessageConversations and returns the data updated in the database.
     * @param {DirectMessageConversationUpdateManyAndReturnArgs} args - Arguments to update many DirectMessageConversations.
     * @example
     * // Update many DirectMessageConversations
     * const directMessageConversation = await prisma.directMessageConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DirectMessageConversations and only return the `id`
     * const directMessageConversationWithIdOnly = await prisma.directMessageConversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DirectMessageConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectMessageConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DirectMessageConversation.
     * @param {DirectMessageConversationUpsertArgs} args - Arguments to update or create a DirectMessageConversation.
     * @example
     * // Update or create a DirectMessageConversation
     * const directMessageConversation = await prisma.directMessageConversation.upsert({
     *   create: {
     *     // ... data to create a DirectMessageConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectMessageConversation we want to update
     *   }
     * })
     */
    upsert<T extends DirectMessageConversationUpsertArgs>(args: SelectSubset<T, DirectMessageConversationUpsertArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DirectMessageConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationCountArgs} args - Arguments to filter DirectMessageConversations to count.
     * @example
     * // Count the number of DirectMessageConversations
     * const count = await prisma.directMessageConversation.count({
     *   where: {
     *     // ... the filter for the DirectMessageConversations we want to count
     *   }
     * })
    **/
    count<T extends DirectMessageConversationCountArgs>(
      args?: Subset<T, DirectMessageConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectMessageConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectMessageConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectMessageConversationAggregateArgs>(args: Subset<T, DirectMessageConversationAggregateArgs>): Prisma.PrismaPromise<GetDirectMessageConversationAggregateType<T>>

    /**
     * Group by DirectMessageConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageConversationGroupByArgs} args - Group by arguments.
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
      T extends DirectMessageConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectMessageConversationGroupByArgs['orderBy'] }
        : { orderBy?: DirectMessageConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectMessageConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectMessageConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectMessageConversation model
   */
  readonly fields: DirectMessageConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectMessageConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectMessageConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends DirectMessageConversation$participantsArgs<ExtArgs> = {}>(args?: Subset<T, DirectMessageConversation$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends DirectMessageConversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, DirectMessageConversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DirectMessageConversation model
   */
  interface DirectMessageConversationFieldRefs {
    readonly id: FieldRef<"DirectMessageConversation", 'String'>
    readonly workspaceId: FieldRef<"DirectMessageConversation", 'String'>
    readonly deletedAt: FieldRef<"DirectMessageConversation", 'DateTime'>
    readonly createdAt: FieldRef<"DirectMessageConversation", 'DateTime'>
    readonly updatedAt: FieldRef<"DirectMessageConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DirectMessageConversation findUnique
   */
  export type DirectMessageConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageConversation to fetch.
     */
    where: DirectMessageConversationWhereUniqueInput
  }

  /**
   * DirectMessageConversation findUniqueOrThrow
   */
  export type DirectMessageConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageConversation to fetch.
     */
    where: DirectMessageConversationWhereUniqueInput
  }

  /**
   * DirectMessageConversation findFirst
   */
  export type DirectMessageConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageConversation to fetch.
     */
    where?: DirectMessageConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageConversations to fetch.
     */
    orderBy?: DirectMessageConversationOrderByWithRelationInput | DirectMessageConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessageConversations.
     */
    cursor?: DirectMessageConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessageConversations.
     */
    distinct?: DirectMessageConversationScalarFieldEnum | DirectMessageConversationScalarFieldEnum[]
  }

  /**
   * DirectMessageConversation findFirstOrThrow
   */
  export type DirectMessageConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageConversation to fetch.
     */
    where?: DirectMessageConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageConversations to fetch.
     */
    orderBy?: DirectMessageConversationOrderByWithRelationInput | DirectMessageConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessageConversations.
     */
    cursor?: DirectMessageConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessageConversations.
     */
    distinct?: DirectMessageConversationScalarFieldEnum | DirectMessageConversationScalarFieldEnum[]
  }

  /**
   * DirectMessageConversation findMany
   */
  export type DirectMessageConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageConversations to fetch.
     */
    where?: DirectMessageConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageConversations to fetch.
     */
    orderBy?: DirectMessageConversationOrderByWithRelationInput | DirectMessageConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectMessageConversations.
     */
    cursor?: DirectMessageConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageConversations.
     */
    skip?: number
    distinct?: DirectMessageConversationScalarFieldEnum | DirectMessageConversationScalarFieldEnum[]
  }

  /**
   * DirectMessageConversation create
   */
  export type DirectMessageConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectMessageConversation.
     */
    data: XOR<DirectMessageConversationCreateInput, DirectMessageConversationUncheckedCreateInput>
  }

  /**
   * DirectMessageConversation createMany
   */
  export type DirectMessageConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectMessageConversations.
     */
    data: DirectMessageConversationCreateManyInput | DirectMessageConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectMessageConversation createManyAndReturn
   */
  export type DirectMessageConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * The data used to create many DirectMessageConversations.
     */
    data: DirectMessageConversationCreateManyInput | DirectMessageConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectMessageConversation update
   */
  export type DirectMessageConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectMessageConversation.
     */
    data: XOR<DirectMessageConversationUpdateInput, DirectMessageConversationUncheckedUpdateInput>
    /**
     * Choose, which DirectMessageConversation to update.
     */
    where: DirectMessageConversationWhereUniqueInput
  }

  /**
   * DirectMessageConversation updateMany
   */
  export type DirectMessageConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectMessageConversations.
     */
    data: XOR<DirectMessageConversationUpdateManyMutationInput, DirectMessageConversationUncheckedUpdateManyInput>
    /**
     * Filter which DirectMessageConversations to update
     */
    where?: DirectMessageConversationWhereInput
    /**
     * Limit how many DirectMessageConversations to update.
     */
    limit?: number
  }

  /**
   * DirectMessageConversation updateManyAndReturn
   */
  export type DirectMessageConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * The data used to update DirectMessageConversations.
     */
    data: XOR<DirectMessageConversationUpdateManyMutationInput, DirectMessageConversationUncheckedUpdateManyInput>
    /**
     * Filter which DirectMessageConversations to update
     */
    where?: DirectMessageConversationWhereInput
    /**
     * Limit how many DirectMessageConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectMessageConversation upsert
   */
  export type DirectMessageConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectMessageConversation to update in case it exists.
     */
    where: DirectMessageConversationWhereUniqueInput
    /**
     * In case the DirectMessageConversation found by the `where` argument doesn't exist, create a new DirectMessageConversation with this data.
     */
    create: XOR<DirectMessageConversationCreateInput, DirectMessageConversationUncheckedCreateInput>
    /**
     * In case the DirectMessageConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectMessageConversationUpdateInput, DirectMessageConversationUncheckedUpdateInput>
  }

  /**
   * DirectMessageConversation delete
   */
  export type DirectMessageConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
    /**
     * Filter which DirectMessageConversation to delete.
     */
    where: DirectMessageConversationWhereUniqueInput
  }

  /**
   * DirectMessageConversation deleteMany
   */
  export type DirectMessageConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessageConversations to delete
     */
    where?: DirectMessageConversationWhereInput
    /**
     * Limit how many DirectMessageConversations to delete.
     */
    limit?: number
  }

  /**
   * DirectMessageConversation.participants
   */
  export type DirectMessageConversation$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    where?: UserOnDMWhereInput
    orderBy?: UserOnDMOrderByWithRelationInput | UserOnDMOrderByWithRelationInput[]
    cursor?: UserOnDMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnDMScalarFieldEnum | UserOnDMScalarFieldEnum[]
  }

  /**
   * DirectMessageConversation.messages
   */
  export type DirectMessageConversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * DirectMessageConversation without action
   */
  export type DirectMessageConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageConversation
     */
    select?: DirectMessageConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessageConversation
     */
    omit?: DirectMessageConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageConversationInclude<ExtArgs> | null
  }


  /**
   * Model UserOnDM
   */

  export type AggregateUserOnDM = {
    _count: UserOnDMCountAggregateOutputType | null
    _min: UserOnDMMinAggregateOutputType | null
    _max: UserOnDMMaxAggregateOutputType | null
  }

  export type UserOnDMMinAggregateOutputType = {
    userId: string | null
    dmId: string | null
    deletedAt: Date | null
  }

  export type UserOnDMMaxAggregateOutputType = {
    userId: string | null
    dmId: string | null
    deletedAt: Date | null
  }

  export type UserOnDMCountAggregateOutputType = {
    userId: number
    dmId: number
    deletedAt: number
    _all: number
  }


  export type UserOnDMMinAggregateInputType = {
    userId?: true
    dmId?: true
    deletedAt?: true
  }

  export type UserOnDMMaxAggregateInputType = {
    userId?: true
    dmId?: true
    deletedAt?: true
  }

  export type UserOnDMCountAggregateInputType = {
    userId?: true
    dmId?: true
    deletedAt?: true
    _all?: true
  }

  export type UserOnDMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnDM to aggregate.
     */
    where?: UserOnDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnDMS to fetch.
     */
    orderBy?: UserOnDMOrderByWithRelationInput | UserOnDMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnDMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnDMS
    **/
    _count?: true | UserOnDMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnDMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnDMMaxAggregateInputType
  }

  export type GetUserOnDMAggregateType<T extends UserOnDMAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnDM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnDM[P]>
      : GetScalarType<T[P], AggregateUserOnDM[P]>
  }




  export type UserOnDMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnDMWhereInput
    orderBy?: UserOnDMOrderByWithAggregationInput | UserOnDMOrderByWithAggregationInput[]
    by: UserOnDMScalarFieldEnum[] | UserOnDMScalarFieldEnum
    having?: UserOnDMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnDMCountAggregateInputType | true
    _min?: UserOnDMMinAggregateInputType
    _max?: UserOnDMMaxAggregateInputType
  }

  export type UserOnDMGroupByOutputType = {
    userId: string
    dmId: string
    deletedAt: Date | null
    _count: UserOnDMCountAggregateOutputType | null
    _min: UserOnDMMinAggregateOutputType | null
    _max: UserOnDMMaxAggregateOutputType | null
  }

  type GetUserOnDMGroupByPayload<T extends UserOnDMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnDMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnDMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnDMGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnDMGroupByOutputType[P]>
        }
      >
    >


  export type UserOnDMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dmId?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dm?: boolean | DirectMessageConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnDM"]>

  export type UserOnDMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dmId?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dm?: boolean | DirectMessageConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnDM"]>

  export type UserOnDMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dmId?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dm?: boolean | DirectMessageConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnDM"]>

  export type UserOnDMSelectScalar = {
    userId?: boolean
    dmId?: boolean
    deletedAt?: boolean
  }

  export type UserOnDMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "dmId" | "deletedAt", ExtArgs["result"]["userOnDM"]>
  export type UserOnDMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dm?: boolean | DirectMessageConversationDefaultArgs<ExtArgs>
  }
  export type UserOnDMIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dm?: boolean | DirectMessageConversationDefaultArgs<ExtArgs>
  }
  export type UserOnDMIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dm?: boolean | DirectMessageConversationDefaultArgs<ExtArgs>
  }

  export type $UserOnDMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnDM"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dm: Prisma.$DirectMessageConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      dmId: string
      deletedAt: Date | null
    }, ExtArgs["result"]["userOnDM"]>
    composites: {}
  }

  type UserOnDMGetPayload<S extends boolean | null | undefined | UserOnDMDefaultArgs> = $Result.GetResult<Prisma.$UserOnDMPayload, S>

  type UserOnDMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnDMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnDMCountAggregateInputType | true
    }

  export interface UserOnDMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnDM'], meta: { name: 'UserOnDM' } }
    /**
     * Find zero or one UserOnDM that matches the filter.
     * @param {UserOnDMFindUniqueArgs} args - Arguments to find a UserOnDM
     * @example
     * // Get one UserOnDM
     * const userOnDM = await prisma.userOnDM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnDMFindUniqueArgs>(args: SelectSubset<T, UserOnDMFindUniqueArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnDM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnDMFindUniqueOrThrowArgs} args - Arguments to find a UserOnDM
     * @example
     * // Get one UserOnDM
     * const userOnDM = await prisma.userOnDM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnDMFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnDMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnDM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMFindFirstArgs} args - Arguments to find a UserOnDM
     * @example
     * // Get one UserOnDM
     * const userOnDM = await prisma.userOnDM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnDMFindFirstArgs>(args?: SelectSubset<T, UserOnDMFindFirstArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnDM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMFindFirstOrThrowArgs} args - Arguments to find a UserOnDM
     * @example
     * // Get one UserOnDM
     * const userOnDM = await prisma.userOnDM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnDMFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnDMFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnDMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnDMS
     * const userOnDMS = await prisma.userOnDM.findMany()
     * 
     * // Get first 10 UserOnDMS
     * const userOnDMS = await prisma.userOnDM.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnDMWithUserIdOnly = await prisma.userOnDM.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserOnDMFindManyArgs>(args?: SelectSubset<T, UserOnDMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnDM.
     * @param {UserOnDMCreateArgs} args - Arguments to create a UserOnDM.
     * @example
     * // Create one UserOnDM
     * const UserOnDM = await prisma.userOnDM.create({
     *   data: {
     *     // ... data to create a UserOnDM
     *   }
     * })
     * 
     */
    create<T extends UserOnDMCreateArgs>(args: SelectSubset<T, UserOnDMCreateArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnDMS.
     * @param {UserOnDMCreateManyArgs} args - Arguments to create many UserOnDMS.
     * @example
     * // Create many UserOnDMS
     * const userOnDM = await prisma.userOnDM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnDMCreateManyArgs>(args?: SelectSubset<T, UserOnDMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnDMS and returns the data saved in the database.
     * @param {UserOnDMCreateManyAndReturnArgs} args - Arguments to create many UserOnDMS.
     * @example
     * // Create many UserOnDMS
     * const userOnDM = await prisma.userOnDM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnDMS and only return the `userId`
     * const userOnDMWithUserIdOnly = await prisma.userOnDM.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOnDMCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOnDMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOnDM.
     * @param {UserOnDMDeleteArgs} args - Arguments to delete one UserOnDM.
     * @example
     * // Delete one UserOnDM
     * const UserOnDM = await prisma.userOnDM.delete({
     *   where: {
     *     // ... filter to delete one UserOnDM
     *   }
     * })
     * 
     */
    delete<T extends UserOnDMDeleteArgs>(args: SelectSubset<T, UserOnDMDeleteArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnDM.
     * @param {UserOnDMUpdateArgs} args - Arguments to update one UserOnDM.
     * @example
     * // Update one UserOnDM
     * const userOnDM = await prisma.userOnDM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnDMUpdateArgs>(args: SelectSubset<T, UserOnDMUpdateArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnDMS.
     * @param {UserOnDMDeleteManyArgs} args - Arguments to filter UserOnDMS to delete.
     * @example
     * // Delete a few UserOnDMS
     * const { count } = await prisma.userOnDM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnDMDeleteManyArgs>(args?: SelectSubset<T, UserOnDMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnDMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnDMS
     * const userOnDM = await prisma.userOnDM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnDMUpdateManyArgs>(args: SelectSubset<T, UserOnDMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnDMS and returns the data updated in the database.
     * @param {UserOnDMUpdateManyAndReturnArgs} args - Arguments to update many UserOnDMS.
     * @example
     * // Update many UserOnDMS
     * const userOnDM = await prisma.userOnDM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOnDMS and only return the `userId`
     * const userOnDMWithUserIdOnly = await prisma.userOnDM.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserOnDMUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOnDMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOnDM.
     * @param {UserOnDMUpsertArgs} args - Arguments to update or create a UserOnDM.
     * @example
     * // Update or create a UserOnDM
     * const userOnDM = await prisma.userOnDM.upsert({
     *   create: {
     *     // ... data to create a UserOnDM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnDM we want to update
     *   }
     * })
     */
    upsert<T extends UserOnDMUpsertArgs>(args: SelectSubset<T, UserOnDMUpsertArgs<ExtArgs>>): Prisma__UserOnDMClient<$Result.GetResult<Prisma.$UserOnDMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnDMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMCountArgs} args - Arguments to filter UserOnDMS to count.
     * @example
     * // Count the number of UserOnDMS
     * const count = await prisma.userOnDM.count({
     *   where: {
     *     // ... the filter for the UserOnDMS we want to count
     *   }
     * })
    **/
    count<T extends UserOnDMCountArgs>(
      args?: Subset<T, UserOnDMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnDMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnDM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOnDMAggregateArgs>(args: Subset<T, UserOnDMAggregateArgs>): Prisma.PrismaPromise<GetUserOnDMAggregateType<T>>

    /**
     * Group by UserOnDM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnDMGroupByArgs} args - Group by arguments.
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
      T extends UserOnDMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnDMGroupByArgs['orderBy'] }
        : { orderBy?: UserOnDMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOnDMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnDMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnDM model
   */
  readonly fields: UserOnDMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnDM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnDMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dm<T extends DirectMessageConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectMessageConversationDefaultArgs<ExtArgs>>): Prisma__DirectMessageConversationClient<$Result.GetResult<Prisma.$DirectMessageConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserOnDM model
   */
  interface UserOnDMFieldRefs {
    readonly userId: FieldRef<"UserOnDM", 'String'>
    readonly dmId: FieldRef<"UserOnDM", 'String'>
    readonly deletedAt: FieldRef<"UserOnDM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOnDM findUnique
   */
  export type UserOnDMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * Filter, which UserOnDM to fetch.
     */
    where: UserOnDMWhereUniqueInput
  }

  /**
   * UserOnDM findUniqueOrThrow
   */
  export type UserOnDMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * Filter, which UserOnDM to fetch.
     */
    where: UserOnDMWhereUniqueInput
  }

  /**
   * UserOnDM findFirst
   */
  export type UserOnDMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * Filter, which UserOnDM to fetch.
     */
    where?: UserOnDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnDMS to fetch.
     */
    orderBy?: UserOnDMOrderByWithRelationInput | UserOnDMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnDMS.
     */
    cursor?: UserOnDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnDMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnDMS.
     */
    distinct?: UserOnDMScalarFieldEnum | UserOnDMScalarFieldEnum[]
  }

  /**
   * UserOnDM findFirstOrThrow
   */
  export type UserOnDMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * Filter, which UserOnDM to fetch.
     */
    where?: UserOnDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnDMS to fetch.
     */
    orderBy?: UserOnDMOrderByWithRelationInput | UserOnDMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnDMS.
     */
    cursor?: UserOnDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnDMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnDMS.
     */
    distinct?: UserOnDMScalarFieldEnum | UserOnDMScalarFieldEnum[]
  }

  /**
   * UserOnDM findMany
   */
  export type UserOnDMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * Filter, which UserOnDMS to fetch.
     */
    where?: UserOnDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnDMS to fetch.
     */
    orderBy?: UserOnDMOrderByWithRelationInput | UserOnDMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnDMS.
     */
    cursor?: UserOnDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnDMS.
     */
    skip?: number
    distinct?: UserOnDMScalarFieldEnum | UserOnDMScalarFieldEnum[]
  }

  /**
   * UserOnDM create
   */
  export type UserOnDMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnDM.
     */
    data: XOR<UserOnDMCreateInput, UserOnDMUncheckedCreateInput>
  }

  /**
   * UserOnDM createMany
   */
  export type UserOnDMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnDMS.
     */
    data: UserOnDMCreateManyInput | UserOnDMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnDM createManyAndReturn
   */
  export type UserOnDMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * The data used to create many UserOnDMS.
     */
    data: UserOnDMCreateManyInput | UserOnDMCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnDM update
   */
  export type UserOnDMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnDM.
     */
    data: XOR<UserOnDMUpdateInput, UserOnDMUncheckedUpdateInput>
    /**
     * Choose, which UserOnDM to update.
     */
    where: UserOnDMWhereUniqueInput
  }

  /**
   * UserOnDM updateMany
   */
  export type UserOnDMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnDMS.
     */
    data: XOR<UserOnDMUpdateManyMutationInput, UserOnDMUncheckedUpdateManyInput>
    /**
     * Filter which UserOnDMS to update
     */
    where?: UserOnDMWhereInput
    /**
     * Limit how many UserOnDMS to update.
     */
    limit?: number
  }

  /**
   * UserOnDM updateManyAndReturn
   */
  export type UserOnDMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * The data used to update UserOnDMS.
     */
    data: XOR<UserOnDMUpdateManyMutationInput, UserOnDMUncheckedUpdateManyInput>
    /**
     * Filter which UserOnDMS to update
     */
    where?: UserOnDMWhereInput
    /**
     * Limit how many UserOnDMS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnDM upsert
   */
  export type UserOnDMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnDM to update in case it exists.
     */
    where: UserOnDMWhereUniqueInput
    /**
     * In case the UserOnDM found by the `where` argument doesn't exist, create a new UserOnDM with this data.
     */
    create: XOR<UserOnDMCreateInput, UserOnDMUncheckedCreateInput>
    /**
     * In case the UserOnDM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnDMUpdateInput, UserOnDMUncheckedUpdateInput>
  }

  /**
   * UserOnDM delete
   */
  export type UserOnDMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
    /**
     * Filter which UserOnDM to delete.
     */
    where: UserOnDMWhereUniqueInput
  }

  /**
   * UserOnDM deleteMany
   */
  export type UserOnDMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnDMS to delete
     */
    where?: UserOnDMWhereInput
    /**
     * Limit how many UserOnDMS to delete.
     */
    limit?: number
  }

  /**
   * UserOnDM without action
   */
  export type UserOnDMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnDM
     */
    select?: UserOnDMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnDM
     */
    omit?: UserOnDMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnDMInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    googleCalendarEventId: string | null
    googleCalendarHtmlLink: string | null
    channelId: string | null
    organizerId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    location: string | null
    googleCalendarEventId: string | null
    googleCalendarHtmlLink: string | null
    channelId: string | null
    organizerId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    location: number
    googleCalendarEventId: number
    googleCalendarHtmlLink: number
    channelId: number
    organizerId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    location?: true
    googleCalendarEventId?: true
    googleCalendarHtmlLink?: true
    channelId?: true
    organizerId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    location?: true
    googleCalendarEventId?: true
    googleCalendarHtmlLink?: true
    channelId?: true
    organizerId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    location?: true
    googleCalendarEventId?: true
    googleCalendarHtmlLink?: true
    channelId?: true
    organizerId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date
    location: string | null
    googleCalendarEventId: string | null
    googleCalendarHtmlLink: string | null
    channelId: string
    organizerId: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    googleCalendarEventId?: boolean
    googleCalendarHtmlLink?: boolean
    channelId?: boolean
    organizerId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    googleCalendarEventId?: boolean
    googleCalendarHtmlLink?: boolean
    channelId?: boolean
    organizerId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    googleCalendarEventId?: boolean
    googleCalendarHtmlLink?: boolean
    channelId?: boolean
    organizerId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    location?: boolean
    googleCalendarEventId?: boolean
    googleCalendarHtmlLink?: boolean
    channelId?: boolean
    organizerId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "location" | "googleCalendarEventId" | "googleCalendarHtmlLink" | "channelId" | "organizerId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
      organizer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date
      location: string | null
      googleCalendarEventId: string | null
      googleCalendarHtmlLink: string | null
      channelId: string
      organizerId: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
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
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly description: FieldRef<"Meeting", 'String'>
    readonly startTime: FieldRef<"Meeting", 'DateTime'>
    readonly endTime: FieldRef<"Meeting", 'DateTime'>
    readonly location: FieldRef<"Meeting", 'String'>
    readonly googleCalendarEventId: FieldRef<"Meeting", 'String'>
    readonly googleCalendarHtmlLink: FieldRef<"Meeting", 'String'>
    readonly channelId: FieldRef<"Meeting", 'String'>
    readonly organizerId: FieldRef<"Meeting", 'String'>
    readonly deletedAt: FieldRef<"Meeting", 'DateTime'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
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
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpires: 'emailVerificationTokenExpires',
    emailVerificationTokenSentAt: 'emailVerificationTokenSentAt',
    resetPasswordPin: 'resetPasswordPin',
    resetPasswordPinExpires: 'resetPasswordPinExpires',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordPinSentAt: 'resetPasswordPinSentAt',
    failedPinAttempts: 'failedPinAttempts',
    loginOtp: 'loginOtp',
    loginOtpExpires: 'loginOtpExpires',
    loginSessionToken: 'loginSessionToken',
    loginOtpSentAt: 'loginOtpSentAt',
    oauthProvider: 'oauthProvider',
    oauthId: 'oauthId',
    emailVerified: 'emailVerified',
    lastLoginAt: 'lastLoginAt',
    googleAccessToken: 'googleAccessToken',
    googleRefreshToken: 'googleRefreshToken',
    googleCalendarId: 'googleCalendarId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    slug: 'slug',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const UserOnWorkspaceScalarFieldEnum: {
    userId: 'userId',
    workspaceId: 'workspaceId',
    role: 'role',
    joinedAt: 'joinedAt',
    deletedAt: 'deletedAt'
  };

  export type UserOnWorkspaceScalarFieldEnum = (typeof UserOnWorkspaceScalarFieldEnum)[keyof typeof UserOnWorkspaceScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    status: 'status',
    role: 'role',
    deletedAt: 'deletedAt',
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
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const UserOnChannelScalarFieldEnum: {
    userId: 'userId',
    channelId: 'channelId',
    role: 'role',
    joinedAt: 'joinedAt',
    deletedAt: 'deletedAt'
  };

  export type UserOnChannelScalarFieldEnum = (typeof UserOnChannelScalarFieldEnum)[keyof typeof UserOnChannelScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isEdited: 'isEdited',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    channelId: 'channelId',
    conversationId: 'conversationId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const DirectMessageConversationScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectMessageConversationScalarFieldEnum = (typeof DirectMessageConversationScalarFieldEnum)[keyof typeof DirectMessageConversationScalarFieldEnum]


  export const UserOnDMScalarFieldEnum: {
    userId: 'userId',
    dmId: 'dmId',
    deletedAt: 'deletedAt'
  };

  export type UserOnDMScalarFieldEnum = (typeof UserOnDMScalarFieldEnum)[keyof typeof UserOnDMScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    location: 'location',
    googleCalendarEventId: 'googleCalendarEventId',
    googleCalendarHtmlLink: 'googleCalendarHtmlLink',
    channelId: 'channelId',
    organizerId: 'organizerId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'ChannelRole'
   */
  export type EnumChannelRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelRole'>
    


  /**
   * Reference to a field of type 'ChannelRole[]'
   */
  export type ListEnumChannelRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelRole[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerificationTokenSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordPin?: StringNullableFilter<"User"> | string | null
    resetPasswordPinExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordPinSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    failedPinAttempts?: IntNullableFilter<"User"> | number | null
    loginOtp?: StringNullableFilter<"User"> | string | null
    loginOtpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    loginSessionToken?: StringNullableFilter<"User"> | string | null
    loginOtpSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleCalendarId?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: UserOnWorkspaceListRelationFilter
    ownedWorkspaces?: WorkspaceListRelationFilter
    ownedChannels?: ChannelListRelationFilter
    InviteSent?: InviteListRelationFilter
    Channels?: UserOnChannelListRelationFilter
    Message?: MessageListRelationFilter
    UserOnDM?: UserOnDMListRelationFilter
    Meeting?: MeetingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    emailVerificationTokenSentAt?: SortOrderInput | SortOrder
    resetPasswordPin?: SortOrderInput | SortOrder
    resetPasswordPinExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordPinSentAt?: SortOrderInput | SortOrder
    failedPinAttempts?: SortOrderInput | SortOrder
    loginOtp?: SortOrderInput | SortOrder
    loginOtpExpires?: SortOrderInput | SortOrder
    loginSessionToken?: SortOrderInput | SortOrder
    loginOtpSentAt?: SortOrderInput | SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    googleAccessToken?: SortOrderInput | SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    googleCalendarId?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaces?: UserOnWorkspaceOrderByRelationAggregateInput
    ownedWorkspaces?: WorkspaceOrderByRelationAggregateInput
    ownedChannels?: ChannelOrderByRelationAggregateInput
    InviteSent?: InviteOrderByRelationAggregateInput
    Channels?: UserOnChannelOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
    UserOnDM?: UserOnDMOrderByRelationAggregateInput
    Meeting?: MeetingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    oauth_unique?: UserOauth_uniqueCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerificationTokenSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordPin?: StringNullableFilter<"User"> | string | null
    resetPasswordPinExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordPinSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    failedPinAttempts?: IntNullableFilter<"User"> | number | null
    loginOtp?: StringNullableFilter<"User"> | string | null
    loginOtpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    loginSessionToken?: StringNullableFilter<"User"> | string | null
    loginOtpSentAt?: DateTimeNullableFilter<"User"> | Date | string | null
    oauthProvider?: StringNullableFilter<"User"> | string | null
    oauthId?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleCalendarId?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: UserOnWorkspaceListRelationFilter
    ownedWorkspaces?: WorkspaceListRelationFilter
    ownedChannels?: ChannelListRelationFilter
    InviteSent?: InviteListRelationFilter
    Channels?: UserOnChannelListRelationFilter
    Message?: MessageListRelationFilter
    UserOnDM?: UserOnDMListRelationFilter
    Meeting?: MeetingListRelationFilter
  }, "id" | "email" | "oauth_unique">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    emailVerificationTokenSentAt?: SortOrderInput | SortOrder
    resetPasswordPin?: SortOrderInput | SortOrder
    resetPasswordPinExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordPinSentAt?: SortOrderInput | SortOrder
    failedPinAttempts?: SortOrderInput | SortOrder
    loginOtp?: SortOrderInput | SortOrder
    loginOtpExpires?: SortOrderInput | SortOrder
    loginSessionToken?: SortOrderInput | SortOrder
    loginOtpSentAt?: SortOrderInput | SortOrder
    oauthProvider?: SortOrderInput | SortOrder
    oauthId?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    googleAccessToken?: SortOrderInput | SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    googleCalendarId?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerificationTokenSentAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordPin?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordPinExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordPinSentAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    failedPinAttempts?: IntNullableWithAggregatesFilter<"User"> | number | null
    loginOtp?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginOtpExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    loginSessionToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginOtpSentAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    oauthProvider?: StringNullableWithAggregatesFilter<"User"> | string | null
    oauthId?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    googleAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleCalendarId?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
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
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    ownerId?: StringFilter<"Workspace"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserOnWorkspaceListRelationFilter
    Invite?: InviteListRelationFilter
    Channel?: ChannelListRelationFilter
    DirectMessageConversation?: DirectMessageConversationListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: UserOnWorkspaceOrderByRelationAggregateInput
    Invite?: InviteOrderByRelationAggregateInput
    Channel?: ChannelOrderByRelationAggregateInput
    DirectMessageConversation?: DirectMessageConversationOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_deletedAt?: WorkspaceSlugDeletedAtCompoundUniqueInput
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    description?: StringNullableFilter<"Workspace"> | string | null
    slug?: StringFilter<"Workspace"> | string
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    ownerId?: StringFilter<"Workspace"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserOnWorkspaceListRelationFilter
    Invite?: InviteListRelationFilter
    Channel?: ChannelListRelationFilter
    DirectMessageConversation?: DirectMessageConversationListRelationFilter
  }, "id" | "slug_deletedAt">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
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
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Workspace"> | Date | string | null
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
    deletedAt?: DateTimeNullableFilter<"UserOnWorkspace"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type UserOnWorkspaceOrderByWithRelationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
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
    deletedAt?: DateTimeNullableFilter<"UserOnWorkspace"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "userId_workspaceId">

  export type UserOnWorkspaceOrderByWithAggregationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
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
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserOnWorkspace"> | Date | string | null
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
    deletedAt?: DateTimeNullableFilter<"Invite"> | Date | string | null
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
    deletedAt?: SortOrderInput | SortOrder
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
    deletedAt?: DateTimeNullableFilter<"Invite"> | Date | string | null
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
    deletedAt?: SortOrderInput | SortOrder
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
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Invite"> | Date | string | null
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
    deletedAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    ownerId?: StringFilter<"Channel"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    UserOnChannels?: UserOnChannelListRelationFilter
    Message?: MessageListRelationFilter
    Meeting?: MeetingListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    UserOnChannels?: UserOnChannelOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
    Meeting?: MeetingOrderByRelationAggregateInput
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
    deletedAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    ownerId?: StringFilter<"Channel"> | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    UserOnChannels?: UserOnChannelListRelationFilter
    Message?: MessageListRelationFilter
    Meeting?: MeetingListRelationFilter
  }, "id">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
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
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Channel"> | string
  }

  export type UserOnChannelWhereInput = {
    AND?: UserOnChannelWhereInput | UserOnChannelWhereInput[]
    OR?: UserOnChannelWhereInput[]
    NOT?: UserOnChannelWhereInput | UserOnChannelWhereInput[]
    userId?: StringFilter<"UserOnChannel"> | string
    channelId?: StringFilter<"UserOnChannel"> | string
    role?: EnumChannelRoleFilter<"UserOnChannel"> | $Enums.ChannelRole
    joinedAt?: DateTimeFilter<"UserOnChannel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserOnChannel"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type UserOnChannelOrderByWithRelationInput = {
    userId?: SortOrder
    channelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type UserOnChannelWhereUniqueInput = Prisma.AtLeast<{
    userId_channelId?: UserOnChannelUserIdChannelIdCompoundUniqueInput
    AND?: UserOnChannelWhereInput | UserOnChannelWhereInput[]
    OR?: UserOnChannelWhereInput[]
    NOT?: UserOnChannelWhereInput | UserOnChannelWhereInput[]
    userId?: StringFilter<"UserOnChannel"> | string
    channelId?: StringFilter<"UserOnChannel"> | string
    role?: EnumChannelRoleFilter<"UserOnChannel"> | $Enums.ChannelRole
    joinedAt?: DateTimeFilter<"UserOnChannel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserOnChannel"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "userId_channelId">

  export type UserOnChannelOrderByWithAggregationInput = {
    userId?: SortOrder
    channelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserOnChannelCountOrderByAggregateInput
    _max?: UserOnChannelMaxOrderByAggregateInput
    _min?: UserOnChannelMinOrderByAggregateInput
  }

  export type UserOnChannelScalarWhereWithAggregatesInput = {
    AND?: UserOnChannelScalarWhereWithAggregatesInput | UserOnChannelScalarWhereWithAggregatesInput[]
    OR?: UserOnChannelScalarWhereWithAggregatesInput[]
    NOT?: UserOnChannelScalarWhereWithAggregatesInput | UserOnChannelScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserOnChannel"> | string
    channelId?: StringWithAggregatesFilter<"UserOnChannel"> | string
    role?: EnumChannelRoleWithAggregatesFilter<"UserOnChannel"> | $Enums.ChannelRole
    joinedAt?: DateTimeWithAggregatesFilter<"UserOnChannel"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserOnChannel"> | Date | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    isEdited?: BoolFilter<"Message"> | boolean
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    channelId?: StringNullableFilter<"Message"> | string | null
    conversationId?: StringNullableFilter<"Message"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelNullableScalarRelationFilter, ChannelWhereInput> | null
    DirectMessageConversation?: XOR<DirectMessageConversationNullableScalarRelationFilter, DirectMessageConversationWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isEdited?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrderInput | SortOrder
    conversationId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
    DirectMessageConversation?: DirectMessageConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    isEdited?: BoolFilter<"Message"> | boolean
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    channelId?: StringNullableFilter<"Message"> | string | null
    conversationId?: StringNullableFilter<"Message"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelNullableScalarRelationFilter, ChannelWhereInput> | null
    DirectMessageConversation?: XOR<DirectMessageConversationNullableScalarRelationFilter, DirectMessageConversationWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isEdited?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrderInput | SortOrder
    conversationId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    isEdited?: BoolWithAggregatesFilter<"Message"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    channelId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    conversationId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type DirectMessageConversationWhereInput = {
    AND?: DirectMessageConversationWhereInput | DirectMessageConversationWhereInput[]
    OR?: DirectMessageConversationWhereInput[]
    NOT?: DirectMessageConversationWhereInput | DirectMessageConversationWhereInput[]
    id?: StringFilter<"DirectMessageConversation"> | string
    workspaceId?: StringFilter<"DirectMessageConversation"> | string
    deletedAt?: DateTimeNullableFilter<"DirectMessageConversation"> | Date | string | null
    createdAt?: DateTimeFilter<"DirectMessageConversation"> | Date | string
    updatedAt?: DateTimeFilter<"DirectMessageConversation"> | Date | string
    participants?: UserOnDMListRelationFilter
    messages?: MessageListRelationFilter
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type DirectMessageConversationOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participants?: UserOnDMOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type DirectMessageConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectMessageConversationWhereInput | DirectMessageConversationWhereInput[]
    OR?: DirectMessageConversationWhereInput[]
    NOT?: DirectMessageConversationWhereInput | DirectMessageConversationWhereInput[]
    workspaceId?: StringFilter<"DirectMessageConversation"> | string
    deletedAt?: DateTimeNullableFilter<"DirectMessageConversation"> | Date | string | null
    createdAt?: DateTimeFilter<"DirectMessageConversation"> | Date | string
    updatedAt?: DateTimeFilter<"DirectMessageConversation"> | Date | string
    participants?: UserOnDMListRelationFilter
    messages?: MessageListRelationFilter
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type DirectMessageConversationOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectMessageConversationCountOrderByAggregateInput
    _max?: DirectMessageConversationMaxOrderByAggregateInput
    _min?: DirectMessageConversationMinOrderByAggregateInput
  }

  export type DirectMessageConversationScalarWhereWithAggregatesInput = {
    AND?: DirectMessageConversationScalarWhereWithAggregatesInput | DirectMessageConversationScalarWhereWithAggregatesInput[]
    OR?: DirectMessageConversationScalarWhereWithAggregatesInput[]
    NOT?: DirectMessageConversationScalarWhereWithAggregatesInput | DirectMessageConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectMessageConversation"> | string
    workspaceId?: StringWithAggregatesFilter<"DirectMessageConversation"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DirectMessageConversation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DirectMessageConversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DirectMessageConversation"> | Date | string
  }

  export type UserOnDMWhereInput = {
    AND?: UserOnDMWhereInput | UserOnDMWhereInput[]
    OR?: UserOnDMWhereInput[]
    NOT?: UserOnDMWhereInput | UserOnDMWhereInput[]
    userId?: StringFilter<"UserOnDM"> | string
    dmId?: StringFilter<"UserOnDM"> | string
    deletedAt?: DateTimeNullableFilter<"UserOnDM"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dm?: XOR<DirectMessageConversationScalarRelationFilter, DirectMessageConversationWhereInput>
  }

  export type UserOnDMOrderByWithRelationInput = {
    userId?: SortOrder
    dmId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    dm?: DirectMessageConversationOrderByWithRelationInput
  }

  export type UserOnDMWhereUniqueInput = Prisma.AtLeast<{
    userId_dmId?: UserOnDMUserIdDmIdCompoundUniqueInput
    AND?: UserOnDMWhereInput | UserOnDMWhereInput[]
    OR?: UserOnDMWhereInput[]
    NOT?: UserOnDMWhereInput | UserOnDMWhereInput[]
    userId?: StringFilter<"UserOnDM"> | string
    dmId?: StringFilter<"UserOnDM"> | string
    deletedAt?: DateTimeNullableFilter<"UserOnDM"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dm?: XOR<DirectMessageConversationScalarRelationFilter, DirectMessageConversationWhereInput>
  }, "userId_dmId">

  export type UserOnDMOrderByWithAggregationInput = {
    userId?: SortOrder
    dmId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserOnDMCountOrderByAggregateInput
    _max?: UserOnDMMaxOrderByAggregateInput
    _min?: UserOnDMMinOrderByAggregateInput
  }

  export type UserOnDMScalarWhereWithAggregatesInput = {
    AND?: UserOnDMScalarWhereWithAggregatesInput | UserOnDMScalarWhereWithAggregatesInput[]
    OR?: UserOnDMScalarWhereWithAggregatesInput[]
    NOT?: UserOnDMScalarWhereWithAggregatesInput | UserOnDMScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserOnDM"> | string
    dmId?: StringWithAggregatesFilter<"UserOnDM"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserOnDM"> | Date | string | null
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    location?: StringNullableFilter<"Meeting"> | string | null
    googleCalendarEventId?: StringNullableFilter<"Meeting"> | string | null
    googleCalendarHtmlLink?: StringNullableFilter<"Meeting"> | string | null
    channelId?: StringFilter<"Meeting"> | string
    organizerId?: StringFilter<"Meeting"> | string
    deletedAt?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    googleCalendarEventId?: SortOrderInput | SortOrder
    googleCalendarHtmlLink?: SortOrderInput | SortOrder
    channelId?: SortOrder
    organizerId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
    organizer?: UserOrderByWithRelationInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleCalendarEventId?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    location?: StringNullableFilter<"Meeting"> | string | null
    googleCalendarHtmlLink?: StringNullableFilter<"Meeting"> | string | null
    channelId?: StringFilter<"Meeting"> | string
    organizerId?: StringFilter<"Meeting"> | string
    deletedAt?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "googleCalendarEventId">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrderInput | SortOrder
    googleCalendarEventId?: SortOrderInput | SortOrder
    googleCalendarHtmlLink?: SortOrderInput | SortOrder
    channelId?: SortOrder
    organizerId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    title?: StringWithAggregatesFilter<"Meeting"> | string
    description?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    googleCalendarEventId?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    googleCalendarHtmlLink?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    channelId?: StringWithAggregatesFilter<"Meeting"> | string
    organizerId?: StringWithAggregatesFilter<"Meeting"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Meeting"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnWorkspaceCreateInput = {
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutWorkspacesInput
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
  }

  export type UserOnWorkspaceUncheckedCreateInput = {
    userId: string
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserOnWorkspaceUpdateInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserOnWorkspaceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnWorkspaceCreateManyInput = {
    userId: string
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserOnWorkspaceUpdateManyMutationInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnWorkspaceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
    owner: UserCreateNestedOneWithoutOwnedChannelsInput
    UserOnChannels?: UserOnChannelCreateNestedManyWithoutChannelInput
    Message?: MessageCreateNestedManyWithoutChannelInput
    Meeting?: MeetingCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    UserOnChannels?: UserOnChannelUncheckedCreateNestedManyWithoutChannelInput
    Message?: MessageUncheckedCreateNestedManyWithoutChannelInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedChannelsNestedInput
    UserOnChannels?: UserOnChannelUpdateManyWithoutChannelNestedInput
    Message?: MessageUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    UserOnChannels?: UserOnChannelUncheckedUpdateManyWithoutChannelNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnChannelCreateInput = {
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutChannelsInput
    channel: ChannelCreateNestedOneWithoutUserOnChannelsInput
  }

  export type UserOnChannelUncheckedCreateInput = {
    userId: string
    channelId: string
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserOnChannelUpdateInput = {
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutUserOnChannelsNestedInput
  }

  export type UserOnChannelUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnChannelCreateManyInput = {
    userId: string
    channelId: string
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserOnChannelUpdateManyMutationInput = {
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnChannelUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessageInput
    channel?: ChannelCreateNestedOneWithoutMessageInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    channelId?: string | null
    conversationId?: string | null
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessageNestedInput
    channel?: ChannelUpdateOneWithoutMessageNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    channelId?: string | null
    conversationId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectMessageConversationCreateInput = {
    id?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserOnDMCreateNestedManyWithoutDmInput
    messages?: MessageCreateNestedManyWithoutDirectMessageConversationInput
    workspace: WorkspaceCreateNestedOneWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationUncheckedCreateInput = {
    id?: string
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserOnDMUncheckedCreateNestedManyWithoutDmInput
    messages?: MessageUncheckedCreateNestedManyWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserOnDMUpdateManyWithoutDmNestedInput
    messages?: MessageUpdateManyWithoutDirectMessageConversationNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutDirectMessageConversationNestedInput
  }

  export type DirectMessageConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserOnDMUncheckedUpdateManyWithoutDmNestedInput
    messages?: MessageUncheckedUpdateManyWithoutDirectMessageConversationNestedInput
  }

  export type DirectMessageConversationCreateManyInput = {
    id?: string
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnDMCreateInput = {
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserOnDMInput
    dm: DirectMessageConversationCreateNestedOneWithoutParticipantsInput
  }

  export type UserOnDMUncheckedCreateInput = {
    userId: string
    dmId: string
    deletedAt?: Date | string | null
  }

  export type UserOnDMUpdateInput = {
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserOnDMNestedInput
    dm?: DirectMessageConversationUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type UserOnDMUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    dmId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnDMCreateManyInput = {
    userId: string
    dmId: string
    deletedAt?: Date | string | null
  }

  export type UserOnDMUpdateManyMutationInput = {
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnDMUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    dmId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MeetingCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMeetingInput
    organizer: UserCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    channelId: string
    organizerId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMeetingNestedInput
    organizer?: UserUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    channelId: string
    organizerId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type UserOnChannelListRelationFilter = {
    every?: UserOnChannelWhereInput
    some?: UserOnChannelWhereInput
    none?: UserOnChannelWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type UserOnDMListRelationFilter = {
    every?: UserOnDMWhereInput
    some?: UserOnDMWhereInput
    none?: UserOnDMWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
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

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnDMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOauth_uniqueCompoundUniqueInput = {
    oauthProvider: string
    oauthId: string
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
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    emailVerificationTokenSentAt?: SortOrder
    resetPasswordPin?: SortOrder
    resetPasswordPinExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordPinSentAt?: SortOrder
    failedPinAttempts?: SortOrder
    loginOtp?: SortOrder
    loginOtpExpires?: SortOrder
    loginSessionToken?: SortOrder
    loginOtpSentAt?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleCalendarId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    failedPinAttempts?: SortOrder
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
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    emailVerificationTokenSentAt?: SortOrder
    resetPasswordPin?: SortOrder
    resetPasswordPinExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordPinSentAt?: SortOrder
    failedPinAttempts?: SortOrder
    loginOtp?: SortOrder
    loginOtpExpires?: SortOrder
    loginSessionToken?: SortOrder
    loginOtpSentAt?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleCalendarId?: SortOrder
    deletedAt?: SortOrder
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
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    emailVerificationTokenSentAt?: SortOrder
    resetPasswordPin?: SortOrder
    resetPasswordPinExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordPinSentAt?: SortOrder
    failedPinAttempts?: SortOrder
    loginOtp?: SortOrder
    loginOtpExpires?: SortOrder
    loginSessionToken?: SortOrder
    loginOtpSentAt?: SortOrder
    oauthProvider?: SortOrder
    oauthId?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleCalendarId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    failedPinAttempts?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DirectMessageConversationListRelationFilter = {
    every?: DirectMessageConversationWhereInput
    some?: DirectMessageConversationWhereInput
    none?: DirectMessageConversationWhereInput
  }

  export type DirectMessageConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceSlugDeletedAtCompoundUniqueInput = {
    slug: string
    deletedAt: Date | string
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    deletedAt?: SortOrder
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
    deletedAt?: SortOrder
  }

  export type UserOnWorkspaceMaxOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserOnWorkspaceMinOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrder
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
    deletedAt?: SortOrder
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
    deletedAt?: SortOrder
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
    deletedAt?: SortOrder
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
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumChannelRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRole | EnumChannelRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRoleFilter<$PrismaModel> | $Enums.ChannelRole
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type UserOnChannelUserIdChannelIdCompoundUniqueInput = {
    userId: string
    channelId: string
  }

  export type UserOnChannelCountOrderByAggregateInput = {
    userId?: SortOrder
    channelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserOnChannelMaxOrderByAggregateInput = {
    userId?: SortOrder
    channelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserOnChannelMinOrderByAggregateInput = {
    userId?: SortOrder
    channelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumChannelRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRole | EnumChannelRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChannelRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelRoleFilter<$PrismaModel>
    _max?: NestedEnumChannelRoleFilter<$PrismaModel>
  }

  export type ChannelNullableScalarRelationFilter = {
    is?: ChannelWhereInput | null
    isNot?: ChannelWhereInput | null
  }

  export type DirectMessageConversationNullableScalarRelationFilter = {
    is?: DirectMessageConversationWhereInput | null
    isNot?: DirectMessageConversationWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isEdited?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isEdited?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isEdited?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    conversationId?: SortOrder
  }

  export type DirectMessageConversationCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageConversationMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageConversationScalarRelationFilter = {
    is?: DirectMessageConversationWhereInput
    isNot?: DirectMessageConversationWhereInput
  }

  export type UserOnDMUserIdDmIdCompoundUniqueInput = {
    userId: string
    dmId: string
  }

  export type UserOnDMCountOrderByAggregateInput = {
    userId?: SortOrder
    dmId?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserOnDMMaxOrderByAggregateInput = {
    userId?: SortOrder
    dmId?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserOnDMMinOrderByAggregateInput = {
    userId?: SortOrder
    dmId?: SortOrder
    deletedAt?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    googleCalendarEventId?: SortOrder
    googleCalendarHtmlLink?: SortOrder
    channelId?: SortOrder
    organizerId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    googleCalendarEventId?: SortOrder
    googleCalendarHtmlLink?: SortOrder
    channelId?: SortOrder
    organizerId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    location?: SortOrder
    googleCalendarEventId?: SortOrder
    googleCalendarHtmlLink?: SortOrder
    channelId?: SortOrder
    organizerId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ChannelCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChannelCreateWithoutOwnerInput, ChannelUncheckedCreateWithoutOwnerInput> | ChannelCreateWithoutOwnerInput[] | ChannelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutOwnerInput | ChannelCreateOrConnectWithoutOwnerInput[]
    createMany?: ChannelCreateManyOwnerInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput> | InviteCreateWithoutInvitedByInput[] | InviteUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInvitedByInput | InviteCreateOrConnectWithoutInvitedByInput[]
    createMany?: InviteCreateManyInvitedByInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserOnChannelCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnChannelCreateWithoutUserInput, UserOnChannelUncheckedCreateWithoutUserInput> | UserOnChannelCreateWithoutUserInput[] | UserOnChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutUserInput | UserOnChannelCreateOrConnectWithoutUserInput[]
    createMany?: UserOnChannelCreateManyUserInputEnvelope
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserOnDMCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnDMCreateWithoutUserInput, UserOnDMUncheckedCreateWithoutUserInput> | UserOnDMCreateWithoutUserInput[] | UserOnDMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutUserInput | UserOnDMCreateOrConnectWithoutUserInput[]
    createMany?: UserOnDMCreateManyUserInputEnvelope
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<MeetingCreateWithoutOrganizerInput, MeetingUncheckedCreateWithoutOrganizerInput> | MeetingCreateWithoutOrganizerInput[] | MeetingUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrganizerInput | MeetingCreateOrConnectWithoutOrganizerInput[]
    createMany?: MeetingCreateManyOrganizerInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
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

  export type ChannelUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChannelCreateWithoutOwnerInput, ChannelUncheckedCreateWithoutOwnerInput> | ChannelCreateWithoutOwnerInput[] | ChannelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutOwnerInput | ChannelCreateOrConnectWithoutOwnerInput[]
    createMany?: ChannelCreateManyOwnerInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InviteCreateWithoutInvitedByInput, InviteUncheckedCreateWithoutInvitedByInput> | InviteCreateWithoutInvitedByInput[] | InviteUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInvitedByInput | InviteCreateOrConnectWithoutInvitedByInput[]
    createMany?: InviteCreateManyInvitedByInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserOnChannelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnChannelCreateWithoutUserInput, UserOnChannelUncheckedCreateWithoutUserInput> | UserOnChannelCreateWithoutUserInput[] | UserOnChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutUserInput | UserOnChannelCreateOrConnectWithoutUserInput[]
    createMany?: UserOnChannelCreateManyUserInputEnvelope
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserOnDMUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnDMCreateWithoutUserInput, UserOnDMUncheckedCreateWithoutUserInput> | UserOnDMCreateWithoutUserInput[] | UserOnDMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutUserInput | UserOnDMCreateOrConnectWithoutUserInput[]
    createMany?: UserOnDMCreateManyUserInputEnvelope
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<MeetingCreateWithoutOrganizerInput, MeetingUncheckedCreateWithoutOrganizerInput> | MeetingCreateWithoutOrganizerInput[] | MeetingUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrganizerInput | MeetingCreateOrConnectWithoutOrganizerInput[]
    createMany?: MeetingCreateManyOrganizerInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ChannelUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChannelCreateWithoutOwnerInput, ChannelUncheckedCreateWithoutOwnerInput> | ChannelCreateWithoutOwnerInput[] | ChannelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutOwnerInput | ChannelCreateOrConnectWithoutOwnerInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutOwnerInput | ChannelUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChannelCreateManyOwnerInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutOwnerInput | ChannelUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutOwnerInput | ChannelUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
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

  export type UserOnChannelUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnChannelCreateWithoutUserInput, UserOnChannelUncheckedCreateWithoutUserInput> | UserOnChannelCreateWithoutUserInput[] | UserOnChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutUserInput | UserOnChannelCreateOrConnectWithoutUserInput[]
    upsert?: UserOnChannelUpsertWithWhereUniqueWithoutUserInput | UserOnChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnChannelCreateManyUserInputEnvelope
    set?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    disconnect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    delete?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    update?: UserOnChannelUpdateWithWhereUniqueWithoutUserInput | UserOnChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnChannelUpdateManyWithWhereWithoutUserInput | UserOnChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnChannelScalarWhereInput | UserOnChannelScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserOnDMUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnDMCreateWithoutUserInput, UserOnDMUncheckedCreateWithoutUserInput> | UserOnDMCreateWithoutUserInput[] | UserOnDMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutUserInput | UserOnDMCreateOrConnectWithoutUserInput[]
    upsert?: UserOnDMUpsertWithWhereUniqueWithoutUserInput | UserOnDMUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnDMCreateManyUserInputEnvelope
    set?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    disconnect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    delete?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    update?: UserOnDMUpdateWithWhereUniqueWithoutUserInput | UserOnDMUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnDMUpdateManyWithWhereWithoutUserInput | UserOnDMUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnDMScalarWhereInput | UserOnDMScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<MeetingCreateWithoutOrganizerInput, MeetingUncheckedCreateWithoutOrganizerInput> | MeetingCreateWithoutOrganizerInput[] | MeetingUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrganizerInput | MeetingCreateOrConnectWithoutOrganizerInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutOrganizerInput | MeetingUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: MeetingCreateManyOrganizerInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutOrganizerInput | MeetingUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutOrganizerInput | MeetingUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
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

  export type ChannelUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChannelCreateWithoutOwnerInput, ChannelUncheckedCreateWithoutOwnerInput> | ChannelCreateWithoutOwnerInput[] | ChannelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutOwnerInput | ChannelCreateOrConnectWithoutOwnerInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutOwnerInput | ChannelUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChannelCreateManyOwnerInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutOwnerInput | ChannelUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutOwnerInput | ChannelUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
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

  export type UserOnChannelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnChannelCreateWithoutUserInput, UserOnChannelUncheckedCreateWithoutUserInput> | UserOnChannelCreateWithoutUserInput[] | UserOnChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutUserInput | UserOnChannelCreateOrConnectWithoutUserInput[]
    upsert?: UserOnChannelUpsertWithWhereUniqueWithoutUserInput | UserOnChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnChannelCreateManyUserInputEnvelope
    set?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    disconnect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    delete?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    update?: UserOnChannelUpdateWithWhereUniqueWithoutUserInput | UserOnChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnChannelUpdateManyWithWhereWithoutUserInput | UserOnChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnChannelScalarWhereInput | UserOnChannelScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserOnDMUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnDMCreateWithoutUserInput, UserOnDMUncheckedCreateWithoutUserInput> | UserOnDMCreateWithoutUserInput[] | UserOnDMUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutUserInput | UserOnDMCreateOrConnectWithoutUserInput[]
    upsert?: UserOnDMUpsertWithWhereUniqueWithoutUserInput | UserOnDMUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnDMCreateManyUserInputEnvelope
    set?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    disconnect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    delete?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    update?: UserOnDMUpdateWithWhereUniqueWithoutUserInput | UserOnDMUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnDMUpdateManyWithWhereWithoutUserInput | UserOnDMUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnDMScalarWhereInput | UserOnDMScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<MeetingCreateWithoutOrganizerInput, MeetingUncheckedCreateWithoutOrganizerInput> | MeetingCreateWithoutOrganizerInput[] | MeetingUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOrganizerInput | MeetingCreateOrConnectWithoutOrganizerInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutOrganizerInput | MeetingUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: MeetingCreateManyOrganizerInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutOrganizerInput | MeetingUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutOrganizerInput | MeetingUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
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

  export type DirectMessageConversationCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<DirectMessageConversationCreateWithoutWorkspaceInput, DirectMessageConversationUncheckedCreateWithoutWorkspaceInput> | DirectMessageConversationCreateWithoutWorkspaceInput[] | DirectMessageConversationUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutWorkspaceInput | DirectMessageConversationCreateOrConnectWithoutWorkspaceInput[]
    createMany?: DirectMessageConversationCreateManyWorkspaceInputEnvelope
    connect?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
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

  export type DirectMessageConversationUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<DirectMessageConversationCreateWithoutWorkspaceInput, DirectMessageConversationUncheckedCreateWithoutWorkspaceInput> | DirectMessageConversationCreateWithoutWorkspaceInput[] | DirectMessageConversationUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutWorkspaceInput | DirectMessageConversationCreateOrConnectWithoutWorkspaceInput[]
    createMany?: DirectMessageConversationCreateManyWorkspaceInputEnvelope
    connect?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
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

  export type DirectMessageConversationUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<DirectMessageConversationCreateWithoutWorkspaceInput, DirectMessageConversationUncheckedCreateWithoutWorkspaceInput> | DirectMessageConversationCreateWithoutWorkspaceInput[] | DirectMessageConversationUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutWorkspaceInput | DirectMessageConversationCreateOrConnectWithoutWorkspaceInput[]
    upsert?: DirectMessageConversationUpsertWithWhereUniqueWithoutWorkspaceInput | DirectMessageConversationUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: DirectMessageConversationCreateManyWorkspaceInputEnvelope
    set?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    disconnect?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    delete?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    connect?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    update?: DirectMessageConversationUpdateWithWhereUniqueWithoutWorkspaceInput | DirectMessageConversationUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: DirectMessageConversationUpdateManyWithWhereWithoutWorkspaceInput | DirectMessageConversationUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: DirectMessageConversationScalarWhereInput | DirectMessageConversationScalarWhereInput[]
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

  export type DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<DirectMessageConversationCreateWithoutWorkspaceInput, DirectMessageConversationUncheckedCreateWithoutWorkspaceInput> | DirectMessageConversationCreateWithoutWorkspaceInput[] | DirectMessageConversationUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutWorkspaceInput | DirectMessageConversationCreateOrConnectWithoutWorkspaceInput[]
    upsert?: DirectMessageConversationUpsertWithWhereUniqueWithoutWorkspaceInput | DirectMessageConversationUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: DirectMessageConversationCreateManyWorkspaceInputEnvelope
    set?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    disconnect?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    delete?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    connect?: DirectMessageConversationWhereUniqueInput | DirectMessageConversationWhereUniqueInput[]
    update?: DirectMessageConversationUpdateWithWhereUniqueWithoutWorkspaceInput | DirectMessageConversationUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: DirectMessageConversationUpdateManyWithWhereWithoutWorkspaceInput | DirectMessageConversationUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: DirectMessageConversationScalarWhereInput | DirectMessageConversationScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutOwnedChannelsInput = {
    create?: XOR<UserCreateWithoutOwnedChannelsInput, UserUncheckedCreateWithoutOwnedChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type UserOnChannelCreateNestedManyWithoutChannelInput = {
    create?: XOR<UserOnChannelCreateWithoutChannelInput, UserOnChannelUncheckedCreateWithoutChannelInput> | UserOnChannelCreateWithoutChannelInput[] | UserOnChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutChannelInput | UserOnChannelCreateOrConnectWithoutChannelInput[]
    createMany?: UserOnChannelCreateManyChannelInputEnvelope
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutChannelInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutChannelInput = {
    create?: XOR<MeetingCreateWithoutChannelInput, MeetingUncheckedCreateWithoutChannelInput> | MeetingCreateWithoutChannelInput[] | MeetingUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutChannelInput | MeetingCreateOrConnectWithoutChannelInput[]
    createMany?: MeetingCreateManyChannelInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type UserOnChannelUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<UserOnChannelCreateWithoutChannelInput, UserOnChannelUncheckedCreateWithoutChannelInput> | UserOnChannelCreateWithoutChannelInput[] | UserOnChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutChannelInput | UserOnChannelCreateOrConnectWithoutChannelInput[]
    createMany?: UserOnChannelCreateManyChannelInputEnvelope
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<MeetingCreateWithoutChannelInput, MeetingUncheckedCreateWithoutChannelInput> | MeetingCreateWithoutChannelInput[] | MeetingUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutChannelInput | MeetingCreateOrConnectWithoutChannelInput[]
    createMany?: MeetingCreateManyChannelInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutChannelNestedInput = {
    create?: XOR<WorkspaceCreateWithoutChannelInput, WorkspaceUncheckedCreateWithoutChannelInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutChannelInput
    upsert?: WorkspaceUpsertWithoutChannelInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutChannelInput, WorkspaceUpdateWithoutChannelInput>, WorkspaceUncheckedUpdateWithoutChannelInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedChannelsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedChannelsInput, UserUncheckedCreateWithoutOwnedChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedChannelsInput
    upsert?: UserUpsertWithoutOwnedChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedChannelsInput, UserUpdateWithoutOwnedChannelsInput>, UserUncheckedUpdateWithoutOwnedChannelsInput>
  }

  export type UserOnChannelUpdateManyWithoutChannelNestedInput = {
    create?: XOR<UserOnChannelCreateWithoutChannelInput, UserOnChannelUncheckedCreateWithoutChannelInput> | UserOnChannelCreateWithoutChannelInput[] | UserOnChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutChannelInput | UserOnChannelCreateOrConnectWithoutChannelInput[]
    upsert?: UserOnChannelUpsertWithWhereUniqueWithoutChannelInput | UserOnChannelUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: UserOnChannelCreateManyChannelInputEnvelope
    set?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    disconnect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    delete?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    update?: UserOnChannelUpdateWithWhereUniqueWithoutChannelInput | UserOnChannelUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: UserOnChannelUpdateManyWithWhereWithoutChannelInput | UserOnChannelUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: UserOnChannelScalarWhereInput | UserOnChannelScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChannelInput | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChannelInput | MessageUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MeetingCreateWithoutChannelInput, MeetingUncheckedCreateWithoutChannelInput> | MeetingCreateWithoutChannelInput[] | MeetingUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutChannelInput | MeetingCreateOrConnectWithoutChannelInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutChannelInput | MeetingUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MeetingCreateManyChannelInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutChannelInput | MeetingUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutChannelInput | MeetingUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type UserOnChannelUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<UserOnChannelCreateWithoutChannelInput, UserOnChannelUncheckedCreateWithoutChannelInput> | UserOnChannelCreateWithoutChannelInput[] | UserOnChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: UserOnChannelCreateOrConnectWithoutChannelInput | UserOnChannelCreateOrConnectWithoutChannelInput[]
    upsert?: UserOnChannelUpsertWithWhereUniqueWithoutChannelInput | UserOnChannelUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: UserOnChannelCreateManyChannelInputEnvelope
    set?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    disconnect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    delete?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    connect?: UserOnChannelWhereUniqueInput | UserOnChannelWhereUniqueInput[]
    update?: UserOnChannelUpdateWithWhereUniqueWithoutChannelInput | UserOnChannelUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: UserOnChannelUpdateManyWithWhereWithoutChannelInput | UserOnChannelUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: UserOnChannelScalarWhereInput | UserOnChannelScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChannelInput | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChannelInput | MessageUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MeetingCreateWithoutChannelInput, MeetingUncheckedCreateWithoutChannelInput> | MeetingCreateWithoutChannelInput[] | MeetingUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutChannelInput | MeetingCreateOrConnectWithoutChannelInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutChannelInput | MeetingUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MeetingCreateManyChannelInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutChannelInput | MeetingUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutChannelInput | MeetingUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
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

  export type EnumChannelRoleFieldUpdateOperationsInput = {
    set?: $Enums.ChannelRole
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

  export type UserCreateNestedOneWithoutMessageInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    connect?: UserWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutMessageInput = {
    create?: XOR<ChannelCreateWithoutMessageInput, ChannelUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMessageInput
    connect?: ChannelWhereUniqueInput
  }

  export type DirectMessageConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<DirectMessageConversationCreateWithoutMessagesInput, DirectMessageConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutMessagesInput
    connect?: DirectMessageConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    upsert?: UserUpsertWithoutMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageInput, UserUpdateWithoutMessageInput>, UserUncheckedUpdateWithoutMessageInput>
  }

  export type ChannelUpdateOneWithoutMessageNestedInput = {
    create?: XOR<ChannelCreateWithoutMessageInput, ChannelUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMessageInput
    upsert?: ChannelUpsertWithoutMessageInput
    disconnect?: ChannelWhereInput | boolean
    delete?: ChannelWhereInput | boolean
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutMessageInput, ChannelUpdateWithoutMessageInput>, ChannelUncheckedUpdateWithoutMessageInput>
  }

  export type DirectMessageConversationUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<DirectMessageConversationCreateWithoutMessagesInput, DirectMessageConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutMessagesInput
    upsert?: DirectMessageConversationUpsertWithoutMessagesInput
    disconnect?: DirectMessageConversationWhereInput | boolean
    delete?: DirectMessageConversationWhereInput | boolean
    connect?: DirectMessageConversationWhereUniqueInput
    update?: XOR<XOR<DirectMessageConversationUpdateToOneWithWhereWithoutMessagesInput, DirectMessageConversationUpdateWithoutMessagesInput>, DirectMessageConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserOnDMCreateNestedManyWithoutDmInput = {
    create?: XOR<UserOnDMCreateWithoutDmInput, UserOnDMUncheckedCreateWithoutDmInput> | UserOnDMCreateWithoutDmInput[] | UserOnDMUncheckedCreateWithoutDmInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutDmInput | UserOnDMCreateOrConnectWithoutDmInput[]
    createMany?: UserOnDMCreateManyDmInputEnvelope
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutDirectMessageConversationInput = {
    create?: XOR<MessageCreateWithoutDirectMessageConversationInput, MessageUncheckedCreateWithoutDirectMessageConversationInput> | MessageCreateWithoutDirectMessageConversationInput[] | MessageUncheckedCreateWithoutDirectMessageConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDirectMessageConversationInput | MessageCreateOrConnectWithoutDirectMessageConversationInput[]
    createMany?: MessageCreateManyDirectMessageConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type WorkspaceCreateNestedOneWithoutDirectMessageConversationInput = {
    create?: XOR<WorkspaceCreateWithoutDirectMessageConversationInput, WorkspaceUncheckedCreateWithoutDirectMessageConversationInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutDirectMessageConversationInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserOnDMUncheckedCreateNestedManyWithoutDmInput = {
    create?: XOR<UserOnDMCreateWithoutDmInput, UserOnDMUncheckedCreateWithoutDmInput> | UserOnDMCreateWithoutDmInput[] | UserOnDMUncheckedCreateWithoutDmInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutDmInput | UserOnDMCreateOrConnectWithoutDmInput[]
    createMany?: UserOnDMCreateManyDmInputEnvelope
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutDirectMessageConversationInput = {
    create?: XOR<MessageCreateWithoutDirectMessageConversationInput, MessageUncheckedCreateWithoutDirectMessageConversationInput> | MessageCreateWithoutDirectMessageConversationInput[] | MessageUncheckedCreateWithoutDirectMessageConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDirectMessageConversationInput | MessageCreateOrConnectWithoutDirectMessageConversationInput[]
    createMany?: MessageCreateManyDirectMessageConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserOnDMUpdateManyWithoutDmNestedInput = {
    create?: XOR<UserOnDMCreateWithoutDmInput, UserOnDMUncheckedCreateWithoutDmInput> | UserOnDMCreateWithoutDmInput[] | UserOnDMUncheckedCreateWithoutDmInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutDmInput | UserOnDMCreateOrConnectWithoutDmInput[]
    upsert?: UserOnDMUpsertWithWhereUniqueWithoutDmInput | UserOnDMUpsertWithWhereUniqueWithoutDmInput[]
    createMany?: UserOnDMCreateManyDmInputEnvelope
    set?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    disconnect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    delete?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    update?: UserOnDMUpdateWithWhereUniqueWithoutDmInput | UserOnDMUpdateWithWhereUniqueWithoutDmInput[]
    updateMany?: UserOnDMUpdateManyWithWhereWithoutDmInput | UserOnDMUpdateManyWithWhereWithoutDmInput[]
    deleteMany?: UserOnDMScalarWhereInput | UserOnDMScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutDirectMessageConversationNestedInput = {
    create?: XOR<MessageCreateWithoutDirectMessageConversationInput, MessageUncheckedCreateWithoutDirectMessageConversationInput> | MessageCreateWithoutDirectMessageConversationInput[] | MessageUncheckedCreateWithoutDirectMessageConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDirectMessageConversationInput | MessageCreateOrConnectWithoutDirectMessageConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutDirectMessageConversationInput | MessageUpsertWithWhereUniqueWithoutDirectMessageConversationInput[]
    createMany?: MessageCreateManyDirectMessageConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutDirectMessageConversationInput | MessageUpdateWithWhereUniqueWithoutDirectMessageConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutDirectMessageConversationInput | MessageUpdateManyWithWhereWithoutDirectMessageConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutDirectMessageConversationNestedInput = {
    create?: XOR<WorkspaceCreateWithoutDirectMessageConversationInput, WorkspaceUncheckedCreateWithoutDirectMessageConversationInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutDirectMessageConversationInput
    upsert?: WorkspaceUpsertWithoutDirectMessageConversationInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutDirectMessageConversationInput, WorkspaceUpdateWithoutDirectMessageConversationInput>, WorkspaceUncheckedUpdateWithoutDirectMessageConversationInput>
  }

  export type UserOnDMUncheckedUpdateManyWithoutDmNestedInput = {
    create?: XOR<UserOnDMCreateWithoutDmInput, UserOnDMUncheckedCreateWithoutDmInput> | UserOnDMCreateWithoutDmInput[] | UserOnDMUncheckedCreateWithoutDmInput[]
    connectOrCreate?: UserOnDMCreateOrConnectWithoutDmInput | UserOnDMCreateOrConnectWithoutDmInput[]
    upsert?: UserOnDMUpsertWithWhereUniqueWithoutDmInput | UserOnDMUpsertWithWhereUniqueWithoutDmInput[]
    createMany?: UserOnDMCreateManyDmInputEnvelope
    set?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    disconnect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    delete?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    connect?: UserOnDMWhereUniqueInput | UserOnDMWhereUniqueInput[]
    update?: UserOnDMUpdateWithWhereUniqueWithoutDmInput | UserOnDMUpdateWithWhereUniqueWithoutDmInput[]
    updateMany?: UserOnDMUpdateManyWithWhereWithoutDmInput | UserOnDMUpdateManyWithWhereWithoutDmInput[]
    deleteMany?: UserOnDMScalarWhereInput | UserOnDMScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutDirectMessageConversationNestedInput = {
    create?: XOR<MessageCreateWithoutDirectMessageConversationInput, MessageUncheckedCreateWithoutDirectMessageConversationInput> | MessageCreateWithoutDirectMessageConversationInput[] | MessageUncheckedCreateWithoutDirectMessageConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDirectMessageConversationInput | MessageCreateOrConnectWithoutDirectMessageConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutDirectMessageConversationInput | MessageUpsertWithWhereUniqueWithoutDirectMessageConversationInput[]
    createMany?: MessageCreateManyDirectMessageConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutDirectMessageConversationInput | MessageUpdateWithWhereUniqueWithoutDirectMessageConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutDirectMessageConversationInput | MessageUpdateManyWithWhereWithoutDirectMessageConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserOnDMInput = {
    create?: XOR<UserCreateWithoutUserOnDMInput, UserUncheckedCreateWithoutUserOnDMInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnDMInput
    connect?: UserWhereUniqueInput
  }

  export type DirectMessageConversationCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<DirectMessageConversationCreateWithoutParticipantsInput, DirectMessageConversationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutParticipantsInput
    connect?: DirectMessageConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserOnDMNestedInput = {
    create?: XOR<UserCreateWithoutUserOnDMInput, UserUncheckedCreateWithoutUserOnDMInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnDMInput
    upsert?: UserUpsertWithoutUserOnDMInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserOnDMInput, UserUpdateWithoutUserOnDMInput>, UserUncheckedUpdateWithoutUserOnDMInput>
  }

  export type DirectMessageConversationUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<DirectMessageConversationCreateWithoutParticipantsInput, DirectMessageConversationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DirectMessageConversationCreateOrConnectWithoutParticipantsInput
    upsert?: DirectMessageConversationUpsertWithoutParticipantsInput
    connect?: DirectMessageConversationWhereUniqueInput
    update?: XOR<XOR<DirectMessageConversationUpdateToOneWithWhereWithoutParticipantsInput, DirectMessageConversationUpdateWithoutParticipantsInput>, DirectMessageConversationUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChannelCreateNestedOneWithoutMeetingInput = {
    create?: XOR<ChannelCreateWithoutMeetingInput, ChannelUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMeetingInput
    connect?: ChannelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeetingInput = {
    create?: XOR<UserCreateWithoutMeetingInput, UserUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingInput
    connect?: UserWhereUniqueInput
  }

  export type ChannelUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<ChannelCreateWithoutMeetingInput, ChannelUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMeetingInput
    upsert?: ChannelUpsertWithoutMeetingInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutMeetingInput, ChannelUpdateWithoutMeetingInput>, ChannelUncheckedUpdateWithoutMeetingInput>
  }

  export type UserUpdateOneRequiredWithoutMeetingNestedInput = {
    create?: XOR<UserCreateWithoutMeetingInput, UserUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingInput
    upsert?: UserUpsertWithoutMeetingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingInput, UserUpdateWithoutMeetingInput>, UserUncheckedUpdateWithoutMeetingInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumChannelRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRole | EnumChannelRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRoleFilter<$PrismaModel> | $Enums.ChannelRole
  }

  export type NestedEnumChannelRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelRole | EnumChannelRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelRole[] | ListEnumChannelRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChannelRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelRoleFilter<$PrismaModel>
    _max?: NestedEnumChannelRoleFilter<$PrismaModel>
  }

  export type UserOnWorkspaceCreateWithoutUserInput = {
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
  }

  export type UserOnWorkspaceUncheckedCreateWithoutUserInput = {
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceCreateManyOwnerInputEnvelope = {
    data: WorkspaceCreateManyOwnerInput | WorkspaceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
    UserOnChannels?: UserOnChannelCreateNestedManyWithoutChannelInput
    Message?: MessageCreateNestedManyWithoutChannelInput
    Meeting?: MeetingCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserOnChannels?: UserOnChannelUncheckedCreateNestedManyWithoutChannelInput
    Message?: MessageUncheckedCreateNestedManyWithoutChannelInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutOwnerInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutOwnerInput, ChannelUncheckedCreateWithoutOwnerInput>
  }

  export type ChannelCreateManyOwnerInputEnvelope = {
    data: ChannelCreateManyOwnerInput | ChannelCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInvitedByInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
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

  export type UserOnChannelCreateWithoutUserInput = {
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
    channel: ChannelCreateNestedOneWithoutUserOnChannelsInput
  }

  export type UserOnChannelUncheckedCreateWithoutUserInput = {
    channelId: string
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserOnChannelCreateOrConnectWithoutUserInput = {
    where: UserOnChannelWhereUniqueInput
    create: XOR<UserOnChannelCreateWithoutUserInput, UserOnChannelUncheckedCreateWithoutUserInput>
  }

  export type UserOnChannelCreateManyUserInputEnvelope = {
    data: UserOnChannelCreateManyUserInput | UserOnChannelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel?: ChannelCreateNestedOneWithoutMessageInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channelId?: string | null
    conversationId?: string | null
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnDMCreateWithoutUserInput = {
    deletedAt?: Date | string | null
    dm: DirectMessageConversationCreateNestedOneWithoutParticipantsInput
  }

  export type UserOnDMUncheckedCreateWithoutUserInput = {
    dmId: string
    deletedAt?: Date | string | null
  }

  export type UserOnDMCreateOrConnectWithoutUserInput = {
    where: UserOnDMWhereUniqueInput
    create: XOR<UserOnDMCreateWithoutUserInput, UserOnDMUncheckedCreateWithoutUserInput>
  }

  export type UserOnDMCreateManyUserInputEnvelope = {
    data: UserOnDMCreateManyUserInput | UserOnDMCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    channelId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutOrganizerInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutOrganizerInput, MeetingUncheckedCreateWithoutOrganizerInput>
  }

  export type MeetingCreateManyOrganizerInputEnvelope = {
    data: MeetingCreateManyOrganizerInput | MeetingCreateManyOrganizerInput[]
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
    deletedAt?: DateTimeNullableFilter<"UserOnWorkspace"> | Date | string | null
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
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    ownerId?: StringFilter<"Workspace"> | string
  }

  export type ChannelUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutOwnerInput, ChannelUncheckedUpdateWithoutOwnerInput>
    create: XOR<ChannelCreateWithoutOwnerInput, ChannelUncheckedCreateWithoutOwnerInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutOwnerInput, ChannelUncheckedUpdateWithoutOwnerInput>
  }

  export type ChannelUpdateManyWithWhereWithoutOwnerInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutOwnerInput>
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
    deletedAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    ownerId?: StringFilter<"Channel"> | string
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
    deletedAt?: DateTimeNullableFilter<"Invite"> | Date | string | null
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedAt?: DateTimeFilter<"Invite"> | Date | string
    workspaceId?: StringFilter<"Invite"> | string
    invitedById?: StringFilter<"Invite"> | string
  }

  export type UserOnChannelUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnChannelWhereUniqueInput
    update: XOR<UserOnChannelUpdateWithoutUserInput, UserOnChannelUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnChannelCreateWithoutUserInput, UserOnChannelUncheckedCreateWithoutUserInput>
  }

  export type UserOnChannelUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnChannelWhereUniqueInput
    data: XOR<UserOnChannelUpdateWithoutUserInput, UserOnChannelUncheckedUpdateWithoutUserInput>
  }

  export type UserOnChannelUpdateManyWithWhereWithoutUserInput = {
    where: UserOnChannelScalarWhereInput
    data: XOR<UserOnChannelUpdateManyMutationInput, UserOnChannelUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnChannelScalarWhereInput = {
    AND?: UserOnChannelScalarWhereInput | UserOnChannelScalarWhereInput[]
    OR?: UserOnChannelScalarWhereInput[]
    NOT?: UserOnChannelScalarWhereInput | UserOnChannelScalarWhereInput[]
    userId?: StringFilter<"UserOnChannel"> | string
    channelId?: StringFilter<"UserOnChannel"> | string
    role?: EnumChannelRoleFilter<"UserOnChannel"> | $Enums.ChannelRole
    joinedAt?: DateTimeFilter<"UserOnChannel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserOnChannel"> | Date | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    isEdited?: BoolFilter<"Message"> | boolean
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    channelId?: StringNullableFilter<"Message"> | string | null
    conversationId?: StringNullableFilter<"Message"> | string | null
  }

  export type UserOnDMUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnDMWhereUniqueInput
    update: XOR<UserOnDMUpdateWithoutUserInput, UserOnDMUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnDMCreateWithoutUserInput, UserOnDMUncheckedCreateWithoutUserInput>
  }

  export type UserOnDMUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnDMWhereUniqueInput
    data: XOR<UserOnDMUpdateWithoutUserInput, UserOnDMUncheckedUpdateWithoutUserInput>
  }

  export type UserOnDMUpdateManyWithWhereWithoutUserInput = {
    where: UserOnDMScalarWhereInput
    data: XOR<UserOnDMUpdateManyMutationInput, UserOnDMUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnDMScalarWhereInput = {
    AND?: UserOnDMScalarWhereInput | UserOnDMScalarWhereInput[]
    OR?: UserOnDMScalarWhereInput[]
    NOT?: UserOnDMScalarWhereInput | UserOnDMScalarWhereInput[]
    userId?: StringFilter<"UserOnDM"> | string
    dmId?: StringFilter<"UserOnDM"> | string
    deletedAt?: DateTimeNullableFilter<"UserOnDM"> | Date | string | null
  }

  export type MeetingUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutOrganizerInput, MeetingUncheckedUpdateWithoutOrganizerInput>
    create: XOR<MeetingCreateWithoutOrganizerInput, MeetingUncheckedCreateWithoutOrganizerInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutOrganizerInput, MeetingUncheckedUpdateWithoutOrganizerInput>
  }

  export type MeetingUpdateManyWithWhereWithoutOrganizerInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    description?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    location?: StringNullableFilter<"Meeting"> | string | null
    googleCalendarEventId?: StringNullableFilter<"Meeting"> | string | null
    googleCalendarHtmlLink?: StringNullableFilter<"Meeting"> | string | null
    channelId?: StringFilter<"Meeting"> | string
    organizerId?: StringFilter<"Meeting"> | string
    deletedAt?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
  }

  export type UserCreateWithoutOwnedWorkspacesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutOwnedWorkspacesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutOwnedWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
  }

  export type UserOnWorkspaceCreateWithoutWorkspaceInput = {
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type UserOnWorkspaceUncheckedCreateWithoutWorkspaceInput = {
    userId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedChannelsInput
    UserOnChannels?: UserOnChannelCreateNestedManyWithoutChannelInput
    Message?: MessageCreateNestedManyWithoutChannelInput
    Meeting?: MeetingCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    UserOnChannels?: UserOnChannelUncheckedCreateNestedManyWithoutChannelInput
    Message?: MessageUncheckedCreateNestedManyWithoutChannelInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput>
  }

  export type ChannelCreateManyWorkspaceInputEnvelope = {
    data: ChannelCreateManyWorkspaceInput | ChannelCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type DirectMessageConversationCreateWithoutWorkspaceInput = {
    id?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserOnDMCreateNestedManyWithoutDmInput
    messages?: MessageCreateNestedManyWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserOnDMUncheckedCreateNestedManyWithoutDmInput
    messages?: MessageUncheckedCreateNestedManyWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationCreateOrConnectWithoutWorkspaceInput = {
    where: DirectMessageConversationWhereUniqueInput
    create: XOR<DirectMessageConversationCreateWithoutWorkspaceInput, DirectMessageConversationUncheckedCreateWithoutWorkspaceInput>
  }

  export type DirectMessageConversationCreateManyWorkspaceInputEnvelope = {
    data: DirectMessageConversationCreateManyWorkspaceInput | DirectMessageConversationCreateManyWorkspaceInput[]
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
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
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

  export type DirectMessageConversationUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: DirectMessageConversationWhereUniqueInput
    update: XOR<DirectMessageConversationUpdateWithoutWorkspaceInput, DirectMessageConversationUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<DirectMessageConversationCreateWithoutWorkspaceInput, DirectMessageConversationUncheckedCreateWithoutWorkspaceInput>
  }

  export type DirectMessageConversationUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: DirectMessageConversationWhereUniqueInput
    data: XOR<DirectMessageConversationUpdateWithoutWorkspaceInput, DirectMessageConversationUncheckedUpdateWithoutWorkspaceInput>
  }

  export type DirectMessageConversationUpdateManyWithWhereWithoutWorkspaceInput = {
    where: DirectMessageConversationScalarWhereInput
    data: XOR<DirectMessageConversationUpdateManyMutationInput, DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type DirectMessageConversationScalarWhereInput = {
    AND?: DirectMessageConversationScalarWhereInput | DirectMessageConversationScalarWhereInput[]
    OR?: DirectMessageConversationScalarWhereInput[]
    NOT?: DirectMessageConversationScalarWhereInput | DirectMessageConversationScalarWhereInput[]
    id?: StringFilter<"DirectMessageConversation"> | string
    workspaceId?: StringFilter<"DirectMessageConversation"> | string
    deletedAt?: DateTimeNullableFilter<"DirectMessageConversation"> | Date | string | null
    createdAt?: DateTimeFilter<"DirectMessageConversation"> | Date | string
    updatedAt?: DateTimeFilter<"DirectMessageConversation"> | Date | string
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
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
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationUncheckedCreateNestedManyWithoutWorkspaceInput
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
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutInviteInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutInviteInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutInviteInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutInviteInput, WorkspaceUncheckedCreateWithoutInviteInput>
  }

  export type UserCreateWithoutInviteSentInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutInviteSentInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceNestedInput
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
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutInviteSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type WorkspaceCreateWithoutChannelInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutChannelInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    DirectMessageConversation?: DirectMessageConversationUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutChannelInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutChannelInput, WorkspaceUncheckedCreateWithoutChannelInput>
  }

  export type UserCreateWithoutOwnedChannelsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutOwnedChannelsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutOwnedChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedChannelsInput, UserUncheckedCreateWithoutOwnedChannelsInput>
  }

  export type UserOnChannelCreateWithoutChannelInput = {
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutChannelsInput
  }

  export type UserOnChannelUncheckedCreateWithoutChannelInput = {
    userId: string
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserOnChannelCreateOrConnectWithoutChannelInput = {
    where: UserOnChannelWhereUniqueInput
    create: XOR<UserOnChannelCreateWithoutChannelInput, UserOnChannelUncheckedCreateWithoutChannelInput>
  }

  export type UserOnChannelCreateManyChannelInputEnvelope = {
    data: UserOnChannelCreateManyChannelInput | UserOnChannelCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutChannelInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessageInput
    DirectMessageConversation?: DirectMessageConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChannelInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    conversationId?: string | null
  }

  export type MessageCreateOrConnectWithoutChannelInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageCreateManyChannelInputEnvelope = {
    data: MessageCreateManyChannelInput | MessageCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutChannelInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutChannelInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    organizerId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutChannelInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutChannelInput, MeetingUncheckedCreateWithoutChannelInput>
  }

  export type MeetingCreateManyChannelInputEnvelope = {
    data: MeetingCreateManyChannelInput | MeetingCreateManyChannelInput[]
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutOwnedChannelsInput = {
    update: XOR<UserUpdateWithoutOwnedChannelsInput, UserUncheckedUpdateWithoutOwnedChannelsInput>
    create: XOR<UserCreateWithoutOwnedChannelsInput, UserUncheckedCreateWithoutOwnedChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedChannelsInput, UserUncheckedUpdateWithoutOwnedChannelsInput>
  }

  export type UserUpdateWithoutOwnedChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type UserOnChannelUpsertWithWhereUniqueWithoutChannelInput = {
    where: UserOnChannelWhereUniqueInput
    update: XOR<UserOnChannelUpdateWithoutChannelInput, UserOnChannelUncheckedUpdateWithoutChannelInput>
    create: XOR<UserOnChannelCreateWithoutChannelInput, UserOnChannelUncheckedCreateWithoutChannelInput>
  }

  export type UserOnChannelUpdateWithWhereUniqueWithoutChannelInput = {
    where: UserOnChannelWhereUniqueInput
    data: XOR<UserOnChannelUpdateWithoutChannelInput, UserOnChannelUncheckedUpdateWithoutChannelInput>
  }

  export type UserOnChannelUpdateManyWithWhereWithoutChannelInput = {
    where: UserOnChannelScalarWhereInput
    data: XOR<UserOnChannelUpdateManyMutationInput, UserOnChannelUncheckedUpdateManyWithoutChannelInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
  }

  export type MessageUpdateManyWithWhereWithoutChannelInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChannelInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutChannelInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutChannelInput, MeetingUncheckedUpdateWithoutChannelInput>
    create: XOR<MeetingCreateWithoutChannelInput, MeetingUncheckedCreateWithoutChannelInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutChannelInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutChannelInput, MeetingUncheckedUpdateWithoutChannelInput>
  }

  export type MeetingUpdateManyWithWhereWithoutChannelInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutChannelInput>
  }

  export type UserCreateWithoutChannelsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutChannelsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
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
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
    owner: UserCreateNestedOneWithoutOwnedChannelsInput
    Message?: MessageCreateNestedManyWithoutChannelInput
    Meeting?: MeetingCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutUserOnChannelsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    Message?: MessageUncheckedCreateNestedManyWithoutChannelInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutChannelInput
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
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedChannelsNestedInput
    Message?: MessageUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutUserOnChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    Message?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserCreateWithoutMessageInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutMessageInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
  }

  export type ChannelCreateWithoutMessageInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
    owner: UserCreateNestedOneWithoutOwnedChannelsInput
    UserOnChannels?: UserOnChannelCreateNestedManyWithoutChannelInput
    Meeting?: MeetingCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutMessageInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    UserOnChannels?: UserOnChannelUncheckedCreateNestedManyWithoutChannelInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutMessageInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutMessageInput, ChannelUncheckedCreateWithoutMessageInput>
  }

  export type DirectMessageConversationCreateWithoutMessagesInput = {
    id?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserOnDMCreateNestedManyWithoutDmInput
    workspace: WorkspaceCreateNestedOneWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserOnDMUncheckedCreateNestedManyWithoutDmInput
  }

  export type DirectMessageConversationCreateOrConnectWithoutMessagesInput = {
    where: DirectMessageConversationWhereUniqueInput
    create: XOR<DirectMessageConversationCreateWithoutMessagesInput, DirectMessageConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessageInput = {
    update: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type ChannelUpsertWithoutMessageInput = {
    update: XOR<ChannelUpdateWithoutMessageInput, ChannelUncheckedUpdateWithoutMessageInput>
    create: XOR<ChannelCreateWithoutMessageInput, ChannelUncheckedCreateWithoutMessageInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutMessageInput, ChannelUncheckedUpdateWithoutMessageInput>
  }

  export type ChannelUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedChannelsNestedInput
    UserOnChannels?: UserOnChannelUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    UserOnChannels?: UserOnChannelUncheckedUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type DirectMessageConversationUpsertWithoutMessagesInput = {
    update: XOR<DirectMessageConversationUpdateWithoutMessagesInput, DirectMessageConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<DirectMessageConversationCreateWithoutMessagesInput, DirectMessageConversationUncheckedCreateWithoutMessagesInput>
    where?: DirectMessageConversationWhereInput
  }

  export type DirectMessageConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: DirectMessageConversationWhereInput
    data: XOR<DirectMessageConversationUpdateWithoutMessagesInput, DirectMessageConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type DirectMessageConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserOnDMUpdateManyWithoutDmNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutDirectMessageConversationNestedInput
  }

  export type DirectMessageConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserOnDMUncheckedUpdateManyWithoutDmNestedInput
  }

  export type UserOnDMCreateWithoutDmInput = {
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserOnDMInput
  }

  export type UserOnDMUncheckedCreateWithoutDmInput = {
    userId: string
    deletedAt?: Date | string | null
  }

  export type UserOnDMCreateOrConnectWithoutDmInput = {
    where: UserOnDMWhereUniqueInput
    create: XOR<UserOnDMCreateWithoutDmInput, UserOnDMUncheckedCreateWithoutDmInput>
  }

  export type UserOnDMCreateManyDmInputEnvelope = {
    data: UserOnDMCreateManyDmInput | UserOnDMCreateManyDmInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutDirectMessageConversationInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessageInput
    channel?: ChannelCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutDirectMessageConversationInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    channelId?: string | null
  }

  export type MessageCreateOrConnectWithoutDirectMessageConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutDirectMessageConversationInput, MessageUncheckedCreateWithoutDirectMessageConversationInput>
  }

  export type MessageCreateManyDirectMessageConversationInputEnvelope = {
    data: MessageCreateManyDirectMessageConversationInput | MessageCreateManyDirectMessageConversationInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutDirectMessageConversationInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: UserOnWorkspaceCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutDirectMessageConversationInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    members?: UserOnWorkspaceUncheckedCreateNestedManyWithoutWorkspaceInput
    Invite?: InviteUncheckedCreateNestedManyWithoutWorkspaceInput
    Channel?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutDirectMessageConversationInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutDirectMessageConversationInput, WorkspaceUncheckedCreateWithoutDirectMessageConversationInput>
  }

  export type UserOnDMUpsertWithWhereUniqueWithoutDmInput = {
    where: UserOnDMWhereUniqueInput
    update: XOR<UserOnDMUpdateWithoutDmInput, UserOnDMUncheckedUpdateWithoutDmInput>
    create: XOR<UserOnDMCreateWithoutDmInput, UserOnDMUncheckedCreateWithoutDmInput>
  }

  export type UserOnDMUpdateWithWhereUniqueWithoutDmInput = {
    where: UserOnDMWhereUniqueInput
    data: XOR<UserOnDMUpdateWithoutDmInput, UserOnDMUncheckedUpdateWithoutDmInput>
  }

  export type UserOnDMUpdateManyWithWhereWithoutDmInput = {
    where: UserOnDMScalarWhereInput
    data: XOR<UserOnDMUpdateManyMutationInput, UserOnDMUncheckedUpdateManyWithoutDmInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutDirectMessageConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutDirectMessageConversationInput, MessageUncheckedUpdateWithoutDirectMessageConversationInput>
    create: XOR<MessageCreateWithoutDirectMessageConversationInput, MessageUncheckedCreateWithoutDirectMessageConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutDirectMessageConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutDirectMessageConversationInput, MessageUncheckedUpdateWithoutDirectMessageConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutDirectMessageConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutDirectMessageConversationInput>
  }

  export type WorkspaceUpsertWithoutDirectMessageConversationInput = {
    update: XOR<WorkspaceUpdateWithoutDirectMessageConversationInput, WorkspaceUncheckedUpdateWithoutDirectMessageConversationInput>
    create: XOR<WorkspaceCreateWithoutDirectMessageConversationInput, WorkspaceUncheckedCreateWithoutDirectMessageConversationInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutDirectMessageConversationInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutDirectMessageConversationInput, WorkspaceUncheckedUpdateWithoutDirectMessageConversationInput>
  }

  export type WorkspaceUpdateWithoutDirectMessageConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutDirectMessageConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserCreateWithoutUserOnDMInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    Meeting?: MeetingCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutUserOnDMInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    Meeting?: MeetingUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutUserOnDMInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserOnDMInput, UserUncheckedCreateWithoutUserOnDMInput>
  }

  export type DirectMessageConversationCreateWithoutParticipantsInput = {
    id?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutDirectMessageConversationInput
    workspace: WorkspaceCreateNestedOneWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationUncheckedCreateWithoutParticipantsInput = {
    id?: string
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutDirectMessageConversationInput
  }

  export type DirectMessageConversationCreateOrConnectWithoutParticipantsInput = {
    where: DirectMessageConversationWhereUniqueInput
    create: XOR<DirectMessageConversationCreateWithoutParticipantsInput, DirectMessageConversationUncheckedCreateWithoutParticipantsInput>
  }

  export type UserUpsertWithoutUserOnDMInput = {
    update: XOR<UserUpdateWithoutUserOnDMInput, UserUncheckedUpdateWithoutUserOnDMInput>
    create: XOR<UserCreateWithoutUserOnDMInput, UserUncheckedCreateWithoutUserOnDMInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserOnDMInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserOnDMInput, UserUncheckedUpdateWithoutUserOnDMInput>
  }

  export type UserUpdateWithoutUserOnDMInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserOnDMInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type DirectMessageConversationUpsertWithoutParticipantsInput = {
    update: XOR<DirectMessageConversationUpdateWithoutParticipantsInput, DirectMessageConversationUncheckedUpdateWithoutParticipantsInput>
    create: XOR<DirectMessageConversationCreateWithoutParticipantsInput, DirectMessageConversationUncheckedCreateWithoutParticipantsInput>
    where?: DirectMessageConversationWhereInput
  }

  export type DirectMessageConversationUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: DirectMessageConversationWhereInput
    data: XOR<DirectMessageConversationUpdateWithoutParticipantsInput, DirectMessageConversationUncheckedUpdateWithoutParticipantsInput>
  }

  export type DirectMessageConversationUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutDirectMessageConversationNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutDirectMessageConversationNestedInput
  }

  export type DirectMessageConversationUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutDirectMessageConversationNestedInput
  }

  export type ChannelCreateWithoutMeetingInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutChannelInput
    owner: UserCreateNestedOneWithoutOwnedChannelsInput
    UserOnChannels?: UserOnChannelCreateNestedManyWithoutChannelInput
    Message?: MessageCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutMeetingInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    UserOnChannels?: UserOnChannelUncheckedCreateNestedManyWithoutChannelInput
    Message?: MessageUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutMeetingInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutMeetingInput, ChannelUncheckedCreateWithoutMeetingInput>
  }

  export type UserCreateWithoutMeetingInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeetingInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: $Enums.Role
    avatar?: string | null
    status?: string | null
    lastSeen?: Date | string | null
    isVerified?: boolean
    refreshToken?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    emailVerificationTokenSentAt?: Date | string | null
    resetPasswordPin?: string | null
    resetPasswordPinExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordPinSentAt?: Date | string | null
    failedPinAttempts?: number | null
    loginOtp?: string | null
    loginOtpExpires?: Date | string | null
    loginSessionToken?: string | null
    loginOtpSentAt?: Date | string | null
    oauthProvider?: string | null
    oauthId?: string | null
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleCalendarId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: UserOnWorkspaceUncheckedCreateNestedManyWithoutUserInput
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    ownedChannels?: ChannelUncheckedCreateNestedManyWithoutOwnerInput
    InviteSent?: InviteUncheckedCreateNestedManyWithoutInvitedByInput
    Channels?: UserOnChannelUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
    UserOnDM?: UserOnDMUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeetingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingInput, UserUncheckedCreateWithoutMeetingInput>
  }

  export type ChannelUpsertWithoutMeetingInput = {
    update: XOR<ChannelUpdateWithoutMeetingInput, ChannelUncheckedUpdateWithoutMeetingInput>
    create: XOR<ChannelCreateWithoutMeetingInput, ChannelUncheckedCreateWithoutMeetingInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutMeetingInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutMeetingInput, ChannelUncheckedUpdateWithoutMeetingInput>
  }

  export type ChannelUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedChannelsNestedInput
    UserOnChannels?: UserOnChannelUpdateManyWithoutChannelNestedInput
    Message?: MessageUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    UserOnChannels?: UserOnChannelUncheckedUpdateManyWithoutChannelNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type UserUpsertWithoutMeetingInput = {
    update: XOR<UserUpdateWithoutMeetingInput, UserUncheckedUpdateWithoutMeetingInput>
    create: XOR<UserCreateWithoutMeetingInput, UserUncheckedCreateWithoutMeetingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingInput, UserUncheckedUpdateWithoutMeetingInput>
  }

  export type UserUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationTokenSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordPin?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordPinSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedPinAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    loginOtp?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    loginOtpSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oauthProvider?: NullableStringFieldUpdateOperationsInput | string | null
    oauthId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: UserOnWorkspaceUncheckedUpdateManyWithoutUserNestedInput
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    ownedChannels?: ChannelUncheckedUpdateManyWithoutOwnerNestedInput
    InviteSent?: InviteUncheckedUpdateManyWithoutInvitedByNestedInput
    Channels?: UserOnChannelUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    UserOnDM?: UserOnDMUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserOnWorkspaceCreateManyUserInput = {
    workspaceId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WorkspaceCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    slug: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    workspaceId: string
    deletedAt?: Date | string | null
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
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
  }

  export type UserOnChannelCreateManyUserInput = {
    channelId: string
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MessageCreateManyUserInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channelId?: string | null
    conversationId?: string | null
  }

  export type UserOnDMCreateManyUserInput = {
    dmId: string
    deletedAt?: Date | string | null
  }

  export type MeetingCreateManyOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    channelId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnWorkspaceUpdateWithoutUserInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserOnWorkspaceUncheckedUpdateWithoutUserInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnWorkspaceUncheckedUpdateManyWithoutUserInput = {
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserOnWorkspaceUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceNestedInput
    Invite?: InviteUncheckedUpdateManyWithoutWorkspaceNestedInput
    Channel?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    DirectMessageConversation?: DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelNestedInput
    UserOnChannels?: UserOnChannelUpdateManyWithoutChannelNestedInput
    Message?: MessageUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserOnChannels?: UserOnChannelUncheckedUpdateManyWithoutChannelNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type UserOnChannelUpdateWithoutUserInput = {
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    channel?: ChannelUpdateOneRequiredWithoutUserOnChannelsNestedInput
  }

  export type UserOnChannelUncheckedUpdateWithoutUserInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnChannelUncheckedUpdateManyWithoutUserInput = {
    channelId?: StringFieldUpdateOperationsInput | string
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneWithoutMessageNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserOnDMUpdateWithoutUserInput = {
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm?: DirectMessageConversationUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type UserOnDMUncheckedUpdateWithoutUserInput = {
    dmId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnDMUncheckedUpdateManyWithoutUserInput = {
    dmId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MeetingUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnWorkspaceCreateManyWorkspaceInput = {
    userId: string
    role?: $Enums.WorkspaceRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type InviteCreateManyWorkspaceInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    status?: $Enums.InviteStatus
    role?: $Enums.WorkspaceRole
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedById: string
  }

  export type ChannelCreateManyWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type DirectMessageConversationCreateManyWorkspaceInput = {
    id?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnWorkspaceUpdateWithoutWorkspaceInput = {
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type UserOnWorkspaceUncheckedUpdateWithoutWorkspaceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnWorkspaceUncheckedUpdateManyWithoutWorkspaceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    role?: EnumWorkspaceRoleFieldUpdateOperationsInput | $Enums.WorkspaceRole
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedById?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedChannelsNestedInput
    UserOnChannels?: UserOnChannelUpdateManyWithoutChannelNestedInput
    Message?: MessageUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    UserOnChannels?: UserOnChannelUncheckedUpdateManyWithoutChannelNestedInput
    Message?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    Meeting?: MeetingUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type DirectMessageConversationUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserOnDMUpdateManyWithoutDmNestedInput
    messages?: MessageUpdateManyWithoutDirectMessageConversationNestedInput
  }

  export type DirectMessageConversationUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserOnDMUncheckedUpdateManyWithoutDmNestedInput
    messages?: MessageUncheckedUpdateManyWithoutDirectMessageConversationNestedInput
  }

  export type DirectMessageConversationUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnChannelCreateManyChannelInput = {
    userId: string
    role?: $Enums.ChannelRole
    joinedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MessageCreateManyChannelInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    conversationId?: string | null
  }

  export type MeetingCreateManyChannelInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    location?: string | null
    googleCalendarEventId?: string | null
    googleCalendarHtmlLink?: string | null
    organizerId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnChannelUpdateWithoutChannelInput = {
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type UserOnChannelUncheckedUpdateWithoutChannelInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnChannelUncheckedUpdateManyWithoutChannelInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumChannelRoleFieldUpdateOperationsInput | $Enums.ChannelRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessageNestedInput
    DirectMessageConversation?: DirectMessageConversationUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeetingUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    googleCalendarHtmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnDMCreateManyDmInput = {
    userId: string
    deletedAt?: Date | string | null
  }

  export type MessageCreateManyDirectMessageConversationInput = {
    id?: string
    content: string
    isEdited?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    channelId?: string | null
  }

  export type UserOnDMUpdateWithoutDmInput = {
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserOnDMNestedInput
  }

  export type UserOnDMUncheckedUpdateWithoutDmInput = {
    userId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserOnDMUncheckedUpdateManyWithoutDmInput = {
    userId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutDirectMessageConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessageNestedInput
    channel?: ChannelUpdateOneWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutDirectMessageConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUncheckedUpdateManyWithoutDirectMessageConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
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