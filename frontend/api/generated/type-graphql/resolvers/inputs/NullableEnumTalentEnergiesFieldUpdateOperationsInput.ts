import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("NullableEnumTalentEnergiesFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumTalentEnergiesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  set?: "push" | "neutral" | "pull" | undefined;
}
