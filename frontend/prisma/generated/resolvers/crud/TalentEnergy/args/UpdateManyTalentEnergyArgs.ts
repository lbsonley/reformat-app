import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyUpdateManyMutationInput } from "../../../inputs/TalentEnergyUpdateManyMutationInput";
import { TalentEnergyWhereInput } from "../../../inputs/TalentEnergyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TalentEnergyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TalentEnergyWhereInput, {
    nullable: true
  })
  where?: TalentEnergyWhereInput | undefined;
}
