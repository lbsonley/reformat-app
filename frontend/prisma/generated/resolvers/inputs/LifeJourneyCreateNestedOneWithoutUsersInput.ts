import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCreateOrConnectWithoutUsersInput } from "../inputs/LifeJourneyCreateOrConnectWithoutUsersInput";
import { LifeJourneyCreateWithoutUsersInput } from "../inputs/LifeJourneyCreateWithoutUsersInput";
import { LifeJourneyWhereUniqueInput } from "../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.InputType("LifeJourneyCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class LifeJourneyCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => LifeJourneyCreateWithoutUsersInput, {
    nullable: true
  })
  create?: LifeJourneyCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: LifeJourneyCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: true
  })
  connect?: LifeJourneyWhereUniqueInput | undefined;
}
