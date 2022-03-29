import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelCreateOrConnectWithoutUsersInput } from "../inputs/TalentLevelCreateOrConnectWithoutUsersInput";
import { TalentLevelCreateWithoutUsersInput } from "../inputs/TalentLevelCreateWithoutUsersInput";
import { TalentLevelWhereUniqueInput } from "../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.InputType("TalentLevelCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class TalentLevelCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentLevelCreateWithoutUsersInput, {
    nullable: true
  })
  create?: TalentLevelCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: TalentLevelCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: true
  })
  connect?: TalentLevelWhereUniqueInput | undefined;
}
