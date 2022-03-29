import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTalentLevelsFilter } from "../inputs/NestedEnumTalentLevelsFilter";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("EnumTalentLevelsFilter", {
  isAbstract: true
})
export class EnumTalentLevelsFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTalentLevelsFilter, {
    nullable: true
  })
  not?: NestedEnumTalentLevelsFilter | undefined;
}
