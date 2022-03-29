import * as TypeGraphQL from "type-graphql";

export enum LifeJourneys {
  learn = "learn",
  stand = "stand",
  resolve = "resolve"
}
TypeGraphQL.registerEnumType(LifeJourneys, {
  name: "LifeJourneys",
  description: undefined,
});
