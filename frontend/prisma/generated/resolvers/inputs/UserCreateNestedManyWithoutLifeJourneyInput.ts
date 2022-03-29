import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyLifeJourneyInputEnvelope } from "../inputs/UserCreateManyLifeJourneyInputEnvelope";
import { UserCreateOrConnectWithoutLifeJourneyInput } from "../inputs/UserCreateOrConnectWithoutLifeJourneyInput";
import { UserCreateWithoutLifeJourneyInput } from "../inputs/UserCreateWithoutLifeJourneyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutLifeJourneyInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutLifeJourneyInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutLifeJourneyInput], {
    nullable: true
  })
  create?: UserCreateWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutLifeJourneyInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLifeJourneyInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyLifeJourneyInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyLifeJourneyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
