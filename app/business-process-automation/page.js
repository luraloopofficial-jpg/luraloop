import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout 
      title={"Business Process Automation"}
      definition={"Next-generation RPA (Robotic Process Automation) supercharged by visual intelligence and semantic understanding."}
      whatItDoes={[
  {
    "title": "Document Intelligence",
    "desc": "Extracts and structuralizes data from highly messy, unstructured physical documents or PDFs."
  },
  {
    "title": "Visual UI Interaction",
    "desc": "Agents physically navigate legacy software interfaces where traditional APIs do not exist."
  },
  {
    "title": "Exception Handling",
    "desc": "Automatically escalates edge-case errors to human operators with full contextual summaries."
  }
]}
      whereItFits={"Directly replaces fragile, rules-based RPA scripts (like UiPath or Automation Anywhere) with resilient, self-healing cognitive loops."}
      systems={["Legacy Mainframes","SAP / Oracle ERP","Zendesk / Jira"]}
      deliveryModel={"Consulting firms can package this as \"Cognitive Transformation\" services, delivering massive immediate ROI to traditional clients."}
      security={"All visual processing happens in an isolated, stateless environment. Screenshots are purged instantly post-processing."}
      ctaText={"Automate Legacy Systems"}
    />
  )
}