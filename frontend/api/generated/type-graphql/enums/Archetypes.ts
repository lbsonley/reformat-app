import * as TypeGraphQL from "type-graphql";

export enum Archetypes {
  mentor = "mentor",
  herald = "herald",
  gatekeeper = "gatekeeper",
  joker = "joker"
}
TypeGraphQL.registerEnumType(Archetypes, {
  name: "Archetypes",
  description: undefined,
});
