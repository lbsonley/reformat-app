import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCountAggregate } from "../outputs/ArchetypeCountAggregate";
import { ArchetypeMaxAggregate } from "../outputs/ArchetypeMaxAggregate";
import { ArchetypeMinAggregate } from "../outputs/ArchetypeMinAggregate";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.ObjectType("ArchetypeGroupBy", {
  isAbstract: true
})
export class ArchetypeGroupBy {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: false
  })
  id!: "mentor" | "herald" | "gatekeeper" | "joker";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ArchetypeCountAggregate, {
    nullable: true
  })
  _count!: ArchetypeCountAggregate | null;

  @TypeGraphQL.Field(_type => ArchetypeMinAggregate, {
    nullable: true
  })
  _min!: ArchetypeMinAggregate | null;

  @TypeGraphQL.Field(_type => ArchetypeMaxAggregate, {
    nullable: true
  })
  _max!: ArchetypeMaxAggregate | null;
}
