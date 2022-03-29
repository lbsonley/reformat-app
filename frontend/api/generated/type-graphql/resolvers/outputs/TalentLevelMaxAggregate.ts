import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.ObjectType("TalentLevelMaxAggregate", {
  isAbstract: true
})
export class TalentLevelMaxAggregate {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  id!: "ego" | "emotion" | "tao" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
