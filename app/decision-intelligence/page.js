import SegmentLayout from '@/components/SegmentLayout'

export default function Page() {
  return (
    <SegmentLayout
      title="Decision Intelligence"
      definition="Enable faster operational decisions using live workflow signals, AI-assisted recommendations, and structured escalation paths for business-critical actions."
      capabilities={[
        { title: 'Real-Time Workflow Visibility', desc: 'Surface live operational signals across all connected systems into a unified monitoring layer, providing instant awareness of bottlenecks and anomalies.' },
        { title: 'Intelligent Recommendations', desc: 'AI-driven analysis generates contextual suggestions for resource allocation, priority routing, and exception handling based on historical and real-time data.' },
        { title: 'Decision Support for High-Volume Operations', desc: 'Structured escalation paths and approval frameworks ensure business-critical actions are surfaced, validated, and executed with institutional-grade governance.' }
      ]}
      systemsConnected={[
        'Live telemetry channels and operational event streams',
        'Admin dashboards and executive reporting layers',
        'Business intelligence platforms (Tableau, PowerBI, Looker)'
      ]}
      deliveryModel="Strategic advisory firms and enterprise consultancies embed decision intelligence directly into ongoing client retainer services, delivering continuous operational value."
      security="SOC-2 certified encryption secures all proprietary analytical models and operational data. Decision audit trails are immutable and fully exportable for compliance review."
      ctaText="Explore Decision Intelligence"
    />
  )
}