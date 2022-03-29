import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyWhereInput } from "../inputs/TalentEnergyWhereInput";

@TypeGraphQL.InputType("TalentEnergyRelationFilter", {
  isAbstract: true
})
export class TalentEnergyRelationFilter {
  @TypeGraphQL.Field(_type => TalentEnergyWhereInput, {
    nullable: true
  })
  is?: TalentEnergyWhereInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyWhereInput, {
    nullable: true
  })
  isNot?: TalentEnergyWhereInput | undefined;
}
