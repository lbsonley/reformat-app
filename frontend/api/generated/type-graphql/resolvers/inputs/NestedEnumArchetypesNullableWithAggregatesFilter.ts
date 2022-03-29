import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumArchetypesNullableFilter } from "../inputs/NestedEnumArchetypesNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("NestedEnumArchetypesNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumArchetypesNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumArchetypesNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumArchetypesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumArchetypesNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumArchetypesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumArchetypesNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumArchetypesNullableFilter | undefined;
}
