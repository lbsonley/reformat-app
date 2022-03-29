import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyLifeJourneyInputEnvelope } from "../inputs/UserCreateManyLifeJourneyInputEnvelope";
import { UserCreateOrConnectWithoutLifeJourneyInput } from "../inputs/UserCreateOrConnectWithoutLifeJourneyInput";
import { UserCreateWithoutLifeJourneyInput } from "../inputs/UserCreateWithoutLifeJourneyInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLifeJourneyInput } from "../inputs/UserUpdateManyWithWhereWithoutLifeJourneyInput";
import { UserUpdateWithWhereUniqueWithoutLifeJourneyInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLifeJourneyInput";
import { UserUpsertWithWhereUniqueWithoutLifeJourneyInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLifeJourneyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutLifeJourneyInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutLifeJourneyInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLifeJourneyInput], {
    nullable: true
  })
  create?: UserCreateWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLifeJourneyInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutLifeJourneyInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyLifeJourneyInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyLifeJourneyInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutLifeJourneyInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutLifeJourneyInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
