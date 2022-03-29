import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.ObjectType("ArchetypeMinAggregate", {
  isAbstract: true
})
export class ArchetypeMinAggregate {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  id!: "mentor" | "herald" | "gatekeeper" | "joker" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
