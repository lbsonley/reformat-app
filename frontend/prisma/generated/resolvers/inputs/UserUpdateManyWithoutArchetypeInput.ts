import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyArchetypeInputEnvelope } from "../inputs/UserCreateManyArchetypeInputEnvelope";
import { UserCreateOrConnectWithoutArchetypeInput } from "../inputs/UserCreateOrConnectWithoutArchetypeInput";
import { UserCreateWithoutArchetypeInput } from "../inputs/UserCreateWithoutArchetypeInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutArchetypeInput } from "../inputs/UserUpdateManyWithWhereWithoutArchetypeInput";
import { UserUpdateWithWhereUniqueWithoutArchetypeInput } from "../inputs/UserUpdateWithWhereUniqueWithoutArchetypeInput";
import { UserUpsertWithWhereUniqueWithoutArchetypeInput } from "../inputs/UserUpsertWithWhereUniqueWithoutArchetypeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutArchetypeInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutArchetypeInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutArchetypeInput], {
    nullable: true
  })
  create?: UserCreateWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutArchetypeInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutArchetypeInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyArchetypeInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyArchetypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutArchetypeInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutArchetypeInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
