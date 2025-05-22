# C2 User Input Validation

## Control Objective

Robust user-input validation is a first-line defense against many of the most damaging attacks on AI systems.  Prompt-injection “jailbreaks” can override system instructions, leak sensitive data, or steer the model toward disallowed behavior.  Research shows that multi-shot jailbreaks exploiting very long context windows remain effective unless dedicated filters and instruction-hierarchies are in place.  Meanwhile, imperceptible adversarial perturbations—such as homoglyph swaps or leetspeak—can silently change a model’s decisions.

---

## C2.1 Prompt-Injection Defense

Prompt-injection tops every major LLM risk list for 2025. Defenses combine static pattern filters, dynamic classifiers and instruction-hierarchy enforcement.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **2.1.1** | **Verify that** user inputs are screened against a continuously-updated library of known prompt-injection patterns (jailbreak keywords, “ignore previous”, role-play chains, indirect HTML/URL attacks). | 1 |  D/V |
| **2.1.2** | **Verify that** the system enforces an instruction hierarchy in which system or developer messages override user instructions, even after context window expansion or function-calling hand-offs. | 1 |  D/V |
| **2.1.3** | **Verify that** adversarial evaluation tests (e.g., red-team “many-shot” prompts) are run before every model or prompt-template release, with success-rate thresholds and automated blockers for regressions. | 2 |  D/V |
| **2.1.4** | **Verify that** prompts originating from third-party content (web pages, PDFs, e-mails) are sanitized in an isolated parsing context before being concatenated into the main prompt. | 2 | D |
| **2.1.5** | **Verify that** all prompt-filter rule updates, classifier model versions and block-list changes are version-controlled and auditable. | 3 |  D/V |

---

## C2.2 Adversarial-Example Resistance

NLP models remain vulnerable to subtle character- or word-level perturbations that humans miss but models misclassify.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **2.2.1** | **Verify that** basic input-normalization steps (Unicode NFC, homoglyph mapping, whitespace trimming) run before tokenization. | 1 | D |
| **2.2.2** | **Verify that** statistical anomaly detection flags inputs with unusually high edit distance to language norms, excessive repeated tokens, or abnormal embedding distances. | 2 |  D/V |
| **2.2.3** | **Verify that** the inference pipeline supports optional adversarial-training–hardened model variants or defense layers (e.g., randomization, defensive distillation) for high-risk endpoints. | 2 | D |
| **2.2.4** | **Verify that** suspected adversarial inputs are quarantined, logged with full payloads (after PII redaction) and routed to a human review SL-A.  | 2 | V |
| **2.2.5** | **Verify that** robustness metrics (success rate of known attack suites) are tracked over time and regressions trigger a release blocker.  | 3 |  D/V |

---

## C2.3 Schema, Type & Length Validation

Malformed or oversized inputs cause parsing errors, prompt spillage across fields and resource exhaustion.  Strict schema enforcement is also a prerequisite for deterministic tool-calling.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **2.3.1** | **Verify that** every API or function-call endpoint defines an explicit input schema (JSON Schema, Protobuf or multimodal equivalent) and that inputs are validated before prompt assembly. | 1 | D |
| **2.3.2** | **Verify that** inputs exceeding maximum token or byte limits are rejected with a safe error and never silently truncated. | 1 |  D/V |
| **2.3.3** | **Verify that** type checks (e.g., numeric ranges, enum values, MIME types for images/audio) are enforced server-side, not only in client code. | 2 |  D/V |
| **2.3.4** | **Verify that** semantic validators (e.g., JSON Schema `$ref` dependencies, regex constraints) run in constant-time to prevent algorithmic DoS. | 2 | D |
| **2.3.5** | **Verify that** validation failures are logged with redacted payload snippets and unambiguous error codes to aid security triage. | 3 | V |

---

## C2.4 Content & Policy Screening

Even syntactically valid prompts may request disallowed content (illicit instructions, hate speech, copyrighted text).  OWASP and Fairly-AI trackers rank real-time policy screening as critical, while Anthropic’s “constitutional classifier” shows 95 % block rates for harmful inputs.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **2.4.1** | **Verify that** a content-classifier (zero-shot or fine-tuned) scores every input for violence, self-harm, hate, sexual content and illegal requests, with configurable thresholds. | 1 | D |
| **2.4.2** | **Verify that** policy-violating inputs receive standardized refusals or safe-completions and do not propagate to downstream LLM calls. | 1 |  D/V |
| **2.4.3** | **Verify that** the screening model or rule-set is re-trained/updated at least quarterly, incorporating newly observed jailbreak or policy-bypass patterns.  | 2 | D |
| **2.4.4** | **Verify that** screening respects user-specific policies (age, regional legal constraints) via attribute-based rules resolved at request time.  | 2 | D |
| **2.4.5** | **Verify that** screening logs include classifier confidence scores and policy category tags for SOC correlation and future red-team replay. | 3 | V |

---

## References

* [LLM01:2025 Prompt Injection – OWASP Top 10 for LLM & Generative AI Security](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
* [Generative AI's Biggest Security Flaw Is Not Easy to Fix](https://www.wired.com/story/generative-ai-prompt-injection-hacking)
* [Many-shot jailbreaking \ Anthropic](https://www.anthropic.com/research/many-shot-jailbreaking)
* [$PDF$ OpenAI GPT-4.5 System Card](https://cdn.openai.com/gpt-4-5-system-card-2272025.pdf)
* [Notebook for the CheckThat Lab at CLEF 2024](https://ceur-ws.org/Vol-3740/paper-53.pdf)
* [Mitigate jailbreaks and prompt injections – Anthropic](https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks)
* [Chapter 3 MITRE ATT\&CK – Adversarial Model Analysis](https://ama.drwhy.ai/mitre-attck.html)
* [OWASP Top 10 for LLM Applications 2025 – WorldTech IT](https://wtit.com/blog/2025/04/17/owasp-top-10-for-llm-applications-2025/)
* [OWASP Machine Learning Security Top Ten](https://owasp.org/www-project-machine-learning-security-top-10/)
* [Few words about AI Security – Jussi Metso](https://www.jussimetso.com/index.php/2024/09/28/few-words-about-ai-security/)
* [How To Ensure LLM Output Adheres to a JSON Schema | Modelmetry](https://modelmetry.com/blog/how-to-ensure-llm-output-adheres-to-a-json-schema)
* [Easily enforcing valid JSON schema following – API](https://community.openai.com/t/feature-request-function-calling-easily-enforcing-valid-json-schema-following/263515?utm_source)
* [AI Safety + Cybersecurity R\&D Tracker – Fairly AI](https://www.fairly.ai/blog/ai-cybersecurity-tracker)
* [Anthropic makes ‘jailbreak’ advance to stop AI models producing harmful results](https://www.ft.com/content/cf11ebd8-aa0b-4ed4-945b-a5d4401d186e)
