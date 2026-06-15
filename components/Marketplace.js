'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, ExternalLink, Shield } from 'lucide-react'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={11}
          className={i < Math.floor(rating) ? 'text-orange-400 fill-orange-400' : 'text-white/20'}
        />
      ))}
      <span className="text-white/50 text-xs ml-1">{rating}</span>
    </div>
  )
}

export default function Marketplace() {
  const [storeProducts, setStoreProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;
    const fetchMarketplace = async () => {
      try {
        const res = await fetch('/api/marketplace-products');
        const data = await res.json();
        let fetched = data?.products || [];

        // Inject Dev Mocks if empty on localhost
        if (fetched.length === 0 && process.env.NODE_ENV === 'development') {
          fetched = [
            {
              id: 'mock-1',
              name: 'Healthcare AI Workflow Template',
              desc: 'Ready-made healthcare automation node. Plug-and-play architecture.',
              platform: 'Gumroad',
              url: 'https://gumroad.com',
              icon: '🏥',
              price: 49,
              rating: 5.0,
              tag: 'Gumroad',
              tagColor: '#FF6B00'
            },
            {
              id: 'mock-2',
              name: 'E-commerce Automation Node',
              desc: 'Instantly sync and automate storefront operations.',
              platform: 'AutomationWorkflows',
              url: 'https://automationworkflows.io',
              icon: '🛒',
              price: 89,
              rating: 4.8,
              tag: 'AutomationWorkflows',
              tagColor: '#3B82F6'
            }
          ];
        }

        if (isMounted) {
          setStoreProducts(fetched);
          setLoading(false);
        }
      } catch (err) {
        console.error('[Marketplace Fetch Error]:', err);
        if (isMounted) {
          let fallback = [];
          if (process.env.NODE_ENV === 'development') {
            fallback = [
              {
                id: 'mock-1',
                name: 'Healthcare AI Workflow Template',
                desc: 'Ready-made healthcare automation node. Plug-and-play architecture.',
                platform: 'Gumroad',
                url: 'https://gumroad.com',
                icon: '🏥',
                price: 49,
                rating: 5.0,
                tag: 'Gumroad',
                tagColor: '#FF6B00'
              },
              {
                id: 'mock-2',
                name: 'E-commerce Automation Node',
                desc: 'Instantly sync and automate storefront operations.',
                platform: 'AutomationWorkflows',
                url: 'https://automationworkflows.io',
                icon: '🛒',
                price: 89,
                rating: 4.8,
                tag: 'AutomationWorkflows',
                tagColor: '#3B82F6'
              }
            ];
          }
          setStoreProducts(fallback);
          setLoading(false);
        }
      }
    };
    fetchMarketplace();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="marketplace" className="py-28 relative">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(255,107,0,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Explore Our Marketplace
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title max-w-lg"
            >
              Ready-To-Use <span className="gradient-text">AI Agents</span> &amp; Automation Templates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm mt-3 max-w-md"
            >
              Boost productivity with plug-and-play AI agents and automation templates built for your industry.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            id="browse-marketplace"
            className="btn-primary shrink-0 self-start"
          >
            Browse Marketplace <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Conditional Layout */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 rounded-full border-2 border-orange-500/20 border-t-orange-500 animate-spin mb-4" />
            <p className="text-white/40 text-sm">Synchronizing live marketplaces...</p>
          </div>
        ) : storeProducts && storeProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {storeProducts.map((product, i) => (
                <motion.div
                  key={product.id || i}
                  id={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer flex flex-col"
                >
                  {/* Card top */}
                  <div
                    className="p-6 relative"
                    style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.08) 0%, rgba(17,17,17,0.9) 100%)' }}
                  >
                    <div
                      className="absolute top-4 right-4 text-[9px] font-bold px-2 py-1 rounded-full"
                      style={{ background: `${product.tagColor}22`, color: product.tagColor, border: `1px solid ${product.tagColor}44` }}
                    >
                      {product.tag}
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {product.icon}
                    </div>
                    <h3 className="text-white font-semibold text-base leading-tight">{product.name}</h3>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1 gap-4 justify-between">
                    <div>
                      <p className="text-white/40 text-xs leading-relaxed mb-4">{product.desc}</p>
                      <StarRating rating={product.rating || 5.0} />
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-orange-500 font-bold text-xl">${product.price || 99}</span>
                        <span className="text-white/30 text-xs ml-1">/mo</span>
                      </div>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                        style={{ boxShadow: '0 0 15px rgba(255,107,0,0.3)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ShoppingCart size={11} />
                        Buy Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Marketplace badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="glass rounded-full px-5 py-2.5 flex items-center gap-3 text-xs text-white/40">
                <span>🔒</span>
                Verified Marketplace Partners
                <span className="text-white font-semibold">Gumroad &amp; AutomationWorkflows</span>
                <span className="text-white/20">·</span>
                Secure End-to-End Delivery
              </div>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-16 mb-6 rounded-3xl border border-orange-500/20 bg-[#0A0A0A]/80 backdrop-blur-md max-w-4xl mx-auto shadow-2xl">
            <Shield size={56} className="mx-auto text-orange-500 mb-6 opacity-90" />
            <h4 className="text-white font-bold text-2xl md:text-3xl mb-4">Custom Infrastructure Deployment — Engineered to Order</h4>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed px-4 mb-8">
              Contact our architecture unit to map a private node environment for your enterprise operations.
            </p>
            <a href="mailto:luraloop.official@gmail.com" className="btn-primary inline-flex items-center gap-2">
              Contact Architecture Unit <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
