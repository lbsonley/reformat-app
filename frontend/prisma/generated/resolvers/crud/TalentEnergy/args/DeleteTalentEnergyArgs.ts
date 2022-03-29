import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyWhereUniqueInput } from "../../../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: false
  })
  where!: TalentEnergyWhereUniqueInput;
}
