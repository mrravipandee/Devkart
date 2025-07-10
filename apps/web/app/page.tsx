import React from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrendingSection from '@/components/Trending'
import CategoryBrowser from '@/components/CategoryBrowser'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import ReferralEarnCard from '@/components/ReferralEarnCard'

const page = () => {

  const trendingProducts = [
    {
      id: 1,
      title: 'Modern UI Kit',
      price: 29.99,
      downloads: 12453,
      imageUrl: 'https://www.figma.com/community/resource/45f32d86-b217-41ce-969e-14bd1aa1fc45/thumbnail',
      category: 'UI Kit'
    },
    {
      id: 2,
      title: 'Dashboard Template',
      price: 49.99,
      downloads: 8765,
      imageUrl: 'https://cdn.prod.website-files.com/6762119e1fbfb186d2174b6a/6762119e1fbfb186d2175ecb_673354c7c7b19b4936858bdc_6250bb7d4329665082b3b0cf_velocity-ui-kit%252520(1).jpeg',
      category: 'Template'
    },
    {
      id: 3,
      title: 'Illustration Pack',
      price: 19.99,
      downloads: 15342,
      imageUrl: 'https://www.lapa.ninja/assets/blog/control-free-illustrations.jpg',
      category: 'Graphics'
    },
    {
      id: 4,
      title: 'Mobile App Template',
      price: 39.99,
      downloads: 9876,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/040/181/206/non_2x/social-network-mobile-app-interface-screens-template-set-online-account-friends-chat-messages-photo-posts-blogging-statistics-pack-of-ui-ux-gui-kit-for-application-web-layout-design-vector.jpg',
      category: 'Template'
    },
    {
      id: 5,
      title: 'Mobile App In React native',
      price: 39.99,
      downloads: 9876,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PNLE0U6nE0fbgJGMZb1KPdz61BiFPUgefA&s',
      category: 'Android App'
    },
    {
      id: 6,
      title: 'WebConvi - AI converter Web App',
      price: 39.99,
      downloads: 9876,
      imageUrl: 'https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/6825f9a5fd6de4f91619ee8d_convert_webpage_video_ai.webp',
      category: 'Web dev'
    },
    {
      id: 7,
      title: 'Mobile IOS',
      price: 39.99,
      downloads: 9876,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLHyW3Y3k0lswVwkNVWQ6_AMB2TOLyIRzhHM4MYSzETUdk2oS7fCogf5moaA3XAi8FsI&usqp=CAU',
      category: 'IOS'
    },
  ];

  return (
    <div>
      <Navigation />
      <Hero />
      <TrendingSection products={trendingProducts} />
      <CategoryBrowser />
      <ProblemSolutionSection />
      <ReferralEarnCard />
    </div>
  )
}

export default page;






