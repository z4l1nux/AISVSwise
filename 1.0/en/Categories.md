# OWASP Artificial Intelligence Security Verification Standard (AISVS)
### Core Category List - Work In Progress

---

## 1. Model Input Validation & Data Ingestion Security
**Goal:** Shield an AI system from malicious, malformed, or adversarial inputs **before** those inputs ever reach model inference or training pipelines. This category covers every entry point—from user‑facing prompts to back‑end batch uploads—to ensure only well‑formed, trustworthy data is processed.

| Focus area | Purpose |
| --- | --- |
| **Prompt‑injection prevention** | Detect and neutralize attempts to override system instructions or jailbreak guardrails. |
| **Adversarial‑input resistance** | Identify perturbations crafted to trigger misclassification or toxic output. |
| **Format & length validation** | Enforce strict syntactic, semantic, and size constraints on all incoming data. |
| **Pre‑deployment data vetting & classification** | Perform offline screening, de‑duplication, and content labeling before data is admitted to training sets. |

---

## 2. Model Behavior, Output Control & Safety Assurance
**Goal:** Guarantee that generated content is accurate, safe, and aligned with policy—even under adversarial pressure—while giving operators levers to stop or shape responses.

| Focus area | Purpose |
| --- | --- |
| **Output‑format enforcement** | Constrain responses to required schemas, types, or token budgets. |
| **Hallucination detection & mitigation** | Identify low‑confidence or fabricated answers and provide fallback strategies (e.g., citations, refusal). |
| **Output‑safety filters & allowlists** | Apply layered policy checks (toxicity, PII, disallowed topics) both pre‑ and post‑generation. |
| **Sensitive‑data‑leakage prevention** | Stop the model from echoing training secrets or user‑supplied confidential data. |
| **Autonomy‑bounding mechanisms** | Rate‑limit, throttle, or require approvals when the model initiates external actions (e.g., API calls, file writes). |

---

## 3. Training Data Governance & Bias Management
**Goal:** Provide an ethical, traceable, and legally compliant foundation for model behavior by securing data provenance, minimizing bias, and honoring user rights throughout the data lifecycle.

| Focus area | Purpose |
| --- | --- |
| **Dataset provenance & licensing validation** | Confirm origin, copyright status, and usage terms for all assets. |
| **Bias detection & correction** | Quantitatively surface and reduce demographic, topical, or distributional bias. |
| **Representation completeness & fairness** | Ensure under‑represented groups or edge cases have sufficient coverage. |
| **Fine‑tuning data integrity** | Protect small, high‑impact data sets from tampering or unintentional drift. |
| **User‑data deletion & consent enforcement post‑training** | Prove that subject requests propagate through checkpoints, checkpoints, and derivatives. |
| **Data‑poisoning detection** | Flag contributions that could corrupt fine‑tuning or drift model weights. |

---

## 4. Model Lifecycle Management & Change Control
**Goal:** Treat models like critical software artifacts—versioned, signed, reviewed, and reversible—so every change is deliberate, traceable, and recoverable.

| Focus area | Purpose |
| --- | --- |
| **Model versioning & signing** | Provide cryptographic integrity, dependency graphs, and SBOMs for each release. |
| **Secure patching & rollback mechanisms** | Enable hot‑fixes or downgrades without compromising security assurances. |
| **Controlled fine‑tuning & retraining workflows** | Gate data ingestion, hyper‑parameter tweaks, and pipeline configs behind approvals. |
| **Formal decommissioning process** | Define archival, sanitization, and revocation steps when retiring a model. |
| **Change auditing & approval workflows** | Log, review, and attest to all modifications—including prompt templates and system messages. |

---

## 5. Infrastructure, Configuration & Deployment Security
**Goal:** Harden every layer—from build server to GPU runtime—against exploitation, misconfiguration, or lateral movement.

| Focus area | Purpose |
| --- | --- |
| **Container & serverless runtime isolation** | Enforce least‑privilege kernels, seccomp profiles, and eBPF rules. |
| **Secure deployment pipelines** | Use IaC scanning, reproducible builds, and programmable policy gates (e.g., OPA). |
| **Exposure‑surface minimization** | Close default ports, disable unused endpoints, and restrict egress. |
| **Configuration protection & validation** | Store configs in encrypted secrets managers and validate against policy baselines. |
| **Secrets management & environment hardening** | Rotate API keys, employ TPM/HSM roots, and audit environment variables. |

---

## 6. Access Control & Identity for AI Components & Users
**Goal:** Enforce identity propigation and context‑aware, least‑privilege access to models, data, and derived content—whether human, service, or agent.

| Focus area | Purpose |
| --- | --- |
| **Identity proofing & federation**                      | Establish and verify principal identity; integrate with enterprise IdP (OIDC/SAML) and support progressive trust elevation (MFA, step‑up).                                  |
| **User & data access mapping**                          | Bind personas/roles to fine‑grained permissions on endpoints, collections, embeddings, and vector indices.                                                                  |
| **Attribute‑Based Access Control (ABAC) service layer** | Externalize policy decisions (e.g., OPA, Cedar) that evaluate dynamic attributes—user, resource tags, environmental context—at query time, independent of application code. |
| **Query‑time policy evaluation**                        | Before retrieval, filter search vectors / SQL rows so only objects the caller is entitled to ever leave storage.                                                            |
| **Post‑retrieval response filtering**                   | After model inference or search, redact or transform content (RLS, RLHF, policy‑based transformers) to strip data the caller’s clearance cannot view.                       |
| **Authorization‑aware output filtering**                | Enforce least‑privilege in generated text, images, or actions; ensure prompts, embeddings, and citations respect caller entitlements.                                       |
| **Tenant & session isolation**                          | Segregate memory, embeddings, and cache per tenant; verify session context on every request to prevent cross‑customer data bleed in multi‑tenant SaaS.                      |
| **Agent & tool permission scoping**                     | Constrain autonomous agents, plugins, or tool calls to explicit capability sets (e.g., read‑only S3, no shell access), enforced by the ABAC layer.                          |

---

## 7. Monitoring, Logging & Anomaly Detection
**Goal:** Provide real‑time and forensic visibility into what the model sees, does, and returns—so threats can be detected, triaged, and learned from.

| Focus area | Purpose |
| --- | --- |
| **Prompt & output logging** | Capture inputs, outputs, and policy decisions with privacy‑preserving redaction. |
| **Abuse & jailbreak detection** | Alert when queries resemble known jailbreak patterns or circumvent safeguards. |
| **Hallucination drift detection** | Track novelty, confidence, and divergence metrics across versions. |
| **Performance & behavior telemetry** | Instrument latency, token counts, resource utilization, and success rates. |
| **Alerting & SIEM integration** | Export enriched events for SOC correlation and incident response. |

---

## 8. Memory, Embeddings & Vector Database Security
**Goal:** Safeguard long‑term AI memory and RAG (retrieval‑augmented generation) stores from inversion, leakage, or unauthorized reuse.

| Focus area | Purpose |
| --- | --- |
| **Embedding sanitization & validation** | Remove PII or malicious artifacts before vectorization. |
| **Access controls on memory & RAG indices** | Apply row‑level, namespace, or ABAC controls to stored vectors. |
| **Memory expiry, revocation & deletion** | Honor TTLs, user deletion requests, and dynamic scope reductions. |
| **Prevent embedding inversion or leakage** | Employ noise addition, dimensionality reduction, and encryption schemes. |
| **Scope enforcement for user‑specific memory** | Ensure one user’s context cannot seed completions for another. |

---

## 9. AI Application Layer & Autonomous Orchestration Security
**Goal:** Secure the glue code—agents, planners, tool delegates—that chains model calls into complex workflows, often with real‑world impact.

| Focus area | Purpose |
| --- | --- |
| **Agent task planning & re‑entrancy control** | Throttle recursive plans and require human checkpoints for privileged actions. |
| **Tool plugin sandboxing** | Isolate third‑party functions with syscall, network, and filesystem jails. |
| **Autonomous loop bounding** | Enforce max iterations, cost quotas, or resource ceilings. |
| **Protocol‑level misuse protection** | Validate structured messages (e.g., function‑call JSON) against schemas. |
| **Multi‑agent swarm risk reduction** | Detect collusion, echo‑chambers, or emergent unsafe behavior across agents. |

---

## 10. Privacy Protection & Personal Data Management
**Goal:** Uphold individual rights and minimize the collection, retention, and exposure of personal data at every phase of the AI pipeline.

| Focus area | Purpose |
| --- | --- |
| **Anonymization & data minimization** | Strip or hash identifiers; collect only what is strictly necessary. |
| **Right‑to‑be‑forgotten & deletion enforcement** | Propagate erasure across checkpoints, embeddings, and backups. |
| **Differential privacy** | Apply noise or clipping during training and query time. |
| **Purpose limitation & scope‑creep protection** | Detect secondary uses that diverge from original consent. |
| **Consent management & documentation** | Track lawful bases, opt‑in status, and data‑subject agreements. |

---

## 11. Supply Chain Security for Models, Frameworks & Data
**Goal:** Treat upstream artifacts—pretrained models, ML frameworks, datasets—like code packages subject to tampering, licensing, and vulnerability risk.

| Focus area | Purpose |
| --- | --- |
| **Pretrained model vetting & provenance** | Verify source, checksums, and embedded malicious payloads. |
| **Framework/library CVE scanning** | Continuously assess TF/PyTorch/Hugging Face and their transitive deps. |
| **Dependency pinning & verification** | Employ SBOMs, hermetic builds, and sigstore attestations. |
| **Licensing compliance** | Respect model weights’ usage clauses and dataset copyright. |
| **Trusted source enforcement** | Restrict downloads to signed registries, mirrors, or private artifacts. |

---

## 12. Adversarial Robustness & Attack Resistance
**Goal:** Design models that degrade gracefully—or fail closed—when confronted with sophisticated attacks targeting the learning process or inference surface.

| Focus area | Purpose |
| --- | --- |
| **Adversarial example hardening** | Employ defensive distillation, randomized smoothing, or certified bounds. |
| **Membership inference mitigation** | Reduce confidence gaps and add noise to protect training inclusion privacy. |
| **Model inversion resistance** | Limit exposure of embeddings, logits, or internal attention maps. |
| **Model extraction defense** | Rate‑limit queries, watermark outputs, and detect anomalous scraping. |
| **Poisoned data detection** | Use clustering, entropy, and trigger search to flag back‑doored samples. |

---

## 13. Human Oversight, Accountability & Governance
**Goal:** Keep a human “captain of the ship” with clear lines of responsibility, escalation, and ethical stewardship.

| Focus area | Purpose |
| --- | --- |
| **Kill‑switch & override mechanisms** | Provide immediate shutdown or rollback paths for runaway behavior. |
| **Human‑in‑the‑loop decision checkpoints** | Require approvals when stakes surpass predefined risk thresholds. |
| **Operational governance documentation** | Maintain SOPs, playbooks, and RACI matrices for AI operations. |
| **Chain of responsibility & auditability** | Log operator actions and model decisions for postmortem reviews. |

---

## 14. Explainability, Interpretability & Transparency
**Goal:** Make model reasoning and limitations legible to developers, auditors, and end‑users—building trust and diagnosability.

| Focus area | Purpose |
| --- | --- |
| **Explainable‑AI techniques (SHAP, LIME, etc.)** | Surface feature importance, counter‑factuals, and local explanations. |
| **Model cards & usage disclosures** | Document intended use, performance metrics, and ethical considerations. |
| **Uncertainty quantification** | Propagate confidence scores or entropy measures in responses. |
| **User‑facing transparency reports** | Provide periodic disclosures on incidents, drift, and data usage. |

---

### Next steps for reviewers

1. **Scope accuracy** – Does each category cover the right threat surfaces?  
2. **Clarity & granularity** – Are the descriptions and bullets detailed enough to drive concrete requirements?  
3. **Overlap & gaps** – Where can we consolidate or expand?  
4. **Terminology** – Any jargon needing definitions or refinement?

Please leave inline comments, propose rewrites, or suggest additional focus areas. Your feedback will shape the next iteration of AISVS!
