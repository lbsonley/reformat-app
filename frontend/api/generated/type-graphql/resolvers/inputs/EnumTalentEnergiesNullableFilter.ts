import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentEnergiesNullableFilter } from "../inputs/NestedEnumTalentEnergiesNullableFilter";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("EnumTalentEnergiesNullableFilter", {
  isAbstract: true
})
export class EnumTalentEnergiesNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesNullableFilter, {
    nullable: true
  })
  not?: NestedEnumTalentEnergiesNullableFilter | undefined;
}
