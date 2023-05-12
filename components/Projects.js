import SectionHeader from "./SectionHeader"
import Project from "./Project"

const Projects = () => {
    return <div>
        <SectionHeader>My Work:</SectionHeader>
        <Project name={"IST 363 Final Project - Subaru"} slug={"ist363-final-project"} href={"https://ist-363-spring2023-subaru-git-main-wreale.vercel.app/"}>This is my final project for my Advanced Front-End Web Dev Course. After really enjoying my intro course, I enrolled in this class for the spring of my sophomore year. Throughout the course we focused more on JavaScript, while also learning how to use React, Next.js, Vercel, Sass, and WordPress. This final project incorporates all those skills.</Project>
        <Project name={"IST 263 Final Project - Ecommerce Guide"} slug={"ist263-final-project"} href={"https://wreale.github.io/ist263/projectv2/index.html"}>This was my final project for my Intro to Front-End Web Dev course. Taking this course the fall of my sophomore year, it was my first real introduction to web development. Throughout the course we learned the basics of vanilla HTML, CSS and JavaScript. I used all the skills I'd developed throughout the semester to create this final project. The end result was a 3 page static website, covering the basics of running your own E-Commerce business.</Project>
    </div>
}
export default Projects 