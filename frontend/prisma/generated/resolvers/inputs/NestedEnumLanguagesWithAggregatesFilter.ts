import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLanguagesFilter } from "../inputs/NestedEnumLanguagesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Languages } from "../../enums/Languages";

@TypeGraphQL.InputType("NestedEnumLanguagesWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumLanguagesWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Languages, {
    nullable: true
  })
  equals?: "de" | "en" | "fr" | "it" | undefined;

  @TypeGraphQL.Field(_type => [Languages], {
    nullable: true
  })
  in?: Array<"de" | "en" | "fr" | "it"> | undefined;

  @TypeGraphQL.Field(_type => [Languages], {
    nullable: true
  })
  notIn?: Array<"de" | "en" | "fr" | "it"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLanguagesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumLanguagesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLanguagesFilter, {
    nullable: true
  })
  _min?: NestedEnumLanguagesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumLanguagesFilter, {
    nullable: true
  })
  _max?: NestedEnumLanguagesFilter | undefined;
}
