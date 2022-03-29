import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyCreateInput } from "../../../inputs/TalentEnergyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyCreateInput, {
    nullable: false
  })
  data!: TalentEnergyCreateInput;
}
