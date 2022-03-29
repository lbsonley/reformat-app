import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("NestedEnumArchetypesNullableFilter", {
  isAbstract: true
})
export class NestedEnumArchetypesNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumArchetypesNullableFilter, {
    nullable: true
  })
  not?: NestedEnumArchetypesNullableFilter | undefined;
}
