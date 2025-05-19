# OWASP Artificial Intelligence Security Verification Standard (AISVS)
### This Category list is intended to help the AISVS team plan the structure of the document. It will be deleted before the standard is released.

### Next steps for reviewers

1. **Overlap** – Where can we consolidate?  
2. **Scope accuracy** – Does each category cover the right threat surfaces?  
3. **Clarity & granularity** – Are the descriptions and bullets detailed enough to drive concrete requirements?  
4. **Documentation and GRC** - Are there any documentation, process or GRC subjects than can be moved to [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x91-Appendix-C_Governance_and_Documentation.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x91-Appendix-C_Governance_and_Documentation.md)
5. **Testability** - Are these categories testable? We want to make sure we have categories and sub-categories that are strictly testable by a seecurity tester or code reviewer.

---

## 1. Training Data Governance & Bias Management

This section provides requirements to ensure training data is ethical, secure, and compliant by managing its provenance, quality, and bias during data collection and preparation for model training. And intial version of this section has been built to demonstrate the structure of the requirements for discussion here [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C1-Training-Data-Governance.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C1-Training-Data-Governance.md)

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- |
| **Training Data Provenance** | Track and audit origins of training datasets to ensure traceability and detect unauthorized or unverified sources. This includes data sources being documented and their origins can be traced, that data acquisition processes include verification of source legitimacy, and cryptographic validation of data source integrity. | ML04.001 Data Poisoning |
| **Bias Detection & Correction** | Identify and mitigate demographic or distributional biases in training data to promote equitable model outcomes. This includes bias assessment on training datasets, documented mitigation strategies for identified biases, and tracking of bias metrics across model versions. | ML07.001 Bias Exploitation |
| **Representation Completeness & Fairness** | Ensure training data includes balanced coverage of under-represented groups and edge cases through targeted collection or augmentation to enhance model robustness. This includes analysis of demographic distribution in training data, procedures for augmenting underrepresented classes, and edge case testing against fairness criteria. | ML07.001 Bias Exploitation |
| **Pre-Training Data Poisoning Detection & Mitigation** | Detect and filter malicious or corrupted data in training datasets using anomaly detection or statistical analysis to prevent model corruption. This includes basic data validation checks before training, statistical outlier detection in training data, and advanced poisoning detection techniques implementation. | ML04.001 Data Poisoning |
| **Training Data Integrity & Labeling** | Safeguard training datasets and labels from tampering or poisoning using cryptographic integrity, secure annotation pipelines and other methods. This includes data integrity checks, secure annotation workflows with access controls, and cryptographic validation of data and label integrity. | ML04.001 Data Poisoning |
| **Training Data Quality Assurance** | Validate training data for accuracy, completeness, and consistency to ensure reliable model training. This includes basic data quality checks (missing values, formats), consistency and distribution checks, and formal data quality metrics monitored for drift. | ML04.003 Data Manipulation |
| **User Data Deletion & Consent Enforcement** | Implement mechanisms to honor user deletion requests and consent withdrawals in training datasets and backups, compliant with privacy law. This includes procedures for handling deletion requests, audit trails of deletion requests and actions, and deletion across all systems including backups. | ML08.001 Data Leakage |
| **Model Metadata Integrity** | Ensure accurate documentation of model characteristics, training parameters, and dataset information. This includes metadata  captured for all models, tamper-resistant storage of metadata, and cryptographic signing of metadata. | ML01.002 Model Tampering |

---

## 2. User Input Validation

This section outlines defenses against user input attacks, ensuring all runtime inputs (e.g., interactive prompts, API requests, or streaming feeds) are well-formed, policy-compliant, and free from malicious or adversarial content, such as prompt injection. This section focuses solely on securing user inputs during model inference.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- | 
| **Prompt-Injection Defense** | Detect & block attempts to override instructions or jailbreak guardrails. This includes input screening for known prompt injection patterns, detection and blocking of instruction override attempts, and adaptive defenses against novel prompt injection techniques. Take into consideration risks if multi-modal inputs are used. | ML05.002 Input Manipulation |
| **Adversarial-Example Resistance** | Detect & block perturbed inputs designed to mislead model during inference. This includes basic input sanitization to prevent obvious manipulations, detection mechanisms for known adversarial patterns, and robust defenses against sophisticated adversarial examples. | ML05.001 Model Evasion |
| **Schema, Type & Length Validation** | Enforce strict syntactic, semantic, & size constraints on user inputs. This includes input validation against defined schemas, type checking and length constraints enforcement, and semantic validation of complex inputs for each used modality and type of data. | ML05.002 Input Manipulation |
| **Content & Policy Screening** | Apply filters to ensure compliance with safety policies. This includes content screening for prohibited material, policy enforcement based on context and user, and comprehensive coverage of content policies with regular updates. | ML05.003 Prompt Injection |

---

## 3. Model Lifecycle Management & Change Control

This section provides requirements to manage model development, fine-tuning, and maintenance securely, ensuring all changes are versioned, traceable, and reversible.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- |
| **Model versioning & transparency** | Track model releases with cryptographic signing, dependency graphs, and documentation to ensure integrity and transparency. This includes unique versioning for all model releases, cryptographic signing of model artifacts and complete dependency tracking with detailed documentation. | ML01.002 Model Tampering |
| **Secure patching & rollback** | Enable hotfixes and downgrades with validated rollback mechanisms to maintain security and functionality without vulnerabilities. This includes documented procedures for model updates, testing of rollback functionality and automated rollback triggers for detected issues. | ML01.004 Model Poisoning |
| **Controlled fine-tuning & retraining** | Restrict data ingestion, hyperparameter changes, and pipeline configurations to approved workflows. This includes restricted access to fine-tuning operations, validation of all data used in fine-tuning and audit trail of all parameter modifications. | ML01.004 Model Poisoning |
| **Change auditing** | Log and review all modifications, including prompt templates and system messages, to ensure traceability and accountability. This includes logging of all model changes, regular review of change logs and tamper-proof audit trails with integrity verification. | ML01.001 Model Replication |
| **Model testing & validation** | Conduct performance, robustness, and security tests before deployment to verify model reliability and compliance. This includes pre-deployment testing protocols, security-focused test cases, and comprehensive adversarial testing. | ML01.005 Model Manipulation |
| **Model change documentation** | Maintain changelogs and model cards to document updates, configurations, and dependencies for compliance and auditing. This includes documentation of all model changes, detailed model cards with usage guidelines, and documentation meets regulatory requirements. | ML01.002 Model Tampering |
| **Formal decommissioning process** | Define steps for archiving, sanitizing, and revoking retired models to prevent unauthorized reuse or data leakage. This includes documented decommissioning procedures, secure data sanitization processes, and complete dependency analysis and notification for interconnected systems. | ML08.001 Data Leakage |
| **Model Provenance Tracking** | Capturing, recording, and storing information about a model's origin, how it was created, and its history of modifications. This includes model origin documentation, cryptographic verification of provenance, and complete chain of custody for model artifacts. | ML01.002 Model Tampering |

---

## 4. Infrastructure, Configuration & Deployment Security
This section provides requirements to secure build, deployment, and runtime environments for AI systems, protecting against exploitation, misconfiguration, and lateral movement.

| Focus area | Purpose |
| --- | --- |
| **Container & serverless runtime isolation** | Enforce least privilege using suitable technologies such as Kubernetes namespaces, seccomp profiles, and eBPF rules to prevent privilege escalation. |
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
| **Output filtering & redaction** | After model inference or search, enforce least‑privilege by redacting, transforming, or refusing content so that all generated text, images, embeddings, and citations respect the caller's entitlements. |
| **Tenant & session isolation** | Segregate memory, embeddings, and cache per tenant; verify session context on every request to prevent cross‑customer data bleed in multi‑tenant SaaS. |
| **Agent & tool permission scoping** | Constrain autonomous agents, plugins, or tool calls to explicit capability sets (e.g., read‑only S3, no shell access), enforced by the ABAC layer.    

---

## 6. Supply Chain Security for Models, Frameworks & Data

This section provides requirements to ensure the integrity and security of all components used in AI systems, including pre-trained models, frameworks, libraries, and third-party datasets.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- |
| **Pretrained model vetting & provenance** | Verify the origin, integrity, and security posture of third-party models before integration. This includes basic validation of model sources, security assessment of pretrained models and comprehensive vetting including hidden behavior testing. | ML00.002 Transfer Learning |
| **Framework & library scanning** | Identify and remediate vulnerabilities in AI frameworks and supporting libraries. This includes dependency scanning in build pipelines, automated vulnerability monitoring and code analysis of critical dependencies. | ML00.004 Supply Chain Compromise |
| **Dependency pinning & verification** | Lock dependencies to specific verified versions and validate integrity. This includes version pinning for all dependencies, integrity verification of dependencies and reproducible builds with identical outputs. | ML00.004 Supply Chain Compromise |
| **Trusted source enforcement** | Ensure all AI components are obtained from authorized and verified sources. This includes approved sources for all components, enforcement of trusted source policies and cryptographic verification of component origins. | ML00.004 Supply Chain Compromise |
| **Third-party dataset risk assessment** | Evaluate security, bias, and quality risks of external datasets. This includes risk assessment for external datasets, vetting procedures aligned with internal standards and continuous monitoring of external data quality. | ML04.001 Data Poisoning |
| **Supply chain attack monitoring** | Detect and respond to compromises in the AI supply chain. This includes monitoring for published vulnerabilities, incident response plans for supply chain attacks and regular supply chain penetration testing. | ML00.004 Supply Chain Compromise |
| **SBOM (Software Bill of Materials) for model artifacts** | Maintain comprehensive inventory of all components in AI models. This includes SBOM creation for model artifacts, SBOM completeness and accuracy validation and automated SBOM generation and verification in CI/CD pipelines. | ML00.004 Supply Chain Compromise |

---

## 7. Model Behavior, Output Control & Safety Assurance
This section provides requirements to ensure model outputs are accurate, safe, and policy-compliant during runtime, to control and mitigate risks in generated content.

| Focus area | Purpose |
| --- | --- |
| **Output format enforcement** | Enforce constraints on response schemas, data types, or token limits to ensure structured and predictable outputs. |
| **Hallucination detection & mitigation** | Detect low-confidence or fabricated outputs and apply fallback strategies to maintain response reliability. |
| **Output safety & privacy filtering** | Block harmful content, PII, or confidential data in outputs using pre- and post-generation policy checks. |
| **Output & action limiting** | Restrict model-initiated actions and response rates through throttling or approval requirements to prevent abuse or overload, and ensure that information between modalities remains consistent and can't be manipulated. |
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
| **Scope enforcement for user‑specific memory** | Ensure one user's context cannot seed completions for another. |

---

## 9. Autonomous Orchestration & Agentic Action Security

This section provides requirements to secure the interactions and operations of autonomous and multi-agent AI systems, preventing unauthorized or harmful autonomous actions.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- | 
| **Agent task-planning & recursion budgets** | Throttle recursive plans and require human checkpoints for privileged actions by limiting the scope, depth, and resource consumption of autonomous planning. This includes implementation of task execution limits, monitoring of resource consumption and sophisticated circuit breakers for runaway processes. | ML09.001 Autonomous System Compromise |
| **Tool plugin sandboxing** | Isolate tool interactions to prevent unauthorized system access. This includes basic execution isolation for tools, privilege restriction for tool access and comprehensive sandboxing with resource limitations. | ML09.002 Tool Misuse |
| **Autonomous loop & cost bounding** | Prevent uncontrolled agent-to-agent or recursive operations. This includes loop detection mechanisms, cost monitoring and threshold enforcement and formal verification of agent interaction protocols. | ML09.003 Agent Loop Detection |
| **Protocol-level misuse protection** | Secure communication channels between agents and systems. This includes  validation of inter-agent communications, authentication of agent communications and cryptographic integrity of agent messages. | ML09.004 Agent Communication Hijacking |
| **Agent identity & tamper-evidence** | Ensure agent actions are attributable and modifications detected. This includes unique identification of agents, logging of agent actions with identity and cryptographic binding of actions to agent identity. | ML09.005 Agent Identity Spoofing |
| **Multi-agent swarm risk reduction** | Mitigate risks from interacting autonomous systems. This includes isolation between agent domains, coordination protocols with safety constraints and formal modeling of multi-agent interaction safety. | ML09.006 Swarm Manipulation |
| **User & Tool Authentication/Authorization** | Implement robust access controls for agent operations. This includes authentication for all agent-triggered actions, fine-grained authorization for tool access and continuous validation of agent privileges. | ML09.002 Tool Misuse |
| **Agent-to-agent communication security** | Secure information exchange between autonomous components. This includes encryption of agent communications, validation of message integrity and origin and formal verification of communication protocols. | ML09.004 Agent Communication Hijacking |
| **Intent verification & constraint enforcement** | Validate that agent actions align with user intent and system constraints. This includes basic constraint checking before actions, intent confirmation for high-impact actions and formal verification of constraint satisfaction. | ML09.007 Intent Manipulation |

---

## 10. Adversarial Robustness & Attack Resistance

This section provides requirements to enhance models' resilience against various adversarial attacks, including evasion, inference, and extraction attacks.

| Focus area | Purpose | MITRE ATLAS Mapping |
| --- | --- | --- | 
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
| **Alerting & SIEM integration** | Export enriched events for SOC correlation and incident response including integration with security monitoring systems and custom correlation of rules for AI-specific threats and scenarios (e.g., jailbreak, prompt injection, multi-modality). | ML06.003 Denial of Service |
| **Secure log storage** | To track and identify any potential security issues, investigations and audits with secure storage of logs, access controls on log data and tamper-evident log storage with cryptographic guarantees. | ML03.004 Data Access |
| **AI Incident Response Planning & Execution** | Prepare for and respond to AI-specific security incidents.  | ML06.004 System Compromise |

---

## 13. Human Oversight and Trust
This section provides requirements for keeping a human "captain of the ship" with clear lines of responsibility, escalation, and ethical stewardship, including explainability, interpretability, and transparency.

| Focus area | Purpose |
| --- | --- |
| **Kill‑switch & override mechanisms** | Provide immediate shutdown or rollback paths for runaway behavior. |
| **Human‑in‑the‑loop decision checkpoints** | Require approvals when stakes surpass predefined risk thresholds. |
| **Chain of responsibility & auditability** | Log operator actions and model decisions for postmortem reviews. |
| **Explainable‑AI techniques (SHAP, LIME, etc.)** | Surface feature importance, counter‑factuals, and local explanations. |
| **Model cards & usage disclosures** | Document intended use, performance metrics, and ethical considerations. |
| **Uncertainty quantification** | Propagate confidence scores or entropy measures in responses. |
| **User‑facing transparency reports** | Provide periodic disclosures on incidents, drift, and data usage. |
