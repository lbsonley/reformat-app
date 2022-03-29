import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentLevelsNullableFilter } from "../inputs/NestedEnumTalentLevelsNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("NestedEnumTalentLevelsNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTalentLevelsNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTalentLevelsNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumTalentLevelsNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumTalentLevelsNullableFilter | undefined;
}
