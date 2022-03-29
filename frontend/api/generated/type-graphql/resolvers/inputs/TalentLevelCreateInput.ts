import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutTalentLevelInput } from "../inputs/UserCreateNestedManyWithoutTalentLevelInput";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("TalentLevelCreateInput", {
  isAbstract: true
})
export class TalentLevelCreateInput {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: false
  })
  id!: "ego" | "emotion" | "tao";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTalentLevelInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutTalentLevelInput | undefined;
}
