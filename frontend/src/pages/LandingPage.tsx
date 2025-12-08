import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Users, TrendingUp, PieChart, CheckCircle2, Play, ArrowRight, Menu } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0C15] text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* --- BACKGROUND GLOW EFFECTS --- */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

      {/* --- HEADER --- */}
      <header className="fixed w-full z-50 bg-[#0B0C15]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-lg">
              <Layout size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">Schedule</span>
          </Link>
          
         

          <div className="flex items-center gap-4">
<Link
            to="/login"
             className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-indigo-500/30">
                         
          Đăng nhập</Link>
            
            <button className="md:hidden text-white"><Menu /></button>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Phiên bản 2.0 đã ra mắt
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Quản lý công việc <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Dễ dàng & Hiệu quả
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Tạo bảng, phân công nhiệm vụ, theo dõi tiến độ – tất cả trong một nền tảng duy nhất giúp đội ngũ của bạn bứt phá năng suất.
          </p>
<Link to = "/login">           
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-500/25">
              Bắt đầu miễn phí <ArrowRight size={18} />
            </button></Link>
            <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all">
              <Play size={18} fill="currentColor" /> Xem Demo
            </button>
          

          <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0B0C15] flex items-center justify-center text-xs text-white">
                    User{i}
                 </div>
               ))}
            </div>
            <p>Được tin dùng bởi hơn 10,000+ quản lý dự án.</p>
          </div>
        </div>

        {/* Right Content - CSS MOCKUP INTERFACE */}
        <div className="lg:w-1/2 w-full z-10 relative group">
          {/* Glow effect behind interface */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          {/* Main Interface Box */}
          <div className="relative bg-[#131520] border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Fake Browser Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto bg-white/5 px-4 py-1 rounded-md text-xs text-slate-400 w-1/2 text-center">schedule-app.com/dashboard</div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-3 gap-4">
              {/* Column 1: To Do */}
              <div className="bg-white/5 rounded-xl p-3 space-y-3">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">To Do</span>
                    <span className="bg-white/10 text-xs px-2 py-0.5 rounded text-white">3</span>
                </div>
                {/* Task Card */}
                <div className="bg-[#1E202E] p-3 rounded-lg border border-white/5 shadow-sm hover:border-indigo-500/50 transition-colors cursor-pointer group/card">
                    <div className="h-2 w-16 bg-red-500/40 rounded-full mb-2"></div>
                    <div className="h-3 w-3/4 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                </div>
                <div className="bg-[#1E202E] p-3 rounded-lg border border-white/5 shadow-sm">
                    <div className="h-2 w-10 bg-green-500/40 rounded-full mb-2"></div>
                    <div className="h-3 w-full bg-slate-600 rounded mb-2"></div>
                </div>
              </div>

               {/* Column 2: Doing */}
               <div className="bg-white/5 rounded-xl p-3 space-y-3">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Doing</span>
                    <span className="bg-indigo-500/20 text-xs px-2 py-0.5 rounded text-indigo-300">2</span>
                </div>
                 <div className="bg-[#1E202E] p-3 rounded-lg border border-l-4 border-l-indigo-500 shadow-lg relative">
                     <div className="absolute -right-1 -top-1 w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <div className="h-2 w-12 bg-orange-500/40 rounded-full mb-2"></div>
                    <div className="h-3 w-5/6 bg-slate-500 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-slate-700 rounded mb-3"></div>
                    <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-2">
                        <div className="flex -space-x-2">
                            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                            <div className="w-5 h-5 rounded-full bg-pink-500"></div>
                        </div>
                        <div className="text-[10px] text-slate-400">Hôm nay</div>
                    </div>
                </div>
              </div>

               {/* Column 3: Done */}
               <div className="bg-white/5 rounded-xl p-3 space-y-3 opacity-60">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">Done</span>
                    <span className="bg-white/10 text-xs px-2 py-0.5 rounded text-white">5</span>
                </div>
                <div className="bg-[#1E202E] p-3 rounded-lg border border-white/5">
                    <div className="h-3 w-2/3 bg-slate-600 rounded mb-2 decoration-slice line-through opacity-50"></div>
                </div>
                 <div className="bg-[#1E202E] p-3 rounded-lg border border-white/5">
                    <div className="h-3 w-1/2 bg-slate-600 rounded mb-2 decoration-slice line-through opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Layout className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Quản lý công việc linh hoạt</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Tùy chỉnh quy trình làm việc (workflow) với dạng Bảng Kanban, Danh sách hoặc Lịch biểu. Kéo thả mượt mà, trực quan.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Users className="text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Làm việc nhóm hiệu quả</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Cộng tác thời gian thực. Bình luận, @mention và chia sẻ tài liệu trực tiếp trên từng nhiệm vụ để không ai bị bỏ lại phía sau.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Theo dõi tiến độ</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Nắm bắt trạng thái dự án tức thì. Hệ thống thông báo thông minh giúp bạn luôn biết việc gì cần ưu tiên xử lý ngay.
                    </p>
                </div>

                 {/* Feature 4 */}
                 <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <PieChart className="text-pink-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Báo cáo & Phân tích</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Dữ liệu trực quan hóa về hiệu suất team. Xuất báo cáo tự động để họp review cuối tuần chỉ trong vài giây.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-20 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Được tin dùng bởi các nhà quản lý hàng đầu</h2>
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-white/10 to-transparent p-1 rounded-2xl">
            <div className="bg-[#0f111a] rounded-xl p-10 md:p-14 relative">
                <div className="absolute top-8 left-8 text-6xl text-indigo-500/20 font-serif">"</div>
                <p className="text-xl md:text-2xl text-slate-300 italic mb-8 relative z-10">
                    "Schedule đã giúp team lập trình của chúng tôi giảm 30% thời gian họp hành và tăng gấp đôi hiệu suất hoàn thành dự án. Một công cụ không thể thiếu cho các dự án Agile!"
                </p>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-600 overflow-hidden">
                        <img src="/api/placeholder/50/50" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-white">Tuấn Khanh</div>
                        <div className="text-sm text-indigo-400">Project Manager tại TechCorp</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#0B0C15] to-[#1a1d2d]">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng tối ưu hóa công việc?</h2>
             <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                 Tham gia cùng hàng nghìn đội nhóm đang làm việc hiệu quả hơn mỗi ngày. Không cần thẻ tín dụng.
             </p>
            
             <div className="mt-12 text-slate-600 text-sm">
                 © 2025 Schedule App. All rights reserved.
             </div>
          </div>
      </section>

    </div>
  );
};

export default LandingPage;