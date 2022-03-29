import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentLevelsFilter } from "../inputs/EnumTalentLevelsFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("TalentLevelWhereInput", {
  isAbstract: true
})
export class TalentLevelWhereInput {
  @TypeGraphQL.Field(_type => [TalentLevelWhereInput], {
    nullable: true
  })
  AND?: TalentLevelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelWhereInput], {
    nullable: true
  })
  OR?: TalentLevelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelWhereInput], {
    nullable: true
  })
  NOT?: TalentLevelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumTalentLevelsFilter, {
    nullable: true
  })
  id?: EnumTalentLevelsFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
