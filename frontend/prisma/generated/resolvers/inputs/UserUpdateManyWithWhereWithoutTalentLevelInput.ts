import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutTalentLevelInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutTalentLevelInput {
  @TypeGraphQL.Field(_type => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @TypeGraphQL.Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}
