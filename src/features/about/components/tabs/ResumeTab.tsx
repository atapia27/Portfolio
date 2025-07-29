import { RESUME_CONFIG } from "../../constants";

export function ResumeTab() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_CONFIG.path;
    link.download = RESUME_CONFIG.filename;
    link.click();
  };

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-2xl p-12 border border-white/10 hover:border-neural-400/30 transition-all duration-500 group">
        <div className="text-center">
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Download My Resume
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
              Get a detailed overview of my experience, skills, and achievements in a comprehensive PDF format.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <button
              onClick={handleDownload}
              className="group relative"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-neural-400 to-synaptic-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-neural-400/25">
                <svg
                  className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Download PDF
              </div>
            </button>
          </div>
          
          <div className="text-gray-400 text-base">
            <p>Available formats: PDF</p>
            <p className="mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 