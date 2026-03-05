import { HiExclamationTriangle, HiArrowPath, HiXMark } from "react-icons/hi2";
import { useState } from "react";

const ErrorPage = () => {
  // Status
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative isolate flex items-center justify-center min-h-100 w-full p-6 transition-all duration-500">
      <div className="absolute -z-10 w-64 h-64 bg-red-400/20 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute -z-10 w-48 h-48 bg-orange-400/10 rounded-full blur-[60px] translate-x-20 -translate-y-10" />

      <div
        className="relative overflow-hidden w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(255,100,100,0.15)] rounded-3xl p-8 text-center transition-transform duration-300 hover:scale-[1.01]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative mx-auto w-20 h-20 mb-6">
          <div
            className={`absolute inset-0 bg-red-500/20 rounded-2xl rotate-45 transition-transform duration-700 ${isHovered ? "rotate-225" : ""}`}
          />
          <div className="relative flex items-center justify-center w-full h-full bg-linear-to-br from-red-500 to-rose-600 rounded-2xl shadow-lg shadow-red-500/30">
            <HiExclamationTriangle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
          System Interrupted
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          We encountered a digital hiccup. Our team of pixels is on the case.
        </p>

        <button
          onClick={() => location.reload()}
          className="group relative cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-black hover:shadow-xl active:scale-95 overflow-hidden"
        >
          <HiArrowPath
            className={`w-5 h-5 transition-transform duration-500 ${isHovered ? "rotate-180" : ""}`}
          />
          <span>Restore Connection</span>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
