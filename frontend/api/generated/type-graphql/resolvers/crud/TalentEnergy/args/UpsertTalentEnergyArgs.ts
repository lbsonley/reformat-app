import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyCreateInput } from "../../../inputs/TalentEnergyCreateInput";
import { TalentEnergyUpdateInput } from "../../../inputs/TalentEnergyUpdateInput";
import { TalentEnergyWhereUniqueInput } from "../../../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: false
  })
  where!: TalentEnergyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TalentEnergyCreateInput, {
    nullable: false
  })
  create!: TalentEnergyCreateInput;

  @TypeGraphQL.Field(_type => TalentEnergyUpdateInput, {
    nullable: false
  })
  update!: TalentEnergyUpdateInput;
}
