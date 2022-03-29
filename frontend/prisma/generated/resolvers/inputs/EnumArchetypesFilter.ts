import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumArchetypesFilter } from "../inputs/NestedEnumArchetypesFilter";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("EnumArchetypesFilter", {
  isAbstract: true
})
export class EnumArchetypesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumArchetypesFilter, {
    nullable: true
  })
  not?: NestedEnumArchetypesFilter | undefined;
}
