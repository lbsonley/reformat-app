import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Archetype: crudResolvers.ArchetypeCrudResolver,
  LifeJourney: crudResolvers.LifeJourneyCrudResolver,
  TalentLevel: crudResolvers.TalentLevelCrudResolver,
  TalentEnergy: crudResolvers.TalentEnergyCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Archetype: {
    archetype: actionResolvers.FindUniqueArchetypeResolver,
    findFirstArchetype: actionResolvers.FindFirstArchetypeResolver,
    archetypes: actionResolvers.FindManyArchetypeResolver,
    createArchetype: actionResolvers.CreateArchetypeResolver,
    createManyArchetype: actionResolvers.CreateManyArchetypeResolver,
    deleteArchetype: actionResolvers.DeleteArchetypeResolver,
    updateArchetype: actionResolvers.UpdateArchetypeResolver,
    deleteManyArchetype: actionResolvers.DeleteManyArchetypeResolver,
    updateManyArchetype: actionResolvers.UpdateManyArchetypeResolver,
    upsertArchetype: actionResolvers.UpsertArchetypeResolver,
    aggregateArchetype: actionResolvers.AggregateArchetypeResolver,
    groupByArchetype: actionResolvers.GroupByArchetypeResolver
  },
  LifeJourney: {
    lifeJourney: actionResolvers.FindUniqueLifeJourneyResolver,
    findFirstLifeJourney: actionResolvers.FindFirstLifeJourneyResolver,
    lifeJourneys: actionResolvers.FindManyLifeJourneyResolver,
    createLifeJourney: actionResolvers.CreateLifeJourneyResolver,
    createManyLifeJourney: actionResolvers.CreateManyLifeJourneyResolver,
    deleteLifeJourney: actionResolvers.DeleteLifeJourneyResolver,
    updateLifeJourney: actionResolvers.UpdateLifeJourneyResolver,
    deleteManyLifeJourney: actionResolvers.DeleteManyLifeJourneyResolver,
    updateManyLifeJourney: actionResolvers.UpdateManyLifeJourneyResolver,
    upsertLifeJourney: actionResolvers.UpsertLifeJourneyResolver,
    aggregateLifeJourney: actionResolvers.AggregateLifeJourneyResolver,
    groupByLifeJourney: actionResolvers.GroupByLifeJourneyResolver
  },
  TalentLevel: {
    talentLevel: actionResolvers.FindUniqueTalentLevelResolver,
    findFirstTalentLevel: actionResolvers.FindFirstTalentLevelResolver,
    talentLevels: actionResolvers.FindManyTalentLevelResolver,
    createTalentLevel: actionResolvers.CreateTalentLevelResolver,
    createManyTalentLevel: actionResolvers.CreateManyTalentLevelResolver,
    deleteTalentLevel: actionResolvers.DeleteTalentLevelResolver,
    updateTalentLevel: actionResolvers.UpdateTalentLevelResolver,
    deleteManyTalentLevel: actionResolvers.DeleteManyTalentLevelResolver,
    updateManyTalentLevel: actionResolvers.UpdateManyTalentLevelResolver,
    upsertTalentLevel: actionResolvers.UpsertTalentLevelResolver,
    aggregateTalentLevel: actionResolvers.AggregateTalentLevelResolver,
    groupByTalentLevel: actionResolvers.GroupByTalentLevelResolver
  },
  TalentEnergy: {
    talentEnergy: actionResolvers.FindUniqueTalentEnergyResolver,
    findFirstTalentEnergy: actionResolvers.FindFirstTalentEnergyResolver,
    talentEnergies: actionResolvers.FindManyTalentEnergyResolver,
    createTalentEnergy: actionResolvers.CreateTalentEnergyResolver,
    createManyTalentEnergy: actionResolvers.CreateManyTalentEnergyResolver,
    deleteTalentEnergy: actionResolvers.DeleteTalentEnergyResolver,
    updateTalentEnergy: actionResolvers.UpdateTalentEnergyResolver,
    deleteManyTalentEnergy: actionResolvers.DeleteManyTalentEnergyResolver,
    updateManyTalentEnergy: actionResolvers.UpdateManyTalentEnergyResolver,
    upsertTalentEnergy: actionResolvers.UpsertTalentEnergyResolver,
    aggregateTalentEnergy: actionResolvers.AggregateTalentEnergyResolver,
    groupByTalentEnergy: actionResolvers.GroupByTalentEnergyResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Archetype: ["archetype", "findFirstArchetype", "archetypes", "createArchetype", "createManyArchetype", "deleteArchetype", "updateArchetype", "deleteManyArchetype", "updateManyArchetype", "upsertArchetype", "aggregateArchetype", "groupByArchetype"],
  LifeJourney: ["lifeJourney", "findFirstLifeJourney", "lifeJourneys", "createLifeJourney", "createManyLifeJourney", "deleteLifeJourney", "updateLifeJourney", "deleteManyLifeJourney", "updateManyLifeJourney", "upsertLifeJourney", "aggregateLifeJourney", "groupByLifeJourney"],
  TalentLevel: ["talentLevel", "findFirstTalentLevel", "talentLevels", "createTalentLevel", "createManyTalentLevel", "deleteTalentLevel", "updateTalentLevel", "deleteManyTalentLevel", "updateManyTalentLevel", "upsertTalentLevel", "aggregateTalentLevel", "groupByTalentLevel"],
  TalentEnergy: ["talentEnergy", "findFirstTalentEnergy", "talentEnergies", "createTalentEnergy", "createManyTalentEnergy", "deleteTalentEnergy", "updateTalentEnergy", "deleteManyTalentEnergy", "updateManyTalentEnergy", "upsertTalentEnergy", "aggregateTalentEnergy", "groupByTalentEnergy"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueArchetypeArgs: ["where"],
  FindFirstArchetypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyArchetypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateArchetypeArgs: ["data"],
  CreateManyArchetypeArgs: ["data", "skipDuplicates"],
  DeleteArchetypeArgs: ["where"],
  UpdateArchetypeArgs: ["data", "where"],
  DeleteManyArchetypeArgs: ["where"],
  UpdateManyArchetypeArgs: ["data", "where"],
  UpsertArchetypeArgs: ["where", "create", "update"],
  AggregateArchetypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByArchetypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueLifeJourneyArgs: ["where"],
  FindFirstLifeJourneyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLifeJourneyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateLifeJourneyArgs: ["data"],
  CreateManyLifeJourneyArgs: ["data", "skipDuplicates"],
  DeleteLifeJourneyArgs: ["where"],
  UpdateLifeJourneyArgs: ["data", "where"],
  DeleteManyLifeJourneyArgs: ["where"],
  UpdateManyLifeJourneyArgs: ["data", "where"],
  UpsertLifeJourneyArgs: ["where", "create", "update"],
  AggregateLifeJourneyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByLifeJourneyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTalentLevelArgs: ["where"],
  FindFirstTalentLevelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTalentLevelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTalentLevelArgs: ["data"],
  CreateManyTalentLevelArgs: ["data", "skipDuplicates"],
  DeleteTalentLevelArgs: ["where"],
  UpdateTalentLevelArgs: ["data", "where"],
  DeleteManyTalentLevelArgs: ["where"],
  UpdateManyTalentLevelArgs: ["data", "where"],
  UpsertTalentLevelArgs: ["where", "create", "update"],
  AggregateTalentLevelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTalentLevelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTalentEnergyArgs: ["where"],
  FindFirstTalentEnergyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTalentEnergyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTalentEnergyArgs: ["data"],
  CreateManyTalentEnergyArgs: ["data", "skipDuplicates"],
  DeleteTalentEnergyArgs: ["where"],
  UpdateTalentEnergyArgs: ["data", "where"],
  DeleteManyTalentEnergyArgs: ["where"],
  UpdateManyTalentEnergyArgs: ["data", "where"],
  UpsertTalentEnergyArgs: ["where", "create", "update"],
  AggregateTalentEnergyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTalentEnergyArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Archetype: relationResolvers.ArchetypeRelationsResolver,
  LifeJourney: relationResolvers.LifeJourneyRelationsResolver,
  TalentLevel: relationResolvers.TalentLevelRelationsResolver,
  TalentEnergy: relationResolvers.TalentEnergyRelationsResolver
};
const relationResolversInfo = {
  User: ["archetype", "lifeJourney", "talentLevel", "talentEnergy"],
  Archetype: ["users"],
  LifeJourney: ["users"],
  TalentLevel: ["users"],
  TalentEnergy: ["users"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  Archetype: ["id", "name"],
  LifeJourney: ["id", "name"],
  TalentLevel: ["id", "name"],
  TalentEnergy: ["id", "name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress", "_count", "_min", "_max"],
  AggregateArchetype: ["_count", "_min", "_max"],
  ArchetypeGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateLifeJourney: ["_count", "_min", "_max"],
  LifeJourneyGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateTalentLevel: ["_count", "_min", "_max"],
  TalentLevelGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateTalentEnergy: ["_count", "_min", "_max"],
  TalentEnergyGroupBy: ["id", "name", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress", "_all"],
  UserMinAggregate: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserMaxAggregate: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  ArchetypeCount: ["users"],
  ArchetypeCountAggregate: ["id", "name", "_all"],
  ArchetypeMinAggregate: ["id", "name"],
  ArchetypeMaxAggregate: ["id", "name"],
  LifeJourneyCount: ["users"],
  LifeJourneyCountAggregate: ["id", "name", "_all"],
  LifeJourneyMinAggregate: ["id", "name"],
  LifeJourneyMaxAggregate: ["id", "name"],
  TalentLevelCount: ["users"],
  TalentLevelCountAggregate: ["id", "name", "_all"],
  TalentLevelMinAggregate: ["id", "name"],
  TalentLevelMaxAggregate: ["id", "name"],
  TalentEnergyCount: ["users"],
  TalentEnergyCountAggregate: ["id", "name", "_all"],
  TalentEnergyMinAggregate: ["id", "name"],
  TalentEnergyMaxAggregate: ["id", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "archetype", "lifeJourneyId", "lifeJourney", "talent", "talentLevelId", "talentLevel", "talentEnergyId", "talentEnergy", "heroJourneyProgress"],
  UserOrderByWithRelationInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "archetype", "lifeJourneyId", "lifeJourney", "talent", "talentLevelId", "talentLevel", "talentEnergyId", "talentEnergy", "heroJourneyProgress"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  ArchetypeWhereInput: ["AND", "OR", "NOT", "id", "name", "users"],
  ArchetypeOrderByWithRelationInput: ["id", "name", "users"],
  ArchetypeWhereUniqueInput: ["id"],
  ArchetypeOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  ArchetypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  LifeJourneyWhereInput: ["AND", "OR", "NOT", "id", "name", "users"],
  LifeJourneyOrderByWithRelationInput: ["id", "name", "users"],
  LifeJourneyWhereUniqueInput: ["id"],
  LifeJourneyOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  LifeJourneyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  TalentLevelWhereInput: ["AND", "OR", "NOT", "id", "name", "users"],
  TalentLevelOrderByWithRelationInput: ["id", "name", "users"],
  TalentLevelWhereUniqueInput: ["id"],
  TalentLevelOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  TalentLevelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  TalentEnergyWhereInput: ["AND", "OR", "NOT", "id", "name", "users"],
  TalentEnergyOrderByWithRelationInput: ["id", "name", "users"],
  TalentEnergyWhereUniqueInput: ["id"],
  TalentEnergyOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  TalentEnergyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  UserCreateInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "lifeJourney", "talent", "talentLevel", "talentEnergy", "heroJourneyProgress"],
  UserUpdateInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "lifeJourney", "talent", "talentLevel", "talentEnergy", "heroJourneyProgress"],
  UserCreateManyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserUpdateManyMutationInput: ["id", "email", "firstName", "lastName", "language", "animal", "talent", "heroJourneyProgress"],
  ArchetypeCreateInput: ["id", "name", "users"],
  ArchetypeUpdateInput: ["id", "name", "users"],
  ArchetypeCreateManyInput: ["id", "name"],
  ArchetypeUpdateManyMutationInput: ["id", "name"],
  LifeJourneyCreateInput: ["id", "name", "users"],
  LifeJourneyUpdateInput: ["id", "name", "users"],
  LifeJourneyCreateManyInput: ["id", "name"],
  LifeJourneyUpdateManyMutationInput: ["id", "name"],
  TalentLevelCreateInput: ["id", "name", "users"],
  TalentLevelUpdateInput: ["id", "name", "users"],
  TalentLevelCreateManyInput: ["id", "name"],
  TalentLevelUpdateManyMutationInput: ["id", "name"],
  TalentEnergyCreateInput: ["id", "name", "users"],
  TalentEnergyUpdateInput: ["id", "name", "users"],
  TalentEnergyCreateManyInput: ["id", "name"],
  TalentEnergyUpdateManyMutationInput: ["id", "name"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumLanguagesFilter: ["equals", "in", "notIn", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumArchetypesNullableFilter: ["equals", "in", "notIn", "not"],
  ArchetypeRelationFilter: ["is", "isNot"],
  EnumLifeJourneysNullableFilter: ["equals", "in", "notIn", "not"],
  LifeJourneyRelationFilter: ["is", "isNot"],
  EnumTalentLevelsNullableFilter: ["equals", "in", "notIn", "not"],
  TalentLevelRelationFilter: ["is", "isNot"],
  EnumTalentEnergiesNullableFilter: ["equals", "in", "notIn", "not"],
  TalentEnergyRelationFilter: ["is", "isNot"],
  UserCountOrderByAggregateInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserMaxOrderByAggregateInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserMinOrderByAggregateInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumLanguagesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumArchetypesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumLifeJourneysNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumTalentLevelsNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumTalentEnergiesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumArchetypesFilter: ["equals", "in", "notIn", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  ArchetypeCountOrderByAggregateInput: ["id", "name"],
  ArchetypeMaxOrderByAggregateInput: ["id", "name"],
  ArchetypeMinOrderByAggregateInput: ["id", "name"],
  EnumArchetypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumLifeJourneysFilter: ["equals", "in", "notIn", "not"],
  LifeJourneyCountOrderByAggregateInput: ["id", "name"],
  LifeJourneyMaxOrderByAggregateInput: ["id", "name"],
  LifeJourneyMinOrderByAggregateInput: ["id", "name"],
  EnumLifeJourneysWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumTalentLevelsFilter: ["equals", "in", "notIn", "not"],
  TalentLevelCountOrderByAggregateInput: ["id", "name"],
  TalentLevelMaxOrderByAggregateInput: ["id", "name"],
  TalentLevelMinOrderByAggregateInput: ["id", "name"],
  EnumTalentLevelsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumTalentEnergiesFilter: ["equals", "in", "notIn", "not"],
  TalentEnergyCountOrderByAggregateInput: ["id", "name"],
  TalentEnergyMaxOrderByAggregateInput: ["id", "name"],
  TalentEnergyMinOrderByAggregateInput: ["id", "name"],
  EnumTalentEnergiesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ArchetypeCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  LifeJourneyCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  TalentLevelCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  TalentEnergyCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumLanguagesFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  ArchetypeUpdateOneWithoutUsersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  LifeJourneyUpdateOneWithoutUsersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TalentLevelUpdateOneWithoutUsersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TalentEnergyUpdateOneWithoutUsersInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableEnumArchetypesFieldUpdateOperationsInput: ["set"],
  NullableEnumLifeJourneysFieldUpdateOperationsInput: ["set"],
  NullableEnumTalentLevelsFieldUpdateOperationsInput: ["set"],
  NullableEnumTalentEnergiesFieldUpdateOperationsInput: ["set"],
  UserCreateNestedManyWithoutArchetypeInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumArchetypesFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutArchetypeInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutLifeJourneyInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumLifeJourneysFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutLifeJourneyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutTalentLevelInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumTalentLevelsFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutTalentLevelInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedManyWithoutTalentEnergyInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumTalentEnergiesFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutTalentEnergyInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumLanguagesFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumArchetypesNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumLifeJourneysNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTalentLevelsNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTalentEnergiesNullableFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumLanguagesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumArchetypesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumLifeJourneysNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTalentLevelsNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTalentEnergiesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumArchetypesFilter: ["equals", "in", "notIn", "not"],
  NestedEnumArchetypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumLifeJourneysFilter: ["equals", "in", "notIn", "not"],
  NestedEnumLifeJourneysWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTalentLevelsFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTalentLevelsWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTalentEnergiesFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTalentEnergiesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ArchetypeCreateWithoutUsersInput: ["id", "name"],
  ArchetypeCreateOrConnectWithoutUsersInput: ["where", "create"],
  LifeJourneyCreateWithoutUsersInput: ["id", "name"],
  LifeJourneyCreateOrConnectWithoutUsersInput: ["where", "create"],
  TalentLevelCreateWithoutUsersInput: ["id", "name"],
  TalentLevelCreateOrConnectWithoutUsersInput: ["where", "create"],
  TalentEnergyCreateWithoutUsersInput: ["id", "name"],
  TalentEnergyCreateOrConnectWithoutUsersInput: ["where", "create"],
  ArchetypeUpsertWithoutUsersInput: ["update", "create"],
  ArchetypeUpdateWithoutUsersInput: ["id", "name"],
  LifeJourneyUpsertWithoutUsersInput: ["update", "create"],
  LifeJourneyUpdateWithoutUsersInput: ["id", "name"],
  TalentLevelUpsertWithoutUsersInput: ["update", "create"],
  TalentLevelUpdateWithoutUsersInput: ["id", "name"],
  TalentEnergyUpsertWithoutUsersInput: ["update", "create"],
  TalentEnergyUpdateWithoutUsersInput: ["id", "name"],
  UserCreateWithoutArchetypeInput: ["id", "email", "firstName", "lastName", "language", "animal", "lifeJourney", "talent", "talentLevel", "talentEnergy", "heroJourneyProgress"],
  UserCreateOrConnectWithoutArchetypeInput: ["where", "create"],
  UserCreateManyArchetypeInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutArchetypeInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutArchetypeInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutArchetypeInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserCreateWithoutLifeJourneyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "talent", "talentLevel", "talentEnergy", "heroJourneyProgress"],
  UserCreateOrConnectWithoutLifeJourneyInput: ["where", "create"],
  UserCreateManyLifeJourneyInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutLifeJourneyInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutLifeJourneyInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutLifeJourneyInput: ["where", "data"],
  UserCreateWithoutTalentLevelInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "lifeJourney", "talent", "talentEnergy", "heroJourneyProgress"],
  UserCreateOrConnectWithoutTalentLevelInput: ["where", "create"],
  UserCreateManyTalentLevelInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutTalentLevelInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutTalentLevelInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutTalentLevelInput: ["where", "data"],
  UserCreateWithoutTalentEnergyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "lifeJourney", "talent", "talentLevel", "heroJourneyProgress"],
  UserCreateOrConnectWithoutTalentEnergyInput: ["where", "create"],
  UserCreateManyTalentEnergyInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutTalentEnergyInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutTalentEnergyInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutTalentEnergyInput: ["where", "data"],
  UserCreateManyArchetypeInput: ["id", "email", "firstName", "lastName", "language", "animal", "lifeJourneyId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserUpdateWithoutArchetypeInput: ["id", "email", "firstName", "lastName", "language", "animal", "lifeJourney", "talent", "talentLevel", "talentEnergy", "heroJourneyProgress"],
  UserCreateManyLifeJourneyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "talent", "talentLevelId", "talentEnergyId", "heroJourneyProgress"],
  UserUpdateWithoutLifeJourneyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "talent", "talentLevel", "talentEnergy", "heroJourneyProgress"],
  UserCreateManyTalentLevelInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentEnergyId", "heroJourneyProgress"],
  UserUpdateWithoutTalentLevelInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "lifeJourney", "talent", "talentEnergy", "heroJourneyProgress"],
  UserCreateManyTalentEnergyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetypeId", "lifeJourneyId", "talent", "talentLevelId", "heroJourneyProgress"],
  UserUpdateWithoutTalentEnergyInput: ["id", "email", "firstName", "lastName", "language", "animal", "archetype", "lifeJourney", "talent", "talentLevel", "heroJourneyProgress"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

