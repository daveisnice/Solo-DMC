import { GhostError } from './GhostError';
import * as ghostErrors from './errors';
import { deserialize, isGhostError, prepareStackForUser, serialize } from './utils';
import { formatZodIssues, fromZodError, getZodErrorDetails, isZodError } from './zod';
export * from './errors';
export type { GhostError };
export type { GhostErrorConstructor, ZodErrorDetail, ZodErrorLike, ZodIssueLike } from './zod';
export default ghostErrors;
export declare const utils: {
    serialize: typeof serialize;
    deserialize: typeof deserialize;
    isGhostError: typeof isGhostError;
    prepareStackForUser: typeof prepareStackForUser;
    isZodError: typeof isZodError;
    formatZodIssues: typeof formatZodIssues;
    getZodErrorDetails: typeof getZodErrorDetails;
    fromZodError: typeof fromZodError;
};
//# sourceMappingURL=index.d.ts.map