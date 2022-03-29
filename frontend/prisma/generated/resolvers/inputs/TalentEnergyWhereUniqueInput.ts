import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("TalentEnergyWhereUniqueInput", {
  isAbstract: true
})
export class TalentEnergyWhereUniqueInput {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  id?: "push" | "neutral" | "pull" | undefined;
}
