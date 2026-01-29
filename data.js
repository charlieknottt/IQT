// IQT Portfolio AI Capabilities Dashboard - Data
// Last updated: January 2025

const AI_CAPABILITIES = {
  perception: {
    name: "Perception",
    description: "Processing and understanding sensory data from the physical world",
    subcategories: [
      "Computer Vision",
      "Speech Recognition",
      "Sensor Fusion",
      "Satellite/Aerial Imagery",
      "Radar/Sonar Processing",
      "Signal Processing"
    ],
    benchmarks: [
      {
        metric: "Object Detection Accuracy",
        stateOfArt: "95%+ on standard benchmarks (COCO, ImageNet)",
        considerations: "Performance degrades in adverse conditions (low light, weather, occlusion)"
      },
      {
        metric: "Real-time Processing",
        stateOfArt: "30+ FPS on edge devices for basic tasks",
        considerations: "Complex models require GPU acceleration; power constraints on mobile platforms"
      },
      {
        metric: "Multi-modal Fusion",
        stateOfArt: "Combining 3+ sensor types with <100ms latency",
        considerations: "Sensor calibration and synchronization remain challenging"
      }
    ],
    govUseCases: [
      "Satellite imagery analysis for change detection",
      "Border surveillance and intrusion detection",
      "Vehicle and vessel identification",
      "Damage assessment after natural disasters"
    ]
  },
  language: {
    name: "Language & Text",
    description: "Understanding, processing, and generating human language",
    subcategories: [
      "Document Processing",
      "Translation",
      "Speech-to-Text",
      "Summarization",
      "Semantic Search",
      "Entity Extraction"
    ],
    benchmarks: [
      {
        metric: "Translation Quality",
        stateOfArt: "Near-human quality for major languages (BLEU 40+)",
        considerations: "Low-resource languages and dialects remain challenging"
      },
      {
        metric: "Document Understanding",
        stateOfArt: "90%+ accuracy on structured forms",
        considerations: "Handwritten text and degraded documents reduce accuracy significantly"
      },
      {
        metric: "Summarization Fidelity",
        stateOfArt: "Factually consistent 85%+ of the time",
        considerations: "Hallucination remains a concern for high-stakes applications"
      }
    ],
    govUseCases: [
      "Foreign language document triage and translation",
      "Automated report generation from intelligence",
      "Call/communication transcription and analysis",
      "Legal and policy document review"
    ]
  },
  generation: {
    name: "Generation & Synthesis",
    description: "Creating new content, data, or simulations",
    subcategories: [
      "Text Generation",
      "Synthetic Data",
      "Image/Video Generation",
      "Code Generation",
      "Simulation",
      "3D Model Generation"
    ],
    benchmarks: [
      {
        metric: "Synthetic Data Utility",
        stateOfArt: "Models trained on synthetic data achieve 80-95% of real-data performance",
        considerations: "Domain gap between synthetic and real data requires careful validation"
      },
      {
        metric: "Code Generation Accuracy",
        stateOfArt: "60-70% of generated code compiles and passes basic tests",
        considerations: "Security vulnerabilities in generated code require human review"
      },
      {
        metric: "Deepfake Detection Evasion",
        stateOfArt: "State-of-art generators can evade 30-50% of detectors",
        considerations: "Arms race between generation and detection continues"
      }
    ],
    govUseCases: [
      "Training data generation for rare scenarios",
      "Simulation environments for mission planning",
      "Automated code assistance for developers",
      "Synthetic media detection and attribution"
    ]
  },
  prediction: {
    name: "Prediction & Forecasting",
    description: "Anticipating future states, events, or behaviors",
    subcategories: [
      "Time Series Forecasting",
      "Anomaly Detection",
      "Risk Scoring",
      "Predictive Maintenance",
      "Threat Prediction",
      "Behavioral Analysis"
    ],
    benchmarks: [
      {
        metric: "Anomaly Detection Rate",
        stateOfArt: "95%+ detection with <5% false positive rate on known patterns",
        considerations: "Novel attack patterns and concept drift reduce effectiveness"
      },
      {
        metric: "Forecast Horizon",
        stateOfArt: "Accurate predictions 24-72 hours for weather; weeks for supply chain",
        considerations: "Accuracy degrades rapidly beyond training distribution"
      },
      {
        metric: "Early Warning Lead Time",
        stateOfArt: "Hours to days for geopolitical events with 60-70% precision",
        considerations: "Black swan events remain fundamentally unpredictable"
      }
    ],
    govUseCases: [
      "Equipment failure prediction for fleet maintenance",
      "Supply chain disruption forecasting",
      "Cyber threat anticipation",
      "Disease outbreak prediction"
    ]
  },
  decision: {
    name: "Decision & Autonomy",
    description: "Optimizing choices, planning actions, and autonomous operation",
    subcategories: [
      "Optimization",
      "Planning & Scheduling",
      "Recommendation Systems",
      "Autonomous Navigation",
      "Resource Allocation",
      "Multi-agent Coordination"
    ],
    benchmarks: [
      {
        metric: "Autonomous Navigation Reliability",
        stateOfArt: "99.9%+ in structured environments; 95%+ in unstructured",
        considerations: "Edge cases and adversarial conditions remain challenging"
      },
      {
        metric: "Optimization Improvement",
        stateOfArt: "10-30% improvement over human baseline for logistics problems",
        considerations: "Constraint changes require model retraining"
      },
      {
        metric: "Human-AI Teaming Effectiveness",
        stateOfArt: "15-25% improvement in joint decision quality",
        considerations: "Trust calibration and handoff protocols critical"
      }
    ],
    govUseCases: [
      "Mission planning and route optimization",
      "Resource allocation across theaters",
      "Autonomous vehicle navigation",
      "Analyst workflow prioritization"
    ]
  },
  security: {
    name: "Security & Adversarial",
    description: "Protecting systems and detecting malicious activity",
    subcategories: [
      "Threat Detection",
      "Malware Analysis",
      "Vulnerability Discovery",
      "Adversarial Robustness",
      "Deception & Honeypots",
      "Authentication/Identity"
    ],
    benchmarks: [
      {
        metric: "Malware Detection Rate",
        stateOfArt: "99%+ for known families; 70-85% for zero-day",
        considerations: "Adversarial evasion techniques evolve continuously"
      },
      {
        metric: "Vulnerability Discovery",
        stateOfArt: "AI finds 20-40% of vulnerabilities missed by traditional tools",
        considerations: "False positive rates require significant triage effort"
      },
      {
        metric: "Phishing Detection",
        stateOfArt: "98%+ accuracy on known patterns",
        considerations: "Targeted spear-phishing remains difficult to detect"
      }
    ],
    govUseCases: [
      "Network intrusion detection",
      "Malware classification and attribution",
      "Automated vulnerability scanning",
      "Insider threat detection"
    ]
  },
  knowledge: {
    name: "Knowledge & Reasoning",
    description: "Organizing information and drawing logical conclusions",
    subcategories: [
      "Knowledge Graphs",
      "Entity Resolution",
      "Data Integration",
      "Causal Reasoning",
      "Question Answering",
      "Fact Verification"
    ],
    benchmarks: [
      {
        metric: "Entity Resolution Accuracy",
        stateOfArt: "90-95% F1 score on standard benchmarks",
        considerations: "Performance varies significantly across domains and data quality"
      },
      {
        metric: "Knowledge Graph Coverage",
        stateOfArt: "Major KGs contain billions of facts",
        considerations: "Completeness and freshness remain ongoing challenges"
      },
      {
        metric: "Question Answering Accuracy",
        stateOfArt: "85-90% on factoid questions with retrieval",
        considerations: "Complex reasoning chains and multi-hop questions more difficult"
      }
    ],
    govUseCases: [
      "Intelligence fusion across sources",
      "Identity resolution across databases",
      "Automated fact-checking",
      "Research discovery and connection"
    ]
  },
  infrastructure: {
    name: "AI Infrastructure",
    description: "Hardware and software enabling AI deployment",
    subcategories: [
      "Edge Computing",
      "AI Accelerators",
      "MLOps/Model Management",
      "Data Pipelines",
      "Secure Enclaves",
      "Distributed Training"
    ],
    benchmarks: [
      {
        metric: "Edge Inference Latency",
        stateOfArt: "<10ms for optimized models on dedicated hardware",
        considerations: "Model compression trades accuracy for speed"
      },
      {
        metric: "Training Efficiency",
        stateOfArt: "Large models trainable in days on modern clusters",
        considerations: "Cost and energy consumption remain significant"
      },
      {
        metric: "Model Deployment Time",
        stateOfArt: "Hours to production with modern MLOps",
        considerations: "Governance and validation add necessary overhead"
      }
    ],
    govUseCases: [
      "Disconnected/denied environment operation",
      "Classified network deployment",
      "Real-time tactical systems",
      "Scalable analysis infrastructure"
    ]
  }
};

const MISSION_AREAS = {
  sigint: {
    name: "Signals Intelligence",
    shortName: "SIGINT",
    agencies: ["NSA", "DIA", "Service Intelligence"],
    description: "Collection and analysis of electronic signals and communications"
  },
  geoint: {
    name: "Geospatial Intelligence",
    shortName: "GEOINT",
    agencies: ["NGA", "NRO", "Service Components"],
    description: "Analysis of imagery and geospatial data"
  },
  cyber: {
    name: "Cyber Operations",
    shortName: "CYBER",
    agencies: ["NSA", "CISA", "Cyber Command", "FBI"],
    description: "Defensive and offensive cyber capabilities"
  },
  humint: {
    name: "Human Intelligence Support",
    shortName: "HUMINT",
    agencies: ["CIA", "DIA", "FBI"],
    description: "Technology supporting human source operations"
  },
  osint: {
    name: "Open Source Intelligence",
    shortName: "OSINT",
    agencies: ["CIA", "DIA", "DHS I&A"],
    description: "Collection and analysis of publicly available information"
  },
  border: {
    name: "Border & Immigration",
    shortName: "BORDER",
    agencies: ["CBP", "ICE", "Coast Guard"],
    description: "Border security and immigration enforcement"
  },
  criticalInfra: {
    name: "Critical Infrastructure",
    shortName: "CRIT-INFRA",
    agencies: ["CISA", "DOE", "Sector-Specific Agencies"],
    description: "Protection of essential services and infrastructure"
  },
  logistics: {
    name: "Logistics & Sustainment",
    shortName: "LOG",
    agencies: ["DLA", "Service Logistics Commands", "TRANSCOM"],
    description: "Supply chain, maintenance, and transportation"
  },
  isr: {
    name: "ISR Operations",
    shortName: "ISR",
    agencies: ["All Services", "SOCOM", "Combatant Commands"],
    description: "Intelligence, surveillance, and reconnaissance missions"
  },
  biodefense: {
    name: "Biodefense & Health",
    shortName: "BIO",
    agencies: ["DHS S&T", "HHS", "CDC", "BARDA"],
    description: "Biological threat detection and health security"
  },
  space: {
    name: "Space Operations",
    shortName: "SPACE",
    agencies: ["Space Force", "NRO", "Space Command"],
    description: "Space domain awareness and operations"
  },
  counterterror: {
    name: "Counterterrorism",
    shortName: "CT",
    agencies: ["FBI", "NCTC", "SOCOM"],
    description: "Prevention and response to terrorist threats"
  },
  warfighter: {
    name: "Warfighter Support",
    shortName: "WAR",
    agencies: ["All Services", "SOCOM", "Combatant Commands"],
    description: "Direct support to military operations"
  }
};

// Company data with AI capability mapping
const COMPANIES = [
  // AI-Native Companies
  {
    name: "EdgeCortix",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing", "AI Accelerators"],
    missionAreas: ["isr", "warfighter", "border"],
    description: "Builds specialized AI acceleration chips that enable complex neural network inference at the edge with minimal power consumption, ideal for drones and portable devices.",
    website: "https://www.edgecortix.com",
    useCases: [
      { title: "Tactical Drone AI Processing", description: "Enable real-time object detection and tracking on UAVs without requiring connectivity to cloud resources" },
      { title: "Portable Biometric Verification", description: "Run facial recognition and identity verification on handheld devices at checkpoints and field locations" },
      { title: "Vehicle-Mounted Surveillance", description: "Process multiple camera feeds simultaneously for threat detection during mobile patrol operations" },
      { title: "Disconnected Environment Analytics", description: "Perform AI inference in SCIF or air-gapped environments where cloud connectivity is prohibited" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Up to TS/SCI" }
  },
  {
    name: "Sakana",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["generation", "knowledge"],
    subcapabilities: ["AI Research", "Model Development"],
    missionAreas: ["osint", "humint"],
    description: "Develops nature-inspired AI systems that combine multiple smaller models to achieve emergent capabilities, offering a novel approach to building adaptable foundation models.",
    website: "https://sakana.ai",
    useCases: [
      { title: "Adaptive Analysis Synthesis", description: "Combine multiple specialized AI models to generate comprehensive intelligence assessments from diverse data sources" },
      { title: "Multi-Language Content Generation", description: "Create culturally-appropriate content across multiple languages for information operations support" },
      { title: "Emergent Pattern Discovery", description: "Identify non-obvious connections across large datasets using swarm-based AI approaches" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Lila Sciences",
    iqtCategory: "AI, Life Sciences",
    aiType: "AI-Native",
    capabilities: ["prediction", "knowledge"],
    subcapabilities: ["Drug Discovery", "Molecular Design"],
    missionAreas: ["biodefense"],
    description: "Uses AI to accelerate scientific discovery by predicting molecular interactions and designing novel compounds for therapeutic and defense applications.",
    website: "https://www.lilasciences.com",
    useCases: [
      { title: "Bioweapon Countermeasure Development", description: "Rapidly design therapeutic compounds to counter emerging biological threats and engineered pathogens" },
      { title: "Pandemic Preparedness", description: "Pre-compute molecular responses to potential pandemic viruses before outbreaks occur" },
      { title: "Toxin Detection Compound Design", description: "Create novel detection molecules for identifying chemical and biological agents in field conditions" },
      { title: "Medical Countermeasure Screening", description: "Accelerate evaluation of existing drug libraries for repurposing against new biological threats" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified", fedRAMP: "In Progress" }
  },
  {
    name: "Syntiant",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "infrastructure"],
    subcapabilities: ["Speech Recognition", "Edge Computing", "AI Accelerators"],
    missionAreas: ["warfighter", "isr"],
    description: "Produces ultra-low power neural decision processors that run deep learning models for always-on voice and sensor applications, consuming under 1mW of power.",
    website: "https://www.syntiant.com",
    useCases: [
      { title: "Always-On Voice Commands", description: "Enable voice-activated device control for tactical operators without draining battery life" },
      { title: "Acoustic Threat Detection", description: "Continuously monitor for gunshots, drones, or vehicle sounds using minimal power on unattended sensors" },
      { title: "Wearable Health Monitoring", description: "Process biometric signals on-device for real-time health status of personnel in the field" },
      { title: "Wake-Word Security", description: "Implement secure voice authentication on edge devices without cloud connectivity" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Rune Technologies",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Signal Processing", "Sensor Fusion"],
    missionAreas: ["biodefense", "warfighter"],
    description: "Creates neural interface technology that interprets biosignals from the body, enabling hands-free device control and health monitoring through AI-powered signal processing.",
    website: "https://www.runelabs.io",
    useCases: [
      { title: "Hands-Free System Control", description: "Enable operators to control equipment through neural signals when hands are occupied in tactical situations" },
      { title: "Fatigue and Stress Monitoring", description: "Continuously assess operator cognitive state to prevent errors during high-stakes missions" },
      { title: "Early Disease Detection", description: "Monitor biosignals for early indicators of illness or exposure to biological agents" },
      { title: "Silent Communication", description: "Enable subvocal or neural-based communication in situations requiring radio silence" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Nebulock",
    iqtCategory: "Cyber, AI",
    aiType: "AI-Native",
    capabilities: ["security"],
    subcapabilities: ["Authentication/Identity", "Deception & Honeypots"],
    missionAreas: ["cyber", "criticalInfra"],
    description: "Provides AI-driven identity security that continuously verifies users through behavioral biometrics and detects credential compromise in real-time.",
    website: "https://www.nebulock.io",
    useCases: [
      { title: "Continuous Authentication", description: "Verify user identity throughout sessions based on typing patterns and mouse movements, not just at login" },
      { title: "Insider Threat Detection", description: "Identify compromised accounts or insider threats through behavioral anomalies in real-time" },
      { title: "Credential Stuffing Prevention", description: "Detect automated login attempts using stolen credentials before they succeed" },
      { title: "Zero Trust Implementation", description: "Provide continuous identity verification layer for zero trust architecture deployments" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI", fedRAMP: "Moderate" }
  },
  {
    name: "thatDot",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["knowledge", "prediction"],
    subcapabilities: ["Knowledge Graphs", "Anomaly Detection", "Entity Resolution"],
    missionAreas: ["cyber", "sigint", "osint"],
    description: "Offers a streaming graph platform that processes high-velocity data to detect patterns and anomalies in real-time, connecting entities across millions of events per second.",
    website: "https://www.thatdot.com",
    useCases: [
      { title: "Real-Time Network Threat Detection", description: "Process millions of network events per second to identify attack patterns and anomalies as they occur" },
      { title: "Cross-Source Entity Resolution", description: "Link identities and entities across disparate intelligence databases in real-time" },
      { title: "Supply Chain Risk Monitoring", description: "Track complex supplier relationships and flag emerging risks in defense supply chains" },
      { title: "Communication Pattern Analysis", description: "Identify unusual communication patterns that may indicate coordination or compromise" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "EchoMark",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Authentication/Identity", "Threat Detection"],
    missionAreas: ["cyber", "humint"],
    description: "Embeds invisible, forensic watermarks into documents and media that survive screenshots and photos, enabling organizations to trace leaks back to specific recipients.",
    website: "https://www.echomark.com",
    useCases: [
      { title: "Classified Document Leak Attribution", description: "Trace leaked sensitive documents back to the specific recipient who disclosed them" },
      { title: "Counterintelligence Investigations", description: "Identify sources of unauthorized disclosures through forensic watermark analysis" },
      { title: "Need-to-Know Enforcement", description: "Deter unauthorized sharing by ensuring all document recipients can be identified" },
      { title: "Media Provenance Verification", description: "Authenticate the origin of images and documents shared across networks" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI", fedRAMP: "High" }
  },
  {
    name: "Andesite",
    iqtCategory: "Cyber",
    aiType: "AI-Native",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Threat Detection", "Knowledge Graphs"],
    missionAreas: ["cyber"],
    description: "Built an AI-native cyber defense platform that automatically correlates threat intelligence, maps attack surfaces, and prioritizes vulnerabilities based on real-world risk.",
    website: "https://www.andesite.ai",
    useCases: [
      { title: "Attack Surface Management", description: "Continuously discover and monitor all internet-facing assets across distributed government networks" },
      { title: "Threat Intelligence Fusion", description: "Automatically correlate threat feeds with internal vulnerabilities to prioritize remediation" },
      { title: "Vulnerability Prioritization", description: "Use real-world exploitability data to focus patching efforts on highest-risk vulnerabilities" },
      { title: "Cyber Risk Quantification", description: "Translate technical vulnerabilities into mission impact assessments for leadership" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "In Progress" }
  },
  {
    name: "Insane Cyber",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Malware Analysis", "Threat Detection"],
    missionAreas: ["cyber", "warfighter"],
    description: "Delivers automated network defense tools that can be deployed in contested environments, providing cyber protection for tactical operations without constant connectivity.",
    website: "https://www.insanecyber.com",
    useCases: [
      { title: "Tactical Network Defense", description: "Protect deployed military networks from cyber threats in bandwidth-constrained environments" },
      { title: "Expeditionary Cyber Kit", description: "Rapidly deploy cyber defense capabilities for temporary or mobile command posts" },
      { title: "Autonomous Threat Response", description: "Automatically contain and remediate threats when human operators are unavailable" },
      { title: "Disconnected Malware Analysis", description: "Analyze suspicious files in isolated environments without cloud connectivity" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "DataHub",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["knowledge", "infrastructure"],
    subcapabilities: ["Data Integration", "Data Pipelines", "MLOps/Model Management"],
    missionAreas: ["logistics", "osint"],
    description: "Provides a metadata platform that catalogs data assets across an organization, tracking lineage, quality, and usage to enable trusted AI and analytics at scale.",
    website: "https://datahubproject.io",
    useCases: [
      { title: "Data Asset Discovery", description: "Enable analysts to find and understand available data sources across classified and unclassified networks" },
      { title: "AI Model Governance", description: "Track data lineage to ensure AI models are trained on authorized and appropriate datasets" },
      { title: "Cross-Agency Data Sharing", description: "Document data provenance to facilitate secure sharing between agencies with different classifications" },
      { title: "Compliance Documentation", description: "Automatically generate data lineage reports for audit and oversight requirements" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Lauretta",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["language"],
    subcapabilities: ["Document Processing", "Translation"],
    missionAreas: ["sigint", "osint", "humint"],
    description: "Specializes in multilingual document understanding, automatically extracting structured information from foreign-language documents including handwritten and degraded text.",
    website: "https://www.lauretta.io",
    useCases: [
      { title: "Foreign Document Exploitation", description: "Rapidly extract actionable intelligence from captured foreign-language documents and media" },
      { title: "Handwritten Document Processing", description: "Digitize and translate handwritten notes and forms in multiple scripts and languages" },
      { title: "Historical Archive Analysis", description: "Process degraded or aged documents from foreign archives for intelligence value" },
      { title: "Multi-Language Triage", description: "Automatically categorize and prioritize large volumes of foreign-language material for analyst review" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Clika",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing", "Model Compression"],
    missionAreas: ["warfighter", "isr"],
    description: "Optimizes and compresses AI models for edge deployment, achieving up to 10x performance improvements while maintaining accuracy for resource-constrained devices.",
    website: "https://www.clika.io",
    useCases: [
      { title: "Drone Payload Optimization", description: "Compress large AI models to run on size, weight, and power-constrained UAV platforms" },
      { title: "Tactical Device Deployment", description: "Enable sophisticated AI on handheld devices used by operators in the field" },
      { title: "Legacy System AI Integration", description: "Deploy modern AI capabilities on older platforms with limited compute resources" },
      { title: "Bandwidth-Constrained Operations", description: "Run AI locally when connectivity is limited or denied" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Patched",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "generation"],
    subcapabilities: ["Vulnerability Discovery", "Code Generation"],
    missionAreas: ["cyber"],
    description: "Uses AI to automatically generate security patches for vulnerable code, reducing the time from vulnerability discovery to remediation from weeks to hours.",
    website: "https://www.patched.codes",
    useCases: [
      { title: "Rapid Vulnerability Response", description: "Generate security patches within hours of vulnerability disclosure for critical systems" },
      { title: "Legacy Code Remediation", description: "Fix security issues in older codebases where original developers are unavailable" },
      { title: "Supply Chain Security", description: "Patch vulnerabilities in open-source dependencies used across government systems" },
      { title: "Continuous Security Hardening", description: "Automatically fix security issues identified during CI/CD pipeline scans" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Neara",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["3D Modeling", "Risk Scoring", "Predictive Maintenance"],
    missionAreas: ["criticalInfra", "logistics"],
    description: "Creates physics-based digital twins of infrastructure networks that simulate real-world conditions, predicting failures and optimizing maintenance before problems occur.",
    website: "https://www.neara.com",
    useCases: [
      { title: "Power Grid Resilience Planning", description: "Model impact of extreme weather events on electrical infrastructure before they occur" },
      { title: "Base Infrastructure Management", description: "Predict maintenance needs for utility networks on military installations" },
      { title: "Disaster Response Planning", description: "Simulate cascading failures to prioritize restoration efforts during emergencies" },
      { title: "Climate Risk Assessment", description: "Evaluate long-term infrastructure vulnerability to changing climate conditions" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Kela",
    iqtCategory: "AI, Cyber",
    aiType: "AI-Native",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Threat Detection", "Entity Resolution"],
    missionAreas: ["cyber", "counterterror", "osint"],
    description: "Monitors dark web forums, marketplaces, and messaging platforms using AI to identify emerging threats, compromised credentials, and threat actor activities in real-time.",
    website: "https://www.kelacyber.com",
    useCases: [
      { title: "Credential Exposure Monitoring", description: "Alert when government credentials appear for sale on dark web marketplaces" },
      { title: "Threat Actor Tracking", description: "Monitor adversary communications and activities across underground forums" },
      { title: "Early Warning Intelligence", description: "Detect planned attacks or data breaches before they are executed" },
      { title: "Extremist Monitoring", description: "Track radicalization and threat discussions in encrypted messaging platforms" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Edera",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["infrastructure", "security"],
    subcapabilities: ["Secure Enclaves", "MLOps/Model Management"],
    missionAreas: ["cyber", "criticalInfra"],
    description: "Provides hardened container isolation for AI workloads, preventing lateral movement and protecting sensitive models and data even if other parts of the system are compromised.",
    website: "https://www.edera.dev",
    useCases: [
      { title: "Classified AI Workload Protection", description: "Isolate sensitive AI models to prevent unauthorized access even on compromised systems" },
      { title: "Multi-Tenant AI Infrastructure", description: "Securely run AI workloads from multiple classification levels on shared infrastructure" },
      { title: "Model IP Protection", description: "Prevent extraction or theft of proprietary AI models by malicious insiders or attackers" },
      { title: "Secure AI Development", description: "Enable developers to work on sensitive AI projects with hardware-enforced isolation" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Skild AI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["decision", "perception"],
    subcapabilities: ["Autonomous Navigation", "Multi-agent Coordination"],
    missionAreas: ["warfighter", "logistics", "isr"],
    description: "Develops general-purpose foundation models for robotics that enable machines to learn new physical tasks from minimal examples, accelerating deployment of autonomous systems.",
    website: "https://www.skild.ai",
    useCases: [
      { title: "Rapid Robot Task Training", description: "Deploy robots to new missions with minimal training data, adapting to unfamiliar environments quickly" },
      { title: "Autonomous Logistics Handling", description: "Enable robots to load, unload, and sort supplies at forward operating bases" },
      { title: "Multi-Robot Coordination", description: "Orchestrate teams of autonomous systems for search, surveillance, or supply operations" },
      { title: "Hazardous Material Handling", description: "Deploy robots for EOD, CBRN, or other dangerous tasks with human-like dexterity" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Lambda",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["Distributed Training", "AI Accelerators"],
    missionAreas: ["sigint", "geoint", "cyber"],
    description: "Operates GPU cloud infrastructure purpose-built for AI training, offering on-demand access to large clusters of accelerators with optimized networking for distributed workloads.",
    website: "https://lambdalabs.com",
    useCases: [
      { title: "Custom Model Training", description: "Train mission-specific AI models on sensitive data using dedicated GPU infrastructure" },
      { title: "Rapid Model Iteration", description: "Accelerate AI development cycles with on-demand access to large compute clusters" },
      { title: "Classified AI Development", description: "Provide secure, dedicated AI training infrastructure for sensitive programs" },
      { title: "Large-Scale Data Processing", description: "Process massive satellite imagery or signal archives using distributed GPU compute" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "In Progress" }
  },
  {
    name: "Spread",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "generation"],
    subcapabilities: ["Satellite/Aerial Imagery", "Synthetic Data"],
    missionAreas: ["geoint", "isr"],
    description: "Generates photorealistic synthetic satellite and aerial imagery for training computer vision models, addressing the scarcity of labeled geospatial data for defense applications.",
    website: "https://www.spread.ai",
    useCases: [
      { title: "Training Data Generation", description: "Create labeled synthetic imagery for rare scenarios like military vehicle detection or camouflage" },
      { title: "Classification-Free Model Development", description: "Train AI models using synthetic data that doesn't require classification markings" },
      { title: "Wargame Scenario Generation", description: "Generate realistic imagery for training exercises and operational planning" },
      { title: "Sensor Simulation", description: "Create synthetic data matching specific sensor characteristics for algorithm development" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "EnCharge AI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators", "Edge Computing"],
    missionAreas: ["warfighter", "isr"],
    description: "Develops analog in-memory computing chips that perform AI inference directly where data is stored, dramatically reducing power consumption and latency for edge applications.",
    website: "https://www.enchargeai.com",
    useCases: [
      { title: "Extended Autonomous Operations", description: "Enable AI-equipped drones and robots to operate for days instead of hours on battery power" },
      { title: "Soldier-Worn AI", description: "Deploy AI capabilities on body-worn devices without adding significant battery weight" },
      { title: "Unattended Sensor Networks", description: "Run continuous AI processing on solar-powered remote sensors for months" },
      { title: "Real-Time Edge Processing", description: "Achieve sub-millisecond AI inference for time-critical tactical applications" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "RevEng.AI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Malware Analysis", "Vulnerability Discovery"],
    missionAreas: ["cyber"],
    description: "Applies machine learning to binary analysis and reverse engineering, automatically identifying malware families, extracting indicators, and finding vulnerabilities in compiled code.",
    website: "https://www.reveng.ai",
    useCases: [
      { title: "Automated Malware Triage", description: "Rapidly classify and prioritize malware samples to focus analyst time on novel threats" },
      { title: "Binary Vulnerability Discovery", description: "Find security vulnerabilities in compiled software without access to source code" },
      { title: "Attribution Support", description: "Link malware samples to known threat actor toolkits through code similarity analysis" },
      { title: "Supply Chain Analysis", description: "Scan third-party software for hidden malicious code or unexpected capabilities" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "poolside",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["generation"],
    subcapabilities: ["Code Generation"],
    missionAreas: ["cyber", "logistics"],
    description: "Builds AI coding assistants trained on high-quality software engineering data, capable of generating, reviewing, and debugging code across multiple programming languages.",
    website: "https://www.poolside.ai",
    useCases: [
      { title: "Secure Code Development", description: "Assist developers in writing secure code with real-time vulnerability detection and fixes" },
      { title: "Legacy Code Modernization", description: "Translate and update aging government codebases to modern languages and frameworks" },
      { title: "Rapid Prototyping", description: "Accelerate development of mission-specific tools and applications" },
      { title: "Code Review Automation", description: "Automatically review code changes for security, quality, and compliance issues" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Dreadnode",
    iqtCategory: "Cyber",
    aiType: "AI-Native",
    capabilities: ["security"],
    subcapabilities: ["Adversarial Robustness", "Vulnerability Discovery"],
    missionAreas: ["cyber"],
    description: "Provides AI red-teaming tools that automatically probe machine learning systems for vulnerabilities, helping organizations harden their AI against adversarial attacks.",
    website: "https://www.dreadnode.io",
    useCases: [
      { title: "AI Model Security Assessment", description: "Test government AI systems for adversarial vulnerabilities before deployment" },
      { title: "Continuous AI Monitoring", description: "Detect attempts to manipulate or deceive deployed AI systems in production" },
      { title: "Red Team Support", description: "Automate adversarial testing of AI-enabled defense systems" },
      { title: "Model Hardening", description: "Identify and fix weaknesses in AI models that could be exploited by adversaries" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Harmonic Security",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["security"],
    subcapabilities: ["Threat Detection", "Data Protection"],
    missionAreas: ["cyber", "criticalInfra"],
    description: "Monitors how employees use generative AI tools, preventing sensitive data leakage while enabling safe adoption of AI assistants across the enterprise.",
    website: "https://www.harmonic.security",
    useCases: [
      { title: "GenAI Data Loss Prevention", description: "Prevent employees from accidentally sharing classified or sensitive data with AI tools" },
      { title: "AI Usage Policy Enforcement", description: "Monitor and enforce organizational policies around generative AI tool usage" },
      { title: "Shadow AI Discovery", description: "Identify unauthorized AI tools being used across the organization" },
      { title: "Safe AI Adoption", description: "Enable productivity gains from AI while maintaining security controls" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "In Progress" }
  },
  {
    name: "Moonshine AI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["language"],
    subcapabilities: ["Speech-to-Text", "Speech Recognition"],
    missionAreas: ["sigint", "humint", "osint"],
    description: "Creates highly efficient speech recognition models that run on-device with minimal compute, enabling real-time transcription in bandwidth-constrained environments.",
    website: "https://www.usemoonshine.com",
    useCases: [
      { title: "Field Transcription", description: "Transcribe interviews and conversations in real-time on tactical devices without connectivity" },
      { title: "SIGINT Processing at the Edge", description: "Transcribe intercepted communications on collection platforms before transmission" },
      { title: "Multi-Language Meeting Capture", description: "Record and transcribe multilingual discussions for later analysis and translation" },
      { title: "Voice Journaling", description: "Enable operators to capture voice notes that are automatically transcribed for reporting" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Aira Technologies",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "infrastructure"],
    subcapabilities: ["Signal Processing", "Edge Computing"],
    missionAreas: ["sigint", "warfighter"],
    description: "Designs AI-native wireless systems that use machine learning to optimize spectrum usage, enabling more reliable communications in congested and contested RF environments.",
    website: "https://www.aira-technology.com",
    useCases: [
      { title: "Contested Communications", description: "Maintain reliable tactical communications in jamming and interference environments" },
      { title: "Spectrum Optimization", description: "Dynamically allocate spectrum resources across multiple units and platforms" },
      { title: "Electronic Warfare Support", description: "Rapidly adapt to changing RF conditions during electronic attack" },
      { title: "Covert Communications", description: "Use AI to minimize detectability of friendly RF emissions" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Protect AI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["security"],
    subcapabilities: ["Adversarial Robustness", "MLOps/Model Management"],
    missionAreas: ["cyber"],
    description: "Offers an ML security platform that scans AI models for vulnerabilities, monitors for attacks in production, and helps organizations secure their entire AI lifecycle.",
    website: "https://www.protectai.com",
    useCases: [
      { title: "AI Supply Chain Security", description: "Scan third-party AI models for backdoors and vulnerabilities before deployment" },
      { title: "Model Vulnerability Assessment", description: "Identify security weaknesses in AI models during development and testing" },
      { title: "Production AI Monitoring", description: "Detect adversarial attacks and model drift in deployed AI systems" },
      { title: "AI Governance Compliance", description: "Document AI security controls for audit and accreditation requirements" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "In Progress" }
  },
  {
    name: "Dropzone",
    iqtCategory: "Cyber",
    aiType: "AI-Native",
    capabilities: ["security", "decision"],
    subcapabilities: ["Threat Detection", "Autonomous Navigation"],
    missionAreas: ["cyber"],
    description: "Automates security operations center workflows using AI agents that investigate alerts, gather context, and take response actions at machine speed.",
    website: "https://www.dropzone.ai",
    useCases: [
      { title: "Alert Triage Automation", description: "Automatically investigate and prioritize security alerts to reduce analyst fatigue" },
      { title: "Incident Response Acceleration", description: "Gather context and take initial containment actions within seconds of detection" },
      { title: "24/7 SOC Augmentation", description: "Maintain continuous security monitoring when human analysts are unavailable" },
      { title: "Threat Hunting Support", description: "Proactively search for indicators of compromise across enterprise environments" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Twelve Labs",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["perception", "language"],
    subcapabilities: ["Computer Vision", "Semantic Search", "Video Understanding"],
    missionAreas: ["isr", "osint", "geoint"],
    description: "Provides multimodal AI that understands video content at a semantic level, enabling natural language search and analysis across large video archives.",
    website: "https://www.twelvelabs.io",
    useCases: [
      { title: "FMV Archive Search", description: "Search years of full-motion video using natural language queries to find specific events or objects" },
      { title: "Social Media Video Analysis", description: "Automatically analyze and categorize large volumes of social media video content" },
      { title: "Body Camera Review", description: "Rapidly search body-worn camera footage for specific incidents or persons of interest" },
      { title: "ISR Content Indexing", description: "Automatically tag and index surveillance video for rapid retrieval during operations" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Evozyne",
    iqtCategory: "Life Sciences, AI",
    aiType: "AI-Native",
    capabilities: ["generation", "prediction"],
    subcapabilities: ["Molecular Design", "Protein Engineering"],
    missionAreas: ["biodefense"],
    description: "Engineers novel proteins using AI to design enzymes and therapeutics with properties not found in nature, accelerating development of medical countermeasures.",
    website: "https://www.evozyne.com",
    useCases: [
      { title: "Novel Therapeutic Development", description: "Design protein-based therapeutics for diseases with no existing treatments" },
      { title: "Decontamination Enzymes", description: "Create enzymes that break down chemical or biological contaminants rapidly" },
      { title: "Diagnostic Reagent Design", description: "Engineer proteins for more sensitive and specific detection of pathogens" },
      { title: "Vaccine Component Design", description: "Optimize protein antigens for improved vaccine efficacy" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified", fedRAMP: "N/A" }
  },
  {
    name: "Blackshark.ai",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "generation"],
    subcapabilities: ["Satellite/Aerial Imagery", "3D Model Generation", "Simulation"],
    missionAreas: ["geoint", "warfighter", "isr"],
    description: "Automatically generates detailed 3D models of the entire world from satellite imagery using AI, providing up-to-date digital terrain for simulation and planning.",
    website: "https://blackshark.ai",
    useCases: [
      { title: "Mission Rehearsal", description: "Generate accurate 3D environments for operator training and mission planning" },
      { title: "Urban Operations Planning", description: "Create detailed city models for close-quarters combat planning and simulation" },
      { title: "Change Detection", description: "Compare 3D models over time to identify construction, damage, or other changes" },
      { title: "Simulation Environment Generation", description: "Rapidly create synthetic training environments for autonomous systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "SeerAI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["prediction", "perception"],
    subcapabilities: ["Forecasting", "Satellite/Aerial Imagery"],
    missionAreas: ["geoint", "logistics", "criticalInfra"],
    description: "Combines geospatial data with AI to provide location intelligence, predicting how physical world changes will impact supply chains, assets, and operations.",
    website: "https://www.seer.ai",
    useCases: [
      { title: "Supply Chain Risk Prediction", description: "Forecast disruptions to logistics networks from weather, conflict, or infrastructure changes" },
      { title: "Base Vulnerability Assessment", description: "Analyze geospatial factors affecting installation security and operations" },
      { title: "Climate Impact Planning", description: "Predict long-term effects of climate change on military installations and operations" },
      { title: "Infrastructure Monitoring", description: "Track changes to critical infrastructure using satellite imagery and predictive models" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Rendered.AI",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["generation"],
    subcapabilities: ["Synthetic Data", "Simulation"],
    missionAreas: ["isr", "warfighter", "geoint"],
    description: "Generates physically-accurate synthetic imagery with perfect ground truth labels, enabling training of computer vision models for scenarios where real data is scarce or classified.",
    website: "https://www.rendered.ai",
    useCases: [
      { title: "Rare Object Detection Training", description: "Generate training data for detecting objects rarely seen in real imagery like specific weapons systems" },
      { title: "Adverse Condition Simulation", description: "Create training data for AI that must operate in smoke, fog, night, or other challenging conditions" },
      { title: "Classified Scenario Training", description: "Train models on synthetic representations of sensitive targets without classification concerns" },
      { title: "Edge Case Coverage", description: "Generate corner cases and rare scenarios that real data collection cannot practically cover" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Here.io",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Autonomous Navigation", "Mapping"],
    missionAreas: ["logistics", "warfighter"],
    description: "Provides HD mapping and location services that power autonomous systems, offering real-time traffic, routing, and positioning data for vehicles and logistics operations.",
    website: "https://www.here.com",
    useCases: [
      { title: "Convoy Route Optimization", description: "Plan and dynamically adjust logistics routes based on real-time conditions" },
      { title: "Autonomous Vehicle Navigation", description: "Provide HD maps for self-driving military logistics and support vehicles" },
      { title: "Asset Tracking", description: "Monitor location and movement of vehicles and equipment across theater" },
      { title: "Geofencing and Alerts", description: "Create location-based alerts when vehicles enter or leave designated areas" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Behavioral Signals",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["Speech Recognition", "Behavioral Analysis"],
    missionAreas: ["humint", "counterterror", "border"],
    description: "Analyzes vocal patterns and speech behaviors to assess emotional state, intent, and deception, providing insights beyond the words being spoken.",
    website: "https://behavioralsignals.com",
    useCases: [
      { title: "Interview Enhancement", description: "Provide real-time behavioral cues during interrogations and interviews to guide questioning" },
      { title: "Border Screening Support", description: "Identify travelers exhibiting stress or deception indicators during screening" },
      { title: "Threat Call Analysis", description: "Assess credibility and urgency of threat calls and tips to prioritize response" },
      { title: "Insider Threat Indicators", description: "Detect behavioral changes in voice communications that may indicate compromise" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Robust Intelligence",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["security"],
    subcapabilities: ["Adversarial Robustness", "Model Validation"],
    missionAreas: ["cyber"],
    description: "Tests and validates AI models for security vulnerabilities, bias, and reliability issues before deployment, ensuring production AI systems behave as expected.",
    website: "https://www.robustintelligence.com",
    useCases: [
      { title: "AI Accreditation Support", description: "Validate AI models meet security requirements for Authority to Operate" },
      { title: "Bias Detection", description: "Test models for discriminatory behavior before deployment in sensitive applications" },
      { title: "Model Quality Assurance", description: "Ensure AI systems perform reliably across expected operational conditions" },
      { title: "Continuous Model Monitoring", description: "Detect model degradation or manipulation in production systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "In Progress" }
  },
  {
    name: "Inpher",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["infrastructure", "security"],
    subcapabilities: ["Secure Enclaves", "Privacy-Preserving ML"],
    missionAreas: ["sigint", "cyber"],
    description: "Enables machine learning on encrypted data using advanced cryptographic techniques, allowing organizations to gain insights from sensitive data without exposing it.",
    website: "https://www.inpher.io",
    useCases: [
      { title: "Cross-Classification Analysis", description: "Run analytics across datasets of different classification levels without exposing either" },
      { title: "Multi-Party Intelligence Sharing", description: "Enable coalition partners to jointly analyze data while protecting sources and methods" },
      { title: "Secure Outsourcing", description: "Process sensitive data on external infrastructure without revealing content" },
      { title: "Privacy-Preserving Biometrics", description: "Match biometric data without exposing the underlying templates" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Zetaris",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["knowledge", "infrastructure"],
    subcapabilities: ["Data Integration", "Data Pipelines"],
    missionAreas: ["logistics", "osint"],
    description: "Virtualizes data across disparate sources, allowing AI models to query data where it lives without costly and risky data movement or replication.",
    website: "https://www.zetaris.com",
    useCases: [
      { title: "Cross-System Data Access", description: "Query data across multiple legacy systems without extracting or copying sensitive information" },
      { title: "Federated Analytics", description: "Run analytics across distributed databases while maintaining data sovereignty" },
      { title: "Real-Time Data Integration", description: "Provide unified view of operational data without ETL delays" },
      { title: "Data Governance Compliance", description: "Control data access at the query level to enforce need-to-know requirements" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "SandboxAQ",
    iqtCategory: "Microelectronics & Quantum, AI",
    aiType: "AI-Native",
    capabilities: ["security", "prediction"],
    subcapabilities: ["Cryptography", "Simulation", "Drug Discovery"],
    missionAreas: ["cyber", "biodefense"],
    description: "Combines AI with quantum-inspired algorithms to solve complex problems in cryptography, drug discovery, and simulation that exceed classical computing capabilities.",
    website: "https://www.sandboxaq.com",
    useCases: [
      { title: "Post-Quantum Cryptography", description: "Transition government systems to quantum-resistant encryption before quantum computers break current standards" },
      { title: "Cryptographic Inventory", description: "Discover and catalog all cryptographic assets across enterprise for quantum readiness assessment" },
      { title: "Accelerated Drug Discovery", description: "Use quantum-inspired algorithms to speed development of medical countermeasures" },
      { title: "Complex System Simulation", description: "Model physical and chemical systems too complex for classical simulation" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI", fedRAMP: "High" }
  },
  {
    name: "Black.ai",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["border", "criticalInfra"],
    description: "Uses computer vision to understand physical spaces, tracking occupancy, movement patterns, and anomalies for security and operational efficiency applications.",
    website: "https://www.black.ai",
    useCases: [
      { title: "Facility Security Monitoring", description: "Detect unauthorized access and anomalous behavior in secure facilities" },
      { title: "Crowd Analytics", description: "Monitor crowd density and flow patterns at ports of entry and public spaces" },
      { title: "Perimeter Surveillance", description: "Augment perimeter security with AI-powered movement detection and tracking" },
      { title: "Operational Efficiency", description: "Optimize facility layouts and staffing based on space utilization patterns" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Julia Computing",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Distributed Training", "Data Pipelines"],
    missionAreas: ["logistics", "sigint"],
    description: "Provides high-performance computing tools built on the Julia language, enabling scientists and engineers to develop and deploy AI models at massive scale.",
    website: "https://juliahub.com",
    useCases: [
      { title: "Large-Scale Signal Processing", description: "Process massive signal datasets with high-performance computing optimized for scientific workloads" },
      { title: "Rapid Algorithm Development", description: "Prototype and deploy AI algorithms faster with Julia's high-level syntax and C-like performance" },
      { title: "Simulation at Scale", description: "Run complex physics simulations and models on distributed compute clusters" },
      { title: "Scientific Computing", description: "Enable researchers to develop custom AI algorithms without sacrificing performance" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Workera",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["prediction", "knowledge"],
    subcapabilities: ["Skills Assessment", "Recommendation Systems"],
    missionAreas: ["logistics"],
    description: "Assesses technical workforce skills using AI, identifying capability gaps and recommending personalized learning paths for AI and data science competencies.",
    website: "https://www.workera.ai",
    useCases: [
      { title: "AI Workforce Development", description: "Assess and track AI skills across the government workforce to guide training investments" },
      { title: "Technical Hiring Support", description: "Objectively evaluate candidate skills for AI and data science positions" },
      { title: "Training ROI Measurement", description: "Measure effectiveness of technical training programs through before/after skill assessments" },
      { title: "Career Path Planning", description: "Guide technical workforce development with personalized skill gap analysis" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Groq",
    iqtCategory: "AI, Microelectronics & Quantum",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators", "Edge Computing"],
    missionAreas: ["warfighter", "isr", "sigint"],
    description: "Manufactures LPU inference chips that deliver deterministic, ultra-low latency AI processing, enabling real-time applications that require consistent response times.",
    website: "https://groq.com",
    useCases: [
      { title: "Real-Time AI Processing", description: "Process sensor data with guaranteed latency for time-critical tactical decisions" },
      { title: "High-Throughput Inference", description: "Run AI models on large data volumes with predictable performance" },
      { title: "Autonomous System Control", description: "Enable deterministic AI response times required for autonomous vehicle control" },
      { title: "Language Model Inference", description: "Deploy large language models with fast, consistent response times" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Willow",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["perception", "knowledge"],
    subcapabilities: ["3D Modeling", "Data Integration"],
    missionAreas: ["criticalInfra", "logistics"],
    description: "Creates AI-powered digital twins of buildings and infrastructure, integrating data from IoT sensors to optimize operations, maintenance, and energy usage.",
    website: "https://www.willowinc.com",
    useCases: [
      { title: "Facility Management Optimization", description: "Use digital twins to optimize energy usage and maintenance across government facilities" },
      { title: "Base Infrastructure Monitoring", description: "Create live digital replicas of military installation infrastructure for real-time monitoring" },
      { title: "Emergency Response Planning", description: "Simulate evacuation scenarios and emergency response using building digital twins" },
      { title: "Sustainability Tracking", description: "Monitor and optimize energy consumption to meet government sustainability mandates" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Hadean",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["generation", "infrastructure"],
    subcapabilities: ["Simulation", "Distributed Training"],
    missionAreas: ["warfighter", "logistics"],
    description: "Provides distributed computing infrastructure for massive-scale simulations, enabling thousands of users to interact in shared virtual environments for training and planning.",
    website: "https://hadean.com",
    useCases: [
      { title: "Large-Scale Wargaming", description: "Run thousands of participants in synchronized military simulations for training and planning" },
      { title: "Joint Force Exercises", description: "Enable distributed coalition training across multiple locations and time zones" },
      { title: "Operational Planning", description: "Model complex logistics and operational scenarios with high-fidelity simulation" },
      { title: "Synthetic Training Environments", description: "Create persistent shared virtual environments for continuous training" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "CloudNC",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["decision", "generation"],
    subcapabilities: ["Optimization", "Code Generation"],
    missionAreas: ["logistics"],
    description: "Uses AI to automatically generate optimal toolpaths for CNC machines, reducing manufacturing time and costs while improving part quality.",
    website: "https://www.cloudnc.com",
    useCases: [
      { title: "Rapid Parts Manufacturing", description: "Reduce machining time for replacement parts at forward maintenance facilities" },
      { title: "Manufacturing Optimization", description: "Generate optimal machining strategies for defense production lines" },
      { title: "Organic Industrial Base Support", description: "Accelerate fabrication at government-owned manufacturing facilities" },
      { title: "Prototype Development", description: "Speed up iteration cycles for new equipment and component development" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Matterport",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["3D Modeling", "Computer Vision"],
    missionAreas: ["criticalInfra", "logistics", "warfighter"],
    description: "Captures and processes spaces into accurate 3D digital twins, enabling remote inspection, measurement, and planning for facilities and infrastructure.",
    website: "https://matterport.com",
    useCases: [
      { title: "Remote Facility Inspection", description: "Conduct virtual inspections of facilities and infrastructure without travel" },
      { title: "Site Survey Documentation", description: "Capture detailed 3D records of buildings and spaces for planning and legal purposes" },
      { title: "Pre-Mission Planning", description: "Provide operators with accurate 3D models of target locations for mission rehearsal" },
      { title: "Damage Assessment", description: "Document and measure damage to facilities for repair estimation and insurance" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Quantifind",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["knowledge", "prediction"],
    subcapabilities: ["Entity Resolution", "Risk Scoring", "Knowledge Graphs"],
    missionAreas: ["counterterror", "humint", "osint"],
    description: "Applies AI to detect financial crime and map risk networks, resolving entities across data sources to uncover hidden connections and illicit activity.",
    website: "https://www.quantifind.com",
    useCases: [
      { title: "Terrorist Financing Detection", description: "Identify financial networks supporting terrorist organizations and activities" },
      { title: "Sanctions Evasion Detection", description: "Uncover complex schemes used to evade economic sanctions" },
      { title: "Money Laundering Investigation", description: "Map illicit financial flows and shell company networks" },
      { title: "Supply Chain Risk Assessment", description: "Evaluate financial risk indicators in defense contractor networks" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "GreyNoise",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Threat Detection", "Knowledge Graphs"],
    missionAreas: ["cyber"],
    description: "Analyzes internet-wide scan traffic to distinguish between mass scanning and targeted attacks, helping security teams focus on real threats rather than noise.",
    website: "https://www.greynoise.io",
    useCases: [
      { title: "Alert Noise Reduction", description: "Filter out benign mass scanning from security alerts to focus on genuine threats" },
      { title: "Targeted Attack Detection", description: "Identify when scans specifically target government networks versus opportunistic sweeps" },
      { title: "Threat Intelligence Enrichment", description: "Add context to IP addresses seen in logs to understand if they represent coordinated activity" },
      { title: "Vulnerability Exploitation Tracking", description: "Monitor when new vulnerabilities are being actively exploited across the internet" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Presien",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["Computer Vision", "Anomaly Detection"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Deploys computer vision AI in industrial settings to detect safety hazards, equipment anomalies, and process deviations before they cause incidents.",
    website: "https://www.presien.com",
    useCases: [
      { title: "Depot Safety Monitoring", description: "Detect safety violations and hazards at maintenance facilities in real-time" },
      { title: "Industrial Equipment Monitoring", description: "Identify anomalies in critical equipment before failures occur" },
      { title: "Process Compliance", description: "Ensure maintenance procedures are followed correctly through visual monitoring" },
      { title: "Perimeter Security Enhancement", description: "Detect unauthorized access or suspicious behavior around critical infrastructure" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Deepgram",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["language"],
    subcapabilities: ["Speech-to-Text", "Speech Recognition"],
    missionAreas: ["sigint", "humint", "osint"],
    description: "Provides fast, accurate speech-to-text APIs that handle noisy audio, multiple speakers, and diverse accents, enabling real-time transcription at scale.",
    website: "https://deepgram.com",
    useCases: [
      { title: "Real-Time Communications Transcription", description: "Transcribe voice communications in real-time for analysis and documentation" },
      { title: "Multi-Speaker Meeting Analysis", description: "Accurately transcribe meetings with multiple participants and overlapping speech" },
      { title: "Noisy Environment Processing", description: "Transcribe audio captured in field conditions with background noise" },
      { title: "Call Center Intelligence", description: "Process high volumes of call recordings for compliance and intelligence extraction" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Speechmatics",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["language"],
    subcapabilities: ["Speech-to-Text", "Translation"],
    missionAreas: ["sigint", "humint", "osint"],
    description: "Offers speech recognition in 50+ languages with real-time translation capabilities, accurately transcribing accented and domain-specific speech.",
    website: "https://www.speechmatics.com",
    useCases: [
      { title: "Multi-Language Intelligence Processing", description: "Transcribe and translate foreign language audio across 50+ languages" },
      { title: "Accent-Robust Transcription", description: "Accurately process speech with heavy accents and regional dialects" },
      { title: "Specialized Vocabulary Recognition", description: "Configure models for domain-specific terminology in defense and intelligence" },
      { title: "Real-Time Translation", description: "Provide live translation during multilingual meetings and operations" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Cerebras",
    iqtCategory: "AI, Microelectronics & Quantum",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators", "Distributed Training"],
    missionAreas: ["sigint", "geoint"],
    description: "Builds wafer-scale AI processors that are the largest chips ever made, dramatically accelerating training and inference for the most demanding AI models.",
    website: "https://www.cerebras.net",
    useCases: [
      { title: "Large Model Training", description: "Train massive AI models faster than possible with traditional GPU clusters" },
      { title: "Classified AI Development", description: "Provide dedicated AI training infrastructure for sensitive national security applications" },
      { title: "Scientific Simulation", description: "Accelerate physics and climate simulations using AI-enhanced computing" },
      { title: "Foundation Model Development", description: "Train custom large language models on government data and requirements" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Pison",
    iqtCategory: "AI, Life Sciences",
    aiType: "AI-Native",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Sensor Fusion", "Gesture Recognition"],
    missionAreas: ["warfighter"],
    description: "Creates wearable neural interfaces that read electrical signals from muscles, enabling gesture control of devices and systems without physical contact.",
    website: "https://www.pisontechnology.com",
    useCases: [
      { title: "Hands-Free Device Control", description: "Enable operators to control equipment through gestures when hands are occupied" },
      { title: "Silent Communication", description: "Send signals and commands without visible movement or sound" },
      { title: "Prosthetic Control", description: "Provide intuitive control of advanced prosthetics for wounded warriors" },
      { title: "Augmented Reality Interaction", description: "Control AR displays and interfaces through subtle hand gestures" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Advanced Navigation",
    iqtCategory: "AI, Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Sensor Fusion", "Autonomous Navigation"],
    missionAreas: ["warfighter", "isr", "space"],
    description: "Develops AI-enhanced inertial navigation and sensor fusion systems that maintain positioning accuracy in GPS-denied environments for autonomous platforms.",
    website: "https://www.advancednavigation.com",
    useCases: [
      { title: "GPS-Denied Navigation", description: "Maintain accurate positioning for autonomous systems when GPS is jammed or unavailable" },
      { title: "Precision Targeting", description: "Provide accurate navigation data for weapons systems in contested environments" },
      { title: "Underwater Navigation", description: "Enable precise positioning for unmanned underwater vehicles" },
      { title: "Space Operations", description: "Provide navigation solutions for satellites and space vehicles" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Labelbox",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines", "MLOps/Model Management"],
    missionAreas: ["geoint", "isr"],
    description: "Provides an end-to-end platform for creating and managing training data, accelerating the development of AI models through efficient labeling workflows.",
    website: "https://labelbox.com",
    useCases: [
      { title: "Imagery Annotation at Scale", description: "Label satellite and aerial imagery for training object detection and classification models" },
      { title: "Active Learning Workflows", description: "Prioritize labeling of data that will most improve model performance" },
      { title: "Quality-Controlled Labeling", description: "Ensure high-quality training data through consensus labeling and quality metrics" },
      { title: "Model-Assisted Labeling", description: "Use existing models to accelerate annotation of new data" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Skydio",
    iqtCategory: "Hardware, AI",
    aiType: "AI-Native",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Computer Vision", "Autonomous Navigation"],
    missionAreas: ["isr", "warfighter", "criticalInfra"],
    description: "Manufactures autonomous drones that use AI-powered computer vision to navigate complex environments, avoid obstacles, and execute missions without GPS or pilot input.",
    website: "https://www.skydio.com",
    useCases: [
      { title: "GPS-Denied Reconnaissance", description: "Conduct ISR missions in urban canyons or GPS-jammed environments" },
      { title: "Infrastructure Inspection", description: "Autonomously inspect bridges, power lines, and other critical infrastructure" },
      { title: "Building Clearing Support", description: "Provide real-time situational awareness inside structures before entry" },
      { title: "Persistent Surveillance", description: "Execute automated patrol routes with minimal operator intervention" }
    ],
    deploymentContext: { airGapped: true, cloudNative: "partial", onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Snorkel",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["infrastructure", "knowledge"],
    subcapabilities: ["Data Pipelines", "Data Integration"],
    missionAreas: ["osint", "sigint"],
    description: "Enables programmatic labeling of training data using rules and weak supervision, dramatically reducing the time and cost of preparing data for AI models.",
    website: "https://snorkel.ai",
    useCases: [
      { title: "Rapid Model Development", description: "Create labeled training datasets in hours instead of months using programmatic labeling" },
      { title: "Subject Matter Expert Leverage", description: "Convert analyst knowledge into labeling rules that scale across large datasets" },
      { title: "Data Quality Improvement", description: "Detect and correct labeling errors across existing training datasets" },
      { title: "Multi-Modal Data Labeling", description: "Apply consistent labels across text, images, and structured data" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Fiddler AI",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["MLOps/Model Management", "Model Explainability"],
    missionAreas: ["cyber", "logistics"],
    description: "Provides AI observability tools that monitor model performance, explain predictions, and detect drift, ensuring production AI systems remain accurate and fair.",
    website: "https://www.fiddler.ai",
    useCases: [
      { title: "AI Explainability for Oversight", description: "Provide clear explanations of AI decisions for congressional and IG oversight" },
      { title: "Model Drift Detection", description: "Monitor deployed AI systems for degrading performance or changing behavior" },
      { title: "Bias Monitoring", description: "Track AI systems for discriminatory outcomes in sensitive applications" },
      { title: "Audit Trail Generation", description: "Maintain records of AI model behavior for compliance and legal requirements" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Tamr",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["knowledge"],
    subcapabilities: ["Entity Resolution", "Data Integration"],
    missionAreas: ["osint", "logistics", "counterterror"],
    description: "Uses machine learning to master and unify data from disparate sources, resolving duplicate records and creating trusted golden records for analytics.",
    website: "https://www.tamr.com",
    useCases: [
      { title: "Cross-Database Identity Resolution", description: "Link records across multiple databases to create unified identity views" },
      { title: "Supplier Data Mastering", description: "Create single view of suppliers across acquisition systems for risk assessment" },
      { title: "Watchlist Deduplication", description: "Identify duplicate entries and link related records in screening databases" },
      { title: "Intelligence Data Integration", description: "Merge intelligence from multiple sources while resolving entity discrepancies" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Lilt",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["language"],
    subcapabilities: ["Translation", "Document Processing"],
    missionAreas: ["sigint", "osint", "humint"],
    description: "Combines neural machine translation with human translators in a unified workflow, delivering high-quality translations for specialized domains and languages.",
    website: "https://lilt.com",
    useCases: [
      { title: "High-Quality Document Translation", description: "Translate critical documents with human review for accuracy in sensitive contexts" },
      { title: "Specialized Vocabulary Translation", description: "Handle domain-specific terminology in defense, legal, and technical documents" },
      { title: "Translation Memory Leverage", description: "Reuse previous translations to ensure consistency across related documents" },
      { title: "Rapid Translation Workflows", description: "Accelerate translation of large document volumes with AI-assisted human review" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Falkonry",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["prediction"],
    subcapabilities: ["Anomaly Detection", "Predictive Maintenance"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Analyzes time-series sensor data from industrial equipment to predict failures and detect anomalies before they impact operations or cause downtime.",
    website: "https://falkonry.com",
    useCases: [
      { title: "Equipment Failure Prediction", description: "Predict failures in critical systems before they cause operational disruption" },
      { title: "Maintenance Optimization", description: "Transition from scheduled to condition-based maintenance for cost savings" },
      { title: "Process Anomaly Detection", description: "Identify abnormal operating conditions that may indicate problems or tampering" },
      { title: "Fleet Health Monitoring", description: "Track health of vehicle and aircraft fleets to optimize maintenance scheduling" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Ocient",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines", "Distributed Training"],
    missionAreas: ["sigint", "osint"],
    description: "Provides a hyperscale data analytics platform that can query trillions of records in seconds, enabling real-time analysis of massive intelligence datasets.",
    website: "https://ocient.com",
    useCases: [
      { title: "Massive Dataset Analysis", description: "Query trillions of records in seconds for time-sensitive intelligence" },
      { title: "Real-Time Analytics", description: "Analyze streaming data at scale for operational awareness" },
      { title: "Historical Analysis", description: "Search years of collected data rapidly for pattern identification" },
      { title: "Multi-Source Correlation", description: "Join and analyze data across multiple collection sources" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "DataRobot",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["infrastructure", "prediction"],
    subcapabilities: ["MLOps/Model Management", "Forecasting"],
    missionAreas: ["logistics", "osint"],
    description: "Offers an end-to-end AI platform that automates model building, deployment, and monitoring, enabling organizations to operationalize machine learning at scale.",
    website: "https://www.datarobot.com",
    useCases: [
      { title: "Automated ML Development", description: "Enable non-specialists to build and deploy AI models for mission-specific applications" },
      { title: "Demand Forecasting", description: "Predict supply requirements and logistics needs across military operations" },
      { title: "Risk Modeling", description: "Build predictive models for operational risk assessment and mitigation" },
      { title: "Citizen Data Science", description: "Empower analysts to create their own AI models without extensive coding skills" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "Moderate" }
  },
  {
    name: "Primer",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["language", "knowledge"],
    subcapabilities: ["Document Processing", "Summarization", "Entity Extraction"],
    missionAreas: ["osint", "sigint", "humint"],
    description: "Builds NLP engines purpose-built for intelligence analysis, automatically reading documents, extracting entities, and generating summaries in multiple languages.",
    website: "https://primer.ai",
    useCases: [
      { title: "Intelligence Summarization", description: "Automatically generate summaries of large document collections for analyst review" },
      { title: "Entity Network Extraction", description: "Identify and map relationships between people, organizations, and locations in text" },
      { title: "Foreign Media Monitoring", description: "Process foreign language news and social media for emerging events and trends" },
      { title: "Report Generation", description: "Auto-generate draft intelligence reports from source documents" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI", fedRAMP: "High" }
  },
  {
    name: "Brainspace",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["language", "knowledge"],
    subcapabilities: ["Document Processing", "Semantic Search"],
    missionAreas: ["osint", "humint"],
    description: "Uses AI to analyze and search unstructured text at scale, clustering documents by concept and surfacing relevant information for investigations and discovery.",
    website: "https://www.revealdata.com/product/brainspace",
    useCases: [
      { title: "E-Discovery Support", description: "Rapidly identify relevant documents in legal and investigative matters" },
      { title: "Concept-Based Search", description: "Find related documents even when they don't share keywords" },
      { title: "Document Clustering", description: "Automatically organize large document collections by topic and theme" },
      { title: "Timeline Reconstruction", description: "Identify and sequence events across large document collections" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Graphistry",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["knowledge", "perception"],
    subcapabilities: ["Knowledge Graphs", "Data Visualization"],
    missionAreas: ["cyber", "osint", "counterterror"],
    description: "Visualizes complex networks and relationships in data, using GPU acceleration to render millions of connections for threat hunting and investigation.",
    website: "https://www.graphistry.com",
    useCases: [
      { title: "Network Attack Visualization", description: "Map and explore complex cyber attack patterns across millions of events" },
      { title: "Social Network Analysis", description: "Visualize relationships between persons of interest and their connections" },
      { title: "Financial Network Investigation", description: "Trace money flows and corporate relationships for fraud investigation" },
      { title: "Threat Hunt Collaboration", description: "Enable teams to jointly explore and annotate threat data" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Heavy.ai",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "perception"],
    subcapabilities: ["Data Pipelines", "Geospatial Analytics"],
    missionAreas: ["geoint", "osint"],
    description: "Accelerates analytics on large geospatial and temporal datasets using GPUs, enabling interactive exploration of billions of records on maps and charts.",
    website: "https://www.heavy.ai",
    useCases: [
      { title: "Real-Time Geospatial Analytics", description: "Interactively explore billions of location records for pattern analysis" },
      { title: "Maritime Tracking Analysis", description: "Analyze historical and real-time AIS data to identify suspicious vessel behavior" },
      { title: "Activity Pattern Mining", description: "Identify patterns in movement data across time and space" },
      { title: "Large-Scale Visualization", description: "Render millions of data points on maps without pre-aggregation" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Orbital Insight",
    iqtCategory: "AI, Space",
    aiType: "AI-Native",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["Satellite/Aerial Imagery", "Forecasting"],
    missionAreas: ["geoint", "osint"],
    description: "Applies AI to satellite imagery to monitor global economic activity, tracking changes in infrastructure, agriculture, and supply chains from space.",
    website: "https://orbitalinsight.com",
    useCases: [
      { title: "Economic Activity Monitoring", description: "Track global economic indicators like oil storage and retail activity from satellite imagery" },
      { title: "Infrastructure Change Detection", description: "Monitor construction and development of strategic facilities worldwide" },
      { title: "Agricultural Monitoring", description: "Assess crop conditions and predict agricultural output from space" },
      { title: "Supply Chain Visibility", description: "Track port activity and logistics flows using satellite data" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Transvoyant",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["prediction", "knowledge"],
    subcapabilities: ["Forecasting", "Data Integration"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Provides predictive supply chain intelligence by integrating real-time data from sensors, weather, and global events to anticipate disruptions before they occur.",
    website: "https://www.transvoyant.com",
    useCases: [
      { title: "Supply Chain Disruption Prediction", description: "Forecast disruptions to military supply chains from weather, conflict, and other factors" },
      { title: "In-Transit Visibility", description: "Track shipments in real-time and predict arrival times accounting for disruptions" },
      { title: "Risk Mitigation Planning", description: "Identify alternative routes and suppliers before disruptions impact operations" },
      { title: "Multi-Modal Logistics Optimization", description: "Optimize across air, sea, and ground transportation for defense logistics" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Sayari",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["prediction", "knowledge"],
    subcapabilities: ["Risk Scoring", "Entity Resolution"],
    missionAreas: ["counterterror", "osint"],
    description: "Applies AI to assess risk and identify threats by analyzing patterns across multiple data sources, surfacing connections that human analysts might miss.",
    website: "https://sayari.com",
    useCases: [
      { title: "Threat Network Identification", description: "Discover connections between individuals and organizations that indicate threat networks" },
      { title: "Risk Score Generation", description: "Automatically assess and prioritize potential threats based on multi-source analysis" },
      { title: "Pattern-of-Life Analysis", description: "Identify anomalous behavior patterns that may indicate planning or coordination" },
      { title: "Early Warning Intelligence", description: "Surface emerging threats before they fully materialize" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Databricks",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines", "MLOps/Model Management", "Distributed Training"],
    missionAreas: ["sigint", "osint", "logistics"],
    description: "Provides a unified analytics platform combining data engineering, data science, and AI, enabling organizations to process and analyze data at massive scale.",
    website: "https://www.databricks.com",
    useCases: [
      { title: "Enterprise Data Lake", description: "Unify structured and unstructured data for AI and analytics at scale" },
      { title: "Collaborative Data Science", description: "Enable teams to share code, data, and models in a secure environment" },
      { title: "Real-Time ETL Processing", description: "Process streaming data for real-time intelligence and analytics" },
      { title: "Large-Scale Model Training", description: "Train AI models on massive datasets using distributed computing" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "Moderate" }
  },
  {
    name: "Domino Data Lab",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["MLOps/Model Management", "Distributed Training"],
    missionAreas: ["sigint", "logistics"],
    description: "Offers an enterprise MLOps platform that accelerates model development, improves collaboration, and ensures reproducibility across data science teams.",
    website: "https://www.domino.ai",
    useCases: [
      { title: "Model Lifecycle Management", description: "Track models from development through deployment with full reproducibility" },
      { title: "Secure Collaboration", description: "Enable data science teams to share work while maintaining access controls" },
      { title: "Compute Resource Management", description: "Efficiently allocate GPU and CPU resources across data science teams" },
      { title: "Experiment Tracking", description: "Record and compare experiments to accelerate model development" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "Moderate" }
  },
  {
    name: "SingleStore",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines"],
    missionAreas: ["sigint", "osint"],
    description: "Provides a distributed SQL database optimized for real-time analytics and AI workloads, combining transactional and analytical capabilities in one system.",
    website: "https://www.singlestore.com",
    useCases: [
      { title: "Real-Time Analytics", description: "Run complex analytics on streaming data as it arrives" },
      { title: "Unified Data Platform", description: "Combine operational and analytical workloads in a single database" },
      { title: "High-Performance AI Serving", description: "Deliver AI model predictions with low latency at scale" },
      { title: "Time-Series Analysis", description: "Analyze sensor and event data with sub-second query performance" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Lucidworks",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["language", "knowledge"],
    subcapabilities: ["Semantic Search", "Knowledge Graphs"],
    missionAreas: ["osint", "logistics"],
    description: "Delivers AI-powered search and discovery that understands intent and context, helping users find relevant information across enterprise data sources.",
    website: "https://lucidworks.com",
    useCases: [
      { title: "Enterprise Search", description: "Find information across disparate systems using natural language queries" },
      { title: "Knowledge Discovery", description: "Surface relevant documents and expertise across the organization" },
      { title: "E-Commerce Search", description: "Power product search for commissaries and military exchanges" },
      { title: "Help Desk Automation", description: "Enable self-service by surfacing relevant answers to common questions" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Athenium Analytics",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["Satellite/Aerial Imagery", "Risk Scoring"],
    missionAreas: ["geoint", "criticalInfra"],
    description: "Combines geospatial imagery with AI to assess property conditions and risks at scale, automating inspections and damage assessment from aerial data.",
    website: "https://www.athenium.com",
    useCases: [
      { title: "Disaster Damage Assessment", description: "Rapidly assess damage to infrastructure after natural disasters or attacks" },
      { title: "Facility Condition Monitoring", description: "Track condition of government buildings and installations from aerial imagery" },
      { title: "Risk Assessment", description: "Identify infrastructure vulnerable to weather events or other hazards" },
      { title: "Change Detection", description: "Monitor facilities and areas for unauthorized modifications" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "CallMiner",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["language", "prediction"],
    subcapabilities: ["Speech-to-Text", "Behavioral Analysis"],
    missionAreas: ["sigint", "humint"],
    description: "Analyzes voice conversations to extract insights about sentiment, intent, and compliance, turning unstructured call data into actionable intelligence.",
    website: "https://callminer.com",
    useCases: [
      { title: "Call Content Analysis", description: "Extract key topics, entities, and intent from recorded conversations" },
      { title: "Sentiment Tracking", description: "Monitor emotional state and stress indicators in voice communications" },
      { title: "Compliance Monitoring", description: "Ensure call center agents follow required scripts and procedures" },
      { title: "Pattern Detection", description: "Identify unusual communication patterns that may indicate coordinated activity" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Recorded Future",
    iqtCategory: "AI, Cyber",
    aiType: "AI-Native",
    capabilities: ["security", "knowledge", "prediction"],
    subcapabilities: ["Threat Detection", "Knowledge Graphs", "Forecasting"],
    missionAreas: ["cyber", "osint", "counterterror"],
    description: "Delivers real-time threat intelligence by analyzing billions of data points from the open, deep, and dark web to predict and contextualize cyber threats.",
    website: "https://www.recordedfuture.com",
    useCases: [
      { title: "Threat Intelligence Fusion", description: "Aggregate and correlate threat data from diverse sources into actionable intelligence" },
      { title: "Vulnerability Prioritization", description: "Identify which vulnerabilities are being actively discussed or exploited by adversaries" },
      { title: "Brand Protection", description: "Monitor for mentions of government programs and assets on dark web forums" },
      { title: "Geopolitical Risk Assessment", description: "Track global events and predict their impact on operations and security" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "Moderate" }
  },
  {
    name: "Palantir",
    iqtCategory: "AI, Enterprise",
    aiType: "AI-Native",
    capabilities: ["knowledge", "decision"],
    subcapabilities: ["Data Integration", "Knowledge Graphs", "Planning & Scheduling"],
    missionAreas: ["osint", "counterterror", "logistics", "warfighter"],
    description: "Provides data integration and operational AI platforms that enable organizations to integrate disparate data sources and make decisions at the speed of relevance.",
    website: "https://www.palantir.com",
    useCases: [
      { title: "Operational Data Fusion", description: "Integrate data from multiple classification levels and sources for unified operations" },
      { title: "Targeting Support", description: "Combine intelligence from all sources to support targeting decisions" },
      { title: "Logistics Optimization", description: "Track and optimize supply chains and maintenance across global operations" },
      { title: "Counter-IED Analysis", description: "Identify networks and patterns associated with IED cells" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: "partial", classification: "Unclassified to TS/SCI", fedRAMP: "High" }
  },
  {
    name: "Emesent",
    iqtCategory: "Hardware, AI",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Sensor Fusion", "Autonomous Navigation", "3D Modeling"],
    missionAreas: ["isr", "criticalInfra"],
    description: "Develops autonomous drones with LiDAR-based SLAM that can map GPS-denied environments like tunnels, mines, and buildings without human piloting.",
    website: "https://www.emesent.com",
    useCases: [
      { title: "Tunnel and Mine Mapping", description: "Create 3D maps of underground facilities without risking human entry" },
      { title: "Building Interior Survey", description: "Map building interiors for tactical planning before entry" },
      { title: "Infrastructure Inspection", description: "Inspect confined spaces like tanks, vessels, and tunnels" },
      { title: "Post-Disaster Assessment", description: "Survey damaged structures to assess safety and plan recovery" }
    ],
    deploymentContext: { airGapped: true, cloudNative: "partial", onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "GetReal Security",
    iqtCategory: "Cyber, AI",
    aiType: "AI-Native",
    capabilities: ["perception", "security"],
    subcapabilities: ["Deepfake Detection", "Authentication/Identity"],
    missionAreas: ["cyber", "osint", "humint"],
    description: "Detects AI-generated synthetic media including deepfake videos, cloned voices, and manipulated images to protect against disinformation and fraud.",
    website: "https://www.getrealsecurity.com",
    useCases: [
      { title: "Disinformation Detection", description: "Identify AI-generated content in social media and news sources" },
      { title: "Voice Authentication", description: "Verify that voice recordings are genuine and not AI-generated clones" },
      { title: "Video Evidence Verification", description: "Authenticate video evidence for legal and intelligence purposes" },
      { title: "VIP Impersonation Prevention", description: "Detect deepfakes of government officials used for social engineering" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Anduril",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Sensor Fusion", "Autonomous Navigation", "Multi-agent Coordination"],
    missionAreas: ["warfighter", "border", "isr"],
    description: "Builds autonomous defense systems including surveillance towers, drones, and underwater vehicles that use AI to detect threats and coordinate responses.",
    website: "https://www.anduril.com",
    useCases: [
      { title: "Border Surveillance", description: "Deploy autonomous sensor towers that detect and track intrusions across remote terrain" },
      { title: "Counter-UAS Operations", description: "Automatically detect, track, and intercept hostile drones" },
      { title: "Undersea Surveillance", description: "Deploy autonomous underwater vehicles for persistent maritime domain awareness" },
      { title: "Integrated Battlespace Management", description: "Fuse data from multiple autonomous systems for comprehensive situational awareness" }
    ],
    deploymentContext: { airGapped: true, cloudNative: "partial", onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "HavocAI",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["decision", "perception"],
    subcapabilities: ["Autonomous Navigation", "Multi-agent Coordination"],
    missionAreas: ["warfighter", "isr"],
    description: "Develops autonomous maritime systems that can operate independently or in coordinated swarms for surveillance, reconnaissance, and naval operations.",
    website: "https://www.havocai.com",
    useCases: [
      { title: "Autonomous Maritime Patrol", description: "Deploy unmanned surface vessels for persistent surveillance of sea lanes" },
      { title: "Swarm Operations", description: "Coordinate multiple autonomous vessels for distributed sensing and response" },
      { title: "Mine Countermeasures", description: "Use autonomous systems for mine detection and neutralization" },
      { title: "Port Security", description: "Monitor harbors and anchorages with persistent autonomous patrols" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Hermeus",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Optimization", "Autonomous Navigation"],
    missionAreas: ["warfighter", "logistics"],
    description: "Designs hypersonic aircraft capable of Mach 5+ speeds, using AI to optimize flight systems and enable rapid global reach for passengers and cargo.",
    website: "https://www.hermeus.com",
    useCases: [
      { title: "Rapid Global Response", description: "Deploy personnel and cargo anywhere in the world in hours instead of days" },
      { title: "High-Speed ISR", description: "Conduct reconnaissance at speeds that challenge adversary defenses" },
      { title: "Time-Critical Logistics", description: "Deliver urgently needed supplies and equipment at hypersonic speeds" },
      { title: "Executive Transport", description: "Enable rapid movement of leadership during crises" }
    ],
    deploymentContext: { airGapped: false, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Auterion",
    iqtCategory: "Hardware, Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Autonomous Navigation", "Multi-agent Coordination"],
    missionAreas: ["warfighter", "isr"],
    description: "Provides an open-source drone operating system that enables autonomous flight, swarm coordination, and integration with enterprise command systems.",
    website: "https://auterion.com",
    useCases: [
      { title: "Fleet Management", description: "Manage and coordinate large numbers of drones from a unified interface" },
      { title: "Mission Planning", description: "Plan and execute complex autonomous missions across multiple aircraft" },
      { title: "Interoperability", description: "Enable drones from different manufacturers to work together" },
      { title: "Tactical Integration", description: "Integrate drone feeds and control into existing command systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Echodyne",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Radar/Sonar Processing", "Sensor Fusion"],
    missionAreas: ["isr", "border", "warfighter"],
    description: "Manufactures compact, solid-state radar systems that provide 360-degree situational awareness for drone detection, perimeter security, and autonomous vehicles.",
    website: "https://www.echodyne.com",
    useCases: [
      { title: "Counter-UAS Detection", description: "Detect and track drones at ranges beyond visual line of sight" },
      { title: "Perimeter Security", description: "Provide 360-degree radar coverage for base and facility security" },
      { title: "Autonomous Vehicle Sensing", description: "Enable ground and air vehicles to detect obstacles in all conditions" },
      { title: "Airspace Monitoring", description: "Track aircraft and drones in controlled airspace" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Exyn Technologies",
    iqtCategory: "Hardware",
    aiType: "AI-Native",
    capabilities: ["decision", "perception"],
    subcapabilities: ["Autonomous Navigation", "Sensor Fusion"],
    missionAreas: ["isr", "warfighter"],
    description: "Creates fully autonomous aerial robots that navigate complex, GPS-denied environments using AI, requiring no human piloting or pre-mapping.",
    website: "https://www.exyn.com",
    useCases: [
      { title: "GPS-Denied Reconnaissance", description: "Explore underground facilities and buildings without GPS or prior mapping" },
      { title: "CBRN Survey", description: "Send autonomous drones into contaminated areas for survey and sampling" },
      { title: "Subterranean Operations", description: "Map and navigate tunnel systems and cave networks" },
      { title: "Search and Rescue", description: "Explore collapsed structures to locate survivors" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Evolv Technology",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["border", "criticalInfra"],
    description: "Deploys AI-powered weapons detection systems that screen people at walk-through speed, identifying concealed threats without stopping the flow of foot traffic.",
    website: "https://www.evolvtechnology.com",
    useCases: [
      { title: "High-Volume Entry Screening", description: "Screen large numbers of people for weapons at airports, stadiums, and federal buildings" },
      { title: "Non-Invasive Security", description: "Detect threats without removing items or slowing foot traffic" },
      { title: "Event Security", description: "Provide weapons screening for public events and gatherings" },
      { title: "Facility Access Control", description: "Screen employees and visitors entering secure facilities" }
    ],
    deploymentContext: { airGapped: true, cloudNative: "partial", onPremise: true, edgeDeployment: true, classification: "Unclassified" }
  },
  {
    name: "Soft Robotics",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Manipulation", "Autonomous Systems"],
    missionAreas: ["logistics"],
    description: "Engineers soft robotic grippers that use AI to handle delicate and irregularly-shaped objects, automating tasks that were previously impossible for robots.",
    website: "https://www.oxipitalai.com",
    useCases: [
      { title: "Warehouse Automation", description: "Handle diverse items in distribution centers without damaging delicate goods" },
      { title: "Food Service Automation", description: "Automate food handling in commissaries and dining facilities" },
      { title: "Parts Handling", description: "Manipulate irregularly-shaped components in manufacturing and maintenance" },
      { title: "Evidence Handling", description: "Carefully manipulate fragile evidence without contamination" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified" }
  },
  {
    name: "Twenty",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Vulnerability Discovery"],
    missionAreas: ["cyber"],
    description: "Provides continuous security validation by automatically testing defenses against real attack techniques, measuring how well security controls actually perform.",
    website: "https://twenty.io",
    useCases: [
      { title: "Continuous Security Testing", description: "Automatically validate security controls against latest attack techniques" },
      { title: "Purple Team Automation", description: "Enable continuous red-blue team exercises without dedicated staff" },
      { title: "Control Effectiveness Measurement", description: "Quantify how well security investments actually protect against attacks" },
      { title: "Compliance Validation", description: "Demonstrate security control effectiveness for audit and accreditation" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Hunt.io",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Threat Detection", "Knowledge Graphs"],
    missionAreas: ["cyber"],
    description: "Offers threat hunting tools that analyze network telemetry to identify malicious infrastructure, tracking adversary operations across the internet.",
    website: "https://hunt.io",
    useCases: [
      { title: "Adversary Infrastructure Tracking", description: "Identify and monitor command and control infrastructure used by threat actors" },
      { title: "Proactive Threat Hunting", description: "Search for indicators of compromise before alerts trigger" },
      { title: "Attribution Support", description: "Link malicious activity to known threat actor infrastructure" },
      { title: "Network Defense", description: "Block connections to known malicious infrastructure" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Nucleus",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Vulnerability Discovery", "Risk Scoring"],
    missionAreas: ["cyber"],
    description: "Aggregates vulnerability data from multiple scanners and prioritizes remediation based on actual risk, reducing the noise that overwhelms security teams.",
    website: "https://nucleussec.com",
    useCases: [
      { title: "Vulnerability Aggregation", description: "Consolidate findings from multiple security scanners into unified view" },
      { title: "Risk-Based Prioritization", description: "Focus remediation on vulnerabilities that pose greatest actual risk" },
      { title: "Remediation Tracking", description: "Track vulnerability remediation progress across the organization" },
      { title: "Compliance Reporting", description: "Generate reports showing vulnerability posture for compliance requirements" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "VulnCheck",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Vulnerability Discovery", "Knowledge Graphs"],
    missionAreas: ["cyber"],
    description: "Provides exploit intelligence by tracking which vulnerabilities have working exploits in the wild, enabling defenders to prioritize the most dangerous threats.",
    website: "https://vulncheck.com",
    useCases: [
      { title: "Exploit Intelligence", description: "Know which vulnerabilities have working exploits before they're widely used" },
      { title: "Early Warning", description: "Get alerts when exploits emerge for vulnerabilities in your environment" },
      { title: "Patch Prioritization", description: "Focus patching efforts on vulnerabilities actively being exploited" },
      { title: "Threat Context", description: "Understand which threat actors are using specific exploits" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Unknown Cyber",
    iqtCategory: "Cyber",
    aiType: "AI-Native",
    capabilities: ["security"],
    subcapabilities: ["Malware Analysis", "Threat Detection"],
    missionAreas: ["cyber"],
    description: "Uses AI to automatically analyze and classify malware, generating detailed reports on capabilities and indicators without manual reverse engineering.",
    website: "https://www.unknowncyber.com",
    useCases: [
      { title: "Automated Malware Analysis", description: "Generate detailed malware reports without manual reverse engineering" },
      { title: "Threat Classification", description: "Automatically categorize malware by family and capability" },
      { title: "IOC Extraction", description: "Extract indicators of compromise from malware samples at scale" },
      { title: "Analyst Augmentation", description: "Accelerate malware analysis workflows with AI-generated insights" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Acalvio",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Deception & Honeypots", "Threat Detection"],
    missionAreas: ["cyber"],
    description: "Deploys AI-generated deception environments that lure attackers away from real assets and detect lateral movement through realistic decoy systems.",
    website: "https://www.acalvio.com",
    useCases: [
      { title: "Active Defense", description: "Deploy deceptive assets that detect and misdirect attackers" },
      { title: "Lateral Movement Detection", description: "Identify attackers as they explore the network looking for targets" },
      { title: "Threat Intelligence Collection", description: "Gather intelligence on attacker tools and techniques through deception" },
      { title: "Early Warning", description: "Detect breaches earlier through high-fidelity deception alerts" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "CounterCraft",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Deception & Honeypots", "Threat Detection"],
    missionAreas: ["cyber", "counterterror"],
    description: "Creates distributed deception campaigns that detect and track adversaries across networks, gathering intelligence on attacker tools and techniques.",
    website: "https://www.countercraftsec.com",
    useCases: [
      { title: "Adversary Tracking", description: "Monitor and track threat actors as they interact with deception assets" },
      { title: "Cyber Counterintelligence", description: "Gather intelligence on adversary capabilities and intentions" },
      { title: "Distributed Deception", description: "Deploy coordinated deception campaigns across multiple networks" },
      { title: "Insider Threat Detection", description: "Detect unauthorized access to sensitive decoy resources" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Ory",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Authentication/Identity"],
    missionAreas: ["cyber"],
    description: "Provides open-source identity infrastructure for authentication, authorization, and user management that can be deployed on-premises or in the cloud.",
    website: "https://www.ory.sh",
    useCases: [
      { title: "Identity Management", description: "Deploy secure authentication and authorization for government applications" },
      { title: "Zero Trust Architecture", description: "Implement identity-based access controls across distributed systems" },
      { title: "Single Sign-On", description: "Provide unified identity across multiple agency applications" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Quintessence Labs",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Cryptography"],
    missionAreas: ["cyber", "sigint"],
    description: "Develops quantum-safe encryption and true random number generation, protecting data against both current and future quantum computing threats.",
    website: "https://www.quintessencelabs.com",
    useCases: [
      { title: "Quantum-Safe Cryptography", description: "Protect sensitive communications from future quantum computer attacks" },
      { title: "True Random Number Generation", description: "Generate cryptographically secure random numbers for key generation" },
      { title: "Key Management", description: "Securely manage quantum-resistant keys across the enterprise" },
      { title: "Data-at-Rest Protection", description: "Encrypt stored data with quantum-resistant algorithms" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Kasada",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Threat Detection", "Authentication/Identity"],
    missionAreas: ["cyber"],
    description: "Stops automated bot attacks and account fraud by detecting and blocking malicious automation that evades traditional security tools.",
    website: "https://www.kasada.io",
    useCases: [
      { title: "Bot Protection", description: "Block automated credential stuffing and account takeover attacks" },
      { title: "Application Security", description: "Protect public-facing government websites from automated abuse" },
      { title: "Fraud Prevention", description: "Detect and stop automated fraud attempts on benefit systems" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Red Sift",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Threat Detection"],
    missionAreas: ["cyber"],
    description: "Secures email and domain infrastructure by automating DMARC, detecting brand impersonation, and preventing email-based attacks at scale.",
    website: "https://redsift.com",
    useCases: [
      { title: "Email Security", description: "Prevent phishing and spoofing attacks against government domains" },
      { title: "Brand Protection", description: "Detect impersonation of government agencies in phishing campaigns" },
      { title: "DMARC Compliance", description: "Automate email authentication to meet federal security requirements" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Cigent",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Data Protection", "Threat Detection"],
    missionAreas: ["cyber"],
    description: "Embeds security directly into storage devices, protecting data from ransomware and theft even if other defenses fail or the system is physically compromised.",
    website: "https://cigent.com",
    useCases: [
      { title: "Ransomware Protection", description: "Protect critical data from encryption attacks at the storage level" },
      { title: "Data-at-Rest Security", description: "Ensure data remains protected even if endpoints are compromised" },
      { title: "Insider Threat Mitigation", description: "Prevent unauthorized data exfiltration from storage devices" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Vector 35",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Malware Analysis", "Vulnerability Discovery"],
    missionAreas: ["cyber"],
    description: "Builds advanced binary analysis tools that help reverse engineers understand malware and find vulnerabilities in compiled software without source code.",
    website: "https://vector35.com",
    useCases: [
      { title: "Reverse Engineering", description: "Analyze compiled binaries to understand malware behavior and capabilities" },
      { title: "Vulnerability Research", description: "Find security flaws in software without access to source code" },
      { title: "Firmware Analysis", description: "Examine embedded device firmware for security vulnerabilities" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Fortanix",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "infrastructure"],
    subcapabilities: ["Secure Enclaves", "Cryptography"],
    missionAreas: ["cyber"],
    description: "Enables confidential computing by running sensitive workloads in hardware-protected enclaves, keeping data encrypted even while being processed.",
    website: "https://www.fortanix.com",
    useCases: [
      { title: "Confidential Computing", description: "Process sensitive data while keeping it encrypted even in memory" },
      { title: "Key Management", description: "Securely manage cryptographic keys across hybrid environments" },
      { title: "Secure Multi-Party Computing", description: "Enable joint computation on sensitive data without exposure" },
      { title: "Cloud Security", description: "Protect data and workloads from cloud provider access" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI", fedRAMP: "High" }
  },
  {
    name: "Contrast Security",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Vulnerability Discovery"],
    missionAreas: ["cyber"],
    description: "Instruments applications to detect vulnerabilities and attacks from within the running code, providing continuous security testing in production environments.",
    website: "https://www.contrastsecurity.com",
    useCases: [
      { title: "Runtime Application Security", description: "Detect vulnerabilities in applications as they run in production" },
      { title: "DevSecOps Integration", description: "Embed security testing into development pipelines automatically" },
      { title: "Attack Detection", description: "Identify active exploitation attempts against applications in real-time" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Anomali",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "knowledge"],
    subcapabilities: ["Threat Detection", "Knowledge Graphs"],
    missionAreas: ["cyber"],
    description: "Aggregates and correlates threat intelligence from multiple sources, enabling security teams to detect threats faster by matching indicators against internal telemetry.",
    website: "https://www.anomali.com",
    useCases: [
      { title: "Threat Intelligence Platform", description: "Aggregate and correlate threat data from multiple intelligence sources" },
      { title: "Indicator Matching", description: "Automatically detect known threats in network and endpoint telemetry" },
      { title: "Intelligence Sharing", description: "Share threat indicators across agencies and coalition partners" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Second Front",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["MLOps/Model Management"],
    missionAreas: ["warfighter", "cyber"],
    description: "Provides a software delivery platform that enables defense organizations to rapidly deploy and update applications while meeting security requirements.",
    website: "https://www.secondfront.com",
    useCases: [
      { title: "Rapid Software Deployment", description: "Accelerate delivery of mission-critical applications to operational units" },
      { title: "Continuous Authorization", description: "Maintain security compliance while enabling frequent software updates" },
      { title: "DevSecOps Platform", description: "Provide secure development environment for defense applications" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "High" }
  },
  {
    name: "Open Raven",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Data Protection"],
    missionAreas: ["cyber"],
    description: "Discovers and classifies sensitive data across cloud environments, identifying exposed secrets, PII, and compliance risks before they become breaches.",
    website: "https://www.openraven.com",
    useCases: [
      { title: "Data Discovery", description: "Find sensitive data across cloud environments before it is exposed" },
      { title: "Compliance Monitoring", description: "Continuously verify data handling meets regulatory requirements" },
      { title: "Secret Detection", description: "Identify exposed credentials and API keys in cloud storage" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Reversing Labs",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Malware Analysis"],
    missionAreas: ["cyber"],
    description: "Analyzes files and software packages at scale to detect malware, tampering, and supply chain risks before malicious code enters the environment.",
    website: "https://www.reversinglabs.com",
    useCases: [
      { title: "Software Supply Chain Security", description: "Scan third-party software for malware and tampering before deployment" },
      { title: "File Reputation", description: "Determine if files are malicious based on extensive analysis history" },
      { title: "Package Analysis", description: "Examine software packages for hidden threats and vulnerabilities" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Mocana",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Authentication/Identity"],
    missionAreas: ["cyber", "criticalInfra"],
    description: "Secures IoT and embedded devices with lightweight cryptographic identity, enabling secure boot, authentication, and updates for resource-constrained systems.",
    website: "https://www.digicert.com/iot/mocana",
    useCases: [
      { title: "IoT Device Security", description: "Provide cryptographic identity for resource-constrained devices" },
      { title: "Secure Boot", description: "Ensure devices only run authorized firmware and software" },
      { title: "Industrial Control Security", description: "Protect embedded systems in critical infrastructure from tampering" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Red Balloon",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Vulnerability Discovery", "Malware Analysis"],
    missionAreas: ["cyber"],
    description: "Specializes in embedded device security, finding vulnerabilities in firmware and hardware and developing defenses for systems that traditional security tools cannot protect.",
    website: "https://www.redballoonsecurity.com",
    useCases: [
      { title: "Embedded Security Assessment", description: "Find vulnerabilities in firmware and hardware of critical systems" },
      { title: "SCADA Security", description: "Protect industrial control systems from cyber attacks" },
      { title: "Device Hardening", description: "Implement defenses for systems that cannot run traditional security tools" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "OpenText",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "language"],
    subcapabilities: ["Threat Detection", "Document Processing"],
    missionAreas: ["cyber", "osint"],
    description: "Provides enterprise information management including security analytics that correlate events across the enterprise to detect and investigate threats.",
    website: "https://www.opentext.com",
    useCases: [
      { title: "Enterprise Information Management", description: "Manage and secure unstructured content across the organization" },
      { title: "Security Event Correlation", description: "Correlate security events across systems to detect complex attacks" },
      { title: "E-Discovery", description: "Support legal and compliance investigations with document analysis" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "Moderate" }
  },
  {
    name: "Evident.io",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Threat Detection"],
    missionAreas: ["cyber"],
    description: "Monitors cloud infrastructure for security misconfigurations and compliance violations, providing continuous visibility into cloud security posture.",
    website: "https://www.paloaltonetworks.com/prisma/cloud",
    useCases: [
      { title: "Cloud Security Posture", description: "Continuously monitor cloud infrastructure for misconfigurations" },
      { title: "Compliance Validation", description: "Verify cloud deployments meet security and compliance requirements" },
      { title: "Risk Prioritization", description: "Identify and prioritize cloud security issues by severity" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Kry10",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "infrastructure"],
    subcapabilities: ["Secure Enclaves"],
    missionAreas: ["cyber", "warfighter"],
    description: "Develops a formally verified secure operating system that provides strong isolation guarantees for mission-critical and high-assurance applications.",
    website: "https://kry10.com",
    useCases: [
      { title: "High-Assurance Computing", description: "Run mission-critical applications on mathematically verified secure platform" },
      { title: "Cross-Domain Solutions", description: "Enable secure data transfer between different security domains" },
      { title: "Embedded Security", description: "Provide verified security for embedded and real-time systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Cloudburst",
    iqtCategory: "Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security"],
    subcapabilities: ["Vulnerability Discovery"],
    missionAreas: ["cyber"],
    description: "Automates cloud security testing and remediation, continuously scanning infrastructure-as-code and running environments for vulnerabilities.",
    website: "https://cloudburst.security",
    useCases: [
      { title: "Infrastructure-as-Code Security", description: "Scan cloud templates for vulnerabilities before deployment" },
      { title: "Cloud Configuration Testing", description: "Continuously validate cloud resources meet security standards" },
      { title: "Automated Remediation", description: "Automatically fix common cloud security misconfigurations" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Enveil",
    iqtCategory: "Enterprise, Cyber",
    aiType: "AI-Enabled",
    capabilities: ["security", "infrastructure"],
    subcapabilities: ["Privacy-Preserving ML", "Secure Enclaves"],
    missionAreas: ["sigint", "cyber"],
    description: "Enables secure data usage through homomorphic encryption, allowing organizations to search and analyze encrypted data without ever decrypting it.",
    website: "https://www.enveil.com",
    useCases: [
      { title: "Encrypted Search", description: "Search databases without revealing queries or results to database administrators" },
      { title: "Secure Data Sharing", description: "Share data for analysis without exposing the underlying information" },
      { title: "Privacy-Preserving Analytics", description: "Run analytics on sensitive data while maintaining encryption" },
      { title: "Cross-Domain Queries", description: "Query data across classification boundaries without data exposure" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Array Labs",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery", "Radar/Sonar Processing"],
    missionAreas: ["geoint", "space"],
    description: "Operates a constellation of small SAR satellites that provide all-weather, day-night imaging with frequent revisit rates for persistent monitoring.",
    website: "https://www.arraylabs.space",
    useCases: [
      { title: "All-Weather Surveillance", description: "Monitor areas of interest regardless of cloud cover or time of day" },
      { title: "Maritime Domain Awareness", description: "Track vessels and detect anomalies in shipping patterns" },
      { title: "Change Detection", description: "Identify changes to facilities and terrain over time" },
      { title: "Disaster Response", description: "Assess damage and support response in any weather conditions" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Observable Space",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery"],
    missionAreas: ["space", "geoint"],
    description: "Provides space domain awareness by tracking objects in orbit and characterizing their behavior to detect potential threats to space assets.",
    website: "https://observablespace.com",
    useCases: [
      { title: "Space Object Tracking", description: "Track and catalog objects in orbit including debris and adversary assets" },
      { title: "Behavioral Analysis", description: "Detect anomalous behavior of satellites that may indicate hostile intent" },
      { title: "Collision Avoidance", description: "Predict and prevent collisions between space assets" },
      { title: "Launch Detection", description: "Monitor and characterize new launches and orbital insertions" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Cognitive Space",
    iqtCategory: "Space",
    aiType: "AI-Native",
    capabilities: ["decision"],
    subcapabilities: ["Planning & Scheduling", "Optimization"],
    missionAreas: ["space", "isr"],
    description: "Uses AI to dynamically schedule satellite tasking, optimizing collection plans in real-time based on changing priorities and orbital mechanics.",
    website: "https://cognitivespace.com",
    useCases: [
      { title: "Satellite Tasking", description: "Optimize collection schedules across satellite constellations in real-time" },
      { title: "Priority Management", description: "Dynamically adjust collection priorities based on changing requirements" },
      { title: "Resource Optimization", description: "Maximize collection value given orbital constraints and competing demands" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Starfish Space",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Autonomous Navigation"],
    missionAreas: ["space"],
    description: "Develops autonomous satellite servicing vehicles that can rendezvous with, inspect, and manipulate other spacecraft in orbit.",
    website: "https://www.starfishspace.com",
    useCases: [
      { title: "Satellite Life Extension", description: "Refuel and repair satellites to extend operational life" },
      { title: "On-Orbit Inspection", description: "Close-up examination of satellites and debris for characterization" },
      { title: "Debris Removal", description: "Remove defunct satellites and debris from critical orbits" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "ICEYE",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery", "Radar/Sonar Processing"],
    missionAreas: ["geoint", "isr"],
    description: "Operates the world's largest SAR satellite constellation, providing reliable imagery through clouds, darkness, and adverse weather conditions.",
    website: "https://www.iceye.com",
    useCases: [
      { title: "Persistent Surveillance", description: "Monitor areas of interest day and night regardless of weather" },
      { title: "Change Detection", description: "Identify changes to terrain, infrastructure, and activities over time" },
      { title: "Maritime Monitoring", description: "Track vessel movements and detect dark vessels" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "SatVu",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery"],
    missionAreas: ["geoint", "criticalInfra"],
    description: "Deploys thermal infrared satellites that can measure heat signatures from space, detecting energy usage, industrial activity, and environmental changes.",
    website: "https://www.satvu.space",
    useCases: [
      { title: "Thermal Activity Monitoring", description: "Detect heat signatures from industrial facilities and infrastructure" },
      { title: "Energy Intelligence", description: "Monitor power plant operations and energy production globally" },
      { title: "Environmental Monitoring", description: "Track urban heat islands and environmental changes" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "ConstellR",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery"],
    missionAreas: ["geoint"],
    description: "Provides high-resolution thermal satellite data for precision agriculture, water management, and environmental monitoring applications.",
    website: "https://constellr.com",
    useCases: [
      { title: "Agricultural Intelligence", description: "Monitor crop health and water stress for food security analysis" },
      { title: "Water Resource Monitoring", description: "Track reservoir levels and irrigation patterns" },
      { title: "Climate Monitoring", description: "Measure land surface temperature for environmental analysis" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Fleet Space",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception", "infrastructure"],
    subcapabilities: ["Sensor Fusion", "Edge Computing"],
    missionAreas: ["space", "criticalInfra"],
    description: "Operates a satellite constellation for IoT connectivity, enabling remote sensors and devices to transmit data from anywhere on Earth.",
    website: "https://www.fleetspace.com",
    useCases: [
      { title: "Remote Sensor Connectivity", description: "Connect sensors in remote locations without terrestrial infrastructure" },
      { title: "Asset Tracking", description: "Track assets and equipment across remote and maritime environments" },
      { title: "Critical Infrastructure Monitoring", description: "Enable monitoring of pipelines, power lines, and remote facilities" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: true, classification: "Unclassified" }
  },
  {
    name: "Cape Analytics",
    iqtCategory: "AI, Space",
    aiType: "AI-Native",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery", "Computer Vision"],
    missionAreas: ["geoint", "criticalInfra"],
    description: "Extracts property intelligence from aerial and satellite imagery using AI, automatically identifying building characteristics and conditions at scale.",
    website: "https://capeanalytics.com",
    useCases: [
      { title: "Building Assessment", description: "Automatically characterize building conditions and features from imagery" },
      { title: "Damage Assessment", description: "Rapidly assess damage to structures after disasters" },
      { title: "Infrastructure Inventory", description: "Create and maintain inventories of buildings and structures" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "HEO",
    iqtCategory: "Hardware, Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery"],
    missionAreas: ["space"],
    description: "Provides non-Earth imaging services that photograph satellites and debris in orbit, supporting space situational awareness and threat characterization.",
    website: "https://www.heo.com",
    useCases: [
      { title: "Satellite Inspection", description: "Photograph and characterize satellites in orbit" },
      { title: "Debris Monitoring", description: "Image and track debris objects for collision avoidance" },
      { title: "Threat Assessment", description: "Characterize potential threats to space assets" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Orbital Sidekick",
    iqtCategory: "Hardware, Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery", "Signal Processing"],
    missionAreas: ["geoint", "criticalInfra"],
    description: "Operates hyperspectral imaging satellites that detect chemical signatures from space, monitoring pipelines, emissions, and environmental conditions.",
    website: "https://orbitalsidekick.com",
    useCases: [
      { title: "Pipeline Monitoring", description: "Detect leaks and anomalies along oil and gas pipelines" },
      { title: "Emissions Monitoring", description: "Measure industrial emissions and methane leaks from space" },
      { title: "Environmental Intelligence", description: "Detect pollution and environmental contamination" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "bitBiome",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["knowledge", "prediction"],
    subcapabilities: ["Data Integration", "Drug Discovery"],
    missionAreas: ["biodefense"],
    description: "Isolates and characterizes microorganisms from complex environments, building databases of novel enzymes and compounds for industrial and therapeutic applications.",
    website: "https://bitbiome.co.jp",
    useCases: [
      { title: "Novel Compound Discovery", description: "Identify new enzymes and compounds from environmental microorganisms" },
      { title: "Biodefense Research", description: "Discover compounds with potential therapeutic or decontamination applications" },
      { title: "Biomanufacturing", description: "Develop biological production methods for critical materials" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Airfinity",
    iqtCategory: "Life Sciences",
    aiType: "AI-Native",
    capabilities: ["prediction", "knowledge"],
    subcapabilities: ["Forecasting", "Data Integration"],
    missionAreas: ["biodefense"],
    description: "Provides pandemic forecasting and health intelligence by modeling disease spread, vaccine production, and medical supply chains using AI-driven analysis.",
    website: "https://www.airfinity.com",
    useCases: [
      { title: "Pandemic Forecasting", description: "Predict disease spread and healthcare demand during outbreaks" },
      { title: "Vaccine Supply Intelligence", description: "Track global vaccine production and distribution capacity" },
      { title: "Medical Supply Chain", description: "Monitor availability of critical medical supplies and equipment" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Ginkgo Bioworks",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation", "prediction"],
    subcapabilities: ["Molecular Design"],
    missionAreas: ["biodefense"],
    description: "Engineers custom organisms using synthetic biology, programming cells to produce medicines, materials, and other valuable compounds at industrial scale.",
    website: "https://www.ginkgobioworks.com",
    useCases: [
      { title: "Biosecurity", description: "Monitor and detect engineered pathogens in environmental samples" },
      { title: "Medical Countermeasure Production", description: "Rapidly produce therapeutics and vaccines using engineered organisms" },
      { title: "Strategic Material Production", description: "Create biological production methods for critical supply chain items" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Colossal",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation", "knowledge"],
    subcapabilities: ["Molecular Design", "Data Integration"],
    missionAreas: ["biodefense"],
    description: "Applies genetic engineering and AI to de-extinction efforts, developing technologies for editing and preserving genetic material with broader biosecurity applications.",
    website: "https://colossal.com",
    useCases: [
      { title: "Genetic Preservation", description: "Develop methods to preserve and recover genetic diversity" },
      { title: "Gene Editing Technology", description: "Advance precision gene editing for therapeutic and research applications" },
      { title: "Biosecurity Research", description: "Develop genetic detection and characterization capabilities" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Cortical Labs",
    iqtCategory: "Life Sciences",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["Novel Compute"],
    missionAreas: ["warfighter"],
    description: "Develops biological computing systems using living neurons, creating hybrid bio-electronic systems that could enable new forms of adaptive intelligence.",
    website: "https://corticallabs.com",
    useCases: [
      { title: "Adaptive Computing", description: "Develop systems that learn and adapt like biological brains" },
      { title: "Novel AI Architectures", description: "Research fundamentally new approaches to artificial intelligence" },
      { title: "Low-Power Intelligence", description: "Create energy-efficient computing inspired by biological systems" }
    ],
    deploymentContext: { airGapped: false, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Cerabyte",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines"],
    missionAreas: ["sigint", "logistics"],
    description: "Develops ceramic-based data storage that can preserve information for thousands of years without power, enabling truly permanent archival of critical data.",
    website: "https://www.cerabyte.com",
    useCases: [
      { title: "Permanent Archives", description: "Store critical records for centuries without degradation or energy costs" },
      { title: "Disaster Recovery", description: "Maintain data that survives electromagnetic pulses and extreme conditions" },
      { title: "Historical Preservation", description: "Archive intelligence and operational records for long-term access" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Gable",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["knowledge"],
    subcapabilities: ["Data Integration"],
    missionAreas: ["logistics"],
    description: "Enables data contracts between teams, ensuring that data producers and consumers agree on schemas and quality before data flows between systems.",
    website: "https://www.gable.ai",
    useCases: [
      { title: "Data Quality Assurance", description: "Ensure data meets agreed standards before it flows between systems" },
      { title: "Schema Management", description: "Prevent breaking changes to data formats across organizations" },
      { title: "Cross-Agency Data Sharing", description: "Establish clear agreements for data exchange between agencies" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Oxide Computer",
    iqtCategory: "Enterprise, Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing"],
    missionAreas: ["cyber", "sigint"],
    description: "Builds rack-scale computers designed for on-premises cloud computing, providing hyperscaler-class infrastructure that can be deployed in secure environments.",
    website: "https://oxide.computer",
    useCases: [
      { title: "On-Premises Cloud", description: "Deploy cloud-class computing in classified environments" },
      { title: "Secure Infrastructure", description: "Provide trusted hardware platform for sensitive workloads" },
      { title: "Data Sovereignty", description: "Keep compute and data on-premises while maintaining cloud capabilities" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Bodo",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines", "Distributed Training"],
    missionAreas: ["sigint", "logistics"],
    description: "Provides a high-performance computing platform that automatically parallelizes Python and SQL code, achieving supercomputer-class performance on standard clusters.",
    website: "https://bodo.ai",
    useCases: [
      { title: "Large-Scale Analytics", description: "Process massive datasets with automatically parallelized code" },
      { title: "Accelerated Data Processing", description: "Run Python analytics at supercomputer speeds on standard hardware" },
      { title: "Cost-Effective HPC", description: "Achieve high-performance results without specialized hardware" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Cockroach Labs",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines"],
    missionAreas: ["logistics", "cyber"],
    description: "Builds a distributed SQL database that survives failures and scales horizontally while maintaining strong consistency, enabling resilient data infrastructure.",
    website: "https://www.cockroachlabs.com",
    useCases: [
      { title: "Resilient Data Storage", description: "Maintain data availability even when nodes or regions fail" },
      { title: "Globally Distributed Data", description: "Deploy databases across multiple sites with consistent data" },
      { title: "Mission-Critical Systems", description: "Ensure data reliability for systems that cannot tolerate downtime" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "Moderate" }
  },
  {
    name: "Coder",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "generation"],
    subcapabilities: ["MLOps/Model Management", "Code Generation"],
    missionAreas: ["cyber", "logistics"],
    description: "Provides self-hosted cloud development environments that enable developers to code from anywhere while keeping source code and credentials secure.",
    website: "https://coder.com",
    useCases: [
      { title: "Secure Development", description: "Enable remote development while keeping code on secure networks" },
      { title: "Standardized Environments", description: "Ensure consistent development environments across teams" },
      { title: "Rapid Onboarding", description: "Provide new developers with preconfigured environments instantly" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Memgraph",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["knowledge"],
    subcapabilities: ["Knowledge Graphs"],
    missionAreas: ["osint", "cyber"],
    description: "Offers an in-memory graph database optimized for real-time analytics, enabling millisecond queries on highly connected data for fraud detection and network analysis.",
    website: "https://memgraph.com",
    useCases: [
      { title: "Real-Time Network Analysis", description: "Query complex relationship networks with millisecond response times" },
      { title: "Fraud Detection", description: "Identify suspicious patterns in financial and transaction networks" },
      { title: "Threat Graph Analysis", description: "Map and query adversary infrastructure and relationships" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Cohesity",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "security"],
    subcapabilities: ["Data Pipelines", "Data Protection"],
    missionAreas: ["cyber", "logistics"],
    description: "Consolidates backup, disaster recovery, and data management into a single platform, using AI to detect ransomware and ensure data availability.",
    website: "https://www.cohesity.com",
    useCases: [
      { title: "Ransomware Detection", description: "Detect and alert on ransomware encryption attempts in backup data" },
      { title: "Data Recovery", description: "Rapidly restore data and systems after incidents or disasters" },
      { title: "Unified Data Management", description: "Consolidate backup and recovery across hybrid environments" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret", fedRAMP: "High" }
  },
  {
    name: "Plotly",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Visualization"],
    missionAreas: ["osint", "logistics"],
    description: "Provides interactive data visualization tools that enable analysts to explore complex datasets and share insights through dashboards and applications.",
    website: "https://plotly.com",
    useCases: [
      { title: "Analytical Dashboards", description: "Create interactive dashboards for operational monitoring and analysis" },
      { title: "Data Exploration", description: "Enable analysts to interactively explore complex datasets" },
      { title: "Report Generation", description: "Build automated reporting with dynamic visualizations" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Anaconda",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["MLOps/Model Management", "Data Pipelines"],
    missionAreas: ["sigint", "logistics"],
    description: "Distributes and manages Python and R packages for data science, enabling secure and reproducible AI development across enterprise environments.",
    website: "https://www.anaconda.com",
    useCases: [
      { title: "Secure Package Management", description: "Provide curated and scanned data science packages for secure environments" },
      { title: "Reproducible Analytics", description: "Ensure consistent environments for reproducible data science" },
      { title: "Air-Gapped Development", description: "Enable data science development in disconnected environments" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Immersive Wisdom",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["3D Modeling", "Planning & Scheduling"],
    missionAreas: ["warfighter", "isr"],
    description: "Creates collaborative 3D operations centers where distributed teams can visualize data, plan missions, and coordinate activities in shared virtual spaces.",
    website: "https://www.immersivewisdom.com",
    useCases: [
      { title: "Mission Planning", description: "Collaboratively plan operations in shared 3D environments across distributed teams" },
      { title: "Situational Awareness", description: "Visualize multi-source intelligence in immersive operational displays" },
      { title: "Training Coordination", description: "Conduct virtual mission rehearsals with geographically dispersed personnel" },
      { title: "Command Center Operations", description: "Integrate live data feeds into 3D common operational pictures" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Matroid",
    iqtCategory: "Enterprise",
    aiType: "AI-Native",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision"],
    missionAreas: ["isr", "criticalInfra"],
    description: "Enables users to build custom computer vision detectors without coding, training models to recognize specific objects, actions, or conditions in video streams.",
    website: "https://matroid.com",
    useCases: [
      { title: "Custom Object Detection", description: "Train detectors for specific vehicles, equipment, or objects of interest without coding" },
      { title: "Video Surveillance Analysis", description: "Automatically flag events or conditions in security camera footage" },
      { title: "Infrastructure Monitoring", description: "Detect anomalies or damage in critical infrastructure from video feeds" },
      { title: "Activity Recognition", description: "Identify specific actions or behaviors in operational video streams" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "D-Wave",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Optimization"],
    missionAreas: ["logistics"],
    description: "Provides quantum computing systems and cloud access for solving complex optimization problems in logistics, scheduling, and resource allocation.",
    website: "https://www.dwavesys.com",
    useCases: [
      { title: "Logistics Optimization", description: "Optimize supply chain routing and resource allocation across complex networks" },
      { title: "Scheduling Problems", description: "Solve complex scheduling constraints for personnel and equipment" },
      { title: "Resource Allocation", description: "Allocate limited resources across competing priorities optimally" },
      { title: "Network Optimization", description: "Optimize communication and transportation network configurations" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: "partial", edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "nTop",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["3D Model Generation"],
    missionAreas: ["logistics"],
    description: "Offers generative design software that creates optimized engineering structures, enabling lighter, stronger parts that can only be manufactured with 3D printing.",
    website: "https://www.ntop.com",
    useCases: [
      { title: "Lightweight Components", description: "Design weight-optimized parts for aircraft, vehicles, and equipment" },
      { title: "Rapid Prototyping", description: "Generate manufacturable designs for 3D-printed replacement parts" },
      { title: "Heat Exchanger Design", description: "Create optimized thermal management components for electronics" },
      { title: "Structural Optimization", description: "Design load-bearing structures that minimize material while maximizing strength" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Siren Solutions",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["knowledge"],
    subcapabilities: ["Knowledge Graphs", "Entity Resolution"],
    missionAreas: ["osint", "counterterror"],
    description: "Provides an investigative intelligence platform that links and analyzes data across sources, helping analysts uncover hidden connections and patterns.",
    website: "https://siren.io",
    useCases: [
      { title: "Network Analysis", description: "Map relationships between entities across multiple data sources" },
      { title: "Financial Investigation", description: "Trace money flows and identify suspicious transaction patterns" },
      { title: "Threat Network Mapping", description: "Visualize connections between persons, organizations, and activities of interest" },
      { title: "Cross-Source Correlation", description: "Link records across databases to identify hidden relationships" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Yellowbrick Data",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines"],
    missionAreas: ["sigint", "logistics"],
    description: "Delivers a high-performance data warehouse that runs complex queries on massive datasets in seconds, either on-premises or in the cloud.",
    website: "https://www.yellowbrick.com",
    useCases: [
      { title: "High-Speed Analytics", description: "Run complex queries on petabyte-scale datasets in seconds" },
      { title: "Real-Time Reporting", description: "Generate operational reports from massive datasets without delays" },
      { title: "Data Consolidation", description: "Unify data from multiple sources into a single queryable warehouse" },
      { title: "Ad-Hoc Analysis", description: "Enable analysts to explore large datasets interactively" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Quantum Brilliance",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    subcapabilities: ["Edge Computing", "Optimization"],
    missionAreas: ["warfighter", "logistics"],
    description: "Develops diamond-based quantum accelerators that operate at room temperature, enabling quantum computing to be deployed at the edge.",
    website: "https://quantumbrilliance.com",
    useCases: [
      { title: "Edge Optimization", description: "Run optimization algorithms on tactical platforms without cryogenic cooling" },
      { title: "Portable Quantum Computing", description: "Deploy quantum accelerators in mobile or space-constrained environments" },
      { title: "Logistics Planning", description: "Solve complex routing problems at forward operating locations" },
      { title: "Sensor Processing", description: "Accelerate processing of sensor data at the point of collection" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Xanadu",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    subcapabilities: ["Distributed Training", "Optimization"],
    missionAreas: ["sigint", "logistics"],
    description: "Builds photonic quantum computers and provides cloud access to quantum hardware, with applications in optimization, chemistry, and machine learning.",
    website: "https://xanadu.ai",
    useCases: [
      { title: "Quantum Machine Learning", description: "Accelerate machine learning model training with quantum algorithms" },
      { title: "Chemical Simulation", description: "Model molecular interactions for materials science and drug discovery" },
      { title: "Optimization Problems", description: "Solve complex combinatorial optimization problems faster than classical methods" },
      { title: "Cryptographic Research", description: "Research quantum-resistant encryption methods" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Q-CTRL",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Optimization"],
    missionAreas: ["sigint"],
    description: "Provides quantum control software that improves the performance and reliability of quantum computers by reducing errors and noise.",
    website: "https://q-ctrl.com",
    useCases: [
      { title: "Quantum Error Reduction", description: "Improve quantum computer accuracy by suppressing hardware noise" },
      { title: "Quantum Sensor Enhancement", description: "Increase sensitivity and accuracy of quantum sensing systems" },
      { title: "Hardware Optimization", description: "Maximize performance of existing quantum computing investments" },
      { title: "Navigation Systems", description: "Enhance quantum-based navigation and timing systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Ayar Labs",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators"],
    missionAreas: ["sigint"],
    description: "Develops optical interconnects that replace electrical wires with light, dramatically increasing bandwidth and reducing power consumption in AI data centers.",
    website: "https://ayarlabs.com",
    useCases: [
      { title: "Data Center Efficiency", description: "Reduce power consumption and increase bandwidth in high-performance computing" },
      { title: "AI Training Infrastructure", description: "Enable faster data transfer between GPUs and memory for AI workloads" },
      { title: "High-Bandwidth Computing", description: "Connect compute nodes with terabit-per-second optical links" },
      { title: "Thermal Management", description: "Reduce heat generation in dense computing environments" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Prophesee",
    iqtCategory: "Hardware, Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["isr", "warfighter"],
    description: "Creates neuromorphic vision sensors that only capture changes in a scene, enabling ultra-low-latency, high-dynamic-range vision for robotics and autonomous systems.",
    website: "https://www.prophesee.ai",
    useCases: [
      { title: "High-Speed Tracking", description: "Track fast-moving objects with microsecond-level latency" },
      { title: "Low-Light Vision", description: "Maintain vision capability in challenging lighting conditions" },
      { title: "Power-Efficient Surveillance", description: "Operate vision systems on limited power budgets" },
      { title: "Autonomous Navigation", description: "Enable rapid obstacle detection for drones and vehicles" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Mythic",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Native",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators", "Edge Computing"],
    missionAreas: ["warfighter", "isr"],
    description: "Builds analog AI processors that perform neural network computations in memory, achieving order-of-magnitude improvements in power efficiency for edge AI.",
    website: "https://www.mythic.ai",
    useCases: [
      { title: "Battery-Powered AI", description: "Run complex neural networks on devices with strict power constraints" },
      { title: "Embedded Vision", description: "Deploy computer vision on small unmanned systems" },
      { title: "Tactical AI Processing", description: "Enable AI inference on soldier-carried devices" },
      { title: "Sensor Edge Processing", description: "Process sensor data locally before transmission" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Everactive",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["perception", "infrastructure"],
    subcapabilities: ["Sensor Fusion", "Edge Computing"],
    missionAreas: ["criticalInfra", "logistics"],
    description: "Produces batteryless IoT sensors that harvest energy from their environment, enabling perpetual monitoring of equipment and infrastructure without maintenance.",
    website: "https://everactive.com",
    useCases: [
      { title: "Perpetual Monitoring", description: "Deploy sensors that never need battery replacement" },
      { title: "Equipment Health Tracking", description: "Monitor machinery condition continuously without maintenance visits" },
      { title: "Infrastructure Sensing", description: "Track environmental conditions across large facilities" },
      { title: "Remote Asset Monitoring", description: "Monitor assets in locations where battery changes are impractical" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "TerraGo",
    iqtCategory: "AI",
    aiType: "AI-Enabled",
    capabilities: ["perception", "knowledge"],
    subcapabilities: ["Satellite/Aerial Imagery", "Data Integration"],
    missionAreas: ["geoint"],
    description: "Provides geospatial data management and collaboration tools that enable field teams to collect, share, and analyze location-based information.",
    website: "https://www.terrago.com",
    useCases: [
      { title: "Field Data Collection", description: "Collect and share geospatial data from mobile devices in the field" },
      { title: "Map Collaboration", description: "Enable distributed teams to collaborate on geospatial products" },
      { title: "Imagery Management", description: "Organize and distribute aerial and satellite imagery to field teams" },
      { title: "Geospatial Workflows", description: "Streamline collection, processing, and dissemination of location data" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Sitscape",
    iqtCategory: "AI",
    aiType: "AI-Enabled",
    capabilities: ["knowledge", "perception"],
    subcapabilities: ["Data Integration", "Sensor Fusion"],
    missionAreas: ["isr", "warfighter"],
    description: "Creates situational awareness platforms that fuse data from multiple sensors and sources into a common operational picture for command and control.",
    website: "https://www.sitscape.com",
    useCases: [
      { title: "Common Operational Picture", description: "Integrate multiple data feeds into unified situational displays" },
      { title: "Sensor Fusion", description: "Combine data from diverse sensors into coherent intelligence" },
      { title: "Command Center Display", description: "Provide real-time operational awareness to decision makers" },
      { title: "Multi-Source Integration", description: "Correlate information across intelligence disciplines" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Carnegie Speech",
    iqtCategory: "AI",
    aiType: "AI-Native",
    capabilities: ["language"],
    subcapabilities: ["Speech Recognition", "Language Learning"],
    missionAreas: ["humint"],
    description: "Develops AI-powered language learning technology that provides real-time pronunciation feedback, accelerating acquisition of foreign language speaking skills.",
    website: "https://www.carnegiespeech.com",
    useCases: [
      { title: "Language Training", description: "Accelerate foreign language acquisition with AI-powered pronunciation feedback" },
      { title: "Accent Reduction", description: "Help personnel develop native-like pronunciation in target languages" },
      { title: "Speaking Assessment", description: "Objectively evaluate language proficiency for personnel selection" },
      { title: "Self-Paced Learning", description: "Enable independent language study with real-time coaching" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Mersive",
    iqtCategory: "AI",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Collaboration"],
    missionAreas: ["warfighter"],
    description: "Provides wireless display and collaboration technology that enables secure content sharing in meeting rooms and command centers without cables or adapters.",
    website: "https://www.mersive.com",
    useCases: [
      { title: "Secure Collaboration", description: "Share classified content wirelessly in secure conference rooms" },
      { title: "Command Center Display", description: "Enable multiple sources to present on shared displays without cable switching" },
      { title: "Remote Briefings", description: "Conduct presentations with distributed participants on shared screens" },
      { title: "SCIF Integration", description: "Deploy wireless display in sensitive compartmented facilities" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Tierra",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["prediction"],
    subcapabilities: ["Drug Discovery"],
    missionAreas: ["biodefense"],
    description: "Discovers and develops therapeutic antibodies using AI-guided design, accelerating the creation of treatments for infectious diseases and biological threats.",
    website: "https://tierrabio.com",
    useCases: [
      { title: "Rapid Countermeasure Development", description: "Accelerate antibody development against emerging biological threats" },
      { title: "Therapeutic Design", description: "Design optimized antibodies for infectious disease treatment" },
      { title: "Pandemic Response", description: "Quickly generate therapeutic candidates during disease outbreaks" },
      { title: "Biologic Optimization", description: "Improve efficacy and manufacturability of antibody therapeutics" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Vast",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["decision", "infrastructure"],
    subcapabilities: ["Planning & Scheduling", "Resource Allocation"],
    missionAreas: ["space", "logistics"],
    description: "Designs and builds commercial space stations that will provide orbital infrastructure for research, manufacturing, and national security applications.",
    website: "https://www.vastspace.com",
    useCases: [
      { title: "Orbital Research Platform", description: "Provide persistent space-based infrastructure for government research" },
      { title: "Space Manufacturing", description: "Enable manufacturing of materials and components in microgravity" },
      { title: "Crew Operations", description: "Support extended human presence in orbit for national security missions" },
      { title: "Technology Testing", description: "Test space systems and technologies in operational environment" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: false, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Starcloud",
    iqtCategory: "Hardware, Space",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing", "Distributed Training"],
    missionAreas: ["space", "isr"],
    description: "Deploys data center infrastructure in orbit, enabling AI processing and analytics to occur in space rather than transmitting all raw data to Earth.",
    website: "https://www.starcloud.space",
    useCases: [
      { title: "On-Orbit Processing", description: "Process satellite imagery in space before downlinking results" },
      { title: "Bandwidth Reduction", description: "Reduce ground station bandwidth requirements through in-space analytics" },
      { title: "Real-Time Space Analysis", description: "Enable immediate analysis of collected data without transmission delays" },
      { title: "Distributed Space Computing", description: "Provide cloud computing capabilities accessible from orbit" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: false, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Elegen",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["Molecular Design", "Synthetic Biology"],
    missionAreas: ["biodefense"],
    description: "Provides rapid DNA synthesis services with industry-leading accuracy, enabling researchers to quickly prototype biological designs for therapeutics and vaccines.",
    website: "https://www.elegen.com",
    useCases: [
      { title: "Rapid Prototyping", description: "Quickly synthesize DNA sequences for vaccine and therapeutic development" },
      { title: "Biosecurity Research", description: "Support research on countermeasures for biological threats" },
      { title: "High-Fidelity Synthesis", description: "Produce accurate DNA constructs for critical applications" },
      { title: "Accelerated Development", description: "Reduce time from design to testing for biological products" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Synchron",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Signal Processing", "Neural Interface"],
    missionAreas: ["warfighter", "biodefense"],
    description: "Develops minimally invasive brain-computer interfaces that enable patients to control digital devices through thought, with applications for paralysis and communication.",
    website: "https://synchron.com",
    useCases: [
      { title: "Assistive Technology", description: "Enable personnel with disabilities to control computers and devices" },
      { title: "Neural Research", description: "Advance understanding of brain-computer interface technology" },
      { title: "Communication Restoration", description: "Provide communication capability to personnel with speech impairments" },
      { title: "Rehabilitation Support", description: "Support recovery and adaptation for injured service members" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Radiant",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Optimization", "Predictive Maintenance"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Builds portable nuclear microreactors that provide clean, reliable power for remote operations, disaster response, and off-grid military installations.",
    website: "https://radiantnuclear.com",
    useCases: [
      { title: "Remote Base Power", description: "Provide reliable power to installations beyond grid reach" },
      { title: "Disaster Response", description: "Deploy rapid power generation for emergency operations" },
      { title: "Fuel Independence", description: "Reduce logistics burden of fuel convoys in contested areas" },
      { title: "Persistent Operations", description: "Enable extended operations without resupply" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Atlas Data Storage",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Data Pipelines"],
    missionAreas: ["sigint", "logistics"],
    description: "Develops DNA-based data storage that can archive massive amounts of information in a durable, compact format lasting thousands of years.",
    website: "https://www.atlasdatastorage.com",
    useCases: [
      { title: "Long-Term Archival", description: "Store critical records for centuries without degradation" },
      { title: "Dense Storage", description: "Archive massive datasets in extremely compact physical form" },
      { title: "Durable Backup", description: "Create backups that survive environmental extremes" },
      { title: "Cold Storage", description: "Archive infrequently accessed data cost-effectively" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Efficient",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators"],
    missionAreas: ["warfighter", "isr"],
    description: "Designs power-efficient computing chips that deliver high performance within strict power budgets for edge AI and mobile applications.",
    website: "https://efficient.computer",
    useCases: [
      { title: "Tactical AI", description: "Run AI models on battery-powered tactical systems" },
      { title: "Embedded Processing", description: "Deploy compute-intensive applications in size-constrained platforms" },
      { title: "Mobile Intelligence", description: "Enable AI processing on handheld and portable devices" },
      { title: "Sensor Processing", description: "Process sensor data locally with minimal power draw" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Stark Defense",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Sensor Fusion", "Autonomous Navigation"],
    missionAreas: ["warfighter", "border"],
    description: "Develops autonomous ground robots for defense applications including reconnaissance, logistics support, and perimeter security in contested environments.",
    website: "https://starkdefense.us",
    useCases: [
      { title: "Autonomous Patrol", description: "Conduct perimeter security patrols without human presence" },
      { title: "Logistics Support", description: "Transport supplies autonomously in contested areas" },
      { title: "Reconnaissance", description: "Perform ground reconnaissance in dangerous environments" },
      { title: "Force Protection", description: "Extend security coverage around fixed installations" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Neros",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["warfighter", "isr"],
    description: "Creates advanced sensor systems that combine multiple sensing modalities to provide comprehensive situational awareness for military platforms.",
    website: "https://www.nerostech.com",
    useCases: [
      { title: "Multi-Modal Sensing", description: "Combine visual, thermal, and other sensors for complete situational awareness" },
      { title: "Platform Integration", description: "Provide integrated sensing for ground vehicles and aircraft" },
      { title: "Threat Detection", description: "Detect and classify threats across multiple sensor domains" },
      { title: "Target Acquisition", description: "Enable rapid target identification in complex environments" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Multibeam",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators"],
    missionAreas: ["sigint"],
    description: "Develops advanced semiconductor manufacturing equipment that enables production of next-generation chips for AI and high-performance computing.",
    website: "https://www.multibeamcorp.com",
    useCases: [
      { title: "Chip Manufacturing", description: "Enable production of advanced semiconductors for secure applications" },
      { title: "Domestic Production", description: "Support onshore manufacturing of critical microelectronics" },
      { title: "Advanced Packaging", description: "Enable next-generation chip packaging for AI accelerators" },
      { title: "Supply Chain Security", description: "Reduce dependence on foreign semiconductor manufacturing" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "South 8",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["prediction"],
    subcapabilities: ["Predictive Maintenance"],
    missionAreas: ["logistics", "warfighter"],
    description: "Creates liquefied gas electrolyte batteries that operate in extreme temperatures, providing reliable power for military and aerospace applications.",
    website: "https://south8technologies.com",
    useCases: [
      { title: "Arctic Operations", description: "Provide reliable battery power in extreme cold environments" },
      { title: "Aerospace Applications", description: "Power systems that experience wide temperature swings" },
      { title: "Extended Operations", description: "Enable equipment operation in environments that degrade conventional batteries" },
      { title: "High-Altitude Systems", description: "Power unmanned systems at high altitudes with extreme temperatures" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Salient Motion",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Sensor Fusion", "Optimization"],
    missionAreas: ["logistics"],
    description: "Develops advanced electric motor technology that delivers higher power density and efficiency for electric vehicles and industrial applications.",
    website: "https://salient-motion.com",
    useCases: [
      { title: "Vehicle Electrification", description: "Provide efficient electric propulsion for military vehicles" },
      { title: "Industrial Automation", description: "Power high-efficiency motors for logistics equipment" },
      { title: "Weight Reduction", description: "Replace heavier motors with compact, high-power alternatives" },
      { title: "Efficiency Gains", description: "Reduce energy consumption in electric-powered systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified" }
  },
  {
    name: "Thintronics",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators"],
    missionAreas: ["sigint", "warfighter"],
    description: "Produces advanced dielectric materials that improve chip performance and enable next-generation semiconductor packaging for AI processors.",
    website: "https://www.thintronics.com",
    useCases: [
      { title: "Chip Performance", description: "Improve speed and efficiency of AI processors" },
      { title: "Advanced Packaging", description: "Enable 3D chip stacking for compact, high-performance systems" },
      { title: "Thermal Management", description: "Improve heat dissipation in dense computing systems" },
      { title: "Signal Integrity", description: "Reduce interference in high-frequency chip communications" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Moment Energy",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["prediction"],
    subcapabilities: ["Predictive Maintenance", "Optimization"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Repurposes electric vehicle batteries for stationary energy storage, using AI to optimize performance and predict remaining useful life.",
    website: "https://www.momentenergy.ca",
    useCases: [
      { title: "Backup Power", description: "Provide reliable backup power from repurposed battery systems" },
      { title: "Grid Stabilization", description: "Support facility power stability with energy storage" },
      { title: "Cost-Effective Storage", description: "Deploy energy storage at lower cost using second-life batteries" },
      { title: "Sustainability", description: "Extend useful life of batteries before recycling" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified" }
  },
  {
    name: "Noveon",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["Molecular Design"],
    missionAreas: ["logistics"],
    description: "Manufactures high-performance permanent magnets without rare earth elements, reducing supply chain risks for electric motors and defense systems.",
    website: "https://noveon.co",
    useCases: [
      { title: "Supply Chain Security", description: "Source magnets without dependence on foreign rare earth supply" },
      { title: "Motor Manufacturing", description: "Provide magnets for electric vehicle and industrial motors" },
      { title: "Defense Systems", description: "Supply magnets for weapons systems and guidance components" },
      { title: "Domestic Production", description: "Enable onshore manufacturing of critical magnetic materials" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Swan Genomics",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation", "prediction"],
    subcapabilities: ["Molecular Design", "Drug Discovery"],
    missionAreas: ["biodefense"],
    description: "Develops gene therapy delivery systems using AI-designed vectors that can precisely target specific cell types for therapeutic applications.",
    website: "https://swanbio.com",
    useCases: [
      { title: "Targeted Therapeutics", description: "Deliver gene therapies to specific cell types with precision" },
      { title: "Countermeasure Development", description: "Create delivery systems for biodefense therapeutics" },
      { title: "Treatment Optimization", description: "Improve efficacy of gene-based treatments" },
      { title: "Novel Therapies", description: "Enable new treatment modalities for genetic conditions" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Air Company",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["Molecular Design"],
    missionAreas: ["logistics"],
    description: "Converts captured CO2 into sustainable aviation fuel and other chemicals, providing carbon-negative alternatives to petroleum-based products.",
    website: "https://www.aircompany.com",
    useCases: [
      { title: "Sustainable Aviation Fuel", description: "Produce jet fuel from captured carbon dioxide" },
      { title: "Forward Production", description: "Generate fuel at remote locations from available CO2" },
      { title: "Carbon Reduction", description: "Reduce carbon footprint of aviation operations" },
      { title: "Fuel Independence", description: "Decrease dependence on petroleum supply chains" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Quantum Circuits",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    subcapabilities: ["Optimization"],
    missionAreas: ["sigint", "cyber"],
    description: "Builds modular superconducting quantum computers designed for error correction and practical quantum advantage in optimization and simulation.",
    website: "https://quantumcircuits.com",
    useCases: [
      { title: "Quantum Optimization", description: "Solve complex optimization problems beyond classical capability" },
      { title: "Cryptographic Research", description: "Research quantum-resistant and quantum-enabled cryptography" },
      { title: "Simulation", description: "Simulate quantum systems for materials and chemistry research" },
      { title: "Algorithm Development", description: "Develop and test quantum algorithms for government applications" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Kyoto Fusioneering",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["prediction", "decision"],
    subcapabilities: ["Simulation", "Optimization"],
    missionAreas: ["criticalInfra"],
    description: "Develops fusion energy technology including breeding blankets and heat exchangers that will be essential for commercial fusion power plants.",
    website: "https://kyotofusioneering.com",
    useCases: [
      { title: "Fusion Development", description: "Advance key components for practical fusion power generation" },
      { title: "Energy Research", description: "Support national fusion energy research programs" },
      { title: "Tritium Breeding", description: "Develop fuel production systems for fusion reactors" },
      { title: "Heat Extraction", description: "Enable efficient energy capture from fusion reactions" }
    ],
    deploymentContext: { airGapped: false, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Prolific Machines",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Optimization"],
    missionAreas: ["biodefense", "logistics"],
    description: "Uses light to control cellular processes in biomanufacturing, enabling precise, programmable production of biologics and cell-based products.",
    website: "https://prolificmachines.com",
    useCases: [
      { title: "Biologic Production", description: "Manufacture therapeutic proteins and antibodies with precise control" },
      { title: "Cell Culture Optimization", description: "Improve yields in cell-based manufacturing" },
      { title: "Scalable Production", description: "Scale up biomanufacturing for emergency response" },
      { title: "Quality Control", description: "Ensure consistent product quality through process control" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Antheia",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation", "prediction"],
    subcapabilities: ["Molecular Design", "Drug Discovery"],
    missionAreas: ["biodefense"],
    description: "Engineers microbes to produce pharmaceutical ingredients that are currently derived from plants, securing supply chains for critical medicines.",
    website: "https://antheia.bio",
    useCases: [
      { title: "Supply Chain Security", description: "Produce critical medicines without plant-based supply chains" },
      { title: "Pharmaceutical Manufacturing", description: "Manufacture drug ingredients through fermentation" },
      { title: "Domestic Production", description: "Onshore production of medicines currently imported" },
      { title: "Rapid Scale-Up", description: "Quickly increase production of critical compounds" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Nanolumi",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Sensor Fusion"],
    missionAreas: ["isr", "warfighter"],
    description: "Develops quantum dot display technology that delivers superior color accuracy and brightness for heads-up displays and tactical visualization systems.",
    website: "https://www.nanolumi.com",
    useCases: [
      { title: "Heads-Up Displays", description: "Provide high-visibility displays for pilots and vehicle operators" },
      { title: "Tactical Visualization", description: "Display operational data clearly in high-ambient-light conditions" },
      { title: "Situational Awareness", description: "Present multi-source information on wearable displays" },
      { title: "Cockpit Integration", description: "Integrate advanced displays into aircraft and vehicles" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Inventia",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["3D Model Generation"],
    missionAreas: ["biodefense"],
    description: "Creates 3D bioprinting systems that can precisely deposit living cells, enabling fabrication of tissue models for drug testing and regenerative medicine.",
    website: "https://inventia.life",
    useCases: [
      { title: "Tissue Modeling", description: "Create human tissue models for drug and toxin testing" },
      { title: "Countermeasure Testing", description: "Test biodefense therapeutics on realistic tissue models" },
      { title: "Wound Healing Research", description: "Develop treatments for combat injuries using tissue models" },
      { title: "Toxicology Studies", description: "Screen compounds for toxicity without animal testing" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Synonym",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["prediction", "decision"],
    subcapabilities: ["Optimization", "Forecasting"],
    missionAreas: ["biodefense", "logistics"],
    description: "Builds biomanufacturing infrastructure and applies AI to optimize fermentation processes, accelerating scale-up of biological production.",
    website: "https://www.synonym.bio",
    useCases: [
      { title: "Process Optimization", description: "Improve biomanufacturing yields through AI-driven optimization" },
      { title: "Scale-Up Acceleration", description: "Rapidly transition from lab to production scale" },
      { title: "Capacity Planning", description: "Optimize biomanufacturing facility utilization" },
      { title: "Emergency Production", description: "Quickly scale production for biodefense response" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "TaxBit",
    iqtCategory: "Enterprise",
    aiType: "AI-Enabled",
    capabilities: ["knowledge"],
    subcapabilities: ["Data Integration", "Entity Resolution"],
    missionAreas: ["counterterror", "osint"],
    description: "Provides cryptocurrency tax and accounting software that tracks transactions across blockchains, supporting compliance and financial investigations.",
    website: "https://taxbit.com",
    useCases: [
      { title: "Crypto Tracing", description: "Track cryptocurrency transactions across multiple blockchains" },
      { title: "Financial Investigation", description: "Support investigations into illicit cryptocurrency use" },
      { title: "Compliance Monitoring", description: "Monitor cryptocurrency holdings for sanctions compliance" },
      { title: "Asset Recovery", description: "Identify cryptocurrency assets for seizure and forfeiture" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Armada",
    iqtCategory: "Microelectronics & Quantum, Hardware",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing", "Data Pipelines"],
    missionAreas: ["warfighter", "isr", "criticalInfra"],
    description: "Deploys mobile edge computing infrastructure that brings data center capabilities to remote and austere locations for tactical AI processing.",
    website: "https://armada.ai",
    useCases: [
      { title: "Tactical Computing", description: "Deploy data center capabilities to forward operating locations" },
      { title: "Disconnected Operations", description: "Process data locally when connectivity is unavailable" },
      { title: "Rapid Deployment", description: "Stand up computing infrastructure in days rather than months" },
      { title: "Edge AI", description: "Run AI workloads at the tactical edge" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "Quantum Systems",
    iqtCategory: "Hardware, Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Computer Vision", "Autonomous Navigation"],
    missionAreas: ["isr", "warfighter"],
    description: "Manufactures electric VTOL drones optimized for ISR missions, featuring long endurance and autonomous flight capabilities.",
    website: "https://quantum-systems.com",
    useCases: [
      { title: "Tactical ISR", description: "Provide persistent surveillance from small unit level" },
      { title: "Route Reconnaissance", description: "Scout ahead of convoys and patrols autonomously" },
      { title: "Target Acquisition", description: "Locate and track targets for engagement" },
      { title: "Battle Damage Assessment", description: "Assess effects of strikes without exposing personnel" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Wirepas",
    iqtCategory: "Enterprise, Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing", "Sensor Fusion"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Provides decentralized IoT mesh networking that scales to millions of devices without infrastructure, enabling asset tracking and industrial monitoring.",
    website: "https://www.wirepas.com",
    useCases: [
      { title: "Asset Tracking", description: "Track millions of assets without dedicated infrastructure" },
      { title: "Facility Monitoring", description: "Deploy sensors throughout facilities using mesh networking" },
      { title: "Supply Chain Visibility", description: "Monitor goods throughout the supply chain" },
      { title: "Infrastructure-Free IoT", description: "Deploy IoT networks in locations without connectivity" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Open Cosmos",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception", "decision"],
    subcapabilities: ["Satellite/Aerial Imagery", "Planning & Scheduling"],
    missionAreas: ["space", "geoint"],
    description: "Offers end-to-end satellite mission services from design through operations, enabling rapid deployment of custom Earth observation capabilities.",
    website: "https://www.open-cosmos.com",
    useCases: [
      { title: "Rapid Satellite Deployment", description: "Deploy custom satellite missions in months rather than years" },
      { title: "Earth Observation", description: "Collect imagery for specific geographic areas of interest" },
      { title: "Mission Operations", description: "Outsource satellite operations to experienced providers" },
      { title: "Custom Payloads", description: "Fly specialized sensors for unique collection requirements" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Mitra Chem",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["generation", "prediction"],
    subcapabilities: ["Molecular Design"],
    missionAreas: ["logistics"],
    description: "Uses AI to accelerate development of battery cathode materials, discovering new chemistries that improve energy density and reduce costs.",
    website: "https://mitrachem.com",
    useCases: [
      { title: "Battery Development", description: "Accelerate discovery of improved battery materials" },
      { title: "Energy Density", description: "Develop higher-capacity batteries for extended operations" },
      { title: "Cost Reduction", description: "Lower battery costs through improved materials" },
      { title: "Supply Chain Security", description: "Develop batteries using domestically available materials" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Impulse Space",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Autonomous Navigation", "Optimization"],
    missionAreas: ["space"],
    description: "Develops orbital transfer vehicles that move satellites between orbits, enabling flexible deployment and repositioning of space assets.",
    website: "https://www.impulsespace.com",
    useCases: [
      { title: "Orbital Repositioning", description: "Move satellites to different orbits after launch" },
      { title: "Last-Mile Delivery", description: "Deploy satellites to precise orbital locations" },
      { title: "Constellation Management", description: "Reposition satellites within constellations as needed" },
      { title: "Mission Flexibility", description: "Change satellite deployment plans post-launch" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: false, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Phoenix Tailings",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["prediction"],
    subcapabilities: ["Optimization"],
    missionAreas: ["logistics", "criticalInfra"],
    description: "Extracts critical minerals from mining waste using clean processes, reducing dependence on foreign sources for rare earth elements and other strategic materials.",
    website: "https://www.phoenixtailings.com",
    useCases: [
      { title: "Rare Earth Recovery", description: "Extract rare earth elements from existing mining waste" },
      { title: "Supply Chain Security", description: "Reduce dependence on foreign sources for critical minerals" },
      { title: "Domestic Production", description: "Establish onshore sources of strategic materials" },
      { title: "Environmental Remediation", description: "Clean up mining sites while recovering valuable materials" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Atomionics",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Sensor Fusion"],
    missionAreas: ["warfighter", "isr"],
    description: "Develops quantum sensors using cold atoms that provide ultra-precise measurements of gravity and acceleration for navigation without GPS.",
    website: "https://www.atomionics.com",
    useCases: [
      { title: "GPS-Denied Navigation", description: "Navigate precisely without reliance on GPS signals" },
      { title: "Inertial Navigation", description: "Provide drift-free navigation for extended missions" },
      { title: "Underground Mapping", description: "Detect underground structures through gravity sensing" },
      { title: "Submarine Navigation", description: "Enable precise underwater positioning" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "ICON",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["generation", "decision"],
    subcapabilities: ["3D Model Generation", "Optimization"],
    missionAreas: ["logistics", "warfighter"],
    description: "Pioneers large-scale 3D printing of buildings and infrastructure, enabling rapid construction in remote locations and disaster zones.",
    website: "https://www.iconbuild.com",
    useCases: [
      { title: "Rapid Construction", description: "Build structures in days rather than months" },
      { title: "Forward Operating Bases", description: "Construct hardened facilities in remote locations" },
      { title: "Disaster Response", description: "Quickly provide shelter after natural disasters" },
      { title: "Infrastructure Development", description: "Build roads, barriers, and fortifications on demand" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Circuit Mind",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Native",
    capabilities: ["generation", "decision"],
    subcapabilities: ["Code Generation", "Optimization"],
    missionAreas: ["logistics"],
    description: "Uses AI to automatically design electronic circuits, generating optimized schematics and layouts that would take human engineers weeks or months.",
    website: "https://www.circuitmind.io",
    useCases: [
      { title: "Accelerated Design", description: "Generate circuit designs in hours instead of weeks" },
      { title: "Design Optimization", description: "Automatically optimize circuits for size, power, or performance" },
      { title: "Component Selection", description: "Select optimal components from available inventories" },
      { title: "Rapid Prototyping", description: "Quickly iterate on electronic system designs" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Sofar Ocean",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["Sensor Fusion", "Forecasting"],
    missionAreas: ["isr", "logistics"],
    description: "Operates a global network of ocean sensors that provide real-time marine weather data, improving forecasts for maritime operations and climate research.",
    website: "https://www.sofarocean.com",
    useCases: [
      { title: "Maritime Weather", description: "Provide real-time ocean conditions for naval operations" },
      { title: "Route Optimization", description: "Optimize shipping routes based on current conditions" },
      { title: "Search and Rescue", description: "Predict drift patterns for search and rescue operations" },
      { title: "Coastal Operations", description: "Support amphibious operations with surf and current data" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "ThruWave",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["border", "logistics"],
    description: "Creates millimeter-wave imaging systems that see through packaging and containers, enabling non-invasive inspection of goods and cargo.",
    website: "https://www.thruwave.com",
    useCases: [
      { title: "Cargo Inspection", description: "Inspect sealed containers without opening them" },
      { title: "Contraband Detection", description: "Identify hidden items within packages and shipments" },
      { title: "Quality Control", description: "Verify package contents non-destructively" },
      { title: "Security Screening", description: "Screen goods at ports of entry" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Celona",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing"],
    missionAreas: ["criticalInfra", "warfighter"],
    description: "Provides private 5G network solutions that deliver secure, high-performance wireless connectivity for enterprise and defense applications.",
    website: "https://www.celona.io",
    useCases: [
      { title: "Secure Wireless", description: "Deploy private 5G networks for sensitive operations" },
      { title: "Industrial Connectivity", description: "Connect devices in facilities without public network exposure" },
      { title: "Mobile Infrastructure", description: "Provide high-bandwidth connectivity for tactical operations" },
      { title: "IoT Connectivity", description: "Support large numbers of connected devices securely" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Myriota",
    iqtCategory: "Space, Hardware",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "perception"],
    subcapabilities: ["Edge Computing", "Sensor Fusion"],
    missionAreas: ["isr", "logistics"],
    description: "Operates a satellite IoT network optimized for low-power devices, enabling global connectivity for remote sensors and asset trackers.",
    website: "https://myriota.com",
    useCases: [
      { title: "Remote Asset Tracking", description: "Track assets in areas without cellular or ground infrastructure" },
      { title: "Environmental Monitoring", description: "Connect sensors in remote locations globally" },
      { title: "Maritime Tracking", description: "Monitor vessels and cargo across oceans" },
      { title: "Low-Power Connectivity", description: "Connect battery-powered devices for years without maintenance" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: false, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Anello",
    iqtCategory: "Microelectronics & Quantum, Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Sensor Fusion"],
    missionAreas: ["warfighter", "isr"],
    description: "Manufactures silicon photonic gyroscopes that provide precise orientation data for navigation, targeting, and stabilization in GPS-denied environments.",
    website: "https://www.anellophotonics.com",
    useCases: [
      { title: "Precision Navigation", description: "Provide accurate heading and orientation without GPS" },
      { title: "Weapon Stabilization", description: "Stabilize targeting systems on moving platforms" },
      { title: "Autonomous Vehicles", description: "Enable precise navigation for unmanned systems" },
      { title: "Inertial Reference", description: "Provide drift-free orientation for extended missions" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Codagenix",
    iqtCategory: "Life Sciences",
    aiType: "AI-Enabled",
    capabilities: ["generation", "prediction"],
    subcapabilities: ["Molecular Design", "Drug Discovery"],
    missionAreas: ["biodefense"],
    description: "Designs live-attenuated vaccines using computational biology, rapidly creating vaccine candidates against emerging infectious diseases.",
    website: "https://codagenix.com",
    useCases: [
      { title: "Rapid Vaccine Development", description: "Create vaccine candidates within weeks of pathogen identification" },
      { title: "Pandemic Preparedness", description: "Pre-position vaccine platforms for rapid response" },
      { title: "Biodefense Countermeasures", description: "Develop vaccines against potential biological threats" },
      { title: "Emerging Disease Response", description: "Quickly respond to novel infectious disease outbreaks" }
    ],
    deploymentContext: { airGapped: false, cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  },
  {
    name: "Trackonomy",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception", "prediction"],
    subcapabilities: ["Sensor Fusion", "Anomaly Detection"],
    missionAreas: ["logistics"],
    description: "Provides industrial IoT solutions that track assets and monitor conditions throughout supply chains, predicting problems before they cause disruptions.",
    website: "https://www.trackonomysystems.com",
    useCases: [
      { title: "Supply Chain Visibility", description: "Track shipments and conditions throughout logistics networks" },
      { title: "Predictive Maintenance", description: "Identify equipment issues before they cause failures" },
      { title: "Condition Monitoring", description: "Monitor temperature, humidity, and shock during transport" },
      { title: "Asset Utilization", description: "Optimize use of containers, pallets, and equipment" }
    ],
    deploymentContext: { airGapped: true, cloudNative: true, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Paragraf",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["perception", "infrastructure"],
    subcapabilities: ["Sensor Fusion", "AI Accelerators"],
    missionAreas: ["warfighter", "isr"],
    description: "Produces graphene-based electronics including Hall effect sensors and semiconductor devices that outperform silicon in harsh environments.",
    website: "https://www.paragraf.com",
    useCases: [
      { title: "Harsh Environment Sensing", description: "Deploy sensors that operate reliably in extreme conditions" },
      { title: "Magnetic Field Detection", description: "Detect anomalies through sensitive magnetic sensing" },
      { title: "High-Temperature Electronics", description: "Operate electronics in environments too hot for silicon" },
      { title: "Radiation Tolerance", description: "Maintain sensor function in high-radiation environments" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Universal Quantum",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    subcapabilities: ["Optimization"],
    missionAreas: ["sigint", "cyber"],
    description: "Builds trapped-ion quantum computers designed to scale to millions of qubits, targeting practical quantum advantage for optimization and simulation.",
    website: "https://universalquantum.com",
    useCases: [
      { title: "Large-Scale Quantum Computing", description: "Solve problems requiring many qubits" },
      { title: "Cryptographic Analysis", description: "Research quantum approaches to cryptography" },
      { title: "Complex Simulation", description: "Simulate physical systems beyond classical capability" },
      { title: "Optimization at Scale", description: "Tackle large optimization problems with quantum advantage" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Reach Power",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["Edge Computing"],
    missionAreas: ["warfighter", "space"],
    description: "Develops long-range wireless power transmission using microwaves, enabling remote charging of devices, vehicles, and satellites.",
    website: "https://www.reachpower.com",
    useCases: [
      { title: "Remote Power Delivery", description: "Provide power to devices without physical connections" },
      { title: "Drone Endurance", description: "Extend unmanned system operations through wireless charging" },
      { title: "Satellite Servicing", description: "Power spacecraft without on-board fuel" },
      { title: "Forward Area Power", description: "Deliver power to locations without infrastructure" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Fortify",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["3D Model Generation"],
    missionAreas: ["logistics", "warfighter"],
    description: "Creates advanced composite 3D printing technology that produces parts with the strength of metal at a fraction of the weight.",
    website: "https://3dfortify.com",
    useCases: [
      { title: "Lightweight Components", description: "Produce metal-strength parts at composite weight" },
      { title: "Rapid Manufacturing", description: "Print functional parts without traditional tooling" },
      { title: "Field Repair", description: "Manufacture replacement parts at forward locations" },
      { title: "Custom Tooling", description: "Create specialized fixtures and tools on demand" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "SpotterRF",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Radar/Sonar Processing", "Sensor Fusion"],
    missionAreas: ["border", "criticalInfra"],
    description: "Manufactures compact surveillance radar systems that detect and track people, vehicles, and drones for perimeter security applications.",
    website: "https://spotterrf.com",
    useCases: [
      { title: "Perimeter Security", description: "Detect intrusions across large perimeters continuously" },
      { title: "Counter-UAS", description: "Detect and track small drones approaching facilities" },
      { title: "Border Surveillance", description: "Monitor remote border areas for crossings" },
      { title: "Critical Infrastructure Protection", description: "Provide early warning of approaching threats" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Bounce Imaging",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["warfighter", "border"],
    description: "Creates throwable camera spheres that provide 360-degree video and sensor data, enabling reconnaissance of dangerous areas before entry.",
    website: "https://bounceimaging.com",
    useCases: [
      { title: "Room Clearing", description: "View interior spaces before personnel enter" },
      { title: "Hostage Rescue", description: "Assess situations before tactical entry" },
      { title: "Building Assessment", description: "Check structures for occupants or hazards" },
      { title: "Tunnel Reconnaissance", description: "Explore underground spaces remotely" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "ABL Space Systems",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Optimization", "Autonomous Navigation"],
    missionAreas: ["space"],
    description: "Develops responsive launch systems that can deploy satellites from austere locations, providing flexible access to space for national security missions.",
    website: "https://ablspacesystems.com",
    useCases: [
      { title: "Responsive Launch", description: "Deploy satellites on short notice from diverse locations" },
      { title: "Rapid Reconstitution", description: "Replace lost space assets quickly after conflict" },
      { title: "Dispersed Operations", description: "Launch from locations that avoid known threats" },
      { title: "Tactical Space Access", description: "Provide space capabilities to theater commanders" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Morpheus Space",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Autonomous Navigation", "Optimization"],
    missionAreas: ["space"],
    description: "Manufactures electric propulsion systems for satellites that enable precise orbital maneuvering and constellation management.",
    website: "https://www.morpheus-space.com",
    useCases: [
      { title: "Orbit Maintenance", description: "Keep satellites in precise positions over extended missions" },
      { title: "Collision Avoidance", description: "Maneuver satellites to avoid debris and threats" },
      { title: "Constellation Management", description: "Optimize satellite positions within large constellations" },
      { title: "End-of-Life Disposal", description: "Deorbit satellites safely at mission end" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Rocket Lab",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["decision"],
    subcapabilities: ["Autonomous Navigation", "Optimization"],
    missionAreas: ["space"],
    description: "Provides end-to-end space services including launch, spacecraft manufacturing, and on-orbit operations for small satellite missions.",
    website: "https://www.rocketlabusa.com",
    useCases: [
      { title: "Dedicated Launch", description: "Deploy small satellites on dedicated missions" },
      { title: "Spacecraft Production", description: "Manufacture satellite buses for government payloads" },
      { title: "On-Orbit Services", description: "Operate satellites on behalf of government customers" },
      { title: "Deep Space Missions", description: "Support missions beyond Earth orbit" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Capella Space",
    iqtCategory: "Space",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Satellite/Aerial Imagery", "Radar/Sonar Processing"],
    missionAreas: ["geoint", "isr"],
    description: "Operates a SAR satellite constellation that provides high-resolution radar imagery on demand, seeing through clouds and darkness.",
    website: "https://www.capellaspace.com",
    useCases: [
      { title: "All-Weather Imaging", description: "Collect imagery regardless of cloud cover or lighting" },
      { title: "Change Detection", description: "Monitor areas for changes over time with consistent geometry" },
      { title: "Maritime Surveillance", description: "Detect and track vessels at sea day or night" },
      { title: "Rapid Tasking", description: "Collect imagery within hours of request" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to TS/SCI" }
  },
  {
    name: "IonQ",
    iqtCategory: "Hardware, Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    subcapabilities: ["Optimization"],
    missionAreas: ["sigint", "cyber"],
    description: "Builds trapped-ion quantum computers available through major cloud platforms, providing quantum computing access for optimization and machine learning.",
    website: "https://ionq.com",
    useCases: [
      { title: "Cloud Quantum Access", description: "Access quantum computing through existing cloud infrastructure" },
      { title: "Algorithm Development", description: "Develop and test quantum algorithms for government applications" },
      { title: "Optimization Research", description: "Explore quantum approaches to hard optimization problems" },
      { title: "Machine Learning Enhancement", description: "Investigate quantum advantages for AI training" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Rigetti Computing",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    website: "https://www.rigetti.com",
    subcapabilities: ["Optimization"],
    missionAreas: ["sigint", "cyber"],
    description: "Develops superconducting quantum processors and provides integrated quantum-classical computing systems for research and commercial applications.",
    useCases: [
      { title: "Hybrid Computing", description: "Combine quantum and classical computing for practical applications" },
      { title: "Quantum Simulation", description: "Simulate quantum systems for materials and chemistry" },
      { title: "Optimization", description: "Apply quantum algorithms to complex scheduling and logistics" },
      { title: "Research Platform", description: "Provide quantum hardware for government research programs" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "908 Devices",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Sensor Fusion"],
    missionAreas: ["biodefense", "border"],
    description: "Creates handheld mass spectrometers that identify chemical substances in the field, enabling rapid detection of drugs, explosives, and hazardous materials.",
    website: "https://908devices.com",
    useCases: [
      { title: "Chemical Identification", description: "Identify unknown substances in the field within minutes" },
      { title: "Drug Interdiction", description: "Detect narcotics and precursor chemicals at checkpoints" },
      { title: "Explosives Detection", description: "Screen for explosive materials and residues" },
      { title: "Hazmat Response", description: "Identify hazardous materials during emergency response" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "KA Imaging",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Computer Vision", "Sensor Fusion"],
    missionAreas: ["border", "biodefense"],
    description: "Develops portable X-ray imaging systems with advanced detectors that reveal hidden objects and internal structures for security and medical applications.",
    website: "https://www.ka-imaging.com",
    useCases: [
      { title: "Security Screening", description: "Inspect packages and containers for threats" },
      { title: "Field Medical Imaging", description: "Provide X-ray capability in austere environments" },
      { title: "Non-Destructive Testing", description: "Inspect equipment and materials without disassembly" },
      { title: "Contraband Detection", description: "Reveal hidden items within vehicles and cargo" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "sensiBel",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Speech Recognition", "Sensor Fusion"],
    missionAreas: ["sigint", "warfighter"],
    description: "Manufactures optical MEMS microphones that deliver superior audio quality and noise immunity for voice recognition and acoustic sensing.",
    website: "https://www.sensibel.no",
    useCases: [
      { title: "Voice Recognition", description: "Improve speech recognition accuracy in noisy environments" },
      { title: "Acoustic Sensing", description: "Detect and classify sounds with high fidelity" },
      { title: "Communications", description: "Enhance voice communications in challenging conditions" },
      { title: "Gunshot Detection", description: "Identify and locate weapons fire accurately" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Diraq",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure", "decision"],
    subcapabilities: ["Optimization"],
    missionAreas: ["sigint", "cyber"],
    description: "Develops silicon-based quantum processors that leverage existing semiconductor manufacturing, offering a path to scalable quantum computing.",
    website: "https://diraq.com",
    useCases: [
      { title: "Scalable Quantum Computing", description: "Build quantum computers using standard chip fabrication" },
      { title: "Cost-Effective Quantum", description: "Reduce quantum computing costs through silicon integration" },
      { title: "Compact Systems", description: "Create smaller quantum computers for wider deployment" },
      { title: "Quantum Research", description: "Advance quantum computing using proven manufacturing" }
    ],
    deploymentContext: { airGapped: "partial", cloudNative: true, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "EUV Tech",
    iqtCategory: "Microelectronics & Quantum",
    aiType: "AI-Enabled",
    capabilities: ["infrastructure"],
    subcapabilities: ["AI Accelerators"],
    missionAreas: ["sigint"],
    description: "Creates metrology and inspection tools for extreme ultraviolet lithography, enabling manufacturing of the most advanced semiconductor chips.",
    website: "https://www.euvtech.com",
    useCases: [
      { title: "Chip Manufacturing", description: "Enable production of most advanced semiconductors" },
      { title: "Quality Assurance", description: "Ensure chip manufacturing meets specifications" },
      { title: "Yield Improvement", description: "Reduce defects in advanced chip production" },
      { title: "Technology Development", description: "Support next-generation semiconductor research" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified to Secret" }
  },
  {
    name: "Xarion Laser Acoustics",
    iqtCategory: "Hardware",
    aiType: "AI-Enabled",
    capabilities: ["perception"],
    subcapabilities: ["Sensor Fusion", "Signal Processing"],
    missionAreas: ["isr", "criticalInfra"],
    description: "Develops optical microphones that use lasers to detect sound, enabling acoustic sensing in extreme environments and at unprecedented sensitivities.",
    website: "https://www.xarion.com",
    useCases: [
      { title: "Extreme Environment Sensing", description: "Detect sounds in high-temperature or vacuum conditions" },
      { title: "Non-Contact Measurement", description: "Measure acoustic phenomena without physical contact" },
      { title: "Ultrasonic Detection", description: "Detect sounds beyond human hearing range" },
      { title: "Industrial Monitoring", description: "Monitor machinery acoustics in harsh conditions" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: true, classification: "Unclassified to Secret" }
  },
  {
    name: "Sila Nanotechnologies",
    iqtCategory: "Energy",
    aiType: "AI-Enabled",
    capabilities: ["generation"],
    subcapabilities: ["Molecular Design"],
    missionAreas: ["logistics", "warfighter"],
    description: "Engineers silicon-based battery anode materials that increase energy density by 20% or more, extending range for electric vehicles and portable devices.",
    website: "https://www.silanano.com",
    useCases: [
      { title: "Extended Operations", description: "Increase mission duration for battery-powered equipment" },
      { title: "Weight Reduction", description: "Achieve same power in lighter battery packages" },
      { title: "Vehicle Range", description: "Extend range of electric vehicles and drones" },
      { title: "Portable Power", description: "Improve power capacity for soldier-carried systems" }
    ],
    deploymentContext: { airGapped: true, cloudNative: false, onPremise: true, edgeDeployment: false, classification: "Unclassified" }
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AI_CAPABILITIES, MISSION_AREAS, COMPANIES };
}
