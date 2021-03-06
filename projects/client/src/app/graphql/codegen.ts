import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AcceptMembershipRequestResult = {
  __typename?: 'AcceptMembershipRequestResult';
  membership: Membership;
  membershipRequest: MembershipRequest;
};

export type Assignment = {
  __typename?: 'Assignment';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
  isImportant: Scalars['Boolean'];
  recipient: Membership;
  task: Task;
  updatedAt: Scalars['DateTime'];
};

export type AssignmentCreateInput = {
  isImportant?: InputMaybe<Scalars['Boolean']>;
  recipient: Scalars['ID'];
  task: Scalars['ID'];
};

export type AssignmentFilterMap = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt__eq?: InputMaybe<Scalars['DateTime']>;
  createdAt__gt?: InputMaybe<Scalars['DateTime']>;
  createdAt__gte?: InputMaybe<Scalars['DateTime']>;
  createdAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt__like?: InputMaybe<Scalars['String']>;
  createdAt__lt?: InputMaybe<Scalars['DateTime']>;
  createdAt__lte?: InputMaybe<Scalars['DateTime']>;
  createdAt__ne?: InputMaybe<Scalars['DateTime']>;
  createdAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id__eq?: InputMaybe<Scalars['ID']>;
  id__gt?: InputMaybe<Scalars['ID']>;
  id__gte?: InputMaybe<Scalars['ID']>;
  id__in?: InputMaybe<Array<Scalars['ID']>>;
  id__like?: InputMaybe<Scalars['String']>;
  id__lt?: InputMaybe<Scalars['ID']>;
  id__lte?: InputMaybe<Scalars['ID']>;
  id__ne?: InputMaybe<Scalars['ID']>;
  id__nin?: InputMaybe<Array<Scalars['ID']>>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isCompleted__eq?: InputMaybe<Scalars['Boolean']>;
  isCompleted__gt?: InputMaybe<Scalars['Boolean']>;
  isCompleted__gte?: InputMaybe<Scalars['Boolean']>;
  isCompleted__in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCompleted__like?: InputMaybe<Scalars['String']>;
  isCompleted__lt?: InputMaybe<Scalars['Boolean']>;
  isCompleted__lte?: InputMaybe<Scalars['Boolean']>;
  isCompleted__ne?: InputMaybe<Scalars['Boolean']>;
  isCompleted__nin?: InputMaybe<Array<Scalars['Boolean']>>;
  isImportant?: InputMaybe<Scalars['Boolean']>;
  isImportant__eq?: InputMaybe<Scalars['Boolean']>;
  isImportant__gt?: InputMaybe<Scalars['Boolean']>;
  isImportant__gte?: InputMaybe<Scalars['Boolean']>;
  isImportant__in?: InputMaybe<Array<Scalars['Boolean']>>;
  isImportant__like?: InputMaybe<Scalars['String']>;
  isImportant__lt?: InputMaybe<Scalars['Boolean']>;
  isImportant__lte?: InputMaybe<Scalars['Boolean']>;
  isImportant__ne?: InputMaybe<Scalars['Boolean']>;
  isImportant__nin?: InputMaybe<Array<Scalars['Boolean']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt__like?: InputMaybe<Scalars['String']>;
  updatedAt__lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type AssignmentOrderMap = {
  createdAt?: InputMaybe<QueryOrder>;
  id?: InputMaybe<QueryOrder>;
  isCompleted?: InputMaybe<QueryOrder>;
  isImportant?: InputMaybe<QueryOrder>;
  updatedAt?: InputMaybe<QueryOrder>;
};

export type AssignmentUpdateInput = {
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  isImportant?: InputMaybe<Scalars['Boolean']>;
};

export type AuthResult = {
  __typename?: 'AuthResult';
  token: Scalars['String'];
  user: User;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}

export type Membership = {
  __typename?: 'Membership';
  assignments: PaginatedAssignments;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: User;
  role: Role;
  tasks: PaginatedTasks;
  team: Team;
  updatedAt: Scalars['DateTime'];
};


export type MembershipAssignmentsArgs = {
  filter?: InputMaybe<AssignmentFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AssignmentOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};


export type MembershipTasksArgs = {
  filter?: InputMaybe<TaskFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TaskOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};

export type MembershipFilterMap = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt__eq?: InputMaybe<Scalars['DateTime']>;
  createdAt__gt?: InputMaybe<Scalars['DateTime']>;
  createdAt__gte?: InputMaybe<Scalars['DateTime']>;
  createdAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt__like?: InputMaybe<Scalars['String']>;
  createdAt__lt?: InputMaybe<Scalars['DateTime']>;
  createdAt__lte?: InputMaybe<Scalars['DateTime']>;
  createdAt__ne?: InputMaybe<Scalars['DateTime']>;
  createdAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id__eq?: InputMaybe<Scalars['ID']>;
  id__gt?: InputMaybe<Scalars['ID']>;
  id__gte?: InputMaybe<Scalars['ID']>;
  id__in?: InputMaybe<Array<Scalars['ID']>>;
  id__like?: InputMaybe<Scalars['String']>;
  id__lt?: InputMaybe<Scalars['ID']>;
  id__lte?: InputMaybe<Scalars['ID']>;
  id__ne?: InputMaybe<Scalars['ID']>;
  id__nin?: InputMaybe<Array<Scalars['ID']>>;
  role?: InputMaybe<Role>;
  role__eq?: InputMaybe<Role>;
  role__gt?: InputMaybe<Role>;
  role__gte?: InputMaybe<Role>;
  role__in?: InputMaybe<Array<Role>>;
  role__like?: InputMaybe<Scalars['String']>;
  role__lt?: InputMaybe<Role>;
  role__lte?: InputMaybe<Role>;
  role__ne?: InputMaybe<Role>;
  role__nin?: InputMaybe<Array<Role>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt__like?: InputMaybe<Scalars['String']>;
  updatedAt__lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type MembershipOrderMap = {
  createdAt?: InputMaybe<QueryOrder>;
  id?: InputMaybe<QueryOrder>;
  role?: InputMaybe<QueryOrder>;
  updatedAt?: InputMaybe<QueryOrder>;
};

export type MembershipRequest = {
  __typename?: 'MembershipRequest';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  owner: User;
  status: MembershipRequestStatus;
  team: Team;
  updatedAt: Scalars['DateTime'];
};

export type MembershipRequestCreateInput = {
  message?: InputMaybe<Scalars['String']>;
  team: Scalars['ID'];
};

export type MembershipRequestFilterMap = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt__eq?: InputMaybe<Scalars['DateTime']>;
  createdAt__gt?: InputMaybe<Scalars['DateTime']>;
  createdAt__gte?: InputMaybe<Scalars['DateTime']>;
  createdAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt__like?: InputMaybe<Scalars['String']>;
  createdAt__lt?: InputMaybe<Scalars['DateTime']>;
  createdAt__lte?: InputMaybe<Scalars['DateTime']>;
  createdAt__ne?: InputMaybe<Scalars['DateTime']>;
  createdAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id__eq?: InputMaybe<Scalars['ID']>;
  id__gt?: InputMaybe<Scalars['ID']>;
  id__gte?: InputMaybe<Scalars['ID']>;
  id__in?: InputMaybe<Array<Scalars['ID']>>;
  id__like?: InputMaybe<Scalars['String']>;
  id__lt?: InputMaybe<Scalars['ID']>;
  id__lte?: InputMaybe<Scalars['ID']>;
  id__ne?: InputMaybe<Scalars['ID']>;
  id__nin?: InputMaybe<Array<Scalars['ID']>>;
  message?: InputMaybe<Scalars['String']>;
  message__eq?: InputMaybe<Scalars['String']>;
  message__gt?: InputMaybe<Scalars['String']>;
  message__gte?: InputMaybe<Scalars['String']>;
  message__in?: InputMaybe<Array<Scalars['String']>>;
  message__like?: InputMaybe<Scalars['String']>;
  message__lt?: InputMaybe<Scalars['String']>;
  message__lte?: InputMaybe<Scalars['String']>;
  message__ne?: InputMaybe<Scalars['String']>;
  message__nin?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<MembershipRequestStatus>;
  status__eq?: InputMaybe<MembershipRequestStatus>;
  status__gt?: InputMaybe<MembershipRequestStatus>;
  status__gte?: InputMaybe<MembershipRequestStatus>;
  status__in?: InputMaybe<Array<MembershipRequestStatus>>;
  status__like?: InputMaybe<Scalars['String']>;
  status__lt?: InputMaybe<MembershipRequestStatus>;
  status__lte?: InputMaybe<MembershipRequestStatus>;
  status__ne?: InputMaybe<MembershipRequestStatus>;
  status__nin?: InputMaybe<Array<MembershipRequestStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt__like?: InputMaybe<Scalars['String']>;
  updatedAt__lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type MembershipRequestOrderMap = {
  createdAt?: InputMaybe<QueryOrder>;
  id?: InputMaybe<QueryOrder>;
  message?: InputMaybe<QueryOrder>;
  status?: InputMaybe<QueryOrder>;
  updatedAt?: InputMaybe<QueryOrder>;
};

export enum MembershipRequestStatus {
  Accepted = 'Accepted',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export type MembershipUpdateInput = {
  role?: InputMaybe<Role>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptMembershipRequest: AcceptMembershipRequestResult;
  auth: AuthResult;
  createAssignment: Assignment;
  createMembershipRequest: MembershipRequest;
  createTask: Task;
  createTeam: Team;
  createUser: User;
  deleteAssignment: Assignment;
  deleteMembership: Membership;
  deleteMembershipRequest: MembershipRequest;
  deleteTask: Task;
  deleteTeam: Team;
  rejectMembershipRequest: MembershipRequest;
  updateAssignment: Assignment;
  updateMembership: Membership;
  updateTask: Task;
  updateTeam: Team;
  updateUser: User;
};


export type MutationAcceptMembershipRequestArgs = {
  id: Scalars['ID'];
};


export type MutationAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateAssignmentArgs = {
  data: AssignmentCreateInput;
};


export type MutationCreateMembershipRequestArgs = {
  data: MembershipRequestCreateInput;
};


export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAssignmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMembershipArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMembershipRequestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['ID'];
};


export type MutationRejectMembershipRequestArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAssignmentArgs = {
  data: AssignmentUpdateInput;
  id: Scalars['ID'];
};


export type MutationUpdateMembershipArgs = {
  data: MembershipUpdateInput;
  id: Scalars['ID'];
};


export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  id: Scalars['ID'];
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  id: Scalars['ID'];
};

export type PaginatedAssignments = {
  __typename?: 'PaginatedAssignments';
  results: Array<Assignment>;
  total: Scalars['Int'];
};

export type PaginatedMembershipRequests = {
  __typename?: 'PaginatedMembershipRequests';
  results: Array<MembershipRequest>;
  total: Scalars['Int'];
};

export type PaginatedMemberships = {
  __typename?: 'PaginatedMemberships';
  results: Array<Membership>;
  total: Scalars['Int'];
};

export type PaginatedTasks = {
  __typename?: 'PaginatedTasks';
  results: Array<Task>;
  total: Scalars['Int'];
};

export type PaginatedTeams = {
  __typename?: 'PaginatedTeams';
  results: Array<Team>;
  total: Scalars['Int'];
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  results: Array<User>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  assignment: Assignment;
  assignments: PaginatedAssignments;
  me: User;
  membership: Membership;
  membershipRequest: MembershipRequest;
  membershipRequests: PaginatedMembershipRequests;
  memberships: PaginatedMemberships;
  task: Task;
  tasks: PaginatedTasks;
  team: Team;
  teams: PaginatedTeams;
  user: User;
  users: PaginatedUsers;
};


export type QueryAssignmentArgs = {
  id: Scalars['ID'];
};


export type QueryAssignmentsArgs = {
  filter?: InputMaybe<AssignmentFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AssignmentOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMembershipArgs = {
  id: Scalars['ID'];
};


export type QueryMembershipRequestArgs = {
  id: Scalars['ID'];
};


export type QueryMembershipRequestsArgs = {
  filter?: InputMaybe<MembershipRequestFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MembershipRequestOrderMap>;
};


export type QueryMembershipsArgs = {
  filter?: InputMaybe<MembershipFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MembershipOrderMap>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryTasksArgs = {
  filter?: InputMaybe<TaskFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TaskOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};


export type QueryTeamsArgs = {
  filter?: InputMaybe<TeamFilterMap>;
  joinedOnly?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TeamOrderMap>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrderMap>;
};

export enum QueryOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Role {
  Manager = 'Manager',
  Member = 'Member'
}

export type Task = {
  __typename?: 'Task';
  assignments: PaginatedAssignments;
  createdAt: Scalars['DateTime'];
  creator: Membership;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  team: Team;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type TaskAssignmentsArgs = {
  filter?: InputMaybe<AssignmentFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AssignmentOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};

export type TaskCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  team: Scalars['ID'];
  title: Scalars['String'];
};

export type TaskFilterMap = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt__eq?: InputMaybe<Scalars['DateTime']>;
  createdAt__gt?: InputMaybe<Scalars['DateTime']>;
  createdAt__gte?: InputMaybe<Scalars['DateTime']>;
  createdAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt__like?: InputMaybe<Scalars['String']>;
  createdAt__lt?: InputMaybe<Scalars['DateTime']>;
  createdAt__lte?: InputMaybe<Scalars['DateTime']>;
  createdAt__ne?: InputMaybe<Scalars['DateTime']>;
  createdAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  description?: InputMaybe<Scalars['String']>;
  description__eq?: InputMaybe<Scalars['String']>;
  description__gt?: InputMaybe<Scalars['String']>;
  description__gte?: InputMaybe<Scalars['String']>;
  description__in?: InputMaybe<Array<Scalars['String']>>;
  description__like?: InputMaybe<Scalars['String']>;
  description__lt?: InputMaybe<Scalars['String']>;
  description__lte?: InputMaybe<Scalars['String']>;
  description__ne?: InputMaybe<Scalars['String']>;
  description__nin?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id__eq?: InputMaybe<Scalars['ID']>;
  id__gt?: InputMaybe<Scalars['ID']>;
  id__gte?: InputMaybe<Scalars['ID']>;
  id__in?: InputMaybe<Array<Scalars['ID']>>;
  id__like?: InputMaybe<Scalars['String']>;
  id__lt?: InputMaybe<Scalars['ID']>;
  id__lte?: InputMaybe<Scalars['ID']>;
  id__ne?: InputMaybe<Scalars['ID']>;
  id__nin?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive__eq?: InputMaybe<Scalars['Boolean']>;
  isActive__gt?: InputMaybe<Scalars['Boolean']>;
  isActive__gte?: InputMaybe<Scalars['Boolean']>;
  isActive__in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive__like?: InputMaybe<Scalars['String']>;
  isActive__lt?: InputMaybe<Scalars['Boolean']>;
  isActive__lte?: InputMaybe<Scalars['Boolean']>;
  isActive__ne?: InputMaybe<Scalars['Boolean']>;
  isActive__nin?: InputMaybe<Array<Scalars['Boolean']>>;
  title?: InputMaybe<Scalars['String']>;
  title__eq?: InputMaybe<Scalars['String']>;
  title__gt?: InputMaybe<Scalars['String']>;
  title__gte?: InputMaybe<Scalars['String']>;
  title__in?: InputMaybe<Array<Scalars['String']>>;
  title__like?: InputMaybe<Scalars['String']>;
  title__lt?: InputMaybe<Scalars['String']>;
  title__lte?: InputMaybe<Scalars['String']>;
  title__ne?: InputMaybe<Scalars['String']>;
  title__nin?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt__like?: InputMaybe<Scalars['String']>;
  updatedAt__lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type TaskOrderMap = {
  createdAt?: InputMaybe<QueryOrder>;
  description?: InputMaybe<QueryOrder>;
  id?: InputMaybe<QueryOrder>;
  isActive?: InputMaybe<QueryOrder>;
  title?: InputMaybe<QueryOrder>;
  updatedAt?: InputMaybe<QueryOrder>;
};

export type TaskUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  team?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  assignments: PaginatedAssignments;
  createdAt: Scalars['DateTime'];
  creator: User;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOpen: Scalars['Boolean'];
  membership?: Maybe<Membership>;
  membershipRequests: PaginatedMembershipRequests;
  memberships: PaginatedMemberships;
  name: Scalars['String'];
  tasks: PaginatedTasks;
  updatedAt: Scalars['DateTime'];
};


export type TeamAssignmentsArgs = {
  filter?: InputMaybe<AssignmentFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AssignmentOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};


export type TeamMembershipRequestsArgs = {
  filter?: InputMaybe<MembershipRequestFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MembershipRequestOrderMap>;
};


export type TeamMembershipsArgs = {
  filter?: InputMaybe<MembershipFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MembershipOrderMap>;
};


export type TeamTasksArgs = {
  filter?: InputMaybe<TaskFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TaskOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};

export type TeamCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TeamFilterMap = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt__eq?: InputMaybe<Scalars['DateTime']>;
  createdAt__gt?: InputMaybe<Scalars['DateTime']>;
  createdAt__gte?: InputMaybe<Scalars['DateTime']>;
  createdAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt__like?: InputMaybe<Scalars['String']>;
  createdAt__lt?: InputMaybe<Scalars['DateTime']>;
  createdAt__lte?: InputMaybe<Scalars['DateTime']>;
  createdAt__ne?: InputMaybe<Scalars['DateTime']>;
  createdAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  description?: InputMaybe<Scalars['String']>;
  description__eq?: InputMaybe<Scalars['String']>;
  description__gt?: InputMaybe<Scalars['String']>;
  description__gte?: InputMaybe<Scalars['String']>;
  description__in?: InputMaybe<Array<Scalars['String']>>;
  description__like?: InputMaybe<Scalars['String']>;
  description__lt?: InputMaybe<Scalars['String']>;
  description__lte?: InputMaybe<Scalars['String']>;
  description__ne?: InputMaybe<Scalars['String']>;
  description__nin?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id__eq?: InputMaybe<Scalars['ID']>;
  id__gt?: InputMaybe<Scalars['ID']>;
  id__gte?: InputMaybe<Scalars['ID']>;
  id__in?: InputMaybe<Array<Scalars['ID']>>;
  id__like?: InputMaybe<Scalars['String']>;
  id__lt?: InputMaybe<Scalars['ID']>;
  id__lte?: InputMaybe<Scalars['ID']>;
  id__ne?: InputMaybe<Scalars['ID']>;
  id__nin?: InputMaybe<Array<Scalars['ID']>>;
  isOpen?: InputMaybe<Scalars['Boolean']>;
  isOpen__eq?: InputMaybe<Scalars['Boolean']>;
  isOpen__gt?: InputMaybe<Scalars['Boolean']>;
  isOpen__gte?: InputMaybe<Scalars['Boolean']>;
  isOpen__in?: InputMaybe<Array<Scalars['Boolean']>>;
  isOpen__like?: InputMaybe<Scalars['String']>;
  isOpen__lt?: InputMaybe<Scalars['Boolean']>;
  isOpen__lte?: InputMaybe<Scalars['Boolean']>;
  isOpen__ne?: InputMaybe<Scalars['Boolean']>;
  isOpen__nin?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name__eq?: InputMaybe<Scalars['String']>;
  name__gt?: InputMaybe<Scalars['String']>;
  name__gte?: InputMaybe<Scalars['String']>;
  name__in?: InputMaybe<Array<Scalars['String']>>;
  name__like?: InputMaybe<Scalars['String']>;
  name__lt?: InputMaybe<Scalars['String']>;
  name__lte?: InputMaybe<Scalars['String']>;
  name__ne?: InputMaybe<Scalars['String']>;
  name__nin?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt__like?: InputMaybe<Scalars['String']>;
  updatedAt__lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type TeamOrderMap = {
  createdAt?: InputMaybe<QueryOrder>;
  description?: InputMaybe<QueryOrder>;
  id?: InputMaybe<QueryOrder>;
  isOpen?: InputMaybe<QueryOrder>;
  name?: InputMaybe<QueryOrder>;
  updatedAt?: InputMaybe<QueryOrder>;
};

export type TeamUpdateInput = {
  creator?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  isOpen?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  assignments: PaginatedAssignments;
  createdAt: Scalars['DateTime'];
  gender: Gender;
  id: Scalars['ID'];
  membershipRequests: PaginatedMembershipRequests;
  memberships: PaginatedMemberships;
  nickname?: Maybe<Scalars['String']>;
  tasks: PaginatedTasks;
  teams: PaginatedTeams;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};


export type UserAssignmentsArgs = {
  filter?: InputMaybe<AssignmentFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AssignmentOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};


export type UserMembershipRequestsArgs = {
  filter?: InputMaybe<MembershipRequestFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MembershipRequestOrderMap>;
};


export type UserMembershipsArgs = {
  filter?: InputMaybe<MembershipFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MembershipOrderMap>;
};


export type UserTasksArgs = {
  filter?: InputMaybe<TaskFilterMap>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TaskOrderMap>;
  ownOnly?: InputMaybe<Scalars['Boolean']>;
};


export type UserTeamsArgs = {
  filter?: InputMaybe<TeamFilterMap>;
  joinedOnly?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TeamOrderMap>;
};

export type UserCreateInput = {
  gender?: InputMaybe<Gender>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserFilterMap = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt__eq?: InputMaybe<Scalars['DateTime']>;
  createdAt__gt?: InputMaybe<Scalars['DateTime']>;
  createdAt__gte?: InputMaybe<Scalars['DateTime']>;
  createdAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt__like?: InputMaybe<Scalars['String']>;
  createdAt__lt?: InputMaybe<Scalars['DateTime']>;
  createdAt__lte?: InputMaybe<Scalars['DateTime']>;
  createdAt__ne?: InputMaybe<Scalars['DateTime']>;
  createdAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  gender?: InputMaybe<Gender>;
  gender__eq?: InputMaybe<Gender>;
  gender__gt?: InputMaybe<Gender>;
  gender__gte?: InputMaybe<Gender>;
  gender__in?: InputMaybe<Array<Gender>>;
  gender__like?: InputMaybe<Scalars['String']>;
  gender__lt?: InputMaybe<Gender>;
  gender__lte?: InputMaybe<Gender>;
  gender__ne?: InputMaybe<Gender>;
  gender__nin?: InputMaybe<Array<Gender>>;
  id?: InputMaybe<Scalars['ID']>;
  id__eq?: InputMaybe<Scalars['ID']>;
  id__gt?: InputMaybe<Scalars['ID']>;
  id__gte?: InputMaybe<Scalars['ID']>;
  id__in?: InputMaybe<Array<Scalars['ID']>>;
  id__like?: InputMaybe<Scalars['String']>;
  id__lt?: InputMaybe<Scalars['ID']>;
  id__lte?: InputMaybe<Scalars['ID']>;
  id__ne?: InputMaybe<Scalars['ID']>;
  id__nin?: InputMaybe<Array<Scalars['ID']>>;
  nickname?: InputMaybe<Scalars['String']>;
  nickname__eq?: InputMaybe<Scalars['String']>;
  nickname__gt?: InputMaybe<Scalars['String']>;
  nickname__gte?: InputMaybe<Scalars['String']>;
  nickname__in?: InputMaybe<Array<Scalars['String']>>;
  nickname__like?: InputMaybe<Scalars['String']>;
  nickname__lt?: InputMaybe<Scalars['String']>;
  nickname__lte?: InputMaybe<Scalars['String']>;
  nickname__ne?: InputMaybe<Scalars['String']>;
  nickname__nin?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt__like?: InputMaybe<Scalars['String']>;
  updatedAt__lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt__lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt__ne?: InputMaybe<Scalars['DateTime']>;
  updatedAt__nin?: InputMaybe<Array<Scalars['DateTime']>>;
  username?: InputMaybe<Scalars['String']>;
  username__eq?: InputMaybe<Scalars['String']>;
  username__gt?: InputMaybe<Scalars['String']>;
  username__gte?: InputMaybe<Scalars['String']>;
  username__in?: InputMaybe<Array<Scalars['String']>>;
  username__like?: InputMaybe<Scalars['String']>;
  username__lt?: InputMaybe<Scalars['String']>;
  username__lte?: InputMaybe<Scalars['String']>;
  username__ne?: InputMaybe<Scalars['String']>;
  username__nin?: InputMaybe<Array<Scalars['String']>>;
};

export type UserOrderMap = {
  createdAt?: InputMaybe<QueryOrder>;
  gender?: InputMaybe<QueryOrder>;
  id?: InputMaybe<QueryOrder>;
  nickname?: InputMaybe<QueryOrder>;
  updatedAt?: InputMaybe<QueryOrder>;
  username?: InputMaybe<QueryOrder>;
};

export type UserUpdateInput = {
  gender?: InputMaybe<Gender>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type MembershipRequestAcceptMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MembershipRequestAcceptMutation = { __typename?: 'Mutation', acceptMembershipRequest: { __typename?: 'AcceptMembershipRequestResult', membershipRequest: { __typename?: 'MembershipRequest', id: string, message?: string | null, status: MembershipRequestStatus, createdAt: any, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null }, team: { __typename?: 'Team', id: string, name: string } }, membership: { __typename?: 'Membership', id: string, role: Role, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender } } } };

export type MembershipRequestCreateMutationVariables = Exact<{
  data: MembershipRequestCreateInput;
}>;


export type MembershipRequestCreateMutation = { __typename?: 'Mutation', createMembershipRequest: { __typename?: 'MembershipRequest', id: string, message?: string | null, status: MembershipRequestStatus, createdAt: any, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null }, team: { __typename?: 'Team', id: string, name: string } } };

export type MembershipRequestDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MembershipRequestDeleteMutation = { __typename?: 'Mutation', deleteMembershipRequest: { __typename?: 'MembershipRequest', id: string } };

export type MembershipRequestListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type MembershipRequestListQuery = { __typename?: 'Query', membershipRequests: { __typename?: 'PaginatedMembershipRequests', total: number, results: Array<{ __typename?: 'MembershipRequest', id: string, message?: string | null, status: MembershipRequestStatus, createdAt: any, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null }, team: { __typename?: 'Team', id: string, name: string } }> } };

export type MembershipRequestRejectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MembershipRequestRejectMutation = { __typename?: 'Mutation', rejectMembershipRequest: { __typename?: 'MembershipRequest', id: string, message?: string | null, status: MembershipRequestStatus, createdAt: any, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null }, team: { __typename?: 'Team', id: string, name: string } } };

export type MembershipRequestFragment = { __typename?: 'MembershipRequest', id: string, message?: string | null, status: MembershipRequestStatus, createdAt: any, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null }, team: { __typename?: 'Team', id: string, name: string } };

export type AssignmentCreateMutationVariables = Exact<{
  data: AssignmentCreateInput;
}>;


export type AssignmentCreateMutation = { __typename?: 'Mutation', createAssignment: { __typename?: 'Assignment', id: string, recipient: { __typename?: 'Membership', id: string } } };

export type AssignmentDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AssignmentDeleteMutation = { __typename?: 'Mutation', deleteAssignment: { __typename?: 'Assignment', id: string } };

export type AssignmentUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  data: AssignmentUpdateInput;
}>;


export type AssignmentUpdateMutation = { __typename?: 'Mutation', updateAssignment: { __typename?: 'Assignment', id: string, isCompleted: boolean, isImportant: boolean, updatedAt: any } };

export type AssignmentFragment = { __typename?: 'Assignment', id: string, recipient: { __typename?: 'Membership', id: string } };

export type AuthMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthResult', token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender, updatedAt: any } };

export type MembershipAssignmentListQueryVariables = Exact<{
  id: Scalars['ID'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type MembershipAssignmentListQuery = { __typename?: 'Query', membership: { __typename?: 'Membership', id: string, assignments: { __typename?: 'PaginatedAssignments', total: number, results: Array<{ __typename?: 'Assignment', id: string, isCompleted: boolean, isImportant: boolean, createdAt: any, updatedAt: any, recipient: { __typename?: 'Membership', id: string }, task: { __typename?: 'Task', id: string, title: string, description?: string | null, creator: { __typename?: 'Membership', id: string, role: Role, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender } } } }> } } };

export type MembershipDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MembershipDeleteMutation = { __typename?: 'Mutation', deleteMembership: { __typename?: 'Membership', id: string } };

export type MembershipTaskListQueryVariables = Exact<{
  id: Scalars['ID'];
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type MembershipTaskListQuery = { __typename?: 'Query', membership: { __typename?: 'Membership', id: string, tasks: { __typename?: 'PaginatedTasks', total: number, results: Array<{ __typename?: 'Task', id: string, title: string, description?: string | null, createdAt: any, assignments: { __typename?: 'PaginatedAssignments', total: number } }> } } };

export type MembershipUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  data: MembershipUpdateInput;
}>;


export type MembershipUpdateMutation = { __typename?: 'Mutation', updateMembership: { __typename?: 'Membership', id: string, role: Role, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender } } };

export type MembershipFragment = { __typename?: 'Membership', id: string, role: Role, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender } };

export type TaskAssignmentListQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TaskAssignmentListQuery = { __typename?: 'Query', task: { __typename?: 'Task', id: string, assignments: { __typename?: 'PaginatedAssignments', total: number, results: Array<{ __typename?: 'Assignment', id: string, recipient: { __typename?: 'Membership', id: string } }> } } };

export type TaskCreateMutationVariables = Exact<{
  data: TaskCreateInput;
}>;


export type TaskCreateMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string, title: string, description?: string | null, createdAt: any, assignments: { __typename?: 'PaginatedAssignments', total: number } } };

export type TaskDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TaskDeleteMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'Task', id: string } };

export type TaskUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  data: TaskUpdateInput;
}>;


export type TaskUpdateMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', id: string, title: string, description?: string | null, createdAt: any, assignments: { __typename?: 'PaginatedAssignments', total: number } } };

export type TaskFragment = { __typename?: 'Task', id: string, title: string, description?: string | null, createdAt: any, assignments: { __typename?: 'PaginatedAssignments', total: number } };

export type TeamCreateMutationVariables = Exact<{
  data: TeamCreateInput;
}>;


export type TeamCreateMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id: string, name: string, description?: string | null, isOpen: boolean, creator: { __typename?: 'User', id: string, username: string, nickname?: string | null }, membership?: { __typename?: 'Membership', id: string, role: Role } | null } };

export type TeamDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamDeleteMutation = { __typename?: 'Mutation', deleteTeam: { __typename?: 'Team', id: string } };

export type TeamDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamDetailQuery = { __typename?: 'Query', team: { __typename?: 'Team', id: string, name: string, description?: string | null, isOpen: boolean, creator: { __typename?: 'User', id: string, username: string, nickname?: string | null }, membership?: { __typename?: 'Membership', id: string, role: Role } | null } };

export type TeamListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<TeamFilterMap>;
  joinedOnly?: InputMaybe<Scalars['Boolean']>;
}>;


export type TeamListQuery = { __typename?: 'Query', teams: { __typename?: 'PaginatedTeams', total: number, results: Array<{ __typename?: 'Team', id: string, name: string, description?: string | null, isOpen: boolean, creator: { __typename?: 'User', id: string, username: string, nickname?: string | null }, membership?: { __typename?: 'Membership', id: string, role: Role } | null }> } };

export type TeamMembershipListQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamMembershipListQuery = { __typename?: 'Query', team: { __typename?: 'Team', id: string, memberships: { __typename?: 'PaginatedMemberships', total: number, results: Array<{ __typename?: 'Membership', id: string, role: Role, owner: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender } }> } } };

export type TeamUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  data: TeamUpdateInput;
}>;


export type TeamUpdateMutation = { __typename?: 'Mutation', updateTeam: { __typename?: 'Team', id: string, name: string, description?: string | null, isOpen: boolean, creator: { __typename?: 'User', id: string, username: string, nickname?: string | null }, membership?: { __typename?: 'Membership', id: string, role: Role } | null } };

export type TeamFragment = { __typename?: 'Team', id: string, name: string, description?: string | null, isOpen: boolean, creator: { __typename?: 'User', id: string, username: string, nickname?: string | null }, membership?: { __typename?: 'Membership', id: string, role: Role } | null };

export type UserCreateMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type UserCreateMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender, updatedAt: any } };

export type UserUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  data: UserUpdateInput;
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender, updatedAt: any } };

export type UserFragment = { __typename?: 'User', id: string, username: string, nickname?: string | null, gender: Gender, updatedAt: any };

export const MembershipRequestFragmentDoc = gql`
    fragment MembershipRequest on MembershipRequest {
  id
  owner {
    id
    username
    nickname
  }
  team {
    id
    name
  }
  message
  status
  createdAt
}
    `;
export const AssignmentFragmentDoc = gql`
    fragment Assignment on Assignment {
  id
  recipient {
    id
  }
}
    `;
export const MembershipFragmentDoc = gql`
    fragment Membership on Membership {
  id
  owner {
    id
    username
    nickname
    gender
  }
  role
}
    `;
export const TaskFragmentDoc = gql`
    fragment Task on Task {
  id
  title
  description
  assignments {
    total
  }
  createdAt
}
    `;
export const TeamFragmentDoc = gql`
    fragment Team on Team {
  id
  name
  description
  isOpen
  creator {
    id
    username
    nickname
  }
  membership {
    id
    role
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  username
  nickname
  gender
  updatedAt
}
    `;
export const MembershipRequestAcceptDocument = gql`
    mutation MembershipRequestAccept($id: ID!) {
  acceptMembershipRequest(id: $id) {
    membershipRequest {
      ...MembershipRequest
    }
    membership {
      ...Membership
    }
  }
}
    ${MembershipRequestFragmentDoc}
${MembershipFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipRequestAcceptGQL extends Apollo.Mutation<MembershipRequestAcceptMutation, MembershipRequestAcceptMutationVariables> {
    override document = MembershipRequestAcceptDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipRequestCreateDocument = gql`
    mutation MembershipRequestCreate($data: MembershipRequestCreateInput!) {
  createMembershipRequest(data: $data) {
    ...MembershipRequest
  }
}
    ${MembershipRequestFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipRequestCreateGQL extends Apollo.Mutation<MembershipRequestCreateMutation, MembershipRequestCreateMutationVariables> {
    override document = MembershipRequestCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipRequestDeleteDocument = gql`
    mutation MembershipRequestDelete($id: ID!) {
  deleteMembershipRequest(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipRequestDeleteGQL extends Apollo.Mutation<MembershipRequestDeleteMutation, MembershipRequestDeleteMutationVariables> {
    override document = MembershipRequestDeleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipRequestListDocument = gql`
    query MembershipRequestList($offset: Int) {
  membershipRequests(limit: 20, offset: $offset, order: {id: DESC}) {
    total
    results {
      ...MembershipRequest
    }
  }
}
    ${MembershipRequestFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipRequestListGQL extends Apollo.Query<MembershipRequestListQuery, MembershipRequestListQueryVariables> {
    override document = MembershipRequestListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipRequestRejectDocument = gql`
    mutation MembershipRequestReject($id: ID!) {
  rejectMembershipRequest(id: $id) {
    ...MembershipRequest
  }
}
    ${MembershipRequestFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipRequestRejectGQL extends Apollo.Mutation<MembershipRequestRejectMutation, MembershipRequestRejectMutationVariables> {
    override document = MembershipRequestRejectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AssignmentCreateDocument = gql`
    mutation AssignmentCreate($data: AssignmentCreateInput!) {
  createAssignment(data: $data) {
    ...Assignment
  }
}
    ${AssignmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AssignmentCreateGQL extends Apollo.Mutation<AssignmentCreateMutation, AssignmentCreateMutationVariables> {
    override document = AssignmentCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AssignmentDeleteDocument = gql`
    mutation AssignmentDelete($id: ID!) {
  deleteAssignment(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AssignmentDeleteGQL extends Apollo.Mutation<AssignmentDeleteMutation, AssignmentDeleteMutationVariables> {
    override document = AssignmentDeleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AssignmentUpdateDocument = gql`
    mutation AssignmentUpdate($id: ID!, $data: AssignmentUpdateInput!) {
  updateAssignment(id: $id, data: $data) {
    id
    isCompleted
    isImportant
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AssignmentUpdateGQL extends Apollo.Mutation<AssignmentUpdateMutation, AssignmentUpdateMutationVariables> {
    override document = AssignmentUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AuthDocument = gql`
    mutation Auth($username: String!, $password: String!) {
  auth(username: $username, password: $password) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGQL extends Apollo.Mutation<AuthMutation, AuthMutationVariables> {
    override document = AuthDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    override document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipAssignmentListDocument = gql`
    query MembershipAssignmentList($id: ID!, $offset: Int) {
  membership(id: $id) {
    id
    assignments(limit: 20, offset: $offset, order: {updatedAt: DESC}) {
      total
      results {
        id
        recipient {
          id
        }
        task {
          id
          title
          description
          creator {
            ...Membership
          }
        }
        isCompleted
        isImportant
        createdAt
        updatedAt
      }
    }
  }
}
    ${MembershipFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipAssignmentListGQL extends Apollo.Query<MembershipAssignmentListQuery, MembershipAssignmentListQueryVariables> {
    override document = MembershipAssignmentListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipDeleteDocument = gql`
    mutation MembershipDelete($id: ID!) {
  deleteMembership(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipDeleteGQL extends Apollo.Mutation<MembershipDeleteMutation, MembershipDeleteMutationVariables> {
    override document = MembershipDeleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipTaskListDocument = gql`
    query MembershipTaskList($id: ID!, $offset: Int) {
  membership(id: $id) {
    id
    tasks(limit: 20, offset: $offset, order: {id: DESC}) {
      total
      results {
        ...Task
      }
    }
  }
}
    ${TaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipTaskListGQL extends Apollo.Query<MembershipTaskListQuery, MembershipTaskListQueryVariables> {
    override document = MembershipTaskListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MembershipUpdateDocument = gql`
    mutation MembershipUpdate($id: ID!, $data: MembershipUpdateInput!) {
  updateMembership(id: $id, data: $data) {
    ...Membership
  }
}
    ${MembershipFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MembershipUpdateGQL extends Apollo.Mutation<MembershipUpdateMutation, MembershipUpdateMutationVariables> {
    override document = MembershipUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TaskAssignmentListDocument = gql`
    query TaskAssignmentList($id: ID!) {
  task(id: $id) {
    id
    assignments {
      total
      results {
        ...Assignment
      }
    }
  }
}
    ${AssignmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TaskAssignmentListGQL extends Apollo.Query<TaskAssignmentListQuery, TaskAssignmentListQueryVariables> {
    override document = TaskAssignmentListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TaskCreateDocument = gql`
    mutation TaskCreate($data: TaskCreateInput!) {
  createTask(data: $data) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TaskCreateGQL extends Apollo.Mutation<TaskCreateMutation, TaskCreateMutationVariables> {
    override document = TaskCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TaskDeleteDocument = gql`
    mutation TaskDelete($id: ID!) {
  deleteTask(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TaskDeleteGQL extends Apollo.Mutation<TaskDeleteMutation, TaskDeleteMutationVariables> {
    override document = TaskDeleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TaskUpdateDocument = gql`
    mutation TaskUpdate($id: ID!, $data: TaskUpdateInput!) {
  updateTask(id: $id, data: $data) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TaskUpdateGQL extends Apollo.Mutation<TaskUpdateMutation, TaskUpdateMutationVariables> {
    override document = TaskUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeamCreateDocument = gql`
    mutation TeamCreate($data: TeamCreateInput!) {
  createTeam(data: $data) {
    ...Team
  }
}
    ${TeamFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamCreateGQL extends Apollo.Mutation<TeamCreateMutation, TeamCreateMutationVariables> {
    override document = TeamCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeamDeleteDocument = gql`
    mutation TeamDelete($id: ID!) {
  deleteTeam(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamDeleteGQL extends Apollo.Mutation<TeamDeleteMutation, TeamDeleteMutationVariables> {
    override document = TeamDeleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeamDetailDocument = gql`
    query TeamDetail($id: ID!) {
  team(id: $id) {
    ...Team
  }
}
    ${TeamFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamDetailGQL extends Apollo.Query<TeamDetailQuery, TeamDetailQueryVariables> {
    override document = TeamDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeamListDocument = gql`
    query TeamList($offset: Int, $filter: TeamFilterMap, $joinedOnly: Boolean) {
  teams(limit: 20, offset: $offset, filter: $filter, joinedOnly: $joinedOnly) {
    total
    results {
      ...Team
    }
  }
}
    ${TeamFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamListGQL extends Apollo.Query<TeamListQuery, TeamListQueryVariables> {
    override document = TeamListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeamMembershipListDocument = gql`
    query TeamMembershipList($id: ID!) {
  team(id: $id) {
    id
    memberships {
      total
      results {
        ...Membership
      }
    }
  }
}
    ${MembershipFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamMembershipListGQL extends Apollo.Query<TeamMembershipListQuery, TeamMembershipListQueryVariables> {
    override document = TeamMembershipListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TeamUpdateDocument = gql`
    mutation TeamUpdate($id: ID!, $data: TeamUpdateInput!) {
  updateTeam(id: $id, data: $data) {
    ...Team
  }
}
    ${TeamFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TeamUpdateGQL extends Apollo.Mutation<TeamUpdateMutation, TeamUpdateMutationVariables> {
    override document = TeamUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserCreateDocument = gql`
    mutation UserCreate($data: UserCreateInput!) {
  createUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserCreateGQL extends Apollo.Mutation<UserCreateMutation, UserCreateMutationVariables> {
    override document = UserCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserUpdateDocument = gql`
    mutation UserUpdate($id: ID!, $data: UserUpdateInput!) {
  updateUser(id: $id, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserUpdateGQL extends Apollo.Mutation<UserUpdateMutation, UserUpdateMutationVariables> {
    override document = UserUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }