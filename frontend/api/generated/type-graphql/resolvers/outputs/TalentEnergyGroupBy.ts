import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyCountAggregate } from "../outputs/TalentEnergyCountAggregate";
import { TalentEnergyMaxAggregate } from "../outputs/TalentEnergyMaxAggregate";
import { TalentEnergyMinAggregate } from "../outputs/TalentEnergyMinAggregate";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.ObjectType("TalentEnergyGroupBy", {
  isAbstract: true
})
export class TalentEnergyGroupBy {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: false
  })
  id!: "push" | "neutral" | "pull";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TalentEnergyCountAggregate, {
    nullable: true
  })
  _count!: TalentEnergyCountAggregate | null;

  @TypeGraphQL.Field(_type => TalentEnergyMinAggregate, {
    nullable: true
  })
  _min!: TalentEnergyMinAggregate | null;

  @TypeGraphQL.Field(_type => TalentEnergyMaxAggregate, {
    nullable: true
  })
  _max!: TalentEnergyMaxAggregate | null;
}
