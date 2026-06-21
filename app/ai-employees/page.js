import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout
      title="AI Employees"
      definition="Deploy role-specific AI agents that handle enquiries, scheduling, routing, coordination, and repetitive operational tasks across customer-facing and internal workflows."
      capabilities={[
        { title: 'Front-Office & Support Automation', desc: 'Handle inbound queries, appointment scheduling, and ticket resolution autonomously across all customer-facing channels.' },
        { title: 'Role-Based Task Execution', desc: 'Assign specific operational roles to AI agents — receptionist, coordinator, support analyst — each trained on domain-specific protocols.' },
        { title: 'WhatsApp, Portal, Voice & Web Workflows', desc: 'Deploy agents across WhatsApp Business API, client portals, IVR voice systems, and embedded web chat interfaces simultaneously.' }
      ]}
      systemsConnected={[
        'CRM platforms (Salesforce, HubSpot, Zoho)',
        'Messaging APIs (WhatsApp Business, Twilio, SendGrid)',
        'Internal database layers and knowledge bases'
      ]}
      deliveryModel="Partners white-label AI Employees as managed digital workforce solutions under their own brand identity. Per-seat or per-department licensing models with full margin control."
      security="All conversational context is processed ephemerally. Institutional IP and employee interactions are never stored or used for model training. Zero data retention by default."
      ctaText="Explore AI Employees"
    />
  )
}