# OWASP Artificial Intelligence Security Verification Standard (AISVS)
### This Category list is intended to help the AISVS team plan the structure of the document. It will be deleted before the standard is released.

---

## 1. Training Data Governance & Bias Management

This section provides requirements to ensure training data is ethical, secure, and compliant by managing its provenance, quality, and bias during data collection and preparation for model training. And intial version of this section has been built to demonstrate the structure of the requirements for discussion here [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C1-Training-Data-Governance.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C1-Training-Data-Governance.md)

| Focus area | Purpose | Verification Requirements | MITRE ATLAS Mapping |
| --- | --- | --- | --- |
| **Training Data Provenance** | Track and audit origins of training datasets to ensure traceability and detect unauthorized or unverified sources. | [L1] Verify that data sources are documented and their origins can be traced.<br>[L2] Verify that data acquisition processes include verification of source legitimacy.<br>[L3] Verify cryptographic validation of data source integrity. | ML04.001 Data Poisoning |
| **Bias Detection & Correction** | Identify and mitigate demographic or distributional biases in training data to promote equitable model outcomes. | [L1] Verify bias assessment is performed on training datasets.<br>[L2] Verify documented mitigation strategies for identified biases.<br>[L3] Verify bias metrics are tracked across model versions. | ML07.001 Bias Exploitation |
| **Representation Completeness & Fairness** | Ensure training data includes balanced coverage of under-represented groups and edge cases through targeted collection or augmentation to enhance model robustness. | [L1] Verify analysis of demographic distribution in training data.<br>[L2] Verify procedures for augmenting underrepresented classes.<br>[L3] Verify edge case testing against fairness criteria. | ML07.001 Bias Exploitation |
| **Pre-Training Data Poisoning Detection & Mitigation** | Detect and filter malicious or corrupted data in training datasets using anomaly detection or statistical analysis to prevent model corruption. | [L1] Verify basic data validation checks before training.<br>[L2] Verify statistical outlier detection in training data.<br>[L3] Verify advanced poisoning detection techniques implementation. | ML04.001 Data Poisoning |
| **Training Data Integrity & Labeling** | Safeguard training datasets and labels from tampering or poisoning using cryptographic integrity, secure annotation pipelines and other methods. | [L1] Verify data integrity checks are implemented.<br>[L2] Verify secure annotation workflows with access controls.<br>[L3] Verify cryptographic validation of data and label integrity. | ML04.001 Data Poisoning |
| **Training Data Quality Assurance** | Validate training data for accuracy, completeness, and consistency to ensure reliable model training. | [L1] Verify basic data quality checks (missing values, formats).<br>[L2] Verify consistency and distribution checks.<br>[L3] Verify formal data quality metrics monitored for drift. | ML04.003 Data Manipulation |
| **User Data Deletion & Consent Enforcement** | Implement mechanisms to honor user deletion requests and consent withdrawals in training datasets and backups, compliant with privacy law. | [L1] Verify procedures for handling deletion requests.<br>[L2] Verify audit trails of deletion requests and actions.<br>[L3] Verify deletion across all systems including backups. | ML08.001 Data Leakage |
| **Model Metadata Integrity** | Ensure accurate documentation of model characteristics, training parameters, and dataset information. | [L1] Verify metadata is captured for all models.<br>[L2] Verify tamper-resistant storage of metadata.<br>[L3] Verify cryptographic signing of metadata. | ML01.002 Model Tampering |

---

## 2. User Input Validation

This section outlines defenses against user input attacks, ensuring all runtime inputs (e.g., interactive prompts, API requests, or streaming feeds) are well-formed, policy-compliant, and free from malicious or adversarial content, such as prompt injection. This section focuses solely on securing user inputs during model inference.

| Focus area | Purpose | Verification Requirements | MITRE ATLAS Mapping |
| --- | --- | --- | --- |
| **Prompt-Injection Defense** | Detect & block attempts to override instructions or jailbreak guardrails | [L1] Verify input screening for known prompt injection patterns.<br>[L2] Verify detection and blocking of instruction override attempts.<br>[L3] Verify adaptive defenses against novel prompt injection techniques. | ML05.002 Input Manipulation |
| **Adversarial-Example Resistance** | Detect & block perturbed inputs designed to mislead model during inference | [L1] Verify basic input sanitization to prevent obvious manipulations.<br>[L2] Verify detection mechanisms for known adversarial patterns.<br>[L3] Verify robust defenses against sophisticated adversarial examples. | ML05.001 Model Evasion |
| **Schema, Type & Length Validation** | Enforce strict syntactic, semantic, & size constraints on user inputs | [L1] Verify input validation against defined schemas.<br>[L2] Verify type checking and length constraints enforcement.<br>[L3] Verify semantic validation of complex inputs. | ML05.002 Input Manipulation |
| **Content & Policy Screening** | Apply filters to ensure compliance with safety policies | [L1] Verify content screening for prohibited material.<br>[L2] Verify policy enforcement based on context and user.<br>[L3] Verify comprehensive coverage of content policies with regular updates. | ML05.003 Prompt Injection |

---

## 3. Model Lifecycle Management & Change Control

This section provides requirements to manage model development, fine-tuning, and maintenance securely, ensuring all changes are versioned, traceable, and reversible.

| Focus area | Purpose | Verification Requirements | MITRE ATLAS Mapping |
| --- | --- | --- | --- |
| **Model versioning & transparency** | Track model releases with cryptographic signing, dependency graphs, and documentation to ensure integrity and transparency. | [L1] Verify unique versioning for all model releases.<br>[L2] Verify cryptographic signing of model artifacts.<br>[L3] Verify complete dependency tracking with detailed documentation. | ML01.002 Model Tampering |
| **Secure patching & rollback** | Enable hotfixes and downgrades with validated rollback mechanisms to maintain security and functionality without vulnerabilities. | [L1] Verify documented procedures for model updates.<br>[L2] Verify testing of rollback functionality.<br>[L3] Verify automated rollback triggers for detected issues. | ML01.004 Model Poisoning |
| **Controlled fine-tuning & retraining** | Restrict data ingestion, hyperparameter changes, and pipeline configurations to approved workflows. | [L1] Verify restricted access to fine-tuning operations.<br>[L2] Verify validation of all data used in fine-tuning.<br>[L3] Verify audit trail of all parameter modifications. | ML01.004 Model Poisoning |
| **Change auditing** | Log and review all modifications, including prompt templates and system messages, to ensure traceability and accountability. | [L1] Verify logging of all model changes.<br>[L2] Verify regular review of change logs.<br>[L3] Verify tamper-proof audit trails with integrity verification. | ML01.001 Model Replication |
| **Model testing & validation** | Conduct performance, robustness, and security tests before deployment to verify model reliability and compliance. | [L1] Verify pre-deployment testing protocols.<br>[L2] Verify security-focused test cases.<br>[L3] Verify comprehensive adversarial testing. | ML01.005 Model Manipulation |
| **Model change documentation** | Maintain changelogs and model cards to document updates, configurations, and dependencies for compliance and auditing. | [L1] Verify documentation of all model changes.<br>[L2] Verify detailed model cards with usage guidelines.<br>[L3] Verify documentation meets regulatory requirements. | ML01.002 Model Tampering |
| **Formal decommissioning process** | Define steps for archiving, sanitizing, and revoking retired models to prevent unauthorized reuse or data leakage. | [L1] Verify documented decommissioning procedures.<br>[L2] Verify secure data sanitization processes.<br>[L3] Verify complete dependency analysis and notification for interconnected systems. | ML08.001 Data Leakage |
| **Model Provenance Tracking** | Capturing, recording, and storing information about a model's origin, how it was created, and its history of modifications. | [L1] Verify model origin documentation.<br>[L2] Verify cryptographic verification of provenance.<br>[L3] Verify complete chain of custody for model artifacts. | ML01.002 Model Tampering |

---

## 4. Infrastructure, Configuration & Deployment Security
This section provides requirements to secure build, deployment, and runtime environments for AI systems, protecting against exploitation, misconfiguration, and lateral movement.

| Focus area | Purpose |
| --- | --- |
| **Container & serverless runtime isolation** | Enforce least privilege using Kubernetes namespaces, seccomp profiles, and eBPF rules to prevent privilege escalation. |
| **Secure deployment pipelines** | Implement IaC scanning, reproducible builds, and policy gates to ensure trusted deployments. |
| **Attack surface reduction** | Restrict default ports, disable unused endpoints, and limit egress traffic to minimize external attack vectors. |
| **Secrets management & environment hardening** | Rotate API keys, use TPM/HSM for key storage, and audit environment variables to prevent unauthorized access. |
| **Model sandboxing** | Isolate model evaluation in sandboxed environments to detect vulnerabilities or malicious behavior. |
| **Infrastructure vulnerability monitoring** | Scan containers and hosts for CVEs and misconfigurations. |

---

## 5. Access Control & Identity for AI Components & Users
This section provides requirements to enforce context-aware, least-privilege access for users, services, and agents interacting with AI models, data, and outputs during deployment and runtime.

| Focus area | Purpose |
| --- | --- |
| **Identity proofing & federation** | Establish and verify principal identity; integrate with enterprise IdP and support progressive trust elevation (MFA, step‑up). |
| **User & data access mapping** | Bind personas/roles to fine‑grained permissions on endpoints, collections, embeddings, and vector indices. |
| **Attribute‑Based Access Control (ABAC) service layer** | Externalize policy decisions (e.g., OPA, Cedar) that evaluate dynamic attributes—user, resource tags, environmental context—at query time, independent of application code. |
| **Query‑time policy evaluation** | Before retrieval, filter search vectors / SQL rows so only objects the caller is entitled to ever leave storage. |
| **Output filtering & redaction** | After model inference or search, enforce least‑privilege by redacting, transforming, or refusing content so that all generated text, images, embeddings, and citations respect the caller’s entitlements. |
| **Tenant & session isolation** | Segregate memory, embeddings, and cache per tenant; verify session context on every request to prevent cross‑customer data bleed in multi‑tenant SaaS. |
| **Agent & tool permission scoping** | Constrain autonomous agents, plugins, or tool calls to explicit capability sets (e.g., read‑only S3, no shell access), enforced by the ABAC layer.    

---

## 6. Supply Chain Security for Models, Frameworks & Data

This section provides requirements to ensure the integrity and security of all components used in AI systems, including pre-trained models, frameworks, libraries, and third-party datasets.

| Focus area | Purpose | Verification Requirements | MITRE ATLAS Mapping |
| --- | --- | --- | --- |
| **Pretrained model vetting & provenance** | Verify the origin, integrity, and security posture of third-party models before integration. | [L1] Verify basic validation of model sources.<br>[L2] Verify security assessment of pretrained models.<br>[L3] Verify comprehensive vetting including hidden behavior testing. | ML00.002 Transfer Learning |
| **Framework & library scanning** | Identify and remediate vulnerabilities in AI frameworks and supporting libraries. | [L1] Verify dependency scanning in build pipelines.<br>[L2] Verify automated vulnerability monitoring.<br>[L3] Verify code analysis of critical dependencies. | ML00.004 Supply Chain Compromise |
| **Dependency pinning & verification** | Lock dependencies to specific verified versions and validate integrity. | [L1] Verify version pinning for all dependencies.<br>[L2] Verify integrity verification of dependencies.<br>[L3] Verify reproducible builds with identical outputs. | ML00.004 Supply Chain Compromise |
| **Trusted source enforcement** | Ensure all AI components are obtained from authorized and verified sources. | [L1] Verify approved sources for all components.<br>[L2] Verify enforcement of trusted source policies.<br>[L3] Verify cryptographic verification of component origins. | ML00.004 Supply Chain Compromise |
| **Third-party dataset risk assessment** | Evaluate security, bias, and quality risks of external datasets. | [L1] Verify risk assessment for external datasets.<br>[L2] Verify vetting procedures aligned with internal standards.<br>[L3] Verify continuous monitoring of external data quality. | ML04.001 Data Poisoning |
| **Supply chain attack monitoring** | Detect and respond to compromises in the AI supply chain. | [L1] Verify monitoring for published vulnerabilities.<br>[L2] Verify incident response plans for supply chain attacks.<br>[L3] Verify regular supply chain penetration testing. | ML00.004 Supply Chain Compromise |
| **SBOM (Software Bill of Materials) for model artifacts** | Maintain comprehensive inventory of all components in AI models. | [L1] Verify SBOM creation for model artifacts.<br>[L2] Verify SBOM completeness and accuracy validation.<br>[L3] Verify automated SBOM generation and verification in CI/CD. | ML00.004 Supply Chain Compromise |

---

## 7. Model Behavior, Output Control & Safety Assurance
This section provides requirements to ensure model outputs are accurate, safe, and policy-compliant during runtime, to control and mitigate risks in generated content.

| Focus area | Purpose |
| --- | --- |
| **Output format enforcement** | Enforce constraints on response schemas, data types, or token limits to ensure structured and predictable outputs. |
| **Hallucination detection & mitigation** | Detect low-confidence or fabricated outputs and apply fallback strategies to maintain response reliability. |
| **Output safety & privacy filtering** | Block harmful content, PII, or confidential data in outputs using pre- and post-generation policy checks. |
| **Output & action limiting** | Restrict model-initiated actions and response rates through throttling or approval requirements to prevent abuse or overload. |
| **Output explainability** | Provide transparency in outputs through confidence scores or reasoning traces to enhance user trust. |
| **Monitoring integration** | Feed output safety and quality metrics into monitoring systems to enable real-time risk detection and response. |

---

## 8. Memory, Embeddings & Vector Database Security
This section provides requirements to secure AI memory and retrieval-augmented generation (RAG) stores during runtime, protecting against inversion, leakage, and unauthorized reuse.

| Focus area | Purpose |
| --- | --- |
| **Access controls on memory & RAG indices** | Apply row‑level, namespace, or ABAC controls to stored vectors. |
| **Embedding sanitization & validation** | Remove PII or malicious artifacts before vectorization. |
| **Memory expiry, revocation & deletion** | Honor TTLs, user deletion requests, and dynamic scope reductions. |
| **Prevent embedding inversion or leakage** | Employ noise addition, dimensionality reduction, and encryption schemes. |
| **Scope enforcement for user‑specific memory** | Ensure one user’s context cannot seed completions for another. |

---

## 9. Autonomous Orchestration & Agentic Action Security

This section provides requirements to secure the interactions and operations of autonomous and multi-agent AI systems, preventing unauthorized or harmful autonomous actions.

| Focus area | Purpose | Verification Requirements | MITRE ATLAS Mapping |
| --- | --- | --- | --- |
| **Agent task-planning & recursion budgets** | Throttle recursive plans and require human checkpoints for privileged actions by limiting the scope, depth, and resource consumption of autonomous planning. | [L1] Verify implementation of task execution limits.<br>[L2] Verify monitoring of resource consumption.<br>[L3] Verify sophisticated circuit breakers for runaway processes. | ML09.001 Autonomous System Compromise |
| **Tool plugin sandboxing** | Isolate tool interactions to prevent unauthorized system access. | [L1] Verify basic execution isolation for tools.<br>[L2] Verify privilege restriction for tool access.<br>[L3] Verify comprehensive sandbox with resource limitations. | ML09.002 Tool Misuse |
| **Autonomous loop & cost bounding** | Prevent uncontrolled agent-to-agent or recursive operations. | [L1] Verify loop detection mechanisms.<br>[L2] Verify cost monitoring and threshold enforcement.<br>[L3] Verify formal verification of agent interaction protocols. | ML09.003 Agent Loop Detection |
| **Protocol-level misuse protection** | Secure communication channels between agents and systems. | [L1] Verify validation of inter-agent communications.<br>[L2] Verify authentication of agent communications.<br>[L3] Verify cryptographic integrity of agent messages. | ML09.004 Agent Communication Hijacking |
| **Agent identity & tamper-evidence** | Ensure agent actions are attributable and modifications detected. | [L1] Verify unique identification of agents.<br>[L2] Verify logging of agent actions with identity.<br>[L3] Verify cryptographic binding of actions to agent identity. | ML09.005 Agent Identity Spoofing |
| **Multi-agent swarm risk reduction** | Mitigate risks from interacting autonomous systems. | [L1] Verify isolation between agent domains.<br>[L2] Verify coordination protocols with safety constraints.<br>[L3] Verify formal modeling of multi-agent interaction safety. | ML09.006 Swarm Manipulation |
| **User & Tool Authentication/Authorization** | Implement robust access controls for agent operations. | [L1] Verify authentication for all agent-triggered actions.<br>[L2] Verify fine-grained authorization for tool access.<br>[L3] Verify continuous validation of agent privileges. | ML09.002 Tool Misuse |
| **Agent-to-agent communication security** | Secure information exchange between autonomous components. | [L1] Verify encryption of agent communications.<br>[L2] Verify validation of message integrity and origin.<br>[L3] Verify formal verification of communication protocols. | ML09.004 Agent Communication Hijacking |
| **Intent verification & constraint enforcement** | Validate that agent actions align with user intent and system constraints. | [L1] Verify basic constraint checking before actions.<br>[L2] Verify intent confirmation for high-impact actions.<br>[L3] Verify formal verification of constraint satisfaction. | ML09.007 Intent Manipulation |

---

## 10. Adversarial Robustness & Attack Resistance

This section provides requirements to enhance models' resilience against various adversarial attacks, including evasion, inference, and extraction attacks.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- | --- |
| **Model alignment and safety** | Ensure models behave as intended and do not produce harmful outputs. This includes basic alignment testing, guard rails for harmful outputs and a comprehensive alignment verification methodology. | ML05.005 Safety Constraint Bypass |
| **Adversarial example hardening** | Enhance model resilience against manipulated inputs during inference including implementation of defensive techniques and formal robustness guarantees where applicable. | ML05.001 Model Evasion |
| **Membership inference mitigation** | Prevent attacks that determine if specific data was used in training. This includes awareness of membership inference risks, implementation of confidence score controls and comprehensive defenses such as differential privacy. | ML03.001 Membership Inference |
| **Model inversion resistance** | Prevent reconstruction of training data from model behavior. This includes verification of output restrictions to prevent excessive disclosure, other anti-inversion techniques and formal guarantees against inversion attacks. | ML03.002 Model Inversion |
| **Model extraction defense** | Prevent unauthorized duplication of model functionality. This includes verification of rate limiting on model APIs, detection of systematic querying patterns and watermarking or fingerprinting of model outputs. | ML02.001 Model Theft |
| **Inference-time poisoned data detection** | Identify and mitigate backdoored or poisoned inputs during model operation. This includes verification of anomaly detection for inputs, filtering of suspicious input patterns and advanced detection for sophisticated poisoned inputs. | ML04.001 Data Poisoning |

---

## 11. Privacy Protection & Personal Data Management
This section provides requirements for upholding individual rights and minimizing the collection, retention, and exposure of personal data at every phase of the AI pipeline.

| Focus area | Purpose |
| --- | --- |
| **Anonymization & data minimization** | Strip or hash identifiers; collect only what is strictly necessary. |
| **Right‑to‑be‑forgotten & deletion enforcement** | Propagate erasure across checkpoints, embeddings, and backups. |
| **Differential privacy** | Apply noise or clipping during training and query time. |
| **Purpose limitation & scope‑creep protection** | Detect secondary uses that diverge from original consent. |
| **Consent management & documentation** | Track lawful bases, opt‑in status, and data‑subject agreements. |
| **Federated learning with privacy controls** | Apply privacy advantages by training models on distributed devices without sharing raw data. |

---

## 12. Monitoring, Logging & Anomaly Detection

This section provides requirements for delivering real-time and forensic visibility into what the model and other AI components see, do, and return, so threats can be detected, triaged, and learned from.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- | 
| **Prompt & output logging** | Capture inputs, outputs, and policy decisions with privacy-preserving redaction including basic logging of model interactions, privacy-preserving redaction in logs and tamper-proof logging with integrity guarantees. | ML03.003 Data Leakage |
| **Abuse & jailbreak detection** | Alert when queries resemble known jailbreak patterns or circumvent safeguards including detection of basic attack patterns, alerting on potential policy violations and sophisticated detection with behavioral analysis. | ML05.003 Prompt Injection |
| **Model drift detection** | Track novelty, confidence, hallucinations, and divergence metrics across versions including tracking of basic performance metrics, automated alerting on drift thresholds and comprehensive behavioral change detection. | ML06.001 Performance Degradation |
| **Performance & behavior telemetry** | Instrument latency, token counts, resource utilization, and success rates including collection of basic operational metrics, threshold alerting on resource utilization and correlation between metrics for advanced pattern detection. | ML06.002 Resource Exhaustion |
| **Alerting & SIEM integration** | Export enriched events for SOC correlation and incident response including integration with security monitoring systems and custom correlation of rules for AI-specific threats. | ML06.003 Denial of Service |
| **Secure log storage** | To track and identify any potential security issues, investigations and audits with secure storage of logs, access controls on log data and tamper-evident log storage with cryptographic guarantees. | ML03.004 Data Access |
| **AI Incident Response Planning & Execution** | Prepare for and respond to AI-specific security incidents.  | ML06.004 System Compromise |

---

## 13. Human Oversight, Accountability & Governance
This section provides requirements for keeping a human “captain of the ship” with clear lines of responsibility, escalation, and ethical stewardship.

| Focus area | Purpose |
| --- | --- |
| **Kill‑switch & override mechanisms** | Provide immediate shutdown or rollback paths for runaway behavior. |
| **Human‑in‑the‑loop decision checkpoints** | Require approvals when stakes surpass predefined risk thresholds. |
| **Chain of responsibility & auditability** | Log operator actions and model decisions for postmortem reviews. |

---

## 14. Explainability, Interpretability & Transparency
This section provides requirements for making model reasoning and limitations legible to developers, auditors, and end‑users—building trust and diagnosability.

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
