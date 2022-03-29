import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumArchetypesFilter } from "../inputs/NestedEnumArchetypesFilter";
import { NestedEnumArchetypesWithAggregatesFilter } from "../inputs/NestedEnumArchetypesWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("EnumArchetypesWithAggregatesFilter", {
  isAbstract: true
})
export class EnumArchetypesWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: true
  })
  equals?: "mentor" | "herald" | "gatekeeper" | "joker" | undefined;

  @TypeGraphQL.Field(_type => [Archetypes], {
    nullable: true
  })
  in?: Array<"mentor" | "herald" | "gatekeeper" | "joker"> | undefined;

  @TypeGraphQL.Field(_type => [Archetypes], {
    nullable: true
  })
  notIn?: Array<"mentor" | "herald" | "gatekeeper" | "joker"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumArchetypesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumArchetypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumArchetypesFilter, {
    nullable: true
  })
  _min?: NestedEnumArchetypesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumArchetypesFilter, {
    nullable: true
  })
  _max?: NestedEnumArchetypesFilter | undefined;
}
