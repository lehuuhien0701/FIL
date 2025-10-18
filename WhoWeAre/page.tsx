import React , { useState, useRef, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const HeaderMenu = () => {
    // 1. Quản lý trạng thái mở/đóng của menu (đóng mặc định)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Tham chiếu đến các phần tử DOM
    const menuRef = useRef(null); // Ref cho menu mobile (phần sẽ hiện/ẩn)
    const buttonRef = useRef(null); // Ref cho nút hamburger

    // 3. Hàm chuyển đổi trạng thái menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // 4. Logic Xử lý Click Ra Ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen && 
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

// Custom Icons
const CheckIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.84192 12.0008C5.56569 12.0008 5.28999 11.8971 5.07904 11.6891L0 6.68272L1.52576 5.17825L5.84192 9.43268L14.4742 0.923828L16 2.4283L6.6048 11.6891C6.39385 11.8971 6.11816 12.0008 5.84192 12.0008Z" fill="#BBA25A"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 15.0587L15.8333 4.22534M15.8333 4.22534V14.6253M15.8333 4.22534H5.43334" stroke="#0A2540" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> 
);

 
  return (
    <div className="min-h-screen bg-beige">
      {/* Replaced local nav with shared Header component */}
      <Header />

      {/* New "Who We Are" hero section (Tailwind) */}
      <section className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs text-white mb-6">
            Who We Are
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gold">
            Our History & Identity
          </h1>
          <p className="flex justify-center items-center content-center text-white text-lg">
            <span>A federation born from the will to unite and represent real estate professionals in Luxembourg.</span>
            <span>A federation born from the will to unite and represent real estate professionals in Luxembourg.</span>
          </p>
        </div>
      </section>

      {/* ...existing page content (other sections, images, text etc.) ... */}

      {/* Replaced local footer with shared Footer component */}
      <Footer />
    </div>
  );
}
export default HeaderMenu;