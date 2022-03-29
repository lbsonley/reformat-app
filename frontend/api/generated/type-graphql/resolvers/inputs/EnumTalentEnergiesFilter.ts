import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentEnergiesFilter } from "../inputs/NestedEnumTalentEnergiesFilter";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("EnumTalentEnergiesFilter", {
  isAbstract: true
})
export class EnumTalentEnergiesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTalentEnergiesFilter, {
    nullable: true
  })
  not?: NestedEnumTalentEnergiesFilter | undefined;
}
