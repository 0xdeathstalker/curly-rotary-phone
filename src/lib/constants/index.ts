const states = [
  {
    value: "andaman-and-nicobar-islands",
    label: "Andaman and Nicobar Islands",
  },
  {
    value: "andhra-pradesh",
    label: "Andhra Pradesh",
  },
  {
    value: "arunachal-pradesh",
    label: "Arunachal Pradesh",
  },
  {
    value: "assam",
    label: "Assam",
  },
  {
    value: "bihar",
    label: "Bihar",
  },
  {
    value: "chandigarh",
    label: "Chandigarh",
  },
  {
    value: "chhattisgarh",
    label: "Chhattisgarh",
  },
  {
    value: "dadar-nagar",
    label: "Dadar Nagar",
  },
  {
    value: "daman-and-diu",
    label: "Daman and Diu",
  },
  {
    value: "delhi",
    label: "Delhi",
  },
  {
    value: "goa",
    label: "Goa",
  },
  {
    value: "gujarat",
    label: "Gujarat",
  },
  {
    value: "haryana",
    label: "Haryana",
  },
  {
    value: "himachal-pradesh",
    label: "Himachal Pradesh",
  },
  {
    value: "jammu-and-kashmir",
    label: "Jammu and Kashmir",
  },
  {
    value: "jharkhand",
    label: "Jharkhand",
  },
  {
    value: "karnataka",
    label: "Karnataka",
  },
  {
    value: "kerala",
    label: "Kerala",
  },
  {
    value: "lakshadweep",
    label: "Lakshadweep",
  },
  {
    value: "madhya-pradesh",
    label: "Madhya Pradesh",
  },
  {
    value: "maharashtra",
    label: "Maharashtra",
  },
  {
    value: "manipur",
    label: "Manipur",
  },
  {
    value: "meghalaya",
    label: "Meghalaya",
  },
  {
    value: "mizoram",
    label: "Mizoram",
  },
  {
    value: "nagaland",
    label: "Nagaland",
  },
  {
    value: "odisha",
    label: "Odisha",
  },
  {
    value: "puducherry",
    label: "Puducherry",
  },
  {
    value: "punjab",
    label: "Punjab",
  },
  {
    value: "rajasthan",
    label: "Rajasthan",
  },
  {
    value: "tamil-nadu",
    label: "Tamil Nadu",
  },
  {
    value: "telangana",
    label: "Telangana",
  },
  {
    value: "tripura",
    label: "Tripura",
  },
  {
    value: "uttar-pradesh",
    label: "Uttar Pradesh",
  },
  {
    value: "uttarakhand",
    label: "Uttarakhand",
  },
  {
    value: "west-bengal",
    label: "West Bengal",
  },
];

const companySizes = [
  {
    value: "1-10",
    label: "1-10",
  },
  {
    value: "11-50",
    label: "11-50",
  },
  {
    value: "51-200",
    label: "51-200",
  },
  {
    value: "201-500",
    label: "201-500",
  },
  {
    value: "501-1000",
    label: "501-1000",
  },
  {
    value: "1001-5000",
    label: "1001-5000",
  },
  {
    value: "5001-10000",
    label: "5001-10000",
  },
  {
    value: "10000+",
    label: "10000+",
  },
];

const cardContents = [
  {
    title: "Basic",
    recommended: false,
    description:
      "Start your Pvt Ltd company at the lowest cost in just 30 days",
    price: 2999,
    inclusions: [
      {
        title: "Company Registration - End to End",
      },
    ],
  },
  {
    title: "Advanced",
    recommended: true,
    description:
      "Get your company up and running quickly with must-have compliances included.",
    price: 7999,
    inclusions: [
      {
        title: "MSME Reg",
      },
      {
        title: "GST Registration",
      },
    ],
  },
  {
    title: "Pro",
    recommended: false,
    description:
      "All registrations done in one go. Launch your business fully compliant from day one.",
    price: 16999,
    inclusions: [
      {
        title: "Financial Statement",
      },
      {
        title: "ITR",
      },
      {
        title: "All Post incorporation",
      },
      {
        title: "MCA compliances",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 4.8,
    message:
      "Got my company incorporated with the help of Taxocity. The entire process was handled professionally, and they kept me updated at every step. Highly recommended.",
    image: null,
    name: "Pankaj Mishra",
    position: null,
    company: "Aromatics India Pvt. Ltd.",
  },
  {
    id: 2,
    rating: 4,
    message:
      "Starting a business in India can feel overwhelming with so many legal and compliance requirements — but Taxocity made it look easy. From the very beginning, they guided me through every step. Thank you, Taxocity, for making business setup so seamless!",
    image: null,
    name: "Prakash Mishra",
    position: "Head of Finance",
    company: "Hugel Infra Pvt. Ltd.",
  },
  {
    id: 3,
    rating: 3.5,
    message:
      "Highly recommended! I used Taxocity for my ITR filing this year and the process was super smooth. The team was responsive and cleared all my doubts quickly. Filing taxes has never been this stress-free!",
    image: null,
    name: "Kumar Guarav Gupta",
    position: null,
    company: null,
  },
  {
    id: 3,
    rating: 3.5,
    message:
      "We engaged Taxocity for end-to-end company incorporation. The team demonstrated exceptional domain knowledge throughout the incorporation process. Their support didn’t end at incorporation; we have since retained them for ongoing statutory compliance.",
    image: null,
    name: "Ankit Tayal",
    position: null,
    company: "PCI Infra projects Pvt. Ltd.",
  },
];

const governmentFees = [
  {
    state: "Andaman and Nicobar Islands",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 520,
    total: 6696,
  },
  {
    state: "Andhra Pradesh",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1520,
    total: 7696,
  },
  {
    state: "Arunachal Pradesh",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 710,
    total: 6886,
  },
  {
    state: "Assam",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 525,
    total: 6701,
  },
  {
    state: "Bihar",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1600,
    total: 7776,
  },
  {
    state: "Chandigarh",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1503,
    total: 7679,
  },
  {
    state: "Chhattisgarh",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1510,
    total: 7686,
  },
  {
    state: "Dadar Nagar",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 41,
    total: 6217,
  },
  {
    state: "Daman and Diu",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1170,
    total: 7346,
  },
  {
    state: "Delhi",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 360,
    total: 6536,
  },
  {
    state: "Goa",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1200,
    total: 7376,
  },
  {
    state: "Gujarat",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 620,
    total: 6796,
  },
  {
    state: "Haryana",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 135,
    total: 6311,
  },
  {
    state: "Himachal Pradesh",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 183,
    total: 7359,
  },
  {
    state: "Jammu and Kashmir",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 310,
    total: 6486,
  },
  {
    state: "Jharkhand",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 173,
    total: 6349,
  },
  {
    state: "Karnataka",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 10020,
    total: 16196,
  },
  {
    state: "Kerala",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 3025,
    total: 9201,
  },
  {
    state: "Lakshadweep",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1525,
    total: 7701,
  },
  {
    state: "Madhya Pradesh",
    dscPrice: 4720,
    runPanTan: 1236,
    stateFilingFee: 7550,
    total: 13726,
  },
  {
    state: "Maharashtra",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1300,
    total: 7476,
  },
  {
    state: "Manipur",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 260,
    total: 6436,
  },
  {
    state: "Meghalaya",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 410,
    total: 6586,
  },
  {
    state: "Mizoram",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 260,
    total: 6436,
  },
  {
    state: "Nagaland",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 260,
    total: 6436,
  },
  {
    state: "Odisha",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 610,
    total: 6786,
  },
  {
    state: "Puducherry",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 510,
    total: 6686,
  },
  {
    state: "Punjab",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 10025,
    total: 16201,
  },
  {
    state: "Rajasthan",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 5500,
    total: 11676,
  },
  {
    state: "Tamil Nadu",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 520,
    total: 6696,
  },
  {
    state: "Telangana",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1520,
    total: 7696,
  },
  {
    state: "Tripura",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 260,
    total: 6436,
  },
  {
    state: "Uttar Pradesh",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1010,
    total: 7186,
  },
  {
    state: "Uttarakhand",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 1010,
    total: 7186,
  },
  {
    state: "West Bengal",
    dscPrice: 4720,
    runPanTan: 1456,
    stateFilingFee: 370,
    total: 6546,
  },
];

export { states, companySizes, cardContents, testimonials, governmentFees };
