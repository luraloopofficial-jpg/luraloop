import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout 
      title={"AI Employees & Autonomous Staffing"}
      definition={"Deploy highly-specialized digital workers designed to operate dynamically alongside human staff, executing cognitive tasks with zero latency."}
      whatItDoes={[
  {
    "title": "Task Delegation",
    "desc": "Accepts unstructured verbal or text-based tasks and converts them into structured execution paths."
  },
  {
    "title": "Contextual Memory",
    "desc": "Retains deep historical context of organizational workflows and client preferences."
  },
  {
    "title": "Decision Reasoning",
    "desc": "Employs multi-step logical reasoning to solve complex edge cases without human intervention."
  }
]}
      whereItFits={"AI Employees sit securely behind your firewall, acting as a direct extension of your internal teams. They integrate directly into Slack, Teams, and email clients."}
      systems={["Slack / Microsoft Teams","Google Workspace","Salesforce / HubSpot"]}
      deliveryModel={"Partners can white-label AI Employees as native \"Digital Assistants\" for their clients, charging per-seat licensing models with complete margin control."}
      security={"All conversational context is processed ephemerally. Institutional IP and employee interactions are never used for frontier model training."}
      ctaText={"Deploy Digital Workers"}
    />
  )
}