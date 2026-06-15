import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // We use Promise.allSettled to fetch both marketplace endpoints simultaneously
    // safely handling failures on either side without crashing the entire request.
    const [gumroadRes, awRes] = await Promise.allSettled([
      // Mock fetch to Gumroad API using secure environment variables
      fetch('https://api.gumroad.com/v2/products', {
        headers: {
          'Authorization': `Bearer ${process.env.GUMROAD_ACCESS_TOKEN || ''}`,
          'Content-Type': 'application/json'
        }
      }).catch(() => null),
      
      // Mock fetch to AutomationWorkflows API using secure environment variables
      fetch('https://api.automationworkflows.io/v1/seller/luraloop/products', {
        headers: {
          'Authorization': `Bearer ${process.env.AUTOMATION_WORKFLOWS_TOKEN || ''}`,
          'Content-Type': 'application/json'
        }
      }).catch(() => null)
    ])

    let activeProducts = []

    // Simulate parsing the responses. Since we don't have real live tokens locally,
    // we will conditionally return mock products if tokens exist, otherwise empty array
    // to trigger the Zero Active Products fallback condition.
    
    // For local testing: if we want to simulate Condition A, we uncomment the mock push.
    // For now, we simulate what happens if the API successfully returns templates.
    // Replace this logic with actual `await gumroadRes.value.json()` in production.
    
    const isMockDataEnabled = process.env.NODE_ENV === 'development' && process.env.MOCK_MARKETPLACE_DATA === 'true'

    if (isMockDataEnabled) {
      activeProducts = [
        {
          id: 'g1',
          name: 'WhatsApp Lead Sync Template',
          platform: 'Gumroad',
          description: 'Instantly sync Facebook leads to WhatsApp.',
          url: 'https://luraloop.gumroad.com/l/whatsapp-sync'
        },
        {
          id: 'a1',
          name: 'Automated Invoicing Flow',
          platform: 'AutomationWorkflows',
          description: 'Auto-generate PDF receipts from Stripe.',
          url: 'https://automationworkflows.io/seller/luraloop/invoice-flow'
        }
      ]
    }

    // You can parse actual valid responses here:
    // if (gumroadRes.status === 'fulfilled' && gumroadRes.value?.ok) {
    //   const data = await gumroadRes.value.json()
    //   activeProducts.push(...data.products)
    // }

    return NextResponse.json({ success: true, products: activeProducts })

  } catch (error) {
    console.error('[Marketplace API] Error fetching products:', error)
    // Return empty array on catastrophic failure to trigger fallback safely
    return NextResponse.json({ success: false, products: [] }, { status: 500 })
  }
}
