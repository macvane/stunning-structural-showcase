
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layouts/PageLayout';
import { Calendar, User, Clock, Bookmark, Share2, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample articles data
const articlesData = [
  {
    title: 'The Future of Sustainable Structural Design',
    content: `
      <p class="mb-4">Sustainable structural design is rapidly evolving as environmental concerns become increasingly central to the construction industry. This article explores innovative approaches that minimize environmental impact while maximizing performance and safety.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The Importance of Sustainability in Modern Structural Engineering</h2>
      
      <p class="mb-4">As climate change concerns intensify, structural engineers are finding themselves at the forefront of developing solutions that reduce carbon footprints without compromising on structural integrity. This paradigm shift is driving innovation across the industry.</p>
      
      <p class="mb-4">Sustainable structural design encompasses numerous facets, from material selection and resource efficiency to energy performance and waste reduction. Engineers must consider the entire lifecycle of a building, from construction to eventual demolition or repurposing.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1085&auto=format&fit=crop" alt="Sustainable building materials" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Innovative sustainable materials are revolutionizing structural engineering practices</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Emerging Materials and Technologies</h2>
      
      <p class="mb-4">The development of new materials is central to advancing sustainable structural design. Mass timber, for instance, is gaining popularity as a renewable alternative to traditional construction materials, offering comparable strength with a significantly lower carbon footprint.</p>
      
      <p class="mb-4">Engineered bamboo, recycled steel, and geopolymer concrete are just a few examples of innovative materials that are reshaping the industry. These alternatives not only reduce environmental impact but often offer unique advantages in terms of weight, strength, and durability.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Computational Design and Optimization</h2>
      
      <p class="mb-4">Advanced computational tools are enabling engineers to optimize structural designs with unprecedented precision. By analyzing countless design iterations and material combinations, these tools help identify solutions that minimize material usage while meeting all performance requirements.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="Computational structural analysis" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Computational analysis allows engineers to optimize material usage and structural performance</p>
      </div>
      
      <p class="mb-4">Parametric design and generative algorithms are increasingly being employed to create structures that are not only efficient but adaptable to changing conditions. These approaches allow engineers to incorporate factors such as solar exposure, wind loads, and seismic considerations directly into the design process.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Life-Cycle Assessment and Circular Economy</h2>
      
      <p class="mb-4">Moving beyond immediate construction concerns, sustainable structural design now encompasses the entire life cycle of a building. Life-cycle assessment (LCA) methodologies help quantify environmental impacts from material extraction through demolition, guiding decisions that minimize overall ecological footprint.</p>
      
      <p class="mb-4">The circular economy model is also gaining traction, with designers increasingly considering how building components can be reused or recycled at the end of their useful life. This approach requires rethinking connection details, material selections, and overall building systems to facilitate future disassembly and material recovery.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Challenges and Future Directions</h2>
      
      <p class="mb-4">Despite significant progress, sustainable structural design faces numerous challenges. Code and regulatory frameworks often lag behind technological innovation, creating barriers to implementing cutting-edge solutions. Additionally, there remains a perception that sustainable options necessarily entail higher costs, though this gap is rapidly closing as markets mature.</p>
      
      <p class="mb-4">Looking ahead, the integration of digital technologies such as IoT sensors and real-time monitoring systems promises to further enhance the sustainability of structures by enabling more efficient operation and maintenance throughout their lifespan.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">The future of sustainable structural design is bright, with ongoing innovations continuously expanding what's possible. As the industry continues to evolve, collaboration between structural engineers, architects, material scientists, and other stakeholders will be essential to developing holistic solutions that address environmental challenges while creating safe, functional, and inspiring built environments.</p>
      
      <p class="mb-4">By embracing sustainability not as a constraint but as a catalyst for innovation, structural engineers can lead the way toward a more environmentally responsible construction industry and contribute significantly to global climate goals.</p>
    `,
    author: 'Eng. Phares O. Atai',
    date: 'June 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    category: 'Sustainability',
    slug: 'future-sustainable-structural-design',
    tags: ['Sustainability', 'Innovation', 'Green Building', 'Materials']
  },
  {
    title: 'Advancements in Seismic Engineering Technology',
    content: `
      <p class="mb-4">Modern technology and computational methods are revolutionizing the way engineers design structures to withstand earthquakes and other seismic events. This article explores the latest innovations and their impact on structural safety and resilience.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The Evolution of Seismic Engineering</h2>
      
      <p class="mb-4">Seismic engineering has undergone a dramatic transformation in recent decades, driven by advances in our understanding of earthquake mechanics, materials science, and computational capabilities. This evolution has enabled the development of structures that can withstand increasingly powerful seismic events with minimal damage.</p>
      
      <p class="mb-4">Historical approaches to seismic design focused primarily on preventing catastrophic collapse, ensuring that occupants could safely evacuate during an earthquake. While this remains a fundamental goal, modern seismic engineering extends beyond basic safety to emphasize resilience—the ability of structures to not only survive earthquakes but to remain functional afterward.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop" alt="Modern earthquake-resistant structure" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Contemporary earthquake-resistant buildings incorporate multiple layers of seismic protection</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Computational Modeling and Simulation</h2>
      
      <p class="mb-4">Perhaps the most significant advancement in seismic engineering has been the development of sophisticated computational tools for modeling and simulating earthquake effects on structures. These tools allow engineers to conduct detailed analyses of how buildings will respond to various seismic scenarios, enabling more precise and effective design decisions.</p>
      
      <p class="mb-4">Finite element analysis (FEA) software can model complex structural systems with unprecedented detail, accounting for material nonlinearities, connection behavior, and soil-structure interaction. Time-history analysis enables engineers to simulate a structure's response to recorded or synthetic earthquake ground motions, providing critical insights into dynamic behavior.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Innovative Structural Systems</h2>
      
      <p class="mb-4">Beyond computational advancements, seismic engineering has been transformed by the development of innovative structural systems specifically designed to mitigate earthquake effects. Base isolation systems, for instance, effectively decouple a structure from ground motion by placing specialized bearings between the foundation and superstructure.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1085&auto=format&fit=crop" alt="Base isolation system" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Base isolation systems can significantly reduce the seismic forces transmitted to buildings</p>
      </div>
      
      <p class="mb-4">Energy dissipation devices represent another major innovation. These systems—which include viscous dampers, friction dampers, and yielding metal dampers—absorb and dissipate seismic energy that would otherwise cause damage to the primary structural system. By strategically incorporating these devices, engineers can significantly reduce a building's seismic response.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Advanced Materials and Construction Techniques</h2>
      
      <p class="mb-4">The development of new materials and construction techniques has further enhanced seismic performance. High-performance concrete, fiber-reinforced polymers, and engineered timber products offer improved strength-to-weight ratios and ductility compared to traditional materials.</p>
      
      <p class="mb-4">Connection details have also evolved significantly. In steel structures, for example, reduced beam sections (or "dogbone" connections) are designed to concentrate yielding away from critical beam-column joints, improving overall system ductility and performance. Similarly, innovations in reinforced concrete detailing have enhanced the deformation capacity of concrete frames.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Performance-Based Seismic Design</h2>
      
      <p class="mb-4">Perhaps the most profound conceptual advancement in seismic engineering has been the shift toward performance-based design approaches. Rather than simply complying with prescriptive code requirements, performance-based seismic design establishes specific performance objectives for different earthquake intensities and design solutions to meet these objectives.</p>
      
      <p class="mb-4">This approach allows for more tailored designs that consider the specific needs and risk tolerance of building owners and occupants. For critical facilities like hospitals or data centers, performance objectives might include immediate occupancy even after major earthquakes. For standard structures, objectives might focus on life safety and controlled damage patterns that facilitate economical repair.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop" alt="Modern structural analysis" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Performance-based design enables more targeted and efficient seismic protection strategies</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Real-Time Monitoring and Smart Structures</h2>
      
      <p class="mb-4">The integration of sensors, data analytics, and structural health monitoring systems represents the cutting edge of seismic engineering technology. These systems enable continuous monitoring of structural behavior and condition, providing early warning of potential issues and valuable data for post-earthquake assessment.</p>
      
      <p class="mb-4">Looking forward, "smart" seismic systems that can adapt to changing conditions are being developed. These might include semi-active or active control systems that adjust damping or stiffness characteristics in real-time based on sensor data, potentially offering unprecedented levels of protection against varying earthquake intensities.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">The rapid advancement of seismic engineering technology has dramatically improved our ability to design and construct earthquake-resistant structures. From sophisticated computational tools to innovative structural systems and smart monitoring capabilities, these technologies are making buildings safer and more resilient than ever before.</p>
      
      <p class="mb-4">As research continues and these technologies become more refined and accessible, we can expect further improvements in seismic performance across the built environment. This progress will be particularly critical as urbanization continues in earthquake-prone regions around the world, helping to protect both lives and economic assets from this persistent natural hazard.</p>
    `,
    author: 'Dr. Jane Kamau',
    date: 'April 8, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop',
    category: 'Technology',
    slug: 'advancements-seismic-engineering-technology',
    tags: ['Seismic Engineering', 'Technology', 'Innovation', 'Safety']
  },
  {
    title: 'Building Information Modeling: A Game Changer',
    content: `
      <p class="mb-4">Building Information Modeling (BIM) is transforming the construction industry by improving collaboration, reducing errors, and optimizing project delivery. This article explores how BIM is revolutionizing the way we design, construct, and manage buildings.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Understanding BIM: More Than Just 3D Modeling</h2>
      
      <p class="mb-4">Building Information Modeling represents a paradigm shift in the architecture, engineering, and construction (AEC) industry. Unlike traditional 2D drawings or even 3D models, BIM provides a comprehensive digital representation of the physical and functional characteristics of a facility, serving as a shared knowledge resource throughout its lifecycle.</p>
      
      <p class="mb-4">At its core, BIM is not simply a technology but a process that facilitates better collaboration and information sharing among all stakeholders. It integrates multidisciplinary data to create a digital twin of a building before it's constructed, allowing teams to visualize, analyze, and optimize designs with unprecedented accuracy and efficiency.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop" alt="BIM model visualization" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">BIM allows for detailed visualization and analysis of building projects before construction begins</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Enhanced Collaboration and Coordination</h2>
      
      <p class="mb-4">One of BIM's most significant benefits is its ability to enhance collaboration across disciplines. Architects, structural engineers, MEP engineers, contractors, and clients can all work from the same coordinated model, updating information in real-time and immediately seeing how changes affect other aspects of the project.</p>
      
      <p class="mb-4">This collaborative environment drastically reduces coordination errors and conflicts that traditionally would only be discovered during construction, leading to costly changes and delays. With BIM, clash detection can be performed virtually, identifying and resolving issues before they impact the project timeline or budget.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Improved Accuracy and Efficiency</h2>
      
      <p class="mb-4">BIM significantly improves the accuracy of design and construction documentation. By creating a single source of truth for project information, it eliminates inconsistencies between different sets of drawings and specifications. The parametric nature of BIM models means that changes to one element automatically update all related components and documentation.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="BIM coordination meeting" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">BIM coordination meetings allow multidisciplinary teams to identify and resolve issues collaboratively</p>
      </div>
      
      <p class="mb-4">The efficiency gains from BIM adoption are substantial. Automated quantity takeoffs, scheduling tools, and cost estimation features accelerate preconstruction processes. During construction, contractors can use BIM for optimized sequencing, logistics planning, and progress tracking, further streamlining project delivery.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Cost and Time Savings</h2>
      
      <p class="mb-4">The implementation of BIM processes typically results in significant cost savings throughout a project's lifecycle. By identifying and resolving design conflicts early, costly on-site modifications and change orders are minimized. Material quantities can be more accurately estimated, reducing waste and overordering.</p>
      
      <p class="mb-4">Time savings are equally impressive. The streamlined coordination process accelerates design development, while improved construction planning reduces delays. Studies have shown that BIM projects often experience shorter schedules compared to traditional delivery methods, with some reporting reductions of up to 7% in project time.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Lifecycle Management and Sustainability</h2>
      
      <p class="mb-4">BIM's value extends well beyond design and construction into facility management and operations. The data-rich BIM model can be handed over to building owners and operators, providing them with detailed information about every component of their facility. This aids in maintenance planning, space management, and future renovations.</p>
      
      <p class="mb-4">From a sustainability perspective, BIM enables more sophisticated energy modeling and performance analysis. Designers can evaluate different design options for their environmental impact, optimizing for energy efficiency, daylighting, and other sustainability metrics. The result is buildings that not only cost less to construct but also operate more efficiently throughout their lifespan.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1545236085-1467c5536d99?q=80&w=1135&auto=format&fit=crop" alt="Facility management using BIM" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">BIM provides valuable information for ongoing facility management and maintenance</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Challenges and Implementation Considerations</h2>
      
      <p class="mb-4">Despite its numerous benefits, BIM implementation comes with challenges. The initial investment in software, hardware, and training can be substantial, particularly for smaller firms. There's also a learning curve associated with transitioning from traditional workflows to BIM processes.</p>
      
      <p class="mb-4">Successful BIM implementation requires careful planning and a phased approach. Organizations need to develop clear BIM execution plans, establish standards and protocols, and provide adequate training for staff. It's also crucial to set realistic expectations about the timeline for realizing returns on BIM investment.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The Future of BIM: Emerging Trends</h2>
      
      <p class="mb-4">BIM continues to evolve rapidly, with several emerging trends poised to further transform the construction industry. Cloud-based BIM platforms are enhancing mobility and real-time collaboration. The integration of artificial intelligence and machine learning with BIM is enabling more advanced analysis and optimization capabilities.</p>
      
      <p class="mb-4">Augmented and virtual reality are increasingly being paired with BIM to provide immersive visualization experiences, helping clients better understand designs and aiding construction teams with complex assembly sequences. Meanwhile, the connection between BIM and digital fabrication is growing stronger, allowing for direct transfer of model data to manufacturing systems.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Building Information Modeling has indeed proven to be a game changer for the construction industry. By enhancing collaboration, improving accuracy, reducing costs, and supporting lifecycle management, BIM is addressing many of the longstanding challenges faced by the AEC sector.</p>
      
      <p class="mb-4">As BIM technology and methodologies continue to advance, their impact on the built environment will only grow. Organizations that embrace BIM and develop the necessary skills and workflows to leverage its full potential will be well-positioned to thrive in an increasingly competitive and technology-driven industry landscape.</p>
    `,
    author: 'Eng. Michael Odera',
    date: 'March 22, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop',
    category: 'Innovation',
    slug: 'bim-game-changer',
    tags: ['BIM', 'Technology', 'Innovation', 'Construction']
  },
  {
    title: 'Steel vs. Concrete: Choosing the Right Material',
    content: `
      <p class="mb-4">This article provides a comprehensive comparison of steel and concrete structural systems, examining their strengths, limitations, and optimal applications in modern construction projects.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Introduction to Structural Material Selection</h2>
      
      <p class="mb-4">The choice between steel and concrete represents one of the most fundamental decisions in structural engineering. Each material offers unique advantages and constraints that can significantly impact a project's cost, timeline, performance, and environmental footprint. Understanding these characteristics is essential for making informed decisions that align with project goals and constraints.</p>
      
      <p class="mb-4">While the steel versus concrete debate is often presented as a binary choice, modern construction frequently employs composite systems that leverage the strengths of both materials. Nonetheless, examining the distinct properties of each material provides valuable insights into their optimal applications.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1085&auto=format&fit=crop" alt="Steel and concrete construction" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Modern construction often utilizes both steel and concrete in complementary ways</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Steel: Strengths and Applications</h2>
      
      <p class="mb-4">Steel's exceptional strength-to-weight ratio stands as perhaps its most significant advantage. This property allows for longer spans, taller structures, and more open floor plans compared to concrete alternatives. The material's high tensile strength makes it particularly suitable for structures subjected to dynamic loads, such as bridges and high-rise buildings in seismic zones.</p>
      
      <p class="mb-4">The speed and predictability of steel construction represent another major advantage. Steel components are typically fabricated off-site under controlled conditions, ensuring high precision and quality. Once delivered to the site, these components can be assembled rapidly, reducing construction time and allowing for earlier occupancy and return on investment.</p>
      
      <p class="mb-4">Steel's adaptability and flexibility are additional benefits. Steel structures can be more easily modified or expanded than their concrete counterparts, making them well-suited for buildings that may require future reconfiguration. At the end of a structure's life, steel components can be dismantled and recycled, aligning with circular economy principles.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop" alt="Steel structure construction" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Steel structures offer rapid construction and excellent strength-to-weight ratios</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Steel: Limitations and Considerations</h2>
      
      <p class="mb-4">Despite its advantages, steel presents certain challenges. Fire protection is a primary concern, as steel's strength degrades significantly at high temperatures. This necessitates additional fire-resistant coatings or encasement, adding to project costs and construction time.</p>
      
      <p class="mb-4">Corrosion resistance represents another consideration. In environments with high humidity, chemical exposure, or saltwater proximity, steel requires protective coatings and regular maintenance to prevent degradation. These ongoing maintenance requirements can impact lifecycle costs.</p>
      
      <p class="mb-4">From a cost perspective, steel can be subject to significant price volatility based on global market conditions. This volatility can complicate budgeting and potentially impact project feasibility if prices surge during the planning phase.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Concrete: Strengths and Applications</h2>
      
      <p class="mb-4">Concrete's outstanding compressive strength makes it exceptionally well-suited for columns, foundations, and other elements primarily subjected to compression forces. When properly reinforced with steel, concrete structures can also effectively resist tensile and shear forces, creating versatile structural systems.</p>
      
      <p class="mb-4">The material's inherent fire resistance represents a significant advantage over steel. Concrete structures typically require minimal additional fire protection, potentially reducing both initial construction costs and ongoing insurance premiums.</p>
      
      <p class="mb-4">Concrete offers excellent thermal mass properties, which can contribute to passive temperature regulation and energy efficiency. This characteristic makes concrete particularly valuable in buildings seeking to minimize heating and cooling loads through thermal inertia.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1545236085-1467c5536d99?q=80&w=1135&auto=format&fit=crop" alt="Concrete structure construction" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Concrete structures offer excellent durability and fire resistance</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Concrete: Limitations and Considerations</h2>
      
      <p class="mb-4">Despite its advantages, concrete presents certain limitations. Its lower strength-to-weight ratio compared to steel results in heavier structures requiring more substantial foundations and potentially reducing usable space due to larger structural elements.</p>
      
      <p class="mb-4">Construction timelines for cast-in-place concrete can be significantly longer than those for steel structures. Formwork installation, reinforcement placement, concrete pouring, and curing all require substantial time. Additionally, concrete work is more weather-dependent, potentially causing project delays during adverse conditions.</p>
      
      <p class="mb-4">From an environmental perspective, traditional concrete production generates substantial carbon emissions due to the energy-intensive cement manufacturing process. While low-carbon concrete alternatives are increasingly available, they often come at a premium cost and may have different performance characteristics.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Comparative Analysis: Performance Factors</h2>
      
      <p class="mb-4"><strong>Structural Efficiency:</strong> Steel typically outperforms concrete in spans and height-to-width ratios, allowing for more open floor plans and taller structures with smaller footprints. However, concrete's mass can provide superior vibration damping and acoustic isolation.</p>
      
      <p class="mb-4"><strong>Seismic Performance:</strong> Both materials can perform well in seismic zones when properly designed. Steel's ductility allows it to deform without catastrophic failure, while properly detailed reinforced concrete can provide excellent energy dissipation capacity. Hybrid systems often provide optimal seismic resilience.</p>
      
      <p class="mb-4"><strong>Durability:</strong> Well-designed concrete structures typically require less maintenance than steel alternatives, particularly in corrosive environments. However, concrete's vulnerability to cracking and reinforcement corrosion requires careful detailing and quality control.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop" alt="Composite structure" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Composite structures leverage the strengths of both steel and concrete</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Optimal Applications and Hybrid Solutions</h2>
      
      <p class="mb-4">Certain project types naturally favor one material over the other. High-rise buildings, long-span structures, and industrial facilities often benefit from steel's strength-to-weight advantages. Residential buildings, parking structures, and marine applications frequently leverage concrete's durability and fire resistance.</p>
      
      <p class="mb-4">Hybrid and composite systems represent perhaps the most compelling approach for many projects. Steel-concrete composite floors, for instance, utilize concrete's compressive strength and steel's tensile properties to create efficient systems with reduced depth and weight. Concrete-encased steel frames combine rapid steel erection with concrete's fire protection benefits.</p>
      
      <p class="mb-4">As computational design tools advance, the optimization of material usage becomes increasingly sophisticated. Performance-based design approaches enable engineers to select materials based on specific requirements for different building zones or structural elements, maximizing efficiency.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Sustainability Considerations</h2>
      
      <p class="mb-4">Environmental impact represents an increasingly important factor in material selection. Steel's recyclability and lower weight can reduce foundation requirements and transportation emissions. However, its production remains energy-intensive despite efficiency improvements.</p>
      
      <p class="mb-4">Concrete's embodied carbon has traditionally been a concern, though innovations like supplementary cementitious materials, carbon capture technologies, and alternative binders are steadily reducing its environmental footprint. Concrete's thermal mass and durability can also contribute to operational energy savings and extended service life.</p>
      
      <p class="mb-4">Life cycle assessment (LCA) provides a comprehensive framework for evaluating the environmental impact of different structural systems across their entire lifespan. This approach considers not only initial embodied carbon but also operational energy performance, maintenance requirements, and end-of-life scenarios.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Conclusion: A Context-Dependent Decision</h2>
      
      <p class="mb-4">The choice between steel and concrete is rarely absolute. Rather, it depends on a complex interplay of project-specific factors including functional requirements, timeline constraints, budget considerations, site conditions, and sustainability goals.</p>
      
      <p class="mb-4">By understanding the inherent properties, advantages, and limitations of each material, engineers can make informed decisions that optimize structural performance while meeting broader project objectives. In many cases, the most effective solution involves thoughtful integration of both materials in ways that leverage their complementary strengths.</p>
      
      <p class="mb-4">As the construction industry continues to evolve, innovations in material science, fabrication techniques, and computational design will further expand the possibilities for both steel and concrete structures, blurring the boundaries between these traditional material categories and enabling increasingly optimized solutions.</p>
    `,
    author: 'Eng. David Mwangi',
    date: 'February 10, 2023',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1085&auto=format&fit=crop',
    category: 'Materials',
    slug: 'steel-vs-concrete',
    tags: ['Materials', 'Comparison', 'Construction', 'Design']
  },
  {
    title: 'The Role of AI in Structural Engineering',
    content: `
      <p class="mb-4">Artificial intelligence and machine learning are revolutionizing structural analysis, design optimization, and risk assessment. This article explores how AI is transforming the field of structural engineering.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The AI Revolution in Structural Engineering</h2>
      
      <p class="mb-4">Artificial intelligence (AI) is radically transforming virtually every industry, and structural engineering is no exception. From design conceptualization to construction monitoring and performance assessment, AI technologies are enhancing efficiency, accuracy, and innovation across the entire structural engineering workflow.</p>
      
      <p class="mb-4">This transformation comes at a critical time for the industry, which faces mounting pressure to deliver increasingly complex structures under tighter budgets and timelines, all while improving sustainability and resilience. AI offers powerful tools to address these challenges, enabling engineers to analyze vast datasets, optimize designs, and predict structural behavior with unprecedented precision.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="AI structural analysis" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">AI is enabling more sophisticated structural analysis and optimization</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">AI-Powered Structural Analysis</h2>
      
      <p class="mb-4">Traditional structural analysis methods, while powerful, often require significant computational resources and time, particularly for complex non-linear analyses. Machine learning algorithms are now being employed to accelerate these processes, developing surrogate models that can predict structural responses with remarkable accuracy in a fraction of the time required by conventional finite element analysis.</p>
      
      <p class="mb-4">Deep learning techniques, particularly neural networks, have proven especially effective for modeling complex structural behaviors that are difficult to capture with traditional analytical approaches. These include soil-structure interaction, material non-linearities, and dynamic responses to extreme loads such as earthquakes or wind events.</p>
      
      <p class="mb-4">Perhaps most impressively, AI systems can continuously improve their accuracy by learning from new data, whether generated through physical testing or additional simulations. This creates a virtuous cycle where analytical capabilities become increasingly refined and reliable over time.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Design Optimization and Generative Design</h2>
      
      <p class="mb-4">AI is revolutionizing structural design through advanced optimization algorithms and generative design techniques. Unlike traditional optimization approaches that might explore a limited design space, AI-powered systems can analyze thousands or even millions of potential design variations, identifying optimal solutions that human engineers might never discover.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop" alt="Generative design example" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Generative design powered by AI can create highly optimized structural forms</p>
      </div>
      
      <p class="mb-4">Genetic algorithms, for instance, mimic evolutionary processes to iteratively improve designs based on predefined performance criteria. These might include minimizing material usage, maximizing structural efficiency, optimizing constructability, or balancing multiple competing objectives simultaneously.</p>
      
      <p class="mb-4">Generative design takes this concept further by using AI to create entirely new design solutions based on specified constraints and goals. Rather than merely optimizing a predetermined structural form, generative design can produce novel configurations that might never have been conceived through traditional design approaches.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Risk Assessment and Structural Health Monitoring</h2>
      
      <p class="mb-4">AI is transforming how engineers assess structural risk and monitor the health of existing structures. Machine learning algorithms can analyze data from sensors embedded in bridges, buildings, and other infrastructure to detect anomalies and predict potential failures before they occur.</p>
      
      <p class="mb-4">Computer vision techniques allow AI systems to analyze images and video footage of structures, identifying cracks, deformations, or other signs of distress that might indicate structural problems. This capability is particularly valuable for inspecting difficult-to-access structures or conducting rapid post-disaster assessments.</p>
      
      <p class="mb-4">Predictive analytics powered by AI can forecast how structures will perform over time, accounting for factors such as material degradation, loading conditions, and environmental exposures. This enables more proactive maintenance strategies and lifecycle management, potentially extending the service life of critical infrastructure.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop" alt="Structural health monitoring" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">AI-powered structural health monitoring systems can detect potential issues before they become critical</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Construction Monitoring and Quality Control</h2>
      
      <p class="mb-4">The construction phase of structural engineering projects is benefiting significantly from AI technologies. Computer vision systems can automatically monitor construction progress, comparing as-built conditions with design models to identify discrepancies or quality issues in real-time.</p>
      
      <p class="mb-4">These systems can verify proper reinforcement placement, check dimensional accuracy, and ensure that critical structural elements are installed correctly. By detecting construction errors early, AI systems help prevent costly rework and potential safety issues.</p>
      
      <p class="mb-4">Additionally, AI-powered scheduling and resource optimization tools are improving construction efficiency, analyzing factors such as weather forecasts, material deliveries, and crew availability to minimize delays and maximize productivity.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Knowledge Management and Decision Support</h2>
      
      <p class="mb-4">Structural engineering relies heavily on specialized knowledge accumulated through education, experience, and research. AI systems are increasingly serving as powerful knowledge management tools, helping engineers access and apply this collective wisdom more effectively.</p>
      
      <p class="mb-4">Natural language processing allows AI to analyze vast libraries of technical literature, design codes, and project documentation, extracting relevant information to support engineering decisions. Some systems can even interpret design codes and check compliance automatically, reducing the risk of overlooking critical requirements.</p>
      
      <p class="mb-4">Case-based reasoning systems learn from past projects, identifying similarities between current design challenges and previous solutions. This institutional memory allows organizations to leverage their experience more systematically and avoid repeating past mistakes.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Challenges and Limitations</h2>
      
      <p class="mb-4">Despite its transformative potential, AI in structural engineering faces several challenges. Perhaps the most significant is the "black box" nature of many AI algorithms, particularly deep learning models. The inability to fully understand or explain how these systems reach their conclusions raises concerns about reliability and professional responsibility.</p>
      
      <p class="mb-4">Data quality and availability represent another major limitation. AI systems require large, high-quality datasets for training, which can be difficult to obtain in an industry where each project is unique and data sharing is limited by confidentiality concerns and fragmented information systems.</p>
      
      <p class="mb-4">There are also questions about liability and professional standards in an AI-augmented workflow. If an AI system contributes to a design decision that later proves problematic, who bears responsibility? How should regulatory frameworks evolve to address these new technologies while ensuring public safety?</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop" alt="AI and human collaboration" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">The most effective approach combines AI capabilities with human engineering judgment</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The Future: AI-Human Collaboration</h2>
      
      <p class="mb-4">The most promising vision for AI in structural engineering is not one where algorithms replace human engineers, but rather where AI and humans collaborate, each contributing their unique strengths. AI excels at processing vast datasets, identifying patterns, and exploring large design spaces—tasks that human engineers find challenging or time-consuming.</p>
      
      <p class="mb-4">Human engineers, meanwhile, bring creativity, contextual understanding, ethical judgment, and the ability to communicate with stakeholders—capabilities that remain beyond current AI systems. By combining these complementary strengths, AI-human teams can achieve results superior to what either could accomplish alone.</p>
      
      <p class="mb-4">In this collaborative future, AI will increasingly handle routine analytical tasks and computational heavy lifting, freeing human engineers to focus on higher-level problem-solving, innovation, and client interaction. The most successful firms will be those that effectively integrate AI tools into their workflows while continuing to develop their human engineers' unique capabilities.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Artificial intelligence is undoubtedly transforming structural engineering, offering powerful new tools for analysis, optimization, risk assessment, and knowledge management. While challenges remain regarding explainability, data availability, and professional standards, the potential benefits are too significant to ignore.</p>
      
      <p class="mb-4">As AI technologies continue to mature and industry adoption increases, we can expect to see more innovative, efficient, and sustainable structural solutions. Engineers who embrace these technologies while continuing to develop their uniquely human capabilities will be best positioned to thrive in this evolving landscape.</p>
      
      <p class="mb-4">The future of structural engineering lies not in choosing between human expertise and artificial intelligence, but in finding the optimal integration of both—leveraging AI's computational power while drawing on human creativity, judgment, and contextual understanding to create structures that better serve society's needs.</p>
    `,
    author: 'Eng. Phares O. Atai',
    date: 'January 5, 2023',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    category: 'Technology',
    slug: 'ai-in-structural-engineering',
    tags: ['AI', 'Technology', 'Innovation', 'Analysis']
  },
  {
    title: 'Resilient Infrastructure for Climate Change',
    content: `
      <p class="mb-4">This article explores strategies for designing and building infrastructure systems that can withstand the increasing frequency and intensity of climate-related hazards in an era of global climate change.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The Climate Resilience Imperative</h2>
      
      <p class="mb-4">Climate change represents one of the most profound challenges facing infrastructure systems worldwide. Rising temperatures, changing precipitation patterns, increasing storm intensity, and sea level rise are already stressing buildings, transportation networks, water systems, and energy infrastructure beyond their original design parameters.</p>
      
      <p class="mb-4">The financial implications of these impacts are staggering. According to various estimates, climate-related disasters cause hundreds of billions in damages annually, with infrastructure failures accounting for a significant portion of these costs. Beyond direct damage, infrastructure failures cascade through economies and communities, disrupting essential services and impeding recovery efforts.</p>
      
      <p class="mb-4">In this context, designing for resilience—the ability to withstand, adapt to, and rapidly recover from climate-related stresses—has become an essential consideration for infrastructure planning, design, and management. This approach marks a significant shift from traditional practices that relied heavily on historical climate data and assumed relatively stable environmental conditions.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1545236085-1467c5536d99?q=80&w=1135&auto=format&fit=crop" alt="Climate resilient infrastructure" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Climate-resilient infrastructure must withstand increasingly extreme weather events</p>
      </div>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Understanding Climate Risks</h2>
      
      <p class="mb-4">Effective resilience strategies begin with comprehensive climate risk assessment. This process involves identifying potential hazards—such as flooding, extreme heat, drought, and wind events—and evaluating their likelihood and potential impacts on specific infrastructure assets or systems.</p>
      
      <p class="mb-4">Climate modeling plays a crucial role in this assessment, providing projections of how key climate variables may change over an infrastructure asset's lifetime. However, these models inherently contain uncertainties, particularly at the local scale most relevant to infrastructure planning. Advanced techniques such as downscaling can help bridge this gap, but some level of uncertainty remains inevitable.</p>
      
      <p class="mb-4">Given these uncertainties, robust risk assessment typically considers multiple climate scenarios and timeframes. This approach helps identify potential vulnerabilities across a range of possible futures, enabling more comprehensive and flexible adaptation strategies.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Design Strategies for Climate Resilience</h2>
      
      <p class="mb-4">Once climate risks are understood, a variety of design strategies can enhance infrastructure resilience. These approaches generally fall into several categories, often implemented in combination to address multiple hazards and timeframes.</p>
      
      <p class="mb-4"><strong>Robust Design:</strong> This approach involves "hardening" infrastructure to withstand more extreme conditions than historically experienced. Examples include elevating buildings and critical equipment above projected flood levels, strengthening structures to resist higher wind loads, and using materials that can withstand higher temperatures and more frequent freeze-thaw cycles.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop" alt="Robust infrastructure design" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Robust design anticipates more extreme conditions than historical precedents</p>
      </div>
      
      <p class="mb-4"><strong>Redundancy and Diversity:</strong> Redundant systems provide backup capacity that can maintain functionality even if primary systems fail. Diverse systems incorporate multiple approaches to meeting the same need, reducing vulnerability to any single point of failure. Together, these strategies enhance overall system resilience by preventing cascading failures and enabling continued operation during disruptions.</p>
      
      <p class="mb-4"><strong>Flexibility and Adaptability:</strong> Given the inherent uncertainties in climate projections, designing infrastructure that can be modified or upgraded over time represents a pragmatic approach to resilience. This might include designing foundations that can accommodate future elevations, installing modular components that can be easily replaced or upgraded, or reserving space for future protective measures.</p>
      
      <p class="mb-4"><strong>Nature-Based Solutions:</strong> Natural systems often provide effective and cost-efficient resilience benefits. Restored wetlands and mangroves can buffer coastal areas from storm surge, urban green spaces can reduce heat island effects and manage stormwater, and forest management can mitigate wildfire risks. These approaches typically offer co-benefits beyond resilience, including carbon sequestration, habitat provision, and recreational opportunities.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Resilient Infrastructure Systems</h2>
      
      <p class="mb-4">While individual assets require resilience, system-level approaches often yield the greatest benefits. Transportation networks, energy grids, water systems, and communication infrastructure all consist of interconnected components that must function collectively to provide essential services.</p>
      
      <p class="mb-4"><strong>Transportation Infrastructure:</strong> Climate-resilient transportation systems incorporate redundant routes, elevated or protected critical links, and materials suited to changing temperature and precipitation regimes. Adaptive management plans ensure that maintenance schedules and emergency response protocols adjust to evolving climate conditions and incorporate lessons from disruptive events.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1085&auto=format&fit=crop" alt="Resilient transportation infrastructure" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Resilient transportation systems incorporate redundant routes and protected critical links</p>
      </div>
      
      <p class="mb-4"><strong>Water Infrastructure:</strong> Resilient water systems balance engineered and natural approaches to manage increasing hydrological variability. These might include expanding reservoir capacity, implementing water reuse systems, protecting watersheds, restoring floodplains, and upgrading stormwater management to accommodate more intense precipitation events. Decentralized systems can enhance resilience by reducing reliance on vulnerable centralized facilities.</p>
      
      <p class="mb-4"><strong>Energy Infrastructure:</strong> Power systems face numerous climate challenges, from reduced generation efficiency at higher temperatures to increased transmission line losses and growing cooling demands. Resilience strategies include diversifying generation sources, implementing microgrids and storage systems, hardening critical facilities, and enhancing vegetation management around transmission corridors. Demand management programs can also reduce stress on systems during extreme events.</p>
      
      <p class="mb-4"><strong>Buildings and Urban Systems:</strong> The built environment requires comprehensive resilience approaches that address multiple hazards. These include passive cooling strategies to reduce vulnerability to heat waves, stormwater management features to mitigate flooding risks, and structural enhancements to withstand extreme winds. Urban planning decisions—such as limiting development in high-risk areas and preserving green spaces—play a crucial role in long-term resilience.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Implementation Challenges and Enabling Factors</h2>
      
      <p class="mb-4">Despite growing recognition of its importance, implementing climate-resilient infrastructure faces numerous challenges. These include limited resources for upfront investments, fragmented governance structures, outdated regulations and standards based on historical climate conditions, and political pressures favoring short-term considerations over long-term resilience.</p>
      
      <p class="mb-4">Several factors can help overcome these barriers. Updated design standards and building codes that incorporate forward-looking climate projections provide clear guidelines for resilient design. Financial incentives—such as insurance premium reductions, tax benefits, or preferential lending terms for resilient projects—can help justify higher initial costs. Public-private partnerships can leverage complementary resources and capabilities to implement ambitious resilience initiatives.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="Infrastructure planning" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-gray-600 mt-2 italic">Long-term resilience planning requires collaboration across multiple stakeholders</p>
      </div>
      
      <p class="mb-4">Perhaps most importantly, effective stakeholder engagement and community participation ensure that resilience initiatives reflect local priorities and knowledge. Communities often possess valuable insights about local vulnerabilities and potential solutions. Involving them in planning and implementation increases the likelihood that resilience measures will address their most pressing needs and gain necessary political support.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">The Economic Case for Resilience</h2>
      
      <p class="mb-4">While resilient infrastructure often requires higher upfront investment, the economic case for these investments is increasingly compelling. Numerous studies indicate that every dollar invested in resilience yields multiple dollars in avoided damages and recovery costs. For instance, research by the National Institute of Building Sciences suggests that hazard mitigation investments can yield benefits four to six times their cost.</p>
      
      <p class="mb-4">Beyond avoided damages, resilient infrastructure generates numerous co-benefits. These include reduced insurance premiums, lower maintenance and operating costs, improved service reliability, enhanced property values, and various environmental and social benefits. When these factors are incorporated into economic analyses, the case for resilience investments becomes even stronger.</p>
      
      <p class="mb-4">Importantly, the costs of inaction are escalating as climate impacts intensify. Infrastructure decisions made today will influence vulnerability for decades to come. Given the long lifespans of most infrastructure assets, incorporating resilience considerations into current investments represents a prudent strategy for managing long-term risks and costs.</p>
      
      <h2 class="text-2xl font-bold text-fe-blue mt-8 mb-4">Conclusion: Building a Resilient Future</h2>
      
      <p class="mb-4">Climate change presents unprecedented challenges for infrastructure systems worldwide. Rising temperatures, changing precipitation patterns, and more frequent extreme events are already stressing infrastructure beyond its design parameters, with impacts projected to intensify in coming decades.</p>
      
      <p class="mb-4">Responding effectively to these challenges requires a fundamental shift in how we plan, design, build, and manage infrastructure. Rather than relying exclusively on historical climate data, forward-looking approaches must anticipate changing conditions and incorporate flexibility to address uncertainties. Rather than optimizing for efficiency under normal conditions, systems must balance efficiency with redundancy and robustness to maintain functionality during disruptions.</p>
      
      <p class="mb-4">While the transition to climate-resilient infrastructure entails significant challenges, the costs of inaction far exceed those of proactive adaptation. By embracing innovative design approaches, updating standards and regulations, engaging stakeholders effectively, and making strategic investments today, we can build infrastructure systems capable of withstanding the climate challenges of tomorrow.</p>
      
      <p class="mb-4">The path toward resilient infrastructure is not merely a technical challenge but a governance and social one as well. Success will require collaboration across disciplines, sectors, and jurisdictions, as well as meaningful engagement with the communities these systems serve. By rising to this challenge, we can create infrastructure that not only withstands climate threats but supports thriving, sustainable communities for generations to come.</p>
    `,
    author: 'Dr. Sarah Nyambura',
    date: 'December 12, 2022',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1545236085-1467c5536d99?q=80&w=1135&auto=format&fit=crop',
    category: 'Sustainability',
    slug: 'resilient-infrastructure-climate-change',
    tags: ['Climate Change', 'Resilience', 'Infrastructure', 'Sustainability']
  }
];

// ArticleDetail Component
const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<typeof articlesData[0] | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<typeof articlesData>([]);

  useEffect(() => {
    // Find the current article
    const currentArticle = articlesData.find(a => a.slug === slug);
    
    if (currentArticle) {
      setArticle(currentArticle);
      
      // Find related articles (same category or shared tags)
      const related = articlesData
        .filter(a => 
          a.slug !== slug && 
          (a.category === currentArticle.category || 
           a.tags?.some(tag => currentArticle.tags?.includes(tag)))
        )
        .slice(0, 3); // Limit to 3 related articles
      
      setRelatedArticles(related);
      
      // Scroll to top when article changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!article) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl">Article not found</h1>
          <Link to="/articles" className="text-fe-teal hover:underline mt-4 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/articles" className="inline-flex items-center text-fe-teal hover:text-fe-blue mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-fe-blue mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center">
                <span className="bg-fe-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags?.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Sharing and Actions */}
            <div className="mt-6 flex flex-wrap justify-between items-center py-4 border-t border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-fe-teal">
                  <Bookmark className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Save</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-fe-teal">
                  <Share2 className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-fe-teal">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Comment</span>
                </button>
              </div>
              <Link 
                to="/contact" 
                className="button-primary mt-4 sm:mt-0"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-fe-blue mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-fe-blue mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/articles" 
                className="inline-flex items-center text-fe-teal hover:text-fe-blue font-medium"
              >
                View All Articles
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default ArticleDetail;
