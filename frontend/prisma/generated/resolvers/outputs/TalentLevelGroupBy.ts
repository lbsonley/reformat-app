import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelCountAggregate } from "../outputs/TalentLevelCountAggregate";
import { TalentLevelMaxAggregate } from "../outputs/TalentLevelMaxAggregate";
import { TalentLevelMinAggregate } from "../outputs/TalentLevelMinAggregate";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.ObjectType("TalentLevelGroupBy", {
  isAbstract: true
})
export class TalentLevelGroupBy {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: false
  })
  id!: "ego" | "emotion" | "tao";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TalentLevelCountAggregate, {
    nullable: true
  })
  _count!: TalentLevelCountAggregate | null;

  @TypeGraphQL.Field(_type => TalentLevelMinAggregate, {
    nullable: true
  })
  _min!: TalentLevelMinAggregate | null;

  @TypeGraphQL.Field(_type => TalentLevelMaxAggregate, {
    nullable: true
  })
  _max!: TalentLevelMaxAggregate | null;
}
