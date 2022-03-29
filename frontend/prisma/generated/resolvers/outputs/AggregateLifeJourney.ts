import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCountAggregate } from "../outputs/LifeJourneyCountAggregate";
import { LifeJourneyMaxAggregate } from "../outputs/LifeJourneyMaxAggregate";
import { LifeJourneyMinAggregate } from "../outputs/LifeJourneyMinAggregate";

@TypeGraphQL.ObjectType("AggregateLifeJourney", {
  isAbstract: true
})
export class AggregateLifeJourney {
  @TypeGraphQL.Field(_type => LifeJourneyCountAggregate, {
    nullable: true
  })
  _count!: LifeJourneyCountAggregate | null;

  @TypeGraphQL.Field(_type => LifeJourneyMinAggregate, {
    nullable: true
  })
  _min!: LifeJourneyMinAggregate | null;

  @TypeGraphQL.Field(_type => LifeJourneyMaxAggregate, {
    nullable: true
  })
  _max!: LifeJourneyMaxAggregate | null;
}
