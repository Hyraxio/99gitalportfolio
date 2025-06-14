import { Artwork, Artist } from '../types';

export const artist: Artist = {
  name: "Alexandra Chen",
  bio: "Alexandra Chen is a contemporary digital artist based in San Francisco, specializing in surreal landscapes and abstract compositions. With over 8 years of experience in digital art, her work explores the intersection of technology and nature, creating immersive visual experiences that challenge traditional perceptions of reality. Her pieces have been featured in numerous galleries and digital exhibitions worldwide, earning recognition for their innovative use of color and form.",
  headshot: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  statement: "My artistic journey began with traditional painting, but I found my true voice through digital mediums. Over the past eight years, I've developed a unique style that blends organic forms with geometric precision, exploring themes of transformation and connection. Each piece represents a dialogue between the natural world and our digital existence. Through my work, I aim to create spaces where viewers can pause, reflect, and discover new perspectives on the familiar. My technical skills have evolved from basic digital painting to complex 3D modeling and mixed media approaches, allowing me to push the boundaries of what digital art can achieve. Looking forward, I'm excited to explore augmented reality installations and collaborative projects that bridge the gap between digital and physical art spaces. My goal is to continue growing as an artist while contributing to the evolving conversation about art in our increasingly digital world.",
  email: "alexandra.chen.art@email.com",
  socialLinks: {
    instagram: "https://instagram.com/alexandrachen_art",
    behance: "https://behance.net/alexandrachen",
    website: "https://alexandrachen.art"
  }
};

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Digital Oasis",
    medium: "Digital Painting, Photoshop",
    dimensions: "3840 × 2160 pixels",
    creationDate: "March 2024",
    imageUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "PNG, 2.1MB, 300 DPI",
    reflection: "Digital Oasis represents my ongoing exploration of paradoxical spaces where technology and nature coexist. The creative process involved layering multiple digital brushes to achieve organic textures that feel both synthetic and natural. The biggest technical challenge was balancing the luminous quality of the digital elements with the earthiness of the landscape. This piece taught me about the importance of contrast in creating visual depth, and I discovered new techniques for blending modes that I continue to use in my current work. It marked a significant shift in my artistic approach, moving from purely realistic representations to more conceptual interpretations of space and environment.",
    featured: true
  },
  {
    id: 2,
    title: "Neon Dreams",
    medium: "3D Modeling, Blender & Photoshop",
    dimensions: "2560 × 1440 pixels",
    creationDate: "February 2024",
    imageUrl: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "JPG, 1.8MB, 300 DPI",
    reflection: "This cyberpunk-inspired piece challenged me to work with complex lighting systems and volumetric effects. The technical complexity of rendering multiple light sources while maintaining visual clarity required extensive experimentation with different rendering engines. I learned to appreciate the subtle interplay between color temperature and mood, discovering how slight adjustments in hue can dramatically alter the emotional impact of a scene. The project pushed my understanding of 3D space and helped me develop a more sophisticated approach to digital lighting. This work represents a milestone in my technical development and opened new possibilities for future projects involving complex environmental storytelling.",
    featured: true
  },
  {
    id: 3,
    title: "Abstract Flow",
    medium: "Digital Mixed Media",
    dimensions: "4096 × 2304 pixels",
    creationDate: "January 2024",
    imageUrl: "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "PNG, 2.4MB, 300 DPI",
    reflection: "Abstract Flow emerged from a period of experimentation with fluid dynamics and procedural generation. The creative process involved developing custom brushes and using algorithmic patterns as a foundation for organic forms. The main challenge was finding the balance between controlled composition and spontaneous expression. This piece taught me about the beauty of controlled chaos and how digital tools can be used to create truly organic-feeling artwork. It represents a breakthrough in my understanding of color harmony and flow, techniques that have become central to my artistic practice. The work continues to influence my approach to abstract composition and digital mark-making.",
    featured: true
  },
  {
    id: 4,
    title: "Urban Solitude",
    medium: "Digital Photography Manipulation",
    dimensions: "3200 × 1800 pixels",
    creationDate: "December 2023",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "JPG, 1.6MB, 300 DPI",
    reflection: "Urban Solitude explores themes of isolation within connectivity, reflecting on modern urban life through digital manipulation techniques. The piece began as a series of street photography that I transformed using advanced compositing methods. The technical challenge lay in seamlessly blending multiple exposure levels while maintaining photographic authenticity. This work deepened my understanding of light behavior and shadow interaction, skills that have proven invaluable in subsequent projects. The emotional resonance of this piece surprised me, teaching me about the power of subtle digital interventions to amplify existing moods and atmospheres. It marked my transition into more conceptually driven work.",
    featured: false
  },
  {
    id: 5,
    title: "Cosmic Garden",
    medium: "Digital Painting & 3D Elements",
    dimensions: "3840 × 2160 pixels",
    creationDate: "November 2023",
    imageUrl: "https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "PNG, 2.0MB, 300 DPI",
    reflection: "This piece represents my attempt to visualize growth and transformation on a cosmic scale. The integration of 3D elements with traditional digital painting techniques created unique challenges in maintaining visual cohesion. I experimented with particle systems and custom shaders to achieve the ethereal quality of the floating elements. The project taught me about the importance of atmospheric perspective in creating depth and scale. Working on this piece helped me develop a more intuitive understanding of color relationships and how to use them to guide the viewer's attention through complex compositions. It remains one of my most technically ambitious works to date.",
    featured: false
  },
  {
    id: 6,
    title: "Mechanical Dreams",
    medium: "3D Modeling & Digital Painting",
    dimensions: "2880 × 1620 pixels",
    creationDate: "October 2023",
    imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "JPG, 1.9MB, 300 DPI",
    reflection: "Mechanical Dreams delves into the relationship between organic life and industrial design. The creative process involved extensive research into mechanical forms and their aesthetic qualities. The biggest challenge was creating a sense of life within rigid, geometric structures. This project expanded my technical skills in hard-surface modeling while exploring themes of adaptation and evolution. I learned to appreciate the beauty in functional design and how mechanical elements can convey emotion and narrative. The work represents a departure from my usual organic style, demonstrating my versatility as an artist and opening new avenues for conceptual exploration.",
    featured: false
  },
  {
    id: 7,
    title: "Ethereal Landscape",
    medium: "Digital Painting",
    dimensions: "3456 × 1944 pixels",
    creationDate: "September 2023",
    imageUrl: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "PNG, 2.2MB, 300 DPI",
    reflection: "Ethereal Landscape captures the liminal space between dream and reality, utilizing soft gradients and atmospheric effects to create an otherworldly environment. The technical focus was on mastering subtle color transitions and creating convincing atmospheric depth. The main challenge was maintaining visual interest while working within a limited color palette. This piece taught me about the power of simplicity in composition and how restraint can enhance emotional impact. It represents a return to pure digital painting after experimenting with 3D elements, reaffirming my love for the direct, intuitive nature of digital brushwork. The work continues to inform my approach to environmental design.",
    featured: false
  },
  {
    id: 8,
    title: "Data Stream",
    medium: "Procedural Art & Digital Effects",
    dimensions: "3840 × 2160 pixels",
    creationDate: "August 2023",
    imageUrl: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "JPG, 1.7MB, 300 DPI",
    reflection: "Data Stream explores the visualization of information flow in our digital age. Created using procedural generation techniques, this piece challenged me to work with algorithmic processes while maintaining artistic control. The technical complexity involved coding custom generators and learning to guide randomness toward aesthetic goals. This project significantly expanded my understanding of procedural art and how mathematical processes can create compelling visual narratives. The work taught me patience and the value of iterative refinement in achieving desired outcomes. It represents a fusion of artistic vision with technical innovation, opening new possibilities for my future work in generative art.",
    featured: false
  },
  {
    id: 9,
    title: "Bioluminescent Deep",
    medium: "Digital Painting & Particle Effects",
    dimensions: "4096 × 2304 pixels",
    creationDate: "July 2023",
    imageUrl: "https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "PNG, 2.3MB, 300 DPI",
    reflection: "This underwater fantasy explores the mysterious beauty of deep ocean environments, focusing on bioluminescent organisms and their ethereal glow. The creative process involved studying real marine biology to create believable yet fantastical creatures. The technical challenge was simulating underwater lighting and particle behavior convincingly. This piece deepened my appreciation for natural forms and their inherent beauty, influencing my approach to organic design. I learned advanced techniques for creating convincing glow effects and underwater caustics. The work represents my growing confidence in environmental storytelling and my ability to create immersive, believable fantasy worlds through digital art.",
    featured: false
  },
  {
    id: 10,
    title: "Crystalline Structure",
    medium: "3D Modeling & Ray Tracing",
    dimensions: "3200 × 1800 pixels",
    creationDate: "June 2023",
    imageUrl: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    fileSpecs: "JPG, 1.5MB, 300 DPI",
    reflection: "Crystalline Structure examines the mathematical beauty found in natural formations, using precise 3D modeling to explore geometric perfection. The project required extensive research into crystallography and mineral formation processes. The main technical challenge was achieving photorealistic material properties and complex light refraction through the crystal surfaces. This work taught me about the intersection of art and science, showing how natural phenomena can inspire purely aesthetic exploration. I developed advanced skills in material creation and lighting setup that have become fundamental to my 3D work. The piece represents my commitment to technical excellence while pursuing conceptual depth in my artistic practice.",
    featured: false
  }
];