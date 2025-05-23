# C5 Access Control & Identity for AI Components & Users

## Control Objective

Effective access control for AI hinges on strong identity proofing, context‑aware authorization, and runtime enforcement that follow the principle of least privilege. The controls below ensure that humans, services, and autonomous agents interact with models, data, and tools only within explicitly granted scopes, with continuous verification.

---

## C5.1 Identity Proofing & Federation

Establish strong, IdP-backed identities for all humans and services, enforce MFA/step-up for sensitive actions, and align onboarding with NIST 800-63-3 IAL-2 to make sure every principal is who they claim to be.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.1.1** | **Verify that** all human users and service principals authenticate through a centralized enterprise IdP (OIDC/SAML) and that identities are mapped 1:1 to tokens (no shared secrets). | 1 | D/V |
| **5.1.2** | **Verify that** high‑risk operations (e.g., model publish, weights export) require MFA or step‑up authentication. | 1 | D/V |
| **5.1.3** | **Verify that** new principals undergo identity proofing that aligns with NIST 800‑63‑3 IAL‑2 or better before receiving production access. | 2 | D |
| **5.1.4** | **Verify that** access reviews run at least quarterly to de‑provision dormant AI identities and rotate associated credentials. | 2 | V |
| **5.1.5** | **Verify that** federation extends to external AI agents (e.g., customer‑hosted orchestration) via signed JWT assertions with limited lifetimes. | 3 | D/V |

---

## C5.2 User & Data Access Mapping

Tie every endpoint, vector index, and dataset to a least-privilege role matrix so principals can perform only the exact CRUD operations their job requires, with changes logged for audit.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.2.1** | **Verify that** every endpoint, vector collection, or embedding index has an owner‑approved RBAC/ABAC matrix binding roles to CRUD verbs. | 1 | D/V |
| **5.2.2** | **Verify that** least‑privilege roles are applied by default; service accounts start with read‑only and require approval for write. | 1 | D/V |
| **5.2.3** | **Verify that** role changes are tied to ticket/workflow IDs and logged immutably for audit. | 2 | V |
| **5.2.4** | **Verify that** data sensitivity tags (PII, PHI, export‑controlled) propagate to embeddings and prompt caches for downstream enforcement. | 2 | D |
| **5.2.5** | **Verify that** real‑time dashboards show effective permissions for any principal/resource pair to aid audit teams. | 3 | V |

---

## C5.3 Attribute‑Based Access Control (ABAC) Service Layer

Off-load policy decisions to an engine like OPA/Cedar, which evaluates dynamic user, resource, and environment attributes at request time and emits tamper-proof decision logs. 

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.3.1** | **Verify that** policy decisions are externalized to a dedicated engine (e.g., OPA, Cedar) callable over gRPC/REST. | 1 | D/V |
| **5.3.2** | **Verify that** policies evaluate dynamic attributes such as user clearance, resource tags, request time, and tenant ID at run‑time. | 1 | D/V |
| **5.3.3** | **Verify that** policy bundles or Cedar schema changes are version‑controlled, signed, and validated in CI. | 2 | D |
| **5.3.4** | **Verify that** the ABAC layer returns structured decision logs (PEP sidecar) shipped to a SIEM for correlation. | 2 | V |
| **5.3.5** | **Verify that** ABAC cache TTLs do not exceed 5 minutes for high‑sensitivity resources. | 3 | D/V |

---

## C5.4 Query-Time Policy Evaluation

Enforce row- or vector-level security filters inside the data service itself; failed or slow policy checks must block, not silently bypass, a request.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.4.1** | **Verify that** vector and SQL queries include a security filter (tenant ID, sensitivity label) enforced at the database or service layer, not in application code. | 1 | D/V |
| **5.4.2** | **Verify that** row‑level security (RLS) or field‑level masking is enabled for vector databases and search indices (e.g., OpenSearch FGAC). | 1 | D/V |
| **5.4.3** | **Verify that** failed policy evaluations abort the query rather than returning empty results (to prevent confused‑deputy). | 2 | D |
| **5.4.4** | **Verify that** evaluation latency is monitored; an SLA breach raises alerts, preventing silent policy bypass via timeouts. | 2 | V |
| **5.4.5** | **Verify that** sensitive prompts or search queries are re‑evaluated upon retry to account for policy changes within user sessions. | 3 | D/V |

---

## C5.5 Output Filtering & Redaction

Post-inference hooks strip or transform any text, image, or citation the caller isn’t entitled to see, with deterministic, version-controlled redaction logic for compliance investigations.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.5.1** | **Verify that** post‑inference hooks redact disallowed PII or classified strings before returning content to the caller. | 1 | D/V |
| **5.5.2** | **Verify that** references/citations included in model output are checked against the caller’s entitlements and stripped if unauthorized. | 1 | D/V |
| **5.5.3** | **Verify that** an allow‑list of export‑safe formats (e.g., PDF without hidden layers) is enforced for image/file outputs. | 2 | D |
| **5.5.4** | **Verify that** redaction logic is deterministic and versioned to support reproducibility in compliance investigations. | 2 | V |
| **5.5.5** | **Verify that** high‑risk redactions trigger adaptive logs with hashed originals (for forensic retrieval without data exposure). | 3 | V |

---

## C5.6 Tenant & Session Isolation

Segregate memory, caches, and network paths per tenant, verify tenant context on every call, and apply default-deny mesh policies to stop cross-customer data bleed in multi-tenant SaaS.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.6.1** | **Verify that** memory, embeddings, and cache entries are namespace‑segregated per tenant and cleared on tenant deletion. | 1 | D/V |
| **5.6.2** | **Verify that** every request includes a tenant ID that is authenticated and validated against session context. | 1 | D/V |
| **5.6.3** | **Verify that** cross‑tenant traffic within service meshes is denied by default NetworkPolicies. | 2 | D |
| **5.6.4** | **Verify that** encryption keys are unique per tenant for customer‑managed key (CMK) scenarios. | 3 | D |

---

## C5.7 Agent & Tool Permission Scoping

Give autonomous agents scoped capability tokens that expire with the session; dangerous actions (file write, shell exec) stay disabled unless explicitly re-authorized, and every tool invocation is re-checked by the ABAC layer.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **5.7.1** | **Verify that** each autonomous agent (chain, plugin, tool call) is associated with a scoped capability token that enumerates allowed actions. | 1 | D/V |
| **5.7.2** | **Verify that** dangerous capabilities (file write, shell exec) are disabled by default and require explicit justification. | 1 | D/V |
| **5.7.3** | **Verify that** capability tokens expire within the user session and cannot be reused offline. | 2 | D |
| **5.7.4** | **Verify that** agent‑initiated tool calls are passed through the ABAC layer for secondary authorization. | 2 | V |
| **5.7.5** | **Verify that** agent error and exception logs include capability scope to aid incident analysis. | 3 | V |

---

## References

* [Identity and Access Management in the AI Era: 2025 Guide – IDSA](https://www.idsalliance.org/blog/identity-and-access-management-in-the-ai-era-2025-guide/)
* [Attribute‑Based Access Control with OPA – Medium](https://medium.com/permify-tech-blog/attribute-based-access-control-abac-implementation-with-open-policy-agent-opa-b47052248f29)
* [How We Designed Cedar to Be Intuitive, Fast, and Safe – AWS](https://aws.amazon.com/blogs/security/how-we-designed-cedar-to-be-intuitive-to-use-fast-and-safe/)
* [Row Level Security in Vector DBs for RAG – Bluetuple.ai](https://medium.com/bluetuple-ai/implementing-row-level-security-in-vector-dbs-for-rag-applications-fdbccb63d464)
* [OWASP Top 10 Risk Mitigations for LLMs – Strobes](https://strobes.co/blog/owasp-top-10-risk-mitigations-for-llms-and-gen-ai-apps-2025/)
* [Tenant Isolation in Multi‑Tenant Systems – WorkOS](https://workos.com/blog/tenant-isolation-in-multi-tenant-systems)
* [Handling AI Agent Permissions – Stytch](https://stytch.com/blog/handling-ai-agent-permissions/)
* [Security Overview – Pinecone Docs](https://docs.pinecone.io/guides/production/security-overview)
* [Fine‑Grained Access Control in Amazon OpenSearch Service – AWS Docs](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html)
* [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [Zero Trust Architecture – NIST SP 800‑207](https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf)
