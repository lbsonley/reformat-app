import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyArchetypeInputEnvelope } from "../inputs/UserCreateManyArchetypeInputEnvelope";
import { UserCreateOrConnectWithoutArchetypeInput } from "../inputs/UserCreateOrConnectWithoutArchetypeInput";
import { UserCreateWithoutArchetypeInput } from "../inputs/UserCreateWithoutArchetypeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutArchetypeInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutArchetypeInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutArchetypeInput], {
    nullable: true
  })
  create?: UserCreateWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutArchetypeInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutArchetypeInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyArchetypeInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyArchetypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
