import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLifeJourneysFilter } from "../inputs/NestedEnumLifeJourneysFilter";
import { LifeJourneys } from "../../enums/LifeJourneys";

@TypeGraphQL.InputType("EnumLifeJourneysFilter", {
  isAbstract: true
})
export class EnumLifeJourneysFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumLifeJourneysFilter, {
    nullable: true
  })
  not?: NestedEnumLifeJourneysFilter | undefined;
}
