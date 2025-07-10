"use client"
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Gift, Share2 } from 'lucide-react';
import Link from 'next/link';

interface ReferralCardProps {
    title: string;
    description: string;
    reward: string;
    terms: {
        title: string;
        content: string;
        
    }[];
}

const ReferralEarnCard = () => {
    const [expandedTerm, setExpandedTerm] = useState<number | null>(null);

    const referralData: ReferralCardProps = {
        title: "Refer & Earn Rewards",
        description: "Share your referral link and earn exciting benefits for you and your friends",
        reward: "₹500 credit for each successful referral",
        terms: [
            {
                title: "Eligibility Criteria",
                content: "You must have an active account with at least 3 completed projects"
            },
            {
                title: "Reward Conditions",
                content: "Your friend must complete their first project within 30 days of signing up"
            },
            {
                title: "Redemption Process",
                content: "Credits will be automatically applied to your account after verification"
            }
        ]
    };

    const toggleTerm = (index: number) => {
        setExpandedTerm(expandedTerm === index ? null : index);
    };

    return (
        <div className='container px-4 mx-auto py-12'>
            <div className="max-w-md mx-auto lg:max-w-7xl w-full bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Reward Content */}
                    <div className="p-6 lg:p-8 lg:w-1/2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Gift className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-800">{referralData.title}</h3>
                        </div>

                        <p className="text-gray-600 mb-5 lg:mb-6 lg:text-lg">{referralData.description}</p>

                        <div className="bg-white rounded-lg p-4 mb-6 border border-blue-100">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-700">Your reward:</span>
                                <span className="font-bold text-blue-600 text-lg">{referralData.reward}</span>
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 hover:shadow-md mb-6 lg:mb-0">
                            <Share2 className="w-5 h-5" />
                            Share Referral Link
                        </button>
                    </div>

                    {/* Right Side - Terms & Conditions (Desktop shows beside, mobile shows below) */}
                    <div className="border-t lg:border-t-0 lg:border-l border-gray-200 p-6 lg:p-8 lg:w-1/2 bg-white lg:bg-transparent">
                        <h4 className="font-medium text-gray-700 mb-3 lg:text-lg">Terms & Conditions</h4>

                        <div className="space-y-3">
                            {referralData.terms.map((term, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
                                    <button
                                        onClick={() => toggleTerm(index)}
                                        className="w-full flex justify-between items-center p-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-left font-medium text-gray-800">{term.title}</span>
                                        {expandedTerm === index ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </button>

                                    {expandedTerm === index && (
                                        <div className="p-3 bg-gray-50 border-t border-gray-200 animate-fadeIn">
                                            <p className="text-gray-600 mb-3">{term.content}</p>
                                            <div>
                                                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                                                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralEarnCard;