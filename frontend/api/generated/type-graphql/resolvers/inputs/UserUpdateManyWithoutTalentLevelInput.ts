import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyTalentLevelInputEnvelope } from "../inputs/UserCreateManyTalentLevelInputEnvelope";
import { UserCreateOrConnectWithoutTalentLevelInput } from "../inputs/UserCreateOrConnectWithoutTalentLevelInput";
import { UserCreateWithoutTalentLevelInput } from "../inputs/UserCreateWithoutTalentLevelInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutTalentLevelInput } from "../inputs/UserUpdateManyWithWhereWithoutTalentLevelInput";
import { UserUpdateWithWhereUniqueWithoutTalentLevelInput } from "../inputs/UserUpdateWithWhereUniqueWithoutTalentLevelInput";
import { UserUpsertWithWhereUniqueWithoutTalentLevelInput } from "../inputs/UserUpsertWithWhereUniqueWithoutTalentLevelInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutTalentLevelInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutTalentLevelInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTalentLevelInput], {
    nullable: true
  })
  create?: UserCreateWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTalentLevelInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutTalentLevelInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyTalentLevelInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyTalentLevelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutTalentLevelInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutTalentLevelInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutTalentLevelInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
