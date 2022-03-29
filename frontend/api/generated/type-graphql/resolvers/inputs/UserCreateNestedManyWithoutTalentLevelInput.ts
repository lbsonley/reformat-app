import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyTalentLevelInputEnvelope } from "../inputs/UserCreateManyTalentLevelInputEnvelope";
import { UserCreateOrConnectWithoutTalentLevelInput } from "../inputs/UserCreateOrConnectWithoutTalentLevelInput";
import { UserCreateWithoutTalentLevelInput } from "../inputs/UserCreateWithoutTalentLevelInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutTalentLevelInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutTalentLevelInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTalentLevelInput], {
    nullable: true
  })
  create?: UserCreateWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTalentLevelInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyTalentLevelInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyTalentLevelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
