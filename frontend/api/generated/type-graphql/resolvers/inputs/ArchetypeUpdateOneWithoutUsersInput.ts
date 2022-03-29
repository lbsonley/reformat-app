import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCreateOrConnectWithoutUsersInput } from "../inputs/ArchetypeCreateOrConnectWithoutUsersInput";
import { ArchetypeCreateWithoutUsersInput } from "../inputs/ArchetypeCreateWithoutUsersInput";
import { ArchetypeUpdateWithoutUsersInput } from "../inputs/ArchetypeUpdateWithoutUsersInput";
import { ArchetypeUpsertWithoutUsersInput } from "../inputs/ArchetypeUpsertWithoutUsersInput";
import { ArchetypeWhereUniqueInput } from "../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.InputType("ArchetypeUpdateOneWithoutUsersInput", {
  isAbstract: true
})
export class ArchetypeUpdateOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => ArchetypeCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ArchetypeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ArchetypeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: ArchetypeUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ArchetypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: ArchetypeUpdateWithoutUsersInput | undefined;
}
