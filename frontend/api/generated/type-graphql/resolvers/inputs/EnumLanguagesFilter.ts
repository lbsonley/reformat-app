import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumLanguagesFilter } from "../inputs/NestedEnumLanguagesFilter";
import { Languages } from "../../enums/Languages";

@TypeGraphQL.InputType("EnumLanguagesFilter", {
  isAbstract: true
})
export class EnumLanguagesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumLanguagesFilter, {
    nullable: true
  })
  not?: NestedEnumLanguagesFilter | undefined;
}
