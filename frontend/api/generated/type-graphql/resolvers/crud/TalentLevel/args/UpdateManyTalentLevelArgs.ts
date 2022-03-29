import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelUpdateManyMutationInput } from "../../../inputs/TalentLevelUpdateManyMutationInput";
import { TalentLevelWhereInput } from "../../../inputs/TalentLevelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelUpdateManyMutationInput, {
    nullable: false
  })
  data!: TalentLevelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TalentLevelWhereInput, {
    nullable: true
  })
  where?: TalentLevelWhereInput | undefined;
}
