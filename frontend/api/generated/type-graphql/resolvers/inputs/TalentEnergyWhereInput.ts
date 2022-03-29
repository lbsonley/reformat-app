import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentEnergiesFilter } from "../inputs/EnumTalentEnergiesFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("TalentEnergyWhereInput", {
  isAbstract: true
})
export class TalentEnergyWhereInput {
  @TypeGraphQL.Field(_type => [TalentEnergyWhereInput], {
    nullable: true
  })
  AND?: TalentEnergyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyWhereInput], {
    nullable: true
  })
  OR?: TalentEnergyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyWhereInput], {
    nullable: true
  })
  NOT?: TalentEnergyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumTalentEnergiesFilter, {
    nullable: true
  })
  id?: EnumTalentEnergiesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
