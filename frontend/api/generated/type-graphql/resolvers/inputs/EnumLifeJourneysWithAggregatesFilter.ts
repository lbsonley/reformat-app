import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLifeJourneysFilter } from "../inputs/NestedEnumLifeJourneysFilter";
import { NestedEnumLifeJourneysWithAggregatesFilter } from "../inputs/NestedEnumLifeJourneysWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("EnumLifeJourneysWithAggregatesFilter", {
  isAbstract: true
})
export class EnumLifeJourneysWithAggregatesFilter {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: true
  })
  equals?: "learn" | "stand" | "resolve" | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneys], {
    nullable: true
  })
  in?: Array<"learn" | "stand" | "resolve"> | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneys], {
    nullable: true
  })
  notIn?: Array<"learn" | "stand" | "resolve"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumLifeJourneysWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysFilter, {
    nullable: true
  })
  _min?: NestedEnumLifeJourneysFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysFilter, {
    nullable: true
  })
  _max?: NestedEnumLifeJourneysFilter | undefined;
}
