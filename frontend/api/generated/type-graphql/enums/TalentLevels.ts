import * as TypeGraphQL from "type-graphql";

export enum TalentLevels {
  ego = "ego",
  emotion = "emotion",
  tao = "tao"
}
TypeGraphQL.registerEnumType(TalentLevels, {
  name: "TalentLevels",
  description: undefined,
});
