"use client"

import Header from '@/components/header';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Header/>
      <div className="relative h-screen overflow-auto" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="absolute w-full h-full bg-black bg-opacity-50 overflow-auto">
          <div className="flex justify-center pb-[5rem]">
            <Image src="/logo.svg" alt="Logo" width={100} height={100}/>
          </div>
          <div className="grid grid-cols-1 gap-8 p-4 text-green-786">
            <div className="p-4 w-3/4 bg-white bg-opacity-75 rounded-2xl justify-self-center">
              <div className="text-3xl text-center mb-8">Problem Statement</div>
              <div className="text-md mb-5">Pakistan faces a profound education crisis, with over 30 million children deprived of schooling. In Karachi alone, more than 5 million children are disengaged or disconnected from education. The majority are unable to attend school due to poverty, limited access to quality schools, and deep-rooted socio-economic inequalities. These barriers not only rob children of opportunities but also trap them in cycles of hardship, making them vulnerable to exploitation, crime, and a future devoid of hope.</div>
              <div className="text-md mb-5">This alarming reality fuels the nation’s 60% illiteracy rate, undermining social and economic progress and weakening Pakistan’s potential as a thriving nation-state. Despite its critical importance, the issue of illiteracy remains unaddressed, particularly in Karachi. The growing number of out-of-school children threatens not only their future but also the fabric of society. Without education, these children are at greater risk of falling into cycles of poverty, crime, and social unrest, deepening Pakistan’s ongoing crises.</div>
              <div className="text-md mb-5">The time to act is now. Education is not just a fundamental right—it is the key to breaking these cycles and building a stronger, more resilient nation.</div>
              <div className="text-3xl text-center mb-8 mt-16">Area of Focus: Karachi</div>
              <div className="text-md mb-5">Karachi, Pakistan’s largest city and economic powerhouse, contributes 60% of the country’s GDP. As the nation’s commercial hub, it provides abundant employment opportunities, making it an ideal starting point for our program. By launching this initiative in Karachi, we aim to create pathways for our graduates to secure meaningful employment and build brighter futures, while addressing the city’s pressing educational challenges. Karachi’s strategic significance makes it the perfect foundation to ignite this transformative project.</div>
              <div className="text-3xl text-center mb-8 mt-16">Student Age Group</div>
              <div className="text-md mb-5">We focus on children aged 12-16 because they possess <b>longer attention spans, enhanced focus, and greater adaptability</b> compared to younger children. This age group demonstrates stronger cognitive abilities, curiosity, and maturity, coupled with a growing awareness of career opportunities, making them highly motivated to learn.</div>
              <div className="text-md mb-5">Our program equips these students with essential knowledge and skills, including basic Islamic values, English, financial literacy, and vocational training, to prepare them for a brighter future.</div>
              <div className="text-3xl text-center mb-8 mt-16">Strategy</div>
              <div className="text-md mb-5">We transform unused classrooms in private schools and coaching centers into vibrant evening learning hubs, maximizing existing resources to benefit underserved children. Our approach brings together the wisdom of <b>retired professionals</b> and the energy of <b>young college students</b>, creating a dynamic and inclusive learning environment. Retired professionals contribute invaluable expertise, life experience, and guidance, laying a strong foundation for meaningful education. Meanwhile, college students infuse the program with fresh perspectives and relatable mentorship, inspiring and motivating students to achieve their full potential.</div>
              <div className="text-3xl text-center mb-8 mt-16">Screening Criteria</div>
              <div className="text-md mb-5">At our organization, we believe in the power of diverse talents. Success isn’t solely about natural ability—it’s about pursuing <b>what excites and energizes you</b>. When individuals align their passions with their strengths, it transforms their journey and unlocks their true potential.</div>
              <div className="text-md mb-5">This guiding principle shapes our mission to help students uncover and nurture their unique abilities, empowering them to thrive and create a meaningful impact in their lives and communities.</div>
              <div className="text-3xl text-center mb-8 mt-16">Skills and Learning Program</div>
              <div className="text-md mb-5">Our comprehensive curriculum focuses on holistic development, combining essential soft skills, foundational knowledge, and practical trades. Here’s how we structure the training:</div>
              <div className="text-2xl text-center mb-8 mt-16">Soft Skills Development</div>
              <div className="text-md mb-5">We emphasize vital skills such as effective communication, mutual respect, and resilience, preparing students to navigate personal and professional challenges confidently.</div>
              <div className="text-2xl text-center mb-8 mt-16">Foundational Courses</div>
              <div className="text-md mb-5">Students build a strong foundation in English and financial literacy, equipping them with the tools to thrive in modern workplaces and manage their resources effectively.</div>
              <div className="text-2xl text-center mb-8 mt-16">Skill and Trade Development</div>
              <div className="text-md mb-5">
                To cater to diverse interests and talents, students are grouped into three levels based on their inclinations:
                <ul className="list-disc mt-2 pl-10">
                  <li className="text-md"><b>Level 1: Digital and Technology Skills</b></li>
                  <div className="text-md mb-2">For students with a flair for coding and technology, fostering computer literacy and digital skills.</div>
                  <li className="text-md"><b>Level 2: Technical and Trade Skills</b></li>
                  <div className="text-md mb-2">Designed for students with an interest in hands-on professions such as stitching, sewing, plumbing, electrical work, and other technical trades, providing them with practical skills to pursue rewarding careers.</div>
                  <li className="text-md"><b>Level 3: Creative and Craft Skills</b></li>
                  <div className="text-md mb-2">For creative minds passionate about cooking, baking, drawing, and other artistic pursuits.</div>
                </ul>
                This tiered approach ensures that each student receives tailored training, empowering them to pursue meaningful careers aligned with their skills and interests.
              </div>
              <div className="text-3xl text-center mb-8 mt-16">Conclusion</div>
              <div className="text-md mb-5">With Allah’s blessings and your support, we can turn this vision into reality. Together, we have the power to eradicate illiteracy and create new opportunities for millions of disadvantaged children in Pakistan. Join us in our mission to make education accessible to every child and illuminate their future, <b>one city at a time</b>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
