import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("TalentLevelCreateManyInput", {
  isAbstract: true
})
export class TalentLevelCreateManyInput {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: false
  })
  id!: "ego" | "emotion" | "tao";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
