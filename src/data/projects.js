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
    image: '/projects/project-1.svg',
    github: 'https://github.com/yourusername/sales-dashboard',
    demo: 'https://your-demo-link.com',
    highlights: ['40+ interactive visuals', 'Row-level security by region', 'Automated daily refresh'],
  },
  {
    id: 'retail-churn-analysis',
    title: 'Customer Churn Analysis',
    category: ['Python', 'SQL'],
    summary: 'Exploratory analysis and churn prediction on 50k+ retail customer records.',
    description: `Used Python (pandas, scikit-learn) to clean and explore a retail customer dataset,
    engineered features from transaction history, and built a baseline logistic regression model
    to flag at-risk customers, with SQL used for the initial data extraction and joins.`,
    tags: ['Python', 'Pandas', 'scikit-learn', 'SQL'],
    image: '/projects/project-2.svg',
    github: 'https://github.com/yourusername/churn-analysis',
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
    id: 'covid-trends-explorer',
    title: 'Public Health Trends Explorer',
    category: ['Python', 'SQL'],
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
