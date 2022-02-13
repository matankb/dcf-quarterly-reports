/**
 * Each value array is a pair of row-col coords on the spreadsheet
 * First [row, col] pair is the first row, second pair is the second row
 * Row and col are based on a single page
 */

const PAGE_FIELD_MAP = {
  "Reports and Overall Consumer Counts": {
    "51A Reports": {
      "51A Reports": [[2, 5]],
      "Screened-In for Response": [[3, 5], [3, 6]],
      "Screened-Out": [[4, 5], [4, 6]],
      "Screened-Out DA Referral": [[5, 5], [5, 6]]
    },
    "Responses": {
      "Responses": [[7, 5]],
      "Supported": [[8, 5], [8, 6]],
      "Substantiated Concern": [[9, 5], [9, 6]],
      "Unsupported": [[10, 5], [10, 6]]
    },
    "Responses Completed On Time": {
      "Responses Completed On Time": [p => `${p[11][3]} of ${p[11][5]}`, [11, 6]],
      "Emergency Responses (5 business days)": [p => `${p[12][3]} of ${p[12][5]}`, [12][6]],
      "Non-Emergency Responses (15 business days)": [p => `${p[13][3]} of ${p[13][5]}`, [13][6]]
    },
    "Recurrence of Maltreatment (12-mos.)": [[14, 5]],
    "Statewide% Maltreatment in Foster Care (FC) (12-mos.)": [[15, 5]],
    "Maltreatment in FC p/100K Bed Days (12-mos. )": [[16, 5], [16, 6]],
    "Consumer Children <18 Pending Response": [[2, 13]],
    "Consumer Children In Caseload": {
      "Consumer Children <18 in Caseload": [[4, 13]],
      "Consumer Children <18 Not In-Placement": [[5, 13], [5, 14]],
      "Consumer Children <18 In-Placement": [[6, 13], [6, 14]],
      "Kin Placement Rate for ALL Children <18 In-Placement": [[7, 13], [7, 14]],
      "Consumer Children <18 in Departmental Foster Care (DFC)": [[9, 13]]
    },
    "Consumer Youth  ≥18 in Caseload": [[11, 13]],
    "Consumer Role Type of Adult in Caseload": [[13, 13]],
    "Total": {
      "All DCF Consumers (child<18+ youth≥18+adult)": [[14, 13]]
    },
    "Reunifications": {
      "Reunifications": [[15, 13]],
      "Reunifications within 12-months of Home Removal": [[16, 13], [16, 14]]
    }
  },
  "DCF Cases": {
    "Clinical Cases": {
      "Clinical Cases": [[17, 5]],
      "Clinical Cases - Non Placement": [[18, 5], [18, 6]],
      "Clinical Cases with a Child <18 In-Placement": [[19, 5], [19, 6]],
      "Avg. Clinical Cases Opened per Month (Jan-March 2020)": [[21, 5]],
      "Avg. Clinical Cases Closed per Month (Jan-March 2020)": [[22, 5]],
      "Adoption Cases (3/31/20)": [[17, 13]]
    },
    "Adoptions Legalized": {
      "Adoptions Legalized (FY'2020, Q3)": [[19, 13]],
      "Adoptions Legalized within 24-months of Home Removal": [[20, 13]],
      "Guardianships Legalized (FY'2020, Q3)": [[21, 13]]
    }
  },
  "All DCF Consumers (Race)": {
    "DCF Child <18 Consumers": {
      "White (1) Child <18": [[24, 1], [24, 2]],
      "Hispanic/Latino/Latina (2) Child <18": [[25, 1], [25, 2]],
      "Black (1) Child <18": [[26, 1], [26, 2]],
      "Asian (1) Child <18": [[27, 1], [27, 2]],
      "Native American (1) Child <18": [[28, 1], [28, 2]],
      "Pacific Islander(1) Child <18": [[29, 1], [29, 2]],
      "Multi-Racial (1) (3) Child <18": [[30, 1], [30, 2]],
      "Unable to Determine/Declined Child <18": [[31, 1], [31, 2]],
      "Missing Child <18": [[32, 1], [32, 2]]
    },
    "Total": {
      "Total Consumers Child": [[33, 1], [33, 2]]
    },
    "DCF Youth ≥18 Consumers ": {
      "DCF White Youth ≥18": [[24, 3], [24, 4]],
      "DCF Hispanic/LatinoYouth ≥18": [[25, 3], [25, 4]],
      "DCF Black Youth ≥18": [[26, 3], [26, 4]],
      "DCF Asian Youth ≥18": [[27, 3], [27, 4]],
      "DCF Native American Youth ≥18": [[28, 3], [28, 4]],
      "DCF Youth Pacific Islander ≥18": [[29, 3], [29, 4]],
      "DCF Multi-Racial Youth ≥18": [[30, 3], [30, 4]],
      "DCF Race Unable to Determine Youth ≥18": [[31, 3], [31, 4]],
      "DCF Race Missing Youth ≥18": [[32, 3], [32, 4]]
    },
    "Total Consumers Youth": [[33, 3], [33, 4]],
    "DCF Adult Consumers ": {
      "White (1) Adults": [[24, 5], [24, 6]],
      "Hispanic/Latino/Latina (2) Adults": [[25, 5], [25, 6]],
      "Black (1) Adults": [[26, 5], [26, 6]],
      "Asian (1) Adults": [[27, 5], [27, 6]],
      "Native American (1) Adults": [[28, 5], [28, 6]],
      "Pacific Islander(1) Adults": [[29, 5], [29, 6]],
      "Multi-Racial (1) (3) Adults": [[30, 5], [30, 6]],
      "Unable to Determine/Declined Adults": [[31, 5], [31, 6]],
      "Missing Adults": [[32, 5], [32, 6]]
    },
    "Total Consumers Adults": [[33, 5], [33, 6]]
  },
  "All DCF Consumers (Primary Language)": {
    "DCF Child Consumers ": {
      "Spanish Child <18": [[24, 9], [24, 10]],
      "Khmer (Cambodian) Child <18": [[25, 9], [25, 10]],
      "Portuguese Child <18": [[26, 9], [26, 10]],
      "Haitian Creole Child <18": [[27, 9], [27, 10]],
      "Cape Verdean Creole Child <18": [[28, 9], [28, 10]],
      "Vietnamese Child <18": [[29, 9], [29, 10]],
      "Chinese Child <18": [[30, 9], [30, 10]],
      "Lao Child <18": [[31, 9], [31, 10]],
      "American Sign Language Child <18": [[32, 9], [32, 10]],
      "Other Child <18": [[33, 9], [33, 10]],
      "English/Unspecified Child <18": [[34, 9], [34, 10]]
    },
    "Total Consumer Children": [[35, 9], [35, 10]],
    "DCF Youth ≥ 18 Consumers ": {
      "All DCF Spanish Youth ≥ 18": [[24, 11], [24, 12]],
      "All DCF Khmer Youth ≥18": [[25, 11], [25, 12]],
      "All DCF Portuguese Youth ≥18": [[26, 11], [26, 12]],
      "All DCF Haitian Creole Youth ≥18": [[27, 11], [27, 12]],
      "All DCF Cape Verdean Creole Youth ≥18": [[28, 11], [28, 12]],
      "All DCF Vietnamese Youth ≥18": [[29, 11], [29, 12]],
      "All DCF Chinese Youth ≥18": [[30, 11], [30, 12]],
      "All DCF Lao Youth ≥18": [[31, 11], [31, 12]],
      "All DCF American Sign Language Youth ≥18": [[32, 11], [32, 12]],
      "All DCF Other (language) youth ≥ 18": [[33, 11], [33, 12]],
      "All DCF English/Unspecified Youth ≥ 18": [[34, 11], [34, 12]],
    },
    "All DCF Consumers Youth": [[35, 11], [35, 11]],
    "DCF Adult Consumers ": {
      "Spanish Adults": [[24, 13], [24, 14]],
      "Khmer (Cambodian) Adults": [[25, 13], [25, 14]],
      "Portuguese Adults": [[26, 13], [26, 14]],
      "Haitian Creole Adults": [[27, 13], [27, 14]],
      "Cape Verdean Creole Adults": [[28, 13], [28, 14]],
      "Vietnamese Adults": [[29, 13], [29, 14]],
      "Chinese Adults": [[30, 13], [30, 14]],
      "Lao Adults": [[31, 13], [31, 14]],
      "American Sign Language Adults": [[32, 13], [32, 14]],
      "Other (lang) Adults": [[33, 13], [33, 14]],
      "English/Unspecified Adults": [[34, 13], [34, 14]],
    },
    "Total Consumers Adults": [[35, 13], [35, 14]]
  },
  "Children (<18) In-Placement": {
    "Most Recent Intake ": {
      "Child (<18) in Placement Protective": [[37, 3], [37, 4]],
      "Child (<18) in Placement Alternative Response": [[38, 3], [38, 4]],
      "Child(<18) in Placement Voluntary Request": [[39, 3], [39, 4]],
      "Child (<18) in Placement CRA Referral (Children Requiring Assistance)": [[40, 3], [40, 4]],
      "Child (<18) in Placement Court Referral": [[41, 3], [41, 4]],
      "Child (<18) in Placement Other/Unspecified (intake)": [[42, 3], [42, 4]],
    },
    "Total": {
      "Total Children (<18) In-Placement": [[43, 3], [43, 4]]
    },
    "Placement Type ": {
      "Foster Care - Kinship Child (<18)": [[46, 3], [46, 4]],
      "Foster Care - Child-Specific Child (<18)": [[47, 3], [47, 4]],
      "Foster Care - Unrestricted Child (<18)": [[48, 3], [48, 4]],
      "Foster Care - Pre-adoptive Child (<18)": [[49, 3], [49, 4]],
      "Foster Care - Independent Living Child (<18)": [[50, 3], [50, 4]],
      "Foster Care - IFC (Contracted) Child (<18)": [[51, 3], [51, 4]],
      "Congregate Care - Group Home Child (<18)": [[52, 3], [52, 4]],
      "Congregate Care - Continuum Child (<18)": [[53, 3], [53, 4]],
      "Congregate Care - Residential Child (<18)": [[54, 3], [54, 4]],
      "Congregate Care - STARR (short-term residential) Child (<18)": [[55, 3], [55, 4]],
      "Congregate Care - Teen Parenting Child (<18)": [[56, 3], [56, 4]],
      "Non-Referral Location Child (<18)": [[57, 3], [57, 4]],
      "Missing/Absent from Approved Placement Child (<18)": [[58, 3], [58, 4]]
    },
    "Total Children (<18) In-Placement [1]": [[49, 11], [49, 12]],
    "Race": {
      "Placement White Child (<18)": [[62, 3], [62, 4]],
      "Placement Hispanic/Latino Child (<18)": [[63, 3], [63, 4]],
      "Placement Black Child (<18)": [[64, 3], [64, 4]],
      "Placement Asian Child (<18)": [[65, 3], [65, 4]],
      "Placement Native American Child (<18)": [[66, 3], [66, 4]],
      "Placement Pacific Islander Child (<18)": [[67, 3], [67, 4]],
      "Placement Multi-Racial Child (<18)": [[69, 3], [69, 4]],
      "Placement Unable to Determine (race) Child (<18)": [[70, 3], [70, 4]],
      "Child (<18) Placement Race Missing": [[71, 3], [71, 4]],
    },
    "Total Children (<18) In-Placement [2]": [[49, 11], [49, 12]],
    "Age": {
      "Placement 0 - 2 Years Old": [[37, 8], [37, 8]],
      "Placement 3 - 5 Years Old": [[38, 8], [38, 8]],
      "Placement 6 - 11 Years Old": [[39, 8], [39, 8]],
      "Placement 12 - 17 Years Old": [[40, 8], [40, 8]],
      "Placement Unspecified (<18)": [[41, 8], [41, 8]],
    },
    "Total Children (<18) In-Placement [3]": [[49, 11], [49, 12]],
    "Birth Sex": {
      "Placement Female Child <18": [[45, 11], [45, 12]],
      "Placement Male Child >18": [[46, 11], [46, 12]],
      "Placement Intersex Child <18": [[47, 11], [47, 12]],
      "Placement Missing Child (<18)": [[48, 11], [48, 12]]
    },
    "Total Children (<18) In-Placement [4]": [[49, 11], [49, 12]],
    "Continuous Time in Placement": {
      "Placement .5 Years or Less Child <18": [[52, 11], [52, 12]],
      "Placement >.5 Years - 1 Year Child <18": [[53, 11], [53, 12]],
      "Placement >1 Year - 2 Years Child <18": [[54, 11], [54, 12]],
      "Placement >2 Years - 4 Years Child <18": [[55, 11], [55, 12]],
      "Placement >4 Years Child <18": [[56, 11], [56, 12]]
    },
    "Total Children (<18) In-Placement [5]": [[49, 11], [49, 12]],
    "Permanency Plan": {
      "Family Reunification (goal) Child <18": [[59, 11], [59, 12]],
      "Adoption (goal) Child <18": [[60, 11], [60, 12]],
      "Guardianship (goal) Child <18": [[61, 11], [61, 12]],
      "APPLA (1) (goal) Child <18": [[62, 11], [62, 12]],
      "Stabilize Intact Family (goal) Child <18": [[63, 11], [63, 12]],
      "Permanent Care with Kin (goal) Child <18": [[64, 11], [64, 12]],
      "Unspecified as of run-date (goal) Child < 18": [[65, 11], [65, 12]]
    },
    "Total Children (<18) In-Placement [6]": [[49, 11], [49, 12]],
    "688 & Interim Placement Policy ": {
      "688 In-Placement (subset of In-Placement Count) Child <18": [[70, 11]],
      "Interim Placement Policy Program (statewide counts) Child< 18": [[71, 11]],
      "Total Children In-Placement 688 and Interim Placement": [[72, 11]]
    }
  },
  "Children (<18) Not In-Placement": {
    "Most Recent Intake": {
      "Non- Placement Protective Child <18": [[74, 3], [74, 4]],
      "Non- Placement Alternative Response Child <18": [[75, 3], [75, 4]],
      "Non- Placement Voluntary Request Child <18": [[76, 3], [76, 4]],
      "Non- Placement CRA Referral (Children Requiring Assistance) Child <18": [[77, 3], [77, 4]],
      "Non- Placement Court Referral Child <18": [[78, 3], [78, 4]],
      "Non- Placement Other/Unspecified (intake) Child <18": [[79, 3], [79, 4]]
    },
    "Total ": {
      "Total Children (<18) Not In-Placement": [[80, 3], [80, 4]]
    },
    "Race": {
      "Not In-Placement White Child (<18)": [[82, 3], [82, 4]],
      "Not In-Placement Hispanic/Latino Child (<18)": [[83, 3], [83, 4]],
      "Not In-Placement Black Child(<18)": [[84, 3], [84, 4]],
      "Not-Placement Asian Child (<18)": [[85, 3], [85, 4]],
      "Not In-Placement Native American Child (<18)": [[86, 3], [86, 4]],
      "Not In-Placement Pacific Islander Child(<18)": [[87, 3], [87, 4]],
      "Not In-Placement Multi-Racial Child (<18)": [[88, 3], [88, 4]],
      "Not In-Placement Unable to Determine (race) Child (<18)": [[89, 3], [89, 4]],
      "Not In-Placement Race Missing Child <18": [[90, 3], [90, 4]]
    },
    "Total Children (<18) Not In-Placement [2]": [[80, 3], [80, 4]],
    "688 Not In-Placement ": {
      "688 Not In-Placement Child": [[95, 3]]
    },
    "Age": {
      "Non-Placement 0 - 2 Years Old": [[74, 8], [74, 9]],
      "Non-Placement 3 - 5 Years Old": [[75, 8], [75, 9]],
      "Non-Placement 6 - 11 Years Old": [[76, 8], [76, 9]],
      "Non-Placement 12 - 17 Years Old": [[77, 8], [77, 9]],
      "Non-Placement Unspecified (age)": [[78, 8], [78, 9]]
    },
    "Total Children (<18) Not In-Placement [3]": [[80, 3], [80, 4]],
    "Birth Sex": {
      "Not In-Placement Female Child <18": [[81, 11], [81, 12]],
      "Not In-Placement Male Child <18": [[82, 11], [82, 12]],
      "Not In-Placement Intersex Child <18": [[83, 11], [83, 12]],
      "Not In-Placement Missing (birthsex) Child <18": [[84, 11], [84, 12]]
    },
    "Total Children (<18) Not In-Placement [4]": [[80, 3], [80, 4]],
    "Permanency Plan": {
      "Not In-Placement Family Reunification (goal) Child <18": [[88, 11], [88, 12]],
      "Not In-Placement Adoption (goal) Child <18": [[89, 11], [89, 12]],
      "Not In-Placement Guardianship (goal) Child <18": [[90, 11], [90, 12]],
      "Not In- Placement APPLA (1) (goal) Child <18": [[91, 11], [91, 12]],
      "Not In-Placement Stabilize Intact Family (goal) Child <18": [[92, 11], [92, 12]],
      "Not In-Placement Permanent Care with Kin (goal) Child <18": [[93, 11], [93, 12]],
      "Not In-Placement Unspecified as of run-date (goal) Child <18": [[94, 11], [94, 12]]
    },
    "Total Children (<18) Not In-Placement [5]": [[80, 3], [80, 4]],
  },
  "Youth (≥18) In-Placement": {
    "Most Recent Intake ": {
      "Youth (≥18) in Placement Protective": [[37, 5], [37, 6]],
      "Youth (≥18) in Placement Alternative Response": [[38, 5], [38, 6]],
      "Youth (≥18) in Placement Voluntary Request": [[39, 5], [39, 6]],
      "Youth (≥18) in Placement CRA Referral (Children Requiring Assistance)": [[40, 5], [40, 6]],
      "Youth (≥18) in Placement Court Referral": [[41, 5], [41, 6]],
      "Youth (≥18) in Placement Other/Unspecified": [[42, 5], [42, 6]]
    },
    "Total": {
      "Total Youth (≥18)In-Placement": [[43, 5], [43, 6]],
    },
    "Placement Type": {
      "Foster Care- Kinship Youth (≥18)": [[46, 5], [46, 6]],
      "Foster Care Child-Specific Youth (≥18)": [[47, 5], [47, 6]],
      "Foster Care Unrestricted Youth (≥18)": [[48, 5], [48, 6]],
      "Foster Care- Pre-adoptive Youth (≥18)": [[49, 5], [49, 6]],
      "Foster Care- Independent Living Youth (≥18)": [[50, 5], [50, 6]],
      "Foster Care -IFC Youth (≥18)": [[51, 5], [51, 6]],
      "Congregate Care - Group Home Youth (≥18)": [[52, 5], [52, 6]],
      "Congregate Care- Continuum Youth (≥18)": [[53, 5], [53, 6]],
      "Congregate Care- Residential Youth (≥18)": [[54, 5], [54, 6]],
      "Congregate Care-STARR (short-term residential) Youth (≥18)": [[55, 5], [55, 6]],
      "Congregate Care - Teen Parenting Youth (≥18)": [[56, 5], [56, 6]],
      "Non-Referral Location Youth (≥18)": [[57, 5], [57, 6]],
      "Missing/Absent from Approved Placement Youth (≥18)": [[58, 5], [58, 6]]
    },
    "Total Youth (≥18)In-Placement [2]": [[43, 5], [43, 6]],
    "Race": {
      "Placement White Youth (≥18)": [[62, 5], [62, 6]],
      "Placement Hispanic/Latino Youth (≥18)": [[63, 5], [63, 6]],
      "Placement Black Youth (≥18)": [[64, 5], [64, 6]],
      "Placement Asian Youth (≥18)": [[65, 5], [65, 6]],
      "Placement Native American Youth (≥18)": [[66, 5], [66, 6]],
      "Placement Pacific Islander Youth (≥18)": [[67, 5], [67, 6]],
      "Placement Multi-Racial Youth (≥18)": [[68, 5], [68, 6]],
      "Placement Unable to Determine (race) Youth (≥18)": [[69, 5], [69, 6]],
      "Placement Missing (race) Youth (≥18)": [[70, 5], [70, 6]]
    },
    "Total Youth (≥18)In-Placement [3]": [[43, 5], [43, 6]],
    "Age": {
      "Placement 18 - 19 Years Old": [[37, 13], [37, 14]],
      "Placement 20 - 21 Years Old": [[38, 13], [38, 14]],
      "Placement 22 - 23 Years Old": [[39, 13], [39, 14]],
      "Placement 24 and Older": [[40, 13], [40, 14]]
    },
    "Total Youth (≥18)In-Placement [4]": [[43, 5], [43, 6]],
    "Birth Sex ": {
      "Placement Female Youth ≥18": [[45, 13], [45, 14]],
      "Placement Male Youth ≥18": [[46, 13], [46, 14]],
      "Placement Intersex Youth ≥18": [[47, 13], [47, 14]],
      "Missing Sex Youth": [[48, 13], [48, 14]]
    },
    "Total Youth (≥18)In-Placement [5]": [[43, 5], [43, 6]],
    "Continuous Time In-Placement": {
      "Placement .5 Years or Less Youth ≥18": [[52, 13], [52, 14]],
      "Placement >.5 Years - 1 Year Youth ≥18": [[53, 13], [53, 14]],
      "Placement >1 year-2 Years Youth ≥18": [[54, 13], [54, 14]],
      "Placement >2 Years- 4 Years Youth ≥18": [[55, 13], [55, 14]],
      "Placement >4 Years Youth ≥ 18": [[56, 13], [56, 14]]
    },
    "Total Youth (≥18)In-Placement [6]": [[43, 5], [43, 6]],
    "Permanency Plan ": {
      "Family Reunification Youth ≥ 18": [[59, 13], [59, 14]],
      "Adoption Youth ≥18": [[60, 13], [60, 14]],
      "Guardianship Youth ≥18": [[61, 13], [61, 14]],
      "APPLA Youth ≥18": [[62, 13], [62, 14]],
      "Stabilize Intact Family Youth ≥ 18": [[63, 13], [63, 14]],
      "Permanent Care with Kin Youth ≥18": [[64, 13], [64, 14]],
      "Unspecified as of run-date Youth ≥18": [[65, 13], [65, 14]]
    },
    "Total Youth (≥18)In-Placement [7]": [[43, 5], [43, 6]],
    "688 & Interim Placement Policy ": {
      "688 In-Placement (subset of In-Placement Count) Youth ≥18": [[70, 13]],
      "Interim Placement Policy Program (statewide counts) Youth≥18": [[71, 13]],
      "Total Youth ≥18 In-Placement 688 and Interim Placement": [[72, 13]]
    }
  },
  "Youth (≥18) Not In-Placement": {
    "Most Recent Intake ": {
      "Non-Placement Protective Youth (≥18)": [[74, 5], [74, 6]],
      "Non-Placement Alternative Response Youth (≥18)": [[75, 5], [75, 6]],
      "Non-Placement Voluntary Request Youth (≥18)": [[76, 5], [76, 6]],
      "Non-Placement CRA Referral (Children Requiring Assistance) Youth(≥18)": [[77, 5], [77, 6]],
      "Non-Placement Court Referral Youth (≥18)": [[78, 5], [78, 6]],
      "Non-Placement Other/Unspecified (intake) Youth (≥18)": [[79, 5], [79, 6]]
    },
    "Total": {
      "Total Youth (≥18) Not In-Placement": [[80, 5], [80, 6]],
    },
    "Race ": {
      "Not In-Placement White Youth (≥18)": [[82, 5], [82, 6]],
      "Not In-Placement Hispanic/Latino Youth (≥18)": [[83, 5], [83, 6]],
      "Not In-Placement Black Youth (≥18)": [[84, 5], [84, 6]],
      "Not In-Placement Asian Youth (≥18)": [[85, 5], [85, 6]],
      "Not In-Placement Native American Youth (≥18)": [[86, 5], [86, 6]],
      "Not In-Placement Pacific Islander Youth (≥18)": [[87, 5], [87, 6]],
      "Not In- Placement Multi-Racial Youth (≥18)": [[88, 5], [88, 6]],
      "Not In-Placement Unable to Determine (race) Youth (≥18)": [[89, 5], [89, 6]],
      "Not In-Placement Race Missing Youth": [[90, 5], [90, 6]]
    },
    "Total Youth (≥18) Not In-Placement [2]": [[80, 5], [80, 6]],
    "688 Not In-Placement Youth": [[95, 5]],
    "Age": {
      "Not In-Placement 18 - 19 Years Old": [[79, 13], [79, 14]],
      "Not In-Placement 20 - 21 Years Old": [[80, 13], [80, 14]],
      "Not In-Placement 22 - 23 Years Old": [[81, 13], [81, 14]],
      "Not In-Placement 24 and Older": [[82, 13], [82, 14]]
    },
    "Total Youth (≥18) Not In-Placement [3]": [[80, 5], [80, 6]],
    "Birthsex": {
      "Not In-Placement Female Youth ≥18": [[81, 13], [81, 14]],
      "Not In-Placement Male Youth ≥18": [[82, 13], [82, 14]],
      "Not In-Placement Intersex Youth ≥18": [[83, 13], [83, 14]],
      "Not In-Placement Missing (birthsex) Youth ≥18": [[84, 13], [84, 14]]
    },
    "Total Youth (≥18) Not In-Placement [4]": [[80, 5], [80, 6]],
    "Permanency Plan ": {
      "Not In-Placement Family Reunification Youth ≥ 18": [[88, 13], [88, 14]],
      "Not In-Placement Adoption Youth ≥18": [[89, 13], [89, 14]],
      "Not In-Placement Guardianship Youth ≥18": [[90, 13], [90, 14]],
      "Not In-Placement APPLA Youth ≥18": [[91, 13], [91, 14]],
      "Not In-Placement Stabilize Intact Family Youth ≥ 18": [[92, 13], [92, 14]],
      "Not In-Placement Permanent Care with Kin Youth ≥18": [[93, 13], [93, 14]],
      "Not In-Placement Unspecified as of run-date Youth ≥18": [[94, 13], [94, 14]]
    },
    "Total Youth (≥18) Not In-Placement [5]": [[80, 5], [80, 6]],
  }
}