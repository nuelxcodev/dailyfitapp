interface SectionData {
  title: string;
  data: string[];
}

export const Personalinfo: SectionData[] = [
  {
    title: "",
    data: ["marketer's Photo", "Full Name", "email", "Phone Number", "date of birth", "Gender", "Contact Address"],
  },
  {
    title: "Next of Kin",
    data: [
      "Next of Kin Photo",
      "Next of Kin Full Name",
      "Next of Kin Gender",
      "Next of Kin Phone Number",
      "Next of Kin Email",
      "Relationship with marketer",
      "sales team",
      "marketing group",
      "Password",
      "Retype Password",
    ],
  },
];
export const BackAccount: SectionData[] = [
  {
    title: "",
    data: ["bank name", "account name", "account number", "account type"],
  },
  {
    title: "select plan",
    data: [
      "affable business owner,₦70000.00",
      "exress property consultant ₦2000.00",
      "associate director ₦100000.00",
      "multi level marketing director ₦1000000.00",
      "executive director ₦100000.00",
      "expert property consultant ₦40000.00",
      "recruitment coordinator ₦700000.00",
    ],
  },
];

export const paymentDetails: SectionData[]= [{
    title: "",
    data: ["date of payment","depositor name","amount paid"],
},]
