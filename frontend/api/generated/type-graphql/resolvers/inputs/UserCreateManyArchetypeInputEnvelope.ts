import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyArchetypeInput } from "../inputs/UserCreateManyArchetypeInput";

@TypeGraphQL.InputType("UserCreateManyArchetypeInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyArchetypeInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyArchetypeInput], {
    nullable: false
  })
  data!: UserCreateManyArchetypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
