import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelCreateWithoutUsersInput } from "../inputs/TalentLevelCreateWithoutUsersInput";
import { TalentLevelUpdateWithoutUsersInput } from "../inputs/TalentLevelUpdateWithoutUsersInput";

@TypeGraphQL.InputType("TalentLevelUpsertWithoutUsersInput", {
  isAbstract: true
})
export class TalentLevelUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentLevelUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: TalentLevelUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => TalentLevelCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TalentLevelCreateWithoutUsersInput;
}
