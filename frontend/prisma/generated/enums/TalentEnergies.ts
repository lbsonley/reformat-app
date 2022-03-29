import * as TypeGraphQL from "type-graphql";

export enum TalentEnergies {
  push = "push",
  neutral = "neutral",
  pull = "pull"
}
TypeGraphQL.registerEnumType(TalentEnergies, {
  name: "TalentEnergies",
  description: undefined,
});
