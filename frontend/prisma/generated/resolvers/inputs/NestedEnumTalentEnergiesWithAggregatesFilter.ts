import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentEnergiesFilter } from "../inputs/NestedEnumTalentEnergiesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("NestedEnumTalentEnergiesWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumTalentEnergiesWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTalentEnergiesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesFilter, {
    nullable: true
  })
  _min?: NestedEnumTalentEnergiesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesFilter, {
    nullable: true
  })
  _max?: NestedEnumTalentEnergiesFilter | undefined;
}
