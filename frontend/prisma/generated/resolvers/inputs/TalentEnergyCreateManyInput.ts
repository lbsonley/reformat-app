import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("TalentEnergyCreateManyInput", {
  isAbstract: true
})
export class TalentEnergyCreateManyInput {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: false
  })
  id!: "push" | "neutral" | "pull";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
