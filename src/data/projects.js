export const projectFilters = ['All', 'Power BI', 'SQL', 'Python', 'Excel']

export const projects = [
  {
    id: 'sales-performance-dashboard',
    title: 'Sales Performance Dashboard',
    category: ['Power BI', 'SQL'],
    summary: 'Interactive Power BI dashboard tracking revenue, churn, and rep performance across regions.',
    description: `Designed an end-to-end reporting pipeline: raw CRM exports were cleaned and
    modeled in SQL, then visualized in Power BI with drill-through pages for regional managers.
    Reduced manual reporting effort from 6 hours/week to under 30 minutes.`,
    tags: ['Power BI', 'SQL', 'DAX', 'PostgreSQL'],
    image: 'dashboard.png',   // Replace with your actual image path
    github: 'https://github.com/AyushMahto/Swiggy-PowerBI-Dashboard',
    demo: '',
    highlights: ['40+ interactive visuals', 'Row-level security by region', 'Automated daily refresh'],
  },
  {
    id: 'smart-retail-connect',
    title: 'Smart Retail Connect',
    category: ['Full Stack', 'Web Development'],
    summary: 'A smart multi-vendor retail platform connecting buyers, sellers, and delivery partners with real-time product comparison and order management.',
    description: `Developed a full-stack retail platform that enables buyers to compare products from multiple vendors, sellers to manage inventory and quotations, and delivery partners to handle orders efficiently. Implemented secure authentication, real-time notifications, role-based access control, and location-based services to create a seamless shopping experience.`,
    tags: [ 'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
    'REST API',
    'Google Maps API'],
    image: 'grocery_match.png',
    github: 'https://github.com/AyushMahto/Smart_Retail_Connect',
    demo: '',
    highlights: ['78% model accuracy', 'Feature importance breakdown', 'Jupyter notebook walkthrough'],
  },
  {
    id: 'campus-survey-insights',
    title: 'Campus Survey Insights',
    category: ['Excel', 'Power BI'],
    summary: 'Analysis of 1,200+ student survey responses translated into an executive-ready report.',
    description: `Cleaned and coded open-ended survey responses in Excel, built pivot-based summaries,
    then created a Power BI report for faculty highlighting resource gaps by department and year.`,
    tags: ['Excel', 'Power BI', 'Survey Data'],
    image: '/projects/project-3.svg',
    github: 'https://github.com/yourusername/campus-survey',
    demo: '',
    highlights: ['1,200+ responses coded', 'Department-level breakdowns', 'Presented to faculty board'],
  },
  {
    id: 'AI Voice Assistant',
    title: 'AI Voice Assistant',
    category: ['Python', 'Ai/ML'],
    summary: 'A Python + SQL pipeline exploring public health datasets with automated visual reports.',
    description: `Built an ETL script in Python to pull, clean, and load open public-health datasets into
    a local SQL database, then generated a set of automated matplotlib/seaborn charts summarizing trends.`,
    tags: ['Python', 'SQL', 'Matplotlib', 'ETL'],
    image: '/projects/project-4.svg',
    github: 'https://github.com/yourusername/health-trends',
    demo: '',
    highlights: ['Automated ETL pipeline', 'Reusable chart templates', 'Scheduled refresh script'],
  },
]
