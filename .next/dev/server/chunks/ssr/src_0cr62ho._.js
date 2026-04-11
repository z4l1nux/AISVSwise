module.exports = [
"[project]/src/features/assessment/surveys/surveypanels/c01/c01_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c01_1 = ()=>({
        "type": "panel",
        "name": "C1.1 Training Data Origin & Traceability",
        "elements": [
            {
                "type": "radiogroup",
                "id": "c61bfc3ba49e94b7640f77f02cc66523",
                "name": "q_c01_1_1_1",
                "title": "[1.1.1] Verify that an up-to-date inventory of every training-data source (origin, responsible party, license, collection method, intended use constraints, and processing history) is maintained.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f0c87208349c034545145b0a65218ca3",
                "name": "q_c01_1_1_2",
                "title": "[1.1.2] Verify that training data processes exclude unnecessary features, attributes, or fields (e.g., unused metadata, sensitive PII, leaked test data).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c5f9f4e3683c52cad02659ef8cb35e25",
                "name": "q_c01_1_1_3",
                "title": "[1.1.3] Verify that all dataset changes are subject to a logged approval workflow.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9329994cdd8a7fbf67196e940ff0dcdf",
                "name": "q_c01_1_1_4",
                "title": "[1.1.4] Verify that datasets or subsets are watermarked or fingerprinted where feasible.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C1.1 Training Data Origin & Traceability",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c01_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c01/c01_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c01_2 = ()=>({
        "type": "panel",
        "name": "C1.2 Training Data Security & Integrity",
        "elements": [
            {
                "type": "radiogroup",
                "id": "0cc5b1abbf54b035fd7f7d33b8d623f3",
                "name": "q_c01_1_2_1",
                "title": "[1.2.1] Verify that access controls protect training data storage and pipelines.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2efc8bcd76377df1ef00b17ca0d27abc",
                "name": "q_c01_1_2_2",
                "title": "[1.2.2] Verify that all access to training data is logged, including user, time, and action.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e2a8ccdccf2557e1ef84af531b370d76",
                "name": "q_c01_1_2_3",
                "title": "[1.2.3] Verify that training datasets are encrypted in transit and at rest, using current recommended cryptographic algorithms and key management practices.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9c28cabee01fb6aa6ad02bb5da107542",
                "name": "q_c01_1_2_4",
                "title": "[1.2.4] Verify that cryptographic hashes or digital signatures are used to ensure data integrity during training data storage and transfer.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5ec6817271930d62084aa9afaadd8171",
                "name": "q_c01_1_2_5",
                "title": "[1.2.5] Verify that automated integrity monitoring is applied to guard against unauthorized modifications or corruption of training data.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b1235af6885aa9b05dc2ba44b9e02d0e",
                "name": "q_c01_1_2_6",
                "title": "[1.2.6] Verify that obsolete training data is securely purged or anonymized.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "0369d694d0898fb1a10efd634af05cf4",
                "name": "q_c01_1_2_7",
                "title": "[1.2.7] Verify that all training dataset versions are uniquely identified, stored immutably, and auditable to support rollback and forensic analysis.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C1.2 Training Data Security & Integrity",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c01_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c01/c01_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c01_3 = ()=>({
        "type": "panel",
        "name": "C1.3 Data Labeling and Annotation Security",
        "elements": [
            {
                "type": "radiogroup",
                "id": "8b34b251b979246507bbd2615024a529",
                "name": "q_c01_1_3_1",
                "title": "[1.3.1] Verify that labeling interfaces and platforms enforce access controls and maintain audit logs of all labeling activities, and that annotator identity metadata is exported and retained alongside the dataset so that every annotation or preference pair can be attributed to a specific, verified human annotator throughout the training pipeline, not only within the labeling platform.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1d75c6aa7726ed023ae598c8bf23da03",
                "name": "q_c01_1_3_2",
                "title": "[1.3.2] Verify that cryptographic hashes or digital signatures are applied to labeling artifacts, annotation data, and fine-tuning feedback records (including RLHF preference pairs) to ensure their integrity and authenticity.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1235b04d446d1ddd1e6a6147936c75e8",
                "name": "q_c01_1_3_3",
                "title": "[1.3.3] Verify that labeling audit logs are tamper-evident and that labeling platforms protect against unauthorized modifications.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f2cce26bf2e517924639940d15b9ceef",
                "name": "q_c01_1_3_4",
                "title": "[1.3.4] Verify that sensitive information in labels is redacted, anonymized, or encrypted using appropriate granularity at rest and in transit.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C1.3 Data Labeling and Annotation Security",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c01_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c01/c01_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c01_4 = ()=>({
        "type": "panel",
        "name": "C1.4 Training Data Quality and Security Assurance",
        "elements": [
            {
                "type": "radiogroup",
                "id": "d9c03e0c54eceaa19ea7a8af8114fc24",
                "name": "q_c01_1_4_1",
                "title": "[1.4.1] Verify that automated tests catch format errors and nulls on every ingest or significant data transformation.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ba92566d078f3bb4a6661ae49900e715",
                "name": "q_c01_1_4_2",
                "title": "[1.4.2] Verify that training and fine-tuning pipelines implement data integrity validation and poisoning detection techniques (e.g., statistical analysis, outlier detection, embedding analysis) to identify potential data poisoning or unintentional corruption in training data.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "60accee6727306890abe8a5ad733c28e",
                "name": "q_c01_1_4_3",
                "title": "[1.4.3] Verify that automatically generated labels (e.g., via models or weak supervision) are subject to confidence thresholds and consistency checks to detect misleading or low-confidence labels.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "0c0c8c1c6bca002c267a71f497adfc79",
                "name": "q_c01_1_4_4",
                "title": "[1.4.4] Verify that appropriate defenses, such as adversarial training, data augmentation with perturbed inputs, or robust optimization techniques, are implemented and tuned for relevant models based on risk assessment.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "92bc68bc4802a63f4cbb59317b9e702c",
                "name": "q_c01_1_4_5",
                "title": "[1.4.5] Verify that automated tests catch label skews on every ingest or significant data transformation.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f12d27a0f5834e9683d997a3d1b17c33",
                "name": "q_c01_1_4_6",
                "title": "[1.4.6] Verify that models used in security-relevant decisions (e.g., abuse detection, fraud scoring, automated trust decisions) are evaluated for systematic bias patterns that an adversary could exploit to evade controls (e.g., mimicking a trusted language style or demographic pattern to bypass detection).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C1.4 Training Data Quality and Security Assurance",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c01_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c01/c01_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c01_5 = ()=>({
        "type": "panel",
        "name": "C1.5 Data Lineage and Traceability",
        "elements": [
            {
                "type": "radiogroup",
                "id": "6a684c52ad0955678b7e9c5f6255114a",
                "name": "q_c01_1_5_1",
                "title": "[1.5.1] Verify that the lineage of each dataset and its components, including all transformations, augmentations, and merges, is recorded and can be reconstructed.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1638f1d6d0e507bd1e32134cd9c71652",
                "name": "q_c01_1_5_2",
                "title": "[1.5.2] Verify that lineage records are immutable, securely stored, and accessible for audits.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fe26f93c8302fd5e95f4195420aa1464",
                "name": "q_c01_1_5_3",
                "title": "[1.5.3] Verify that lineage tracking covers synthetic data generated via augmentation, synthesis, or privacy-preserving techniques and that all synthetic data is clearly labeled and distinguishable from real data throughout the pipeline.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C1.5 Data Lineage and Traceability",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c01_5;
}),
"[project]/src/features/assessment/surveys/surveypages/c01.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c01/c01_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c01/c01_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c01/c01_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c01/c01_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c01/c01_5.ts [ssr] (ecmascript)");
;
;
;
;
;
var tosend = {
    name: "Control 1",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c01$2f$c01_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c01JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c01JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_1 = ()=>({
        "type": "panel",
        "name": "C2.1 Prompt Injection Defense",
        "elements": [
            {
                "type": "radiogroup",
                "id": "c6e25f975b9c79008582407c8d47cd6c",
                "name": "q_c02_2_1_1",
                "title": "[2.1.1] Verify that all external or derived inputs that may steer model behavior are treated as untrusted and screened by a prompt injection detection ruleset or classifier before being included in prompts or used to trigger actions.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "810eaa73ae34dcf0feb5ada14bbdf399",
                "name": "q_c02_2_1_2",
                "title": "[2.1.2] Verify that the system enforces an instruction hierarchy in which system and developer messages override user instructions and other untrusted inputs, even after processing user instructions.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e90a79119d06a528e2e068eb67dc48e1",
                "name": "q_c02_2_1_3",
                "title": "[2.1.3] Verify that prompts originating from third-party content (web pages, PDFs, emails) are sanitized in isolation (for example, stripping instruction-like directives and neutralizing HTML, Markdown, and script content) before being concatenated into the main prompt.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "41b9dd2398b947b6810c1b99f6edb4a2",
                "name": "q_c02_2_1_4",
                "title": "[2.1.4] Verify that input length controls account for context window limits and that the system prevents user-supplied content from exceeding a proportion of the total context window that would displace system instructions or safety directives from the model's effective attention.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.1 Prompt Injection Defense",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_2 = ()=>({
        "type": "panel",
        "name": "C2.2 Adversarial-Example Resistance",
        "elements": [
            {
                "type": "radiogroup",
                "id": "ef3ca9427705549484a7e39bdf49e1ac",
                "name": "q_c02_2_2_1",
                "title": "[2.2.1] Verify that basic input normalization steps (Unicode NFC, homoglyph mapping, whitespace trimming, removal of control and invisible Unicode characters) are run before tokenization or embedding and before parsing into tool or MCP arguments.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7f247dc092ac7ebac32a176e6f3b9b5a",
                "name": "q_c02_2_2_2",
                "title": "[2.2.2] Verify that suspected adversarial inputs are quarantined and logged.",
                "description": "Level: 1 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f64a41252c5237e32a221905a1a7ae97",
                "name": "q_c02_2_2_3",
                "title": "[2.2.3] Verify that inputs that deviate from expected input patterns, as determined by statistical or semantic anomaly detection, are gated prior to inclusion in prompts or execution of actions.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "51488b99a2624a4ea58a0648cb9ceca6",
                "name": "q_c02_2_2_4",
                "title": "[2.2.4] Verify that the inference pipeline supports adversarial-training-hardened model variants or defense layers (e.g., randomization, defensive distillation, alignment checks) for high-risk endpoints.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c9a65ad00a1944e43f8668968b7e1451",
                "name": "q_c02_2_2_5",
                "title": "[2.2.5] Verify that encoding and representation smuggling in both inputs and outputs (e.g., invisible Unicode/control characters, homoglyph swaps, or mixed-direction text) are detected and mitigated. Approved mitigations include canonicalization, strict schema validation, policy-based rejection, or explicit marking.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.2 Adversarial-Example Resistance",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_3 = ()=>({
        "type": "panel",
        "name": "C2.3 Prompt Character Set",
        "elements": [
            {
                "type": "radiogroup",
                "id": "1bbc0e4c72b92070fc0b489f2fb0180f",
                "name": "q_c02_2_3_1",
                "title": "[2.3.1] Verify that the system implements a character set limitation for user inputs, allowing only characters that are explicitly required for business purposes using an allow-list approach.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a8fa365995ef1aed92f368b817c626bd",
                "name": "q_c02_2_3_2",
                "title": "[2.3.2] Verify that inputs containing characters outside of the allowed set are rejected and logged with trace metadata (source, tool or MCP server, agent ID, session).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.3 Prompt Character Set",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_4 = ()=>({
        "type": "panel",
        "name": "C2.4 Schema, Type & Length Validation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "d6aa37c3d7aaa4e358259629b2fdef99",
                "name": "q_c02_2_4_1",
                "title": "[2.4.1] Verify that every API, tool or MCP endpoint defines an explicit input schema (e.g., JSON Schema, Protocol Buffers, or multimodal equivalent), rejects extra or unknown fields and implicit type coercion, and validates inputs server-side before prompt assembly or tool execution.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "148ea52a88d05191eeb20332868c0b9b",
                "name": "q_c02_2_4_2",
                "title": "[2.4.2] Verify that inputs exceeding maximum token or byte limits are rejected with a safe error and never silently truncated.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4f5eebabc1a5c36ea20d2c0465c9f852",
                "name": "q_c02_2_4_3",
                "title": "[2.4.3] Verify that type checks (e.g., numeric ranges, enumerated values, and MIME types for images or audio) are enforced for all server-side inputs, including tool or MCP arguments.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "20b171d8710847d663c556397823e230",
                "name": "q_c02_2_4_4",
                "title": "[2.4.4] Verify that semantic validators run in constant time and avoid external network calls to prevent algorithmic DoS.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "caae0cbf8d6cf1f4b84e2edc682eb0e4",
                "name": "q_c02_2_4_5",
                "title": "[2.4.5] Verify that validation failures are logged with redacted payload snippets and unambiguous error codes and include trace metadata (source, tool or MCP server, agent ID, session) to aid security triage.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.4 Schema, Type & Length Validation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_5 = ()=>({
        "type": "panel",
        "name": "C2.5 Content & Policy Screening",
        "elements": [
            {
                "type": "radiogroup",
                "id": "555fb118975959007f911c3799e528a2",
                "name": "q_c02_2_5_1",
                "title": "[2.5.1] Verify that a content classifier scores every input and output for violence, self-harm, hate, sexual content and illegal requests, with configurable thresholds.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "907c122ba7e22d0216766728ea432354",
                "name": "q_c02_2_5_2",
                "title": "[2.5.2] Verify that inputs which violate policies will be rejected so they will not propagate to downstream model or tool/MCP calls.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "6617e9908676043c082ed89687a8f990",
                "name": "q_c02_2_5_3",
                "title": "[2.5.3] Verify that screening respects user-specific policies (age and regional legal constraints) via attribute-based rules resolved at request time, including the role or permission level of the calling agent.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "453520b736669b896d6c090d5ff0a9f9",
                "name": "q_c02_2_5_4",
                "title": "[2.5.4] Verify that screening logs include classifier confidence scores and policy category tags with applied stage (pre-prompt or post-response) and trace metadata (source, tool or MCP server, agent ID, session) for SOC correlation and future red-team replay.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.5 Content & Policy Screening",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_6 = ()=>({
        "type": "panel",
        "name": "C2.6 Input Rate Limiting & Abuse Prevention",
        "elements": [
            {
                "type": "radiogroup",
                "id": "53a44199dc4513e32d9e5de8841de88c",
                "name": "q_c02_2_6_1",
                "title": "[2.6.1] Verify that per-user, per-IP, per-API-key, and per-agent and per-session/task rate limits are enforced for all input and tool/MCP endpoints.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "da50ca4c6d6e270bc594e9cd36f7ecd5",
                "name": "q_c02_2_6_2",
                "title": "[2.6.2] Verify that burst and sustained rate limits are tuned to prevent DoS and brute force attacks, and that per-task budgets (for example tokens, tool/MCP calls, and cost) are enforced for agent planning loops.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5a13b3752f048375470de160a0e82bd0",
                "name": "q_c02_2_6_3",
                "title": "[2.6.3] Verify that anomalous usage patterns (e.g., rapid-fire requests, input flooding, repetitive failing tool/MCP calls or recursive agent loops) trigger automated blocks or escalations.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8b43abc9804b038ad45e7611b2890bf1",
                "name": "q_c02_2_6_4",
                "title": "[2.6.4] Verify that abuse prevention logs are retained and reviewed for emerging attack patterns, with trace metadata (source, tool or MCP server, agent ID, session).",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.6 Input Rate Limiting & Abuse Prevention",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_7 = ()=>({
        "type": "panel",
        "name": "C2.7 Multi-Modal Input Validation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "be7996708d36b7e35a6f80d75ff745fb",
                "name": "q_c02_2_7_1",
                "title": "[2.7.1] Verify that all non-text inputs (images, audio, files) are validated for type, size, and format before processing, and that any extracted text (image-to-text or speech-to-text) and any hidden or embedded instructions (metadata, layers, alt text, comments) are treated as untrusted per 2.1.1.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "15d36565fabc4553399c577845f591c9",
                "name": "q_c02_2_7_2",
                "title": "[2.7.2] Verify that files are scanned for malware and steganographic payloads before ingestion, and that any active content (like scripts or macros) is removed or the file is quarantined.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "92d70bc7e728a4d03cde2f4ea1bf2289",
                "name": "q_c02_2_7_3",
                "title": "[2.7.3] Verify that image/audio inputs are checked for adversarial perturbations or known attack patterns, and detections trigger gating (block or degrade capabilities) before model use.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "db310f96535a93087449edc7713f8ece",
                "name": "q_c02_2_7_4",
                "title": "[2.7.4] Verify that multi-modal input validation failures trigger detailed logging including all input modalities, validation results, threat scores, and trace metadata (source, tool or MCP server, agent ID, session as applicable), and generate alerts for investigation.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "944bffb5db80e0d19a824ceb2fa20177",
                "name": "q_c02_2_7_5",
                "title": "[2.7.5] Verify that cross-modal attack detection identifies coordinated attacks spanning multiple input types (e.g., steganographic payloads in images combined with prompt injection in text) with correlation rules and alert generation, and that confirmed detections are blocked or require HITL (human-in-the-loop) approval.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.7 Multi-Modal Input Validation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_7;
}),
"[project]/src/features/assessment/surveys/surveypanels/c02/c02_8.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c02_8 = ()=>({
        "type": "panel",
        "name": "C2.8 Real-Time Adaptive Threat Detection",
        "elements": [
            {
                "type": "radiogroup",
                "id": "5d9e0884661ac6ba6c1376bb2c7be191",
                "name": "q_c02_2_8_1",
                "title": "[2.8.1] Verify that pattern matching (e.g., compiled regular expressions) runs on all inputs and outputs (including tool/MCP surfaces).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5b36842f5bdd29bd36770740aabe92b5",
                "name": "q_c02_2_8_2",
                "title": "[2.8.2] Verify that adaptive detection models adjust sensitivity based on recent attack activity and are updated with new patterns in real time, and trigger risk-adaptive responses (for example disable tools, shrink context, or require HITL approval).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e28c23717d347e2481eb2dbfcac48856",
                "name": "q_c02_2_8_3",
                "title": "[2.8.3] Verify that detection accuracy is improved via contextual analysis of user history, source, and session behavior, including trace metadata (source, tool or MCP server, agent ID, session).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b817501a56be9f994133ab78378772be",
                "name": "q_c02_2_8_4",
                "title": "[2.8.4] Verify that detection performance metrics (detection rate, false positive rate, processing latency) are continuously monitored and optimized, including time-to-block and stage (pre-prompt/post-response).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C2.8 Real-Time Adaptive Threat Detection",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c02_8;
}),
"[project]/src/features/assessment/surveys/surveypages/c02.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_7.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c02/c02_8.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var tosend = {
    name: "Control 2",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c02$2f$c02_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c02JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c02JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c03/c03_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c03_1 = ()=>({
        "type": "panel",
        "name": "C3.1 Model Authorization & Integrity",
        "elements": [
            {
                "type": "radiogroup",
                "id": "ee57884d213ad4dfa2b174733e77f456",
                "name": "q_c03_3_1_1",
                "title": "[3.1.1] Verify that a model registry maintains an inventory of all deployed model artifacts and produces a machine-readable Model/AI Bill of Materials (MBOM/AIBOM) (e.g., SPDX or CycloneDX).",
                "description": "Level: 1 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "eb2725ed6622d7d67630918ebb1de31f",
                "name": "q_c03_3_1_2",
                "title": "[3.1.2] Verify that all model artifacts (weights, configurations, tokenizers, base models, fine-tunes, adapters, and safety/policy models) are cryptographically signed by authorized entities and verified at deployment admission (and on load), blocking any unsigned or tampered artifact.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "937e06587946c3e5ee6e700229bb74c9",
                "name": "q_c03_3_1_3",
                "title": "[3.1.3] Verify that lineage and dependency tracking maintains a dependency graph that enables identification of all consuming services and agents per environment (e.g., dev, staging, prod).",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f0035f1774c6a20c6a54474ca1420ac7",
                "name": "q_c03_3_1_4",
                "title": "[3.1.4] Verify that model origin integrity and trace records include an authorizing entity's identity, training data checksums, validation test results with pass/fail status, signature fingerprint/certificate chain ID, a creation timestamp, and approved deployment environments.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C3.1 Model Authorization & Integrity",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c03_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c03/c03_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c03_2 = ()=>({
        "type": "panel",
        "name": "C3.2 Model Validation & Testing",
        "elements": [
            {
                "type": "radiogroup",
                "id": "e96dbc1726330f37fcf903578ec9707b",
                "name": "q_c03_3_2_1",
                "title": "[3.2.1] Verify that models undergo automated security testing that includes input validation, output sanitization, and safety evaluations with pass/fail thresholds before deployment.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "48cb4a11fe98e23da7f5d97f86bed8dc",
                "name": "q_c03_3_2_2",
                "title": "[3.2.2] Verify that security testing covers agent workflows, tool and MCP integrations, RAG and memory interactions, multimodal inputs, and guardrails (safety models or detection services) using a versioned evaluation harness.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "45c15fd30f0ed7c694129219167b370a",
                "name": "q_c03_3_2_3",
                "title": "[3.2.3] Verify that all model changes (deployment, configuration, retirement) generate immutable audit records including a timestamp, an authenticated actor identity, a change type, and before/after states, with trace metadata (environment and consuming services/agents) and a model identifier (version/digest/signature).",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "60345bc937073565caa093048cb2fbc0",
                "name": "q_c03_3_2_4",
                "title": "[3.2.4] Verify that validation failures automatically block model deployment unless an explicit override approval from pre-designated authorized personnel with documented business justifications.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c45731314c0a881b84fd24e430fd2b23",
                "name": "q_c03_3_2_5",
                "title": "[3.2.5] Verify that models subjected to post-training quantization, pruning, or distillation are re-evaluated against the same safety and alignment test suite on the compressed artifact before deployment, and that evaluation results are retained as distinct records linked to the compressed artifact's version or digest.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C3.2 Model Validation & Testing",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c03_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c03/c03_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c03_3 = ()=>({
        "type": "panel",
        "name": "C3.3 Controlled Deployment & Rollback",
        "elements": [
            {
                "type": "radiogroup",
                "id": "793b6d358c4122aabe2496d929e41e52",
                "name": "q_c03_3_3_1",
                "title": "[3.3.1] Verify that deployment processes validate cryptographic signatures and compute integrity checksums before model activation or load, failing deployment on any mismatch.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1bfc7cb121df933e553657588253de49",
                "name": "q_c03_3_3_2",
                "title": "[3.3.2] Verify that production deployments implement gradual rollout mechanisms (e.g., canary or blue-green deployments) with automated rollback triggers based on pre-agreed error rates, latency thresholds, guardrail alerts, or tool/MCP failure rates.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5ef428b30ceacc4d4bce40a3612ac10d",
                "name": "q_c03_3_3_3",
                "title": "[3.3.3] Verify that rollback capabilities restore the complete model state (weights, configurations, dependencies including adapters and safety/policy models) atomically.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a33f41787ab73893ea5ff4bb2d64ce14",
                "name": "q_c03_3_3_4",
                "title": "[3.3.4] Verify that emergency model shutdown capabilities can disable model endpoints within a pre-defined response time.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c41f4e28bd6d446115ed44182805e76f",
                "name": "q_c03_3_3_5",
                "title": "[3.3.5] Verify that emergency shutdown cascades to all parts of the system including e.g. deactivating agent tool and MCP access, RAG connectors, database and API credentials, and memory-store bindings.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C3.3 Controlled Deployment & Rollback",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c03_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c03/c03_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c03_4 = ()=>({
        "type": "panel",
        "name": "C3.4 Secure Development Practices",
        "elements": [
            {
                "type": "radiogroup",
                "id": "d3180cbeef56f19904adca6c5913d560",
                "name": "q_c03_3_4_1",
                "title": "[3.4.1] Verify that model development, testing, and production environments are physically or logically separated. They have no shared infrastructure, distinct access controls, and isolated data stores, and agent orchestration and tool or MCP servers are also isolated.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9a99b370ed71f0e6ffc224dad6cd3d2b",
                "name": "q_c03_3_4_2",
                "title": "[3.4.2] Verify that model development artifacts (such as hyperparameters, training scripts, configuration files, prompt templates, agent policies/routing graphs, tool or MCP contracts/schemas, and action catalogs or capability allow-lists) are stored in version control and require peer review approval before use in training.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bcad06973f3efd12a22004d1db049468",
                "name": "q_c03_3_4_3",
                "title": "[3.4.3] Verify that model training and fine-tuning occur in isolated environments with controlled network access using egress allow-lists and no access to production tools or MCP resources.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "691c401a9daae84564ca804666537013",
                "name": "q_c03_3_4_4",
                "title": "[3.4.4] Verify that training data sources are validated through integrity checks and authenticated via trusted sources with documented chain of custody before use in model development, including RAG indexes, tool logs, and agent-generated data used for fine-tuning.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C3.4 Secure Development Practices",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c03_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c03/c03_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c03_5 = ()=>({
        "type": "panel",
        "name": "C3.5 Hosted and Provider-Managed Model Controls",
        "elements": [
            {
                "type": "radiogroup",
                "id": "e6ac08d43b56f32a2795606f1efde9bf",
                "name": "q_c03_3_5_1",
                "title": "[3.5.1] Verify that hosted model dependencies are inventoried with provider, endpoint, provider-exposed model identifier, version or release identifier when available, and fallback or routing relationships.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "195a428198b0764bac095468670ddc9a",
                "name": "q_c03_3_5_2",
                "title": "[3.5.2] Verify that provider model, version, or routing changes trigger security re-evaluation before continued use in high-risk workflows.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "15345c170b2dfc11b117700ce0cfe6d5",
                "name": "q_c03_3_5_3",
                "title": "[3.5.3] Verify that logs record the exact hosted model identifier returned by the provider, or explicitly record that no such identifier was exposed.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e713ae80d8fdafe4d9832d362cb5cac4",
                "name": "q_c03_3_5_4",
                "title": "[3.5.4] Verify that high-assurance deployments fail closed or require explicit approval when the provider does not expose sufficient model identity or change notification information for verification.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C3.5 Hosted and Provider-Managed Model Controls",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c03_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c03/c03_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c03_7 = ()=>({
        "type": "panel",
        "name": "C3.7 Fine-Tuning Pipeline Authorization & Reward Model Integrity",
        "elements": [
            {
                "type": "radiogroup",
                "id": "1b7240d05ecff0c74e38f4c42e7efbb6",
                "name": "q_c03_3_7_1",
                "title": "[3.7.1] Verify that initiating a fine-tuning or retraining run requires authorization from a person who did not request the run (separation of duties).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "37e6614e354ab218e39a6c674418e9ed",
                "name": "q_c03_3_7_2",
                "title": "[3.7.2] Verify that reward models used in RLHF fine-tuning are versioned, cryptographically signed, and integrity-verified before use in a training run.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3c115e82891c34ccc30d8528cc9b6d94",
                "name": "q_c03_3_7_3",
                "title": "[3.7.3] Verify that RLHF training stages include automated detection of reward hacking or reward model over-optimization (e.g., held-out human-preference probe sets, divergence thresholds, or KL penalty monitoring), with the run blocked from promotion if detection thresholds are exceeded.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f9a0b4ed96d74a0465e776c2950c9a7c",
                "name": "q_c03_3_7_4",
                "title": "[3.7.4] Verify that in multi-stage fine-tuning pipelines, each stage's output is integrity-verified before the next stage consumes it, and intermediate checkpoints are registered as distinct artifacts enabling per-stage rollback.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C3.7 Fine-Tuning Pipeline Authorization & Reward Model Integrity",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c03_7;
}),
"[project]/src/features/assessment/surveys/surveypages/c03.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c03/c03_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c03/c03_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c03/c03_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c03/c03_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c03/c03_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c03/c03_7.ts [ssr] (ecmascript)");
;
;
;
;
;
;
var tosend = {
    name: "Control 3",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c03$2f$c03_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c03JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c03JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_1 = ()=>({
        "type": "panel",
        "name": "C4.1 Runtime Environment Isolation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "81593533e732a96a08be3539b2dfde2f",
                "name": "q_c04_4_1_1",
                "title": "[4.1.1] Verify that all AI workloads run with minimal permissions needed on the operating system, by e.g. dropping unnecessary Linux capabilities in case of a container.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7a623acb12627c2bcb3b937c7f89f943",
                "name": "q_c04_4_1_2",
                "title": "[4.1.2] Verify that workloads are protected by technologies limiting exploitation such as sandboxing, seccomp profiles, AppArmor, SELinux or similar, and that the configuration is appropriate.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f97ce37bb95e4eeddae4c64843b063d8",
                "name": "q_c04_4_1_3",
                "title": "[4.1.3] Verify that workloads run with a read-only root filesystem, and that any writable mounts are explicitly defined and hardened with restrictive options that prevent execution and privilege escalation (e.g., noexec, nosuid, nodev).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1633618c7d8510858aef4caad40c2f50",
                "name": "q_c04_4_1_4",
                "title": "[4.1.4] Verify that runtime monitoring detects privilege-escalation and container-escape behaviors and automatically terminates offending processes.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f4beffc027564054df6de6c410648eec",
                "name": "q_c04_4_1_5",
                "title": "[4.1.5] Verify that high-risk AI workloads run in hardware-isolated environments (e.g., TEEs, trusted hypervisors, or bare-metal nodes) only after successful remote attestation.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.1 Runtime Environment Isolation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_2 = ()=>({
        "type": "panel",
        "name": "C4.2 Secure Build & Deployment Pipelines",
        "elements": [
            {
                "type": "radiogroup",
                "id": "c14afb6c2b7f4c56757d5a03181258e7",
                "name": "q_c04_4_2_1",
                "title": "[4.2.1] Verify that builds are completely automated and produce a software bill of materials (SBOM).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "569052be932d486bdb7848404c0bc2d9",
                "name": "q_c04_4_2_2",
                "title": "[4.2.2] Verify that build artifacts are cryptographically signed with build-origin metadata (source repository, build pipeline, commit hash) that can be independently verified.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d8a621d983f81584c25acd1e6d9fe0d8",
                "name": "q_c04_4_2_3",
                "title": "[4.2.3] Verify that build artifact signatures and build-origin metadata are validated at deployment admission, and unverified artifacts are rejected.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d782d746a576b4694e1ec61172925240",
                "name": "q_c04_4_2_4",
                "title": "[4.2.4] Verify that builds are reproducible, producing identical output from identical source inputs, enabling independent verification of build integrity.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.2 Secure Build & Deployment Pipelines",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_3 = ()=>({
        "type": "panel",
        "name": "C4.3 Network Security & Access Control",
        "elements": [
            {
                "type": "radiogroup",
                "id": "48c35d811dafe0a02d8b0195cc7a7cc4",
                "name": "q_c04_4_3_1",
                "title": "[4.3.1] Verify that network policies enforce default-deny ingress and egress, with only required services explicitly allowed.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7f93ab819b44025da74a5e58f46dfdb7",
                "name": "q_c04_4_3_2",
                "title": "[4.3.2] Verify that AI workloads across environments (development, testing, production) run in isolated network segments with no direct internet access and no shared identity roles, security groups, or cross-environment connectivity.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b95785b08c5f8884f59769281b867ef5",
                "name": "q_c04_4_3_3",
                "title": "[4.3.3] Verify that administrative and remote access protocols and access to cloud metadata services are restricted and require strong authentication.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "59bdb6a575a78eb99582324985cf3cec",
                "name": "q_c04_4_3_4",
                "title": "[4.3.4] Verify that inter-service communication uses mutual TLS with certificate validation and regular automated rotation.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "48c114acba8690e579a4beae173fe2b1",
                "name": "q_c04_4_3_5",
                "title": "[4.3.5] Verify that egress traffic is restricted to approved destinations and all requests are logged.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.3 Network Security & Access Control",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_4 = ()=>({
        "type": "panel",
        "name": "C4.4 Secrets & Cryptographic Key Management",
        "elements": [
            {
                "type": "radiogroup",
                "id": "27cc6a31d7499ce006f3aace67fd634b",
                "name": "q_c04_4_4_1",
                "title": "[4.4.1] Verify that secrets are stored in a dedicated secrets management system with encryption at rest and isolated from application workloads.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "68025bb040b2a0339b8cb724409ab888",
                "name": "q_c04_4_4_2",
                "title": "[4.4.2] Verify that access to production secrets requires strong authentication.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "cc17c5e9e27d57ab76328ddf212e8ac0",
                "name": "q_c04_4_4_3",
                "title": "[4.4.3] Verify that secrets are deployed to applications at runtime through a dedicated secrets management system. Secrets must never be embedded in source code, configuration files, build artifacts, container images, or environment variables.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3324fa6c15acd7252b70df2dac81e90e",
                "name": "q_c04_4_4_4",
                "title": "[4.4.4] Verify that cryptographic keys are generated and stored in hardware-backed modules (e.g., HSMs, cloud KMS).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "15600db215bec8b1d74ae9487fa01afa",
                "name": "q_c04_4_4_5",
                "title": "[4.4.5] Verify that secrets rotation is automated.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.4 Secrets & Cryptographic Key Management",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_5 = ()=>({
        "type": "panel",
        "name": "C4.5 AI Workload Sandboxing & Validation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "cc39a00c2f06dcdd7b14daf8b970e22e",
                "name": "q_c04_4_5_1",
                "title": "[4.5.1] Verify that external or untrusted AI models execute in isolated sandboxes.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7cba53db19c683606d95e6bca0335ede",
                "name": "q_c04_4_5_2",
                "title": "[4.5.2] Verify that sandboxed workloads have no outbound network connectivity by default, with any required access explicitly defined.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4881a7829cd6966f08169302cd2f6aca",
                "name": "q_c04_4_5_3",
                "title": "[4.5.3] Verify that workload attestation is performed before model loading, ensuring cryptographic proof that the execution environment has not been tampered with.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bd2ee396809815125cf775d3d2c46d71",
                "name": "q_c04_4_5_4",
                "title": "[4.5.4] Verify that confidential workloads execute within a trusted execution environment (TEE) that provides hardware-enforced isolation, memory encryption, and integrity protection.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ab3e3e43a194c5a752b592442f6c998d",
                "name": "q_c04_4_5_5",
                "title": "[4.5.5] Verify that confidential inference services prevent model extraction through encrypted computation with sealed model weights and protected execution.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "26502d27ea283e4e7161f102f217cfa7",
                "name": "q_c04_4_5_6",
                "title": "[4.5.6] Verify that orchestration of trusted execution environments includes lifecycle management, remote attestation, and encrypted communication channels.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1dd715ac253e2b587e3029128f5368b7",
                "name": "q_c04_4_5_7",
                "title": "[4.5.7] Verify that secure multi-party computation (SMPC) enables collaborative AI training without exposing individual datasets or model parameters.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.5 AI Workload Sandboxing & Validation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_6 = ()=>({
        "type": "panel",
        "name": "C4.6 AI Infrastructure Resource Management, Backup and Recovery",
        "elements": [
            {
                "type": "radiogroup",
                "id": "abde53dfb9ca92dff2b0dfc126e1c00c",
                "name": "q_c04_4_6_1",
                "title": "[4.6.1] Verify that workload resource consumption is limited through quotas and limits (e.g., CPU, memory, GPU) to mitigate denial-of-service attacks.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "db8b219a0ade61feeac04892d30a75f9",
                "name": "q_c04_4_6_2",
                "title": "[4.6.2] Verify that resource exhaustion triggers automated protections (e.g., rate limiting or workload isolation) once defined CPU, memory, or request thresholds are exceeded.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c0f258d40cbd6de96b672a754310c607",
                "name": "q_c04_4_6_3",
                "title": "[4.6.3] Verify that backup systems run in isolated networks with separate credentials, and the storage system is either run in an air-gapped network or implements WORM (write-once-read-many) protection against unauthorized modification.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.6 AI Infrastructure Resource Management, Backup and Recovery",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_7 = ()=>({
        "type": "panel",
        "name": "C4.7 AI Hardware Security",
        "elements": [
            {
                "type": "radiogroup",
                "id": "d976aed4d6ae28234e0c127b2196e265",
                "name": "q_c04_4_7_1",
                "title": "[4.7.1] Verify that before workload execution, AI accelerator integrity is validated using hardware-based attestation mechanisms (e.g., TPM, DRTM, or equivalent).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fd75426e46c12e6c520d6e9607740ad6",
                "name": "q_c04_4_7_2",
                "title": "[4.7.2] Verify that accelerator (GPU) memory is isolated between workloads through partitioning mechanisms with memory sanitization between jobs.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e88d7883f759293724a34b469b20a6d5",
                "name": "q_c04_4_7_3",
                "title": "[4.7.3] Verify that AI accelerator firmware is version-pinned, signed, and attested at boot; unsigned or debug firmware is blocked.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "70d17a936cc95950e7d303a795c99c9f",
                "name": "q_c04_4_7_4",
                "title": "[4.7.4] Verify that VRAM and on-package memory are zeroed between jobs/tenants and that device reset policies prevent cross-tenant data remanence.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f36a94c0350618d1cc4e753a6112cbe0",
                "name": "q_c04_4_7_5",
                "title": "[4.7.5] Verify that partitioning/isolation features (e.g., MIG/VM partitioning) are enforced per tenant and prevent peer-to-peer memory access across partitions.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c59dae5fb30afb8080d7b363619a99e3",
                "name": "q_c04_4_7_6",
                "title": "[4.7.6] Verify that hardware security modules (HSMs) or equivalent tamper-resistant hardware protect AI model weights and cryptographic keys, with certification to an appropriate assurance level (e.g., FIPS 140-3 Level 3 or Common Criteria EAL4+).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f3f5fb5469c290a6c958fb0a33c4191c",
                "name": "q_c04_4_7_7",
                "title": "[4.7.7] Verify that accelerator interconnects (NVLink/PCIe/InfiniBand/RDMA/NCCL) are restricted to approved topologies and authenticated endpoints; plaintext cross-tenant links are disallowed.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9769e786039950d1addd7d7a4d96ac7e",
                "name": "q_c04_4_7_8",
                "title": "[4.7.8] Verify that accelerator telemetry (power draw, temperature, error correction, performance counters) is exported to centralized security monitoring and alerts on anomalies indicative of side-channels or covert channels.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.7 AI Hardware Security",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_7;
}),
"[project]/src/features/assessment/surveys/surveypanels/c04/c04_8.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c04_8 = ()=>({
        "type": "panel",
        "name": "C4.8 Edge & Distributed AI Security",
        "elements": [
            {
                "type": "radiogroup",
                "id": "777b1e27d7c0bb6fa0db04be7206da25",
                "name": "q_c04_4_8_1",
                "title": "[4.8.1] Verify that edge AI devices authenticate to central infrastructure using mutual authentication with certificate validation (e.g., mutual TLS).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ffca403bd829ab2de74ad24991543f33",
                "name": "q_c04_4_8_2",
                "title": "[4.8.2] Verify that models deployed to edge or mobile devices are cryptographically signed during packaging, and that the on-device runtime validates these signatures or checksums before loading or inference; unverified or altered models must be rejected.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1902132a51f5e044371d410f8f604041",
                "name": "q_c04_4_8_3",
                "title": "[4.8.3] Verify that edge devices implement secure boot with verified signatures and rollback protection to prevent firmware downgrade attacks.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3f5660bc871aab02d02020a2843f3151",
                "name": "q_c04_4_8_4",
                "title": "[4.8.4] Verify that mobile or edge inference applications implement platform-level anti-tampering protections (e.g., code signing, verified boot, runtime integrity checks) that detect and block modified binaries, repackaged applications, or attached instrumentation frameworks.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "63bce39cb9f2d62ca03412eec4138a56",
                "name": "q_c04_4_8_5",
                "title": "[4.8.5] Verify that distributed AI coordination uses Byzantine fault-tolerant consensus mechanisms with participant validation and malicious node detection.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2d42e4b75a2fe44cb6023187b39ef7df",
                "name": "q_c04_4_8_6",
                "title": "[4.8.6] Verify that edge-to-cloud communication supports bandwidth throttling, data compression, and secure offline operation with encrypted local storage.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8196f3cfeeaa1c41c4db0c340626e1e0",
                "name": "q_c04_4_8_7",
                "title": "[4.8.7] Verify that on-device inference runtimes enforce process, memory, and file access isolation to prevent model dumping, debugging, or extraction of intermediate embeddings and activations.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "74c0d1bebc2c280385d981065ccb7f21",
                "name": "q_c04_4_8_8",
                "title": "[4.8.8] Verify that model weights and sensitive parameters stored locally are encrypted using hardware-backed key stores or secure enclaves (e.g., Android Keystore, iOS Secure Enclave, TPM/TEE), with keys inaccessible to user space.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "24143e7fb56ccf2af6e6bf32c1ef4997",
                "name": "q_c04_4_8_9",
                "title": "[4.8.9] Verify that models packaged within mobile, IoT, or embedded applications are encrypted or obfuscated at rest, and decrypted only inside a trusted runtime or secure enclave, preventing direct extraction from the app package or filesystem.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C4.8 Edge & Distributed AI Security",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c04_8;
}),
"[project]/src/features/assessment/surveys/surveypages/c04.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_7.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c04/c04_8.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var tosend = {
    name: "Control 4",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c04$2f$c04_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c04JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c04JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c05/c05_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c05_1 = ()=>({
        "type": "panel",
        "name": "C5.1 Identity Management & Authentication",
        "elements": [
            {
                "type": "radiogroup",
                "id": "7762e0592f9ab359f7cdb8911c502a29",
                "name": "q_c05_5_1_1",
                "title": "[5.1.1] Verify that all human users and service principals authenticate through a centralized identity provider using industry-standard federation protocols (e.g., OIDC, SAML).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7e0b562ab588f4bc05923b80a49d0d23",
                "name": "q_c05_5_1_2",
                "title": "[5.1.2] Verify that high-risk operations (model deployment, weight export, training data access, production configuration changes) require multi-factor authentication or step-up authentication with session re-validation.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4b33155a998fc448ec506b98cc72defd",
                "name": "q_c05_5_1_3",
                "title": "[5.1.3] Verify that AI agents in federated or multi-system deployments authenticate via short-lived, cryptographically signed authentication tokens (e.g., signed JWT assertions) with a maximum lifetime appropriate to the risk level and including cryptographic proof of origin.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C5.1 Identity Management & Authentication",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c05_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c05/c05_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c05_2 = ()=>({
        "type": "panel",
        "name": "C5.2 Authorization & Policy",
        "elements": [
            {
                "type": "radiogroup",
                "id": "309a90af6709cfcd2e8032245f893eff",
                "name": "q_c05_5_2_1",
                "title": "[5.2.1] Verify that every AI resource (datasets, models, endpoints, vector collections, embedding indices, compute instances) enforces access controls (e.g., RBAC, ABAC) with explicit allow-lists and default-deny policies.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b87ffecdff66d92c611cdf24cda297da",
                "name": "q_c05_5_2_2",
                "title": "[5.2.2] Verify that all access control modifications are logged with timestamps, actor identities, resource identifiers, and permission changes.",
                "description": "Level: 1 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4f97404ee238aabc56eb6ac3bbc6d755",
                "name": "q_c05_5_2_3",
                "title": "[5.2.3] Verify that access control audit logs are stored immutably and are tamper-evident.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f619ff2f7c62998d990de769e237a05d",
                "name": "q_c05_5_2_4",
                "title": "[5.2.4] Verify that data classification labels (PII, PHI, proprietary, etc.) automatically propagate to derived resources (embeddings, prompt caches, model outputs).",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1c69f844ceaa07bd3e41caef68e35e08",
                "name": "q_c05_5_2_5",
                "title": "[5.2.5] Verify that unauthorized access attempts and privilege escalation events trigger real-time alerts with contextual metadata.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e98e88718e685182f7382712fd3423b1",
                "name": "q_c05_5_2_6",
                "title": "[5.2.6] Verify that authorization decisions are externalized to a dedicated policy decision point (e.g., OPA, Cedar, or equivalent).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7d8b666026f7d0cc633cbae5c131b4e9",
                "name": "q_c05_5_2_7",
                "title": "[5.2.7] Verify that policies evaluate dynamic attributes at runtime including user role or group, resource classification, request context, tenant isolation, and temporal constraints.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "6d664337a0a3ea996068f0007c4e634a",
                "name": "q_c05_5_2_8",
                "title": "[5.2.8] Verify that policy cache TTL values are defined based on resource sensitivity, with shorter TTLs for high-sensitivity resources, and that cache invalidation capabilities are available.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C5.2 Authorization & Policy",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c05_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c05/c05_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c05_3 = ()=>({
        "type": "panel",
        "name": "C5.3 Query-Time Security Enforcement",
        "elements": [
            {
                "type": "radiogroup",
                "id": "04887a80adb68417577ec7e23a6c7fb5",
                "name": "q_c05_5_3_1",
                "title": "[5.3.1] Verify that all data store queries (e.g., vector databases, SQL databases, search indices) include mandatory security filters (tenant ID, sensitivity labels, user scope) enforced at the data access layer.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c0be989f307f1508018b13eace32a1ca",
                "name": "q_c05_5_3_2",
                "title": "[5.3.2] Verify that failed authorization evaluations immediately abort queries and return explicit authorization error codes.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e1300b04cdaa4edbb78249497d5ca827",
                "name": "q_c05_5_3_3",
                "title": "[5.3.3] Verify that row-level security policies and field-level masking are enabled with policy inheritance for all data stores containing sensitive data used by AI systems.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bbcf0876505dc27a720d960637afc669",
                "name": "q_c05_5_3_4",
                "title": "[5.3.4] Verify that query retry mechanisms re-evaluate authorization policies to account for dynamic permission changes within active sessions.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C5.3 Query-Time Security Enforcement",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c05_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c05/c05_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c05_4 = ()=>({
        "type": "panel",
        "name": "C5.4 Output Filtering & Data Loss Prevention",
        "elements": [
            {
                "type": "radiogroup",
                "id": "89b82f758e7f6f71c87a718625b4e1a1",
                "name": "q_c05_5_4_1",
                "title": "[5.4.1] Verify that post-inference filtering mechanisms prevent responses from including classified information or proprietary data that the requestor is not authorized to receive.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "300efa16c362574766b665197fbce709",
                "name": "q_c05_5_4_2",
                "title": "[5.4.2] Verify that citations, references, and source attributions in model outputs are validated against caller entitlements and removed if unauthorized access is detected.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f03d5f43259525dbf1b36b007793b62c",
                "name": "q_c05_5_4_3",
                "title": "[5.4.3] Verify that output format restrictions (sanitized documents, metadata-stripped images, approved file types) are enforced based on user permission levels and data classifications.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C5.4 Output Filtering & Data Loss Prevention",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c05_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c05/c05_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c05_5 = ()=>({
        "type": "panel",
        "name": "C5.5 Multi-Tenant Isolation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "29e6896d10c77b8ebe05c7685d192411",
                "name": "q_c05_5_5_1",
                "title": "[5.5.1] Verify that network policies implement default-deny rules for cross-tenant communication.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "22fde766e002a5f4c837aacce0ea95d2",
                "name": "q_c05_5_5_2",
                "title": "[5.5.2] Verify that every API request includes an authenticated tenant identifier that is cryptographically validated against session context and user entitlements.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "0da34f8188054d65b5213cebd3e53a25",
                "name": "q_c05_5_5_3",
                "title": "[5.5.3] Verify that memory spaces, embedding stores, cache entries (e.g., result caches, embedding caches), and temporary files are namespace-segregated per tenant with secure purging on tenant deletion or session termination.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c5c837e6a137c43db60564497ebdaf6d",
                "name": "q_c05_5_5_4",
                "title": "[5.5.4] Verify that encryption keys are unique per tenant with customer-managed key (CMK) support and cryptographic isolation between tenant data stores.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "35225342f9b7497140deaf28e648ad0f",
                "name": "q_c05_5_5_5",
                "title": "[5.5.5] Verify that inference-time KV-cache entries are partitioned by authenticated session or tenant identity and that automatic prefix caching does not share cached prefixes across distinct security principals, to prevent timing-based prompt reconstruction attacks.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C5.5 Multi-Tenant Isolation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c05_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c05/c05_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c05_6 = ()=>({
        "type": "panel",
        "name": "C5.6 Autonomous Agent Authorization",
        "elements": [
            {
                "type": "radiogroup",
                "id": "a3bf1e61a882976073b005ac96f4659c",
                "name": "q_c05_5_6_1",
                "title": "[5.6.1] Verify that autonomous agents receive scoped capability tokens that explicitly enumerate permitted actions, accessible resources, time boundaries, and operational constraints.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "04521746c0888db2353db91a82e62d04",
                "name": "q_c05_5_6_2",
                "title": "[5.6.2] Verify that high-risk capabilities (file system access, code execution, external API calls, financial transactions) are disabled by default and require explicit authorization.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "89dfbd1b807eb45cc2d0395a65c6ee6d",
                "name": "q_c05_5_6_3",
                "title": "[5.6.3] Verify that capability tokens are bound to user sessions, include cryptographic integrity protection, and cannot be persisted or reused across sessions.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "dc601ac538830d24373c0ee212efe3c8",
                "name": "q_c05_5_6_4",
                "title": "[5.6.4] Verify that agent-initiated actions undergo authorization through a policy decision point that evaluates contextual attributes (e.g., user identity, resource sensitivity, action type, environmental context).",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C5.6 Autonomous Agent Authorization",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c05_6;
}),
"[project]/src/features/assessment/surveys/surveypages/c05.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c05/c05_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c05/c05_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c05/c05_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c05/c05_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c05/c05_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c05/c05_6.ts [ssr] (ecmascript)");
;
;
;
;
;
;
var tosend = {
    name: "Control 5",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c05$2f$c05_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c05JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c05JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_1 = ()=>({
        "type": "panel",
        "name": "C6.1 Pretrained Model Vetting & Origin Integrity",
        "elements": [
            {
                "type": "radiogroup",
                "id": "f80c78fb38a080def3855b976e465681",
                "name": "q_c06_6_1_1",
                "title": "[6.1.1] Verify that every third-party model artifact includes a signed origin-and-integrity record identifying its source, version, and integrity checksum.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7f0894882d5679989fe2b80ea266ed73",
                "name": "q_c06_6_1_2",
                "title": "[6.1.2] Verify that models are scanned for malicious layers or Trojan triggers using automated tools before import.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f94b4006570dfa9a856116092a8851ce",
                "name": "q_c06_6_1_3",
                "title": "[6.1.3] Verify that model licenses, export-control tags, and data-origin statements are recorded in an AI BOM entry.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "dc4479416ebe6bf3bef6f91f03fe16a8",
                "name": "q_c06_6_1_4",
                "title": "[6.1.4] Verify that high-risk models (e.g., publicly uploaded weights, unverified creators) remain quarantined until human review and sign-off.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5a2deaa83dc2e7cd5afef1c56aea3ac7",
                "name": "q_c06_6_1_5",
                "title": "[6.1.5] Verify that transfer-learning fine-tunes pass adversarial evaluation to detect hidden behaviors.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "81d08fafd2092da4732a573473b616ef",
                "name": "q_c06_6_1_6",
                "title": "[6.1.6] Verify that third-party or open-source models pass a defined behavioral acceptance test suite (covering safety, alignment, and capability boundaries relevant to the deployment context) before being imported or promoted to any non-development environment.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.1 Pretrained Model Vetting & Origin Integrity",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_2 = ()=>({
        "type": "panel",
        "name": "C6.2 Framework & Library Scanning",
        "elements": [
            {
                "type": "radiogroup",
                "id": "3f2920f5446c099a1c4eacdbfb395f8d",
                "name": "q_c06_6_2_1",
                "title": "[6.2.1] Verify that CI pipelines run dependency scanners on AI frameworks and critical libraries.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "98e3d10d9db5b517b2ed19a750b3fb95",
                "name": "q_c06_6_2_2",
                "title": "[6.2.2] Verify that critical and high-severity vulnerabilities block promotion to production images.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "de8d6ca420aeac388ff171357b1a6a5e",
                "name": "q_c06_6_2_3",
                "title": "[6.2.3] Verify that static code analysis runs on forked or vendored AI libraries.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "04bd372a2d50e548918cbe4a707441da",
                "name": "q_c06_6_2_4",
                "title": "[6.2.4] Verify that framework upgrade proposals include a security impact assessment referencing public vulnerability feeds.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fd881c53b5a43b690783e6aae56859c3",
                "name": "q_c06_6_2_5",
                "title": "[6.2.5] Verify that runtime sensors alert on unexpected dynamic library loads that deviate from the signed SBOM.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.2 Framework & Library Scanning",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_3 = ()=>({
        "type": "panel",
        "name": "C6.3 Dependency Pinning & Verification",
        "elements": [
            {
                "type": "radiogroup",
                "id": "31d1d85b707d8c644c0962177a627a79",
                "name": "q_c06_6_3_1",
                "title": "[6.3.1] Verify that all package managers enforce version pinning via lockfiles.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bab2922bd3d02e8b69e0cd8fc0e2ca01",
                "name": "q_c06_6_3_2",
                "title": "[6.3.2] Verify that immutable digests are used instead of mutable tags in container references.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9a94ed7796df703838cd3b60d377fbd3",
                "name": "q_c06_6_3_3",
                "title": "[6.3.3] Verify that expired or unmaintained dependencies trigger automated notifications to update or replace pinned versions.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "94411cf872f6e31b08a503772f89ffb1",
                "name": "q_c06_6_3_4",
                "title": "[6.3.4] Verify that build attestations are retained for a period defined by organizational policy for audit traceability.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d42b2e1b732f54e5f75f55d939ed3fb1",
                "name": "q_c06_6_3_5",
                "title": "[6.3.5] Verify that reproducible-build checks compare hashes across CI runs to ensure identical outputs.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.3 Dependency Pinning & Verification",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_4 = ()=>({
        "type": "panel",
        "name": "C6.4 Trusted Source Enforcement",
        "elements": [
            {
                "type": "radiogroup",
                "id": "2d24b57265f444c4f4c55d1ee848f26e",
                "name": "q_c06_6_4_1",
                "title": "[6.4.1] Verify that model weights, datasets, and containers are downloaded only from approved sources or internal registries.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2f263445018ca860517189d5139f858d",
                "name": "q_c06_6_4_2",
                "title": "[6.4.2] Verify that cryptographic signatures validate publisher identity before artifacts are cached locally.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8a799805ca214f14e8b64dcdd536ea63",
                "name": "q_c06_6_4_3",
                "title": "[6.4.3] Verify that egress controls block unauthenticated artifact downloads to enforce trusted-source policy.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "284d1d25aed021e1afb40310997bc43c",
                "name": "q_c06_6_4_4",
                "title": "[6.4.4] Verify that repository allow-lists are reviewed periodically with evidence of business justification for each entry.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "162c56a2b56ac197fd8f43aa4d8e8151",
                "name": "q_c06_6_4_5",
                "title": "[6.4.5] Verify that policy violations trigger quarantining of artifacts and rollback of dependent pipeline runs.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.4 Trusted Source Enforcement",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_5 = ()=>({
        "type": "panel",
        "name": "C6.5 Third-Party Dataset Risk Assessment",
        "elements": [
            {
                "type": "radiogroup",
                "id": "0ef045f8acacd576c917172d54c86de4",
                "name": "q_c06_6_5_1",
                "title": "[6.5.1] Verify that external datasets undergo poisoning risk assessment (e.g., data fingerprinting, outlier detection).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9ade51075868d0031ef1b5ee0fd73ab9",
                "name": "q_c06_6_5_2",
                "title": "[6.5.2] Verify that disallowed content (e.g., copyrighted material, PII) is detected and removed via automated scrubbing prior to training.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "81fd4aa7dceb6d843abed97aaa23a95f",
                "name": "q_c06_6_5_3",
                "title": "[6.5.3] Verify that origin, lineage, and license terms for datasets are captured in AI BOM entries.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4f0be3c023a42b2ef37e2612d2e69300",
                "name": "q_c06_6_5_4",
                "title": "[6.5.4] Verify that bias metrics (e.g., demographic parity, equal opportunity) are calculated before dataset approval.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c3f87e1df941b9447df48f1d7e5ba64e",
                "name": "q_c06_6_5_5",
                "title": "[6.5.5] Verify that periodic monitoring detects drift or corruption in hosted datasets.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.5 Third-Party Dataset Risk Assessment",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_6 = ()=>({
        "type": "panel",
        "name": "C6.6 Supply Chain Attack Monitoring",
        "elements": [
            {
                "type": "radiogroup",
                "id": "0e47471cdf73cfb175589ec6b467d4f9",
                "name": "q_c06_6_6_1",
                "title": "[6.6.1] Verify that incident response playbooks include rollback procedures for compromised models or libraries.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2af33a04692f27b9c3d1cef008377ea5",
                "name": "q_c06_6_6_2",
                "title": "[6.6.2] Verify that CI/CD audit logs are streamed to centralized security monitoring with detections for anomalous package pulls or tampered build steps.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e9ca7b8f2fbda41ab80391fec4a2ae0f",
                "name": "q_c06_6_6_3",
                "title": "[6.6.3] Verify that threat-intelligence enrichment tags AI-specific indicators (e.g., model-poisoning indicators of compromise) in alert triage.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.6 Supply Chain Attack Monitoring",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c06/c06_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c06_7 = ()=>({
        "type": "panel",
        "name": "C6.7 AI BOM for Model Artifacts",
        "elements": [
            {
                "type": "radiogroup",
                "id": "bb1ff37eb47cc83a98fcb949da819bca",
                "name": "q_c06_6_7_1",
                "title": "[6.7.1] Verify that every model artifact publishes an AI BOM that lists datasets, weights, hyperparameters, and licenses.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "192405bb5ccfb941d3e3756770fb193b",
                "name": "q_c06_6_7_2",
                "title": "[6.7.2] Verify that AI BOM generation and cryptographic signing are automated in CI and required for merge.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f25fe0237bdf67647790cf8fa0f51954",
                "name": "q_c06_6_7_3",
                "title": "[6.7.3] Verify that AI BOM completeness checks fail the build if any component metadata (hash and license) is missing.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fd47c8f39a31bad6b66ab73900966fb2",
                "name": "q_c06_6_7_4",
                "title": "[6.7.4] Verify that downstream consumers can query AI BOMs via API to validate imported models at deploy time.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "72d4c839a391e1c57ae6f666c881085f",
                "name": "q_c06_6_7_5",
                "title": "[6.7.5] Verify that AI BOMs are version-controlled and diffed to detect unauthorized modifications.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C6.7 AI BOM for Model Artifacts",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c06_7;
}),
"[project]/src/features/assessment/surveys/surveypages/c06.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c06/c06_7.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
var tosend = {
    name: "Control 6",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c06$2f$c06_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c06JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c06JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_1 = ()=>({
        "type": "panel",
        "name": "C7.1 Output Format Enforcement",
        "elements": [
            {
                "type": "radiogroup",
                "id": "dd3693a437ec99d06abb4cbfac5a961e",
                "name": "q_c07_7_1_1",
                "title": "[7.1.1] Verify that the application validates all model outputs against a strict schema (like JSON Schema) and rejects any output that does not match.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "cb4270b4aab16e6d4cfc231dd80e4c7b",
                "name": "q_c07_7_1_2",
                "title": "[7.1.2] Verify that the system uses \"stop sequences\" or token limits to strictly cut off generation before it can overflow buffers or executes unintended commands.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "39490c10ec2c93ae9819b1951acf47ea",
                "name": "q_c07_7_1_3",
                "title": "[7.1.3] Verify that components processing model output treat it as untrusted input (e.g., using parameterized queries or safe de-serializers).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e41376e092922e624da4de54a034f79e",
                "name": "q_c07_7_1_4",
                "title": "[7.1.4] Verify that the system logs the specific error type when an output is rejected for bad formatting.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.1 Output Format Enforcement",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_2 = ()=>({
        "type": "panel",
        "name": "C7.2 Hallucination Detection & Mitigation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "cb07061aca8a7bf594649455b6e7505d",
                "name": "q_c07_7_2_1",
                "title": "[7.2.1] Verify that the system assesses the reliability of generated answers using a confidence or uncertainty estimation method (e.g., confidence scoring, retrieval-based verification, or model uncertainty estimation).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2b0b0584bf7bf00db9dffaefc2ba5c96",
                "name": "q_c07_7_2_2",
                "title": "[7.2.2] Verify that the application automatically blocks answers or switches to a fallback message if the confidence score drops below a defined threshold.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "0a0dfcb2b4d1aa65e7885606439d0af1",
                "name": "q_c07_7_2_3",
                "title": "[7.2.3] Verify that hallucination events (low-confidence responses) are logged with input/output metadata for analysis.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f59a6c4862dd0234352adc3b2d953135",
                "name": "q_c07_7_2_4",
                "title": "[7.2.4] Verify that for responses classified as high-risk or high-impact by policy, the system performs an additional verification step through an independent mechanism, such as retrieval-based grounding against authoritative sources, deterministic rule-based validation, tool-based fact-checking, or consensus review by a separately provisioned model.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d7fd8cdc59ecf21f4b450b1832474842",
                "name": "q_c07_7_2_5",
                "title": "[7.2.5] Verify that the system tracks tool and function invocation history within a request chain and flags high-confidence factual assertions that were not preceded by relevant verification tool usage, as a practical hallucination detection signal independent of confidence scoring.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.2 Hallucination Detection & Mitigation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_3 = ()=>({
        "type": "panel",
        "name": "C7.3 Output Safety & Privacy Filtering",
        "elements": [
            {
                "type": "radiogroup",
                "id": "6327207c9dacfe9b0eadbcfa46dacb49",
                "name": "q_c07_7_3_1",
                "title": "[7.3.1] Verify that automated classifiers scan every response and block content that matches hate, harassment, or sexual violence categories.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "86db331874bf67415ef09d51edb38b0f",
                "name": "q_c07_7_3_2",
                "title": "[7.3.2] Verify that the system scans every response for PII (like credit cards or emails) and automatically redacts it before display.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "60a6715f3c15c5d18c765d6f6f408415",
                "name": "q_c07_7_3_3",
                "title": "[7.3.3] Verify that PII detection and redaction events are logged without including the redacted PII values themselves, to maintain an audit trail without creating secondary PII exposure.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e0d26a3cb07d20fc07a33a9b3d41dc56",
                "name": "q_c07_7_3_4",
                "title": "[7.3.4] Verify that data labeled as \"confidential\" in the system remains blocked or redacted.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "de242be8e94d7cb9cab5e164b1e3e962",
                "name": "q_c07_7_3_5",
                "title": "[7.3.5] Verify that safety filters can be configured differently based on the user's role or location (e.g., stricter filters for minors) as appropriate.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bcda2ab54583348167f1052fd3340d67",
                "name": "q_c07_7_3_6",
                "title": "[7.3.6] Verify that the system requires a human approval step or re-authentication if the model generates high-risk content.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "70a1b5ac58c0f8937e8c3a023b445d9a",
                "name": "q_c07_7_3_7",
                "title": "[7.3.7] Verify that output filters detect and block responses that reproduce verbatim segments of system prompt content.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "da1ba99987e831bc80f1afe0a69f3471",
                "name": "q_c07_7_3_8",
                "title": "[7.3.8] Verify that LLM client applications prevent model-generated output from triggering automatic outbound requests (e.g., auto-rendered images, iframes, or link prefetching) to attacker-controlled endpoints, for example by disabling automatic external resource loading or restricting it to explicitly allowlisted origins as appropriate.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.3 Output Safety & Privacy Filtering",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_4 = ()=>({
        "type": "panel",
        "name": "C7.4 Output & Action Limiting",
        "elements": [
            {
                "type": "radiogroup",
                "id": "84d4b5f66fc6c47562ee1c72cbc96db1",
                "name": "q_c07_7_4_1",
                "title": "[7.4.1] Verify that the system enforces hard limits on requests and tokens per user to prevent cost spikes and denial of service.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9cb48ef70038a11ec34c3df7bdeed7dd",
                "name": "q_c07_7_4_2",
                "title": "[7.4.2] Verify that the model cannot execute high-impact actions (like writing files, sending emails, or executing code) without explicit user confirmation.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d6ece4ae28192d822c169a657db986f4",
                "name": "q_c07_7_4_3",
                "title": "[7.4.3] Verify that the application or orchestration framework explicitly configures and enforces the maximum depth of recursive calls, delegation limits, and the list of allowed external tools.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.4 Output & Action Limiting",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_5 = ()=>({
        "type": "panel",
        "name": "C7.5 Explainability & Transparency",
        "elements": [
            {
                "type": "radiogroup",
                "id": "9bc4b89be308c72e63b5b0262b09127a",
                "name": "q_c07_7_5_1",
                "title": "[7.5.1] Verify that explanations provided to the user are sanitized to remove system prompts or backend data.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1795e0493fef61d05fa19d8227301965",
                "name": "q_c07_7_5_2",
                "title": "[7.5.2] Verify that the UI displays a confidence score or \"reasoning summary\" to the user for critical decisions.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "75da0a93ab7e6578997187ea9e0f25e2",
                "name": "q_c07_7_5_3",
                "title": "[7.5.3] Verify that technical evidence of the model's decision, such as model interpretability artifacts (e.g., attention maps, feature attributions), are logged.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.5 Explainability & Transparency",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_6 = ()=>({
        "type": "panel",
        "name": "C7.6 Monitoring Integration",
        "elements": [
            {
                "type": "radiogroup",
                "id": "a18fbadf9159da9b2831cefd606b7c4e",
                "name": "q_c07_7_6_1",
                "title": "[7.6.1] Verify that the system logs real-time metrics for safety violations (e.g., \"Hallucination Detected\", \"PII Blocked\").",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "092357cc4712a31e798b28b8b7d0b503",
                "name": "q_c07_7_6_2",
                "title": "[7.6.2] Verify that the system triggers an alert if safety violation rates exceed a defined threshold within a specific time window.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "353a128826ee45015c22dde5e914f698",
                "name": "q_c07_7_6_3",
                "title": "[7.6.3] Verify that logs include the specific model version and other details necessary to investigate potential abuse.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.6 Monitoring Integration",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_7 = ()=>({
        "type": "panel",
        "name": "C7.7 Generative Media Safeguards",
        "elements": [
            {
                "type": "radiogroup",
                "id": "3a15ef2f61da8bc8c6868f2ae7b565c2",
                "name": "q_c07_7_7_1",
                "title": "[7.7.1] Verify that input filters block prompts requesting explicit or non-consensual synthetic content before the model processes them.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ba06cfe880bcb62cbafcb6b421a3aaea",
                "name": "q_c07_7_7_2",
                "title": "[7.7.2] Verify that the system refuses to generate media (images/audio) that depicts real people without verified consent.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "444a1ff163444e1c80d5c273b6dba19a",
                "name": "q_c07_7_7_3",
                "title": "[7.7.3] Verify that the system checks generated content for copyright violations before releasing it.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e8f6705d01b40f79501df3b83a4aa565",
                "name": "q_c07_7_7_4",
                "title": "[7.7.4] Verify that attempts to bypass filters are detected and logged as security events.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "60b5190fe8f73348921c0fb5d7eee729",
                "name": "q_c07_7_7_5",
                "title": "[7.7.5] Verify that all generated media includes an invisible watermark or cryptographic signature to prove it was AI-generated.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.7 Generative Media Safeguards",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_7;
}),
"[project]/src/features/assessment/surveys/surveypanels/c07/c07_8.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c07_8 = ()=>({
        "type": "panel",
        "name": "C7.8 Source Attribution & Citation Integrity",
        "elements": [
            {
                "type": "radiogroup",
                "id": "d3403cf78f0a097c8b47ce21a11b1ffb",
                "name": "q_c07_7_8_1",
                "title": "[7.8.1] Verify that responses generated using retrieval-augmented generation (RAG) include attribution to the source documents that grounded the response, and that attributions are derived from retrieval metadata rather than generated by the model.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2816aadf408fa28d75f3b21a38a0d5e6",
                "name": "q_c07_7_8_2",
                "title": "[7.8.2] Verify that each sourced claim in a RAG-grounded response can be traced to a specific retrieved chunk, and that the system detects and flags responses where claims are not supported by any retrieved content before the response is served.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C7.8 Source Attribution & Citation Integrity",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c07_8;
}),
"[project]/src/features/assessment/surveys/surveypages/c07.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_7.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c07/c07_8.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var tosend = {
    name: "Control 7",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c07$2f$c07_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c07JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c07JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c08/c08_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c08_1 = ()=>({
        "type": "panel",
        "name": "C8.1 Access Controls on Memory & RAG Indices",
        "elements": [
            {
                "type": "radiogroup",
                "id": "0e9ed831576fc087855d1bf0450baf1b",
                "name": "q_c08_8_1_1",
                "title": "[8.1.1] Verify that vector insert, update, delete, and query operations are enforced with namespace/collection/document-tag scope controls (e.g., tenant ID, user ID, data classification labels) with default-deny.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "85bce2e47e0b154ab8adc0d1f0bc5bcf",
                "name": "q_c08_8_1_2",
                "title": "[8.1.2] Verify that API credentials used for vector operations carry scoped claims (e.g., permitted collections, allowed verbs, tenant binding).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8422e2e018825f69966b4bfb09f340b5",
                "name": "q_c08_8_1_3",
                "title": "[8.1.3] Verify that cross-scope access attempts (e.g., cross-tenant similarity queries, namespace traversal, tag bypass) are detected and rejected.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3bc9f1f7325de1ded3353af6142d85b4",
                "name": "q_c08_8_1_4",
                "title": "[8.1.4] Verify that every ingested document is tagged at write time with source, writer identity (authenticated user or system principal), timestamp, batch ID, and embedding model version, and that these tags are immutable after initial write.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "475aed5218c6182628b332e5960ae19f",
                "name": "q_c08_8_1_5",
                "title": "[8.1.5] Verify that RAG pipeline retrieval events log the query issued, the documents or chunks retrieved, similarity scores, the knowledge source, and whether retrieved content passed prompt injection scanning before being incorporated into model context.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d6c3594eeb74c997776cf6c7741484f2",
                "name": "q_c08_8_1_6",
                "title": "[8.1.6] Verify that retrieval anomaly detection identifies embedding density outliers, repeated dominance of specific documents in similarity results, and sudden shifts in retrieval bias distribution that may indicate vector database poisoning.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C8.1 Access Controls on Memory & RAG Indices",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c08_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c08/c08_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c08_2 = ()=>({
        "type": "panel",
        "name": "C8.2 Embedding Sanitization & Validation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "90ca0d60669f43f77cec765239d99fd2",
                "name": "q_c08_8_2_1",
                "title": "[8.2.1] Verify that regulated data and sensitive fields are detected prior to embedding and are masked, tokenized, transformed, or dropped based on policy.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b0884f24ad9c3ae68688a765541727dc",
                "name": "q_c08_8_2_2",
                "title": "[8.2.2] Verify that embedding ingestion rejects or quarantines inputs that violate required content constraints (e.g., non-UTF-8, malformed encodings, oversized payloads, invisible Unicode characters, or executable content intended to poison retrieval).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ee7395b699e144472b0f909c7873b799",
                "name": "q_c08_8_2_3",
                "title": "[8.2.3] Verify that vectors that fall outside normal clustering patterns are flagged and quarantined before entering production indices.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5328d31946e2ebe4182b4d2643f48425",
                "name": "q_c08_8_2_4",
                "title": "[8.2.4] Verify that an agent's own outputs are not automatically written back into its trusted memory without explicit validation (such as content-origin checks or write-authorization controls that verify the content's source before committing writes).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "510612b56d7ec0cda0219452839c709b",
                "name": "q_c08_8_2_5",
                "title": "[8.2.5] Verify that new content written to memory is checked for contradictions with what is already stored and that conflicts trigger alerts.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C8.2 Embedding Sanitization & Validation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c08_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c08/c08_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c08_3 = ()=>({
        "type": "panel",
        "name": "C8.3 Memory Expiry, Revocation & Deletion",
        "elements": [
            {
                "type": "radiogroup",
                "id": "3bd6b9dc49cd0bdec3aeb961c08e790a",
                "name": "q_c08_8_3_1",
                "title": "[8.3.1] Verify that retention times are applied to every stored vector and related metadata across memory storage.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5fc7bc3533b45d0aa82145d023255274",
                "name": "q_c08_8_3_2",
                "title": "[8.3.2] Verify that only information required for the system's defined function is persisted in memory (such as user preferences and conversation decisions, not credentials or full conversation transcripts), and that context not needed beyond the current session is discarded at session end.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f25db365b23efb1d9e76e603edf65cc0",
                "name": "q_c08_8_3_3",
                "title": "[8.3.3] Verify that deletion requests purge vectors, metadata, cache copies, and derivative indices within an organization-defined maximum time.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "29bd1d2715f3270cf800e3d18c811023",
                "name": "q_c08_8_3_4",
                "title": "[8.3.4] Verify that deleted or expired vectors are removed reliably and are unrecoverable.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d156aaf56f3e0de1e76d55ffcfab8659",
                "name": "q_c08_8_3_5",
                "title": "[8.3.5] Verify that expired vectors are excluded from retrieval results within a measured and monitored propagation window.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "accc3953f5ac9f558a3c6ffb3d1eda22",
                "name": "q_c08_8_3_6",
                "title": "[8.3.6] Verify that memory can be reset for security reasons (quarantine, selective purge, full reset) separately from retention deletion, and that quarantined content is kept for investigation but excluded from retrieval.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C8.3 Memory Expiry, Revocation & Deletion",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c08_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c08/c08_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c08_4 = ()=>({
        "type": "panel",
        "name": "C8.4 Prevent Embedding Inversion & Leakage",
        "elements": [
            {
                "type": "radiogroup",
                "id": "79aa094166c4e2e3c1e15e5d8cab6295",
                "name": "q_c08_8_4_1",
                "title": "[8.4.1] Verify that sensitive vector collections are protected against direct read access by infrastructure administrators via technical controls such as application-layer encryption, envelope encryption with strict KMS policies, or equivalent compensating controls.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "6edb6082ccba85843711dc46fa6c610a",
                "name": "q_c08_8_4_2",
                "title": "[8.4.2] Verify that privacy/utility targets for embedding leakage resistance are defined and measured, and that changes to embedding models, tokenizers, retrieval settings, or privacy transforms are gated by regression tests against those targets.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C8.4 Prevent Embedding Inversion & Leakage",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c08_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c08/c08_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c08_5 = ()=>({
        "type": "panel",
        "name": "C8.5 Scope Enforcement for User-Specific Memory",
        "elements": [
            {
                "type": "radiogroup",
                "id": "09a668bb0dc4ef4668c06aff3359b2da",
                "name": "q_c08_8_5_1",
                "title": "[8.5.1] Verify that every retrieval operation enforces scope constraints (tenant/user/classification) in the vector engine query and verifies them again before prompt assembly (post-filter).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3f91d45984a29d7d47faaa51cd42687e",
                "name": "q_c08_8_5_2",
                "title": "[8.5.2] Verify that vector identifiers, namespaces, and metadata indexing prevent cross-scope collisions and enforce uniqueness per tenant.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2a7abdf5b7e486f0d37fd04b5dfecc55",
                "name": "q_c08_8_5_3",
                "title": "[8.5.3] Verify that retrieval results that match similarity criteria but fail scope checks are discarded.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "178f61c847b1cca5aa7fd1be20f93d17",
                "name": "q_c08_8_5_4",
                "title": "[8.5.4] Verify that multi-tenant tests simulate adversarial retrieval attempts (prompt-based and query-based) and demonstrate zero out-of-scope document inclusion in prompts and outputs.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "377b6972981e71dccdaefdcdb3428037",
                "name": "q_c08_8_5_5",
                "title": "[8.5.5] Verify that in multi-agent systems, each agent's memory namespace is isolated and enforced through access control, not just organizational naming conventions.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "52d9c6159e1b2176113f823633beddd5",
                "name": "q_c08_8_5_6",
                "title": "[8.5.6] Verify that encryption keys and access policies are segregated per tenant for memory/vector storage, providing cryptographic isolation in shared infrastructure.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C8.5 Scope Enforcement for User-Specific Memory",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c08_5;
}),
"[project]/src/features/assessment/surveys/surveypages/c08.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c08/c08_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c08/c08_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c08/c08_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c08/c08_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c08/c08_5.ts [ssr] (ecmascript)");
;
;
;
;
;
var tosend = {
    name: "Control 8",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c08$2f$c08_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c08JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c08JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_1 = ()=>({
        "type": "panel",
        "name": "C9.1 Execution Budgets, Loop Control, and Circuit Breakers",
        "elements": [
            {
                "type": "radiogroup",
                "id": "1ffee682a08ec33446dad5a661971cf2",
                "name": "q_c09_9_1_1",
                "title": "[9.1.1] Verify that per-execution budgets (max recursion depth, max fan-out/concurrency, wall-clock time, tokens, and monetary spend) are configured and enforced by the orchestration runtime.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d4c67b95212a949318ed0e3ae75afdd3",
                "name": "q_c09_9_1_2",
                "title": "[9.1.2] Verify that cumulative resource/spend counters are tracked per request chain and hard-stop the chain when thresholds are exceeded.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bed7cb218b078b58210406cbf1bddcee",
                "name": "q_c09_9_1_3",
                "title": "[9.1.3] Verify that circuit breakers terminate execution on budget violations.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "cccd175bdd301df81af689c539d9238f",
                "name": "q_c09_9_1_4",
                "title": "[9.1.4] Verify that security testing covers runaway loops, budget exhaustion, and partial-failure scenarios, confirming safe termination and consistent state.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "63c4f90b7fd9a5518a48913ea470eb80",
                "name": "q_c09_9_1_5",
                "title": "[9.1.5] Verify that budget and circuit-breaker policies are expressed as policy-as-code and are validated in CI/CD to prevent drift and unsafe configuration changes.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.1 Execution Budgets, Loop Control, and Circuit Breakers",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_2 = ()=>({
        "type": "panel",
        "name": "C9.2 High-Impact Action Approval and Irreversibility Controls",
        "elements": [
            {
                "type": "radiogroup",
                "id": "87609536dd72ff36aa537c0d0ec93431",
                "name": "q_c09_9_2_1",
                "title": "[9.2.1] Verify that privileged or irreversible actions (e.g., code merges/deploys, financial transfers, user access changes, destructive deletes, external notifications) require explicit human-in-loop approval.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5f69ecc2bdb05f611d482389ae5a14a3",
                "name": "q_c09_9_2_2",
                "title": "[9.2.2] Verify that approval requests display canonicalized and complete action parameters (diff, command, recipient, amount, scope) without truncation or transformation.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "345f8300112f3f40db6c908a901d3be6",
                "name": "q_c09_9_2_3",
                "title": "[9.2.3] Verify that approvals are cryptographically bound (e.g., signed or MACed) to the exact action parameters, requester identity, and execution context.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "cf02d46c956ef4bdab70e2c37542d68b",
                "name": "q_c09_9_2_4",
                "title": "[9.2.4] Verify that approvals include a unique nonce and are single-use to prevent replay or substitution.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ec74f210f4425c012ddb826718732b79",
                "name": "q_c09_9_2_5",
                "title": "[9.2.5] Verify that approvals expire within a defined maximum time-to-live (TTL) and are rejected after expiration.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "64502550dd5148fd2b8946da641a8b30",
                "name": "q_c09_9_2_6",
                "title": "[9.2.6] Verify that where rollback is feasible, compensating actions are defined and tested (transactional semantics), and failures trigger rollback or safe containment.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.2 High-Impact Action Approval and Irreversibility Controls",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_3 = ()=>({
        "type": "panel",
        "name": "C9.3 Tool and Plugin Isolation and Safe Integration",
        "elements": [
            {
                "type": "radiogroup",
                "id": "48a7648031335ab54360fbe504b55426",
                "name": "q_c09_9_3_1",
                "title": "[9.3.1] Verify that each tool/plugin executes in an isolated sandbox (container/VM/WASM/OS sandbox) with least-privilege filesystem, network egress, and syscall permissions appropriate to the tool's function.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b14971886b7cddf008a9e512affccb70",
                "name": "q_c09_9_3_2",
                "title": "[9.3.2] Verify that per-tool quotas and timeouts (CPU, memory, disk, egress, execution time) are enforced and logged, and that quota breaches fail closed.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a092df59641b771495a40c86b473b310",
                "name": "q_c09_9_3_3",
                "title": "[9.3.3] Verify that tool outputs are validated against strict schemas and security policies before being incorporated into downstream reasoning or follow-on actions.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "cc0d75c4cb349424869c6ab3001d2af7",
                "name": "q_c09_9_3_4",
                "title": "[9.3.4] Verify that tool binaries or packages are integrity-verified (e.g., signatures, checksums) prior to loading.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5b6dda0a52f47b4becdd29da169c0899",
                "name": "q_c09_9_3_5",
                "title": "[9.3.5] Verify that tool manifests declare required privileges, side-effect level, resource limits, and output validation requirements, and that the runtime enforces these declarations.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "244f2beb0349a5fcfacb3dfd9eac1603",
                "name": "q_c09_9_3_6",
                "title": "[9.3.6] Verify that sandbox escape indicators or policy violations trigger automated containment (tool disabled/quarantined).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.3 Tool and Plugin Isolation and Safe Integration",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_4 = ()=>({
        "type": "panel",
        "name": "C9.4 Agent and Orchestrator Identity, Signing, and Tamper-Evident Audit",
        "elements": [
            {
                "type": "radiogroup",
                "id": "374770421692859c7807ec36f1f72d56",
                "name": "q_c09_9_4_1",
                "title": "[9.4.1] Verify that each agent instance (and orchestrator/runtime) has a unique cryptographic identity and authenticates as a first-class principal to downstream systems (no reuse of end-user credentials).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "6bfae6a934ecc93123c172f9bc0d94b1",
                "name": "q_c09_9_4_2",
                "title": "[9.4.2] Verify that agent-initiated actions are cryptographically bound to the execution chain (chain ID) and are signed and timestamped for non-repudiation and traceability.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b2b3a109c411a635138683d14a1e2d83",
                "name": "q_c09_9_4_3",
                "title": "[9.4.3] Verify that audit logs are tamper-evident (via append-only/WORM/immutable log store, cryptographic hash chaining where each record includes the hash of the prior record, or equivalent integrity guarantees that can be independently verified), and include sufficient context to reconstruct who/what acted, initiating user identifier, delegation scope, authorization decision (policy/version), tool parameters, approvals (where applicable), and outcomes.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "6fd07efd27491a282493d252de19c467",
                "name": "q_c09_9_4_4",
                "title": "[9.4.4] Verify that agent identity credentials (keys/certs/tokens) rotate on a defined schedule and on compromise indicators, with rapid revocation and quarantine on suspected compromise or spoofing attempts.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.4 Agent and Orchestrator Identity, Signing, and Tamper-Evident Audit",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_5 = ()=>({
        "type": "panel",
        "name": "C9.5 Secure Messaging and Protocol Hardening",
        "elements": [
            {
                "type": "radiogroup",
                "id": "bb874b948cc94a1a188be0d9cbf5225d",
                "name": "q_c09_9_5_1",
                "title": "[9.5.1] Verify that agent-to-agent and agent-to-tool channels enforce mutual authentication and encryption using current recommended protocols (e.g., TLS 1.3 or later) with strong certificate/token validation.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "923f41af188f6071def2f3b87c411367",
                "name": "q_c09_9_5_2",
                "title": "[9.5.2] Verify that all messages are strictly schema-validated; unknown fields, malformed payloads, and oversized frames are rejected.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b7d3620553d7a7a372bf7bdcd2158dcf",
                "name": "q_c09_9_5_3",
                "title": "[9.5.3] Verify that message integrity covers the full payload including tool parameters, and that replay protections (nonces/sequence numbers/timestamp windows) are enforced.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "54fef7411f1795145fb3fb06e95e42ad",
                "name": "q_c09_9_5_4",
                "title": "[9.5.4] Verify that agent outputs propagated to downstream agents are validated against semantic constraints (e.g., value ranges, logical consistency) in addition to schema validation.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.5 Secure Messaging and Protocol Hardening",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_6 = ()=>({
        "type": "panel",
        "name": "C9.6 Authorization, Delegation, and Continuous Enforcement",
        "elements": [
            {
                "type": "radiogroup",
                "id": "05b46420d161b8b981f74445c4bf48d9",
                "name": "q_c09_9_6_1",
                "title": "[9.6.1] Verify that agent actions are authorized against fine-grained policies enforced by the runtime that restrict which tools an agent may invoke, which parameter values it may supply (e.g., allowed resources, data scopes, action types), and that policy violations are blocked.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "99b1084132ed3721687214909459f7e8",
                "name": "q_c09_9_6_2",
                "title": "[9.6.2] Verify that when an agent acts on a user's behalf, the runtime propagates an integrity-protected delegation context (user ID, tenant, session, scopes) and enforces that context at every downstream call without using the user's credentials.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a91487aeb007dc6c553b116e8737300e",
                "name": "q_c09_9_6_3",
                "title": "[9.6.3] Verify that authorization is re-evaluated on every call (continuous authorization) using current context (user, tenant, environment, data classification, time, risk).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1e4e24959efd9bdf213f57bb3bd54193",
                "name": "q_c09_9_6_4",
                "title": "[9.6.4] Verify that all access control decisions are enforced by application logic or a policy engine, never by the AI model itself, and that model-generated output (e.g., \"the user is allowed to do this\") cannot override or bypass access control checks.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.6 Authorization, Delegation, and Continuous Enforcement",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_7 = ()=>({
        "type": "panel",
        "name": "C9.7 Intent Verification and Constraint Gates",
        "elements": [
            {
                "type": "radiogroup",
                "id": "1b323eb89c59af183baa9ca79c559254",
                "name": "q_c09_9_7_1",
                "title": "[9.7.1] Verify that pre-execution gates evaluate proposed actions and parameters against hard policy constraints (deny rules, data handling constraints, allow-lists, side-effect budgets) and block execution on any violation.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a73d57b351d576d55674f8c9c6488788",
                "name": "q_c09_9_7_2",
                "title": "[9.7.2] Verify that post-execution checks confirm the intended outcome was achieved.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5c8ac32f4b7d8506703b1514d560a92f",
                "name": "q_c09_9_7_3",
                "title": "[9.7.3] Verify that post-execution checks detect unintended side effects.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fe0d8ddb85cf12744c284715d247b8ad",
                "name": "q_c09_9_7_4",
                "title": "[9.7.4] Verify that any mismatch between intended outcome and actual results triggers containment and, where supported, compensating actions.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "928b8382d18740bf3b1465295454b3de",
                "name": "q_c09_9_7_5",
                "title": "[9.7.5] Verify that prompt templates and agent policy configurations retrieved from a remote source are integrity-verified at load time against their approved versions (e.g., via hashes or signatures).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.7 Intent Verification and Constraint Gates",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_7;
}),
"[project]/src/features/assessment/surveys/surveypanels/c09/c09_8.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c09_8 = ()=>({
        "type": "panel",
        "name": "C9.8 Multi-Agent Domain Isolation and Swarm Risk Controls",
        "elements": [
            {
                "type": "radiogroup",
                "id": "ede78584d2366bfb27e388f33990734c",
                "name": "q_c09_9_8_1",
                "title": "[9.8.1] Verify that agents in different tenants, security domains, or environments (dev/test/prod) run in isolated runtimes and network segments, with default-deny controls that prevent cross-domain discovery and calls.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a2f9347b3f61771f40527efced78410d",
                "name": "q_c09_9_8_2",
                "title": "[9.8.2] Verify that runtime monitoring detects unsafe emergent behavior (oscillation, deadlocks, uncontrolled broadcast, abnormal call graphs) and automatically applies corrective actions (throttle, isolate, terminate).",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "410d4160c01f4404abc34e4522883338",
                "name": "q_c09_9_8_3",
                "title": "[9.8.3] Verify that each agent is restricted to its own memory namespace and is technically prevented from reading or modifying peer agent state, preventing unauthorized cross-agent access within the same swarm.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f26e5aafb2d44632075fb7d08608fd39",
                "name": "q_c09_9_8_4",
                "title": "[9.8.4] Verify that each agent operates with an isolated context window and dedicated credentials scoped to its role, preventing peer agents from accessing or influencing another agent's context or credential scope to prevent unauthorized cross-agent access within the same swarm.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d94f617799a8cfaf3915f6281e858da4",
                "name": "q_c09_9_8_5",
                "title": "[9.8.5] Verify that swarm-level aggregate action rate limits (e.g., total external API calls, file writes, or network requests per time window across all agents) are enforced to prevent bursts that cause denial-of-service or abuse of external systems.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b8396d48a4749420e330d75388770ed2",
                "name": "q_c09_9_8_6",
                "title": "[9.8.6] Verify that a swarm-level shutdown capability exists that can halt all active agent instances or selected problematic instances in an organized fashion and prevents new agent spawning, with shutdown completable within a pre-defined response time.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C9.8 Multi-Agent Domain Isolation and Swarm Risk Controls",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c09_8;
}),
"[project]/src/features/assessment/surveys/surveypages/c09.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_7.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c09/c09_8.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var tosend = {
    name: "Control 9",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c09$2f$c09_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c09JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c09JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c10/c10_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c10_1 = ()=>({
        "type": "panel",
        "name": "C10.1 Component Integrity & Supply Chain Hygiene",
        "elements": [
            {
                "type": "radiogroup",
                "id": "472f3b2229967dbc84013433841a9f8a",
                "name": "q_c10_10_1_1",
                "title": "[10.1.1] Verify that MCP server and client components are obtained only from trusted sources and verified using signatures, checksums, or secure package metadata, rejecting tampered or unsigned builds.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bd490ba8b3e9e07d89da48e5f5b52b5c",
                "name": "q_c10_10_1_2",
                "title": "[10.1.2] Verify that only allowlisted MCP server identifiers (name, version, and registry) are permitted in production and that the runtime rejects connections to unlisted or unregistered servers at load time.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C10.1 Component Integrity & Supply Chain Hygiene",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c10_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c10/c10_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c10_2 = ()=>({
        "type": "panel",
        "name": "C10.2 Authentication & Authorization",
        "elements": [
            {
                "type": "radiogroup",
                "id": "744f724486ae04c1fcb158aa8870d9b6",
                "name": "q_c10_10_2_1",
                "title": "[10.2.1] Verify that MCP clients authenticate to MCP servers using the OAuth 2.1 authorization framework and present a valid OAuth access token for each request, and that the MCP server validates the token according to OAuth 2.1 resource server requirements.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a9544bbcc1e508c5e426467b88f0e0f7",
                "name": "q_c10_10_2_2",
                "title": "[10.2.2] Verify that MCP servers validate OAuth access tokens including issuer, audience, expiration, and scope claims, ensuring that tokens were issued for the specific MCP server before allowing tool invocation.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a7c35bd12cc4e91e34afb7b2bd3c3a65",
                "name": "q_c10_10_2_3",
                "title": "[10.2.3] Verify that MCP servers are registered through a controlled technical onboarding mechanism requiring explicit owner, environment, and resource definitions; unregistered or undiscoverable servers must not be callable in production.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ab61a022653167740cdb84f88b78b460",
                "name": "q_c10_10_2_4",
                "title": "[10.2.4] Verify that authorization decisions at the MCP layer are enforced by the MCP server's policy logic, and that model-generated output cannot influence, override, or bypass access control checks.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "07a6cf503252d440e343b4d4fb105d96",
                "name": "q_c10_10_2_5",
                "title": "[10.2.5] Verify that MCP servers act as OAuth 2.1 resource servers only by validating tokens issued by external authorization servers and by not storing tokens or user credentials.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1ed31e060aacde47c9a213d5cb795f0e",
                "name": "q_c10_10_2_6",
                "title": "[10.2.6] Verify that MCP `tools/list` and resource discovery responses are filtered based on the end-user's authorized scopes so that agents receive only the tool and resource definitions the user is permitted to invoke.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "faa978d0e32b348df0ad892186416a85",
                "name": "q_c10_10_2_7",
                "title": "[10.2.7] Verify that MCP servers enforce access control on every tool invocation, validating that the user's access token authorizes both the requested tool and the specific argument values supplied.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5daafb50c51802eea32832ee31db5442",
                "name": "q_c10_10_2_8",
                "title": "[10.2.8] Verify that MCP session identifiers are treated as state, not identity: generated using cryptographically secure random values, bound to the authenticated user, and never relied on for authentication or authorization decisions.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "48f536bd3de3ddea41be6de77b1f9a42",
                "name": "q_c10_10_2_9",
                "title": "[10.2.9] Verify that MCP servers do not pass through access tokens received from clients to downstream APIs and instead obtain a separate token scoped to the server's own identity (e.g., via on-behalf-of or client credentials flow).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "adab669e18a6b454770cdeaa681727c3",
                "name": "q_c10_10_2_10",
                "title": "[10.2.10] Verify that MCP servers acting as OAuth proxies to third-party APIs enforce per-client consent before forwarding authorization requests, preventing cached approvals from being reused across dynamically registered clients.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b25585bf89135c0275021cb0c90eeb9e",
                "name": "q_c10_10_2_11",
                "title": "[10.2.11] Verify that MCP clients request only the minimum scopes needed for the current operation, elevate progressively via step-up authorization, and that servers reject wildcard or overly broad scopes.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f1b13116a49fb5b95b7e9c5f013d5384",
                "name": "q_c10_10_2_12",
                "title": "[10.2.12] Verify that MCP servers enforce deterministic session teardown, destroying cached tokens, in-memory state, temporary storage, and file handles when a session terminates, disconnects, or times out.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C10.2 Authentication & Authorization",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c10_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c10/c10_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c10_3 = ()=>({
        "type": "panel",
        "name": "C10.3 Secure Transport & Network Boundary Protection",
        "elements": [
            {
                "type": "radiogroup",
                "id": "0ad3baa09d23790bb26c908d07cf0b0b",
                "name": "q_c10_10_3_1",
                "title": "[10.3.1] Verify that authenticated, encrypted streamable-HTTP is used as the primary MCP transport in production environments and that alternate transports (e.g., stdio or SSE) are restricted to local or tightly controlled environments with explicit justification.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ae3ded16d24c3a2dde4d6ee010f4d223",
                "name": "q_c10_10_3_2",
                "title": "[10.3.2] Verify that streamable-HTTP MCP transports use authenticated, encrypted channels (TLS 1.3 or later) with certificate validation.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d6d8f2b177f289793cbc9246b8ac335f",
                "name": "q_c10_10_3_3",
                "title": "[10.3.3] Verify that SSE-based MCP transports are used only within private, authenticated internal channels and enforce TLS, authentication, schema validation, payload size limits, and rate limiting; SSE endpoints must not be exposed to the public internet.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "83413835e0f14a621e63991930817333",
                "name": "q_c10_10_3_4",
                "title": "[10.3.4] Verify that MCP servers validate the `Origin` and `Host` headers on all HTTP-based transports (including SSE and streamable-HTTP) to prevent DNS rebinding attacks and reject requests from untrusted, mismatched, or missing origins.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "dec2bdf2e2aa9bb6efe14836b55d5087",
                "name": "q_c10_10_3_5",
                "title": "[10.3.5] Verify that intermediaries do not alter or remove the `Mcp-Protocol-Version` header on streamable-HTTP transports unless explicitly required by the protocol specification, preventing protocol downgrade via header stripping.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C10.3 Secure Transport & Network Boundary Protection",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c10_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c10/c10_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c10_4 = ()=>({
        "type": "panel",
        "name": "C10.4 Schema, Message, and Input Validation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "30dc3e3b0fa135cd8fb9742ff8273764",
                "name": "q_c10_10_4_1",
                "title": "[10.4.1] Verify that MCP tool responses are validated before being injected into the model context to prevent prompt injection, malicious tool output, or context manipulation.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "975ecf1a8464c4c0c4dd52b35bf608a0",
                "name": "q_c10_10_4_2",
                "title": "[10.4.2] Verify that MCP tool and resource schemas (e.g., JSON schemas or capability descriptors) are validated for authenticity and integrity using signatures to prevent schema tampering or malicious parameter modification.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8954d4b39d20013763fe74c6fb0a6493",
                "name": "q_c10_10_4_3",
                "title": "[10.4.3] Verify that all MCP transports enforce message-framing integrity, strict schema validation, maximum payload sizes, and rejection of malformed, truncated, or interleaved frames to prevent desynchronization or injection attacks.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "11ad433e6887b8788168ccc8847b32c2",
                "name": "q_c10_10_4_4",
                "title": "[10.4.4] Verify that MCP servers perform strict input validation for all function calls, including type checking, boundary validation, enumeration enforcement, and rejection of unrecognized or oversized parameters.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9c2809a5906bd576488e5babc29f8789",
                "name": "q_c10_10_4_5",
                "title": "[10.4.5] Verify that MCP clients maintain a hash or versioned snapshot of tool definitions and that any change to a tool definition (via `notifications/tools/list_changed` or between sessions) triggers re-approval before the modified tool can be invoked.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7d03b1be1dc201eea24301f6c4c5db9f",
                "name": "q_c10_10_4_6",
                "title": "[10.4.6] Verify that MCP server error and exception responses do not expose stack traces, internal file paths, tokens, or tool implementation details to the client or model context.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d3f42a990eea024648df5b18aea3bba6",
                "name": "q_c10_10_4_7",
                "title": "[10.4.7] Verify that MCP implementations reject JSON-RPC messages containing duplicate keys at any nesting level, preventing parser disagreement where different components resolve the same message to different values.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d4a551ef149fd483e1fc44c35d843b55",
                "name": "q_c10_10_4_8",
                "title": "[10.4.8] Verify that intermediaries evaluating message content either forward the canonicalized representation they evaluated or reject messages where multiple byte representations could produce different parsed structures.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C10.4 Schema, Message, and Input Validation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c10_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c10/c10_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c10_5 = ()=>({
        "type": "panel",
        "name": "C10.5 Outbound Access & Agent Execution Safety",
        "elements": [
            {
                "type": "radiogroup",
                "id": "5a8c3975ab78a10b2b098ace4b49f149",
                "name": "q_c10_10_5_1",
                "title": "[10.5.1] Verify that MCP servers may only initiate outbound requests to approved internal or external destinations following least-privilege egress policies and cannot access arbitrary network targets or internal cloud metadata services.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f85fc10c9fc59626e3011ff54159e9d8",
                "name": "q_c10_10_5_2",
                "title": "[10.5.2] Verify that outbound MCP actions implement execution limits (e.g., timeouts, recursion limits, concurrency caps, or circuit breakers) to prevent unbounded agent-driven tool invocation or chained side effects.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c0b3fbb9ffd7da15599a71ead4c0710e",
                "name": "q_c10_10_5_3",
                "title": "[10.5.3] Verify that MCP tool invocations classified as high-risk or destructive (e.g., data deletion, financial transactions, system configuration changes) require explicit user confirmation before execution.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C10.5 Outbound Access & Agent Execution Safety",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c10_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c10/c10_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c10_6 = ()=>({
        "type": "panel",
        "name": "C10.6 Transport Restrictions & High-Risk Boundary Controls",
        "elements": [
            {
                "type": "radiogroup",
                "id": "e06244a9a85f2c02a1dc69df9c42f66a",
                "name": "q_c10_10_6_1",
                "title": "[10.6.1] Verify that stdio-based MCP transports are limited to co-located, single-process development scenarios and isolated from shell execution, terminal injection, and process-spawning capabilities; stdio must not cross network or multi-tenant boundaries.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f4c4353580c0cf8104b1d9bfa44a9ecf",
                "name": "q_c10_10_6_2",
                "title": "[10.6.2] Verify that MCP servers expose only allow-listed functions and resources and prohibit dynamic dispatch, reflective invocation, or execution of function names influenced by user or model-provided input.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3108b7ea64939d3be471ce168db8c8c0",
                "name": "q_c10_10_6_3",
                "title": "[10.6.3] Verify that tenant boundaries, environment boundaries (e.g., dev/test/prod), and data domain boundaries are enforced at the MCP layer to prevent cross-tenant or cross-environment server or resource discovery.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C10.6 Transport Restrictions & High-Risk Boundary Controls",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c10_6;
}),
"[project]/src/features/assessment/surveys/surveypages/c10.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c10/c10_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c10/c10_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c10/c10_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c10/c10_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c10/c10_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c10/c10_6.ts [ssr] (ecmascript)");
;
;
;
;
;
;
var tosend = {
    name: "Control 10",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c10$2f$c10_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c10JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c10JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_1 = ()=>({
        "type": "panel",
        "name": "C11.1 Model Alignment & Safety",
        "elements": [
            {
                "type": "radiogroup",
                "id": "a435847bd9caf6830b9c4f99e0aa0e98",
                "name": "q_c11_11_1_1",
                "title": "[11.1.1] Verify that refusal and safe-completion guardrails are enforced to prevent the model from generating disallowed content categories.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "817d9f1cb27f67fa60a97ab02ceaadd5",
                "name": "q_c11_11_1_2",
                "title": "[11.1.2] Verify that an alignment test suite (red-team prompts, jailbreak probes, disallowed-content checks) is version-controlled and run on every model update or release.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "29960d205ea6269e383f2484e98ce4ea",
                "name": "q_c11_11_1_3",
                "title": "[11.1.3] Verify that an automated evaluator measures harmful-content rate and flags regressions beyond a defined threshold.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ad743edb0ae1d50ef48b358c0b9a1bfc",
                "name": "q_c11_11_1_4",
                "title": "[11.1.4] Verify that alignment and safety training procedures (e.g., RLHF, constitutional AI, or equivalent) are documented and reproducible.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "556f66837925efbf7606ea90b205cb1c",
                "name": "q_c11_11_1_5",
                "title": "[11.1.5] Verify that alignment evaluation includes assessments for evaluation awareness, where the model may behave differently when it detects it is being tested versus deployed.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.1 Model Alignment & Safety",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_2 = ()=>({
        "type": "panel",
        "name": "C11.2 Adversarial-Example Hardening",
        "elements": [
            {
                "type": "radiogroup",
                "id": "c17b5a0d0fcafa6d224ace4d484f4bce",
                "name": "q_c11_11_2_1",
                "title": "[11.2.1] Verify that models serving high-risk functions are evaluated against known adversarial attack techniques relevant to their modality (e.g., perturbation attacks for vision, token-manipulation attacks for text).",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1bf481375876ca87c0fd9aad1f61a7de",
                "name": "q_c11_11_2_2",
                "title": "[11.2.2] Verify that adversarial-example detection raises alerts in production pipelines, with blocking or degraded-capability responses for high-risk endpoints or use cases.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ed99ea05cebac2125fd60b19ea43b7a5",
                "name": "q_c11_11_2_3",
                "title": "[11.2.3] Verify that adversarial training or equivalent hardening techniques are applied where feasible, with documented configurations and reproducible procedures.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1830614326fc92f1c3727e3bb786238a",
                "name": "q_c11_11_2_4",
                "title": "[11.2.4] Verify that robustness evaluations use adaptive attacks (attacks specifically designed to defeat the deployed defenses) to confirm no measurable robustness loss across releases.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b0f87ca553d1eff94985f8bb6e7ec489",
                "name": "q_c11_11_2_5",
                "title": "[11.2.5] Verify that formal robustness verification methods (e.g., certified bounds, interval-bound propagation) are applied to safety-critical model components where the model architecture supports them.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.2 Adversarial-Example Hardening",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_3 = ()=>({
        "type": "panel",
        "name": "C11.3 Membership-Inference Mitigation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "a63521df009d11b2d96780c7a271ce79",
                "name": "q_c11_11_3_1",
                "title": "[11.3.1] Verify that model outputs are calibrated (e.g., via temperature scaling or output perturbation) to reduce overconfident predictions that facilitate membership-inference attacks.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2f33fc086861970953c13374bc37fdfc",
                "name": "q_c11_11_3_2",
                "title": "[11.3.2] Verify that training on sensitive datasets employs differentially-private optimization (e.g., DP-SGD) with a documented privacy budget (epsilon).",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "39992d952b7459ca0fe3e1d2921beeaf",
                "name": "q_c11_11_3_3",
                "title": "[11.3.3] Verify that membership-inference attack simulations (e.g., shadow-model, likelihood-ratio, or label-only attacks) demonstrate that attack accuracy does not meaningfully exceed random guessing on held-out data.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.3 Membership-Inference Mitigation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_4 = ()=>({
        "type": "panel",
        "name": "C11.4 Model-Inversion Resistance",
        "elements": [
            {
                "type": "radiogroup",
                "id": "a72bfa907776f2d1437ad3858cbd3995",
                "name": "q_c11_11_4_1",
                "title": "[11.4.1] Verify that sensitive attributes are never directly output; where needed, outputs use generalized categories (e.g., ranges, buckets) or one-way transforms.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b6e50b82def60d4798a22939ce4234dc",
                "name": "q_c11_11_4_2",
                "title": "[11.4.2] Verify that query-rate limits throttle repeated adaptive queries from the same principal to raise the cost of inversion attacks.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "77df808175c64decddbcbd022c8c09dd",
                "name": "q_c11_11_4_3",
                "title": "[11.4.3] Verify that models handling sensitive data are trained with privacy-preserving techniques (e.g., differential privacy, gradient clipping) to limit information leakage through outputs.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.4 Model-Inversion Resistance",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_5 = ()=>({
        "type": "panel",
        "name": "C11.5 Model-Extraction Defense",
        "elements": [
            {
                "type": "radiogroup",
                "id": "b3b3a01daa22038299270531a5e647eb",
                "name": "q_c11_11_5_1",
                "title": "[11.5.1] Verify that inference endpoints enforce per-principal and global rate limits designed to make large-scale query harvesting impractical.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fff624f6a85dd3d632b19d90eaadb1a9",
                "name": "q_c11_11_5_2",
                "title": "[11.5.2] Verify that extraction-alert events include offending query metadata and are integrated with incident-response playbooks.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3e7f2dbb4cd00719085d17af3f6437c9",
                "name": "q_c11_11_5_3",
                "title": "[11.5.3] Verify that query-pattern analysis (e.g., query diversity, input distribution anomalies) feeds an automated extraction-attempt detector.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bd49a688f36333635563a1eedf71419d",
                "name": "q_c11_11_5_4",
                "title": "[11.5.4] Verify that model watermarking or fingerprinting techniques are applied so that unauthorized copies can be identified.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "225261a7a1e2319c3623dd521c03e324",
                "name": "q_c11_11_5_5",
                "title": "[11.5.5] Verify that watermark verification keys and trigger sets are protected with access controls equivalent to other critical cryptographic material.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.5 Model-Extraction Defense",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_6 = ()=>({
        "type": "panel",
        "name": "C11.6 Inference-Time Poisoned-Data Detection",
        "elements": [
            {
                "type": "radiogroup",
                "id": "f5a0f343ba6b63007e8767eec251334c",
                "name": "q_c11_11_6_1",
                "title": "[11.6.1] Verify that inputs from external or untrusted sources pass through anomaly detection (e.g., statistical outlier detection, consistency scoring) before model inference.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "54b3c65175e1c00cd06b53fc8ac564f5",
                "name": "q_c11_11_6_2",
                "title": "[11.6.2] Verify that anomaly-detection thresholds are tuned on representative clean and adversarial validation sets and that the false-positive rate is measured and documented.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "63356236647ff9db38f226d392d9d95f",
                "name": "q_c11_11_6_3",
                "title": "[11.6.3] Verify that inputs flagged as anomalous trigger gating actions (blocking, capability degradation, or human review) appropriate to the risk level.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d4ad6bfa42dcf13b4ce2aa96db940ac2",
                "name": "q_c11_11_6_4",
                "title": "[11.6.4] Verify that detection methods are periodically stress-tested with current adversarial techniques, including adaptive attacks designed to evade the specific detectors in use.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "14e92c0a8e0f5b9a61c934e230753dd7",
                "name": "q_c11_11_6_5",
                "title": "[11.6.5] Verify that detection efficacy metrics are logged and periodically re-evaluated against updated threat intelligence.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.6 Inference-Time Poisoned-Data Detection",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_7 = ()=>({
        "type": "panel",
        "name": "C11.7 Security Policy Adaptation",
        "elements": [
            {
                "type": "radiogroup",
                "id": "7f5a1e59f7adc85b221c37d7d7ed7c90",
                "name": "q_c11_11_7_1",
                "title": "[11.7.1] Verify that security policies (e.g., content filters, rate-limit thresholds, guardrail configurations) can be updated without full system redeployment, and that policy versions are tracked.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fbb06db1cd00dca0d19174ced2e3f2ad",
                "name": "q_c11_11_7_2",
                "title": "[11.7.2] Verify that policy updates are authorized, integrity-protected (e.g., cryptographically signed), and validated before application.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "90df917a49bd0c0ec9f3176bbcc052a4",
                "name": "q_c11_11_7_3",
                "title": "[11.7.3] Verify that policy changes are logged with audit trails including timestamp, author, justification, and rollback procedures.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "94f020c08f8b47067bef115d7f556603",
                "name": "q_c11_11_7_4",
                "title": "[11.7.4] Verify that threat-detection sensitivity can be adjusted based on risk context (e.g., elevated threat level, incident response) with appropriate authorization.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.7 Security Policy Adaptation",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_7;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_8.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_8 = ()=>({
        "type": "panel",
        "name": "C11.8 Agent Security Self-Assessment",
        "elements": [
            {
                "type": "radiogroup",
                "id": "d516fa7f1f27304798a199bc3c681d4a",
                "name": "q_c11_11_8_1",
                "title": "[11.8.1] Verify that agentic systems include a mechanism to review planned high-risk actions against security policy before execution (e.g., a secondary model, rule-based checker, or structured self-review step).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "27a9c977d6dc24f1dd5febaf123d5f94",
                "name": "q_c11_11_8_2",
                "title": "[11.8.2] Verify that security review mechanisms are protected against manipulation by adversarial inputs (e.g., the review step cannot be overridden or bypassed through prompt injection).",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "de1dde1a518712e4e88ce3b652874f98",
                "name": "q_c11_11_8_3",
                "title": "[11.8.3] Verify that security review warnings trigger enhanced monitoring or human intervention workflows for the affected session or task.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.8 Agent Security Self-Assessment",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_8;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_9.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_9 = ()=>({
        "type": "panel",
        "name": "C11.9 Self-Modification & Autonomous Update Security",
        "elements": [
            {
                "type": "radiogroup",
                "id": "b874fdc849915ec22ece86fa9fa70f5f",
                "name": "q_c11_11_9_1",
                "title": "[11.9.1] Verify that any self-modification capability (e.g., prompt rewriting, tool-list changes, parameter updates) is restricted to explicitly designated areas with enforced boundaries.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fc5f3c457d117d48776dc176f0378855",
                "name": "q_c11_11_9_2",
                "title": "[11.9.2] Verify that proposed self-modifications undergo security impact assessment or policy validation before taking effect.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9988e479b3065e97938e3ae63d43a74c",
                "name": "q_c11_11_9_3",
                "title": "[11.9.3] Verify that all self-modifications are logged, reversible, and subject to integrity verification, enabling rollback to a known-good state.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "09bc483dc29fd558b81de20d1ba7cf52",
                "name": "q_c11_11_9_4",
                "title": "[11.9.4] Verify that self-modification scope is bounded (e.g., maximum change magnitude, rate limits on updates, prohibited modification targets) to prevent runaway or adversarially induced changes.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "878424a382ac4896a43e59701e653f58",
                "name": "q_c11_11_9_5",
                "title": "[11.9.5] Verify that when safety violation data (blocked inputs, filtered outputs, flagged hallucinations) is used as training signal for model improvement, the feedback pipeline includes integrity verification, poisoning detection, and human review gates to prevent adversarial manipulation of the improvement mechanism.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.9 Self-Modification & Autonomous Update Security",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_9;
}),
"[project]/src/features/assessment/surveys/surveypanels/c11/c11_10.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c11_10 = ()=>({
        "type": "panel",
        "name": "C11.10 Adversarial Bias Exploitation Defense",
        "elements": [
            {
                "type": "radiogroup",
                "id": "b30910a28ef68ec2a688aba52b38608c",
                "name": "q_c11_11_10_1",
                "title": "[11.10.1] Verify that inference endpoints for security-relevant classifiers (e.g., abuse detection, fraud scoring) include monitoring that accounts for query patterns indicative of bias probing, such as systematic variation along a single input dimension (e.g., demographic, linguistic, stylistic) while other dimensions remain constant, and alert when such patterns are detected.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "96305cffd05e8575675ddc13332e8c9f",
                "name": "q_c11_11_10_2",
                "title": "[11.10.2] Verify that adversarial robustness evaluations for security-relevant classifiers are stratified by meaningful input subgroups (e.g., language register, content category), with per-subgroup false-negative rates under adversarial conditions measured and flagged when deviating from aggregate rates beyond a defined threshold.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "af21a4e4e96161e8f439e0abba2b7cd0",
                "name": "q_c11_11_10_3",
                "title": "[11.10.3] Verify that where bias-based evasion is identified as a material threat, adversarial hardening (e.g., adversarial training with per-subgroup loss constraints, ensemble diversity across training distributions) incorporates explicit subgroup robustness requirements, and that per-subgroup robustness metrics are verified not to regress across model releases.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C11.10 Adversarial Bias Exploitation Defense",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c11_10;
}),
"[project]/src/features/assessment/surveys/surveypages/c11.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_7.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_8.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_9$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_9.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_10$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c11/c11_10.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
var tosend = {
    name: "Control 11",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_8$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_9$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c11$2f$c11_10$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c11JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c11JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c12/c12_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c12_1 = ()=>({
        "type": "panel",
        "name": "C12.1 Anonymization & Data Minimization",
        "elements": [
            {
                "type": "radiogroup",
                "id": "519cea7221ea96afdaccacbf1a3413df",
                "name": "q_c12_12_1_1",
                "title": "[12.1.1] Verify that direct and quasi-identifiers are removed, hashed.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "6fbe3d92fa6600427d488972fd407ed0",
                "name": "q_c12_12_1_2",
                "title": "[12.1.2] Verify that automated audits measure k-anonymity/l-diversity and alert when thresholds drop below policy.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e62f2afc974107fdd1af10864bc9a96c",
                "name": "q_c12_12_1_3",
                "title": "[12.1.3] Verify that model feature-importance reports prove no identifier leakage beyond ε = 0.01 mutual information.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c31d727ea948ae5aca7bcbab0f10a278",
                "name": "q_c12_12_1_4",
                "title": "[12.1.4] Verify that formal proofs or synthetic-data certification show re-identification risk ≤ 0.05 even under linkage attacks.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C12.1 Anonymization & Data Minimization",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c12_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c12/c12_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c12_2 = ()=>({
        "type": "panel",
        "name": "C12.2 Right-to-be-Forgotten & Deletion Enforcement",
        "elements": [
            {
                "type": "radiogroup",
                "id": "2b8957d34ef044c1bece5d0570531bbb",
                "name": "q_c12_12_2_1",
                "title": "[12.2.1] Verify that data-subject deletion requests propagate to raw datasets, checkpoints, embeddings, logs, and backups within service level agreements of less than 30 days.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8258ab6ac8dad8f4246950c295f72e1e",
                "name": "q_c12_12_2_2",
                "title": "[12.2.2] Verify that \"machine-unlearning\" routines physically re-train or approximate removal using certified unlearning algorithms.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "f87bc202dcf7d071a690d0ccf1f032f7",
                "name": "q_c12_12_2_3",
                "title": "[12.2.3] Verify that shadow-model evaluation proves forgotten records influence less than 1% of outputs after unlearning.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "151fd26a30aa14a613500c58c38d010e",
                "name": "q_c12_12_2_4",
                "title": "[12.2.4] Verify that deletion events are immutably logged and auditable for regulators.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C12.2 Right-to-be-Forgotten & Deletion Enforcement",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c12_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c12/c12_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c12_3 = ()=>({
        "type": "panel",
        "name": "C12.3 Differential-Privacy Safeguards",
        "elements": [
            {
                "type": "radiogroup",
                "id": "676ef107ce299fdb77e0f2902d1c10a5",
                "name": "q_c12_12_3_1",
                "title": "[12.3.1] Verify that differential privacy budget consumption is tracked per training round (both ε and δ values) and that cumulative budget dashboards alert when ε exceeds policy thresholds.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b3412ac494e5c0617bcbc558c027b693",
                "name": "q_c12_12_3_2",
                "title": "[12.3.2] Verify that black-box privacy audits estimate ε̂ within 10% of declared value.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9b7243e30044f1470777607b5ddd9336",
                "name": "q_c12_12_3_3",
                "title": "[12.3.3] Verify that formal proofs cover all post-training fine-tunes and embeddings.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e0124f380dea439e500a7725e3b3e87f",
                "name": "q_c12_12_3_4",
                "title": "[12.3.4] Verify that federated learning systems implement canary-based privacy auditing to empirically bound privacy leakage, with audit results logged and reviewed per training cycle.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C12.3 Differential-Privacy Safeguards",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c12_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c12/c12_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c12_4 = ()=>({
        "type": "panel",
        "name": "C12.4 Purpose-Limitation & Scope-Creep Protection",
        "elements": [
            {
                "type": "radiogroup",
                "id": "e47b146a3c724070a1050f4e91d01167",
                "name": "q_c12_12_4_1",
                "title": "[12.4.1] Verify that every dataset and model checkpoint carries a machine-readable purpose tag aligned to the original consent.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2365280c21e44c57c61b3d254d05d58a",
                "name": "q_c12_12_4_2",
                "title": "[12.4.2] Verify that runtime monitors detect queries inconsistent with declared purpose and trigger soft refusal.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fb088f42a7b3f80d6f0e0e2d06f85012",
                "name": "q_c12_12_4_3",
                "title": "[12.4.3] Verify that policy-as-code gates block redeployment of models to new domains without DPIA review.",
                "description": "Level: 3 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9b65f78836ff61f11a6b9bf752b27193",
                "name": "q_c12_12_4_4",
                "title": "[12.4.4] Verify that formal traceability proofs show every personal data lifecycle remains within consented scope.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C12.4 Purpose-Limitation & Scope-Creep Protection",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c12_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c12/c12_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c12_5 = ()=>({
        "type": "panel",
        "name": "C12.5 Consent Management & Lawful-Basis Tracking",
        "elements": [
            {
                "type": "radiogroup",
                "id": "8d4f8a4ac7b25e0e05c796973e45d4af",
                "name": "q_c12_12_5_1",
                "title": "[12.5.1] Verify that a Consent-Management Platform (CMP) records opt-in status, purpose, and retention period per data-subject.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e48d36f6fbb451a0df6f567a6dfc95d6",
                "name": "q_c12_12_5_2",
                "title": "[12.5.2] Verify that APIs expose consent tokens; models must validate token scope before inference.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "93cb57fbc330bb71fb0978dce3324199",
                "name": "q_c12_12_5_3",
                "title": "[12.5.3] Verify that denied or withdrawn consent halts processing pipelines within 24 hours.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C12.5 Consent Management & Lawful-Basis Tracking",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c12_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c12/c12_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c12_6 = ()=>({
        "type": "panel",
        "name": "C12.6 Federated Learning with Privacy Controls",
        "elements": [
            {
                "type": "radiogroup",
                "id": "db9394acc2d2ad27b928c7d28974fcd5",
                "name": "q_c12_12_6_1",
                "title": "[12.6.1] Verify that client updates employ local differential privacy noise addition before aggregation.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a7281e2845d58646110dd3f144412c74",
                "name": "q_c12_12_6_2",
                "title": "[12.6.2] Verify that training metrics are differentially private and never reveal single-client loss.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a8fb73e8809307676898eaab9509dcdf",
                "name": "q_c12_12_6_3",
                "title": "[12.6.3] Verify that poisoning-resistant aggregation (e.g., Krum/Trimmed-Mean) is enabled.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "850e4b2c546a6b2bec3c3a318619c71e",
                "name": "q_c12_12_6_4",
                "title": "[12.6.4] Verify that formal proofs demonstrate overall ε budget with less than 5 utility loss.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C12.6 Federated Learning with Privacy Controls",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c12_6;
}),
"[project]/src/features/assessment/surveys/surveypages/c12.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c12/c12_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c12/c12_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c12/c12_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c12/c12_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c12/c12_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c12/c12_6.ts [ssr] (ecmascript)");
;
;
;
;
;
;
var tosend = {
    name: "Control 12",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c12$2f$c12_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c12JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c12JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_1 = ()=>({
        "type": "panel",
        "name": "C13.1 Request & Response Logging",
        "elements": [
            {
                "type": "radiogroup",
                "id": "1db5b15ac1acfb579885f73ff567ec3f",
                "name": "q_c13_13_1_1",
                "title": "[13.1.1] Verify that AI interactions are logged with security-relevant metadata (e.g. timestamp, user ID, session ID, model version, token count, input hash, system prompt version, confidence score, safety filter outcome, and safety filter decisions) without logging prompt or response content by default.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c903f498d9f7cc071119098212e57e2d",
                "name": "q_c13_13_1_2",
                "title": "[13.1.2] Verify that logs are stored in secure, access-controlled repositories with appropriate retention policies and backup procedures.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3586e6c7dbae668a45a4552abd5da8c5",
                "name": "q_c13_13_1_3",
                "title": "[13.1.3] Verify that log storage systems implement encryption at rest and in transit to protect sensitive information contained in logs.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2ca3f82d1300dbb772cf1912facd4c34",
                "name": "q_c13_13_1_4",
                "title": "[13.1.4] Verify that sensitive data in prompts and outputs is automatically redacted or masked before logging, with configurable redaction rules for PII, credentials, and proprietary information.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c836de9197228a2137dd614aaa69cd33",
                "name": "q_c13_13_1_5",
                "title": "[13.1.5] Verify that policy decisions and safety filtering actions are logged with sufficient detail to enable audit and debugging of content moderation systems.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bbf827f9bd59e676e26bc5d1eb87be9a",
                "name": "q_c13_13_1_6",
                "title": "[13.1.6] Verify that log integrity is protected through e.g. cryptographic signatures or write-only storage.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "85552884351065999d76d176cdc7ee24",
                "name": "q_c13_13_1_7",
                "title": "[13.1.7] Verify that log entries for AI inference events capture a structured, interoperable schema that includes at minimum model identifier, token usage (input and output), provider name, and operation type, to enable consistent AI observability across tools and platforms.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "fbb95970c0c8013bd7a6ba06b9d1453f",
                "name": "q_c13_13_1_8",
                "title": "[13.1.8] Verify that full prompt and response content is logged only when a security-relevant event is detected (e.g., safety filter trigger, prompt injection detection, anomaly flag), or when required by explicit user consent and a documented legal basis.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.1 Request & Response Logging",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_2 = ()=>({
        "type": "panel",
        "name": "C13.2 Abuse Detection and Alerting",
        "elements": [
            {
                "type": "radiogroup",
                "id": "50c614cb46adec507b0e0b14c67d51ea",
                "name": "q_c13_13_2_1",
                "title": "[13.2.1] Verify that the system detects and alerts on known jailbreak patterns, prompt injection attempts, and adversarial inputs using signature-based detection.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8a7a6efb420b079e8a6de9555a34fea5",
                "name": "q_c13_13_2_2",
                "title": "[13.2.2] Verify that the system integrates with existing Security Information and Event Management (SIEM) platforms using standard log formats and protocols.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c4783af47150314973d8ac3e6fa343de",
                "name": "q_c13_13_2_3",
                "title": "[13.2.3] Verify that enriched security events include AI-specific context such as model identifiers, confidence scores, and safety filter decisions.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7247771cc06dbeef0eb9a44067ab310c",
                "name": "q_c13_13_2_4",
                "title": "[13.2.4] Verify that behavioral anomaly detection identifies unusual conversation patterns, excessive retry attempts, or systematic probing behaviors.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "aa8227f97d725e09f3d6eb4efb73a993",
                "name": "q_c13_13_2_5",
                "title": "[13.2.5] Verify that real-time alerting mechanisms notify security teams when potential policy violations or attack attempts are detected.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7cdea2add6941f731f57666ca84d8c01",
                "name": "q_c13_13_2_6",
                "title": "[13.2.6] Verify that custom rules are included to detect AI-specific threat patterns including coordinated jailbreak attempts, prompt injection campaigns, and model extraction attacks.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7fd6baf3ad22f454554e8b71c5ad1b6d",
                "name": "q_c13_13_2_7",
                "title": "[13.2.7] Verify that automated incident response workflows can isolate compromised models, block malicious users, and escalate critical security events.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "39a643f86e44ad568cc34bc8784d3ecb",
                "name": "q_c13_13_2_8",
                "title": "[13.2.8] Verify that session-level conversation trajectory analysis detects multi-turn jailbreak patterns where no individual turn is overtly malicious in isolation but the aggregate conversation exhibits attack indicators.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ceb125c582210a27c46c6488bf86c39e",
                "name": "q_c13_13_2_9",
                "title": "[13.2.9] Verify that per-user and per-session token consumption triggers an alert when consumption exceeds defined thresholds.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "7001698a26b7f61df68fc43f79d14359",
                "name": "q_c13_13_2_10",
                "title": "[13.2.10] Verify that LLM API traffic is monitored for covert channel indicators, including Base64-encoded payloads, structured non-human query patterns, and communication signatures consistent with malware command-and-control activity using LLM endpoints.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.2 Abuse Detection and Alerting",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_3 = ()=>({
        "type": "panel",
        "name": "C13.3 Model, Data, and Performance Drift Detection",
        "elements": [
            {
                "type": "radiogroup",
                "id": "1419eed348792eb73bb25a2998fbaa50",
                "name": "q_c13_13_3_1",
                "title": "[13.3.1] Verify that model performance metrics (accuracy, precision, recall, F1 score, confidence scores, latency, and error rates) are continuously monitored across model versions and time periods and compared against documented baselines.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "82300b4fca579f13781fe665a94306b3",
                "name": "q_c13_13_3_2",
                "title": "[13.3.2] Verify that baseline performance profiles are formally documented and version-controlled, and are reviewed at a defined frequency or after any model or data pipeline change.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "5a20a28eb1b7ebb0963894c97ac2f5b5",
                "name": "q_c13_13_3_3",
                "title": "[13.3.3] Verify that automated alerting triggers when performance metrics exceed predefined degradation thresholds or deviate significantly from baselines, and that alerts initiate model retraining or replacement workflows.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "12b9e1db32c972a3de3e8c529903bf09",
                "name": "q_c13_13_3_4",
                "title": "[13.3.4] Verify that hallucination detection monitors identify and flag instances when model outputs contain factually incorrect, inconsistent, or fabricated information, and that hallucination rates are tracked as continuous time-series metrics to enable trend analysis and detection of sustained model degradation.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "3db5d5c601e81d7745df8d1e3d3bbbd2",
                "name": "q_c13_13_3_5",
                "title": "[13.3.5] Verify that data drift detection monitors input distribution changes that may impact model performance, using statistically validated methods appropriate to the data type.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2b2270b17b47d828ee7495d7577722ff",
                "name": "q_c13_13_3_6",
                "title": "[13.3.6] Verify that schema drift in incoming data (unexpected field additions, removals, type changes, or format variations) is detected and triggers alerting.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e8d38a9419f435ab73cb0b8f6673f5b0",
                "name": "q_c13_13_3_7",
                "title": "[13.3.7] Verify that concept drift detection identifies changes in the relationship between inputs and expected outputs.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c486f6b578f392d8e906a2a0471b8c72",
                "name": "q_c13_13_3_8",
                "title": "[13.3.8] Verify that degradation root cause analysis correlates performance drops with data changes, infrastructure issues, or external factors.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "90622156c9727fc9f020ca1499600051",
                "name": "q_c13_13_3_9",
                "title": "[13.3.9] Verify that sudden unexplained behavioral shifts are distinguished from gradual expected operational drift, with a security escalation path defined for unexplained sudden drift.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.3 Model, Data, and Performance Drift Detection",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_4 = ()=>({
        "type": "panel",
        "name": "C13.4 Performance & Behavior Telemetry",
        "elements": [
            {
                "type": "radiogroup",
                "id": "3075e68557f0a2bd9d0584efdcef4eb8",
                "name": "q_c13_13_4_1",
                "title": "[13.4.1] Verify that operational metrics including request latency, token consumption, memory usage, and throughput are continuously collected and monitored.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "070554d62511944e1198c9d9e3164314",
                "name": "q_c13_13_4_2",
                "title": "[13.4.2] Verify that success and failure rates are tracked with categorization of error types and their root causes.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b7bdd943bfeb3ebb161e2889ea967342",
                "name": "q_c13_13_4_3",
                "title": "[13.4.3] Verify that resource utilization monitoring includes GPU/CPU usage, memory consumption, and storage requirements with alerting on threshold breaches.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8041b9403449d1e2933fdd8e1983c59f",
                "name": "q_c13_13_4_4",
                "title": "[13.4.4] Verify that token usage is tracked at granular attribution levels including per user, per session, per feature endpoint, and per team or workspace.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4d75bd901740f99099e09a1a7069a22e",
                "name": "q_c13_13_4_5",
                "title": "[13.4.5] Verify that output-to-input token ratio anomalies are detected and alerted.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.4 Performance & Behavior Telemetry",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_5 = ()=>({
        "type": "panel",
        "name": "C13.5 AI Incident Response Planning & Execution",
        "elements": [
            {
                "type": "radiogroup",
                "id": "ae7dc9cc05994e71e85829ad457d8321",
                "name": "q_c13_13_5_1",
                "title": "[13.5.1] Verify that incident response plans specifically address AI-related security events including model compromise, data poisoning, adversarial attacks, model inversion, prompt injection campaigns, and model extraction, with specific containment and investigation steps for each scenario.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "45037056bf0660145afe3971a4a93006",
                "name": "q_c13_13_5_2",
                "title": "[13.5.2] Verify that incident response teams have access to AI-specific forensic tools and expertise to investigate model behavior and attack vectors.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "094acc05acdb696c8108f3cb3ef1e266",
                "name": "q_c13_13_5_3",
                "title": "[13.5.3] Verify that post-incident analysis includes model retraining considerations, safety filter updates, and lessons learned integration into security controls.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.5 AI Incident Response Planning & Execution",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_6 = ()=>({
        "type": "panel",
        "name": "C13.6 DAG Visualization & Workflow Security",
        "elements": [
            {
                "type": "radiogroup",
                "id": "2e5c73911b58af5b298a66d1a9041453",
                "name": "q_c13_13_6_1",
                "title": "[13.6.1] Verify that DAG visualization data is sanitized to remove sensitive information before storage or transmission.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "af38bd5993bdcc31d775cd058cc96567",
                "name": "q_c13_13_6_2",
                "title": "[13.6.2] Verify that workflow visualization access controls ensure only authorized users can view agent decision paths and reasoning traces.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "c629441d1b6edd857e218d771d9767bd",
                "name": "q_c13_13_6_3",
                "title": "[13.6.3] Verify that DAG data integrity is protected through cryptographic signatures and tamper-evident storage mechanisms.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "b0ca3d2f163c1eb00d367eae955a3f76",
                "name": "q_c13_13_6_4",
                "title": "[13.6.4] Verify that workflow visualization systems implement input validation to prevent injection attacks through crafted node or edge data.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "d9d5c627e55670b0200c2a2b60eda1b3",
                "name": "q_c13_13_6_5",
                "title": "[13.6.5] Verify that real-time DAG updates are rate-limited and validated to prevent denial-of-service attacks on visualization systems.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.6 DAG Visualization & Workflow Security",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c13/c13_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c13_7 = ()=>({
        "type": "panel",
        "name": "C13.7 Proactive Security Behavior Monitoring",
        "elements": [
            {
                "type": "radiogroup",
                "id": "7388c1102cc34cab88e13b76d7dda3ac",
                "name": "q_c13_13_7_1",
                "title": "[13.7.1] Verify that proactive agent behaviors are security-validated before execution with risk assessment integration.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1998f035fb2d326a9dbe527e793a986d",
                "name": "q_c13_13_7_2",
                "title": "[13.7.2] Verify that autonomous initiative triggers include security context evaluation and threat landscape assessment.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1a9d4e951d15c221711c2f15c67e99f8",
                "name": "q_c13_13_7_3",
                "title": "[13.7.3] Verify that proactive behavior patterns are analyzed for potential security implications and unintended consequences.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "1b105d31a5ebb03397af512e43c37ac5",
                "name": "q_c13_13_7_4",
                "title": "[13.7.4] Verify that security-critical proactive actions require explicit approval chains with audit trails.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "986a19b394874772cc78d110f5b5e4c7",
                "name": "q_c13_13_7_5",
                "title": "[13.7.5] Verify that behavioral anomaly detection identifies deviations in proactive agent patterns that may indicate compromise.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C13.7 Proactive Security Behavior Monitoring",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c13_7;
}),
"[project]/src/features/assessment/surveys/surveypages/c13.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c13/c13_7.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
var tosend = {
    name: "Control 13",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c13$2f$c13_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c13JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c13JSON;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_1.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_1 = ()=>({
        "type": "panel",
        "name": "C14.1 Kill-Switch & Override Mechanisms",
        "elements": [
            {
                "type": "radiogroup",
                "id": "3317e3ee9a5a12d07aafd9ffb958f69b",
                "name": "q_c14_14_1_1",
                "title": "[14.1.1] Verify that a manual kill-switch mechanism exists to immediately halt AI model inference and outputs.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "4a9b6b46ce1819e441212ad2d910c531",
                "name": "q_c14_14_1_2",
                "title": "[14.1.2] Verify that override controls are accessible to only to authorized personnel.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "eae13767b83aeb9f8203e67bdce47c45",
                "name": "q_c14_14_1_3",
                "title": "[14.1.3] Verify that rollback procedures can revert to previous model versions or safe-mode operations.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "8288a535187370378ee999f3157dc636",
                "name": "q_c14_14_1_4",
                "title": "[14.1.4] Verify that override mechanisms are tested regularly.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.1 Kill-Switch & Override Mechanisms",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_1;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_2.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_2 = ()=>({
        "type": "panel",
        "name": "C14.2 Human-in-the-Loop Decision Checkpoints",
        "elements": [
            {
                "type": "radiogroup",
                "id": "3b111003032a5ca82ab129becdc8f15d",
                "name": "q_c14_14_2_1",
                "title": "[14.2.1] Verify that high-risk AI decisions require explicit human approval before execution.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "2fd44a8b6a3072302f431d294ea7bb50",
                "name": "q_c14_14_2_2",
                "title": "[14.2.2] Verify that risk thresholds are clearly defined and automatically trigger human review workflows.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "17477e12e9b1745833d3f3f4fc432901",
                "name": "q_c14_14_2_3",
                "title": "[14.2.3] Verify that time-sensitive decisions have fallback procedures when human approval cannot be obtained within required timeframes.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "bc02ecd80c2235c23467760a5db8d6fd",
                "name": "q_c14_14_2_4",
                "title": "[14.2.4] Verify that escalation procedures define clear authority levels for different decision types or risk categories, if applicable.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.2 Human-in-the-Loop Decision Checkpoints",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_2;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_3.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_3 = ()=>({
        "type": "panel",
        "name": "C14.3 Chain of Responsibility & Auditability",
        "elements": [
            {
                "type": "radiogroup",
                "id": "6cfada82e3c629d8b482c6d218c8f29c",
                "name": "q_c14_14_3_1",
                "title": "[14.3.1] Verify that all AI system decisions and human interventions are logged with timestamps, user identities, and decision rationale.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.3 Chain of Responsibility & Auditability",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_3;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_4.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_4 = ()=>({
        "type": "panel",
        "name": "C14.4 Explainable-AI Techniques",
        "elements": [
            {
                "type": "radiogroup",
                "id": "e5900f88694362472e24eaf393d4b78b",
                "name": "q_c14_14_4_1",
                "title": "[14.4.1] Verify that AI systems provide basic explanations for their decisions in human-readable format.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "27b3d8eb63a47e7a3339c68b565be4b8",
                "name": "q_c14_14_4_2",
                "title": "[14.4.2] Verify that explanation quality is validated through human evaluation studies and metrics.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "608502bd8c07caa6e5cbe7f694244da0",
                "name": "q_c14_14_4_3",
                "title": "[14.4.3] Verify that feature importance scores or attribution methods (SHAP, LIME, etc.) are available for critical decisions.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "920a632f425f73894a5aeef786d5e602",
                "name": "q_c14_14_4_4",
                "title": "[14.4.4] Verify that counterfactual explanations show how inputs could be modified to change outcomes, if applicable to the use case and domain.",
                "description": "Level: 3 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.4 Explainable-AI Techniques",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_4;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_5.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_5 = ()=>({
        "type": "panel",
        "name": "C14.5 Model Cards & Usage Disclosures",
        "elements": [
            {
                "type": "radiogroup",
                "id": "6052c935dea19c7b735f83b62191ba6c",
                "name": "q_c14_14_5_1",
                "title": "[14.5.1] Verify that model cards document intended use cases, limitations, and known failure modes.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "ac82f1f2ffd1adb0a4eb3c1a6e01f92e",
                "name": "q_c14_14_5_2",
                "title": "[14.5.2] Verify that performance metrics across different applicable use cases are disclosed.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "de7c39e508a40410f44cfd121dbfce88",
                "name": "q_c14_14_5_3",
                "title": "[14.5.3] Verify that ethical considerations, bias assessments, fairness evaluations, training data characteristics, and known training data limitations are documented and updated regularly.",
                "description": "Level: 2 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a6a541266b17c0eb225ae0b84e647ba5",
                "name": "q_c14_14_5_4",
                "title": "[14.5.4] Verify that model cards are version-controlled and maintained throughout the model lifecycle with change tracking.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.5 Model Cards & Usage Disclosures",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_5;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_6.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_6 = ()=>({
        "type": "panel",
        "name": "C14.6 Uncertainty Quantification",
        "elements": [
            {
                "type": "radiogroup",
                "id": "8c00f0b80e426ffdf8cb8bab1e7181f4",
                "name": "q_c14_14_6_1",
                "title": "[14.6.1] Verify that AI systems provide confidence scores or uncertainty measures with their outputs.",
                "description": "Level: 1 | Role: D",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "01f155944f341bfe19da092d5d95c56d",
                "name": "q_c14_14_6_2",
                "title": "[14.6.2] Verify that uncertainty thresholds trigger additional human review or alternative decision pathways.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "a92423854d79110a14b88340c4dba003",
                "name": "q_c14_14_6_3",
                "title": "[14.6.3] Verify that uncertainty quantification methods are calibrated and validated against ground truth data.",
                "description": "Level: 2 | Role: V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "9566cf94c3337beae43403abbd76b47a",
                "name": "q_c14_14_6_4",
                "title": "[14.6.4] Verify that uncertainty propagation is maintained through multi-step AI workflows.",
                "description": "Level: 3 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.6 Uncertainty Quantification",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_6;
}),
"[project]/src/features/assessment/surveys/surveypanels/c14/c14_7.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const c14_7 = ()=>({
        "type": "panel",
        "name": "C14.7 User-Facing Transparency Reports",
        "elements": [
            {
                "type": "radiogroup",
                "id": "f4bb0af8951063992431e7f34dc29390",
                "name": "q_c14_14_7_1",
                "title": "[14.7.1] Verify that data usage policies and user consent management practices are clearly communicated to stakeholders.",
                "description": "Level: 1 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "57a2c7d03c0ad6ce73eb5b81a20044d3",
                "name": "q_c14_14_7_2",
                "title": "[14.7.2] Verify that AI impact assessments are conducted and results are included in reporting.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "cabba92e82f4d3872838cf9c820be272",
                "name": "q_c14_14_7_3",
                "title": "[14.7.3] Verify that transparency reports published regularly disclose AI incidents and operational metrics in reasonable detail.",
                "description": "Level: 2 | Role: D/V",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "No"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Yes, for some"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Yes, for most"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Yes, for all"
                    }
                ]
            }
        ],
        "title": "C14.7 User-Facing Transparency Reports",
        "state": "expanded"
    });
const __TURBOPACK__default__export__ = c14_7;
}),
"[project]/src/features/assessment/surveys/surveypages/c14.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_1.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_2.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_3.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_4.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_5.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_6.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypanels/c14/c14_7.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
var tosend = {
    name: "Control 14",
    elements: []
};
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_1$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_2$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_3$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_4$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_5$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_6$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.elements.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypanels$2f$c14$2f$c14_7$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const c14JSON = ()=>tosend;
const __TURBOPACK__default__export__ = c14JSON;
}),
"[project]/src/features/assessment/surveys/translations-pt.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translateSurvey",
    ()=>translateSurvey
]);
// Traduções AISVS para Português (Brasil)
/** Choice text translations (used in all survey questions) */ const choiceTranslations = {
    "No": "Não",
    "Yes, for some": "Sim, para alguns",
    "Yes, for most": "Sim, para a maioria",
    "Yes, for all": "Sim, para todos"
};
/** Page name translations (Control 1–14 + Details) */ const pageTranslations = {
    "Control 1": "Controle 1",
    "Control 2": "Controle 2",
    "Control 3": "Controle 3",
    "Control 4": "Controle 4",
    "Control 5": "Controle 5",
    "Control 6": "Controle 6",
    "Control 7": "Controle 7",
    "Control 8": "Controle 8",
    "Control 9": "Controle 9",
    "Control 10": "Controle 10",
    "Control 11": "Controle 11",
    "Control 12": "Controle 12",
    "Control 13": "Controle 13",
    "Control 14": "Controle 14",
    "Details": "Detalhes"
};
/** Panel (sub-control) name translations */ const panelTranslations = {
    // C1 — Training Data
    "C1.1 Training Data Origin & Traceability": "C1.1 Origem e Rastreabilidade dos Dados de Treino",
    "C1.2 Training Data Security & Integrity": "C1.2 Segurança e Integridade dos Dados de Treino",
    "C1.3 Data Labeling and Annotation Security": "C1.3 Segurança de Rotulagem e Anotação de Dados",
    "C1.4 Training Data Quality and Security Assurance": "C1.4 Qualidade e Garantia de Segurança dos Dados de Treino",
    "C1.5 Data Lineage and Traceability": "C1.5 Linhagem e Rastreabilidade de Dados",
    // C2 — Input Validation
    "C2.1 Prompt Injection Defense": "C2.1 Defesa contra Injeção de Prompt",
    "C2.2 Adversarial-Example Resistance": "C2.2 Resistência a Exemplos Adversariais",
    "C2.3 Prompt Character Set": "C2.3 Conjunto de Caracteres de Prompt",
    "C2.4 Schema, Type & Length Validation": "C2.4 Validação de Esquema, Tipo e Comprimento",
    "C2.5 Content & Policy Screening": "C2.5 Triagem de Conteúdo e Políticas",
    "C2.6 Input Rate Limiting & Abuse Prevention": "C2.6 Limitação de Taxa de Entrada e Prevenção de Abuso",
    "C2.7 Multi-Modal Input Validation": "C2.7 Validação de Entrada Multimodal",
    "C2.8 Real-Time Adaptive Threat Detection": "C2.8 Detecção Adaptativa de Ameaças em Tempo Real",
    // C3 — Model Lifecycle
    "C3.1 Model Authorization & Integrity": "C3.1 Autorização e Integridade do Modelo",
    "C3.2 Model Validation & Testing": "C3.2 Validação e Testes do Modelo",
    "C3.3 Controlled Deployment & Rollback": "C3.3 Implantação Controlada e Rollback",
    "C3.4 Secure Development Practices": "C3.4 Práticas de Desenvolvimento Seguro",
    "C3.5 Hosted and Provider-Managed Model Controls": "C3.5 Controles de Modelos Hospedados e Gerenciados por Provedores",
    "C3.7 Fine-Tuning Pipeline Authorization & Reward Model Integrity": "C3.7 Autorização de Pipeline de Fine-Tuning e Integridade do Modelo de Recompensa",
    // C4 — Infrastructure
    "C4.1 Runtime Environment Isolation": "C4.1 Isolamento do Ambiente de Execução",
    "C4.2 Secure Build & Deployment Pipelines": "C4.2 Pipelines Seguros de Build e Implantação",
    "C4.3 Network Security & Access Control": "C4.3 Segurança de Rede e Controle de Acesso",
    "C4.4 Secrets & Cryptographic Key Management": "C4.4 Gerenciamento de Segredos e Chaves Criptográficas",
    "C4.5 AI Workload Sandboxing & Validation": "C4.5 Sandboxing e Validação de Cargas de Trabalho de IA",
    "C4.6 AI Infrastructure Resource Management, Backup and Recovery": "C4.6 Gerenciamento de Recursos de Infraestrutura de IA, Backup e Recuperação",
    "C4.7 AI Hardware Security": "C4.7 Segurança de Hardware de IA",
    "C4.8 Edge & Distributed AI Security": "C4.8 Segurança de IA Distribuída e na Borda",
    // C5 — Access Control
    "C5.1 Identity Management & Authentication": "C5.1 Gerenciamento de Identidade e Autenticação",
    "C5.2 Authorization & Policy": "C5.2 Autorização e Política",
    "C5.3 Query-Time Security Enforcement": "C5.3 Aplicação de Segurança em Tempo de Consulta",
    "C5.4 Output Filtering & Data Loss Prevention": "C5.4 Filtragem de Saída e Prevenção de Perda de Dados",
    "C5.5 Multi-Tenant Isolation": "C5.5 Isolamento Multi-Tenant",
    "C5.6 Autonomous Agent Authorization": "C5.6 Autorização de Agentes Autônomos",
    // C6 — Supply Chain
    "C6.1 Pretrained Model Vetting & Origin Integrity": "C6.1 Verificação de Modelos Pré-treinados e Integridade de Origem",
    "C6.2 Framework & Library Scanning": "C6.2 Varredura de Frameworks e Bibliotecas",
    "C6.3 Dependency Pinning & Verification": "C6.3 Fixação e Verificação de Dependências",
    "C6.4 Trusted Source Enforcement": "C6.4 Aplicação de Fontes Confiáveis",
    "C6.5 Third-Party Dataset Risk Assessment": "C6.5 Avaliação de Risco de Datasets de Terceiros",
    "C6.6 Supply Chain Attack Monitoring": "C6.6 Monitoramento de Ataques à Cadeia de Fornecimento",
    "C6.7 AI BOM for Model Artifacts": "C6.7 BOM de IA para Artefatos de Modelo",
    // C7 — Model Behavior
    "C7.1 Output Format Enforcement": "C7.1 Aplicação de Formato de Saída",
    "C7.2 Hallucination Detection & Mitigation": "C7.2 Detecção e Mitigação de Alucinações",
    "C7.3 Output Safety & Privacy Filtering": "C7.3 Filtragem de Segurança e Privacidade da Saída",
    "C7.4 Output & Action Limiting": "C7.4 Limitação de Saída e Ações",
    "C7.5 Explainability & Transparency": "C7.5 Explicabilidade e Transparência",
    "C7.6 Monitoring Integration": "C7.6 Integração de Monitoramento",
    "C7.7 Generative Media Safeguards": "C7.7 Salvaguardas de Mídia Generativa",
    "C7.8 Source Attribution & Citation Integrity": "C7.8 Atribuição de Fonte e Integridade de Citação",
    // C8 — Memory & Vectors
    "C8.1 Access Controls on Memory & RAG Indices": "C8.1 Controles de Acesso em Memória e Índices RAG",
    "C8.2 Embedding Sanitization & Validation": "C8.2 Sanitização e Validação de Embeddings",
    "C8.3 Memory Expiry, Revocation & Deletion": "C8.3 Expiração, Revogação e Exclusão de Memória",
    "C8.4 Prevent Embedding Inversion & Leakage": "C8.4 Prevenção de Inversão e Vazamento de Embeddings",
    "C8.5 Scope Enforcement for User-Specific Memory": "C8.5 Aplicação de Escopo para Memória Específica do Usuário",
    // C9 — Agentic Actions
    "C9.1 Execution Budgets, Loop Control, and Circuit Breakers": "C9.1 Orçamentos de Execução, Controle de Loop e Circuit Breakers",
    "C9.2 High-Impact Action Approval and Irreversibility Controls": "C9.2 Aprovação de Ações de Alto Impacto e Controles de Irreversibilidade",
    "C9.3 Tool and Plugin Isolation and Safe Integration": "C9.3 Isolamento de Ferramentas e Plugins e Integração Segura",
    "C9.4 Agent and Orchestrator Identity, Signing, and Tamper-Evident Audit": "C9.4 Identidade de Agentes e Orquestradores, Assinatura e Auditoria à Prova de Adulteração",
    "C9.5 Secure Messaging and Protocol Hardening": "C9.5 Mensageria Segura e Fortalecimento de Protocolos",
    "C9.6 Authorization, Delegation, and Continuous Enforcement": "C9.6 Autorização, Delegação e Aplicação Contínua",
    "C9.7 Intent Verification and Constraint Gates": "C9.7 Verificação de Intenção e Portões de Restrição",
    "C9.8 Multi-Agent Domain Isolation and Swarm Risk Controls": "C9.8 Isolamento de Domínio Multi-Agente e Controles de Risco de Enxame",
    // C10 — MCP Security
    "C10.1 Component Integrity & Supply Chain Hygiene": "C10.1 Integridade de Componentes e Higiene da Cadeia de Fornecimento",
    "C10.2 Authentication & Authorization": "C10.2 Autenticação e Autorização",
    "C10.3 Secure Transport & Network Boundary Protection": "C10.3 Transporte Seguro e Proteção de Perímetro de Rede",
    "C10.4 Schema, Message, and Input Validation": "C10.4 Validação de Esquema, Mensagem e Entrada",
    "C10.5 Outbound Access & Agent Execution Safety": "C10.5 Acesso de Saída e Segurança de Execução de Agentes",
    "C10.6 Transport Restrictions & High-Risk Boundary Controls": "C10.6 Restrições de Transporte e Controles de Fronteira de Alto Risco",
    // C11 — Adversarial Robustness
    "C11.1 Model Alignment & Safety": "C11.1 Alinhamento e Segurança do Modelo",
    "C11.2 Adversarial-Example Hardening": "C11.2 Fortalecimento contra Exemplos Adversariais",
    "C11.3 Membership-Inference Mitigation": "C11.3 Mitigação de Inferência de Pertencimento",
    "C11.4 Model-Inversion Resistance": "C11.4 Resistência à Inversão de Modelo",
    "C11.5 Model-Extraction Defense": "C11.5 Defesa contra Extração de Modelo",
    "C11.6 Inference-Time Poisoned-Data Detection": "C11.6 Detecção de Dados Envenenados em Tempo de Inferência",
    "C11.7 Security Policy Adaptation": "C11.7 Adaptação de Política de Segurança",
    "C11.8 Agent Security Self-Assessment": "C11.8 Autoavaliação de Segurança de Agentes",
    "C11.9 Self-Modification & Autonomous Update Security": "C11.9 Segurança de Automodificação e Atualização Autônoma",
    "C11.10 Adversarial Bias Exploitation Defense": "C11.10 Defesa contra Exploração de Viés Adversarial",
    // C12 — Privacy
    "C12.1 Anonymization & Data Minimization": "C12.1 Anonimização e Minimização de Dados",
    "C12.2 Right-to-be-Forgotten & Deletion Enforcement": "C12.2 Direito ao Esquecimento e Aplicação de Exclusão",
    "C12.3 Differential-Privacy Safeguards": "C12.3 Salvaguardas de Privacidade Diferencial",
    "C12.4 Purpose-Limitation & Scope-Creep Protection": "C12.4 Limitação de Finalidade e Proteção contra Ampliação de Escopo",
    "C12.5 Consent Management & Lawful-Basis Tracking": "C12.5 Gerenciamento de Consentimento e Rastreamento de Base Legal",
    "C12.6 Federated Learning with Privacy Controls": "C12.6 Aprendizado Federado com Controles de Privacidade",
    // C13 — Monitoring
    "C13.1 Request & Response Logging": "C13.1 Registro de Requisições e Respostas",
    "C13.2 Abuse Detection and Alerting": "C13.2 Detecção de Abuso e Alertas",
    "C13.3 Model, Data, and Performance Drift Detection": "C13.3 Detecção de Drift de Modelo, Dados e Desempenho",
    "C13.4 Performance & Behavior Telemetry": "C13.4 Telemetria de Desempenho e Comportamento",
    "C13.5 AI Incident Response Planning & Execution": "C13.5 Planejamento e Execução de Resposta a Incidentes de IA",
    "C13.6 DAG Visualization & Workflow Security": "C13.6 Visualização DAG e Segurança de Workflow",
    "C13.7 Proactive Security Behavior Monitoring": "C13.7 Monitoramento Proativo de Comportamento de Segurança",
    // C14 — Human Oversight
    "C14.1 Kill-Switch & Override Mechanisms": "C14.1 Mecanismos de Kill-Switch e Substituição",
    "C14.2 Human-in-the-Loop Decision Checkpoints": "C14.2 Pontos de Verificação de Decisão com Humano no Loop",
    "C14.3 Chain of Responsibility & Auditability": "C14.3 Cadeia de Responsabilidade e Auditabilidade",
    "C14.4 Explainable-AI Techniques": "C14.4 Técnicas de IA Explicável",
    "C14.5 Model Cards & Usage Disclosures": "C14.5 Cartões de Modelo e Divulgações de Uso",
    "C14.6 Uncertainty Quantification": "C14.6 Quantificação de Incerteza",
    "C14.7 User-Facing Transparency Reports": "C14.7 Relatórios de Transparência para o Usuário"
};
/** Field-label translations for the Details page */ const fieldTranslations = {
    "Company Name": "Nome da Empresa",
    "Project name": "Nome do Projeto",
    "Description of Project": "Descrição do Projeto"
};
function translateSurvey(surveyJson, locale) {
    if (locale !== 'pt') return surveyJson;
    const clone = JSON.parse(JSON.stringify(surveyJson));
    for (const page of clone.pages || []){
        // Translate page name
        if (page.name && pageTranslations[page.name]) {
            page.title = pageTranslations[page.name];
        }
        for (const element of page.elements || []){
            // Translate panel name/title
            if (element.type === 'panel') {
                if (element.name && panelTranslations[element.name]) {
                    element.title = panelTranslations[element.name];
                }
                // Translate questions inside panels
                for (const q of element.elements || []){
                    translateChoices(q);
                    translateField(q);
                }
            } else {
                // Top-level question (e.g. Details page fields)
                translateChoices(element);
                translateField(element);
            }
        }
    }
    return clone;
}
/** Question title translations (454 AISVS verification requirements) */ const questionTranslations = {
    "q_c01_1_1_1": "[1.1.1] Verifique que um inventário atualizado de cada fonte de dados de treino (origem, responsável, licença, método de coleta, restrições de uso pretendido e histórico de processamento) é mantido.",
    "q_c01_1_1_2": "[1.1.2] Verifique que os processos de dados de treino excluem recursos, atributos ou campos desnecessários (por exemplo, metadados não utilizados, PII sensível, dados de teste vazados).",
    "q_c01_1_1_3": "[1.1.3] Verifique que todas as alterações em conjuntos de dados estão sujeitas a um fluxo de trabalho de aprovação com registro de auditoria.",
    "q_c01_1_1_4": "[1.1.4] Verifique que conjuntos de dados ou subconjuntos são marcados com watermark ou fingerprint onde viável.",
    "q_c01_1_2_1": "[1.2.1] Verifique que controles de acesso protegem o armazenamento de dados de treino e os pipelines.",
    "q_c01_1_2_2": "[1.2.2] Verifique que todo acesso aos dados de treino é registrado, incluindo usuário, horário e ação.",
    "q_c01_1_2_3": "[1.2.3] Verifique que os conjuntos de dados de treino são criptografados em trânsito e em repouso, utilizando algoritmos criptográficos e práticas de gerenciamento de chaves recomendados atualmente.",
    "q_c01_1_2_4": "[1.2.4] Verifique que hashes criptográficos ou assinaturas digitais são usados para garantir a integridade dos dados durante o armazenamento e transferência de dados de treino.",
    "q_c01_1_2_5": "[1.2.5] Verifique que o monitoramento automatizado de integridade é aplicado para proteger contra modificações não autorizadas ou corrupção dos dados de treino.",
    "q_c01_1_2_6": "[1.2.6] Verifique que dados de treino obsoletos são eliminados com segurança ou anonimizados.",
    "q_c01_1_2_7": "[1.2.7] Verifique que todas as versões de conjuntos de dados de treino são identificadas de forma única, armazenadas de forma imutável e auditáveis para suportar reversão e análise forense.",
    "q_c01_1_3_1": "[1.3.1] Verifique que interfaces e plataformas de rotulagem impõem controles de acesso e mantêm registros de auditoria de todas as atividades de rotulagem, e que os metadados de identidade dos anotadores são exportados e retidos junto ao conjunto de dados, de modo que toda anotação ou par de preferência possa ser atribuído a um anotador humano específico e verificado ao longo de todo o pipeline de treino, não apenas dentro da plataforma de rotulagem.",
    "q_c01_1_3_2": "[1.3.2] Verifique que hashes criptográficos ou assinaturas digitais são aplicados a artefatos de rotulagem, dados de anotação e registros de feedback de ajuste fino (incluindo pares de preferência RLHF) para garantir sua integridade e autenticidade.",
    "q_c01_1_3_3": "[1.3.3] Verifique que os registros de auditoria de rotulagem são à prova de adulteração e que as plataformas de rotulagem protegem contra modificações não autorizadas.",
    "q_c01_1_3_4": "[1.3.4] Verifique que informações sensíveis em rótulos são redigidas, anonimizadas ou criptografadas com granularidade apropriada em repouso e em trânsito.",
    "q_c01_1_4_1": "[1.4.1] Verifique que testes automatizados detectam erros de formato e valores nulos a cada ingestão ou transformação significativa de dados.",
    "q_c01_1_4_2": "[1.4.2] Verifique que os pipelines de treino e ajuste fino implementam validação de integridade de dados e técnicas de detecção de envenenamento (por exemplo, análise estatística, detecção de outliers, análise de embeddings) para identificar potencial envenenamento de dados ou corrupção não intencional nos dados de treino.",
    "q_c01_1_4_3": "[1.4.3] Verifique que rótulos gerados automaticamente (por exemplo, via modelos ou supervisão fraca) estão sujeitos a limites de confiança e verificações de consistência para detectar rótulos enganosos ou de baixa confiança.",
    "q_c01_1_4_4": "[1.4.4] Verifique que defesas apropriadas, como treinamento adversarial, aumento de dados com entradas perturbadas ou técnicas de otimização robusta, são implementadas e ajustadas para modelos relevantes com base em avaliação de risco.",
    "q_c01_1_4_5": "[1.4.5] Verifique que testes automatizados detectam desvios de rótulos a cada ingestão ou transformação significativa de dados.",
    "q_c01_1_4_6": "[1.4.6] Verifique que modelos usados em decisões relevantes para segurança (por exemplo, detecção de abuso, pontuação de fraude, decisões automatizadas de confiança) são avaliados quanto a padrões sistemáticos de viés que um adversário poderia explorar para evadir controles (por exemplo, imitar um estilo de linguagem ou padrão demográfico confiável para contornar a detecção).",
    "q_c01_1_5_1": "[1.5.1] Verifique que a linhagem de cada conjunto de dados e seus componentes, incluindo todas as transformações, aumentos e mesclagens, é registrada e pode ser reconstruída.",
    "q_c01_1_5_2": "[1.5.2] Verifique que os registros de linhagem são imutáveis, armazenados com segurança e acessíveis para auditorias.",
    "q_c01_1_5_3": "[1.5.3] Verifique que o rastreamento de linhagem cobre dados sintéticos gerados via aumento, síntese ou técnicas de preservação de privacidade, e que todos os dados sintéticos são claramente rotulados e distinguíveis de dados reais ao longo de todo o pipeline.",
    "q_c02_2_1_1": "[2.1.1] Verifique que todas as entradas externas ou derivadas que possam orientar o comportamento do modelo são tratadas como não confiáveis e verificadas por um conjunto de regras ou classificador de detecção de injeção de prompt antes de serem incluídas em prompts ou usadas para acionar ações.",
    "q_c02_2_1_2": "[2.1.2] Verifique que o sistema impõe uma hierarquia de instruções na qual mensagens de sistema e do desenvolvedor substituem instruções do usuário e outras entradas não confiáveis, mesmo após o processamento das instruções do usuário.",
    "q_c02_2_1_3": "[2.1.3] Verifique que prompts originados de conteúdo de terceiros (páginas web, PDFs, e-mails) são sanitizados em isolamento (por exemplo, removendo diretivas semelhantes a instruções e neutralizando conteúdo HTML, Markdown e script) antes de serem concatenados no prompt principal.",
    "q_c02_2_1_4": "[2.1.4] Verifique que os controles de comprimento de entrada levam em conta os limites da janela de contexto e que o sistema impede que conteúdo fornecido pelo usuário exceda uma proporção da janela de contexto total que deslocaria instruções de sistema ou diretivas de segurança da atenção efetiva do modelo.",
    "q_c02_2_2_1": "[2.2.1] Verifique que etapas básicas de normalização de entrada (NFC Unicode, mapeamento de homoglifos, remoção de espaços em branco, remoção de caracteres de controle e Unicode invisíveis) são executadas antes da tokenização ou embedding e antes da análise em argumentos de ferramentas ou MCP.",
    "q_c02_2_2_2": "[2.2.2] Verifique que entradas adversariais suspeitas são colocadas em quarentena e registradas.",
    "q_c02_2_2_3": "[2.2.3] Verifique que entradas que desviam dos padrões esperados, conforme determinado por detecção de anomalias estatísticas ou semânticas, são bloqueadas antes de serem incluídas em prompts ou de acionarem ações.",
    "q_c02_2_2_4": "[2.2.4] Verifique que o pipeline de inferência suporta variantes de modelo com treinamento adversarial ou camadas de defesa (por exemplo, randomização, destilação defensiva, verificações de alinhamento) para endpoints de alto risco.",
    "q_c02_2_2_5": "[2.2.5] Verifique que o contrabando de codificação e representação em entradas e saídas (por exemplo, caracteres Unicode invisíveis/de controle, trocas de homoglifos ou texto de direção mista) é detectado e mitigado. Mitigações aprovadas incluem canonicalização, validação estrita de esquema, rejeição baseada em política ou marcação explícita.",
    "q_c02_2_3_1": "[2.3.1] Verifique que o sistema implementa limitação de conjunto de caracteres para entradas do usuário, permitindo apenas caracteres explicitamente necessários para fins comerciais usando uma abordagem de lista de permissões.",
    "q_c02_2_3_2": "[2.3.2] Verifique que entradas contendo caracteres fora do conjunto permitido são rejeitadas e registradas com metadados de rastreamento (origem, ferramenta ou servidor MCP, ID do agente, sessão).",
    "q_c02_2_4_1": "[2.4.1] Verifique que cada API, ferramenta ou endpoint MCP define um esquema de entrada explícito (por exemplo, JSON Schema, Protocol Buffers ou equivalente multimodal), rejeita campos extras ou desconhecidos e coerção implícita de tipos, e valida entradas no lado do servidor antes da montagem do prompt ou execução da ferramenta.",
    "q_c02_2_4_2": "[2.4.2] Verifique que entradas que excedem os limites máximos de tokens ou bytes são rejeitadas com um erro seguro e nunca truncadas silenciosamente.",
    "q_c02_2_4_3": "[2.4.3] Verifique que verificações de tipo (por exemplo, intervalos numéricos, valores enumerados e tipos MIME para imagens ou áudio) são aplicadas a todas as entradas no lado do servidor, incluindo argumentos de ferramentas ou MCP.",
    "q_c02_2_4_4": "[2.4.4] Verifique que validadores semânticos são executados em tempo constante e evitam chamadas de rede externas para prevenir DoS algorítmico.",
    "q_c02_2_4_5": "[2.4.5] Verifique que falhas de validação são registradas com trechos de payload redigidos e códigos de erro inequívocos, e incluem metadados de rastreamento (origem, ferramenta ou servidor MCP, ID do agente, sessão) para auxiliar na triagem de segurança.",
    "q_c02_2_5_1": "[2.5.1] Verifique que um classificador de conteúdo pontua cada entrada e saída para violência, automutilação, ódio, conteúdo sexual e solicitações ilegais, com limites configuráveis.",
    "q_c02_2_5_2": "[2.5.2] Verifique que entradas que violam políticas são rejeitadas de modo que não se propaguem para chamadas de modelo ou ferramentas/MCP subsequentes.",
    "q_c02_2_5_3": "[2.5.3] Verifique que a triagem respeita políticas específicas do usuário (restrições legais de idade e regionais) por meio de regras baseadas em atributos resolvidas no momento da solicitação, incluindo a função ou nível de permissão do agente chamador.",
    "q_c02_2_5_4": "[2.5.4] Verifique que os registros de triagem incluem pontuações de confiança do classificador e tags de categoria de política com o estágio aplicado (pré-prompt ou pós-resposta) e metadados de rastreamento (origem, ferramenta ou servidor MCP, ID do agente, sessão) para correlação no SOC e repetição futura de red team.",
    "q_c02_2_6_1": "[2.6.1] Verifique que limites de taxa por usuário, por IP, por chave de API, por agente e por sessão/tarefa são aplicados a todos os endpoints de entrada e ferramentas/MCP.",
    "q_c02_2_6_2": "[2.6.2] Verifique que limites de taxa de pico e sustentados são ajustados para prevenir ataques de DoS e força bruta, e que orçamentos por tarefa (por exemplo, tokens, chamadas a ferramentas/MCP e custo) são aplicados para loops de planejamento de agentes.",
    "q_c02_2_6_3": "[2.6.3] Verifique que padrões de uso anômalos (por exemplo, requisições em rajada, inundação de entradas, chamadas repetitivas e falhas de ferramentas/MCP ou loops recursivos de agentes) acionam bloqueios ou escalações automatizadas.",
    "q_c02_2_6_4": "[2.6.4] Verifique que os registros de prevenção de abuso são retidos e revisados para identificar padrões de ataque emergentes, com metadados de rastreamento (origem, ferramenta ou servidor MCP, ID do agente, sessão).",
    "q_c02_2_7_1": "[2.7.1] Verifique que todas as entradas não textuais (imagens, áudio, arquivos) são validadas quanto a tipo, tamanho e formato antes do processamento, e que qualquer texto extraído (imagem para texto ou fala para texto) e quaisquer instruções ocultas ou incorporadas (metadados, camadas, texto alternativo, comentários) são tratados como não confiáveis conforme o item 2.1.1.",
    "q_c02_2_7_2": "[2.7.2] Verifique que arquivos são verificados quanto a malware e payloads esteganográficos antes da ingestão, e que qualquer conteúdo ativo (como scripts ou macros) é removido ou o arquivo é colocado em quarentena.",
    "q_c02_2_7_3": "[2.7.3] Verifique que entradas de imagem/áudio são verificadas quanto a perturbações adversariais ou padrões de ataque conhecidos, e que detecções acionam bloqueio (bloquear ou degradar capacidades) antes do uso pelo modelo.",
    "q_c02_2_7_4": "[2.7.4] Verifique que falhas de validação de entrada multimodal acionam registro detalhado incluindo todas as modalidades de entrada, resultados de validação, pontuações de ameaça e metadados de rastreamento (origem, ferramenta ou servidor MCP, ID do agente, sessão conforme aplicável), e geram alertas para investigação.",
    "q_c02_2_7_5": "[2.7.5] Verifique que a detecção de ataques cross-modal identifica ataques coordenados abrangendo múltiplos tipos de entrada (por exemplo, payloads esteganográficos em imagens combinados com injeção de prompt em texto) com regras de correlação e geração de alertas, e que detecções confirmadas são bloqueadas ou requerem aprovação HITL (humano no loop).",
    "q_c02_2_8_1": "[2.8.1] Verifique que a correspondência de padrões (por exemplo, expressões regulares compiladas) é executada em todas as entradas e saídas (incluindo superfícies de ferramentas/MCP).",
    "q_c02_2_8_2": "[2.8.2] Verifique que modelos de detecção adaptativa ajustam a sensibilidade com base na atividade de ataque recente e são atualizados com novos padrões em tempo real, e acionam respostas adaptativas ao risco (por exemplo, desabilitar ferramentas, reduzir contexto ou exigir aprovação HITL).",
    "q_c02_2_8_3": "[2.8.3] Verifique que a precisão de detecção é aprimorada por meio de análise contextual do histórico do usuário, origem e comportamento da sessão, incluindo metadados de rastreamento (origem, ferramenta ou servidor MCP, ID do agente, sessão).",
    "q_c02_2_8_4": "[2.8.4] Verifique que as métricas de desempenho de detecção (taxa de detecção, taxa de falsos positivos, latência de processamento) são continuamente monitoradas e otimizadas, incluindo tempo para bloqueio e estágio (pré-prompt/pós-resposta).",
    "q_c03_3_1_1": "[3.1.1] Verifique que um registro de modelos mantém um inventário de todos os artefatos de modelo implantados e produz um Model/AI Bill of Materials (MBOM/AIBOM) legível por máquina (por exemplo, SPDX ou CycloneDX).",
    "q_c03_3_1_2": "[3.1.2] Verifique que todos os artefatos de modelo (pesos, configurações, tokenizadores, modelos base, ajustes finos, adaptadores e modelos de segurança/política) são assinados criptograficamente por entidades autorizadas e verificados na admissão de implantação (e no carregamento), bloqueando qualquer artefato não assinado ou adulterado.",
    "q_c03_3_1_3": "[3.1.3] Verifique que o rastreamento de linhagem e dependências mantém um grafo de dependências que permite identificar todos os serviços e agentes consumidores por ambiente (por exemplo, dev, staging, prod).",
    "q_c03_3_1_4": "[3.1.4] Verifique que os registros de integridade e rastreamento de origem do modelo incluem a identidade de uma entidade autorizadora, checksums de dados de treino, resultados de testes de validação com status de aprovação/reprovação, impressão digital de assinatura/ID de cadeia de certificados, um timestamp de criação e ambientes de implantação aprovados.",
    "q_c03_3_2_1": "[3.2.1] Verifique que os modelos passam por testes de segurança automatizados que incluem validação de entrada, sanitização de saída e avaliações de segurança com limites de aprovação/reprovação antes da implantação.",
    "q_c03_3_2_2": "[3.2.2] Verifique que os testes de segurança cobrem fluxos de trabalho de agentes, integrações de ferramentas e MCP, interações com RAG e memória, entradas multimodais e guardrails (modelos de segurança ou serviços de detecção) usando um conjunto de avaliação versionado.",
    "q_c03_3_2_3": "[3.2.3] Verifique que todas as alterações de modelo (implantação, configuração, desativação) geram registros de auditoria imutáveis incluindo timestamp, identidade do ator autenticado, tipo de alteração e estados anterior/posterior, com metadados de rastreamento (ambiente e serviços/agentes consumidores) e um identificador de modelo (versão/digest/assinatura).",
    "q_c03_3_2_4": "[3.2.4] Verifique que falhas de validação bloqueiam automaticamente a implantação do modelo, a menos que haja aprovação explícita de substituição por pessoal autorizado pré-designado com justificativas comerciais documentadas.",
    "q_c03_3_2_5": "[3.2.5] Verifique que modelos submetidos a quantização, poda ou destilação pós-treino são reavaliados com o mesmo conjunto de testes de segurança e alinhamento no artefato comprimido antes da implantação, e que os resultados da avaliação são retidos como registros distintos vinculados à versão ou digest do artefato comprimido.",
    "q_c03_3_3_1": "[3.3.1] Verifique que os processos de implantação validam assinaturas criptográficas e calculam checksums de integridade antes da ativação ou carregamento do modelo, falhando na implantação em caso de qualquer incompatibilidade.",
    "q_c03_3_3_2": "[3.3.2] Verifique que as implantações em produção implementam mecanismos de rollout gradual (por exemplo, implantações canary ou blue-green) com gatilhos de rollback automáticos baseados em taxas de erro pré-acordadas, limites de latência, alertas de guardrail ou taxas de falha de ferramentas/MCP.",
    "q_c03_3_3_3": "[3.3.3] Verifique que as capacidades de rollback restauram o estado completo do modelo (pesos, configurações, dependências incluindo adaptadores e modelos de segurança/política) de forma atômica.",
    "q_c03_3_3_4": "[3.3.4] Verifique que as capacidades de desligamento emergencial do modelo podem desabilitar os endpoints do modelo dentro de um tempo de resposta pré-definido.",
    "q_c03_3_3_5": "[3.3.5] Verifique que o desligamento emergencial se propaga para todas as partes do sistema, incluindo por exemplo a desativação do acesso de agentes a ferramentas e MCP, conectores RAG, credenciais de banco de dados e API, e vinculações de armazenamento de memória.",
    "q_c03_3_4_1": "[3.4.1] Verifique que os ambientes de desenvolvimento, teste e produção de modelos são separados física ou logicamente, sem infraestrutura compartilhada, com controles de acesso distintos e armazenamentos de dados isolados, e que a orquestração de agentes e servidores de ferramentas ou MCP também são isolados.",
    "q_c03_3_4_2": "[3.4.2] Verifique que os artefatos de desenvolvimento de modelos (como hiperparâmetros, scripts de treino, arquivos de configuração, templates de prompt, políticas/grafos de roteamento de agentes, contratos/esquemas de ferramentas ou MCP, e catálogos de ações ou listas de permissões de capacidades) são armazenados em controle de versão e requerem aprovação por revisão de pares antes do uso no treino.",
    "q_c03_3_4_3": "[3.4.3] Verifique que o treino e ajuste fino de modelos ocorrem em ambientes isolados com acesso de rede controlado usando listas de permissões de egresso e sem acesso a recursos de ferramentas ou MCP de produção.",
    "q_c03_3_4_4": "[3.4.4] Verifique que as fontes de dados de treino são validadas por verificações de integridade e autenticadas por meio de fontes confiáveis com cadeia de custódia documentada antes do uso no desenvolvimento de modelos, incluindo índices RAG, logs de ferramentas e dados gerados por agentes usados para ajuste fino.",
    "q_c03_3_5_1": "[3.5.1] Verifique que as dependências de modelos hospedados são inventariadas com provedor, endpoint, identificador de modelo exposto pelo provedor, identificador de versão ou release quando disponível, e relações de fallback ou roteamento.",
    "q_c03_3_5_2": "[3.5.2] Verifique que mudanças de modelo, versão ou roteamento do provedor acionam reavaliação de segurança antes do uso continuado em fluxos de trabalho de alto risco.",
    "q_c03_3_5_3": "[3.5.3] Verifique que os registros registram o identificador exato do modelo hospedado retornado pelo provedor, ou registram explicitamente que nenhum identificador desse tipo foi exposto.",
    "q_c03_3_5_4": "[3.5.4] Verifique que implantações de alta garantia falham de forma segura ou requerem aprovação explícita quando o provedor não expõe informações suficientes de identidade do modelo ou de notificação de alterações para verificação.",
    "q_c03_3_7_1": "[3.7.1] Verifique que iniciar uma execução de ajuste fino ou retreinamento requer autorização de uma pessoa que não solicitou a execução (separação de funções).",
    "q_c03_3_7_2": "[3.7.2] Verifique que os modelos de recompensa usados no ajuste fino por RLHF são versionados, assinados criptograficamente e verificados quanto à integridade antes do uso em uma execução de treino.",
    "q_c03_3_7_3": "[3.7.3] Verifique que os estágios de treino RLHF incluem detecção automatizada de hacking de recompensa ou superotimização do modelo de recompensa (por exemplo, conjuntos de sonda de preferência humana reservados, limites de divergência ou monitoramento de penalidade KL), com a execução bloqueada para promoção se os limites de detecção forem excedidos.",
    "q_c03_3_7_4": "[3.7.4] Verifique que em pipelines de ajuste fino em múltiplos estágios, a saída de cada estágio é verificada quanto à integridade antes de ser consumida pelo próximo estágio, e checkpoints intermediários são registrados como artefatos distintos permitindo rollback por estágio.",
    "q_c04_4_1_1": "[4.1.1] Verifique que todas as cargas de trabalho de IA são executadas com as permissões mínimas necessárias no sistema operacional, por exemplo descartando capacidades Linux desnecessárias no caso de um contêiner.",
    "q_c04_4_1_2": "[4.1.2] Verifique que as cargas de trabalho são protegidas por tecnologias que limitam a exploração, como sandboxing, perfis seccomp, AppArmor, SELinux ou similares, e que a configuração é adequada.",
    "q_c04_4_1_3": "[4.1.3] Verifique que as cargas de trabalho são executadas com um sistema de arquivos raiz somente leitura, e que quaisquer montagens graváveis são explicitamente definidas e reforçadas com opções restritivas que impedem execução e escalação de privilégios (por exemplo, noexec, nosuid, nodev).",
    "q_c04_4_1_4": "[4.1.4] Verifique que o monitoramento em tempo de execução detecta comportamentos de escalação de privilégios e escape de contêiner e encerra automaticamente os processos ofensores.",
    "q_c04_4_1_5": "[4.1.5] Verifique que cargas de trabalho de IA de alto risco são executadas em ambientes isolados por hardware (por exemplo, TEEs, hypervisors confiáveis ou nós bare-metal) somente após atestação remota bem-sucedida.",
    "q_c04_4_2_1": "[4.2.1] Verifique que as builds são completamente automatizadas e produzem uma lista de materiais de software (SBOM).",
    "q_c04_4_2_2": "[4.2.2] Verifique que os artefatos de build são assinados criptograficamente com metadados de origem do build (repositório de código-fonte, pipeline de build, hash de commit) que podem ser verificados de forma independente.",
    "q_c04_4_2_3": "[4.2.3] Verifique que as assinaturas de artefatos de build e os metadados de origem do build são validados na admissão de implantação, e artefatos não verificados são rejeitados.",
    "q_c04_4_2_4": "[4.2.4] Verifique que as builds são reproduzíveis, produzindo saída idêntica a partir de entradas de código-fonte idênticas, permitindo verificação independente da integridade do build.",
    "q_c04_4_3_1": "[4.3.1] Verifique que as políticas de rede aplicam negação padrão de ingresso e egresso, com apenas os serviços necessários explicitamente permitidos.",
    "q_c04_4_3_2": "[4.3.2] Verifique que as cargas de trabalho de IA em todos os ambientes (desenvolvimento, teste, produção) são executadas em segmentos de rede isolados sem acesso direto à internet e sem funções de identidade, grupos de segurança ou conectividade entre ambientes compartilhados.",
    "q_c04_4_3_3": "[4.3.3] Verifique que os protocolos de acesso administrativo e remoto e o acesso a serviços de metadados de nuvem são restritos e requerem autenticação forte.",
    "q_c04_4_3_4": "[4.3.4] Verifique que a comunicação entre serviços usa TLS mútuo com validação de certificado e rotação automatizada regular.",
    "q_c04_4_3_5": "[4.3.5] Verifique que o tráfego de egresso é restrito a destinos aprovados e todas as requisições são registradas.",
    "q_c04_4_4_1": "[4.4.1] Verifique que os segredos são armazenados em um sistema dedicado de gerenciamento de segredos com criptografia em repouso e isolado das cargas de trabalho da aplicação.",
    "q_c04_4_4_2": "[4.4.2] Verifique que o acesso a segredos de produção requer autenticação forte.",
    "q_c04_4_4_3": "[4.4.3] Verifique que os segredos são implantados nas aplicações em tempo de execução por meio de um sistema dedicado de gerenciamento de segredos. Segredos nunca devem ser incorporados em código-fonte, arquivos de configuração, artefatos de build, imagens de contêiner ou variáveis de ambiente.",
    "q_c04_4_4_4": "[4.4.4] Verifique que as chaves criptográficas são geradas e armazenadas em módulos com suporte de hardware (por exemplo, HSMs, KMS de nuvem).",
    "q_c04_4_4_5": "[4.4.5] Verifique que a rotação de segredos é automatizada.",
    "q_c04_4_5_1": "[4.5.1] Verifique que modelos de IA externos ou não confiáveis são executados em sandboxes isoladas.",
    "q_c04_4_5_2": "[4.5.2] Verifique que as cargas de trabalho em sandbox não têm conectividade de rede de saída por padrão, com qualquer acesso necessário explicitamente definido.",
    "q_c04_4_5_3": "[4.5.3] Verifique que a atestação de carga de trabalho é realizada antes do carregamento do modelo, garantindo prova criptográfica de que o ambiente de execução não foi adulterado.",
    "q_c04_4_5_4": "[4.5.4] Verifique que as cargas de trabalho confidenciais são executadas dentro de um ambiente de execução confiável (TEE) que fornece isolamento imposto por hardware, criptografia de memória e proteção de integridade.",
    "q_c04_4_5_5": "[4.5.5] Verifique que os serviços de inferência confidencial impedem a extração de modelos por meio de computação criptografada com pesos de modelo selados e execução protegida.",
    "q_c04_4_5_6": "[4.5.6] Verifique que a orquestração de ambientes de execução confiáveis inclui gerenciamento de ciclo de vida, atestação remota e canais de comunicação criptografados.",
    "q_c04_4_5_7": "[4.5.7] Verifique que a computação segura multipartidária (SMPC) habilita o treino colaborativo de IA sem expor conjuntos de dados individuais ou parâmetros de modelo.",
    "q_c04_4_6_1": "[4.6.1] Verifique que o consumo de recursos de carga de trabalho é limitado por cotas e limites (por exemplo, CPU, memória, GPU) para mitigar ataques de negação de serviço.",
    "q_c04_4_6_2": "[4.6.2] Verifique que o esgotamento de recursos aciona proteções automatizadas (por exemplo, limitação de taxa ou isolamento de carga de trabalho) após a superação de limites definidos de CPU, memória ou requisições.",
    "q_c04_4_6_3": "[4.6.3] Verifique que os sistemas de backup são executados em redes isoladas com credenciais separadas, e que o sistema de armazenamento é executado em rede air-gapped ou implementa proteção WORM (escrita única, leitura múltipla) contra modificações não autorizadas.",
    "q_c04_4_7_1": "[4.7.1] Verifique que antes da execução da carga de trabalho, a integridade do acelerador de IA é validada usando mecanismos de atestação baseados em hardware (por exemplo, TPM, DRTM ou equivalente).",
    "q_c04_4_7_2": "[4.7.2] Verifique que a memória do acelerador (GPU) é isolada entre cargas de trabalho por meio de mecanismos de particionamento com sanitização de memória entre jobs.",
    "q_c04_4_7_3": "[4.7.3] Verifique que o firmware do acelerador de IA tem versão fixada, é assinado e atestado na inicialização; firmware não assinado ou de depuração é bloqueado.",
    "q_c04_4_7_4": "[4.7.4] Verifique que a VRAM e a memória no chip são zeradas entre jobs/inquilinos e que as políticas de reinicialização de dispositivo previnem a remanência de dados entre inquilinos.",
    "q_c04_4_7_5": "[4.7.5] Verifique que os recursos de particionamento/isolamento (por exemplo, MIG/particionamento de VM) são aplicados por inquilino e impedem o acesso de memória ponto a ponto entre partições.",
    "q_c04_4_7_6": "[4.7.6] Verifique que módulos de segurança de hardware (HSMs) ou hardware resistente a adulteração equivalente protegem os pesos de modelos de IA e chaves criptográficas, com certificação em nível de garantia apropriado (por exemplo, FIPS 140-3 Nível 3 ou Common Criteria EAL4+).",
    "q_c04_4_7_7": "[4.7.7] Verifique que as interconexões de aceleradores (NVLink/PCIe/InfiniBand/RDMA/NCCL) são restritas a topologias aprovadas e endpoints autenticados; links em texto simples entre inquilinos são proibidos.",
    "q_c04_4_7_8": "[4.7.8] Verifique que a telemetria do acelerador (consumo de energia, temperatura, correção de erros, contadores de desempenho) é exportada para monitoramento de segurança centralizado e gera alertas sobre anomalias indicativas de canais laterais ou canais encobertos.",
    "q_c04_4_8_1": "[4.8.1] Verifique que dispositivos de IA de borda se autenticam na infraestrutura central usando autenticação mútua com validação de certificado (por exemplo, TLS mútuo).",
    "q_c04_4_8_2": "[4.8.2] Verifique que modelos implantados em dispositivos de borda ou móveis são assinados criptograficamente durante o empacotamento, e que o runtime no dispositivo valida essas assinaturas ou checksums antes do carregamento ou inferência; modelos não verificados ou alterados devem ser rejeitados.",
    "q_c04_4_8_3": "[4.8.3] Verifique que dispositivos de borda implementam inicialização segura com assinaturas verificadas e proteção contra downgrade para prevenir ataques de rebaixamento de firmware.",
    "q_c04_4_8_4": "[4.8.4] Verifique que aplicações de inferência móveis ou de borda implementam proteções antitampering em nível de plataforma (por exemplo, assinatura de código, inicialização verificada, verificações de integridade em tempo de execução) que detectam e bloqueiam binários modificados, aplicações reempacotadas ou frameworks de instrumentação anexados.",
    "q_c04_4_8_5": "[4.8.5] Verifique que a coordenação de IA distribuída usa mecanismos de consenso tolerantes a falhas Bizantinas com validação de participantes e detecção de nós maliciosos.",
    "q_c04_4_8_6": "[4.8.6] Verifique que a comunicação borda-nuvem suporta limitação de largura de banda, compressão de dados e operação segura offline com armazenamento local criptografado.",
    "q_c04_4_8_7": "[4.8.7] Verifique que os runtimes de inferência no dispositivo aplicam isolamento de processo, memória e acesso a arquivos para impedir dump de modelo, depuração ou extração de embeddings e ativações intermediárias.",
    "q_c04_4_8_8": "[4.8.8] Verifique que os pesos de modelo e parâmetros sensíveis armazenados localmente são criptografados usando armazenamentos de chaves com suporte de hardware ou enclaves seguros (por exemplo, Android Keystore, iOS Secure Enclave, TPM/TEE), com chaves inacessíveis ao espaço de usuário.",
    "q_c04_4_8_9": "[4.8.9] Verifique que modelos empacotados em aplicações móveis, IoT ou embarcadas são criptografados ou ofuscados em repouso, e descriptografados apenas dentro de um runtime confiável ou enclave seguro, impedindo a extração direta do pacote da aplicação ou do sistema de arquivos.",
    "q_c05_5_1_1": "[5.1.1] Verifique que todos os usuários humanos e principais de serviço se autenticam por meio de um provedor de identidade centralizado usando protocolos de federação padrão do setor (por exemplo, OIDC, SAML).",
    "q_c05_5_1_2": "[5.1.2] Verifique que operações de alto risco (implantação de modelo, exportação de pesos, acesso a dados de treino, alterações de configuração de produção) requerem autenticação multifator ou autenticação step-up com revalidação de sessão.",
    "q_c05_5_1_3": "[5.1.3] Verifique que agentes de IA em implantações federadas ou em múltiplos sistemas se autenticam por meio de tokens de autenticação de curta duração assinados criptograficamente (por exemplo, asserções JWT assinadas) com tempo de vida máximo adequado ao nível de risco e incluindo prova criptográfica de origem.",
    "q_c05_5_2_1": "[5.2.1] Verifique que cada recurso de IA (conjuntos de dados, modelos, endpoints, coleções vetoriais, índices de embedding, instâncias de computação) aplica controles de acesso (por exemplo, RBAC, ABAC) com listas de permissões explícitas e políticas de negação padrão.",
    "q_c05_5_2_2": "[5.2.2] Verifique que todas as modificações de controle de acesso são registradas com timestamps, identidades de atores, identificadores de recursos e alterações de permissão.",
    "q_c05_5_2_3": "[5.2.3] Verifique que os registros de auditoria de controle de acesso são armazenados de forma imutável e são à prova de adulteração.",
    "q_c05_5_2_4": "[5.2.4] Verifique que rótulos de classificação de dados (PII, PHI, proprietário, etc.) são propagados automaticamente para recursos derivados (embeddings, caches de prompt, saídas de modelo).",
    "q_c05_5_2_5": "[5.2.5] Verifique que tentativas de acesso não autorizado e eventos de escalação de privilégios acionam alertas em tempo real com metadados contextuais.",
    "q_c05_5_2_6": "[5.2.6] Verifique que as decisões de autorização são externalizadas para um ponto de decisão de política dedicado (por exemplo, OPA, Cedar ou equivalente).",
    "q_c05_5_2_7": "[5.2.7] Verifique que as políticas avaliam atributos dinâmicos em tempo de execução, incluindo função ou grupo do usuário, classificação do recurso, contexto da requisição, isolamento de inquilino e restrições temporais.",
    "q_c05_5_2_8": "[5.2.8] Verifique que os valores de TTL do cache de políticas são definidos com base na sensibilidade do recurso, com TTLs menores para recursos de alta sensibilidade, e que capacidades de invalidação de cache estão disponíveis.",
    "q_c05_5_3_1": "[5.3.1] Verifique que todas as consultas a armazenamentos de dados (por exemplo, bancos de dados vetoriais, bancos de dados SQL, índices de pesquisa) incluem filtros de segurança obrigatórios (ID de inquilino, rótulos de sensibilidade, escopo do usuário) aplicados na camada de acesso a dados.",
    "q_c05_5_3_2": "[5.3.2] Verifique que falhas de avaliação de autorização abortam imediatamente as consultas e retornam códigos de erro de autorização explícitos.",
    "q_c05_5_3_3": "[5.3.3] Verifique que políticas de segurança em nível de linha e mascaramento em nível de campo estão habilitados com herança de política para todos os armazenamentos de dados contendo dados sensíveis usados por sistemas de IA.",
    "q_c05_5_3_4": "[5.3.4] Verifique que os mecanismos de nova tentativa de consulta reavaliavam as políticas de autorização para considerar mudanças dinâmicas de permissão dentro de sessões ativas.",
    "q_c05_5_4_1": "[5.4.1] Verifique que os mecanismos de filtragem pós-inferência impedem que respostas incluam informações classificadas ou dados proprietários que o solicitante não está autorizado a receber.",
    "q_c05_5_4_2": "[5.4.2] Verifique que citações, referências e atribuições de fonte nas saídas do modelo são validadas em relação às permissões do chamador e removidas se acesso não autorizado for detectado.",
    "q_c05_5_4_3": "[5.4.3] Verifique que as restrições de formato de saída (documentos sanitizados, imagens sem metadados, tipos de arquivo aprovados) são aplicadas com base nos níveis de permissão do usuário e nas classificações de dados.",
    "q_c05_5_5_1": "[5.5.1] Verifique que as políticas de rede implementam regras de negação padrão para comunicação entre inquilinos.",
    "q_c05_5_5_2": "[5.5.2] Verifique que cada requisição de API inclui um identificador de inquilino autenticado que é validado criptograficamente em relação ao contexto de sessão e às permissões do usuário.",
    "q_c05_5_5_3": "[5.5.3] Verifique que espaços de memória, armazenamentos de embedding, entradas de cache (por exemplo, caches de resultado, caches de embedding) e arquivos temporários são segregados por namespace por inquilino com purga segura na exclusão do inquilino ou no encerramento da sessão.",
    "q_c05_5_5_4": "[5.5.4] Verifique que as chaves de criptografia são únicas por inquilino com suporte a chave gerenciada pelo cliente (CMK) e isolamento criptográfico entre armazenamentos de dados de inquilinos.",
    "q_c05_5_5_5": "[5.5.5] Verifique que as entradas de cache KV em tempo de inferência são particionadas por sessão autenticada ou identidade de inquilino, e que o cache automático de prefixos não compartilha prefixos em cache entre diferentes principais de segurança, para prevenir ataques de reconstrução de prompt baseados em tempo.",
    "q_c05_5_6_1": "[5.6.1] Verifique que agentes autônomos recebem tokens de capacidade com escopo que enumeram explicitamente as ações permitidas, os recursos acessíveis, os limites de tempo e as restrições operacionais.",
    "q_c05_5_6_2": "[5.6.2] Verifique que capacidades de alto risco (acesso ao sistema de arquivos, execução de código, chamadas a APIs externas, transações financeiras) são desabilitadas por padrão e requerem autorização explícita.",
    "q_c05_5_6_3": "[5.6.3] Verifique que os tokens de capacidade são vinculados a sessões de usuário, incluem proteção de integridade criptográfica e não podem ser persistidos ou reutilizados entre sessões.",
    "q_c05_5_6_4": "[5.6.4] Verifique que as ações iniciadas por agentes passam por autorização por meio de um ponto de decisão de política que avalia atributos contextuais (por exemplo, identidade do usuário, sensibilidade do recurso, tipo de ação, contexto ambiental).",
    "q_c06_6_1_1": "[6.1.1] Verifique que cada artefato de modelo de terceiros inclui um registro assinado de origem e integridade identificando sua fonte, versão e checksum de integridade.",
    "q_c06_6_1_2": "[6.1.2] Verifique que os modelos são verificados quanto a camadas maliciosas ou gatilhos Trojan usando ferramentas automatizadas antes da importação.",
    "q_c06_6_1_3": "[6.1.3] Verifique que licenças de modelo, tags de controle de exportação e declarações de origem de dados são registradas em uma entrada de AI BOM.",
    "q_c06_6_1_4": "[6.1.4] Verifique que modelos de alto risco (por exemplo, pesos enviados publicamente, criadores não verificados) permanecem em quarentena até revisão e aprovação humana.",
    "q_c06_6_1_5": "[6.1.5] Verifique que ajustes finos por transferência de aprendizado passam por avaliação adversarial para detectar comportamentos ocultos.",
    "q_c06_6_1_6": "[6.1.6] Verifique que modelos de terceiros ou de código aberto passam por um conjunto de testes de aceitação comportamental definido (cobrindo segurança, alinhamento e limites de capacidade relevantes para o contexto de implantação) antes de serem importados ou promovidos a qualquer ambiente que não seja de desenvolvimento.",
    "q_c06_6_2_1": "[6.2.1] Verifique que os pipelines de CI executam scanners de dependência em frameworks de IA e bibliotecas críticas.",
    "q_c06_6_2_2": "[6.2.2] Verifique que vulnerabilidades críticas e de alta gravidade bloqueiam a promoção para imagens de produção.",
    "q_c06_6_2_3": "[6.2.3] Verifique que a análise estática de código é executada em bibliotecas de IA bifurcadas ou empacotadas junto ao projeto.",
    "q_c06_6_2_4": "[6.2.4] Verifique que as propostas de atualização de framework incluem uma avaliação de impacto de segurança referenciando feeds públicos de vulnerabilidades.",
    "q_c06_6_2_5": "[6.2.5] Verifique que sensores em tempo de execução alertam sobre carregamentos inesperados de bibliotecas dinâmicas que desviam do SBOM assinado.",
    "q_c06_6_3_1": "[6.3.1] Verifique que todos os gerenciadores de pacotes aplicam o versionamento fixo por meio de arquivos de lock.",
    "q_c06_6_3_2": "[6.3.2] Verifique que digests imutáveis são usados em vez de tags mutáveis em referências de contêiner.",
    "q_c06_6_3_3": "[6.3.3] Verifique que dependências expiradas ou sem manutenção acionam notificações automatizadas para atualizar ou substituir versões fixadas.",
    "q_c06_6_3_4": "[6.3.4] Verifique que as atestações de build são retidas por um período definido pela política organizacional para rastreabilidade de auditoria.",
    "q_c06_6_3_5": "[6.3.5] Verifique que as verificações de build reproduzível comparam hashes entre execuções de CI para garantir saídas idênticas.",
    "q_c06_6_4_1": "[6.4.1] Verifique que pesos de modelo, conjuntos de dados e contêineres são baixados apenas de fontes aprovadas ou registros internos.",
    "q_c06_6_4_2": "[6.4.2] Verifique que assinaturas criptográficas validam a identidade do publicador antes que os artefatos sejam armazenados em cache localmente.",
    "q_c06_6_4_3": "[6.4.3] Verifique que os controles de egresso bloqueiam downloads de artefatos não autenticados para aplicar a política de fonte confiável.",
    "q_c06_6_4_4": "[6.4.4] Verifique que as listas de permissões de repositório são revisadas periodicamente com evidências de justificativa comercial para cada entrada.",
    "q_c06_6_4_5": "[6.4.5] Verifique que violações de política acionam quarentena de artefatos e rollback de execuções de pipeline dependentes.",
    "q_c06_6_5_1": "[6.5.1] Verifique que conjuntos de dados externos passam por avaliação de risco de envenenamento (por exemplo, fingerprinting de dados, detecção de outliers).",
    "q_c06_6_5_2": "[6.5.2] Verifique que conteúdo não permitido (por exemplo, material protegido por direitos autorais, PII) é detectado e removido por meio de limpeza automatizada antes do treino.",
    "q_c06_6_5_3": "[6.5.3] Verifique que a origem, linhagem e termos de licença dos conjuntos de dados são capturados em entradas de AI BOM.",
    "q_c06_6_5_4": "[6.5.4] Verifique que métricas de viés (por exemplo, paridade demográfica, igualdade de oportunidade) são calculadas antes da aprovação do conjunto de dados.",
    "q_c06_6_5_5": "[6.5.5] Verifique que o monitoramento periódico detecta deriva ou corrupção em conjuntos de dados hospedados.",
    "q_c06_6_6_1": "[6.6.1] Verifique que os manuais de resposta a incidentes incluem procedimentos de rollback para modelos ou bibliotecas comprometidos.",
    "q_c06_6_6_2": "[6.6.2] Verifique que os registros de auditoria de CI/CD são transmitidos para monitoramento de segurança centralizado com detecções de downloads anômalos de pacotes ou etapas de build adulteradas.",
    "q_c06_6_6_3": "[6.6.3] Verifique que o enriquecimento de inteligência de ameaças marca indicadores específicos de IA (por exemplo, indicadores de comprometimento de envenenamento de modelo) na triagem de alertas.",
    "q_c06_6_7_1": "[6.7.1] Verifique que cada artefato de modelo publica um AI BOM que lista conjuntos de dados, pesos, hiperparâmetros e licenças.",
    "q_c06_6_7_2": "[6.7.2] Verifique que a geração de AI BOM e a assinatura criptográfica são automatizadas no CI e são obrigatórias para merge.",
    "q_c06_6_7_3": "[6.7.3] Verifique que as verificações de completude do AI BOM reprovam o build se qualquer metadado de componente (hash e licença) estiver ausente.",
    "q_c06_6_7_4": "[6.7.4] Verifique que os consumidores downstream podem consultar AI BOMs por meio de API para validar modelos importados no momento da implantação.",
    "q_c06_6_7_5": "[6.7.5] Verifique que os AI BOMs são versionados e comparados (diff) para detectar modificações não autorizadas.",
    "q_c07_7_1_1": "[7.1.1] Verifique que a aplicação valida todas as saídas do modelo em relação a um esquema estrito (como JSON Schema) e rejeita qualquer saída que não corresponda.",
    "q_c07_7_1_2": "[7.1.2] Verifique que o sistema usa \\",
    "q_c07_7_1_3": "[7.1.3] Verifique que os componentes que processam a saída do modelo a tratam como entrada não confiável (por exemplo, usando consultas parametrizadas ou desserializadores seguros).",
    "q_c07_7_1_4": "[7.1.4] Verifique que o sistema registra o tipo de erro específico quando uma saída é rejeitada por formatação incorreta.",
    "q_c07_7_2_1": "[7.2.1] Verifique que o sistema avalia a confiabilidade das respostas geradas usando um método de estimativa de confiança ou incerteza (por exemplo, pontuação de confiança, verificação baseada em recuperação ou estimativa de incerteza do modelo).",
    "q_c07_7_2_2": "[7.2.2] Verifique que a aplicação bloqueia automaticamente respostas ou muda para uma mensagem de fallback se a pontuação de confiança cair abaixo de um limite definido.",
    "q_c07_7_2_3": "[7.2.3] Verifique que eventos de alucinação (respostas de baixa confiança) são registrados com metadados de entrada/saída para análise.",
    "q_c07_7_2_4": "[7.2.4] Verifique que para respostas classificadas como de alto risco ou alto impacto por política, o sistema realiza uma etapa de verificação adicional por meio de um mecanismo independente, como ancoragem baseada em recuperação em fontes autoritativas, validação determinística baseada em regras, verificação de fatos por ferramentas ou revisão por consenso de um modelo provisionado separadamente.",
    "q_c07_7_2_5": "[7.2.5] Verifique que o sistema rastreia o histórico de invocação de ferramentas e funções dentro de uma cadeia de requisições e sinaliza asserções factuais de alta confiança que não foram precedidas pelo uso de ferramenta de verificação relevante, como um sinal prático de detecção de alucinação independente da pontuação de confiança.",
    "q_c07_7_3_1": "[7.3.1] Verifique que classificadores automatizados verificam cada resposta e bloqueiam conteúdo que corresponda a categorias de ódio, assédio ou violência sexual.",
    "q_c07_7_3_2": "[7.3.2] Verifique que o sistema verifica cada resposta em busca de PII (como números de cartão de crédito ou e-mails) e a redige automaticamente antes da exibição.",
    "q_c07_7_3_3": "[7.3.3] Verifique que os eventos de detecção e redação de PII são registrados sem incluir os próprios valores de PII redigidos, para manter uma trilha de auditoria sem criar exposição secundária de PII.",
    "q_c07_7_3_4": "[7.3.4] Verifique que dados rotulados como \\",
    "q_c07_7_3_5": "[7.3.5] Verifique que os filtros de segurança podem ser configurados de forma diferente com base na função ou localização do usuário (por exemplo, filtros mais rígidos para menores de idade) conforme apropriado.",
    "q_c07_7_3_6": "[7.3.6] Verifique que o sistema requer uma etapa de aprovação humana ou reautenticação se o modelo gerar conteúdo de alto risco.",
    "q_c07_7_3_7": "[7.3.7] Verifique que os filtros de saída detectam e bloqueiam respostas que reproduzem segmentos literais do conteúdo do prompt de sistema.",
    "q_c07_7_3_8": "[7.3.8] Verifique que as aplicações cliente de LLM impedem que saídas geradas pelo modelo acionem requisições de saída automáticas (por exemplo, imagens renderizadas automaticamente, iframes ou pré-busca de links) para endpoints controlados por atacantes, por exemplo desabilitando o carregamento automático de recursos externos ou restringindo-o a origens explicitamente listadas conforme apropriado.",
    "q_c07_7_4_1": "[7.4.1] Verifique que o sistema aplica limites rígidos de requisições e tokens por usuário para prevenir picos de custo e negação de serviço.",
    "q_c07_7_4_2": "[7.4.2] Verifique que o modelo não pode executar ações de alto impacto (como gravar arquivos, enviar e-mails ou executar código) sem confirmação explícita do usuário.",
    "q_c07_7_4_3": "[7.4.3] Verifique que a aplicação ou framework de orquestração configura e aplica explicitamente a profundidade máxima de chamadas recursivas, limites de delegação e a lista de ferramentas externas permitidas.",
    "q_c07_7_5_1": "[7.5.1] Verifique que as explicações fornecidas ao usuário são sanitizadas para remover prompts de sistema ou dados de backend.",
    "q_c07_7_5_2": "[7.5.2] Verifique que a interface exibe uma pontuação de confiança ou \\",
    "q_c07_7_5_3": "[7.5.3] Verifique que evidências técnicas da decisão do modelo, como artefatos de interpretabilidade do modelo (por exemplo, mapas de atenção, atribuições de características), são registradas.",
    "q_c07_7_6_1": "[7.6.1] Verifique que o sistema registra métricas em tempo real para violações de segurança (por exemplo, \\",
    "q_c07_7_6_2": "[7.6.2] Verifique que o sistema aciona um alerta se as taxas de violação de segurança excederem um limite definido dentro de uma janela de tempo específica.",
    "q_c07_7_6_3": "[7.6.3] Verifique que os registros incluem a versão específica do modelo e outros detalhes necessários para investigar possíveis abusos.",
    "q_c07_7_7_1": "[7.7.1] Verifique que os filtros de entrada bloqueiam prompts que solicitam conteúdo sintético explícito ou não consensual antes de o modelo processá-los.",
    "q_c07_7_7_2": "[7.7.2] Verifique que o sistema se recusa a gerar mídia (imagens/áudio) que retrate pessoas reais sem consentimento verificado.",
    "q_c07_7_7_3": "[7.7.3] Verifique que o sistema verifica o conteúdo gerado quanto a violações de direitos autorais antes de liberá-lo.",
    "q_c07_7_7_4": "[7.7.4] Verifique que tentativas de contornar filtros são detectadas e registradas como eventos de segurança.",
    "q_c07_7_7_5": "[7.7.5] Verifique que toda mídia gerada inclui uma marca d'água invisível ou assinatura criptográfica para provar que foi gerada por IA.",
    "q_c07_7_8_1": "[7.8.1] Verifique que as respostas geradas usando geração aumentada por recuperação (RAG) incluem atribuição aos documentos de origem que fundamentaram a resposta, e que as atribuições são derivadas de metadados de recuperação em vez de geradas pelo modelo.",
    "q_c07_7_8_2": "[7.8.2] Verifique que cada afirmação originada de uma fonte em uma resposta fundamentada por RAG pode ser rastreada a um trecho recuperado específico, e que o sistema detecta e sinaliza respostas onde afirmações não são suportadas por nenhum conteúdo recuperado antes de a resposta ser servida.",
    "q_c08_8_1_1": "[8.1.1] Verifique que as operações de inserção, atualização, exclusão e consulta vetorial são aplicadas com controles de escopo de namespace/coleção/tag de documento (por exemplo, ID de inquilino, ID de usuário, rótulos de classificação de dados) com negação padrão.",
    "q_c08_8_1_2": "[8.1.2] Verifique que as credenciais de API usadas para operações vetoriais carregam declarações com escopo (por exemplo, coleções permitidas, verbos autorizados, vínculo de inquilino).",
    "q_c08_8_1_3": "[8.1.3] Verifique que tentativas de acesso cross-scope (por exemplo, consultas de similaridade entre inquilinos, travessia de namespace, bypass de tag) são detectadas e rejeitadas.",
    "q_c08_8_1_4": "[8.1.4] Verifique que cada documento ingerido é marcado no momento da escrita com origem, identidade do escritor (usuário autenticado ou principal de sistema), timestamp, ID de lote e versão do modelo de embedding, e que essas tags são imutáveis após a escrita inicial.",
    "q_c08_8_1_5": "[8.1.5] Verifique que os eventos de recuperação do pipeline RAG registram a consulta emitida, os documentos ou trechos recuperados, as pontuações de similaridade, a fonte de conhecimento e se o conteúdo recuperado passou pela varredura de injeção de prompt antes de ser incorporado ao contexto do modelo.",
    "q_c08_8_1_6": "[8.1.6] Verifique que a detecção de anomalias de recuperação identifica outliers de densidade de embedding, dominância repetida de documentos específicos nos resultados de similaridade e mudanças repentinas na distribuição de viés de recuperação que podem indicar envenenamento do banco de dados vetorial.",
    "q_c08_8_2_1": "[8.2.1] Verifique que dados regulados e campos sensíveis são detectados antes do embedding e são mascarados, tokenizados, transformados ou descartados com base em política.",
    "q_c08_8_2_2": "[8.2.2] Verifique que a ingestão de embedding rejeita ou coloca em quarentena entradas que violam restrições de conteúdo necessárias (por exemplo, não-UTF-8, codificações malformadas, payloads excessivamente grandes, caracteres Unicode invisíveis ou conteúdo executável destinado a envenenar a recuperação).",
    "q_c08_8_2_3": "[8.2.3] Verifique que vetores que ficam fora dos padrões normais de agrupamento são sinalizados e colocados em quarentena antes de entrar nos índices de produção.",
    "q_c08_8_2_4": "[8.2.4] Verifique que as próprias saídas de um agente não são gravadas automaticamente de volta em sua memória confiável sem validação explícita (como verificações de origem de conteúdo ou controles de autorização de escrita que verificam a fonte do conteúdo antes de confirmar escritas).",
    "q_c08_8_2_5": "[8.2.5] Verifique que novos conteúdos gravados na memória são verificados quanto a contradições com o que já está armazenado e que conflitos acionam alertas.",
    "q_c08_8_3_1": "[8.3.1] Verifique que os tempos de retenção são aplicados a cada vetor armazenado e metadados relacionados em todo o armazenamento de memória.",
    "q_c08_8_3_2": "[8.3.2] Verifique que apenas as informações necessárias para a função definida do sistema são persistidas na memória (como preferências do usuário e decisões de conversa, não credenciais ou transcrições completas de conversa), e que o contexto não necessário além da sessão atual é descartado no encerramento da sessão.",
    "q_c08_8_3_3": "[8.3.3] Verifique que as solicitações de exclusão purgam vetores, metadados, cópias de cache e índices derivados dentro de um tempo máximo definido pela organização.",
    "q_c08_8_3_4": "[8.3.4] Verifique que vetores excluídos ou expirados são removidos de forma confiável e são irrecuperáveis.",
    "q_c08_8_3_5": "[8.3.5] Verifique que vetores expirados são excluídos dos resultados de recuperação dentro de uma janela de propagação medida e monitorada.",
    "q_c08_8_3_6": "[8.3.6] Verifique que a memória pode ser reiniciada por razões de segurança (quarentena, purga seletiva, reinicialização completa) separadamente da exclusão por retenção, e que o conteúdo em quarentena é mantido para investigação, mas excluído da recuperação.",
    "q_c08_8_4_1": "[8.4.1] Verifique que coleções vetoriais sensíveis são protegidas contra acesso de leitura direta por administradores de infraestrutura por meio de controles técnicos como criptografia na camada de aplicação, criptografia envelope com políticas KMS estritas ou controles compensatórios equivalentes.",
    "q_c08_8_4_2": "[8.4.2] Verifique que as metas de privacidade/utilidade para resistência a vazamento de embedding são definidas e medidas, e que mudanças nos modelos de embedding, tokenizadores, configurações de recuperação ou transformações de privacidade são bloqueadas por testes de regressão contra essas metas.",
    "q_c08_8_5_1": "[8.5.1] Verifique que cada operação de recuperação aplica restrições de escopo (inquilino/usuário/classificação) na consulta ao motor vetorial e as verifica novamente antes da montagem do prompt (pós-filtro).",
    "q_c08_8_5_2": "[8.5.2] Verifique que identificadores vetoriais, namespaces e indexação de metadados previnem colisões cross-scope e aplicam unicidade por inquilino.",
    "q_c08_8_5_3": "[8.5.3] Verifique que resultados de recuperação que atendem aos critérios de similaridade mas falham nas verificações de escopo são descartados.",
    "q_c08_8_5_4": "[8.5.4] Verifique que testes multi-inquilino simulam tentativas de recuperação adversariais (baseadas em prompt e em consulta) e demonstram zero inclusão de documentos fora do escopo em prompts e saídas.",
    "q_c08_8_5_5": "[8.5.5] Verifique que em sistemas multi-agente, o namespace de memória de cada agente é isolado e aplicado por meio de controle de acesso, não apenas por convenções de nomenclatura organizacional.",
    "q_c08_8_5_6": "[8.5.6] Verifique que as chaves de criptografia e as políticas de acesso são segregadas por inquilino para armazenamento de memória/vetorial, fornecendo isolamento criptográfico em infraestrutura compartilhada.",
    "q_c09_9_1_1": "[9.1.1] Verifique que orçamentos por execução (profundidade máxima de recursão, fan-out/concorrência máxima, tempo de parede, tokens e gasto monetário) são configurados e aplicados pelo runtime de orquestração.",
    "q_c09_9_1_2": "[9.1.2] Verifique que contadores de recursos/gasto cumulativos são rastreados por cadeia de requisições e param forçosamente a cadeia quando os limites são excedidos.",
    "q_c09_9_1_3": "[9.1.3] Verifique que circuit breakers encerram a execução em violações de orçamento.",
    "q_c09_9_1_4": "[9.1.4] Verifique que os testes de segurança cobrem loops descontrolados, esgotamento de orçamento e cenários de falha parcial, confirmando encerramento seguro e estado consistente.",
    "q_c09_9_1_5": "[9.1.5] Verifique que as políticas de orçamento e circuit breaker são expressas como policy-as-code e validadas em CI/CD para prevenir deriva e alterações de configuração inseguras.",
    "q_c09_9_2_1": "[9.2.1] Verifique que ações privilegiadas ou irreversíveis (por exemplo, merges/deploys de código, transferências financeiras, alterações de acesso de usuários, exclusões destrutivas, notificações externas) requerem aprovação humana explícita no loop.",
    "q_c09_9_2_2": "[9.2.2] Verifique que as requisições de aprovação exibem parâmetros de ação canonicalizados e completos (diff, comando, destinatário, valor, escopo) sem truncamento ou transformação.",
    "q_c09_9_2_3": "[9.2.3] Verifique que as aprovações são criptograficamente vinculadas (por exemplo, assinadas ou com MAC) aos parâmetros exatos da ação, identidade do solicitante e contexto de execução.",
    "q_c09_9_2_4": "[9.2.4] Verifique que as aprovações incluem um nonce único e são de uso único para prevenir repetição ou substituição.",
    "q_c09_9_2_5": "[9.2.5] Verifique que as aprovações expiram dentro de um tempo de vida máximo definido (TTL) e são rejeitadas após a expiração.",
    "q_c09_9_2_6": "[9.2.6] Verifique que onde o rollback é viável, ações compensatórias são definidas e testadas (semântica transacional), e falhas acionam rollback ou contenção segura.",
    "q_c09_9_3_1": "[9.3.1] Verifique que cada ferramenta/plugin é executada em uma sandbox isolada (contêiner/VM/WASM/sandbox de SO) com permissões de sistema de arquivos, egresso de rede e syscall de menor privilégio adequadas à função da ferramenta.",
    "q_c09_9_3_2": "[9.3.2] Verifique que cotas e timeouts por ferramenta (CPU, memória, disco, egresso, tempo de execução) são aplicados e registrados, e que violações de cota falham de forma segura.",
    "q_c09_9_3_3": "[9.3.3] Verifique que as saídas de ferramentas são validadas em relação a esquemas estritos e políticas de segurança antes de serem incorporadas ao raciocínio downstream ou ações subsequentes.",
    "q_c09_9_3_4": "[9.3.4] Verifique que binários ou pacotes de ferramentas são verificados quanto à integridade (por exemplo, assinaturas, checksums) antes do carregamento.",
    "q_c09_9_3_5": "[9.3.5] Verifique que os manifestos de ferramentas declaram os privilégios necessários, o nível de efeitos colaterais, os limites de recursos e os requisitos de validação de saída, e que o runtime aplica essas declarações.",
    "q_c09_9_3_6": "[9.3.6] Verifique que indicadores de escape de sandbox ou violações de política acionam contenção automatizada (ferramenta desabilitada/colocada em quarentena).",
    "q_c09_9_4_1": "[9.4.1] Verifique que cada instância de agente (e orquestrador/runtime) tem uma identidade criptográfica única e se autentica como um principal de primeira classe nos sistemas downstream (sem reutilização de credenciais do usuário final).",
    "q_c09_9_4_2": "[9.4.2] Verifique que as ações iniciadas por agentes são criptograficamente vinculadas à cadeia de execução (ID da cadeia) e são assinadas e com timestamp para não repúdio e rastreabilidade.",
    "q_c09_9_4_3": "[9.4.3] Verifique que os registros de auditoria são à prova de adulteração (por meio de armazenamento append-only/WORM/imutável, encadeamento de hash criptográfico onde cada registro inclui o hash do registro anterior, ou garantias de integridade equivalentes que podem ser verificadas independentemente), e incluem contexto suficiente para reconstruir quem/o quê agiu, identificador do usuário iniciador, escopo de delegação, decisão de autorização (política/versão), parâmetros de ferramentas, aprovações (quando aplicável) e resultados.",
    "q_c09_9_4_4": "[9.4.4] Verifique que as credenciais de identidade do agente (chaves/certificados/tokens) são rotacionadas em um cronograma definido e em indicadores de comprometimento, com revogação rápida e quarentena em casos suspeitos de comprometimento ou tentativas de falsificação.",
    "q_c09_9_5_1": "[9.5.1] Verifique que os canais agente-a-agente e agente-a-ferramenta aplicam autenticação mútua e criptografia usando protocolos recomendados atualmente (por exemplo, TLS 1.3 ou posterior) com validação forte de certificado/token.",
    "q_c09_9_5_2": "[9.5.2] Verifique que todas as mensagens são estritamente validadas por esquema; campos desconhecidos, payloads malformados e frames excessivamente grandes são rejeitados.",
    "q_c09_9_5_3": "[9.5.3] Verifique que a integridade das mensagens cobre o payload completo incluindo parâmetros de ferramentas, e que as proteções contra repetição (nonces/números de sequência/janelas de timestamp) são aplicadas.",
    "q_c09_9_5_4": "[9.5.4] Verifique que as saídas de agentes propagadas para agentes downstream são validadas em relação a restrições semânticas (por exemplo, intervalos de valores, consistência lógica) além da validação de esquema.",
    "q_c09_9_6_1": "[9.6.1] Verifique que as ações de agentes são autorizadas em relação a políticas granulares aplicadas pelo runtime que restringem quais ferramentas um agente pode invocar, quais valores de parâmetros pode fornecer (por exemplo, recursos permitidos, escopos de dados, tipos de ação), e que violações de política são bloqueadas.",
    "q_c09_9_6_2": "[9.6.2] Verifique que quando um agente age em nome de um usuário, o runtime propaga um contexto de delegação protegido por integridade (ID do usuário, inquilino, sessão, escopos) e aplica esse contexto em cada chamada downstream sem usar as credenciais do usuário.",
    "q_c09_9_6_3": "[9.6.3] Verifique que a autorização é reavaliada a cada chamada (autorização contínua) usando o contexto atual (usuário, inquilino, ambiente, classificação de dados, tempo, risco).",
    "q_c09_9_6_4": "[9.6.4] Verifique que todas as decisões de controle de acesso são aplicadas pela lógica da aplicação ou por um motor de política, nunca pelo próprio modelo de IA, e que a saída gerada pelo modelo (por exemplo, \\",
    "q_c09_9_7_1": "[9.7.1] Verifique que os portões de pré-execução avaliam as ações e parâmetros propostos em relação a restrições de política rígidas (regras de negação, restrições de tratamento de dados, listas de permissões, orçamentos de efeitos colaterais) e bloqueiam a execução em qualquer violação.",
    "q_c09_9_7_2": "[9.7.2] Verifique que as verificações de pós-execução confirmam que o resultado pretendido foi alcançado.",
    "q_c09_9_7_3": "[9.7.3] Verifique que as verificações de pós-execução detectam efeitos colaterais não intencionais.",
    "q_c09_9_7_4": "[9.7.4] Verifique que qualquer incompatibilidade entre o resultado pretendido e os resultados reais aciona contenção e, onde suportado, ações compensatórias.",
    "q_c09_9_7_5": "[9.7.5] Verifique que templates de prompt e configurações de política de agentes recuperados de uma fonte remota são verificados quanto à integridade no momento do carregamento em relação às suas versões aprovadas (por exemplo, por meio de hashes ou assinaturas).",
    "q_c09_9_8_1": "[9.8.1] Verifique que agentes em diferentes inquilinos, domínios de segurança ou ambientes (dev/teste/prod) são executados em runtimes e segmentos de rede isolados, com controles de negação padrão que previnem descoberta e chamadas entre domínios.",
    "q_c09_9_8_2": "[9.8.2] Verifique que o monitoramento em tempo de execução detecta comportamento emergente inseguro (oscilação, deadlocks, broadcast descontrolado, grafos de chamadas anômalos) e aplica automaticamente ações corretivas (throttle, isolar, encerrar).",
    "q_c09_9_8_3": "[9.8.3] Verifique que cada agente é restrito ao seu próprio namespace de memória e é tecnicamente impedido de ler ou modificar o estado de agentes pares, prevenindo acesso não autorizado entre agentes no mesmo swarm.",
    "q_c09_9_8_4": "[9.8.4] Verifique que cada agente opera com uma janela de contexto isolada e credenciais dedicadas com escopo para sua função, impedindo que agentes pares acessem ou influenciem o contexto ou escopo de credenciais de outro agente para prevenir acesso não autorizado entre agentes no mesmo swarm.",
    "q_c09_9_8_5": "[9.8.5] Verifique que limites de taxa de ação agregada no nível do swarm (por exemplo, total de chamadas a APIs externas, escritas de arquivos ou requisições de rede por janela de tempo em todos os agentes) são aplicados para prevenir rajadas que causem negação de serviço ou abuso de sistemas externos.",
    "q_c09_9_8_6": "[9.8.6] Verifique que existe uma capacidade de desligamento no nível do swarm capaz de interromper todas as instâncias de agentes ativos ou instâncias problemáticas selecionadas de forma organizada e impedir a criação de novos agentes, com o desligamento concluível dentro de um tempo de resposta pré-definido.",
    "q_c10_10_1_1": "[10.1.1] Verifique que os componentes de servidor e cliente MCP são obtidos apenas de fontes confiáveis e verificados usando assinaturas, checksums ou metadados seguros de pacote, rejeitando builds adulterados ou não assinados.",
    "q_c10_10_1_2": "[10.1.2] Verifique que apenas identificadores de servidor MCP na lista de permissões (nome, versão e registro) são permitidos em produção e que o runtime rejeita conexões a servidores não listados ou não registrados no momento do carregamento.",
    "q_c10_10_2_1": "[10.2.1] Verifique que os clientes MCP se autenticam nos servidores MCP usando o framework de autorização OAuth 2.1 e apresentam um token de acesso OAuth válido para cada requisição, e que o servidor MCP valida o token conforme os requisitos de servidor de recursos do OAuth 2.1.",
    "q_c10_10_2_2": "[10.2.2] Verifique que os servidores MCP validam tokens de acesso OAuth incluindo emissora, audiência, expiração e declarações de escopo, garantindo que os tokens foram emitidos para o servidor MCP específico antes de permitir a invocação de ferramentas.",
    "q_c10_10_2_3": "[10.2.3] Verifique que os servidores MCP são registrados por meio de um mecanismo controlado de integração técnica que requer definições explícitas de proprietário, ambiente e recurso; servidores não registrados ou não descobríveis não devem ser chamáveis em produção.",
    "q_c10_10_2_4": "[10.2.4] Verifique que as decisões de autorização na camada MCP são aplicadas pela lógica de política do servidor MCP, e que a saída gerada pelo modelo não pode influenciar, substituir ou contornar as verificações de controle de acesso.",
    "q_c10_10_2_5": "[10.2.5] Verifique que os servidores MCP atuam como servidores de recursos OAuth 2.1 apenas validando tokens emitidos por servidores de autorização externos e sem armazenar tokens ou credenciais de usuário.",
    "q_c10_10_2_6": "[10.2.6] Verifique que as respostas de `tools/list` e de descoberta de recursos do MCP são filtradas com base nos escopos autorizados do usuário final, de modo que os agentes recebam apenas as definições de ferramenta e recurso que o usuário está autorizado a invocar.",
    "q_c10_10_2_7": "[10.2.7] Verifique que os servidores MCP aplicam controle de acesso em cada invocação de ferramenta, validando que o token de acesso do usuário autoriza tanto a ferramenta solicitada quanto os valores de argumento específicos fornecidos.",
    "q_c10_10_2_8": "[10.2.8] Verifique que os identificadores de sessão MCP são tratados como estado, não como identidade: gerados usando valores aleatórios criptograficamente seguros, vinculados ao usuário autenticado e nunca utilizados para decisões de autenticação ou autorização.",
    "q_c10_10_2_9": "[10.2.9] Verifique que os servidores MCP não repassam tokens de acesso recebidos dos clientes para APIs downstream e, em vez disso, obtêm um token separado com escopo para a própria identidade do servidor (por exemplo, via fluxo on-behalf-of ou client credentials).",
    "q_c10_10_2_10": "[10.2.10] Verifique que os servidores MCP que atuam como proxies OAuth para APIs de terceiros aplicam consentimento por cliente antes de encaminhar requisições de autorização, impedindo que aprovações armazenadas em cache sejam reutilizadas entre clientes registrados dinamicamente.",
    "q_c10_10_2_11": "[10.2.11] Verifique que os clientes MCP solicitam apenas os escopos mínimos necessários para a operação atual, elevam progressivamente via autorização step-up, e que os servidores rejeitam escopos curinga ou excessivamente amplos.",
    "q_c10_10_2_12": "[10.2.12] Verifique que os servidores MCP aplicam teardown determinístico de sessão, destruindo tokens em cache, estado em memória, armazenamento temporário e handles de arquivo quando uma sessão é encerrada, desconectada ou atinge timeout.",
    "q_c10_10_3_1": "[10.3.1] Verifique que o HTTP streamable autenticado e criptografado é usado como transporte MCP primário em ambientes de produção e que transportes alternativos (por exemplo, stdio ou SSE) são restritos a ambientes locais ou controlados com justificativa explícita.",
    "q_c10_10_3_2": "[10.3.2] Verifique que os transportes MCP HTTP streamable usam canais autenticados e criptografados (TLS 1.3 ou posterior) com validação de certificado.",
    "q_c10_10_3_3": "[10.3.3] Verifique que os transportes MCP baseados em SSE são usados apenas dentro de canais internos privados e autenticados e aplicam TLS, autenticação, validação de esquema, limites de tamanho de payload e limitação de taxa; os endpoints SSE não devem ser expostos à internet pública.",
    "q_c10_10_3_4": "[10.3.4] Verifique que os servidores MCP validam os headers `Origin` e `Host` em todos os transportes baseados em HTTP (incluindo SSE e HTTP streamable) para prevenir ataques de DNS rebinding e rejeitam requisições de origens não confiáveis, incompatíveis ou ausentes.",
    "q_c10_10_3_5": "[10.3.5] Verifique que os intermediários não alteram nem removem o header `Mcp-Protocol-Version` em transportes HTTP streamable, a menos que explicitamente requerido pela especificação do protocolo, prevenindo downgrade de protocolo via remoção de header.",
    "q_c10_10_4_1": "[10.4.1] Verifique que as respostas de ferramentas MCP são validadas antes de serem injetadas no contexto do modelo para prevenir injeção de prompt, saída de ferramenta maliciosa ou manipulação de contexto.",
    "q_c10_10_4_2": "[10.4.2] Verifique que os esquemas de ferramentas e recursos MCP (por exemplo, JSON schemas ou descritores de capacidade) são validados quanto à autenticidade e integridade usando assinaturas para prevenir adulteração de esquema ou modificação maliciosa de parâmetros.",
    "q_c10_10_4_3": "[10.4.3] Verifique que todos os transportes MCP aplicam integridade de enquadramento de mensagem, validação estrita de esquema, tamanhos máximos de payload e rejeição de frames malformados, truncados ou intercalados para prevenir dessincronização ou ataques de injeção.",
    "q_c10_10_4_4": "[10.4.4] Verifique que os servidores MCP realizam validação estrita de entrada para todas as chamadas de função, incluindo verificação de tipo, validação de limites, aplicação de enumeração e rejeição de parâmetros não reconhecidos ou excessivamente grandes.",
    "q_c10_10_4_5": "[10.4.5] Verifique que os clientes MCP mantêm um hash ou snapshot versionado das definições de ferramentas e que qualquer alteração em uma definição de ferramenta (via `notifications/tools/list_changed` ou entre sessões) aciona reaprovação antes que a ferramenta modificada possa ser invocada.",
    "q_c10_10_4_6": "[10.4.6] Verifique que as respostas de erro e exceção do servidor MCP não expõem stack traces, caminhos de arquivos internos, tokens ou detalhes de implementação de ferramentas ao cliente ou contexto do modelo.",
    "q_c10_10_4_7": "[10.4.7] Verifique que as implementações MCP rejeitam mensagens JSON-RPC contendo chaves duplicadas em qualquer nível de aninhamento, prevenindo discordância de parser onde diferentes componentes resolvem a mesma mensagem para valores diferentes.",
    "q_c10_10_4_8": "[10.4.8] Verifique que os intermediários que avaliam o conteúdo da mensagem encaminham a representação canonicalizada que avaliaram ou rejeitam mensagens onde múltiplas representações de bytes poderiam produzir estruturas analisadas diferentes.",
    "q_c10_10_5_1": "[10.5.1] Verifique que os servidores MCP só podem iniciar requisições de saída para destinos internos ou externos aprovados seguindo políticas de egresso de menor privilégio e não podem acessar alvos de rede arbitrários ou serviços de metadados de nuvem internos.",
    "q_c10_10_5_2": "[10.5.2] Verifique que as ações de saída MCP implementam limites de execução (por exemplo, timeouts, limites de recursão, limites de concorrência ou circuit breakers) para prevenir invocação de ferramentas por agentes sem limites ou efeitos colaterais encadeados.",
    "q_c10_10_5_3": "[10.5.3] Verifique que as invocações de ferramentas MCP classificadas como de alto risco ou destrutivas (por exemplo, exclusão de dados, transações financeiras, alterações de configuração de sistema) requerem confirmação explícita do usuário antes da execução.",
    "q_c10_10_6_1": "[10.6.1] Verifique que os transportes MCP baseados em stdio são limitados a cenários de desenvolvimento co-localizados em processo único e isolados de execução de shell, injeção de terminal e capacidades de criação de processos; stdio não deve cruzar limites de rede ou multi-inquilino.",
    "q_c10_10_6_2": "[10.6.2] Verifique que os servidores MCP expõem apenas funções e recursos na lista de permissões e proíbem despacho dinâmico, invocação reflexiva ou execução de nomes de função influenciados por entrada do usuário ou do modelo.",
    "q_c10_10_6_3": "[10.6.3] Verifique que os limites de inquilino, limites de ambiente (por exemplo, dev/teste/prod) e limites de domínio de dados são aplicados na camada MCP para prevenir descoberta de servidor ou recurso entre inquilinos ou entre ambientes.",
    "q_c11_11_1_1": "[11.1.1] Verifique que guardrails de recusa e conclusão segura são aplicados para impedir que o modelo gere categorias de conteúdo não permitidas.",
    "q_c11_11_1_2": "[11.1.2] Verifique que um conjunto de testes de alinhamento (prompts de red team, sondas de jailbreak, verificações de conteúdo não permitido) é versionado e executado a cada atualização ou release de modelo.",
    "q_c11_11_1_3": "[11.1.3] Verifique que um avaliador automatizado mede a taxa de conteúdo prejudicial e sinaliza regressões além de um limite definido.",
    "q_c11_11_1_4": "[11.1.4] Verifique que os procedimentos de treino de alinhamento e segurança (por exemplo, RLHF, IA constitucional ou equivalente) são documentados e reproduzíveis.",
    "q_c11_11_1_5": "[11.1.5] Verifique que a avaliação de alinhamento inclui avaliações de conscientização de avaliação, onde o modelo pode se comportar de forma diferente quando detecta que está sendo testado versus implantado.",
    "q_c11_11_2_1": "[11.2.1] Verifique que os modelos que servem funções de alto risco são avaliados em relação a técnicas de ataque adversarial conhecidas relevantes para sua modalidade (por exemplo, ataques de perturbação para visão, ataques de manipulação de tokens para texto).",
    "q_c11_11_2_2": "[11.2.2] Verifique que a detecção de exemplos adversariais gera alertas em pipelines de produção, com respostas de bloqueio ou capacidade degradada para endpoints ou casos de uso de alto risco.",
    "q_c11_11_2_3": "[11.2.3] Verifique que técnicas de treinamento adversarial ou técnicas de robustecimento equivalentes são aplicadas onde viável, com configurações documentadas e procedimentos reproduzíveis.",
    "q_c11_11_2_4": "[11.2.4] Verifique que as avaliações de robustez usam ataques adaptativos (ataques projetados especificamente para derrotar as defesas implantadas) para confirmar ausência de perda mensurável de robustez entre releases.",
    "q_c11_11_2_5": "[11.2.5] Verifique que métodos formais de verificação de robustez (por exemplo, limites certificados, propagação de limites por intervalo) são aplicados a componentes de modelo críticos de segurança onde a arquitetura do modelo os suporta.",
    "q_c11_11_3_1": "[11.3.1] Verifique que as saídas do modelo são calibradas (por exemplo, via escalamento de temperatura ou perturbação de saída) para reduzir previsões excessivamente confiantes que facilitam ataques de inferência de associação.",
    "q_c11_11_3_2": "[11.3.2] Verifique que o treino em conjuntos de dados sensíveis emprega otimização com privacidade diferencial (por exemplo, DP-SGD) com um orçamento de privacidade documentado (epsilon).",
    "q_c11_11_3_3": "[11.3.3] Verifique que simulações de ataque de inferência de associação (por exemplo, modelo sombra, razão de verossimilhança ou ataques somente de rótulo) demonstram que a precisão do ataque não excede significativamente o acerto aleatório em dados reservados.",
    "q_c11_11_4_1": "[11.4.1] Verifique que atributos sensíveis nunca são gerados diretamente; onde necessário, as saídas usam categorias generalizadas (por exemplo, intervalos, buckets) ou transformações unidirecionais.",
    "q_c11_11_4_2": "[11.4.2] Verifique que limites de taxa de consulta controlam consultas adaptativas repetidas do mesmo principal para aumentar o custo de ataques de inversão.",
    "q_c11_11_4_3": "[11.4.3] Verifique que modelos que tratam dados sensíveis são treinados com técnicas de preservação de privacidade (por exemplo, privacidade diferencial, clipping de gradiente) para limitar o vazamento de informações por meio de saídas.",
    "q_c11_11_5_1": "[11.5.1] Verifique que os endpoints de inferência aplicam limites de taxa por principal e globais projetados para tornar a coleta de consultas em larga escala impraticável.",
    "q_c11_11_5_2": "[11.5.2] Verifique que os eventos de alerta de extração incluem metadados de consulta ofensivos e são integrados com manuais de resposta a incidentes.",
    "q_c11_11_5_3": "[11.5.3] Verifique que a análise de padrões de consulta (por exemplo, diversidade de consultas, anomalias de distribuição de entrada) alimenta um detector automatizado de tentativas de extração.",
    "q_c11_11_5_4": "[11.5.4] Verifique que técnicas de watermarking ou fingerprinting de modelo são aplicadas para que cópias não autorizadas possam ser identificadas.",
    "q_c11_11_5_5": "[11.5.5] Verifique que as chaves de verificação de watermark e os conjuntos de gatilho são protegidos com controles de acesso equivalentes a outros materiais criptográficos críticos.",
    "q_c11_11_6_1": "[11.6.1] Verifique que as entradas de fontes externas ou não confiáveis passam por detecção de anomalias (por exemplo, detecção de outliers estatísticos, pontuação de consistência) antes da inferência do modelo.",
    "q_c11_11_6_2": "[11.6.2] Verifique que os limites de detecção de anomalias são ajustados em conjuntos de validação representativos limpos e adversariais e que a taxa de falsos positivos é medida e documentada.",
    "q_c11_11_6_3": "[11.6.3] Verifique que entradas sinalizadas como anômalas acionam ações de bloqueio (bloqueio, degradação de capacidade ou revisão humana) adequadas ao nível de risco.",
    "q_c11_11_6_4": "[11.6.4] Verifique que os métodos de detecção são periodicamente testados com técnicas adversariais atuais, incluindo ataques adaptativos projetados para evadir os detectores específicos em uso.",
    "q_c11_11_6_5": "[11.6.5] Verifique que as métricas de eficácia de detecção são registradas e periodicamente reavaliadas em relação à inteligência de ameaças atualizada.",
    "q_c11_11_7_1": "[11.7.1] Verifique que as políticas de segurança (por exemplo, filtros de conteúdo, limites de taxa, configurações de guardrail) podem ser atualizadas sem reimplantação completa do sistema, e que as versões de política são rastreadas.",
    "q_c11_11_7_2": "[11.7.2] Verifique que as atualizações de política são autorizadas, protegidas por integridade (por exemplo, assinadas criptograficamente) e validadas antes da aplicação.",
    "q_c11_11_7_3": "[11.7.3] Verifique que as alterações de política são registradas com trilhas de auditoria incluindo timestamp, autor, justificativa e procedimentos de rollback.",
    "q_c11_11_7_4": "[11.7.4] Verifique que a sensibilidade de detecção de ameaças pode ser ajustada com base no contexto de risco (por exemplo, nível de ameaça elevado, resposta a incidentes) com autorização adequada.",
    "q_c11_11_8_1": "[11.8.1] Verifique que os sistemas agênticos incluem um mecanismo para revisar ações de alto risco planejadas em relação à política de segurança antes da execução (por exemplo, um modelo secundário, verificador baseado em regras ou etapa estruturada de autorrevisão).",
    "q_c11_11_8_2": "[11.8.2] Verifique que os mecanismos de revisão de segurança são protegidos contra manipulação por entradas adversariais (por exemplo, a etapa de revisão não pode ser substituída ou contornada por injeção de prompt).",
    "q_c11_11_8_3": "[11.8.3] Verifique que avisos de revisão de segurança acionam monitoramento aprimorado ou fluxos de trabalho de intervenção humana para a sessão ou tarefa afetada.",
    "q_c11_11_9_1": "[11.9.1] Verifique que qualquer capacidade de automodificação (por exemplo, reescrita de prompt, alterações na lista de ferramentas, atualizações de parâmetros) é restrita a áreas explicitamente designadas com limites aplicados.",
    "q_c11_11_9_2": "[11.9.2] Verifique que as automodificações propostas passam por avaliação de impacto de segurança ou validação de política antes de entrar em vigor.",
    "q_c11_11_9_3": "[11.9.3] Verifique que todas as automodificações são registradas, reversíveis e sujeitas a verificação de integridade, permitindo rollback para um estado conhecido como bom.",
    "q_c11_11_9_4": "[11.9.4] Verifique que o escopo de automodificação é delimitado (por exemplo, magnitude máxima de alteração, limites de taxa em atualizações, alvos de modificação proibidos) para prevenir alterações descontroladas ou induzidas adversarialmente.",
    "q_c11_11_9_5": "[11.9.5] Verifique que quando dados de violação de segurança (entradas bloqueadas, saídas filtradas, alucinações sinalizadas) são usados como sinal de treino para melhoria do modelo, o pipeline de feedback inclui verificação de integridade, detecção de envenenamento e portões de revisão humana para prevenir manipulação adversarial do mecanismo de melhoria.",
    "q_c11_11_10_1": "[11.10.1] Verifique que os endpoints de inferência para classificadores relevantes para segurança (por exemplo, detecção de abuso, pontuação de fraude) incluem monitoramento que leva em conta padrões de consulta indicativos de sondagem de viés, como variação sistemática ao longo de uma única dimensão de entrada (por exemplo, demográfica, linguística, estilística) enquanto outras dimensões permanecem constantes, e alertam quando tais padrões são detectados.",
    "q_c11_11_10_2": "[11.10.2] Verifique que as avaliações de robustez adversarial para classificadores relevantes para segurança são estratificadas por subgrupos de entrada significativos (por exemplo, registro de linguagem, categoria de conteúdo), com taxas de falsos negativos por subgrupo em condições adversariais medidas e sinalizadas quando desviam das taxas agregadas além de um limite definido.",
    "q_c11_11_10_3": "[11.10.3] Verifique que onde a evasão baseada em viés é identificada como uma ameaça material, o robustecimento adversarial (por exemplo, treinamento adversarial com restrições de perda por subgrupo, diversidade de ensemble entre distribuições de treino) incorpora requisitos explícitos de robustez por subgrupo, e que as métricas de robustez por subgrupo são verificadas para não regredir entre releases de modelo.",
    "q_c12_12_1_1": "[12.1.1] Verifique que identificadores diretos e quase-identificadores são removidos ou hasheados.",
    "q_c12_12_1_2": "[12.1.2] Verifique que auditorias automatizadas medem k-anonimato/l-diversidade e alertam quando os limites caem abaixo da política.",
    "q_c12_12_1_3": "[12.1.3] Verifique que os relatórios de importância de características do modelo comprovam ausência de vazamento de identificador além de ε = 0,01 de informação mútua.",
    "q_c12_12_1_4": "[12.1.4] Verifique que provas formais ou certificação de dados sintéticos mostram risco de reidentificação ≤ 0,05 mesmo sob ataques de vinculação.",
    "q_c12_12_2_1": "[12.2.1] Verifique que as solicitações de exclusão de titulares de dados são propagadas para conjuntos de dados brutos, checkpoints, embeddings, logs e backups dentro dos acordos de nível de serviço de menos de 30 dias.",
    "q_c12_12_2_2": "[12.2.2] Verifique que \\",
    "q_c12_12_2_3": "[12.2.3] Verifique que a avaliação de modelo sombra comprova que os registros esquecidos influenciam menos de 1% das saídas após o desaprendizado.",
    "q_c12_12_2_4": "[12.2.4] Verifique que os eventos de exclusão são registrados de forma imutável e auditáveis por reguladores.",
    "q_c12_12_3_1": "[12.3.1] Verifique que o consumo do orçamento de privacidade diferencial é rastreado por rodada de treino (valores de ε e δ) e que dashboards de orçamento cumulativo alertam quando ε excede os limites da política.",
    "q_c12_12_3_2": "[12.3.2] Verifique que auditorias de privacidade black-box estimam ε̂ dentro de 10% do valor declarado.",
    "q_c12_12_3_3": "[12.3.3] Verifique que as provas formais cobrem todos os ajustes finos e embeddings pós-treino.",
    "q_c12_12_3_4": "[12.3.4] Verifique que os sistemas de aprendizado federado implementam auditoria de privacidade baseada em canário para delimitar empiricamente o vazamento de privacidade, com resultados de auditoria registrados e revisados por ciclo de treino.",
    "q_c12_12_4_1": "[12.4.1] Verifique que cada conjunto de dados e checkpoint de modelo carrega uma tag de finalidade legível por máquina alinhada ao consentimento original.",
    "q_c12_12_4_2": "[12.4.2] Verifique que monitores em tempo de execução detectam consultas inconsistentes com a finalidade declarada e acionam recusa suave.",
    "q_c12_12_4_3": "[12.4.3] Verifique que portões de policy-as-code bloqueiam a reimplantação de modelos em novos domínios sem revisão de DPIA.",
    "q_c12_12_4_4": "[12.4.4] Verifique que provas formais de rastreabilidade mostram que todo ciclo de vida de dados pessoais permanece dentro do escopo consentido.",
    "q_c12_12_5_1": "[12.5.1] Verifique que uma Plataforma de Gerenciamento de Consentimento (CMP) registra o status de opt-in, finalidade e período de retenção por titular de dados.",
    "q_c12_12_5_2": "[12.5.2] Verifique que as APIs expõem tokens de consentimento; os modelos devem validar o escopo do token antes da inferência.",
    "q_c12_12_5_3": "[12.5.3] Verifique que o consentimento negado ou retirado interrompe os pipelines de processamento dentro de 24 horas.",
    "q_c12_12_6_1": "[12.6.1] Verifique que as atualizações de cliente empregam adição de ruído de privacidade diferencial local antes da agregação.",
    "q_c12_12_6_2": "[12.6.2] Verifique que as métricas de treino são diferencialmente privadas e nunca revelam a perda de um único cliente.",
    "q_c12_12_6_3": "[12.6.3] Verifique que a agregação resistente a envenenamento (por exemplo, Krum/Trimmed-Mean) está habilitada.",
    "q_c12_12_6_4": "[12.6.4] Verifique que as provas formais demonstram orçamento ε geral com menos de 5 de perda de utilidade.",
    "q_c13_13_1_1": "[13.1.1] Verifique que as interações de IA são registradas com metadados relevantes para segurança (por exemplo, timestamp, ID do usuário, ID da sessão, versão do modelo, contagem de tokens, hash da entrada, versão do prompt de sistema, pontuação de confiança, resultado do filtro de segurança e decisões do filtro de segurança) sem registrar o conteúdo de prompt ou resposta por padrão.",
    "q_c13_13_1_2": "[13.1.2] Verifique que os registros são armazenados em repositórios seguros e com controle de acesso com políticas de retenção e procedimentos de backup adequados.",
    "q_c13_13_1_3": "[13.1.3] Verifique que os sistemas de armazenamento de logs implementam criptografia em repouso e em trânsito para proteger informações sensíveis contidas nos logs.",
    "q_c13_13_1_4": "[13.1.4] Verifique que dados sensíveis em prompts e saídas são automaticamente redigidos ou mascarados antes do registro, com regras de redação configuráveis para PII, credenciais e informações proprietárias.",
    "q_c13_13_1_5": "[13.1.5] Verifique que as decisões de política e as ações de filtragem de segurança são registradas com detalhes suficientes para permitir auditoria e depuração de sistemas de moderação de conteúdo.",
    "q_c13_13_1_6": "[13.1.6] Verifique que a integridade dos logs é protegida por exemplo por assinaturas criptográficas ou armazenamento somente de escrita.",
    "q_c13_13_1_7": "[13.1.7] Verifique que as entradas de log para eventos de inferência de IA capturam um esquema estruturado e interoperável que inclui no mínimo identificador do modelo, uso de tokens (entrada e saída), nome do provedor e tipo de operação, para permitir observabilidade consistente de IA entre ferramentas e plataformas.",
    "q_c13_13_1_8": "[13.1.8] Verifique que o conteúdo completo de prompt e resposta é registrado apenas quando um evento relevante para segurança é detectado (por exemplo, acionamento de filtro de segurança, detecção de injeção de prompt, sinalização de anomalia), ou quando requerido por consentimento explícito do usuário e base jurídica documentada.",
    "q_c13_13_2_1": "[13.2.1] Verifique que o sistema detecta e alerta sobre padrões conhecidos de jailbreak, tentativas de injeção de prompt e entradas adversariais usando detecção baseada em assinatura.",
    "q_c13_13_2_2": "[13.2.2] Verifique que o sistema se integra com plataformas existentes de Gerenciamento de Informações e Eventos de Segurança (SIEM) usando formatos e protocolos de log padrão.",
    "q_c13_13_2_3": "[13.2.3] Verifique que os eventos de segurança enriquecidos incluem contexto específico de IA, como identificadores de modelo, pontuações de confiança e decisões do filtro de segurança.",
    "q_c13_13_2_4": "[13.2.4] Verifique que a detecção de anomalias comportamentais identifica padrões de conversa incomuns, tentativas de nova tentativa excessivas ou comportamentos de sondagem sistemática.",
    "q_c13_13_2_5": "[13.2.5] Verifique que os mecanismos de alerta em tempo real notificam as equipes de segurança quando possíveis violações de política ou tentativas de ataque são detectadas.",
    "q_c13_13_2_6": "[13.2.6] Verifique que regras personalizadas são incluídas para detectar padrões de ameaça específicos de IA, incluindo tentativas coordenadas de jailbreak, campanhas de injeção de prompt e ataques de extração de modelo.",
    "q_c13_13_2_7": "[13.2.7] Verifique que fluxos de trabalho automatizados de resposta a incidentes podem isolar modelos comprometidos, bloquear usuários maliciosos e escalar eventos de segurança críticos.",
    "q_c13_13_2_8": "[13.2.8] Verifique que a análise de trajetória de conversa no nível da sessão detecta padrões de jailbreak multi-turno onde nenhum turno individual é abertamente malicioso em isolamento, mas a conversa agregada exibe indicadores de ataque.",
    "q_c13_13_2_9": "[13.2.9] Verifique que o consumo de tokens por usuário e por sessão aciona um alerta quando o consumo excede os limites definidos.",
    "q_c13_13_2_10": "[13.2.10] Verifique que o tráfego de API de LLM é monitorado quanto a indicadores de canal encoberto, incluindo payloads codificados em Base64, padrões de consulta estruturados não humanos e assinaturas de comunicação consistentes com atividade de comando e controle de malware usando endpoints de LLM.",
    "q_c13_13_3_1": "[13.3.1] Verifique que as métricas de desempenho do modelo (acurácia, precisão, recall, F1 score, pontuações de confiança, latência e taxas de erro) são continuamente monitoradas entre versões de modelo e períodos de tempo e comparadas com baselines documentados.",
    "q_c13_13_3_2": "[13.3.2] Verifique que os perfis de desempenho baseline são formalmente documentados e versionados, e são revisados em uma frequência definida ou após qualquer alteração de modelo ou pipeline de dados.",
    "q_c13_13_3_3": "[13.3.3] Verifique que o alerta automatizado é acionado quando as métricas de desempenho excedem limites de degradação predefinidos ou desviam significativamente dos baselines, e que os alertas iniciam fluxos de trabalho de retreinamento ou substituição de modelo.",
    "q_c13_13_3_4": "[13.3.4] Verifique que os monitores de detecção de alucinação identificam e sinalizam instâncias em que as saídas do modelo contêm informações factualmente incorretas, inconsistentes ou fabricadas, e que as taxas de alucinação são rastreadas como métricas de série temporal contínuas para permitir análise de tendências e detecção de degradação sustentada do modelo.",
    "q_c13_13_3_5": "[13.3.5] Verifique que os monitores de detecção de deriva de dados monitoram mudanças na distribuição de entrada que podem impactar o desempenho do modelo, usando métodos estatisticamente validados adequados ao tipo de dados.",
    "q_c13_13_3_6": "[13.3.6] Verifique que a deriva de esquema nos dados de entrada (adições, remoções, alterações de tipo ou variações de formato de campos inesperados) é detectada e aciona alertas.",
    "q_c13_13_3_7": "[13.3.7] Verifique que a detecção de deriva de conceito identifica mudanças na relação entre entradas e saídas esperadas.",
    "q_c13_13_3_8": "[13.3.8] Verifique que a análise de causa raiz de degradação correlaciona quedas de desempenho com mudanças de dados, problemas de infraestrutura ou fatores externos.",
    "q_c13_13_3_9": "[13.3.9] Verifique que mudanças comportamentais repentinas e inexplicadas são distinguidas da deriva operacional gradual esperada, com um caminho de escalação de segurança definido para deriva repentina inexplicada.",
    "q_c13_13_4_1": "[13.4.1] Verifique que as métricas operacionais incluindo latência de requisições, consumo de tokens, uso de memória e throughput são continuamente coletadas e monitoradas.",
    "q_c13_13_4_2": "[13.4.2] Verifique que as taxas de sucesso e falha são rastreadas com categorização dos tipos de erro e suas causas raiz.",
    "q_c13_13_4_3": "[13.4.3] Verifique que o monitoramento de utilização de recursos inclui uso de GPU/CPU, consumo de memória e requisitos de armazenamento com alertas em violações de limite.",
    "q_c13_13_4_4": "[13.4.4] Verifique que o uso de tokens é rastreado em níveis granulares de atribuição incluindo por usuário, por sessão, por endpoint de funcionalidade e por equipe ou espaço de trabalho.",
    "q_c13_13_4_5": "[13.4.5] Verifique que anomalias na proporção de tokens de saída para entrada são detectadas e alertadas.",
    "q_c13_13_5_1": "[13.5.1] Verifique que os planos de resposta a incidentes abordam especificamente eventos de segurança relacionados a IA, incluindo comprometimento de modelo, envenenamento de dados, ataques adversariais, inversão de modelo, campanhas de injeção de prompt e extração de modelo, com etapas específicas de contenção e investigação para cada cenário.",
    "q_c13_13_5_2": "[13.5.2] Verifique que as equipes de resposta a incidentes têm acesso a ferramentas forenses específicas de IA e expertise para investigar comportamento do modelo e vetores de ataque.",
    "q_c13_13_5_3": "[13.5.3] Verifique que a análise pós-incidente inclui considerações de retreinamento do modelo, atualizações de filtro de segurança e integração de lições aprendidas nos controles de segurança.",
    "q_c13_13_6_1": "[13.6.1] Verifique que os dados de visualização de DAG são sanitizados para remover informações sensíveis antes do armazenamento ou transmissão.",
    "q_c13_13_6_2": "[13.6.2] Verifique que os controles de acesso à visualização de workflow garantem que apenas usuários autorizados possam visualizar caminhos de decisão de agentes e trilhas de raciocínio.",
    "q_c13_13_6_3": "[13.6.3] Verifique que a integridade dos dados de DAG é protegida por assinaturas criptográficas e mecanismos de armazenamento à prova de adulteração.",
    "q_c13_13_6_4": "[13.6.4] Verifique que os sistemas de visualização de workflow implementam validação de entrada para prevenir ataques de injeção por meio de dados de nó ou aresta manipulados.",
    "q_c13_13_6_5": "[13.6.5] Verifique que as atualizações de DAG em tempo real são limitadas em taxa e validadas para prevenir ataques de negação de serviço nos sistemas de visualização.",
    "q_c13_13_7_1": "[13.7.1] Verifique que os comportamentos proativos de agentes são validados quanto à segurança antes da execução com integração de avaliação de risco.",
    "q_c13_13_7_2": "[13.7.2] Verifique que os gatilhos de iniciativa autônoma incluem avaliação do contexto de segurança e avaliação do panorama de ameaças.",
    "q_c13_13_7_3": "[13.7.3] Verifique que os padrões de comportamento proativo são analisados quanto a possíveis implicações de segurança e consequências não intencionais.",
    "q_c13_13_7_4": "[13.7.4] Verifique que ações proativas críticas para segurança requerem cadeias de aprovação explícitas com trilhas de auditoria.",
    "q_c13_13_7_5": "[13.7.5] Verifique que a detecção de anomalias comportamentais identifica desvios nos padrões proativos de agentes que podem indicar comprometimento.",
    "q_c14_14_1_1": "[14.1.1] Verifique que existe um mecanismo manual de kill-switch para interromper imediatamente a inferência e as saídas do modelo de IA.",
    "q_c14_14_1_2": "[14.1.2] Verifique que os controles de substituição são acessíveis apenas a pessoal autorizado.",
    "q_c14_14_1_3": "[14.1.3] Verifique que os procedimentos de rollback podem reverter para versões anteriores do modelo ou operações em modo seguro.",
    "q_c14_14_1_4": "[14.1.4] Verifique que os mecanismos de substituição são testados regularmente.",
    "q_c14_14_2_1": "[14.2.1] Verifique que as decisões de IA de alto risco requerem aprovação humana explícita antes da execução.",
    "q_c14_14_2_2": "[14.2.2] Verifique que os limites de risco são claramente definidos e acionam automaticamente fluxos de trabalho de revisão humana.",
    "q_c14_14_2_3": "[14.2.3] Verifique que as decisões sensíveis ao tempo têm procedimentos de fallback quando a aprovação humana não pode ser obtida dentro dos prazos necessários.",
    "q_c14_14_2_4": "[14.2.4] Verifique que os procedimentos de escalação definem níveis de autoridade claros para diferentes tipos de decisão ou categorias de risco, quando aplicável.",
    "q_c14_14_3_1": "[14.3.1] Verifique que todas as decisões do sistema de IA e as intervenções humanas são registradas com timestamps, identidades de usuários e fundamento da decisão.",
    "q_c14_14_4_1": "[14.4.1] Verifique que os sistemas de IA fornecem explicações básicas para suas decisões em formato legível por humanos.",
    "q_c14_14_4_2": "[14.4.2] Verifique que a qualidade das explicações é validada por estudos de avaliação humana e métricas.",
    "q_c14_14_4_3": "[14.4.3] Verifique que pontuações de importância de características ou métodos de atribuição (SHAP, LIME, etc.) estão disponíveis para decisões críticas.",
    "q_c14_14_4_4": "[14.4.4] Verifique que as explicações contrafactuais mostram como as entradas poderiam ser modificadas para alterar os resultados, quando aplicável ao caso de uso e domínio.",
    "q_c14_14_5_1": "[14.5.1] Verifique que os model cards documentam os casos de uso pretendidos, limitações e modos de falha conhecidos.",
    "q_c14_14_5_2": "[14.5.2] Verifique que as métricas de desempenho em diferentes casos de uso aplicáveis são divulgadas.",
    "q_c14_14_5_3": "[14.5.3] Verifique que as considerações éticas, avaliações de viés, avaliações de equidade, características dos dados de treino e limitações conhecidas dos dados de treino são documentadas e atualizadas regularmente.",
    "q_c14_14_5_4": "[14.5.4] Verifique que os model cards são versionados e mantidos ao longo do ciclo de vida do modelo com rastreamento de alterações.",
    "q_c14_14_6_1": "[14.6.1] Verifique que os sistemas de IA fornecem pontuações de confiança ou medidas de incerteza com suas saídas.",
    "q_c14_14_6_2": "[14.6.2] Verifique que os limites de incerteza acionam revisão humana adicional ou caminhos alternativos de decisão.",
    "q_c14_14_6_3": "[14.6.3] Verifique que os métodos de quantificação de incerteza são calibrados e validados em relação aos dados de verdade de campo.",
    "q_c14_14_6_4": "[14.6.4] Verifique que a propagação de incerteza é mantida ao longo de fluxos de trabalho de IA em múltiplas etapas.",
    "q_c14_14_7_1": "[14.7.1] Verifique que as políticas de uso de dados e as práticas de gerenciamento de consentimento do usuário são claramente comunicadas às partes interessadas.",
    "q_c14_14_7_2": "[14.7.2] Verifique que as avaliações de impacto de IA são realizadas e os resultados são incluídos nos relatórios.",
    "q_c14_14_7_3": "[14.7.3] Verifique que os relatórios de transparência publicados regularmente divulgam incidentes de IA e métricas operacionais com detalhes razoáveis."
};
function translateChoices(question) {
    if (!question.choices) return;
    for (const choice of question.choices){
        if (typeof choice === 'object' && choice.text && choiceTranslations[choice.text]) {
            choice.text = choiceTranslations[choice.text];
        } else if (typeof choice === 'string' && choiceTranslations[choice]) {
            // In-place replace for simple string choices
            const idx = question.choices.indexOf(choice);
            question.choices[idx] = choiceTranslations[choice];
        }
    }
}
function translateField(question) {
    if (question.name && questionTranslations[question.name]) {
        question.title = questionTranslations[question.name];
    } else if (question.title && fieldTranslations[question.title]) {
        question.title = fieldTranslations[question.title];
    } else if (question.name && fieldTranslations[question.name]) {
        question.title = question.title || fieldTranslations[question.name];
    }
}
}),
"[project]/src/features/assessment/surveys/totalsurvey.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c01$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c01.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c02$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c02.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c03$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c03.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c04$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c04.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c05$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c05.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c06$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c06.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c07$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c07.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c08$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c08.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c09$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c09.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c10$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c10.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c11$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c11.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c12$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c12.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c13$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c13.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c14$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/surveypages/c14.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$translations$2d$pt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/translations-pt.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var tosend = {
    pages: [],
    questionStartIndex: "1"
};
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c01$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c02$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c03$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c04$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c05$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c06$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c07$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c08$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c09$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c10$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c11$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c12$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c13$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
tosend.pages.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$surveypages$2f$c14$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])());
const Json = (locale = 'en')=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$translations$2d$pt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["translateSurvey"])(tosend, locale);
const __TURBOPACK__default__export__ = Json;
}),
"[project]/src/components/inputfile.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dropzone__$5b$external$5d$__$28$react$2d$dropzone$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$29$__ = __turbopack_context__.i("[externals]/react-dropzone [external] (react-dropzone, esm_import, [project]/node_modules/react-dropzone)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dropzone__$5b$external$5d$__$28$react$2d$dropzone$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dropzone__$5b$external$5d$__$28$react$2d$dropzone$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const InputFile = (props)=>{
    const t = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('upload');
    const tA11y = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('a11y');
    const [uploadState, setUploadState] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [uploadMessage, setUploadMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [uploadColour, setUploadColour] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('default');
    const uploadPageState = props.pageName === 'assesment';
    const onDrop = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((acceptedFiles)=>{
        acceptedFiles.forEach((file)=>{
            const reader = new FileReader();
            if (file.path?.split('.').pop() === 'json' || file.name.endsWith('.json')) {
                reader.onabort = ()=>console.warn('File Reading was aborted');
                reader.onerror = ()=>console.warn('file reading has failed');
                reader.onload = ()=>{
                    const results = reader.result;
                    try {
                        const parsed = JSON.parse(results);
                        const hasQuestions = Object.keys(parsed).some((k)=>k.startsWith('question'));
                        const hasMetadata = 'Company Name' in parsed || 'llmAnalysis' in parsed;
                        if (!hasQuestions && !hasMetadata) {
                            setUploadMessage(t('errorFormat'));
                            setUploadColour('red');
                            return;
                        }
                    } catch  {
                        setUploadMessage(t('errorFormat'));
                        setUploadColour('red');
                        return;
                    }
                    sessionStorage.setItem(props.fileName, results);
                    location.reload();
                    setUploadState(true);
                };
                reader.readAsText(file);
            } else {
                console.warn("File wasn't a JSON");
                setUploadMessage(t('errorFormat'));
                setUploadColour('red');
            }
        });
    }, [
        t,
        props.fileName
    ]);
    const { getRootProps, getInputProps } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dropzone__$5b$external$5d$__$28$react$2d$dropzone$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$29$__["useDropzone"])({
        onDrop
    });
    const rootProps = getRootProps();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
            whileHover: uploadPageState ? undefined : {
                scale: 1.01
            },
            transition: {
                duration: 0.15
            },
            className: uploadPageState ? 'flex justify-around items-center py-3 px-[10%] bg-white/5 border-b border-cyan-400/30' : 'border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer bg-white/5 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/50',
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ...rootProps,
                style: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/src/components/inputfile.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: `text-lg ${uploadColour === 'red' ? 'text-red-400' : 'text-slate-300'}`,
                        children: uploadMessage || t('dropzone')
                    }, void 0, false, {
                        fileName: "[project]/src/components/inputfile.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: uploadState ? '/uploadSuccessful.png' : '/dragndrop.png',
                            width: 75,
                            height: 75,
                            alt: uploadState ? tA11y('uploadSuccess') : tA11y('dragAndDrop')
                        }, void 0, false, {
                            fileName: "[project]/src/components/inputfile.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inputfile.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inputfile.tsx",
                lineNumber: 71,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/inputfile.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = InputFile;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/buttons/navbutton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const NavButton = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
        className: "flex flex-col items-center gap-2 cursor-pointer group",
        onClick: props.onClick,
        whileHover: {
            scale: 1.05
        },
        transition: {
            duration: 0.15
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                "aria-label": props.name,
                className: props.state ? 'w-4 h-4 rounded-full border-[3px] border-cyan-400 bg-gradient-to-br from-cyan-400 to-purple-500 cursor-pointer shadow-[0_0_12px_rgba(0,229,255,0.5)] animate-pulse transition-all duration-200' : 'w-4 h-4 rounded-full border-[3px] border-slate-600 bg-transparent cursor-pointer transition-all duration-200 group-hover:border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_8px_rgba(0,229,255,0.4)]'
            }, void 0, false, {
                fileName: "[project]/src/components/buttons/navbutton.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                className: "text-xs font-semibold text-slate-400 text-center select-none cursor-pointer transition-all duration-200 group-hover:text-cyan-400",
                children: props.name
            }, void 0, false, {
                fileName: "[project]/src/components/buttons/navbutton.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/buttons/navbutton.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavButton;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/features/assessment/surveynav.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$navbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/buttons/navbutton.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$navbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$navbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const SurveyNav = (props)=>{
    const t = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('assessment.controls');
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const navbarState = sessionStorage.getItem('navbarState');
        const userState = JSON.parse(sessionStorage.getItem('userState'));
        const currentNavbarState = getNavbarState();
        if (navbarState !== currentNavbarState) {
            if (!userState['has_switched_page']) {
                sessionStorage.setItem('navbarState', currentNavbarState ?? '');
            }
        }
    }, [
        display
    ]);
    const buttonState = [
        {
            name: 'Control 1',
            displayName: t('c01'),
            state: true
        },
        {
            name: 'Control 2',
            displayName: t('c02'),
            state: false
        },
        {
            name: 'Control 3',
            displayName: t('c03'),
            state: false
        },
        {
            name: 'Control 4',
            displayName: t('c04'),
            state: false
        },
        {
            name: 'Control 5',
            displayName: t('c05'),
            state: false
        },
        {
            name: 'Control 6',
            displayName: t('c06'),
            state: false
        },
        {
            name: 'Control 7',
            displayName: t('c07'),
            state: false
        },
        {
            name: 'Control 8',
            displayName: t('c08'),
            state: false
        },
        {
            name: 'Control 9',
            displayName: t('c09'),
            state: false
        },
        {
            name: 'Control 10',
            displayName: t('c10'),
            state: false
        },
        {
            name: 'Control 11',
            displayName: t('c11'),
            state: false
        },
        {
            name: 'Control 12',
            displayName: t('c12'),
            state: false
        },
        {
            name: 'Control 13',
            displayName: t('c13'),
            state: false
        },
        {
            name: 'Control 14',
            displayName: t('c14'),
            state: false
        }
    ];
    function updateButtonState(index) {
        props.onClick(buttonState[index].name);
        setDisplay((d)=>!d);
    }
    function getNavbarState() {
        for(const key in buttonState){
            if (buttonState[key].state) {
                return buttonState[key].name;
            }
        }
    }
    for(const key in buttonState){
        buttonState[key].state = false;
        if (buttonState[key].name === props.button) {
            buttonState[key].state = true;
        }
    }
    const getCurrentDisplayName = ()=>{
        const currentButton = buttonState.find((btn)=>btn.name === props.button);
        return currentButton ? currentButton.displayName : props.button;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "flex justify-center items-center gap-2 py-5 px-5 flex-wrap",
                children: buttonState.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$navbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: btn.displayName,
                        state: btn.state,
                        onClick: ()=>updateButtonState(i)
                    }, btn.name, false, {
                        fileName: "[project]/src/features/assessment/surveynav.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/features/assessment/surveynav.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-slate-200 font-[Poppins]",
                    children: getCurrentDisplayName()
                }, void 0, false, {
                    fileName: "[project]/src/features/assessment/surveynav.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/features/assessment/surveynav.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = SurveyNav;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/buttons/dropdownbutton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const DropButton = (props)=>{
    const tA11y = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('a11y');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
        className: "flex justify-between items-center w-full px-5 py-4 my-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/8 hover:shadow-[0_4px_12px_rgba(0,229,255,0.1)]",
        onClick: ()=>props.onClick(!props.state),
        whileHover: {
            y: -2
        },
        transition: {
            duration: 0.15
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "flex-1 text-center text-slate-200 font-semibold text-base",
                children: props.name
            }, void 0, false, {
                fileName: "[project]/src/components/buttons/dropdownbutton.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "flex items-center justify-center w-8 h-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: props.state ? '/uparrow.png' : '/downarrow.png',
                    width: 30,
                    height: 30,
                    style: {
                        width: 'auto',
                        height: 'auto'
                    },
                    alt: props.state ? tA11y('collapse') : tA11y('expand')
                }, void 0, false, {
                    fileName: "[project]/src/components/buttons/dropdownbutton.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/buttons/dropdownbutton.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/buttons/dropdownbutton.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DropButton;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/buttons/surveybuttons.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const SurveyButton = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].button, {
        className: "px-8 py-3 rounded-xl border border-cyan-400/50 bg-cyan-500/10 text-cyan-400 font-semibold text-base cursor-pointer transition-all duration-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_16px_rgba(0,229,255,0.3)] active:scale-95 min-w-[150px]",
        id: props.id,
        onClick: ()=>props.onClick(!props.state),
        whileTap: {
            scale: 0.95
        },
        children: props.name
    }, void 0, false, {
        fileName: "[project]/src/components/buttons/surveybuttons.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SurveyButton;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/features/assessment/surveys/survey-pt.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Portuguese (Brazil) translations for Survey.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$core__$5b$external$5d$__$28$survey$2d$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$core$29$__ = __turbopack_context__.i("[externals]/survey-core [external] (survey-core, cjs, [project]/node_modules/survey-core)");
;
const portugueseTranslation = {
    // Common strings
    pagePrevText: "Anterior",
    pageNextText: "Próximo",
    completeText: "Concluir",
    previewText: "Visualizar",
    editText: "Editar",
    startSurveyText: "Iniciar",
    otherItemText: "Outro (descrever)",
    noneItemText: "Nenhum",
    selectAllItemText: "Selecionar Todos",
    progressText: "Página {0} de {1}",
    indexText: "{0} de {1}",
    panelDynamicProgressText: "Registro {0} de {1}",
    questionsProgressText: "Respondeu {0}/{1} perguntas",
    emptySurvey: "Não há perguntas visíveis no questionário.",
    completingSurvey: "Obrigado por completar o questionário!",
    completingSurveyBefore: "Nossos registros mostram que você já completou este questionário.",
    loadingSurvey: "O questionário está carregando...",
    placeholder: "Selecione...",
    value: "valor",
    requiredError: "Por favor, responda a pergunta.",
    requiredErrorInPanel: "Por favor, responda pelo menos uma pergunta.",
    requiredInAllRowsError: "Por favor, responda as perguntas em todas as linhas.",
    numericError: "O valor deve ser numérico.",
    minError: "O valor não deve ser menor que {0}",
    maxError: "O valor não deve ser maior que {0}",
    textMinLength: "Por favor, insira pelo menos {0} caracteres.",
    textMaxLength: "Por favor, insira menos de {0} caracteres.",
    textMinMaxLength: "Por favor, insira mais de {0} e menos de {1} caracteres.",
    minRowCountError: "Por favor, preencha pelo menos {0} linhas.",
    minSelectError: "Por favor, selecione pelo menos {0} variantes.",
    maxSelectError: "Por favor, selecione não mais de {0} variantes.",
    numericMinMax: "O '{0}' deve ser igual ou maior que {1} e igual ou menor que {2}",
    numericMin: "O '{0}' deve ser igual ou maior que {1}",
    numericMax: "O '{0}' deve ser igual ou menor que {1}",
    invalidEmail: "Por favor, insira um e-mail válido.",
    invalidExpression: "A expressão: {0} deve retornar 'true'.",
    urlRequestError: "A requisição retornou erro '{0}'. {1}",
    urlGetChoicesError: "A requisição retornou dados vazios ou a propriedade 'path' está incorreta",
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    otherRequiredError: "Por favor, insira o outro valor.",
    uploadingFile: "Seu arquivo está sendo carregado. Por favor, aguarde alguns segundos e tente novamente.",
    loadingFile: "Carregando...",
    chooseFile: "Escolher arquivo(s)...",
    noFileChosen: "Nenhum arquivo escolhido",
    filePlaceholder: "Arraste e solte um arquivo aqui ou clique no botão abaixo e escolha um arquivo para carregar.",
    confirmDelete: "Você quer deletar o registro?",
    keyDuplicationError: "Este valor deve ser único.",
    addColumn: "Adicionar Coluna",
    addRow: "Adicionar Linha",
    removeRow: "Remover",
    emptyRowsText: "Não há linhas.",
    addPanel: "Adicionar novo",
    removePanel: "Remover",
    choices_Item: "item",
    matrix_column: "Coluna",
    matrix_row: "Linha",
    multipletext_itemname: "texto",
    savingData: "Os resultados estão sendo salvos no servidor...",
    savingDataError: "Ocorreu um erro e não foi possível salvar os resultados.",
    savingDataSuccess: "Os resultados foram salvos com sucesso!",
    saveAgainButton: "Tentar novamente",
    timerMin: "min",
    timerSec: "seg",
    timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
    timerSpentPage: "Você gastou {0} nesta página.",
    timerSpentSurvey: "Você gastou {0} no total.",
    timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
    timerLimitPage: "Você gastou {0} de {1} nesta página.",
    timerLimitSurvey: "Você gastou {0} de {1} no total.",
    clearCaption: "Limpar",
    signaturePlaceHolder: "Assine aqui",
    chooseFileCaption: "Escolher arquivo",
    takePhotoCaption: "Tirar Foto",
    photoPlaceholder: "Clique no botão abaixo para tirar uma foto usando a câmera.",
    fileOrPhotoPlaceholder: "Arraste e solte ou selecione um arquivo para carregar ou tirar uma foto usando a câmera.",
    replaceFileCaption: "Substituir arquivo",
    removeFileCaption: "Remover este arquivo",
    booleanCheckedLabel: "Sim",
    booleanUncheckedLabel: "Não",
    confirmRemoveFile: "Você tem certeza que deseja remover este arquivo: {0}?",
    confirmRemoveAllFiles: "Você tem certeza que deseja remover todos os arquivos?",
    questionTitlePatternText: "Título da Pergunta",
    modalCancelButtonText: "Cancelar",
    modalApplyButtonText: "Aplicar",
    filterStringPlaceholder: "Digite para pesquisar...",
    emptyMessage: "Não há dados para exibir",
    noEntriesText: "Não há entradas ainda.\nClique no botão abaixo para adicionar uma nova entrada.",
    more: "Mais",
    tagboxPlaceholder: "Digite para adicionar uma tag...",
    selectToRankEmptyRankedAreaText: "Todas as opções estão classificadas",
    selectToRankEmptyUnrankedAreaText: "Arraste e solte as opções aqui para classificá-las"
};
// Add Portuguese locale to Survey.js
__TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$core__$5b$external$5d$__$28$survey$2d$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$core$29$__["surveyLocalization"].locales["pt"] = portugueseTranslation;
__TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$core__$5b$external$5d$__$28$survey$2d$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$core$29$__["surveyLocalization"].localeNames["pt"] = "Português";
}),
"[project]/src/features/assessment/surveytypeone.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$core__$5b$external$5d$__$28$survey$2d$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$core$29$__ = __turbopack_context__.i("[externals]/survey-core [external] (survey-core, cjs, [project]/node_modules/survey-core)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$react$2d$ui__$5b$external$5d$__$28$survey$2d$react$2d$ui$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$react$2d$ui$29$__ = __turbopack_context__.i("[externals]/survey-react-ui [external] (survey-react-ui, cjs, [project]/node_modules/survey-react-ui)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$totalsurvey$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/totalsurvey.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inputfile$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inputfile.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveynav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveynav.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$dropdownbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/buttons/dropdownbutton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$surveybuttons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/buttons/surveybuttons.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$survey$2d$pt$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveys/survey-pt.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inputfile$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveynav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$dropdownbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$surveybuttons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inputfile$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveynav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$dropdownbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$surveybuttons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
let survey;
let isDropDownButtonClicked = false;
function formatDate(date) {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();
    let hours = '' + date.getHours();
    let minutes = '' + date.getMinutes();
    let seconds = '' + date.getSeconds();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;
    return [
        year,
        month,
        day,
        hours,
        minutes,
        seconds
    ].join('');
}
const Mysurvey = (prop)=>{
    const t = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('assessment');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const nextPracticeText = t('nextPractice');
    const previousPracticeText = t('previousPractice');
    const nextPageText = t('nextPage');
    const currentLocale = router.locale || 'en';
    if (!survey || survey.locale !== currentLocale) {
        const currentData = survey ? survey.data : {};
        let assessmentState = null;
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && sessionStorage.getItem('assessmentState')) //TURBOPACK unreachable
        ;
        survey = new __TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$core__$5b$external$5d$__$28$survey$2d$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$core$29$__["Model"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveys$2f$totalsurvey$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(currentLocale));
        survey.locale = currentLocale;
        if (assessmentState && Object.keys(assessmentState).length > 0) {
            for(const key in assessmentState){
                survey.setValue(key, assessmentState[key]);
            }
        } else if (Object.keys(currentData).length > 0) {
            survey.data = currentData;
        }
    } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const [surveyState, setSurvey] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(survey);
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [pageState, setPageState] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('Control 1');
    const [dropDownState, setDropDownState] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const registeredSurveyRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const pageStateRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(pageState);
    pageStateRef.current = pageState;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const loadedResults = undefined;
        let assessmentState;
        let userState;
        const navbar = undefined;
        const userStateData = undefined;
    }, [
        display
    ]);
    function saveResponses() {
        const a = document.createElement('a');
        const data = JSON.parse(sessionStorage.getItem('assessmentState'));
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
        const ts = formatDate(new Date());
        let fileName;
        if (data['Company Name'] != null && data['Company Name'] !== '') {
            if (data['Project name'] != null && data['Project name'] !== '') {
                fileName = data['Company Name'] + '-' + data['Project name'] + '-' + ts + '.json';
            } else {
                fileName = data['Company Name'] + '-' + ts + '.json';
            }
        } else {
            fileName = 'AISeVS-Assessment-' + ts + '.json';
        }
        a.setAttribute('download', fileName);
        a.click();
    }
    function handleDropDownButton(value) {
        setDropDownState(value);
        isDropDownButtonClicked = true;
    }
    function setNavBarState(name) {
        sessionStorage.setItem('navbarState', name);
        setPageState(name);
        survey.currentPage = survey.getPageByName(name);
        setSurvey(survey);
    }
    const AISVS_PAGES = [
        'Control 1',
        'Control 2',
        'Control 3',
        'Control 4',
        'Control 5',
        'Control 6',
        'Control 7',
        'Control 8',
        'Control 9',
        'Control 10',
        'Control 11',
        'Control 12',
        'Control 13',
        'Control 14'
    ];
    function changePage(pageName) {
        if (pageName !== 'next') {
            survey.currentPage = survey.getPageByName(pageName);
            setPageState(pageName);
            sessionStorage.setItem('navbarState', pageName);
            setSurvey(survey);
        } else {
            const currentPageName = pageStateRef.current;
            const currentIdx = AISVS_PAGES.indexOf(currentPageName);
            if (currentIdx === AISVS_PAGES.length - 1) {
                sessionStorage.setItem('freshCompletion', 'true');
                router.push('/results');
                return;
            }
            const nextPageName = AISVS_PAGES[currentIdx + 1];
            survey.currentPage = survey.getPageByName(nextPageName);
            setPageState(nextPageName);
            sessionStorage.setItem('navbarState', nextPageName);
            setSurvey(survey);
        }
    }
    let pageChanged = false;
    const panels = [];
    const curr_panel_names = [];
    const panelStateMap = new Map();
    const all_pages = survey.pages;
    const page_names = [];
    for(let i = 0; i < all_pages.length; i++){
        page_names.push(all_pages[i].name);
    }
    function append_panel_data(in_data) {
        for(let i = 0; i < in_data.length; i++){
            curr_panel_names.push(in_data[i].name);
            panels.push(in_data[i]);
        }
    }
    survey.showNavigationButtons = 'none';
    if (registeredSurveyRef.current !== survey) {
        registeredSurveyRef.current = survey;
        survey.onCurrentPageChanged.add(function(s, option) {
            if (panels.length > 0 && curr_panel_names.length > 0) {
                panels.length = 0;
                curr_panel_names.length = 0;
                panelStateMap.clear();
            }
            pageChanged = true;
            const currPage = option.newCurrentPage;
            append_panel_data(currPage.getPanels());
            if (currPage && currPage.name) {
                setPageState(currPage.name);
                const navBarState = sessionStorage.getItem('navbarState');
                if (navBarState !== currPage.name) {
                    sessionStorage.setItem('navbarState', currPage.name);
                }
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        if (!pageChanged) {
            const page = survey.currentPage;
            append_panel_data(page.getPanels());
        }
        function getPanelHeaders(panelName) {
            const panelHeaderMap = JSON.parse(sessionStorage.getItem('practiceHeaders'));
            return panelHeaderMap[panelName];
        }
        survey.onAfterRenderPanel.add(function(s, options) {
            const rendered_panel = options.panel.name;
            const index = curr_panel_names.indexOf(rendered_panel);
            const currentPanel = panels[index];
            const curr_page_no = s.currentPageNo + 1;
            function panelInPage(checkPanel) {
                return curr_panel_names.indexOf(checkPanel) > -1;
            }
            function panelScroll(targetPanelName) {
                const hTags = document.getElementsByTagName('h4');
                let found;
                for(let i = 0; i < hTags.length; i++){
                    if (hTags[i].textContent === targetPanelName) {
                        found = hTags[i];
                        break;
                    }
                }
                if (found && typeof found.scrollIntoView === 'function') {
                    found.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            function isFirstPanel(idx) {
                return idx === 0;
            }
            function isLastPanel(idx) {
                return idx === curr_panel_names.length - 1;
            }
            function createPanelButton(button_type, btnID) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'btn btn-info btn-xs';
                btn.id = btnID;
                btn.innerHTML = button_type;
                const header = options.htmlElement;
                const sanitized_panel = rendered_panel.replace(/\s+/g, '');
                const span = document.createElement('span');
                span.id = sanitized_panel + 'panel';
                span.className = 'span';
                span.innerHTML = '  ';
                header.appendChild(span);
                header.appendChild(btn);
                return btn;
            }
            function deleteButton(btn, btnID) {
                btn.remove();
                const sanitized_panel = rendered_panel.replace(/\s+/g, '');
                const span_rem = document.getElementById(sanitized_panel + 'panel');
                if (span_rem) span_rem.remove();
            }
            if (panelInPage(rendered_panel) && !isDropDownButtonClicked) {
                const sanitized_panel = rendered_panel.replace(/\s+/g, '');
                const nextID = sanitized_panel + 'NextNavigator';
                const prevID = sanitized_panel + 'PrevNavigator';
                if (currentPanel.isCollapsed === true) {
                    if (!panelStateMap.has(rendered_panel)) {
                        panelStateMap.set(rendered_panel, false);
                    } else {
                        const nbutton = document.getElementById(nextID);
                        if (nbutton != null) deleteButton(nbutton, nextID);
                        if (!isFirstPanel(index)) {
                            const pbutton = document.getElementById(prevID);
                            if (pbutton != null) pbutton.remove();
                        }
                    }
                } else if (currentPanel.isCollapsed === false) {
                    if (!(isFirstPanel(index) && !panelStateMap.has(rendered_panel))) {
                        panelScroll(rendered_panel);
                    }
                    if (document.getElementById(nextID) == null) {
                        const nextbtnText = isLastPanel(index) ? nextPageText : nextPracticeText;
                        const prevPanel = index - 1;
                        if (!isFirstPanel(index)) {
                            if (document.getElementById(prevID) == null) {
                                const prevbtn = createPanelButton(previousPracticeText, prevID);
                                prevbtn.onclick = function() {
                                    panels[index].collapse();
                                    panels[prevPanel].expand();
                                    panelScroll(panels[prevPanel].name);
                                };
                            }
                        }
                        const nextbtn = createPanelButton(nextbtnText, nextID);
                        if (index < curr_panel_names.length - 1) {
                            const nextPanel = panels[index + 1];
                            nextbtn.onclick = function() {
                                nextPanel.expand();
                                currentPanel.collapse();
                                panelScroll(nextPanel.name);
                            };
                        } else {
                            nextbtn.onclick = function() {
                                changePage('next');
                            };
                        }
                        panelStateMap.set(rendered_panel, true);
                    }
                }
            }
            if (isLastPanel(index) && isDropDownButtonClicked) {
                isDropDownButtonClicked = false;
            }
        });
    }
    survey.onUpdateQuestionCssClasses.add(function(s, options) {
        const classes = options.cssClasses;
        classes.mainRoot += ' sv_qstn';
        classes.root = 'sq-root';
        classes.title += ' sq-title';
        classes.description = 'sq-description';
        classes.item += ' sq-item';
        classes.label += ' sq-label';
        if (options.question.isRequired) {
            classes.title += ' sq-title-required';
            classes.root += ' sq-root-required';
        }
        if (options.question.getType() === 'checkbox') {
            classes.root += ' sq-root-cb';
        }
    });
    survey.onValueChanged.add(function(s, options) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const assessmentStateData = undefined;
        const question_answered = undefined;
        const answer_value = undefined;
    });
    function clearAnswers() {
        const isOK = confirm(t('clearConfirm'));
        if (isOK) {
            const assessmentState = JSON.parse(sessionStorage.getItem('assessmentState'));
            for(const key in assessmentState){
                assessmentState[key] = null;
            }
            sessionStorage.setItem('assessmentState', JSON.stringify(assessmentState));
            if (sessionStorage.getItem('prevResults') !== null) {
                sessionStorage.removeItem('prevResults');
            }
            setDisplay((d)=>!d);
        }
    }
    function isChangedPage(userStateData) {
        return userStateData !== 'assessmentPage';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '30px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#00e5ff',
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '10px'
                        },
                        children: t('loadPrevious')
                    }, void 0, false, {
                        fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                        lineNumber: 429,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#cbd5e0',
                            fontSize: '16px',
                            lineHeight: '1.6',
                            marginBottom: '20px'
                        },
                        children: t('loadDescription')
                    }, void 0, false, {
                        fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                        lineNumber: 432,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$dropdownbutton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: t('loadResults'),
                        state: dropDownState,
                        onClick: (value)=>handleDropDownButton(value)
                    }, void 0, false, {
                        fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                        lineNumber: 435,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    dropDownState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inputfile$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        fileName: "loadedResults",
                        pageName: "assesment"
                    }, void 0, false, {
                        fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                        lineNumber: 436,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0)) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                lineNumber: 428,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "pageNav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$buttons$2f$surveybuttons$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        name: t('clear'),
                        onClick: ()=>clearAnswers()
                    }, void 0, false, {
                        fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                        lineNumber: 440,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "SaveResponses",
                        onClick: ()=>saveResponses(),
                        children: t('saveResponses')
                    }, void 0, false, {
                        fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                        lineNumber: 441,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                lineNumber: 439,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveynav$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                button: pageState,
                onClick: (value)=>changePage(value)
            }, void 0, false, {
                fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                lineNumber: 444,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$survey$2d$react$2d$ui__$5b$external$5d$__$28$survey$2d$react$2d$ui$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$survey$2d$react$2d$ui$29$__["Survey"], {
                showCompletedPage: false,
                onComplete: (data)=>prop.showCompletedPage?.(data.valuesHash),
                model: surveyState
            }, void 0, false, {
                fileName: "[project]/src/features/assessment/surveytypeone.tsx",
                lineNumber: 445,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Mysurvey;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/features/assessment/surveyone.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveytypeone$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/assessment/surveytypeone.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveytypeone$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveytypeone$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const SurveyOne = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showPage, setShowPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const onCompletePage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((data)=>{
        sessionStorage.setItem('dataResults', JSON.stringify(data));
        router.push('/results');
        setShowPage((s)=>!s);
    }, [
        showPage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$assessment$2f$surveytypeone$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/features/assessment/surveyone.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/assessment/surveyone.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SurveyOne;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/features/assessment/surveyone.tsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/features/assessment/surveyone.tsx [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=src_0cr62ho._.js.map