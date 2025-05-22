# C3 Model Lifecycle Management & Change Control

## Control Objective

A secure AI program must treat every model artifact like production code: uniquely versioned, cryptographically signed, continuously tested, and fully traceable from cradle to grave. Weak change-control opens the door to model tampering, poisoned hot-fixes or silent regressions; conversely, strong provenance and rollback give teams confidence to patch quickly and—when necessary—revert instantly. Modern MLOps guidance stresses reproducible builds, signed audit logs and automated robustness tests as non-negotiable safeguards.

---

## C3.1 Model Versioning & Transparency

Rigorous versioning prevents “shadow” models, clarifies dependency graphs, and underpins downstream attestations. Best-practice toolchains now sign model weights and training metadata so verifiers can detect any bit-level drift.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.1.1** | **Verify that** every released model, tokenizer, and pre-processing asset receives a monotonically-incrementing semantic version (e.g., *major.minor.patch*). | 1 | D/V |
| **3.1.2** | **Verify that** model binaries and config files are **cryptographically signed**; build systems fail closed when the signature or hash deviates. | 1 | D/V |
| **3.1.3** | **Verify that** provenance manifests enumerate *all* upstream data, code, and container digests necessary for exact re-builds. | 2 | D |
| **3.1.4** | **Verify that** a dependency graph (weights → fine-tunes → apps) is automatically updated so security teams can locate consumers of a vulnerable release within 60 minutes. | 2 | V |
| **3.1.5** | **Verify that** public-facing model cards disclose license, training cut-off, safety evaluations and known limitations. | 3 | D/V |

---

## C3.2 Secure Patching & Rollback

Hot-fixes must arrive fast yet safely; equally, a broken patch should roll back without corrupting stateful stores or feature logs. MLOps playbooks recommend blue-green or canary deployments plus signed rollback bundles.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.2.1** | **Verify that** production endpoints support at least one *N-1* rollback slot and that switch-overs complete within the SLO (e.g., ≤ 5 min). | 1 | D |
| **3.2.2** | **Verify that** rollbacks restore *model weights, prompts, and feature-store schemas* atomically to preserve input parity. | 1 | D/V |
| **3.2.3** | **Verify that** each patch passes the full security test-suite (see C3.5) before traffic shifts beyond 5 %. | 2 | V |
| **3.2.4** | **Verify that** rollback artifacts are signed and retained for ≥ one year to support forensic analysis. | 2 | V |
| **3.2.5** | **Verify that** emergency fixes bypass normal CI-CD only through a documented “break-glass” process with dual approval. | 3 | D/V |

---

## C3.3 Controlled Fine-Tuning & Retraining

Fine-tuning introduces new data and weights—prime vectors for poisoning. Segregated pipelines, data validation, and hyperparameter escrow limit that risk.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.3.1** | **Verify that** fine-tune jobs run only in isolated build environments with no outbound internet by default. | 1 | D |
| **3.3.2** | **Verify that** input datasets pass data-quality, bias, and license scans before joining training shards. | 1 | D/V |
| **3.3.3** | **Verify that** hyperparameter files (learning-rate, epochs, RLHF rewards) are treated as config-as-code and peer-reviewed. | 2 | D |
| **3.3.4** | **Verify that** any external gradient or reward signal is authenticated to prevent *man-in-the-middle* poisoning.| 2 | D/V |
| **3.3.5** | **Verify that** successful fine-tunes auto-publish diff-reports summarising data lineage and metric deltas. | 3 | V |

---

## C3.4 Change Auditing

Tamper-proof audit logs establish accountability and enable rapid incident triage. Leading platforms now append-only hash-chain log records and export them to SIEM.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.4.1** | **Verify that** every model, prompt template, and system message change emits an **immutable** log entry with actor ID and diff. | 1 | V |
| **3.4.2** | **Verify that** logs are consolidated within 5 minutes into a centralized, write-once store (e.g., WORM bucket). | 1 | D/V |
| **3.4.3** | **Verify that** log integrity is enforced via chain-hashing or Merkle proofs and validated nightly. | 2 | V |
| **3.4.4** | **Verify that** privileged log viewers require MFA and least-privilege RBAC roles. | 2 | D |
| **3.4.5** | **Verify that** quarterly audits sample ≥ 10 % of changes for policy compliance and escalate discrepancies to governance boards. | 3 | V |

---

## C3.5 Model Testing & Validation

Before promotion, models must prove they still meet accuracy, latency, robustness, and safety benchmarks. Security-focused adversarial suites—FGSM, textual corruption, jailbreak prompts—are now standard.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.5.1** | **Verify that** unit tests cover data preprocessing, feature extraction, and post-processing determinism. | 1 | D |
| **3.5.2** | **Verify that** regression benchmarks run on hold-out and stress datasets and that key metrics (accuracy, latency) fall within defined ± tolerances. | 1 | D/V |
| **3.5.3** | **Verify that** adversarial robustness tests (white-box & black-box) achieve targets (e.g., < 5 % attack success). | 2 | V |
| **3.5.4** | **Verify that** safety and policy evals (e.g., Toxicity, Jailbreak rate) block promotion when risk > agreed threshold. | 2 | D/V |
| **3.5.5** | **Verify that** test results are archived with the corresponding model version and cryptographic signature. | 3 | V |

---

## C3.6 Documentation & Provenance

Complete changelogs and model cards satisfy auditors and downstream integrators, while cryptographic provenance proves “what ran where.”

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.6.1** | **Verify that** every release auto-generates a changelog detailing code commits, dataset deltas, and risk assessments. | 1 | D |
| **3.6.2** | **Verify that** provenance records capture training date, hardware, random seeds, and data digests and are sealed with a model-specific key. | 1 | D/V |
| **3.6.3** | **Verify that** external consumers can fetch provenance via an authenticated API or SBOM. | 2 | V |
| **3.6.4** | **Verify that** provenance chains link back to *source data* ownership artefacts to support GDPR/CCPA tracing. | 2 | D |
| **3.6.5** | **Verify that** any manual provenance edits create a superseding record—not an overwrite—preserving full history. | 3 | V |

---

## C3.7 Formal Decommissioning

Retired models may still contain sensitive data or power hidden features; structured retirement prevents zombie artefacts and legal exposure. Cloud providers recommend dependency discovery and secure wipe before sun-setting.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **3.7.1** | **Verify that** a retirement request triggers a dependency scan to identify downstream services and queues.| 1 | D |
| **3.7.2** | **Verify that** model binaries, datasets, and feature logs are securely erased or archived per retention policy. | 1 | D/V |
| **3.7.3** | **Verify that** revoked model signatures are published to a public CRL (certificate-revocation list) to block re-use. | 2 | V |
| **3.7.4** | **Verify that** decommission events update inventory dashboards and notify owners of dependent systems. | 2 | D |
| **3.7.5** | **Verify that** retired models undergo post-mortem reviews capturing incident learnings and security debt. | 3 | V |

---

## References

* [MLOps Principles](https://ml-ops.org/content/mlops-principles)
* [Securing AI/ML Ops – Cisco.com](https://sec.cloudapps.cisco.com/security/center/resources/SecuringAIMLOps)
* [Audit logs security: cryptographically signed tamper-proof logs](https://www.cossacklabs.com/blog/audit-logs-security/)
* [Machine Learning Model Versioning: Top Tools & Best Practices](https://lakefs.io/blog/model-versioning/)
* [AI Hygiene Starts with Models and Data Loaders – SEI Blog](https://insights.sei.cmu.edu/documents/6190/AI-Hygiene-Starts-with-Models-and-Data-Loaders_1G0KTRh.pdf)
* [How to handle versioning and rollback of a deployed ML model?](https://learn.microsoft.com/en-au/answers/questions/1845378/how-to-handle-versioning-and-rollback-of-a-deploye)
* [Reinforcement fine-tuning – OpenAI API](https://platform.openai.com/docs/guides/reinforcement-fine-tuning)
* [Auditing Machine Learning models: Governance, Data Security and …](https://www.linkedin.com/pulse/auditing-machine-learning-models-governance-data-security-negrete-yn81f)
* [Adversarial Training to Improve Model Robustness](https://medium.com/%40amit25173/adversarial-training-to-improve-model-robustness-5e285b516713)
* [What is AI adversarial robustness? – IBM Research](https://research.ibm.com/blog/securing-ai-workflows-with-adversarial-robustness)
* [Exploring Data Provenance: Ensuring Data Integrity and Authenticity](https://www.astera.com/type/blog/data-provenance/)
* [MITRE ATLAS™](https://atlas.mitre.org/)
* [AWS Prescriptive Guidance – Best practices for retiring applications …](https://docs.aws.amazon.com/pdfs/prescriptive-guidance/latest/migration-app-retirement-best-practices/migration-app-retirement-best-practices.pdf)
