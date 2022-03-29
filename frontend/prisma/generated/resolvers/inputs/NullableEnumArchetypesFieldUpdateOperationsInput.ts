import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("NullableEnumArchetypesFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumArchetypesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  set?: "mentor" | "herald" | "gatekeeper" | "joker" | undefined;
}
