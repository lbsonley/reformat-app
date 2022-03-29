import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Languages } from "../../enums/Languages";

@TypeGraphQL.InputType("NestedEnumLanguagesFilter", {
  isAbstract: true
})
export class NestedEnumLanguagesFilter {
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
