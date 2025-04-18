export const questions = [
  {
    question: "What is a Zero-Day Vulnerability?",
    answer:
      "A software vulnerability unknown to the vendor, with no patch available yet. Attackers exploit it before developers can fix it (e.g., the 2021 Exchange Server attack).",
  },
  {
    question:
      "Explain the difference between symmetric and asymmetric encryption.",
    answer:
      "Symmetric uses one key for encryption/decryption (fast, e.g., AES). Asymmetric uses public/private key pairs (secure but slower, e.g., RSA).",
  },
  {
    question: "How does a Man-in-the-Middle (MITM) attack work?",
    answer:
      "An attacker secretly intercepts/alters communication between two parties (e.g., via fake Wi-Fi hotspots or ARP spoofing).",
  },
  {
    question:
      "What is multi-factor authentication (MFA)? Name three MFA factors.",
    answer:
      "MFA requires multiple proofs of identity: 1) Knowledge (password), 2) Possession (phone/SMS), 3) Biometrics (fingerprint).",
  },
  {
    question: "What’s the purpose of a VPN?",
    answer:
      "Encrypts internet traffic and masks IP addresses to ensure privacy (e.g., preventing ISP tracking or bypassing geo-blocks).",
  },
  {
    question: "Define SQL Injection and how to prevent it.",
    answer:
      "Injecting malicious SQL queries via input fields. Prevention: Use parameterized queries, input sanitization, and ORMs like Sequelize.",
  },
  {
    question: "What is phishing? Give an example.",
    answer:
      "Deceptive emails/messages tricking users into revealing data (e.g., a fake 'Amazon' email with a malicious link to 'update payment details').",
  },
];
