import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCreateOrConnectWithoutUsersInput } from "../inputs/LifeJourneyCreateOrConnectWithoutUsersInput";
import { LifeJourneyCreateWithoutUsersInput } from "../inputs/LifeJourneyCreateWithoutUsersInput";
import { LifeJourneyUpdateWithoutUsersInput } from "../inputs/LifeJourneyUpdateWithoutUsersInput";
import { LifeJourneyUpsertWithoutUsersInput } from "../inputs/LifeJourneyUpsertWithoutUsersInput";
import { LifeJourneyWhereUniqueInput } from "../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.InputType("LifeJourneyUpdateOneWithoutUsersInput", {
  isAbstract: true
})
export class LifeJourneyUpdateOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => LifeJourneyCreateWithoutUsersInput, {
    nullable: true
  })
  create?: LifeJourneyCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: LifeJourneyCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: LifeJourneyUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: true
  })
  connect?: LifeJourneyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: LifeJourneyUpdateWithoutUsersInput | undefined;
}
