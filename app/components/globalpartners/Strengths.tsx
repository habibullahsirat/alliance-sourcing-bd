import {
  ArrowUpRight,
  MessageCircle,
  Shield,
  Clock3,
  Leaf,
  Plus,
} from "lucide-react";

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

export default function Strengths() {
  return (
    <>
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
    </>
  );
}
