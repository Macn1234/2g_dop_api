export const matchTypeDef = `
type Match {
    id: Int!
    id_user_one: Int!
    id_user_two: Int!
    state_user_one: Int!
    state_user_two: Int!

}

input MatchInput {
    id_user_one: Int!
    id_user_two: Int!
    state_user_one: Int!
}

type UserAccepted{
  id: Int!
  id_user: Int!
  id_user_accepted: Int!
}

type UserRejected{
  id: Int!
  id_user: Int!
  id_user_rejected: Int!
}


type PleasureMatch {
    name: String!
    description: String!
    user_id: Int!
    subcategory_id: Int!
}

input ListPossibleMatchInput {
    listUsers:[Int]!
}


type ListPossibleFiltered {
    listUsersFiltered:[Int]!
}
`;

export const matchQueries = `
    allMatch: [Match]!
    matchById(id: Int!): Match!
    acceptedByUser(id:Int!):[UserAccepted]!
    rejectedByUser(id:Int!):[UserRejected]!
`;

export const matchMutations = `
    createMatch(match: MatchInput!): Match!
    deleteMatch(id:Int!):Match
    filtrateListPossibles(id: Int! , listUsers:ListPossibleMatchInput!):ListPossibleFiltered!
`;
