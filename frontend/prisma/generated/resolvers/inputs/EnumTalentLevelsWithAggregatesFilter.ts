import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentLevelsFilter } from "../inputs/NestedEnumTalentLevelsFilter";
import { NestedEnumTalentLevelsWithAggregatesFilter } from "../inputs/NestedEnumTalentLevelsWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("EnumTalentLevelsWithAggregatesFilter", {
  isAbstract: true
})
export class EnumTalentLevelsWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTalentLevelsWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsFilter, {
    nullable: true
  })
  _min?: NestedEnumTalentLevelsFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsFilter, {
    nullable: true
  })
  _max?: NestedEnumTalentLevelsFilter | undefined;
}
