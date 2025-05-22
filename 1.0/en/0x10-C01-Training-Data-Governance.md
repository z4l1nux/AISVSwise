# C1 Training Data Governance & Bias Management

## Control Objective

This chapter provides requirements to ensure training data is ethical, secure, and compliant by managing its provenance, quality, and bias during data collection and preparation for model training.

## C1.1 Training Data Provenance

This section focuses on inventory and control of training data sources, ensuring data is necessary and originates from trusted, well-documented sources.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.1.1** | **Verify that** an up-to-date inventory of all training data sources is maintained, including details on provenance (origin, collection methods) and usage rights for each dataset. This ensures traceability and accountability for the data used in model development. | 1 | D/V |
| **1.1.2** | **Verify that** only data from trusted and authorized sources is used for training. Any third-party or open-source datasets should be vetted for quality and appropriateness before inclusion to reduce the risk of data poisoning via malicious or low-quality data.  | 1 | D/V |
| **1.1.3** | **Verify that** training datasets exclude any data that is not necessary for the intended AI task, especially sensitive personal information, following the principle of data minimization. Unnecessary or unrelated data should be omitted to reduce risk exposure and avoid introducing spurious bias.| 1 | D/V |
| **1.1.4** | **Verify that** a formal process exists to approve and document any changes or additions to the training data. All modifications to the dataset are logged (including what changed, when, and by whom) to maintain data integrity and to detect any unauthorized or unexpected changes (tampering). | 2 | D/V |
| **1.1.5** | **Verify that** if data labeling or annotation is performed, quality control measures are in place. For example, use reviewer cross-checks or consensus labeling to detect and correct errors or malicious mislabels that could inject bias or inaccuracies into the training data. | 2 | D/V |

---

## C1.2 Bias Detection & Correction

This section focuses on protecting the confidentiality and integrity of training data to prevent unauthorized access, tampering, or poisoning.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.2.1** | **Verify that** access to the training dataset (and any data preprocessing pipeline or storage) is restricted to authorized personnel and systems only. Role-based access controls and authentication should be in place to prevent unauthorized access, tampering, or exfiltration of training data. | 1 | D/V |
| **1.2.2** | **Verify that** training data at rest is protected against tampering or theft using appropriate security measures (e.g. secure file permissions and, for sensitive data, encryption). Likewise, ensure that any training data in transit (such as during collection or transfer between systems) is encrypted to prevent interception or modification.| 2  | D/V |
| **1.2.3** | **Verify that** the integrity of training data is validated before and during use in model training. This may include verifying checksums or digital signatures for static datasets and performing anomaly or outlier detection on dynamically collected data to identify potential data poisoning. Suspicious or anomalous data points should be reviewed and removed or isolated if deemed malicious before training. | 2  | D/V |
| **1.2.4** | **Verify that** training data is managed under version control or a similar change-tracking mechanism. The history of dataset changes (additions, deletions, modifications) should be preserved and reviewable, enabling rollback in case corrupt or poisoned data is introduced and facilitating audits of data integrity over time. | 3 | D/V |
| **1.2.5** | **Verify that** any unused or obsolete training data is securely disposed of or archived. Unneeded data should be removed from active systems to reduce the attack surface.| 2 | D/V |

---

## C1.3 Representation Completeness & Fairness

This section focuses on identifying and mitigating unfair bias in training data and model outcomes to address fairness-related vulnerabilities.

| # | Description | Level | Role |
|:--------:|-----------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.3.1** | **Verify that** the training data is analyzed for biases or representational imbalances with respect to protected or sensitive attributes (e.g., race, gender, etc.) that are relevant to the application. Document any significant bias found in the dataset (e.g. skewed class representation) before model training begins. | 1  | D/V |
| **1.3.2** | **Verify that** steps are taken to mitigate any biases identified in the training data. Mitigation may include re-balancing the dataset, collecting additional data for under-represented groups, or applying algorithmic techniques (such as re-weighting samples) to prevent the model from inheriting unfair bias. | 2  | D/V |
| **1.3.3** | **Verify that** the model’s outputs are tested for fairness and bias after training using appropriate metrics or evaluation techniques (for example, measuring error rates or outcomes across different demographic groups). If biased outcomes are detected, the team retrains or fine-tunes the model (or updates the data) to improve fairness and documents the adjustments made. | 2  | D/V |
| **1.3.4** | **Verify that** a bias management strategy or policy is in place, defining how bias risks are assessed and addressed throughout the AI system’s lifecycle. This includes assigning responsibility for bias review, and scheduling regular re-evaluation of the model for bias (especially after significant updates or retraining) to ensure continued fairness. | 3  | D/V |

---

## C1.4 Training Data Integrity & Labeling

This section focuses on ensuring data integrity, preventing tampering or poisoning, and enforcing accountability throughout labeling pipelines.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.4.1** | **Verify that** all training data and labels are stored with cryptographic integrity mechanisms (e.g., SHA-256 hashes or digital signatures) and that integrity is automatically validated at each stage of the training pipeline (e.g., after preprocessing, splitting, or augmentation). | 1 | D/V |
| **1.4.2** | **Verify that** all labeling interfaces (manual or programmatic) enforce role-based access controls, and that each label submission is timestamped and attributed to a specific annotator identity. Logging must be tamper-evident to support forensic investigations in the event of malicious labeling. | 2 | D/V |
| **1.4.3** | **Verify that** critical labels (e.g., safety-sensitive, legally regulated, or fairness-impactful) are subject to mandatory dual review or an equivalent robust verification mechanism, and that reviewer disagreements are resolved via predefined escalation or adjudication processes. | 2  | D/V  |
| **1.4.4** | **Verify that** all training data and labels are stored in secure, access-controlled repositories. Sensitive labels must be encrypted at rest and during transmission, with audit logs tracking access and changes. | 2 | D/V |
| **1.4.5** | **Verify that** label schemas and taxonomies are version-controlled, with all changes documented, peer-reviewed, and backward-compatible where possible to preserve training reproducibility and consistency. | 2 | D/V |
| **1.4.6** | **Verify that** the labeling process includes controls to prevent information leakage or unintended disclosure of sensitive or proprietary data, especially in outsourced or crowdsourced labeling workflows. | 2 | D |

---

## C1.5 Training Data Quality Assurance

This section focuses on validating the accuracy, completeness, and consistency of training datasets to ensure reliable and trustworthy model outcomes.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.5.1** | **Verify that** automated validation tests are run on every dataset ingestion to check for format violations, missing or null values, inconsistent label distributions, and out-of-range features. | 1 | D |
| **1.5.2** | **Verify that** datasets failing validation are quarantined with audit trails explaining the failure and reviewed prior to reintegration into training pipelines. | 1 | D/V |
| **1.5.3** | **Verify that** manual spot-checks are conducted on at least 1% of each dataset or 1,000 samples (whichever is smaller) to detect issues missed by automated tests, including semantic labeling errors or low-quality examples. | 2 | V |
| **1.5.4** | **Verify that** all data quality remediation actions (e.g., label correction, outlier removal, resampling) are logged and appended to the dataset's provenance record for future traceability. | 2 | D/V |
| **1.5.5** | **Verify that** quality gates (minimum quality thresholds) are defined per data source or task, and that datasets failing these gates are not used for training unless exceptions are documented and approved. | 2 | D/V |

---

## C1.6 Data Poisoning Detection

This section focuses on detecting and mitigating training data manipulation attacks such as data poisoning, distributional skewing, and adversarial insertion.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.6.1** | **Verify that** statistical or anomaly detection techniques are applied to training data to identify unexpected patterns, irregular label distributions, or adversarial payloads, both at initial ingestion and for any dynamically sourced datasets. | 2 | D/V |
| **1.6.2** | **Verify that** suspected poisoned data is automatically quarantined and triggers a documented manual review and remediation workflow prior to training use. | 2 | D/V |
| **1.6.3** | **Verify that** results of poisoning detection are logged and included in the model’s security dossier or documentation. | 2 | V |
| **1.6.4** | **Verify that** poisoning detection mechanisms are periodically reviewed and updated in response to evolving threat intelligence and known attack vectors. | 3 | D/V |
| **1.6.5** | **Verify that** models trained with dynamically updated datasets include mechanisms to continuously monitor and alert on distributional shifts indicative of poisoning or adversarial drift. | 3 | D/V |

---

## C1.7 User Data Deletion & Consent Enforcement

This section focuses on ensuring that user deletion requests and consent withdrawals are honored in training datasets and backups in compliance with applicable privacy laws.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **1.7.1** | **Verify that** a documented workflow exists to remove user-provided data from active training datasets, backups, and derived artifacts (e.g., embeddings, feature sets) upon deletion request, and that impact on trained models is assessed. | 1 | D/V |
| **1.7.2** | **Verify that** consent status is checked at every training run, and data without current valid consent is excluded from model training. | 2 | D |
| **1.7.3** | **Verify that** deletion and consent workflows are tested annually and logged with audit records, including evidence of test coverage and success. | 2 | V |

---

## C1.8 Model Data Labeling

This section focuses on ensuring secure and consistent labeling practices to prevent data poisoning, protect sensitive information, and maintain labeling accountability.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **1.8.1** | **Verify that** labels containing personal or sensitive information are redacted, pseudonymized, or de-identified before storage or broader access, unless retention is legally required and justified for the model’s function. | 1 | D |
| **1.8.2** | **Verify that** integrity signatures (e.g., HMAC or digital signatures) are applied to labels to detect tampering post-annotation. | 2 | D |
| **1.8.3** | **Verify that** labeling guidelines are version-controlled, reviewed for clarity and bias, and annotators receive documented training on their use—including fairness and cognitive bias considerations. | 2 | V |
| **1.8.4** | **Verify that** label quality is monitored using inter-annotator agreement or expert review sampling, and discrepancies are logged and resolved through documented processes. | 2 | V |

---

## C1.9 Supply Chain Security

This section focuses on securing the upstream data supply chain against unauthorized manipulation, tampering, or untrusted sources.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **1.9.1** | **Verify that** third-party data providers are evaluated for security practices, including privacy policies, data handling procedures, and history of breaches, before integration. | 2 | D/V |
| **1.9.2** | **Verify that** data transfers from external or third-party sources use authenticated and encrypted channels, and that data integrity is verified upon receipt. | 1 | D |
| **1.9.3** | **Verify that** data obtained from high-risk or untrusted sources is subject to secondary validation, such as source-specific heuristics, cross-validation with trusted datasets, or sandboxed processing. | 2 | D/V |

---

## C1.10 Adversarial Sample Detection

This section focuses on detecting and mitigating adversarial examples in training data that may degrade model robustness or introduce malicious behaviors.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **1.10.1** | **Verify that** automated scanning tools are used to detect known patterns or perturbations associated with adversarial examples in training datasets, including evasion or poisoning attack signatures. | 2 | D |
| **1.10.2** | **Verify that** identified adversarial samples are isolated, documented, and submitted for manual security analysis prior to any retraining or continued pipeline progression. | 2 | D/V |
| **1.10.3** | **Verify that** the training pipeline includes defenses (e.g., adversarial training, input sanitization, regularization) to reduce model susceptibility to adversarial patterns. | 3 | D |

---

## References

* [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
* [MITRE ATLAS (Adversarial Threat Landscape for AI Systems)](https://atlas.mitre.org/)
* [EU AI Act: Article 10: Data and Data Governance](https://artificialintelligenceact.eu/article/10/)
* [Lamar Institute: Ethical Use of Training Data](https://lamarr-institute.org/blog/ai-training-data-bias/)
* [IBM: What is AI governance?](https://www.ibm.com/think/topics/ai-governance)
