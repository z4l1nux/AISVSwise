export interface Control {
    name: string;
    practices: { id: string; name: string }[];
}

const PRACTICES: Record<string, string[]> = {
    'Control 1': [
        'C1.1 Training Data Origin & Traceability',
        'C1.2 Training Data Security & Integrity',
        'C1.3 Data Labeling and Annotation Security',
        'C1.4 Training Data Quality and Security Assurance',
        'C1.5 Data Lineage and Traceability',
    ],
    'Control 2': [
        'C2.1 Prompt Injection Defense',
        'C2.2 Adversarial-Example Resistance',
        'C2.3 Prompt Character Set',
        'C2.4 Schema, Type & Length Validation',
        'C2.5 Content & Policy Screening',
        'C2.6 Input Rate Limiting & Abuse Prevention',
        'C2.7 Multi-Modal Input Validation',
        'C2.8 Real-Time Adaptive Threat Detection',
    ],
    'Control 3': [
        'C3.1 Model Authorization & Integrity',
        'C3.2 Model Validation & Testing',
        'C3.3 Controlled Deployment & Rollback',
        'C3.4 Secure Development Practices',
        'C3.5 Hosted and Provider-Managed Model Controls',
        'C3.7 Fine-Tuning Pipeline Authorization & Reward Model Integrity',
    ],
    'Control 4': [
        'C4.1 Runtime Environment Isolation',
        'C4.2 Secure Build & Deployment Pipelines',
        'C4.3 Network Security & Access Control',
        'C4.4 Secrets & Cryptographic Key Management',
        'C4.5 AI Workload Sandboxing & Validation',
        'C4.6 AI Infrastructure Resource Management, Backup and Recovery',
        'C4.7 AI Hardware Security',
        'C4.8 Edge & Distributed AI Security',
    ],
    'Control 5': [
        'C5.1 Identity Management & Authentication',
        'C5.2 Authorization & Policy',
        'C5.3 Query-Time Security Enforcement',
        'C5.4 Output Filtering & Data Loss Prevention',
        'C5.5 Multi-Tenant Isolation',
        'C5.6 Autonomous Agent Authorization',
    ],
    'Control 6': [
        'C6.1 Pretrained Model Vetting & Origin Integrity',
        'C6.2 Framework & Library Scanning',
        'C6.3 Dependency Pinning & Verification',
        'C6.4 Trusted Source Enforcement',
        'C6.5 Third-Party Dataset Risk Assessment',
        'C6.6 Supply Chain Attack Monitoring',
        'C6.7 AI BOM for Model Artifacts',
    ],
    'Control 7': [
        'C7.1 Output Format Enforcement',
        'C7.2 Hallucination Detection & Mitigation',
        'C7.3 Output Safety & Privacy Filtering',
        'C7.4 Output & Action Limiting',
        'C7.5 Explainability & Transparency',
        'C7.6 Monitoring Integration',
        'C7.7 Generative Media Safeguards',
        'C7.8 Source Attribution & Citation Integrity',
    ],
    'Control 8': [
        'C8.1 Access Controls on Memory & RAG Indices',
        'C8.2 Embedding Sanitization & Validation',
        'C8.3 Memory Expiry, Revocation & Deletion',
        'C8.4 Prevent Embedding Inversion & Leakage',
        'C8.5 Scope Enforcement for User-Specific Memory',
    ],
    'Control 9': [
        'C9.1 Execution Budgets, Loop Control, and Circuit Breakers',
        'C9.2 High-Impact Action Approval and Irreversibility Controls',
        'C9.3 Tool and Plugin Isolation and Safe Integration',
        'C9.4 Agent and Orchestrator Identity, Signing, and Tamper-Evident Audit',
        'C9.5 Secure Messaging and Protocol Hardening',
        'C9.6 Authorization, Delegation, and Continuous Enforcement',
        'C9.7 Intent Verification and Constraint Gates',
        'C9.8 Multi-Agent Domain Isolation and Swarm Risk Controls',
    ],
    'Control 10': [
        'C10.1 Component Integrity & Supply Chain Hygiene',
        'C10.2 Authentication & Authorization',
        'C10.3 Secure Transport & Network Boundary Protection',
        'C10.4 Schema, Message, and Input Validation',
        'C10.5 Outbound Access & Agent Execution Safety',
        'C10.6 Transport Restrictions & High-Risk Boundary Controls',
    ],
    'Control 11': [
        'C11.1 Model Alignment & Safety',
        'C11.2 Adversarial-Example Hardening',
        'C11.3 Membership-Inference Mitigation',
        'C11.4 Model-Inversion Resistance',
        'C11.5 Model-Extraction Defense',
        'C11.6 Inference-Time Poisoned-Data Detection',
        'C11.7 Security Policy Adaptation',
        'C11.8 Agent Security Self-Assessment',
        'C11.9 Self-Modification & Autonomous Update Security',
        'C11.10 Adversarial Bias Exploitation Defense',
    ],
    'Control 12': [
        'C12.1 Anonymization & Data Minimization',
        'C12.2 Right-to-be-Forgotten & Deletion Enforcement',
        'C12.3 Differential-Privacy Safeguards',
        'C12.4 Purpose-Limitation & Scope-Creep Protection',
        'C12.5 Consent Management & Lawful-Basis Tracking',
        'C12.6 Federated Learning with Privacy Controls',
    ],
    'Control 13': [
        'C13.1 Request & Response Logging',
        'C13.2 Abuse Detection and Alerting',
        'C13.3 Model, Data, and Performance Drift Detection',
        'C13.4 Performance & Behavior Telemetry',
        'C13.5 AI Incident Response Planning & Execution',
        'C13.6 DAG Visualization & Workflow Security',
        'C13.7 Proactive Security Behavior Monitoring',
    ],
    'Control 14': [
        'C14.1 Kill-Switch & Override Mechanisms',
        'C14.2 Human-in-the-Loop Decision Checkpoints',
        'C14.3 Chain of Responsibility & Auditability',
        'C14.4 Explainable-AI Techniques',
        'C14.5 Model Cards & Usage Disclosures',
        'C14.6 Uncertainty Quantification',
        'C14.7 User-Facing Transparency Reports',
    ],
};

export const CONTROLS: Control[] = Object.entries(PRACTICES).map(([name, practices]) => ({
    name,
    practices: practices.map(label => ({ id: label.split(' ')[0], name: label })),
}));

export const PRACTICE_CATALOG = CONTROLS.flatMap(control =>
    control.practices.map(practice => ({ ...practice, control: control.name })),
);

export const PRACTICE_IDS = PRACTICE_CATALOG.map(practice => practice.id);

export function findPractice(id: string) {
    return PRACTICE_CATALOG.find(practice => practice.id === id) ?? null;
}

export function findControl(name: string) {
    return CONTROLS.find(control => control.name === name) ?? null;
}
