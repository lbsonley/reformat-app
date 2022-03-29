import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentEnergiesNullableFilter } from "../inputs/NestedEnumTalentEnergiesNullableFilter";
import { NestedEnumTalentEnergiesNullableWithAggregatesFilter } from "../inputs/NestedEnumTalentEnergiesNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("EnumTalentEnergiesNullableWithAggregatesFilter", {
  isAbstract: true
})
export class EnumTalentEnergiesNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: true
  })
  equals?: "push" | "neutral" | "pull" | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergies], {
    nullable: true
  })
  in?: Array<"push" | "neutral" | "pull"> | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergies], {
    nullable: true
  })
  notIn?: Array<"push" | "neutral" | "pull"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTalentEnergiesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumTalentEnergiesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumTalentEnergiesNullableFilter | undefined;
}
