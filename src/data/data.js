import { cms, asset } from './images'

export const nav = [
  { label: 'Home', items: ['Home One', 'Home Two', 'Home Three'] },
  { label: 'Courses', items: ['Free courses', 'Paid courses'] },
  { label: 'Pages', items: ['About One', 'About Two', 'Course One', 'Course Two', 'FAQ', 'Pricing One', 'Career', 'Events', 'Team'] },
  { label: 'Blog', items: ['Blog One', 'Blog Two', 'Blog Three'] },
  { label: 'Contact', items: ['Contact One', 'Contact Two', 'Contact Three'] },
]
export const categories = [
  ['pen', 'Creative web design', 8], ['chart', 'Finance accounting', 10], ['code', 'IT and software', 5],
  ['mega', 'Digital marketing', 4], ['globe', 'Web development', 8], ['doc', 'Content writing', 3],
]
export const tabs = ['All courses', 'Design', 'Development', 'Management', 'Finance']
const c = (cat, title, rate, rev, lessons, students, price, img) =>
  ({ cat, title, rate, rev, lessons, students, price, img: cms(img) })
export const courses = [
  c('Management', 'Crisis management and problem-solving strategies', '4.88', '210', 6, '8k', 'Free', '6710c8cf232065a7046261dc_Course%20Image-7.webp'),
  c('Design', 'Advanced photoshop techniques for designers', '5.00', '1.2K', 8, '25k', 'Free', '6710bcf4976ba1d072d8b476_Course%20Image-4-2.webp'),
  c('Finance', 'Operations management and process improvement', '5.00', '812', 12, '23k', 'Free', '66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp'),
  c('Development', 'Database integration with MongoDB', '4.49', '756', 10, '7k', '$59', '66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp'),
  c('Management', 'Risk management and business continuity', '4.88', '210', 3, '8k', '$49', '66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp'),
  c('Development', 'Full-stack development with the MERN stack', '5.00', '985', 12, '22k', '$72', '66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp'),
  c('Design', 'Design systems and pattern libraries', '5.00', '1.2K', 8, '25k', '$99', '66fe66442929de6e874b3284_Course%20Image.webp'),
  c('Design', 'Learn interactive Web Design by building real projects', '4.49', '756', 12, '23k', '$79', '66eba4fcd2cfcf11fe70ccfe_Course%20Small%20Image-4.webp'),
  c('Development', 'Building single page applications with angular', '5.00', '328', 6, '12k', 'Free', '66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp'),
  c('Management', 'Grow your brand and reach your audience', '4.88', '210', 10, '8k', '$49', '66eb9fb02faddeb03288c28e_Course%20Small%20Image-2.webp'),
  c('Finance', 'The complete guide to personal and business finance', '4.88', '210', 10, '8k', '$99', '66eb9ece25b132baef1462d5_Course%20Small%20Image-3.webp'),
]
export const trending = [8, 3, 4, 5].map((i) => courses[i])
export const why = ['Learn anything', 'Save money', 'Flexible courses', 'Unlimited certificate']
export const testimonials = [
  { name: 'Linda Grady', role: 'Co-assistant manager', img: asset('66cd560b74d8d4d4ed334d02_Testimonial%20Author%20Image.avif'),
    text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.' },
  { name: 'Jim Adams', role: 'Designer', img: asset('66cd64ef67641295ddd2ffc9_Testimonial%20Author%20Image-2.avif'),
    text: 'Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.' },
]
export const footerCols = {
  'Quick links': ['Home', 'Events', 'Career', 'Instructor'],
  'Popular courses': ['Finance', 'Management', 'Design', 'Web development'],
  Company: ['About', 'Courses', 'Blog', 'Contact', 'License', 'Pricing', '404'],
  CMS: ['Course details', 'Instructor details', 'Blog details'],
}
