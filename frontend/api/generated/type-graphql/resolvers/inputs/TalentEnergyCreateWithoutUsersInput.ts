import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("TalentEnergyCreateWithoutUsersInput", {
  isAbstract: true
})
export class TalentEnergyCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: false
  })
  id!: "push" | "neutral" | "pull";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
