export const proposalQuery = `
  query GetProposals($daoAddress: String!) {
    proposals(where: { dao: $daoAddress }) {
      id
      yesVotes
      noVotes
      yesBalance
      noBalance
      createdAt
      title
      description
      passed
      votingEnds
      processed
      dao {
        totalShares
        quorumPercent
      }
      votes {
        id
        balance
      }
    }
  }
`;

export const daoQuery = `
{
  dao(id: "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a") {
    id
    createdAt
    proposalCount
    activeMemberCount
    totalShares
    proposalOffering
    profile: records(
      first: 1
      orderBy: createdAt
      orderDirection: desc
      where: { table: "daoProfile" }
    ) {
      createdAt
      createdBy
      contentType
      content
    }
  }
}
`;
