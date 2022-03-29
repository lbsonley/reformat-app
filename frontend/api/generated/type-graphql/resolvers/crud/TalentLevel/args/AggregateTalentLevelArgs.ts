import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelOrderByWithRelationInput } from "../../../inputs/TalentLevelOrderByWithRelationInput";
import { TalentLevelWhereInput } from "../../../inputs/TalentLevelWhereInput";
import { TalentLevelWhereUniqueInput } from "../../../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelWhereInput, {
    nullable: true
  })
  where?: TalentLevelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TalentLevelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TalentLevelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: true
  })
  cursor?: TalentLevelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
