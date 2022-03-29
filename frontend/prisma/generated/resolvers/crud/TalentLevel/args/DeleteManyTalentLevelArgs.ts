import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelWhereInput } from "../../../inputs/TalentLevelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelWhereInput, {
    nullable: true
  })
  where?: TalentLevelWhereInput | undefined;
}
