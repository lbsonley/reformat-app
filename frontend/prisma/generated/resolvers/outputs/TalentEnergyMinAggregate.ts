import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.ObjectType("TalentEnergyMinAggregate", {
  isAbstract: true
})
export class TalentEnergyMinAggregate {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  id!: "push" | "neutral" | "pull" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
