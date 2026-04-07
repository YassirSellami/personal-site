export interface ContributionsItem {
  title: string;
  url: string;
  date: string;
  authors: string[];
  description: string;
}

const data: ContributionsItem[] = [
  {
    title:
      '(Coming soon) Policy-Driven Data Space Contract Negotiation using the ODRL Verifiable Credential Profile and OpenID4VP',
    url: 'https://opal-workshop.github.io/2026-2nd-edition/',
    date: '2026-05-11',
    authors: ['Yassir Sellami'],
    description:
      'Data Space participants need to automate data access decisions across organizations without pre-established trust relationships while still meeting compliance, sovereignty, and data governance requirements. However, current implementations often leave a gap between what the policy requires (expressed as constraints) and how the Consumer can consistently select and present the right credentials in a standards-based way. We propose a concrete, interoperable approach to contract negotiation between a Consumer and a Provider in a Data Space where access to data or services is governed by an ODRL policy whose evaluated values are expressed as Verifiable Credential (VC) claims. The Provider publishes an ODRL Offer policy using the ODRL Verifiable Credential (ODRL-VC) Profile. During negotiation, the Consumer proves compliance by presenting the required credentials from a Wallet',
  },
  {
    title: 'Capturing Requests and Context for ODRL-based Access and Usage Control',
    url: 'https://ceur-ws.org/Vol-4093/paper5.pdf',
    date: '2025-11-03',
    authors: [
      'Beatriz Esteves',
      'Wout Slabbinck',
      'Yassir Sellami',
      'Andrea Cimmino',
      'Víctor Rodríguez-Doncel',
      'Ruben Verborgh',
    ],
    description:
      'Trusted data exchange between parties requires robust mechanisms for governing how data is requested and accessed in a transparent and accountable manner across contexts. To achieve this, data exchange systems must support the interoperable expression, interpretation, and enforcement of access and usage control policies. While the W3C Open Digital Rights Language (ODRL) can capture complex policies for technical, societal and legal requirements, it currently lacks a mechanism to express requests for such data, and the context in which to evaluate the policies and requests. To address this issue, we derived key requirements for policy-based access and usage control systems to specify terms for describing: i) evaluation requests (formal descriptions of requested actions), and ii) the state of the world (knowledge representing real-world information relevant to the evaluation of the target policy or policies). We propose ontology design patterns using these terms to describe evaluation requests and the state of the world, which, in conjunction with policies, are necessary inputs for ODRL evaluators to assess which rules are active and which prohibitions and obligations have been violated or fulfilled.',
  },
  {
    title: 'ODRL VC Profile',
    url: 'https://gitlab.com/gaia-x/lab/policy-reasoning/odrl-vc-profile',
    date: '2024-02-05',
    authors: [
      'Yassir Sellami'
    ],
    description:
      'The main intention of this ODRL Profile is to be able to refer in a clear and precise way to verifiable credential claims in an ODRL Policy. This would give assignors of policies a way to enforce policies using trustworthy and verifiable claims from an assignee, and in doing so having more trust and confidence in the enforcement of the policy.',
  },
  {
    title: 'Gaia-X and the Policy Reasoning Engine',
    url: 'https://gaia-x.eu/gaia-x-and-the-policy-reasoning-engine/',
    date: '2023-12-07',
    authors: [
      'Julien Vanwambeke',
      'Yassir Sellami'
    ],
    description:
      'The Policy Reasoning Engine is a Gaia-X library helping service providers or catalogue providers to go further into machine processing, parsing complex policies and usage intentions automatically to add value for the consumers.',
  },
];

export default data;
