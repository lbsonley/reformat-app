import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("ArchetypeCreateManyInput", {
  isAbstract: true
})
export class ArchetypeCreateManyInput {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: false
  })
  id!: "mentor" | "herald" | "gatekeeper" | "joker";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
