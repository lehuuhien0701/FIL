import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev);
	};

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

	return (
		<nav className="bg-navy border-b border-white/10 sticky top-0 z-50">
			<div className="px-5 lg:px-20 h-[69px] flex items-center justify-between max-w-[1440px] m-auto w-full">
				<Link to="/"><img 
					src="https://api.builder.io/api/v1/image/assets/TEMP/1f1869e088ee1a808d020a85d04bbebc715b1fd0?width=496" 
					alt="FIL Logo" 
					className="h-[69px] w-[248px]"
				/></Link>
				<div className="relative">
					<div className='flex items-center justify-end'>
						<div 
							className='block xl:hidden cursor-pointer p-2'
							onClick={toggleMenu}
							ref={buttonRef} 
						>
							<span>
								<svg className="open" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M1.15385 0C0.5166 0 0 0.497467 0 1.11111C0 1.72476 0.5166 2.22222 1.15385 2.22222H28.8462C29.4833 2.22222 30 1.72476 30 1.11111C30 0.497467 29.4833 0 28.8462 0H1.15385ZM0 10C0 9.38636 0.5166 8.88889 1.15385 8.88889H28.8462C29.4833 8.88889 30 9.38636 30 10C30 10.6136 29.4833 11.1111 28.8462 11.1111H1.15385C0.5166 11.1111 0 10.6136 0 10ZM0 18.8889C0 18.2753 0.5166 17.7778 1.15385 17.7778H28.8462C29.4833 17.7778 30 18.2753 30 18.8889C30 19.5024 29.4833 20 28.8462 20H1.15385C0.5166 20 0 19.5024 0 18.8889Z" fill="#ffffff"/>
								</svg> 
							</span>
						</div>

						<div className="hidden xl:flex items-center gap-5 xl:gap-10">
							<a href="#" className="text-white text-sm leading-[14px]">Members Directory</a>
							<Link to="/WhoWeAre" className="block text-lg hover:text-teal-400">Who We Are</Link>
							<a href="#" className="text-white text-sm leading-[14px]">Members' Area</a>
							<a href="#" className="text-white text-sm leading-[14px]">News</a>
							<a href="#" className="text-white text-sm leading-[14px]">Professions</a>
							<button className="flex items-center gap-2.5 px-5 h-10 rounded-full border border-beige/20 bg-navy text-white text-sm leading-[14px]">
								Contact
								<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.19727 12.1203L9.0006 8.31703C9.44977 7.86787 9.44977 7.13287 9.0006 6.6837L5.19727 2.88037" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</button>
							<div className="w-10 h-10 flex items-center justify-center">
								<svg className='rounded-full' width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
								{/* ...existing SVG paths... */}
								</svg> 
							</div>
						</div>
					</div>

					<div
						ref={menuRef}
						className={`xl:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-2xl z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} `}
					>
						<div className="flex justify-end p-5">
							<button 
								onClick={toggleMenu} 
								className="text-white text-3xl font-light hover:text-red-500 transition-colors"
							>
								<svg className="close" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
									<path d="M3.375 3.875L23.625 24.125M3.375 24.125L23.625 3.875" stroke="#ffffff" strokeWidth="2.29787"/>
								</svg> 
							</button>
						</div>

						<div className="p-5 flex flex-col gap-4">
							<a href="#" className="block text-lg hover:text-teal-400">Members Directory</a>
							<Link to="/WhoWeAre" className="block text-lg hover:text-teal-400">Who We Are</Link>
							<a href="#" className="block text-lg hover:text-teal-400">Members' Area</a>
							<a href="#" className="block text-lg hover:text-teal-400">News</a>
							<a href="#" className="block text-lg hover:text-teal-400">Professions</a>
							<button className="mt-4 px-5 h-10 rounded-full border border-beige/20 bg-navy text-white text-sm leading-[14px]">
								Contact
							</button>
						</div>
					</div>

					{isMenuOpen && (
						<div 
							className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
							onClick={toggleMenu}
						></div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Header;