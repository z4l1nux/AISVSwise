# OWASP AISVS – AI Security Verification Standard
### Core Category List (v3)

## 1. Model Input Validation and Data Ingestion Security
Protect AI systems from malicious, adversarial, or malformed input.

- Prompt injection prevention
- Adversarial input resistance
- Format and length validation
- Data poisoning detection
- Pre-deployment data vetting and classification

## 2. Model Behavior, Output Control, and Safety Assurance
Ensure model outputs are safe, reliable, and aligned with intended behavior.

- Output format enforcement
- Hallucination detection and mitigation
- Output safety filters and allowlists
- Sensitive data leakage prevention
- Autonomy bounding mechanisms

## 3. Training Data Governance and Bias Management
Secure and govern training data with attention to ethics, provenance, and user rights.

- Dataset provenance and licensing validation
- Bias detection and correction
- Representation completeness and fairness
- Fine-tuning data integrity
- User data deletion and consent enforcement post-training

## 4. Model Lifecycle Management and Change Control
Secure the full lifecycle of models from development through retirement.

- Model versioning and signing
- Secure patching and rollback mechanisms
- Controlled fine-tuning and retraining workflows
- Formal decommissioning process
- Change auditing and approval workflows

## 5. Infrastructure, Configuration, and Deployment Security
Harden infrastructure and secure configurations of AI runtime environments.

- Container and serverless runtime isolation
- Secure deployment pipelines
- Exposure surface minimization
- Configuration protection and validation
- Secrets management and environment hardening

## 6. Access Control and Identity for AI Components and Users
Enforce strict, context-aware access control for all AI system components and outputs.

- User- and role-based access enforcement
- Authorization-aware output filtering
- Tenant and session isolation
- API key and token protection
- Agent and tool permission scoping

## 7. Monitoring, Logging, and Anomaly Detection
Enable visibility and response capabilities across the AI system.

- Prompt and output logging
- Abuse and jailbreak detection
- Hallucination drift detection
- Performance and behavior telemetry
- Alerting and SIEM integration

## 8. Memory, Embeddings, and Vector Database Security
Secure persistent AI memory, embeddings, and retrieval-augmented components.

- Embedding sanitization and validation
- Access controls on memory and RAG indices
- Memory expiry, revocation, and deletion
- Prevent embedding inversion or leakage
- Scope enforcement for user-specific memory

## 9. AI Application Layer and Autonomous Orchestration Security
Secure the code-level orchestration of tools, agents, and autonomous behaviors.

- Agent task planning and reentrancy control
- Tool plugin sandboxing
- Autonomous loop bounding
- Protocol-level misuse protection
- Multi-agent swarm risk reduction

## 10. Privacy Protection and Personal Data Management
Ensure ethical and lawful handling of personal data across the AI pipeline.

- Anonymization and data minimization
- Right to be forgotten and deletion enforcement
- Differential privacy
- Purpose limitation and scope creep protection
- Consent management and documentation

## 11. Supply Chain Security for Models, Frameworks, and Data
Secure all third-party components in the AI pipeline.

- Pretrained model vetting and provenance
- Framework/library CVE scanning
- Dependency pinning and verification
- Licensing compliance
- Trusted source enforcement

## 12. Adversarial Robustness and Attack Resistance
Protect against targeted attacks on models and learning systems.

- Adversarial example hardening
- Membership inference mitigation
- Model inversion resistance
- Model extraction defense
- Poisoned data detection

## 13. Human Oversight, Accountability, and Governance
Maintain meaningful human control and clearly defined responsibilities.

- Kill switch and override mechanisms
- Human-in-the-loop decision checkpoints
- Operational governance documentation
- Chain of responsibility and auditability

## 14. Explainability, Interpretability, and Transparency
Support understanding, traceability, and justified model behavior.

- Explainable AI techniques (e.g., SHAP, LIME)
- Model cards and usage disclosures
- Uncertainty quantification
- User-facing transparency reports

## 15. Compliance, Ethics, and Regulatory Alignment
Align AI systems with legal frameworks and responsible innovation norms.

- GDPR, EU AI Act, and sectoral compliance
- Risk classification and documentation
- AI system registration and auditing
- Policy templates and deployment guidance
- Responsible innovation reviews and governance boards

## Appendix A. AI System Attribute Glossary *(Planned)*
Establish consistent language for describing AI system properties.