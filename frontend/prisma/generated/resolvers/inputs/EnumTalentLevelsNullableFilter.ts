import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentLevelsNullableFilter } from "../inputs/NestedEnumTalentLevelsNullableFilter";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("EnumTalentLevelsNullableFilter", {
  isAbstract: true
})
export class EnumTalentLevelsNullableFilter {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  equals?: "ego" | "emotion" | "tao" | undefined;

  @TypeGraphQL.Field(_type => [TalentLevels], {
    nullable: true
  })
  in?: Array<"ego" | "emotion" | "tao"> | undefined;

  @TypeGraphQL.Field(_type => [TalentLevels], {
    nullable: true
  })
  notIn?: Array<"ego" | "emotion" | "tao"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsNullableFilter, {
    nullable: true
  })
  not?: NestedEnumTalentLevelsNullableFilter | undefined;
}
