# C4 Infrastructure, Configuration & Deployment Security

## Control Objective

Robust infrastructure hardening and secure configuration of build, deployment, and runtime environments are critical to prevent privilege‑escalation, supply‑chain tampering, and lateral movement in AI systems. These controls focus on runtime isolation, trusted release pipelines, attack‑surface minimization, key management, and model sandboxing.

---

## C4.1 Container & Serverless Runtime Isolation

Even a single container escape can grant an attacker control over GPUs loaded with sensitive model weights. Kernel‑level isolation primitives and microVMs reduce that risk.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **4.1.1** | **Verify that** every Kubernetes Pod declares a seccomp profile that blocks all syscalls except those required by the workload. | 1 | D/V |
| **4.1.2** | **Verify that** containers and serverless functions drop Linux capabilities beyond the minimal set. | 1 | D/V |
| **4.1.3** | **Verify that** namespaces, cgroups, and read‑only root filesystems are enabled for all workloads to prevent file‑system and memory escapes. | 2 | D/V |
| **4.1.4** | **Verify that** eBPF‑based runtime policies detect and block anomalous syscalls indicating privilege escalation. | 2 | D/V |
| **4.1.5** | **Verify that** multi‑tenant serverless workloads execute inside microVM or gVisor sandboxes to achieve VM‑grade isolation. | 3 | D/V |

---

## C4.2 Secure Deployment Pipelines

Supply‑chain attacks increasingly target CI services. Reproducible builds, IaC scanning, and signed artifacts ensure the integrity of every model release.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **4.2.1** | **Verify that** Infrastructure‑as‑Code is scanned on every pull request using a static analyzer such as tfsec or Checkov. | 1 | D/V |
| **4.2.2** | **Verify that** container and model builds are reproducible and produce provenance meeting **SLSA Level 3** or higher. | 1 | D/V |
| **4.2.3** | **Verify that** each container image embeds an SBOM and is signed with Sigstore Cosign before pushing to any registry. | 2 | D/V |
| **4.2.4** | **Verify that** pipeline secrets reside in a dedicated secrets backend and are injected as short‑lived tokens. | 2 | D/V |

---

## C4.3 Attack Surface Reduction

Default‑deny networking and minimal service exposure limit the blast radius of a compromise.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **4.3.1** | **Verify that** each namespace enforces default‑deny **ingress** *and* **egress** network policies, with explicit allow‑lists. | 1 | D/V |
| **4.3.2** | **Verify that** non‑essential ports, debug endpoints, and cloud metadata APIs are disabled or authenticated. | 1 | D/V |
| **4.3.3** | **Verify that** outbound internet traffic from inference Pods is routed through egress proxies with domain allow‑lists to prevent exfiltration. | 2 | D |

---

## C4.4 Secrets Management & Environment Hardening

Compromised API keys remain a top breach vector. Hardware‑backed storage and rigorous rotation shrink the window of exposure.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **4.4.1** | **Verify that** all secrets are rotated at least every 90 days or immediately upon personnel change. | 1 | D/V |
| **4.4.2** | **Verify that** encryption keys are stored in TPM, HSM, or cloud KMS with automatic rotation and audit logging enabled. | 1 | D/V |
| **4.4.3** | **Verify that** container images and start‑up scripts audit environment variables for sensitive data and block builds on leakage. | 2 | D |
| **4.4.4** | **Verify that** SSH access to production nodes requires MFA and is disabled for service accounts. | 2 | V |

---

## C4.5 Model Sandboxing

Third‑party or fine‑tuned models can embed malicious payloads. Sandboxing ensures that novel models do not jeopardize production.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **4.5.1** | **Verify that** new or external models are evaluated inside an isolated sandbox with no outbound network until vetting completes. | 1 | D/V |
| **4.5.2** | **Verify that** adversarial evaluation is executed in the sandbox and blocks promotion on regression. | 2 | D/V |

---

## C4.6 Infrastructure Vulnerability Monitoring

Continuous scanning and rapid patching shrink the remediation gap for emerging CVEs.

| # | Description | Level | Role |
|:--------:|--------------------------------------------------------------------------------------------|:---:|:---:|
| **4.6.1** | **Verify that** container images and host nodes are scanned **daily** for CVEs and misconfigurations using tools such as Trivy or Grype. | 1 | D/V |
| **4.6.2** | **Verify that** Kubernetes and OS hardening benchmarks (e.g., kube‑bench, CIS) pass at least 90 % of critical controls. | 2 | D/V |
| **4.6.3** | **Verify that** high‑severity findings (CVSS ≥ 7.0) are patched or mitigated within 48 hours. | 2 | V |

---

## References

* [Configure a Security Context for a Pod or Container – Kubernetes Docs](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)
* [eBPF Runtime Security at Scale: Tetragon Use Cases – Isovalent](https://isovalent.com/blog/post/top-tetragon-use-cases-part-2/)
* [SLSA Specification – Security Levels v1.1](https://slsa.dev/spec/v1.1/levels)
* [How to Sign an SBOM with Cosign – Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/cosign/how-to-sign-an-sbom-with-cosign/)
* [Network Policies – Kubernetes Docs](https://kubernetes.io/docs/concepts/services-networking/network-policies/)
* [Understanding Firecracker MicroVMs – Medium](https://medium.com/meziounir/understanding-firecracker-microvms-the-next-evolution-in-virtualization-cb9eb8bbeede)
* [Container Vulnerability Scanning Tools in 2025 (Trivy) – SentinelOne](https://www.sentinelone.com/cybersecurity-101/cybersecurity/container-vulnerability-scanning-tools/)
* [aquasecurity/kube-bench – GitHub](https://github.com/aquasecurity/kube-bench)
* [aquasecurity/tfsec – GitHub](https://github.com/aquasecurity/tfsec)
* [Best Practices for Using CMEK / KMS – Google Cloud](https://cloud.google.com/kms/docs/cmek-best-practices)
* [Kubernetes Security Context Tutorial – Medium](https://medium.com/Shamimw/kubernetes-a-complete-tutorial-part4-security-context-requests-and-limits-taints-2c38c78bbea1)
* [eBPF Ecosystem Progress 2024–2025 – Eunomia](https://eunomia.dev/blog/2025/02/12/ebpf-ecosystem-progress-in-20242025-a-technical-deep-dive/)
