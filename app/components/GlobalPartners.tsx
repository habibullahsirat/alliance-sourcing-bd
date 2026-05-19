import {
  ArrowUpRight,
  MessageCircle,
  Shield,
  Clock3,
  Leaf,
  Plus,
} from "lucide-react";

export default function GlobalPartners() {
  const partners = [
    "FOREVER 21",
    "Buckle",
    "Beauty Fit",
    "FOREVER 21",
    "FOREVER 21",
    "FOREVER 21",
    "FOREVER 21",
    "FOREVER 21",
  ];

  const strengths = [
    {
      icon: <ArrowUpRight className="w-5 h-5 text-white" />,
      title: "Long-term collaboration approach",
      text: "Building lasting relationships that grow stronger with every collection",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      title: "Transparent communication",
      text: "Clear, honest dialogue at every stage of production",
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Strong quality control system",
      text: "Rigorous standards ensuring excellence in every garment",
    },
    {
      icon: <Clock3 className="w-5 h-5 text-white" />,
      title: "On-time delivery commitment",
      text: "Meeting deadlines consistently to keep your business running smoothly",
    },
    {
      icon: <Leaf className="w-5 h-5 text-white" />,
      title: "Ethical and sustainable sourcing",
      text: "Responsible practices that protect people and planet",
    },
  ];

  const faqs = [
    "What types of garments do you manufacture?",
    "What is your minimum order quantity (MOQ)?",
    "How long does production typically take?",
    "Do you offer sample production before bulk orders?",
    "What quality control measures do you have in place?",
    "Are your facilities certified for ethical and sustainable production?",
    "How do you handle shipping and logistics?",
    "What payment terms do you offer?",
  ];

  return (
    <main className="flex flex-col w-full bg-white">
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col justify-center items-center px-16 pt-36 pb-28 gap-12 w-full min-h-[594px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,102,194,0.8) 0%, rgba(0,0,0,0.8) 100%), url('../../../public/partners.jpg')",
        }}
      >
        <div className="flex flex-col items-center gap-2 text-center z-10">
          <p className="text-white/80 text-lg">
            Home &gt; <span className="font-semibold">Global Partners</span>
          </p>

          <h1 className="text-white text-6xl font-medium tracking-tight">
            Our Global Partners
          </h1>

          <p className="text-white text-xl leading-[30px] max-w-4xl">
            We connect global fashion brands with top Bangladeshi manufacturers,
            built on a decade of transparency and quality.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {[
            ["03+", "Regions"],
            ["40+", "Global Clients"],
            ["09+", "Years"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 min-w-[169px]"
            >
              <h2 className="text-white text-6xl font-bold leading-none">
                {number}
              </h2>
              <p className="text-white text-xl">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="flex flex-col items-center px-16 py-28 gap-12 bg-[#F2F2F2]">
        <div className="flex flex-col items-center gap-3 text-center max-w-4xl">
          <h2 className="text-[60px] leading-[72px] font-medium tracking-tight text-[#24201D]">
            Explore Our Partners
          </h2>

          <p className="text-xl text-[#54524F] leading-[30px]">
            Alliance Sourcing BD links international clients with reliable
            production in Bangladesh, driven by trust, compliance, and
            efficiency.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-3 p-3 bg-[#EFEFEF]">
          <button className="px-6 py-3 bg-[#0A66C2] text-white text-lg">
            All Clients
          </button>

          <button className="px-6 py-3 bg-white text-black text-lg">USA</button>

          <button className="px-6 py-3 bg-white text-black text-lg">
            Europe
          </button>

          <button className="px-6 py-3 bg-white text-black text-lg">
            Japan
          </button>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[200px] h-[130px] bg-white border border-black/20"
            >
              <span className="text-3xl font-bold tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* STRENGTH SECTION */}
      <section className="flex flex-col items-center px-16 py-20 gap-12 bg-white border-t border-gray-100">
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl font-medium text-[#24201D] mb-6">
            What Makes Our Partnerships Strong
          </h2>

          <p className="text-xl leading-[30px] text-[#54524F]">
            Our commitment to excellence goes beyond manufacturing. We build
            partnerships on trust, transparency, and shared success.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="w-[410px] h-[193px] border border-gray-200 rounded-[10px] p-6 bg-white"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-[#24201D] mb-8">
                {item.icon}
              </div>

              <h3 className="text-[18px] font-bold text-[#24201D] mb-4">
                {item.title}
              </h3>

              <p className="text-[15px] leading-6 text-[#54524F]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="flex flex-col items-center px-16 py-20 bg-[#F2F2F2]">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-5xl font-medium text-[#24201D]">
              Frequently Asked Questions
            </h2>

            <p className="text-xl text-[#54524F]">
              Everything you need to know about partnering with Alliance
              Sourcing BD
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[850px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-6 h-20 bg-white border border-gray-200 rounded-[10px]"
              >
                <h3 className="text-[18px] font-bold text-[#24201D]">{faq}</h3>

                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#0A66C2]">
                  <Plus className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="flex justify-center items-center px-16 py-12 min-h-[335px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('../../../public/buying-house.png')",
        }}
      >
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-white text-6xl font-medium tracking-tight">
              Become Our Partner
            </h2>

            <p className="text-white text-xl leading-[30px]">
              Scaling your supply chain starts with the right alliance. Let’s
              discuss your next collection.
            </p>
          </div>

          <button className="px-6 py-3 bg-[#0C97D5] border border-[#0C97D5] rounded-md text-white text-lg font-medium">
            Contact Sourcing
          </button>
        </div>
      </section>
    </main>
  );
}
