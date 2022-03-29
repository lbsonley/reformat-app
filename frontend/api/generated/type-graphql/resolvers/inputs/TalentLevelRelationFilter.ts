import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelWhereInput } from "../inputs/TalentLevelWhereInput";

@TypeGraphQL.InputType("TalentLevelRelationFilter", {
  isAbstract: true
})
export class TalentLevelRelationFilter {
  @TypeGraphQL.Field(_type => TalentLevelWhereInput, {
    nullable: true
  })
  is?: TalentLevelWhereInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelWhereInput, {
    nullable: true
  })
  isNot?: TalentLevelWhereInput | undefined;
}
