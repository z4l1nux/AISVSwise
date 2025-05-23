# C1 Training Data Governance & Bias Management

## Control Objective

Training data must be sourced, handled, and maintained in a way that preserves provenance, security, quality, and fairness. Doing so fulfils legal duties and reduces risks of bias, poisoning, or privacy breaches throughout the AI lifecycle.

---

## C1.1 Training Data Provenance

Maintain a verifiable inventory of all datasets, accept only trusted sources, and log every change for auditability.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.1.1** | **Verify that** an up-to-date inventory of every training-data source (origin, licence, collection method) is maintained. | 1 | D/V |
| **1.1.2** | **Verify that** only datasets vetted for quality and licence compliance are allowed, reducing poisoning risk. | 1 | D/V |
| **1.1.3** | **Verify that** data minimisation is enforced so unnecessary or sensitive attributes are excluded. | 1 | D/V |
| **1.1.4** | **Verify that** all dataset changes are subject to a logged approval workflow. | 2 | D/V |
| **1.1.5** | **Verify that** labelling/annotation quality is ensured via reviewer cross-checks or consensus. | 2 | D/V |

---

## C1.2 Training Data Security & Integrity

Restrict access, encrypt at rest and in transit, and validate integrity to block tampering or theft.)

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.2.1** | **Verify that** role-based access controls protect storage and pipelines. | 1 | D/V |
| **1.2.2** | **Verify that** datasets are encrypted in transit and, for sensitive data, at rest. | 2 | D/V |
| **1.2.3** | **Verify that** checksums or signatures and anomaly detection guard against poisoning. | 2 | D/V |
| **1.2.4** | **Verify that** dataset versions are tracked to enable rollback. | 3 | D/V |
| **1.2.5** | **Verify that** obsolete data is securely purged to shrink the attack surface. | 2 | D/V |

---

## C1.3 Representation Completeness & Fairness

Detect demographic skews and apply mitigation so the model’s error rates are equitable across groups.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.3.1** | **Verify that** datasets are profiled for representational imbalance across protected attributes. | 1 | D/V |
| **1.3.2** | **Verify that** biases are mitigated via re-balancing, additional data, or re-weighting. | 2 | D/V |
| **1.3.3** | **Verify that** post-training fairness metrics are evaluated and documented. | 2 | D/V |
| **1.3.4** | **Verify that** a lifecycle bias-management policy assigns owners and review cadence. | 3 | D/V |

---

## C1.4 Training Data Integrity & Labeling

Cryptographically protect labels and require dual review for critical classes.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.4.1** | **Verify that** hashes or digital signatures cover every data/label artefact. | 1 | D/V |
| **1.4.2** | **Verify that** labeling interfaces use access controlled and tamper-evident logs. | 2 | D/V |
| **1.4.3** | **Verify that** safety-critical labels receive mandatory dual review. | 2 | D/V |
| **1.4.4** | **Verify that** sensitive labels are encrypted at rest and in transit. | 2 | D/V |
| **1.4.5** | **Verify that** schemas are version-controlled and peer-reviewed. | 2 | D/V |
| **1.4.6** | **Verify that** outsourced workflows prevent data leakage. | 2 | D |

---

## C1.5 Training Data Quality Assurance

Combine automated validation, manual spot-checks, and logged remediation to guarantee dataset reliability.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.5.1** | **Verify that** automated tests catch format errors, nulls, and label skews on every ingest. | 1 | D |
| **1.5.2** | **Verify that** failed datasets are quarantined with audit trails. | 1 | D/V |
| **1.5.3** | **Verify that** manual spot-checks cover ≥1 % or 1 k samples. | 2 | V |
| **1.5.4** | **Verify that** remediation steps are appended to provenance records. | 2 | D/V |
| **1.5.5** | **Verify that** quality gates block sub-par datasets unless exceptions are approved. | 2 | D/V |

---

## C1.6 Data Poisoning Detection

Apply statistical anomaly detection and quarantine workflows to stop adversarial insertions.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.6.1** | **Verify that** anomaly detection runs at ingest and on updates. | 2 | D/V |
| **1.6.2** | **Verify that** flagged samples trigger manual review before training. | 2 | D/V |
| **1.6.3** | **Verify that** results feed the model’s security dossier. | 2 | V |
| **1.6.4** | **Verify that** detection logic is refreshed with new threat intel. | 3 | D/V |
| **1.6.5** | **Verify that** online-learning pipelines monitor distribution drift. | 3 | D/V |

---

## C1.7 User Data Deletion & Consent Enforcement

*Summary:* Honor deletion and consent-withdrawal requests across datasets, backups, and derived artefacts.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.7.1** | **Verify that** deletion workflows purge primary and derived data and assess model impact. | 1 | D/V |
| **1.7.2** | **Verify that** consent is checked before each training run. | 2 | D |
| **1.7.3** | **Verify that** workflows are tested annually and logged. | 2 | V |

---

## C1.8 Model Data Labeling

Protect sensitive labels, sign them for integrity, and track annotator agreement to sustain trust.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.8.1** | **Verify that** personal data in labels is redacted or pseudonymised. | 1 | D |
| **1.8.2** | **Verify that** labels carry HMACs or signatures. | 2 | D |
| **1.8.3** | **Verify that** labeling guides are version-controlled and annotators trained. | 2 | V |
| **1.8.4** | **Verify that** inter-annotator agreement is monitored; discrepancies resolved. | 2 | V |

---

## C1.9 Supply Chain Security

Vet external data providers and verify integrity over authenticated, encrypted channels.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.9.1** | **Verify that** third-party data suppliers undergo security due diligence. | 2 | D/V |
| **1.9.2** | **Verify that** external transfers use TLS/auth and integrity checks. | 1 | D |
| **1.9.3** | **Verify that** high-risk sources receive sandboxed secondary validation. | 2 | D/V |

---

## C1.10 Adversarial Sample Detection

Scan, isolate, and defend against adversarial examples to keep models robust.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.10.1** | **Verify that** automated scanners detect known adversarial perturbations. | 2 | D |
| **1.10.2** | **Verify that** flagged samples are isolated and manually analysed. | 2 | D/V |
| **1.10.3** | **Verify that** defences such as adversarial training are implemented. | 3 | D |

---

## References

* [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
* [EU AI Act – Article 10: Data & Data Governance](https://artificialintelligenceact.eu/article/10/)
* [MITRE ATLAS: Adversary Tactics for AI](https://atlas.mitre.org/)
* [Survey of ML Bias Mitigation Techniques – MDPI](https://www.mdpi.com/2673-6470/4/1/1)
* [Data Provenance & Lineage Best Practices – Nightfall AI](https://www.nightfall.ai/ai-security-101/data-provenance-and-lineage)
* [Data Labeling Quality Standards – LabelYourData](https://labelyourdata.com/articles/data-labeling-quality-and-how-to-measure-it)
* [Training Data Poisoning Guide – Lakera.ai](https://www.lakera.ai/blog/training-data-poisoning)
* [CISA Advisory: Securing Data for AI Systems](https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-142a)
* [ISO/IEC 23053: AI Management Systems Framework](https://www.iso.org/sectors/it-technologies/ai)
* [IBM: What is AI Governance?](https://www.ibm.com/think/topics/ai-governance)
* [Google AI Principles](https://ai.google/principles/)
* [GDPR & AI Training Data – DataProtectionReport](https://www.dataprotectionreport.com/2024/08/recent-regulatory-developments-in-training-artificial-intelligence-ai-models-under-the-gdpr/)
* [Supply-Chain Security for AI Data – AppSOC](https://www.appsoc.com/blog/ai-is-the-new-frontier-of-supply-chain-security)
* [OpenAI Privacy Center – Data Deletion Controls](https://privacy.openai.com/policies?modal=take-control)
* [Adversarial ML Dataset – Kaggle](https://www.kaggle.com/datasets/cnrieiit/adversarial-machine-learning-dataset)
