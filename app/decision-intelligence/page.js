import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout 
      title={"Decision Intelligence"}
      definition={"Predictive forecasting and strategic optimization engines powered by real-time quantitative and qualitative analysis."}
      whatItDoes={[
  {
    "title": "Predictive Modeling",
    "desc": "Identifies micro-trends in live market data before they reach statistical significance."
  },
  {
    "title": "Risk Assessment",
    "desc": "Simulates thousands of strategic execution paths to calculate failure probabilities."
  },
  {
    "title": "Automated Reporting",
    "desc": "Generates board-ready executive summaries with embedded interactive data visualizations."
  }
]}
      whereItFits={"Operates as a continuous background analyst for C-suite executives, financial analysts, and strategic planning departments."}
      systems={["Bloomberg Terminal Data","Enterprise Data Lakes","Tableau / PowerBI"]}
      deliveryModel={"Financial consultancies and strategic advisories can embed this intelligence directly into their ongoing retainer services."}
      security={"SOC-2 certified encryption secures all proprietary financial algorithms and competitive market models."}
      ctaText={"Engage Strategic AI"}
    />
  )
}