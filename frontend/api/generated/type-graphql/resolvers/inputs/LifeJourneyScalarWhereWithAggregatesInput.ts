import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLifeJourneysWithAggregatesFilter } from "../inputs/EnumLifeJourneysWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LifeJourneyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LifeJourneyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LifeJourneyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LifeJourneyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LifeJourneyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LifeJourneyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumLifeJourneysWithAggregatesFilter, {
    nullable: true
  })
  id?: EnumLifeJourneysWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
