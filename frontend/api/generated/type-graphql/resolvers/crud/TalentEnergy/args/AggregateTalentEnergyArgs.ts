import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyOrderByWithRelationInput } from "../../../inputs/TalentEnergyOrderByWithRelationInput";
import { TalentEnergyWhereInput } from "../../../inputs/TalentEnergyWhereInput";
import { TalentEnergyWhereUniqueInput } from "../../../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTalentEnergyArgs {
  @TypeGraphQL.Field(_type => TalentEnergyWhereInput, {
    nullable: true
  })
  where?: TalentEnergyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TalentEnergyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TalentEnergyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: true
  })
  cursor?: TalentEnergyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
