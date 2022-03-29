import * as TypeGraphQL from "type-graphql";

export enum Languages {
  de = "de",
  en = "en",
  fr = "fr",
  it = "it"
}
TypeGraphQL.registerEnumType(Languages, {
  name: "Languages",
  description: undefined,
});
