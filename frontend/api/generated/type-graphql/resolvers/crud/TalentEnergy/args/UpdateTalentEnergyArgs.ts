import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyUpdateInput } from "../../../inputs/TalentEnergyUpdateInput";
import { TalentEnergyWhereUniqueInput } from "../../../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyUpdateInput, {
    nullable: false
  })
  data!: TalentEnergyUpdateInput;

  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: false
  })
  where!: TalentEnergyWhereUniqueInput;
}
