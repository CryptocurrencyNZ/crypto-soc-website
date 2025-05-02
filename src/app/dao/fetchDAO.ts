// lib/fetchDAO.ts
import { proposalQuery, daoQuery } from "./queries";

const daoAddress = "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a";

interface DAOProfile {
  content: string | null;
}

interface DAO {
  id: string;
  totalShares: string;
  quorumPercent: string;
  proposalOffering: number;
  activeMemberCount: number;
  proposalCount: number;
  profile?: DAOProfile[];
  createdAt: string;
}

interface Proposal {
  id: string;
  title?: string;
  description?: string;
  yesBalance: string;
  noBalance: string;
  createdAt: string;
  votingEnds: string;
  dao: DAO;
}

interface ProposalsResponse {
  data: {
    proposals: Proposal[];
  };
  errors?: { message: string }[];
}

interface DAOResponse {
  data: {
    dao: DAO;
  };
  errors?: { message: string }[];
}

interface FormattedProposal {
  title: string;
  description: string;
  id: string;
  progress: number;
  quorum: {
    current: number;
    required: number;
    percent: string;
  };
  status: string;
  createdAt: string;
  raw: Proposal;
}

interface DAOData {
  dao: {
    proposals: FormattedProposal[];
    activeProposals: number;
    activeMemberCount: number;
    totalShares: number;
    proposalCount: number;
    tokenBalance: string;
    content: string | null;
    createdAt: string | null;
  };
}

export async function fetchDAOData(): Promise<DAOData> {
  const endpoint =
    "https://gateway-arbitrum.network.thegraph.com/api/09ee157c2e5e6598d352197e957932f6/subgraphs/id/CgH5vtz9CJPdcSmD3XEh8fCVDjQjnRwrSawg71T1ySXW";

  try {
    const [proposalsResponse, daoResponse] = await Promise.all([
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: proposalQuery,
          variables: { daoAddress },
        }),
      }),
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: daoQuery }),
      }),
    ]);

    const proposalsData: ProposalsResponse = await proposalsResponse.json();
    const daoData: DAOResponse = await daoResponse.json();

    if (proposalsData.errors || daoData.errors)
      throw new Error("GraphQL query failed");

    const formattedProposals: FormattedProposal[] =
      proposalsData.data.proposals.map((proposal) => {
        const totalVoteBalance =
          Number(proposal.yesBalance) + Number(proposal.noBalance);
        const quorumRequired =
          (Number(proposal.dao.totalShares) *
            Number(proposal.dao.quorumPercent)) /
          100;
        const progressPercent = (totalVoteBalance / quorumRequired) * 100;
        const date = new Date(Number(proposal.createdAt) * 1000);
        const ending = new Date(Number(proposal.votingEnds) * 1000);
        const currentDate = new Date();

        let propStatus: string;
        if (currentDate > ending) {
          propStatus =
            totalVoteBalance >= quorumRequired
              ? Number(proposal.yesBalance) > Number(proposal.noBalance)
                ? "Passed"
                : "Failed"
              : "Failed";
        } else {
          propStatus = "Active";
        }

        return {
          title: proposal.title || `Proposal #${proposal.id}`,
          description: proposal.description || "No description provided",
          id: proposal.id,
          progress: Math.min(progressPercent, 100),
          quorum: {
            current: totalVoteBalance,
            required: quorumRequired,
            percent: proposal.dao.quorumPercent,
          },
          status: propStatus,
          createdAt: date.toLocaleDateString("en-GB"),
          raw: proposal,
        };
      });

    const dao = daoData.data.dao;

    return {
      dao: {
        proposals: formattedProposals.sort((a, b) => {
          const dateA = new Date(Number(a.raw.createdAt) * 1000);
          const dateB = new Date(Number(b.raw.createdAt) * 1000);
          return dateB.getTime() - dateA.getTime();
        }),
        activeProposals: dao.proposalOffering,
        activeMemberCount: dao.activeMemberCount || 0,
        totalShares: Math.floor(Number(dao.totalShares || 0) / 1e18),
        proposalCount: dao.proposalCount || formattedProposals.length,
        tokenBalance: "0",
        content: dao.profile?.[0]?.content || null,
        createdAt: new Date(Number(dao.createdAt) * 1000).toLocaleDateString(
          "en-GB",
        ),
      },
    };
  } catch (error) {
    console.error("Error fetching DAO data:", error);
    return {
      dao: {
        proposals: [],
        activeProposals: 0,
        activeMemberCount: 0,
        totalShares: 0,
        proposalCount: 0,
        tokenBalance: "0",
        content: null,
        createdAt: null,
      },
    };
  }
}
