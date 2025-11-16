const states = [
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
    value: "chhattisgarh",
    label: "Chhattisgarh",
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
    value: "punjab",
    label: "Punjab",
  },
  {
    value: "rajasthan",
    label: "Rajasthan",
  },
  {
    value: "sikkim",
    label: "Sikkim",
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

export { states, companySizes, cardContents };
