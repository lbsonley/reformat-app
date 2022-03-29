import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyLifeJourneyInput } from "../inputs/UserCreateManyLifeJourneyInput";

@TypeGraphQL.InputType("UserCreateManyLifeJourneyInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyLifeJourneyInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyLifeJourneyInput], {
    nullable: false
  })
  data!: UserCreateManyLifeJourneyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
