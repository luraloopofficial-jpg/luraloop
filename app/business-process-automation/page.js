import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout
      title="Business Process Automation"
      definition="Automate recurring operational processes across departments using event-driven workflows, rules-based actions, and integration-ready execution layers."
      capabilities={[
        { title: 'Cross-System Workflow Automation', desc: 'Connect disparate enterprise systems into unified automated pipelines — triggering actions in one platform based on events in another, without manual intervention.' },
        { title: 'Repeatable Enterprise Process Design', desc: 'Define, version, and deploy standardized operational workflows that can be replicated across clients, departments, and geographies with consistent execution.' },
        { title: 'Faster Execution with Reduced Manual Load', desc: 'Eliminate bottlenecks in approval chains, data entry, and reporting cycles by replacing human-dependent steps with deterministic automated logic.' }
      ]}
      systemsConnected={[
        'ERP triggers and event hooks (SAP, Oracle, NetSuite)',
        'Cloud accounting nodes (Xero, QuickBooks, FreshBooks)',
        'Cross-department file structures and document management'
      ]}
      deliveryModel="Consulting firms and managed service providers package this as a Cognitive Transformation offering, delivering measurable ROI to enterprise clients through automated operational workflows."
      security="All process execution happens in isolated, stateless environments. Business logic and proprietary workflow configurations are encrypted at rest and in transit."
      ctaText="Explore Process Automation"
    />
  )
}