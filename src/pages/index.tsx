import Graduation from "@/components/graduation/Graduation";
import Profile from "@/components/profile/Profile";
import Skills from "@/components/skills/Skills";
import Contacts from "@/components/contacts/Contacts"
import Experiences from "@/components/experiences/Experiences";
import Courses from "@/components/courses/Courses";
import NameImage from "@/components/name-image/NameImage";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="container">
      <div className="left-side">
        <NameImage />
        <Graduation />
        <Profile />
        <Skills />
        <Contacts />
      </div>

      <div className="right-side">
        <Experiences/>
        <Courses/>
      </div>
      <Footer/>
    </div>
  )
}
