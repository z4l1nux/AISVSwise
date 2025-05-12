# C1 Training Data Governance & Bias Management

## Control Objective

This section provides requirements to ensure training data is ethical, secure, and compliant by managing its provenance, quality, and bias during data collection and preparation for model training.

## C1.1 Training Data Provenance

Track and audit origins of training datasets to ensure traceability and detect unauthorized or unverified sources.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.1.1** | Maintain a machine-readable provenance record (source, license, acquisition date, detailed data transformations including pre-processing, cleaning, augmentation, and sub-setting steps) for every dataset. | 1 | d |
| **C1.1.2** | Block ingestion of any dataset whose provenance record is incomplete or unverifiable in the build pipeline. | 2 | d/v |
| **C1.1.3** | Cryptographically sign provenance records to make tampering evident. | 2 | d |
| **C1.1.4** | Implement a version control system for all training datasets and their corresponding provenance records. | 2 | d |

---

## C1.2 Bias Detection & Correction

Identify and mitigate demographic or distributional biases in training data to promote equitable model outcomes.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.2.1** | Run statistically valid bias audits across sensitive attributes (defined based on legal requirements, ethical considerations, and application context) before model training. | 1 | d/v |
| **C1.2.2** | Apply documented mitigation strategies (re-weighting, resampling, debiasing transforms) where significant bias is detected. | 2 | d |
| **C1.2.3** | Ensure post-mitigation bias metrics meet predefined fairness thresholds, with documented justification for the chosen metrics and threshold values, before promoting the model. | 2 | v |

---

## C1.3 Representation Completeness & Fairness

Ensure training data includes balanced coverage of under-represented groups and edge cases through targeted collection or augmentation to enhance model robustness.

| # | Description | Level | Role |
|:--------:|-----------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.3.1** | Produce gap-analysis reports quantifying coverage of protected and edge-case groups. | 1 | d/v |
| **C1.3.2** | Use targeted data collection or ethically validated synthetic data augmentation techniques to close gaps exceeding predefined thresholds. | 2 | d |
| **C1.3.3** | Version-control coverage metrics and audit them alongside each model release. | 2 | v |

---

## C1.4 Training Data Integrity & Labeling

Safeguard training datasets and labels from tampering or poisoning to maintain data quality.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.4.1** | Store all training data and labels with cryptographic checksums and verify them at every pipeline stage. | 1 | d |
| **C1.4.2** | Enforce role-based access control in labeling interfaces, recording annotator identity, timestamp, and tool version. | 2 | d |
| **C1.4.3** | Require dual review or an equivalent robust verification process for critical labels (e.g., safety-related, fairness-impactful, legally significant), as defined by a risk assessment, before acceptance. | 2 | v |
| **C1.4.4** | Store training data and labels in secure, access-controlled repositories with encryption at rest, and ensure data is encrypted during transit. | 1 | d |

---

## C1.5 Training Data Quality Assurance

Validate training data for accuracy, completeness, and consistency to ensure reliable model training.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.5.1** | Run automated validation tests for format errors, missing values, and out-of-range features on every data pull. | 1 | d |
| **C1.5.2** | Perform manual spot-checks on at least 1% of each dataset or 1,000 samples, whichever is smaller. | 2 | v |
| **C1.5.3** | Quarantine and remediate datasets failing documented and predefined quality gates before use in production training runs. | 2 | d/v |
| **C1.5.4** | Document all remediation actions taken on datasets failing quality gates, updating their provenance records accordingly. | 2 | d/v |

---

## C1.6 Data Poisoning Detection

Detect and filter malicious or corrupted data in training datasets using anomaly detection or statistical analysis.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.6.1** | Deploy and maintain anomaly-detection models or statistical analysis tools to scan training data (both at ingestion and, where applicable, in real-time for dynamic sources) for distributional shifts, label irregularities, or known adversarial patterns. | 2 | d |
| **C1.6.2** | Automatically quarantine suspected poisoned samples and trigger a defined human review process to confirm, remediate, or definitively exclude the samples. | 2 | d/v |
| **C1.6.3** | Log poisoning-detection results in the model’s security dossier. | 2 | v |
| **C1.6.4** | Utilize anomaly-detection models or statistical analysis tools to scan for distributional shifts, label irregularities, or adversarial patterns in real-time. | 2 | d/v |
| **C1.6.5** | Periodically review and update data poisoning detection mechanisms based on evolving threat intelligence and known attack vectors. | 3 | d |
---

## C1.7 User Data Deletion & Consent Enforcement

Implement mechanisms to honor user deletion requests and consent withdrawals in training datasets and backups, compliant with privacy law.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.7.1** | Provide a verifiable workflow to remove user-provided data from active datasets, backups, and identifiable derived artifacts (e.g., feature sets), and assess impact on trained models, within mandated time frames. | 1 | d |
| **C1.7.2** | Reconcile consent status at each training run, excluding records lacking current consent. | 2 | d |
| **C1.7.3** | Log and annually test deletion and consent workflows for completeness. | 2 | v |

---

## C1.8 Model Data Labeling

Prevent data poisoning, protect sensitive information, and maintain accountability through secure labeling practices.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.8.1** | Redact, pseudonymize, or otherwise de-identify labels containing personal data or other sensitive information, as identified through a privacy impact assessment, before long-term storage or wider access, unless strictly necessary and legally permissible for the model's purpose. | 1 | d |
| **C1.8.2** | Embed integrity signatures in labels to detect post-label tampering. | 2 | d |
| **C1.8.3** | Version labeling guidelines, which should be reviewed for potential bias and clarity. Provide documented training to annotators on these guidelines, including awareness of potential cognitive biases and fairness considerations relevant to the labeling task, to ensure consistency and quality. | 2 | v |
| **C1.8.4** | Implement a quality control process for labels, such as regular inter-annotator agreement checks or review of a sample of labels by experienced annotators, to monitor and maintain label accuracy and consistency. | 2 | v |

## References

For more information, see also:

* [EU AI Act: Article 10: Data and Data Governance](https://artificialintelligenceact.eu/article/10/)
* [Lamar Institute: Ethical Use of Training Data](https://lamarr-institute.org/blog/ai-training-data-bias/)
* [IBM: What is AI governance?](https://www.ibm.com/think/topics/ai-governance)
