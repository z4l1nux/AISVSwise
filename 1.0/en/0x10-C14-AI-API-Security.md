# C14 AI API Security

## Control Objective

AI inference APIs must implement security controls specific to model serving, including inference-aware rate limiting, model version management, and protection against API-based prompt injection attacks. These controls ensure that AI services are accessed securely and that API-specific attack vectors are mitigated.

---

## C14.1 AI Inference API Authentication

Ensure all AI inference endpoints require proper authentication and authorization.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **14.1.1** | **Verify that** AI inference APIs require authentication for all requests and reject unauthenticated calls with appropriate error responses. | 1 | D/V |
| **14.1.2** | **Verify that** API keys for AI services are scoped to specific models and operations (inference, training, management) and cannot be used beyond their intended scope. | 1 | D/V |
| **14.1.3** | **Verify that** service-to-service authentication for model inference uses mutual TLS, signed JWTs, or equivalent strong authentication mechanisms. | 2 | D/V |
| **14.1.4** | **Verify that** API authentication failures are logged with sufficient detail for security monitoring and forensic analysis. | 2 | D/V |
| **14.1.5** | **Verify that** API keys and tokens for AI services are rotated on a defined schedule and immediately upon suspected compromise. | 2 | D |

---

## C14.2 AI-Specific Rate Limiting

Implement rate limiting appropriate for AI workloads and computational costs.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **14.2.1** | **Verify that** rate limits are applied per model endpoint based on computational cost and resource consumption, not just request count. | 1 | D/V |
| **14.2.2** | **Verify that** token-based rate limiting accounts for input and output token consumption in language models and adjusts limits accordingly. | 1 | D/V |
| **14.2.3** | **Verify that** batch inference requests are size-limited to prevent resource exhaustion and denial of service attacks. | 2 | D/V |
| **14.2.4** | **Verify that** rate limiting violations trigger appropriate responses (429 errors, temporary blocks) and are logged for analysis. | 2 | D/V |
| **14.2.5** | **Verify that** adaptive rate limiting adjusts thresholds based on detected abuse patterns or system load. | 3 | D/V |

---

## C14.3 Model Version API Security

Secure management and access to different model versions through APIs.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **14.3.1** | **Verify that** API endpoints clearly identify which model version is being accessed and return version information in responses. | 1 | D/V |
| **14.3.2** | **Verify that** deprecated model versions return appropriate warnings and have clearly communicated sunset dates. | 2 | D/V |
| **14.3.3** | **Verify that** model version switching requires appropriate authorization and all version changes are logged with user context. | 2 | D/V |
| **14.3.4** | **Verify that** unauthorized attempts to access restricted model versions are blocked and trigger security alerts. | 2 | V |
| **14.3.5** | **Verify that** model version metadata is protected from unauthorized modification and tampering. | 3 | D/V |

---

## C14.4 API Parameter Validation

Validate and sanitize all API parameters to prevent injection and manipulation attacks.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **14.4.1** | **Verify that** all API parameters are validated against defined schemas before processing and invalid parameters are rejected. | 1 | D |
| **14.4.2** | **Verify that** prompt injection attempts via API parameters (system prompts, instructions, context) are detected and blocked. | 1 | D/V |
| **14.4.3** | **Verify that** API parameter tampering attempts and schema violations are logged and trigger security alerts. | 2 | V |
| **14.4.4** | **Verify that** nested or complex parameter structures are recursively validated to prevent bypass attempts. | 2 | D |
| **14.4.5** | **Verify that** parameter validation errors provide minimal information to prevent information disclosure about internal systems. | 3 | D/V |

---

## C14.5 AI API Response Security

Ensure AI API responses do not leak sensitive information or enable attacks.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **14.5.1** | **Verify that** API responses do not include internal system information, model architecture details, or debugging data. | 1 | D/V |
| **14.5.2** | **Verify that** error messages from AI APIs are standardized and do not reveal sensitive implementation details. | 1 | D/V |
| **14.5.3** | **Verify that** API responses are validated before transmission to prevent injection of malicious content. | 2 | D/V |
| **14.5.4** | **Verify that** response timing is normalized or randomized to prevent timing-based information disclosure attacks. | 2 | D |
| **14.5.5** | **Verify that** API responses include appropriate security headers and content-type declarations. | 2 | D/V |

---

## C14.6 AI API Monitoring and Logging

Implement comprehensive monitoring and logging for AI API security events.

| # | Description | Level | Role |
|:--------:|---------------------------------------------------------------------------------------------------------------------|:---:|:---:|
| **14.6.1** | **Verify that** all AI API calls are logged with request parameters, response metadata, processing time, and user context. | 1 | D/V |
| **14.6.2** | **Verify that** unusual API usage patterns (rapid model switching, parameter manipulation, excessive requests) trigger alerts. | 2 | D/V |
| **14.6.3** | **Verify that** API error rates and failure patterns are monitored and correlated with security events. | 2 | V |
| **14.6.4** | **Verify that** API logs are protected from unauthorized access and tampering through appropriate access controls and integrity measures. | 2 | V |
| **14.6.5** | **Verify that** API security events are integrated with enterprise SIEM systems for correlation and analysis. | 3 | V |

---

## References

* [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
* [NIST SP 800-204 - Building Secure Microservices-based Applications](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-204.pdf)
* [OpenAPI Security Specification](https://spec.openapis.org/oas/v3.1.0#security-scheme-object)
* [OWASP Top 10 for LLM Applications - LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
* [API Rate Limiting Best Practices](https://cloud.google.com/architecture/rate-limiting-strategies-techniques)
* [JWT Security Best Practices](https://tools.ietf.org/html/rfc8725)
* [Mutual TLS Authentication](https://tools.ietf.org/html/rfc8446)