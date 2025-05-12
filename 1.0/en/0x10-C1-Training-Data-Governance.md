# C1 Training Data Governance & Bias Management

## Control Objective

This section provides requirements to ensure training data is ethical, secure, and compliant by managing its provenance, quality, and bias during data collection and preparation for model training.

## C1.1 Training Data Provenance

Verify the origins of training datasets to ensure traceability and detect unauthorized or unverified sources.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.1.1** | Verify that a machine-readable provenance record (source, license, acquisition date, detailed data transformations including pre-processing, cleaning, augmentation, and sub-setting steps) is maintained for every dataset. | 1 | d |
| **C1.1.2** | Verify that the build pipeline blocks ingestion of any dataset whose provenance record is incomplete or unverifiable. | 2 | d/v |
| **C1.1.3** | Verify that provenance records are cryptographically signed to make tampering evident. | 2 | d |
| **C1.1.4** | Verify that a version control system is implemented for all training datasets and their corresponding provenance records. | 2 | d |

---

## C1.2 Bias Detection & Correction

Verify and mitigate demographic or distributional biases in training data to promote equitable model outcomes.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.2.1** | Verify that statistically valid bias audits are run across sensitive attributes (defined based on legal requirements, ethical considerations, and application context) before model training. | 1 | d/v |
| **C1.2.2** | Verify that documented mitigation strategies (re-weighting, resampling, debiasing transforms) are applied where significant bias is detected. | 2 | d |
| **C1.2.3** | Verify that post-mitigation bias metrics meet predefined fairness thresholds, with documented justification for the chosen metrics and threshold values, before promoting the model. | 2 | v |

---

## C1.3 Representation Completeness & Fairness

Verify that training data includes balanced coverage of under-represented groups and edge cases through targeted collection or augmentation to enhance model robustness.

| # | Description | Level | Role |
|:--------:|-----------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.3.1** | Verify that gap-analysis reports are produced quantifying coverage of protected and edge-case groups. | 1 | d/v |
| **C1.3.2** | Verify that targeted data collection or ethically validated synthetic data augmentation techniques are used to close gaps exceeding predefined thresholds. | 2 | d |
| **C1.3.3** | Verify that coverage metrics are version-controlled and audited alongside each model release. | 2 | v |

---

## C1.4 Training Data Integrity & Labeling

Verify that training datasets and labels are safeguarded from tampering or poisoning to maintain data quality.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.4.1** | Verify that all training data and labels are stored with cryptographic checksums and verified at every pipeline stage. | 1 | d |
| **C1.4.2** | Verify that role-based access control is enforced in labeling interfaces, recording annotator identity, timestamp, and tool version. | 2 | d |
| **C1.4.3** | Verify that dual review or an equivalent robust verification process is required for critical labels (e.g., safety-related, fairness-impactful, legally significant), as defined by a risk assessment, before acceptance. | 2 | v |
| **C1.4.4** | Verify that training data and labels are stored in secure, access-controlled repositories with encryption at rest, and that data is encrypted during transit. | 1 | d |

---

## C1.5 Training Data Quality Assurance

Verify that training data is validated for accuracy, completeness, and consistency to ensure reliable model training.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.5.1** | Verify that automated validation tests for format errors, missing values, and out-of-range features are run on every data pull. | 1 | d |
| **C1.5.2** | Verify that manual spot-checks are performed on at least 1% of each dataset or 1,000 samples, whichever is smaller. | 2 | v |
| **C1.5.3** | Verify that datasets failing documented and predefined quality gates are quarantined and remediated before use in production training runs. | 2 | d/v |
| **C1.5.4** | Verify that all remediation actions taken on datasets failing quality gates are documented, with their provenance records updated accordingly. | 2 | d/v |

---

## C1.6 Data Poisoning Detection

Verify that malicious or corrupted data in training datasets is detected and filtered using anomaly detection or statistical analysis.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.6.1** | Verify that anomaly-detection models or statistical analysis tools are deployed and maintained to scan training data (both at ingestion and, where applicable, in real-time for dynamic sources) for distributional shifts, label irregularities, or known adversarial patterns. | 2 | d |
| **C1.6.2** | Verify that suspected poisoned samples are automatically quarantined and trigger a defined human review process to confirm, remediate, or definitively exclude the samples. | 2 | d/v |
| **C1.6.3** | Verify that poisoning-detection results are logged in the model's security dossier. | 2 | v |
| **C1.6.4** | Verify that anomaly-detection models or statistical analysis tools scan for distributional shifts, label irregularities, or adversarial patterns in real-time. | 2 | d/v |
| **C1.6.5** | Verify that data poisoning detection mechanisms are periodically reviewed and updated based on evolving threat intelligence and known attack vectors. | 3 | d |
---

## C1.7 User Data Deletion & Consent Enforcement

Verify that mechanisms are implemented to honor user deletion requests and consent withdrawals in training datasets and backups, compliant with privacy law.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.7.1** | Verify that a verifiable workflow exists to remove user-provided data from active datasets, backups, and identifiable derived artifacts (e.g., feature sets), and assess impact on trained models, within mandated time frames. | 1 | d |
| **C1.7.2** | Verify that consent status is reconciled at each training run, excluding records lacking current consent. | 2 | d |
| **C1.7.3** | Verify that deletion and consent workflows are logged and annually tested for completeness. | 2 | v |

---

## C1.8 Model Data Labeling

Verify that secure labeling practices prevent data poisoning, protect sensitive information, and maintain accountability.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.8.1** | Verify that labels containing personal data or other sensitive information, as identified through a privacy impact assessment, are redacted, pseudonymized, or otherwise de-identified before long-term storage or wider access, unless strictly necessary and legally permissible for the model's purpose. | 1 | d |
| **C1.8.2** | Verify that integrity signatures are embedded in labels to detect post-label tampering. | 2 | d |
| **C1.8.3** | Verify that labeling guidelines are versioned, reviewed for potential bias and clarity, and that documented training is provided to annotators on these guidelines, including awareness of potential cognitive biases and fairness considerations relevant to the labeling task, to ensure consistency and quality. | 2 | v |
| **C1.8.4** | Verify that a quality control process for labels is implemented, such as regular inter-annotator agreement checks or review of a sample of labels by experienced annotators, to monitor and maintain label accuracy and consistency. | 2 | v |

## C1.9 Supply Chain Security

Verify that training data supply chains are secured against unauthorized manipulation or tampering.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.9.1** | Verify that third-party data providers are assessed for security practices before integration into training pipelines. | 2 | d/v |
| **C1.9.2** | Verify that data transfer from external sources uses authenticated and encrypted channels with integrity verification. | 1 | d |
| **C1.9.3** | Verify that a secondary validation process exists for data obtained from high-risk or untrusted sources. | 2 | d/v |

## C1.10 Adversarial Sample Detection

Verify that systems can identify and mitigate adversarial examples in training data.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **C1.10.1** | Verify that automated scanning tools are deployed to detect known patterns of adversarial examples in training datasets. | 2 | d |
| **C1.10.2** | Verify that detected adversarial samples are isolated, documented, and submitted for security analysis. | 2 | d/v |
| **C1.10.3** | Verify that the training pipeline includes mechanisms to reduce model vulnerability to identified adversarial patterns. | 3 | d |

## References

For more information, see also:

* [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
* [MITRE ATLAS (Adversarial Threat Landscape for AI Systems)](https://atlas.mitre.org/)
* [EU AI Act: Article 10: Data and Data Governance](https://artificialintelligenceact.eu/article/10/)
* [Lamar Institute: Ethical Use of Training Data](https://lamarr-institute.org/blog/ai-training-data-bias/)
* [IBM: What is AI governance?](https://www.ibm.com/think/topics/ai-governance)
