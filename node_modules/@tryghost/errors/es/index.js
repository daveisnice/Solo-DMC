import * as ghostErrors from "./errors";
import { deserialize, isGhostError, prepareStackForUser, serialize } from "./utils";
import { formatZodIssues, fromZodError, getZodErrorDetails, isZodError } from "./zod";
export * from "./errors";
var index_default = ghostErrors;
const utils = {
  serialize,
  deserialize,
  isGhostError,
  prepareStackForUser,
  isZodError,
  formatZodIssues,
  getZodErrorDetails,
  fromZodError
};
export {
  index_default as default,
  utils
};
