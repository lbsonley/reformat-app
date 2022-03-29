import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyTalentLevelInput } from "../inputs/UserCreateManyTalentLevelInput";

@TypeGraphQL.InputType("UserCreateManyTalentLevelInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyTalentLevelInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyTalentLevelInput], {
    nullable: false
  })
  data!: UserCreateManyTalentLevelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
