import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyWhereInput } from "../../../inputs/TalentEnergyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyWhereInput, {
    nullable: true
  })
  where?: TalentEnergyWhereInput | undefined;
}
