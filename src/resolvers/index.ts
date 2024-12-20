import { OrgMembership } from "./orgMembership";
import { Organization } from "./organization";
import { Mutation } from "./mutation";
import { Query } from "./query";
import { Study } from "./study";
import { User } from "./user";
import { Site } from "./site";

export const resolvers = {
  Query,
  Mutation,
  User,
  Organization,
  OrgMembership,
  Study,
  Site,
};
