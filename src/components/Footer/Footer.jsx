import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#4121BF] via-[#8C3ABF] to-[#CC449A] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FFE1CE]/90 to-white">
                            DECORMATE
                        </h3>
                        <p className="text-gray-200 mb-4 leading-relaxed">
                            Your one-stop solution for making every celebration unforgettable.
                            We bring your dream events to life with stunning decorations and seamless planning.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Venues</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Decorations</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Vendors</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Catering Service</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Chef Service</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Wedding Planning</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Birthday Parties</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Corporate Events</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Themed Decorations</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Balloon Decorations</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Floral Arrangements</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span className="text-gray-200">
                                    123 Celebration Street<br />
                                    Ranchi, Jharkhand 834001<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-200 hover:text-white transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="flex-shrink-0" />
                                <a href="mailto:info@decormate.com" className="text-gray-200 hover:text-white transition-colors">
                                    info@decormate.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-200 text-sm">
                            © 2025 DECORMATE. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-200 hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}