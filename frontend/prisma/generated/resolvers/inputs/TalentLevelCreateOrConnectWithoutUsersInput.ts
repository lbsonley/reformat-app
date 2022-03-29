import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelCreateWithoutUsersInput } from "../inputs/TalentLevelCreateWithoutUsersInput";
import { TalentLevelWhereUniqueInput } from "../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.InputType("TalentLevelCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class TalentLevelCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: false
  })
  where!: TalentLevelWhereUniqueInput;

  @TypeGraphQL.Field(_type => TalentLevelCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TalentLevelCreateWithoutUsersInput;
}
