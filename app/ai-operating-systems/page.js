import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout 
      title={"Enterprise AI Operating Systems"}
      definition={"A centralized cognitive orchestration layer that unifies all disparate enterprise tools into a single, chat-driven intelligence hub."}
      whatItDoes={[
  {
    "title": "Unified Data Layer",
    "desc": "Ingests and vectorizes data from across the entire corporate stack into a singular knowledge graph."
  },
  {
    "title": "Natural Language Interface",
    "desc": "Allows executives and staff to query databases and trigger actions using conversational language."
  },
  {
    "title": "Dynamic UI Generation",
    "desc": "Spawns custom dashboard views and charts purely based on real-time user intent."
  }
]}
      whereItFits={"Replaces scattered dashboards and rigid software interfaces with a fluid, intention-based intelligence system that adapts to user roles."}
      systems={["Snowflake / Databricks","Internal APIs","Active Directory / Okta"]}
      deliveryModel={"System Integrators can deploy our core OS as their own proprietary enterprise solution, applying custom UI skins and tailored data connectors."}
      security={"Strict RBAC (Role-Based Access Control) ensures users only interact with data their organizational tier is authorized to view."}
      ctaText={"Build Your Custom OS"}
    />
  )
}