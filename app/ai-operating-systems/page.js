import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout
      title="AI Operating Layer"
      definition="Add an intelligent operational layer above existing client systems to coordinate workflows, trigger actions, and connect departments without replacing core software."
      capabilities={[
        { title: 'Works Above HMS, ERP, CRM & LMS Stacks', desc: 'Sits non-disruptively on top of existing enterprise systems, reading and writing through secure API bridges without architectural changes.' },
        { title: 'Non-Disruptive Integration Model', desc: 'Zero migration required. The operating layer wraps around legacy infrastructure, enhancing it with intelligence without replacing any core component.' },
        { title: 'Structured Control Across Enterprise Operations', desc: 'Provides a unified control plane for cross-departmental workflow visibility, task delegation, and real-time operational monitoring.' }
      ]}
      systemsConnected={[
        'Legacy HMS and hospital management platforms',
        'Core ERP instances (SAP, Oracle, NetSuite)',
        'Active CRM databases (Salesforce, Dynamics 365)'
      ]}
      deliveryModel="System integrators deploy the AI Operating Layer as a proprietary intelligence product under their own enterprise brand, with custom UI skins, tailored connectors, and client-specific configurations."
      security="Strict RBAC (Role-Based Access Control) ensures users only interact with data their organizational tier is authorized to view. All data flows are encrypted end-to-end."
      ctaText="Explore the Operating Layer"
    />
  )
}