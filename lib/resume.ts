export const profile = {
  name: 'Serena Lie',
  title: 'Youth Wellness Advocate',
  school: 'University of California, Santa Cruz',
  location: 'Pomona, California',
  phone: '(909) 660-1483',
  phoneHref: 'tel:+19096601483',
  email: 'serena.lie64@gmail.com',
  linkedin: 'linkedin.com/in/serena-lie-095a55373',
  linkedinHref: 'https://www.linkedin.com/in/serena-lie-095a55373',
  about:
    'An organized team worker with years of experience collaborating and leading. Known for creative solutions and problem-solving skills — an expert communicator and a fast learner.',
}

export type Experience = {
  role: string
  organization?: string
  location?: string
  term: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Department of Children and Youth Accountability Board',
    organization: 'City of Pomona',
    location: 'Pomona, CA',
    term: 'Present',
    points: [
      'Oversee funds generated from Measure Y.',
      'Ensure children’s best interests are prioritized.',
    ],
  },
  {
    role: 'Academic Senate Committee on Planning and Budget',
    organization: 'University of California, Santa Cruz',
    location: 'Santa Cruz, CA',
    term: 'Present',
    points: [],
  },
  {
    role: 'Superintendent’s Student Advisory Committee (SSAC)',
    organization: 'Pomona Unified School District',
    location: 'Pomona, CA',
    term: 'Oct 2024 — Present',
    points: [
      'Serve the community through conflict resolution for Pomona Unified School District.',
      'Advocate for student voice and experience on campus.',
    ],
  },
  {
    role: 'Miss Diamond Bar Princess',
    organization: 'Miss Diamond Bar Scholarship Pageant Inc.',
    location: 'Diamond Bar, CA',
    term: 'Mar 2025 — Present',
    points: [],
  },
  {
    role: 'Peer Counselor',
    organization: 'Diamond Ranch High School',
    location: 'Pomona, CA',
    term: 'Aug 2024 — Present',
    points: [
      'Mitigate conflict between or within teens.',
      'Inform peers of healthy coping mechanisms.',
    ],
  },
  {
    role: 'District Office Intern',
    organization: 'California State Assembly — Assemblymember Michelle Rodriguez',
    location: 'Chino, CA',
    term: 'Jul — Aug 2025',
    points: [
      'Organized files, answered phones, entered data into LCMS, and handled miscellaneous tasks to help the office run smoothly and efficiently.',
      'Connected constituents with resources they were previously unaware of.',
    ],
  },
  {
    role: 'Community Service',
    organization: 'Pomona Youth Programs',
    location: 'Pomona, CA',
    term: '2024 — June 2026',
    points: [
      'Organize events created to bring the community together.',
      'Facilitate games and activities to maintain safety.',
    ],
  },
  {
    role: 'Superintendent’s Student Advisory Council',
    organization: 'Upland Unified School District',
    location: 'Upland, CA',
    term: 'Oct 2022 — Jun 2024',
    points: [
      'Served the community through conflict resolution for Upland Unified School District.',
      'Suggested vape detectors in the district, reducing teen vape use in bathrooms by 30–40%.',
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
  { name: 'Chinese (Mandarin)', level: 'Conversational' },
  { name: 'Spanish', level: 'Conversational' },
]

export const education = [
  {
    school: 'University of California, Santa Cruz',
    detail: 'B.S. Biomolecular Engineering & Bioinformatics',
    year: 'Sep 2026 — Jun 2030',
  },
  {
    school: 'Diamond Ranch High School',
    detail: 'High School Diploma',
    year: '2024 — 2026',
  },
  {
    school: 'Dr. Loren Sanchez U’College Academy',
    detail: 'College preparatory program',
    year: 'Jun 2022 — Jul 2024',
  },
  {
    school: 'Chaffey College',
    detail: 'Dual enrollment coursework',
    year: 'Apr 2022 — Jul 2024',
  },
  {
    school: 'Upland High School',
    detail: 'High school coursework',
    year: 'Aug 2022 — Jun 2024',
  },
]
