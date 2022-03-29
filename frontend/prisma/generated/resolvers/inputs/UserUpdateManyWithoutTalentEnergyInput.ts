import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyTalentEnergyInputEnvelope } from "../inputs/UserCreateManyTalentEnergyInputEnvelope";
import { UserCreateOrConnectWithoutTalentEnergyInput } from "../inputs/UserCreateOrConnectWithoutTalentEnergyInput";
import { UserCreateWithoutTalentEnergyInput } from "../inputs/UserCreateWithoutTalentEnergyInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutTalentEnergyInput } from "../inputs/UserUpdateManyWithWhereWithoutTalentEnergyInput";
import { UserUpdateWithWhereUniqueWithoutTalentEnergyInput } from "../inputs/UserUpdateWithWhereUniqueWithoutTalentEnergyInput";
import { UserUpsertWithWhereUniqueWithoutTalentEnergyInput } from "../inputs/UserUpsertWithWhereUniqueWithoutTalentEnergyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutTalentEnergyInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutTalentEnergyInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTalentEnergyInput], {
    nullable: true
  })
  create?: UserCreateWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTalentEnergyInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutTalentEnergyInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyTalentEnergyInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyTalentEnergyInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutTalentEnergyInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutTalentEnergyInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
