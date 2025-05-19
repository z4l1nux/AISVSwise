# OWASP AISVS Glossary

## A

**Adversarial Example**: Input specifically crafted to cause an AI model to make a mistake, typically by adding subtle perturbations imperceptible to humans.

**Adversarial Training**: A technique to improve model robustness by incorporating adversarial examples in the training process.

**Agent**: An autonomous AI system capable of perceiving its environment, making decisions, and taking actions to achieve specific goals.

**Attribute-Based Access Control (ABAC)**: An access control paradigm where authorization decisions are based on attributes of the user, resource, action, and environment, evaluated at query time.

## B

**Backdoor Attack**: A type of data poisoning attack where the model is trained to respond in a specific way to certain triggers while behaving normally otherwise.

**Bias**: Systematic errors in AI model outputs that can lead to unfair or discriminatory outcomes for certain groups or in specific contexts.

**Bias Exploitation**: An attack technique that takes advantage of known biases in AI models to manipulate outputs.

## C

**Cedar**: Amazon's policy language and engine for fine-grained permissions used in implementing ABAC for AI systems.

**Chain of Thought**: A technique for improving reasoning in language models by generating intermediate reasoning steps before producing a final answer.

**Circuit Breakers**: Mechanisms that automatically halt AI system operations when specific risk thresholds are exceeded.

## D

**Data Leakage**: Unintended exposure of sensitive information through AI model outputs or behavior.

**Data Poisoning**: The act of maliciously modifying training data to compromise model behavior or insert backdoors.

**Differential Privacy**: A mathematical framework for sharing information about a dataset while withholding information about individuals in the dataset.

## E

**Embedding**: A technique that maps discrete objects (like words or images) to vectors of continuous numbers, capturing semantic relationships.

**Explainable AI (XAI)**: AI systems designed to provide human-understandable explanations for their decisions and behaviors.

**Extraction Attack**: Attempts to steal or duplicate a model's functionality by observing its inputs and outputs.

## F

**Federated Learning**: A machine learning approach where models are trained across multiple devices while keeping the training data local, enhancing privacy.

**Fine-tuning**: The process of further training a pre-trained model on a specific dataset to adapt it to a particular task or domain.

## G

**Guardrails**: Constraints implemented to prevent AI systems from producing harmful, biased, or otherwise undesirable outputs.

## H

**Hallucination**: When an AI model generates content that appears plausible but is factually incorrect or entirely fabricated.

**Human-in-the-Loop (HITL)**: Systems designed to require human oversight, verification, or intervention at crucial decision points.

## I

**Infrastructure as Code (IaC)**: Managing and provisioning infrastructure through code instead of manual processes, enabling security scanning and consistent deployments.

**Inference Attack**: Extracting sensitive information about training data by analyzing model behavior or outputs.

## J

**Jailbreak**: Techniques to circumvent an AI system's safety measures or restrictions, typically through carefully crafted prompts.

## L

**LIME (Local Interpretable Model-agnostic Explanations)**: A technique to explain individual predictions of any machine learning classifier.

**Least Privilege**: The security principle of granting only the minimum necessary access rights for users and processes.

## M

**Membership Inference Attack**: A privacy attack that determines whether a specific data point was used to train a given model.

**MITRE ATLAS**: Adversarial Threat Landscape for Artificial-Intelligence Systems; a knowledge base of adversarial tactics and techniques against AI systems.

**Model Inversion**: A type of attack that attempts to reconstruct training data from a trained model.

**Model Poisoning**: Introducing vulnerabilities or backdoors directly into a model during the training process.

**Model Stealing/Theft**: Extracting a copy or approximation of a proprietary model through repeated queries.

## O

**OPA (Open Policy Agent)**: An open-source policy engine that enables unified policy enforcement across the stack.

## P

**Prompt Injection**: A technique where malicious input is crafted to manipulate an AI system into performing unintended actions.

**Privacy-Preserving Machine Learning (PPML)**: Techniques and methods to train and deploy ML models while protecting the privacy of the training data.

## R

**RAG (Retrieval-Augmented Generation)**: A technique that enhances language model outputs by retrieving relevant information from external knowledge sources.

**Red-Teaming**: The practice of actively testing AI systems by simulating adversarial attacks to identify vulnerabilities.

## S

**SBOM (Software Bill of Materials)**: A formal record containing the details and supply chain relationships of components used in building software, including AI models.

**SHAP (SHapley Additive exPlanations)**: A game theoretic approach to explain the output of any machine learning model.

**Supply Chain Attack**: Compromising a system by targeting less-secure elements in its supply chain, such as third-party libraries, datasets, or pre-trained models.

## T

**Transfer Learning**: A technique where a model developed for one task is reused as the starting point for a model on a second task.

## V

**Vector Database**: Specialized databases optimized for storing and searching embedding vectors, commonly used in RAG systems.

**Vulnerability Scanning**: Automated tools that identify known security vulnerabilities in software components, including AI frameworks and dependencies.

## W

**Watermarking**: Techniques to embed imperceptible markers in AI-generated content to track its origin or detect AI generation.

## Z

**Zero-Day Vulnerability**: A previously unknown vulnerability that attackers can exploit before developers create and deploy a patch. 