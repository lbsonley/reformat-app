import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("ArchetypeWhereUniqueInput", {
  isAbstract: true
})
export class ArchetypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  id?: "mentor" | "herald" | "gatekeeper" | "joker" | undefined;
}
