import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCountAggregate } from "../outputs/ArchetypeCountAggregate";
import { ArchetypeMaxAggregate } from "../outputs/ArchetypeMaxAggregate";
import { ArchetypeMinAggregate } from "../outputs/ArchetypeMinAggregate";

@TypeGraphQL.ObjectType("AggregateArchetype", {
  isAbstract: true
})
export class AggregateArchetype {
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
