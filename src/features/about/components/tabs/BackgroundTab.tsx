import { BACKGROUND_CARDS } from "../../constants";

export function BackgroundTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {BACKGROUND_CARDS.map((card, index) => (
        <div
          key={card.title}
          className={`glass-effect rounded-2xl p-8 border border-white/10 ${card.borderHoverClass} transition-all duration-500 group ${
            index === 2 ? "lg:col-span-2" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 bg-gradient-to-r ${card.gradientClass} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-2xl">{card.icon}</span>
            </div>
            <h3 className={`text-2xl font-bold ${
              card.gradientClass.includes("neural") ? "text-neural-400" :
              card.gradientClass.includes("synaptic") ? "text-synaptic-400" :
              "text-cognitive-400"
            }`}>
              {card.title}
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
} 