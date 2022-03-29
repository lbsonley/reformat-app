import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { Archetypes } from "../enums/Archetypes";
import { ArchetypeCount } from "../resolvers/outputs/ArchetypeCount";

@TypeGraphQL.ObjectType("Archetype", {
  isAbstract: true
})
export class Archetype {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: false
  })
  id!: "mentor" | "herald" | "gatekeeper" | "joker";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => ArchetypeCount, {
    nullable: true
  })
  _count?: ArchetypeCount | null;
}
