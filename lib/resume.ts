export const profile = {
  name: 'Serena Lie',
  title: 'Youth Wellness Advocate',
  school: 'University of California, Santa Cruz',
  phone: '(909) 660-1483',
  phoneHref: 'tel:+19096601483',
  email: 'serena.lie64@gmail.com',
  about:
    'An organized team worker with years of experience collaborating and leading. Known for creative solutions and problem-solving skills — an expert communicator and a fast learner.',
}

export type Experience = {
  role: string
  organization?: string
  term: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Department of Children and Youth Accountability Board',
    term: 'Present',
    points: [
      'Oversee funds generated from Measure Y.',
      'Ensure children’s best interests are prioritized.',
    ],
  },
  {
    role: 'Superintendent’s Student Advisory Council',
    organization: '4 years of service',
    term: '2022 — May 2026',
    points: [
      'Served the community through conflict resolution for Upland Unified and Pomona Unified School Districts.',
      'Advocate for student voice and experience on campus.',
      'Suggested vape detectors in the Upland Unified School District, reducing teen vape use in bathrooms by 30–40%.',
    ],
  },
  {
    role: 'District Office Intern',
    organization: 'State Assemblymember Michelle Rodriguez',
    term: 'July — August 2025',
    points: [
      'Organized files, answered phones, entered data into LCMS, and handled miscellaneous tasks to help the office run smoothly and efficiently.',
      'Connected constituents with resources they were previously unaware of.',
    ],
  },
  {
    role: 'Community Service',
    organization: 'Pomona Youth Programs',
    term: '2024 — June 2026',
    points: [
      'Organize events created to bring the community together.',
      'Facilitate games and activities to maintain safety.',
    ],
  },
  {
    role: 'Peer Counseling',
    term: '2024 — May 2026',
    points: [
      'Mitigate conflict between or within teens.',
      'Inform peers of healthy coping mechanisms.',
    ],
  },
]

export const softSkills = ['Leadership', 'Co-operation', 'Communication', 'Problem-solving']

export const hardSkills = [
  'Advocacy',
  'Microsoft Word & Excel',
  'CPR / First Aid / AED Certified',
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Chinese', level: 'Conversational' },
  { name: 'Spanish', level: 'Conversational' },
]

export const education = [
  {
    school: 'UC Santa Cruz',
    detail: 'B.S. Biomolecular Engineering & Bioinformatics',
    year: 'Class of 2030',
  },
  {
    school: 'Diamond Ranch High School',
    detail: 'High School Diploma',
    year: 'Class of 2026',
  },
]
