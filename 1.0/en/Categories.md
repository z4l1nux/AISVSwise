# OWASP Artificial Intelligence Security Verification Standard (AISVS)
### This Category list is intended to help the AISVS team plan the structure of the document. It will be deleted before the standard is released.

### Next steps for reviewers

1. **Documentation and GRC** - Are there any documentation, process or GRC subjects than can be moved to [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x91-Appendix-C_Governance_and_Documentation.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x91-Appendix-C_Governance_and_Documentation.md)
5. **Testability** - Are these categories testable? We want to make sure we have categories and sub-categories that are strictly testable by a seecurity tester or code reviewer.

---

## 1. Training Data Governance & Bias Management

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C1-Training-Data-Governance.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C1-Training-Data-Governance.md).

---

## 2. User Input Validation

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C02-User-Input-Validation.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C02-User-Input-Validation.md).


---

## 3. Model Lifecycle Management & Change Control

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C03-Model-Lifecycle-Management.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C03-Model-Lifecycle-Management.md).

---

## 4. Infrastructure, Configuration & Deployment Security

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C04-Infrastructure.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C04-Infrastructure.md).

---

## 5. Access Control & Identity for AI Components & Users

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C05-Access-Control-and-Identity.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C05-Access-Control-and-Identity.md).

---

## 6. Supply Chain Security for Models, Frameworks & Data

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C06-Supply-Chain.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C06-Supply-Chain.md).

---

## 7. Model Behavior, Output Control & Safety Assurance

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C07-Model-Behavior.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C07-Model-Behavior.md).

---

## 8. Memory, Embeddings & Vector Database Security

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C08-Memory-Embeddings-and-Vector-Database.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C08-Memory-Embeddings-and-Vector-Database.md).

---

## 9. Autonomous Orchestration & Agentic Action Security

This section is underway, please see [https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C09-Orchestration-and-Agentic-Action.md](https://github.com/OWASP/AISVS/blob/main/1.0/en/0x10-C09-Orchestration-and-Agentic-Action.md).

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
| **Consent management** | Track lawful bases, opt‑in status, and data‑subject agreements. |
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
| **AI Incident Response Planning & Execution** | Prepare for and respond to AI-specific security incidents. | ML06.004 System Compromise |

---

## 13. Human Oversight and Trust
This section provides requirements for keeping a human "captain of the ship" with clear lines of responsibility, escalation, and ethical stewardship, including explainability, interpretability, and transparency.

| Focus area | Purpose |
| --- | --- |
| **Kill‑switch & override mechanisms** | Provide immediate shutdown or rollback paths for runaway behavior. |
| **Human‑in‑the‑loop decision checkpoints** | Require approvals when stakes surpass predefined risk thresholds. |
| **Chain of responsibility & auditability** | Log operator actions and model decisions for postmortem reviews. |
| **Explainable‑AI techniques (SHAP, LIME, etc.)** | Surface feature importance, counter‑factuals, and local explanations. |
| **Model cards & usage disclosures** | Maintain model cards for intended use, performance metrics, and ethical considerations. |
| **Uncertainty quantification** | Propagate confidence scores or entropy measures in responses. |
| **User‑facing transparency reports** | Provide periodic disclosures on incidents, drift, and data usage. |
