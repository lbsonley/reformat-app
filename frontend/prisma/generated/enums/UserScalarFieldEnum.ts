import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  firstName = "firstName",
  lastName = "lastName",
  language = "language",
  animal = "animal",
  archetypeId = "archetypeId",
  lifeJourneyId = "lifeJourneyId",
  talent = "talent",
  talentLevelId = "talentLevelId",
  talentEnergyId = "talentEnergyId",
  heroJourneyProgress = "heroJourneyProgress"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
