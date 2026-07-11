import { useState, useRef, useEffect } from 'react'

const responses = {
  services: "We offer Cloud Migration, Managed Infrastructure, and Application Modernization — plus Professional Services like Advisory, Implementation, and Managed Support.",
  pricing: "Pricing depends on scope and infrastructure size. Share a few details via the contact form and our team will send a tailored quote.",
  contact: "You can reach us at info@resoftotechnologies.com or call +91 9606840076 (Head Office, Bengaluru).",
  location: "Head Office: WeWork Vaishnavi Signature, Outer Ring Road, Bellandur, Bengaluru. Branch Office: Hebbal Industrial Area, Mysore.",
  default: "Thanks for your message! For anything specific, please use the contact form above or reach us directly at info@resoftotechnologies.com.",
}

const quickReplies = [
  { label: 'Our Services', key: 'services' },
  { label: 'Pricing', key: 'pricing' },
  { label: 'Contact Info', key: 'contact' },
  { label: 'Office Location', key: 'location' },
]

function getReply(query) {
  const q = query.toLowerCase()
  if (q.includes('service')) return responses.services
  if (q.includes('price') || q.includes('cost') || q.includes('pricing')) return responses.pricing
  if (q.includes('contact') || q.includes('email') || q.includes('phone')) return responses.contact
  if (q.includes('location') || q.includes('office') || q.includes('address')) return responses.location
  return responses.default
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! 👋 I'm here to help. Ask me about our services, pricing, or how to get in touch — or tap a quick option below." },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { sender: 'user', text }])
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: getReply(text) }])
    }, 500)
  }

  const handleSend = () => {
    sendMessage(input)
    setInput('')
  }

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)} aria-label="Open chat assistant">
        <svg viewBox="0 0 24 24" fill="none" stroke="#04110D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div>
              <h4>ReSofto Assistant</h4>
              <span className="status">● Online</span>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div className={`msg ${m.sender}`} key={i}>{m.text}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-quick">
            {quickReplies.map((q) => (
              <button key={q.key} onClick={() => sendMessage(q.label)}>{q.label}</button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#04110D"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
